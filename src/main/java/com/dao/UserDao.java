package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.model.Users;

@Component
public interface UserDao extends JpaRepository<Users, Long> {

	Users findByEmail(String email);


}
