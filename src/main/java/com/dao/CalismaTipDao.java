package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import com.model.Calisma_tipi;

@Component
public interface CalismaTipDao extends JpaRepository<Calisma_tipi, Long> {

}
