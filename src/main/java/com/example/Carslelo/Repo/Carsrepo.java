package com.example.Carslelo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.Carslelo.Entiry.CarsEntity;

public interface Carsrepo extends JpaRepository<CarsEntity, Integer> {

    boolean existsByCarNumber(String carNumber);
}
