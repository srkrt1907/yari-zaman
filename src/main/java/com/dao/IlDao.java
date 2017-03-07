package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import com.model.Il;
import com.model.Roles;


@Component
public interface IlDao extends JpaRepository<Il, Long> {

}
