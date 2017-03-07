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
public class Users {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long user_id;
	
	
	 private String name;
	 private String surname;
	 private String email;

	private String telefon;
	 private String password;
	 private String passwordConfirm;
	 private boolean enabled;

	 @ManyToOne
	 @JoinColumn(name = "role_id")
	private Roles roles;

	 public Roles getRole() {
			return roles;
		}

		public void setRole(Roles userRole) {
			this.roles = userRole;
		}
	public long getId() {
		return user_id;
	}

	public void setId(long id) {
		this.user_id = id;
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
  

      

      public String getPassword() {
          return password;
      }

      public void setPassword(String password) {
          this.password = password;
      }

      @Transient
      public String getPasswordConfirm() {
          return passwordConfirm;
      }

      public void setPasswordConfirm(String passwordConfirm) {
          this.passwordConfirm = passwordConfirm;
      }


  	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
}
