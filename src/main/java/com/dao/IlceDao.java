package com.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.model.ilce;

@Component
public interface IlceDao extends JpaRepository<ilce, Long> {

}
