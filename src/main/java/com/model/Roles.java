package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Roles {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long role_Id;
	
	String role_type;

	public long getId() {
		return role_Id;
	}

	public void setId(long id) {
		this.role_Id = id;
	}

	 public String getName() {
	        return role_type;
	    }

	    public void setName(String role_type) {
	        this.role_type = role_type;
	    }


}
