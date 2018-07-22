package com.olib.security.jwt.service;

import java.util.List;

import com.olib.security.jwt.model.User;

public interface UserService {
    User findById(Long id);
    User findByUsername(String username);
    List<User> findAll ();
}
