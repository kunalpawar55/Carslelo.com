package com.example.Carslelo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Carslelo.Entiry.CarsEntity;
import com.example.Carslelo.Repo.Carsrepo;

import jakarta.validation.ValidationException;
@Service
public class CarsService {

    @Autowired
    private Carsrepo repo;

    public CarsEntity postCardata(CarsEntity cars) {

        if (repo.existsByCarNumber(cars.getCarNumber())) {
            throw new ValidationException("Car Already Registered");
        }
        if(cars.getCarprice()==0.0)
        {
        	throw new ValidationException("please put amount");
        }
        

        repo.save(cars);
        return cars;
    }

    public List<CarsEntity> getallcars() {
        return repo.findAll();
    }

    public CarsEntity getCarbyid(int id) {
        return repo.findById(id).orElse(null);
    }
    public  void Deletecarbyid(int id)
    {
    	if(!repo.existsById(id))
    	{
    		throw new RuntimeException("Car not available"+" "+id);
    	}
    	repo.deleteById(id);
    	
              
    }
    
}
