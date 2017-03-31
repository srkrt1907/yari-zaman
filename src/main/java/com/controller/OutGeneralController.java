package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dao.ContactUsDao;
import com.dao.UserDao;
import com.helper.GenericResponse;
import com.model.ContactUs;
import com.model.Users;



@Controller
public class OutGeneralController {

	
	@Autowired
	ContactUsDao contactUsDao;
	@Autowired
	UserDao userDao;
	
	@RequestMapping(value = "/forgotpassword" ,method = RequestMethod.POST)
	@ResponseBody
	public GenericResponse forgotpassword(@RequestBody(required=false) Users user)
	{		
			GenericResponse response = new GenericResponse();
				try {	
					Users uservo=userDao.findByEmail(user.getEmail());
					
					
					if(uservo.getTelefon().equals(user.getTelefon())){
						response.setSuccess(true);
					}
					return response;
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
					return response;
				}	
	}

	@RequestMapping(value = "/changePwdOutLogin" ,method = RequestMethod.POST)
	@ResponseBody
	public GenericResponse changePwdOutLogin(@RequestBody(required=false) Users user)
	{		
			GenericResponse response = new GenericResponse();
				try {	
					Users uservo=userDao.findByEmail(user.getEmail());
					
					
					if(user.getPassword().equals(user.getPasswordConfirm())){
						uservo.setPassword(user.getPassword());
						uservo.setPasswordConfirm(user.getPasswordConfirm());
						userDao.save(uservo);
						response.setSuccess(true);
					}
					return response;
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
					return response;
				}	
	}
	
	@RequestMapping(value = "/saveContactUs" ,method = RequestMethod.POST)
	@ResponseBody
	public GenericResponse forgotpassword(@RequestBody(required=false) ContactUs contactUs)
	{		
			GenericResponse response = new GenericResponse();
				try {	
					contactUsDao.save(contactUs);
						response.setSuccess(true);
					
					return response;
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
					return response;
				}	
	}

	
	
	
}
