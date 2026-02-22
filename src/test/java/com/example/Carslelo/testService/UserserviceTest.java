package com.example.Carslelo.testService;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.Carslelo.Entiry.RegistrationEntity;
import com.example.Carslelo.Repo.Registrationrepo;

@SpringBootTest
public class UserserviceTest {

	@Autowired
	Registrationrepo regorepo;
	
	
	@ParameterizedTest
	@ValueSource(strings ={
			"kunal@gmail.com",
			"kunalpawar@gmail.com",
			"kunalptest@gmail.com",
			"kunalpawar4957@gmail.com"
		})
	@Test
	public void testfindbyemail(String email) {
		
		Optional<RegistrationEntity> useroptional=regorepo.findByEmail(email);
		assertTrue(useroptional.isPresent());
		RegistrationEntity user=useroptional.get();
		
		assertEquals(email, user.getEmail());
		
		
	}
	
	
}
