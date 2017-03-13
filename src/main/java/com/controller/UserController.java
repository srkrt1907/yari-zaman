package com.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dao.RolesDao;
import com.dao.UserDao;
import com.google.common.base.Strings;
import com.helper.GenericResponse;
import com.model.Roles;
import com.model.Users;



@Controller
public class UserController {

	
	@Autowired
	UserDao userDao;
	
	@Autowired
	RolesDao rolesDao;
	
	
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
	
	@RequestMapping(value = "/giris" ,method = RequestMethod.POST)
	@ResponseBody
	public GenericResponse login( HttpServletRequest httpRequest,
			@RequestBody(required=false) Users user)
	{		
			HttpSession ses = httpRequest.getSession(false);
			GenericResponse response = new GenericResponse();
				try {	
				
					if(ses==null || ses.getAttribute("authenticatUser")==null){
						Users uservo=userDao.findByEmail(user.getEmail());
						if(uservo!=null&&uservo.getEmail().equals(user.getEmail())){
							ses=httpRequest.getSession();
							ses.setAttribute("authenticatUser", uservo);
							response.setSuccess(true);
						}else{
							//Kullanıcı bilgleri yanlış
						}
						
					}
					else{
						 ses.setAttribute("authenticatUser", null);
					}
					return response;
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
					return response;
				}	
	}
	@RequestMapping(value = "/cikis" ,method = RequestMethod.POST)
	@ResponseBody
	public GenericResponse logout(HttpServletRequest httpRequest,@RequestBody(required=false) Users user)
	{
			GenericResponse response = new GenericResponse();
			 HttpSession session=httpRequest.getSession(true);
			
        	session.setAttribute("authenticatUser",null);
         
			response.setSuccess(true);	
			return response;
	}
	@RequestMapping(value = "/register" ,method = RequestMethod.POST)
	@ResponseBody
	public GenericResponse register(@RequestBody(required=false) Users user)
	{
			GenericResponse response = new GenericResponse();
				try {
					
					if(user!=null&&(user.getPassword().equals(user.getPasswordConfirm()))){
						
						if(userDao.findByEmail(user.getEmail())==null){
							Roles roles=rolesDao.getOne(1L);
							
							user.setRole(roles);
							user.setEnabled(true);
							userDao.save(user);
							response.setSuccess(true);
							
						}
						else{
							//response.setMessage("Bu maille bir kullanıcı var");
						}
						
					}
					else{
						//response.setMessage("şifre eşleşmiyor.");
					}
					
					return response;
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
					return response;
				}	
	}
	
	@RequestMapping(value = "/updateUser" ,method = RequestMethod.POST)
	@ResponseBody
	public GenericResponse updateUser(@RequestBody(required=false) Users user)
	{
			GenericResponse response = new GenericResponse();
				try {
					
					if(user!=null&&(user.getPassword().equals(user.getPasswordConfirm()))){
						Users uservVo=userDao.findByEmail(user.getEmail());
						if(uservVo==null){
							user.setId(uservVo.getId());
							userDao.save(user);
							response.setSuccess(true);
							
						}
						else{
							//response.setMessage("Bu maille bir kullanıcı var");
						}
						
					}
					else{
						//response.setMessage("şifre eşleşmiyor.");
					}
					
					return response;
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
					return response;
				}	
	}
	
	@RequestMapping(value = "/getusers" ,method = RequestMethod.POST)
	@ResponseBody
	public Users  getusers(HttpServletRequest httpRequest )
	{	
		
		HttpSession ses = httpRequest.getSession(false);
				try {					
					Users user=(Users) ses.getAttribute("authenticatUser");
					return user;
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
					return null;
				}	
	}
	
	@RequestMapping(value = "/authenticatUser" ,method = RequestMethod.POST)
	@ResponseBody
	public Users  authenticatUser(HttpServletRequest httpRequest )
	{
		Users user =(Users)httpRequest.getSession().getAttribute("authenticatUser");
		return user;
	  }
	
	
	@RequestMapping(value = "/profil/changepasswithAut" ,method = RequestMethod.POST)
	@ResponseBody
	public GenericResponse  changepasswithAut(HttpServletRequest httpRequest ,@RequestBody(required=false) Users object )
	{
		
		GenericResponse response = new GenericResponse();
		Users user =(Users)httpRequest.getSession().getAttribute("authenticatUser");
		if(user.getPassword().equals(object.getPassword()))
		{
			user.setPassword(object.getPasswordConfirm());
			user.setPasswordConfirm(object.getPasswordConfirm());
			userDao.save(user);
			response.setSuccess(true);
			
		}
		
		return response;
	  }
	
	@RequestMapping(value = "/profil/changeContact" ,method = RequestMethod.POST)
	@ResponseBody
	public GenericResponse  changeContact(HttpServletRequest httpRequest ,@RequestBody(required=false) Users object )
	{
		
		GenericResponse response = new GenericResponse();
		Users user =(Users)httpRequest.getSession().getAttribute("authenticatUser");
		if(!object.getEmail().equals(null))
			user.setEmail(object.getEmail());
		if(!object.getTelefon().equals(null))
			user.setTelefon(object.getTelefon());
		
			userDao.save(user);
			response.setSuccess(true);
		
		
		return response;
	  }
	
	
}
