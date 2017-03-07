package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import com.model.Ilan;
@Component
public interface IlanDao extends JpaRepository<Ilan, Long> {

}
