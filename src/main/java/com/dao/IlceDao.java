package com.dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;

import com.model.ilce;

@Component
public interface IlceDao extends JpaRepository<ilce, Long> {
	
//	@Query("select * from ilce i where i.il_id = ?1")
//	List<ilce> getByILID(Long id);

}
