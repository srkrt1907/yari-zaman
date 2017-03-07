package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Il {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long il_id;
	
	String isim;
	
	public long getIl_id() {
		return il_id;
	}

	public void setIl_id(long il_id) {
		this.il_id = il_id;
	}

	public String getIsim() {
		return isim;
	}

	public void setIsim(String isim) {
		this.isim = isim;
	}

	

	}
