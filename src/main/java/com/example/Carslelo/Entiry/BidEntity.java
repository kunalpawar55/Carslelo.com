package com.example.Carslelo.Entiry;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.*;

@Entity
@Table(name = "bids")
public class BidEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bidId;

    @ManyToOne
    @JoinColumn(name = "car_id", nullable = false)
    private CarsEntity car;

    @Column(nullable = false)
    private Double bidAmount;

    @Column(nullable = false)
    private String bidderName;
    @Column(name = "bid_time", updatable = false)
    @CreationTimestamp
    private LocalDateTime bidTime;
    
    private String email;
    private Long phonenumber;
    

    
    
@Override
	public String toString() {
		return "BidEntity [bidId=" + bidId + ", car=" + car + ", bidAmount=" + bidAmount + ", bidderName=" + bidderName
				+ ", bidTime=" + bidTime + ", email=" + email + ", phonenumber=" + phonenumber + "]";
	}




public Long getBidId() {
		return bidId;
	}




	public void setBidId(Long bidId) {
		this.bidId = bidId;
	}




	public CarsEntity getCar() {
		return car;
	}




	public void setCar(CarsEntity car) {
		this.car = car;
	}




	public Double getBidAmount() {
		return bidAmount;
	}




	public void setBidAmount(Double bidAmount) {
		this.bidAmount = bidAmount;
	}




	public String getBidderName() {
		return bidderName;
	}




	public void setBidderName(String bidderName) {
		this.bidderName = bidderName;
	}




	public LocalDateTime getBidTime() {
		return bidTime;
	}




	public void setBidTime(LocalDateTime bidTime) {
		this.bidTime = bidTime;
	}




	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}




	public Long getPhonenumber() {
		return phonenumber;
	}




	public void setPhonenumber(Long phonenumber) {
		this.phonenumber = phonenumber;
	}




public BidEntity(CarsEntity car, Double bidAmount, String bidderName, LocalDateTime bidTime, String email,
			Long phonenumber) {
		super();
		this.car = car;
		this.bidAmount = bidAmount;
		this.bidderName = bidderName;
		this.bidTime = bidTime;
		this.email = email;
		this.phonenumber = phonenumber;
	}




public BidEntity() {
	// TODO Auto-generated constructor stub
}
}
