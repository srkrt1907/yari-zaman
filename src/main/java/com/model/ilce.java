package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class ilce {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long ilce_id;
	
	public long getIlce_id() {
		return ilce_id;
	}

	public void setIlce_id(long ilce_id) {
		this.ilce_id = ilce_id;
	}

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
