package com.example.Carslelo.Controler;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import com.example.Carslelo.Entiry.AuthResponse;
import com.example.Carslelo.Entiry.RegistrationEntity;
import com.example.Carslelo.Repo.Registrationrepo;
import com.example.Carslelo.Security.JwtService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private Registrationrepo registrationrepo;

    @Autowired
    private JwtService jwtService;   

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {

        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                request.getEmail(),
                request.getPassword()
            )
        );

        RegistrationEntity user =
            registrationrepo.findByEmail(request.getEmail())
            .orElseThrow(() ->
                new RuntimeException("Invalid email or password")
            );

        String token = jwtService.generateToken(
            user.getEmail(),
            user.getRoleType().name()
        );
        return new AuthResponse(
        	    token,
        	    user.getEmail(),
        	    user.getRoleType().name(),
        	    user.getPhonenumber(),
        	    user.getName(),
        	    user.getAcstatus().name()
        	);


    }
}
