package com.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table
public class Ilan {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int ilan_Id;
	
	 private String baslik; 
	 private String aciklama;
	 private String ilce; 
	 private String mahalle;
	 private String ucret;
	 private String ilan_tarihi;
	 private String calisma_saatleri;
	 private String calisma_tipi;
	 
	 @ManyToOne
	 @JoinColumn(name = "user_id")
	private Users user;

	 public Users getUser() {
			return user;
		}

		public void setUser(Users user) {
			this.user = user;
		}
	 
	public int getId() {
		return ilan_Id;
	}

	public void setId(int id) {
		this.ilan_Id = id;
	}
	public String getBaslik() {
		return baslik;
	}
	public void setBaslik(String baslik) {
		this.baslik = baslik;
	}
	public String getAciklama() {
		return aciklama;
	}
	public void setAciklama(String aciklama) {
		this.aciklama = aciklama;
	}
	@ManyToOne
	 @JoinColumn(name = "il_id")
	private Il il;

	 public Il getIl() {
			return il;
		}

		public void setIl(Il il) {
			this.il = il;
		}
	public String getIlce() {
		return ilce;
	}
	public void setIlce(String ilce) {
		this.ilce = ilce;
	}
	public String getMahalle() {
		return mahalle;
	}
	public void setMahalle(String mahalle) {
		this.mahalle = mahalle;
	}
	public String getUcret() {
		return ucret;
	}
	public void setUcret(String ucret) {
		this.ucret = ucret;
	}
	public String getIlan_tarihi() {
		return ilan_tarihi;
	}
	public void setIlan_tarihi(String ilan_tarihi) {
		this.ilan_tarihi = ilan_tarihi;
	}
	public String getCalisma_saatleri() {
		return calisma_saatleri;
	}
	public void setCalisma_saatleri(String calisma_saatleri) {
		this.calisma_saatleri = calisma_saatleri;
	}
	public String getCalisma_tipi() {
		return calisma_tipi;
	}
	public void setCalisma_tipi(String calisma_tipi) {
		this.calisma_tipi = calisma_tipi;
	}


	

}
