package com.olib.security.jwt.rest;

import java.io.IOException;
import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.olib.security.jwt.auth.JwtAuthenticationRequest;
import com.olib.security.jwt.auth.TokenHelper;
import com.olib.security.jwt.model.Authority;
import com.olib.security.jwt.model.User;
import com.olib.security.jwt.model.UserRequest;
import com.olib.security.jwt.model.UserTokenState;
import com.olib.security.jwt.service.CustomUserDetailsService;


@RestController
@RequestMapping( value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE )
public class AuthenticationController {

    @Autowired
    private TokenHelper tokenHelper;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(
            @RequestBody JwtAuthenticationRequest authenticationRequest,
            HttpServletResponse response
    ) throws AuthenticationException, IOException {

        // Perform the security
        final Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getUsername(),
                        authenticationRequest.getPassword()
                )
        );

        // Inject into security context
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // token creation
        User user = (User)authentication.getPrincipal();
        String jws = tokenHelper.generateToken( user.getUsername());
        int expiresIn = tokenHelper.getExpiredIn();
        
        List<Authority> authorityList = userDetailsService.findByUsername(user.getUsername()).getAuthorityList();
		// Return the token
        return ResponseEntity.ok(new UserTokenState(jws,user.getUsername(), expiresIn,authorityList));
    }
    
    @RequestMapping(value = "/logout", method = RequestMethod.POST)
    public ResponseEntity<?> deleteAuthenticationToken(
    		) throws AuthenticationException, IOException {
    	
    	SecurityContextHolder.getContext().setAuthentication(null);
    	return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @RequestMapping(value = "/refresh", method = RequestMethod.POST)
    public ResponseEntity<?> refreshAuthenticationToken(
            HttpServletRequest request,
            HttpServletResponse response,
            Principal principal
            ) {

        String authToken = tokenHelper.getToken( request );

        if (authToken != null && principal != null) {

            // TODO check user password last update
            String refreshedToken = tokenHelper.refreshToken(authToken);
            int expiresIn = tokenHelper.getExpiredIn();

            return ResponseEntity.ok(new UserTokenState(refreshedToken, expiresIn));
        } else {
            UserTokenState userTokenState = new UserTokenState();
            return ResponseEntity.accepted().body(userTokenState);
        }
    }

    @RequestMapping(value = "/change-password", method = RequestMethod.POST)
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<?> changePassword(@RequestBody PasswordChanger passwordChanger) {
        userDetailsService.changePassword(passwordChanger.oldPassword, passwordChanger.newPassword);
        Map<String, String> result = new HashMap<>();
        result.put( "result", "success" );
        return ResponseEntity.accepted().body(result);
    }

    static class PasswordChanger {
        public String oldPassword;
        public String newPassword;
    }
    
    @RequestMapping(value = "/signup",method=RequestMethod.POST)
    public ResponseEntity<?> signup(
    		@RequestBody UserRequest userRequest) {

      User existUser = this.userDetailsService.findByUsername(userRequest.getUsername());
      if (existUser != null) {
        return new ResponseEntity<User>(HttpStatus.CONFLICT);
      }
      User user = this.userDetailsService.save(userRequest);
      return new ResponseEntity<User>(user, HttpStatus.CREATED);
    }
    
    
}