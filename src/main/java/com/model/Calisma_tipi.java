package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Calisma_tipi {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int calisma_tipi_id;
	
	String c_type;

	public String getC_type() {
		return c_type;
	}

	public void setC_type(String c_type) {
		this.c_type = c_type;
	}

	public int getId() {
		return calisma_tipi_id;
	}

	public void setId(int id) {
		this.calisma_tipi_id = id;
	}

	

}
