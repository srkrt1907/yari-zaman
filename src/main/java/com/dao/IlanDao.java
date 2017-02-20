package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.model.Ilan;

public interface IlanDao extends JpaRepository<Ilan, Long> {

}
