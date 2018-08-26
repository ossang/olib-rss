package com.olib.security.jwt.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.olib.security.jwt.model.User;
import com.olib.security.jwt.repository.UserRepository;


@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public User findByUsername( String username ) throws UsernameNotFoundException {
        User u = userRepository.findByUsername( username );
        return u;
    }

    public User findById( Long id ) throws AccessDeniedException {
        Optional<User> u = userRepository.findById( id );
        if(u.isPresent()) {
        	return u.get();
        }
        return null;
    }

    public List<User> findAll() throws AccessDeniedException {
        List<User> result = userRepository.findAll();
        return result;
    }
}
