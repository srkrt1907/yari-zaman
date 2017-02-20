package com.helper;

public class GenericResponse {
	boolean success;
	boolean message;
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public boolean isMessage() {
		return message;
	}
	public void setMessage(boolean message) {
		this.message = message;
	}
	public GenericResponse() {
		super();
		success = false;
		// TODO Auto-generated constructor stub
	}

}
