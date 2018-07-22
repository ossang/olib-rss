package com.olib.security.jwt.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.olib.security.jwt.model.Authority;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {
	Authority findByName(String name);
}
