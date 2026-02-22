package com.example.Carslelo.Controler;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Carslelo.Entiry.BidEntity;
import com.example.Carslelo.Service.Bidservice;

@RestController
@RequestMapping("/bids")
@CrossOrigin("http://localhost:3000")
public class BidControler {


    @Autowired
    private Bidservice bidService;

    @PostMapping("/add/{carId}")
    public BidEntity addBid(
            @PathVariable int carId,
            @RequestBody BidEntity bid) {

        return bidService.addbid(carId, bid);
    }


    @GetMapping("/car/{carId}")
    public List<BidEntity> getBids(@PathVariable int carId) {
        return bidService.getBidsByCar(carId);
    }
    @DeleteMapping("/delete/{myid}")
    public ResponseEntity<String> deleteid(@PathVariable long myid)
    {
    	              
    	
    	bidService.deleteBid(myid);
    	return ResponseEntity.ok("Bid deleted succesfully");
    }
    
}

