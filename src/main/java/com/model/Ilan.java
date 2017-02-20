package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Ilan {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int ilan_Id;
	
	String ilan_dec;

	public int getId() {
		return ilan_Id;
	}

	public void setId(int id) {
		this.ilan_Id = id;
	}

	public String getBolum_Adi() {
		return ilan_dec;
	}

	public void setBolum_Adi(String bolum_Adi) {
		this.ilan_dec = bolum_Adi;
	}

}
