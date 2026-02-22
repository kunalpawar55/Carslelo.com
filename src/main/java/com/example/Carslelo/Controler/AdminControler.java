package com.example.Carslelo.Controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Carslelo.Entiry.BidEntity;
import com.example.Carslelo.Entiry.RegistrationEntity;
import com.example.Carslelo.Service.Bidservice;
import com.example.Carslelo.Service.RegistrationService;

@RestController
@RequestMapping("/admin")
public class AdminControler {

	@Autowired
	private Bidservice bidservice;
	@Autowired
	private RegistrationService registrationservice;
	
	@GetMapping("/getallBid")
	public List<BidEntity> getallbid()
	{
		return bidservice.getallbidcars();
	}
	@GetMapping("/getalluser")
	
	public List<RegistrationEntity> getalluser()
	{
		return registrationservice.getalllogin();
	}
	
}
