package com.example.Carslelo.Controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Carslelo.Entiry.BidEntity;
import com.example.Carslelo.Entiry.CarsEntity;
import com.example.Carslelo.Entiry.RegistrationEntity;
import com.example.Carslelo.Service.Bidservice;
import com.example.Carslelo.Service.CarsService;

@RestController()
@RequestMapping("/cars")
@CrossOrigin("http://localhost:3000/")
public class CarsControler {

	@Autowired
	private CarsService service;
	
	@Autowired
	private Bidservice service1;
	
	@GetMapping("/getallBid")
	public List<BidEntity> getallbid()
	{
		return service1.getallbidcars();
	}
	
	
	@PostMapping("/addcar")
	public CarsEntity postcardata(@RequestBody CarsEntity cars)
	{
		
		
		
		service.postCardata(cars);
		return cars;
	}
	
	@GetMapping("/getallcars")
	public List<CarsEntity> getallcars()
	{
		return service.getallcars();
	}
	
	@GetMapping("/getid/{id}")
	public ResponseEntity<CarsEntity> getbyid(@PathVariable int id)
	{
	     CarsEntity en=	service.getCarbyid(id);
	     if(en==null)
	     {
		return ResponseEntity.notFound().build();
	     }
	     return ResponseEntity.ok(en);
	}
	
	@DeleteMapping("/deletecar/{id}")
	public void detetebyid(@PathVariable int id)
	{
		service.Deletecarbyid(id);
	}
	
}
