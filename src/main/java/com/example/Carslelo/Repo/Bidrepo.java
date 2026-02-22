package com.example.Carslelo.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Carslelo.Entiry.BidEntity;

public interface Bidrepo extends JpaRepository<BidEntity, Long>{
    List<BidEntity> findByCar_Id(int carId);

}
