package com.example.Carslelo.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Carslelo.Entiry.BidEntity;
import com.example.Carslelo.Entiry.CarsEntity;
import com.example.Carslelo.Repo.Bidrepo;
import com.example.Carslelo.Repo.Carsrepo;

import jakarta.validation.ValidationException;

@Service
public class Bidservice {

    @Autowired
    private Bidrepo bidRepo;

    @Autowired
    private Carsrepo carsRepo;
   
    
    public BidEntity addbid(int carid,BidEntity en)
    {
    	 CarsEntity car = carsRepo.findById(carid).orElseThrow();
         en.setCar(car);
          if(car.getCarprice()>en.getBidAmount())
          {
        	  throw new ValidationException("Put more value than car price");
          }
         
         return bidRepo.save(en);    
         
    }

public List<BidEntity> getBidsByCar(int carId) {
    return bidRepo.findByCar_Id(carId);
}

public List<BidEntity> getallbidcars()
{
	return bidRepo.findAll();
}
public void deleteBid(long id) {
    if (!bidRepo.existsById(id)) {
        throw new RuntimeException("Bid not found with id: " + id);
    }
    bidRepo.deleteById(id);
}

}
