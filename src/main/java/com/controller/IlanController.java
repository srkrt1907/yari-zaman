package com.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import com.dao.CalismaTipDao;
import com.dao.IlDao;
import com.dao.IlanDao;
import com.dao.IlceDao;
import com.dao.UserDao;
import com.helper.GenericResponse;
import com.model.Calisma_tipi;
import com.model.Ilan;
import com.model.Users;
import com.model.Il;
import com.model.ilce;

@Controller
public class IlanController {
	@Autowired
	IlceDao ilceDao;
	
	@Autowired
	IlDao ilDao;
	
	@Autowired
	IlanDao ilanDao;
	
	@Autowired
	UserDao userDao;
	
	@Autowired
	CalismaTipDao calismaTipDao;
	
	@RequestMapping(value = "/ilanekle" ,method = RequestMethod.POST)
	@ResponseBody
	public GenericResponse ekle(@RequestBody(required=false) Ilan ilan)
	{			
				GenericResponse response = new GenericResponse();
				DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
				Date date = new Date();
				ilan.setIlan_tarihi(dateFormat.format(date));
				try {
					ilanDao.saveAndFlush(ilan);
					response.setSuccess(true);
					return response;
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
					return response;
				}	
	}
	
	
	@RequestMapping(value = "/ilanListele" ,method = RequestMethod.GET)
	@ResponseBody
	public List<Ilan>  getir()
	{
				try {					
					List<Ilan> ilan = (List<Ilan>) ilanDao.findAll();
					return ilan;
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
					return null;
				}	
	}
	
	
	@RequestMapping(value = "/ilceGetir?id={id}" ,method = RequestMethod.GET)
	@ResponseBody
	public List<ilce>  ilceGetir(@RequestParam("id") String id)
	{
				try {					

					List<ilce> ilceler = (List<ilce>) ilceDao.findAll();
					return ilceler;
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
					return null;
				}	
	}
	
	
	@RequestMapping(value = "/ilListele" ,method = RequestMethod.GET)
	@ResponseBody
	public List<Il>  getIls()
	{
				try {					
					List<Il> il = (List<Il>) ilDao.findAll();
					return il;
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
					return null;
				}	
	}
	@RequestMapping(value = "/ilanSil" ,method = RequestMethod.POST)
	@ResponseBody
	public GenericResponse sil(@RequestBody(required=false) Ilan ilan)
	{
			GenericResponse response = new GenericResponse();
				try {
//					int _id = Integer.parseInt(id);
//					Kurum kurum = new Kurum();
//					kurum.setKurum_Kodu(_id);
					ilanDao.delete(ilan);
					
					response.setSuccess(true);
					return response;
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
					return response;
				}	
	}
	
	@RequestMapping(value = "/getCalismaTip" ,method = RequestMethod.GET)
	@ResponseBody
	public List<Calisma_tipi>  getCalismaTip()
	{
			
				try {					
					List<Calisma_tipi> calisma_tipi = (List<Calisma_tipi>) calismaTipDao.findAll();
					return calisma_tipi;
				} catch (Exception e) {
					// TODO: handle exception
					e.printStackTrace();
					return null;
				}	
	}
	
	@RequestMapping(value = "/getmyilan" ,method = RequestMethod.POST)
	@ResponseBody
	public List<Ilan>   getmyilan(HttpServletRequest httpRequest )
	{
		Users user =(Users)httpRequest.getSession().getAttribute("authenticatUser");
		List<Ilan> ilan = null;
		if(user!=null){
			ilan = (List<Ilan>) ilanDao.findAll();
		}
		
		return ilan;
	  }
	
}
