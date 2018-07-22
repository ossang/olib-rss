package com.olib.security.jwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.olib.security.jwt.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername( String username );
}

