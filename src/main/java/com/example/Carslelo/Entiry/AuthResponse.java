package com.example.Carslelo.Entiry;

public class AuthResponse {

    private String token;
    private String email;
    private String role;
    private String phoneNumber;
    private String name;
    private String accountStatus;

    public AuthResponse(String token, String email, String role,
                        String phoneNumber, String name, String accountStatus) {
        this.token = token;
        this.email = email;
        this.role = role;
        this.phoneNumber = phoneNumber;
        this.name = name;
        this.accountStatus = accountStatus;
    }

    public String getToken() { return token; }
    public String getEmail() { return email; }
    public String getRole() { return role; }
    public String getPhoneNumber() { return phoneNumber; }
    public String getName() { return name; }
    public String getAccountStatus() { return accountStatus; }
}
