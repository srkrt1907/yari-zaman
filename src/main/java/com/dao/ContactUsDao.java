package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.model.ContactUs;

@Component
public interface ContactUsDao extends JpaRepository<ContactUs, Long> {



}
