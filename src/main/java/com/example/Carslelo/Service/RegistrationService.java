package com.example.Carslelo.Service;

import java.util.List;
import java.util.Optional;

import javax.management.RuntimeErrorException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.Carslelo.Entiry.RegistrationEntity;
import com.example.Carslelo.Entiry.Enum.Role;
import com.example.Carslelo.Repo.Registrationrepo;
import com.example.Carslelo.globalhandelexception.EmailAlreadyExistsException;
import com.example.Carslelo.globalhandelexception.ValidationException;
@Service
public class RegistrationService {

    @Autowired
    private Registrationrepo repo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public RegistrationEntity addLogin(RegistrationEntity en) {

    	if (repo.count() == 0) {
    	    en.setRoleType(Role.ADMIN);
    	} else {
    	    en.setRoleType(Role.CARSUSER);
    	}


        String phone = String.valueOf(en.getPhonenumber());

        if (phone.length() != 10) {
            throw new ValidationException("Phone number must be exactly 10 digits");
        }

        if (repo.existsByPhonenumber(en.getPhonenumber())) {
            throw new ValidationException("Phone number already exists");
        }

        String pass = en.getPassword();

        if (pass == null) {
            throw new ValidationException("Password cannot be null");
        }

        if (pass.length()<= 6) {
            throw new ValidationException("Password must be exactly 10 characters");
        }

        boolean hasUpperCase = pass.chars()
                .anyMatch(Character::isUpperCase);

        if (!hasUpperCase) {
            throw new ValidationException("Password must contain at least one uppercase letter");
        }

        boolean hasNumber = pass.chars()
                .anyMatch(Character::isDigit);

        if (!hasNumber) {
            throw new ValidationException("Password must contain at least one number");
        }

        if (repo.existsByEmail(en.getEmail())) {
            throw new EmailAlreadyExistsException("Email already exists");
        }
        en.setPassword(passwordEncoder.encode(en.getPassword()));
        return repo.save(en);
    }

    public List<RegistrationEntity> getalllogin() {
        return repo.findAll();
    }
    
    public RegistrationEntity updateuser(long id,RegistrationEntity regi) {
    	
RegistrationEntity userid=	repo.findById(id).orElseThrow(()->new IllegalArgumentException("ID not Found"));
    
    
   userid.setAcstatus(regi.getAcstatus());
   userid.setRoleType(regi.getRoleType());
   
      
    
    
    	return repo.save(userid);
    }
    
    public RegistrationEntity getuserbyid(long id)
    {
    	if( repo.findById(id).isEmpty())
    	{
    		throw new ValidationException("Id Not available");
    	}
    	return repo.findById(id).orElse(null);
    	
    }
    public RegistrationEntity getByName(String name) {

        RegistrationEntity entity = repo.findByName(name);

        if (entity == null) {
            throw new ValidationException("Name not found");
        }

        return entity;
    }

    
}
