package com.example.Carslelo.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Carslelo.Entiry.RegistrationEntity;

@Repository
public interface Registrationrepo extends JpaRepository<RegistrationEntity, Long> {

	 Optional<RegistrationEntity> findByEmail(String email);
	 boolean existsByEmail(String email);
     boolean existsByPhonenumber(String string);
     RegistrationEntity findByName(String name);
}
