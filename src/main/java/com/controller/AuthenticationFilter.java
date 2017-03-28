package com.controller;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

public class AuthenticationFilter extends GenericFilterBean  {
	
	Authentication auth = SecurityContextHolder.getContext().getAuthentication();
	
	   

	    public AuthenticationFilter() {
	      
	    }
	    @Override
	    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
	    	 HttpServletRequest req = (HttpServletRequest) request;
	         HttpServletResponse res = (HttpServletResponse) response;
	         HttpSession session=req.getSession(true);
	         String pageRequested=req.getRequestURL().toString();
	       
	        if( pageRequested.contains("/profil")||pageRequested.contains("profil")
	        		||pageRequested.contains("/profil.html")
	        		||pageRequested.contains("/yeniilan.html")
	        		||pageRequested.contains("/profilDuzenle2.html")
	        		||pageRequested.contains("/ilanDuzenle.html")
	        		||pageRequested.contains("/yeniilan.html")){
	            if(session.getAttribute("authenticatUser") == null){
	            
	                res.sendRedirect("http://localhost:8080/notAutentication.html"); 
	            }
	            else{
	                chain.doFilter(request, response);
	            }
	          }	
	        else if(pageRequested.contains("/login")||pageRequested.contains("/login/**")||pageRequested.contains("/login.html")){
	        	if(session.getAttribute("authenticatUser") != null){
	        		session.setAttribute("authenticatUser",null);
	            }
	        	 chain.doFilter(request, response);
	        }
	        else{
	        	 chain.doFilter(request, response);
	            }

	    }
}
