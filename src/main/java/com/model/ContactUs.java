package com.model;

import java.util.Collection;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;


@Entity
@Table
public class ContactUs {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long mesaj_id;
	
	
	 private String name;
	 private String surname;
	 private String email;

	private String telefon;
	
	private String mesaj;
	

	public String getMesaj() {
		return mesaj;
	}

	public void setMesaj(String mesaj) {
		this.mesaj = mesaj;
	}

	public long getId() {
		return mesaj_id;
	}

	public void setId(long id) {
		this.mesaj_id = id;
	}

	public String getName() {
  		return name;
  	}

  	public void setName(String name) {
  		this.name = name;
  	}

  	public String getSurname() {
  		return surname;
  	}

  	public void setSurname(String surname) {
  		this.surname = surname;
  	}

  	public String getEmail() {
  		return email;
  	}

  	public void setEmail(String mail) {
  		this.email = mail;
  	}

  	public String getTelefon() {
		return telefon;
	}

	public void setTelefon(String telefon) {
		this.telefon = telefon;
	}
  

      

     
}
