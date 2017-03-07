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
	int Id;
	
	String c_type;

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		this.Id = id;
	}

	 public String getName() {
	        return c_type;
	    }

	    public void setName(String role_type) {
	        this.c_type = role_type;
	    }


}
