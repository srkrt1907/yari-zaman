package com;

import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.controller.AuthenticationFilter;

@Configuration
@EnableScheduling
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {


    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	http
    	.csrf().disable()
        .addFilterBefore(new AuthenticationFilter(), BasicAuthenticationFilter.class)
        .authorizeRequests()
		.anyRequest().permitAll()
		.and()
	.formLogin()
		.loginPage("/login")
		.permitAll();   

    }

  

 

  
}