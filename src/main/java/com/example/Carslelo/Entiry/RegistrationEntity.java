	package com.example.Carslelo.Entiry;
	
	import com.example.Carslelo.Entiry.Enum.AccountStatus;
	import com.example.Carslelo.Entiry.Enum.Role;
	import com.fasterxml.jackson.annotation.JsonIgnore;
	
	import jakarta.persistence.*;
	import jakarta.validation.constraints.Email;
	import jakarta.validation.constraints.NotBlank;
	import jakarta.validation.constraints.Pattern;
	import jakarta.validation.constraints.Size;
	
	@Entity
	@Table(name = "registration")
	public class RegistrationEntity {
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private long id;
	
	    @NotBlank(message = "Name is required")
	    @Column(nullable = false)
	    private String name;
	
	    @NotBlank(message = "Email is required")
	    @Email(message = "Invalid email format")
	    @Column(nullable = false, unique = true)
	    private String email;
	
	   
	    @Column(nullable = false)
	    private String password;
	
	    @NotBlank(message = "Phone number is required")
	    @Pattern(regexp = "\\d{10}", message = "Phone number must be exactly 10 digits")
	    @Column(nullable = false, unique = true)
	    private String phonenumber;
	
	    @Enumerated(EnumType.STRING)
	    @Column(name = "role_type", nullable = false)
	    private Role roleType;
	
	    @Enumerated(EnumType.STRING)
	    @Column(name = "account_status", nullable = false)
	    private AccountStatus acstatus;
	
	    public RegistrationEntity() {
	    }
	
	    public RegistrationEntity(
	            String name,
	            String email,
	            String password,
	            String phonenumber,
	            Role roleType,
	            AccountStatus acstatus
	    ) {
	        this.name = name;
	        this.email = email;
	        this.password = password;
	        this.phonenumber = phonenumber;
	        this.roleType = roleType;
	        this.acstatus = acstatus;
	    }
	
	    public long getId() {
	        return id;
	    }
	
	    public String getName() {
	        return name;
	    }
	
	    public void setName(String name) {
	        this.name = name;
	    }
	
	    public String getEmail() {
	        return email;
	    }
	
	    public void setEmail(String email) {
	        this.email = email;
	    }
	
	    public String getPassword() {
	        return password;
	    }
	
	    public void setPassword(String password) {
	        this.password = password;
	    }
	
	    public String getPhonenumber() {
	        return phonenumber;
	    }
	
	    public void setPhonenumber(String phonenumber) {
	        this.phonenumber = phonenumber;
	    }
	
	    public Role getRoleType() {
	        return roleType;
	    }
	
	    public void setRoleType(Role roleType) {
	        this.roleType = roleType;
	    }
	
	    public AccountStatus getAcstatus() {
	        return acstatus;
	    }
	
	    public void setAcstatus(AccountStatus acstatus) {
	        this.acstatus = acstatus;
	    }
	    @PrePersist
	    @PreUpdate
	    public void setDefaults() {
	        if (acstatus == null) acstatus = AccountStatus.ACTIVE;
	        if (roleType == null) roleType = Role.CARSUSER;
	    }
	
	    @Override
	    public String toString() {
	        return "RegistrationEntity [id=" + id +
	                ", name=" + name +
	                ", email=" + email +
	                ", phonenumber=" + phonenumber +
	                ", roleType=" + roleType +
	                ", acstatus=" + acstatus + "]";
	    }
	}
