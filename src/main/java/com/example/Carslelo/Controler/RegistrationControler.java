package com.example.Carslelo.Controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.Carslelo.Entiry.RegistrationEntity;
import com.example.Carslelo.Service.RegistrationService;

@RestController
@RequestMapping("/regi")
@CrossOrigin(origins = "http://localhost:3000") 
public class RegistrationControler {

    @Autowired
    private RegistrationService ser;

    @PostMapping("/")
    public RegistrationEntity postlogin(@RequestBody RegistrationEntity en) {
        System.out.println("DATA => " + en);
        System.out.println("PASS => " + en.getPassword());
        return ser.addLogin(en);
    }

    @GetMapping("/")
    public List<RegistrationEntity> getAllUsers() {
        return ser.getalllogin();
    }

    @GetMapping("/getid/{id}")
    public RegistrationEntity getById(@PathVariable long id) {
        return ser.getuserbyid(id);
    }

    @GetMapping("/getname/{name}")
    public RegistrationEntity getByName(@PathVariable String name) {
        return ser.getByName(name);
    }
    @PutMapping("/{myid}")
    public RegistrationEntity updateid(@PathVariable long myid,@RequestBody RegistrationEntity regi)
    {
    	return ser.updateuser(myid, regi);
    }
    
}
