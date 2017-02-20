package com.controller;

import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dao.IlanDao;
import com.helper.GenericResponse;
import com.model.Ilan;

@Controller
public class IlanController {
	
	@Autowired
	IlanDao ilanDao;
	
	
	@RequestMapping(value = "/ilanekle" ,method = RequestMethod.POST)
	@ResponseBody
	public GenericResponse ekle(@RequestBody(required=false) Ilan ilan)
	{
				GenericResponse response = new GenericResponse();
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
					List<Ilan> bolum = (List<Ilan>) ilanDao.findAll();
					return bolum;
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
	
	
	
	
}
