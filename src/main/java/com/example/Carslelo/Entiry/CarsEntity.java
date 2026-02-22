package com.example.Carslelo.Entiry;

import com.example.Carslelo.Entiry.Enum.FuelType;
import com.example.Carslelo.Entiry.Enum.GearType;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "cars")
public class CarsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
	private String carname;
	private String modelname;
	private String carNumber;
	private String carColor;
	private String location;
	private String description;
	private double carprice;
	@Enumerated(EnumType.STRING)
	private GearType geartype;
     
	@Enumerated(EnumType.STRING)
	private FuelType fueltype;

	public CarsEntity() {

	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCarname() {
		return carname;
	}

	public void setCarname(String carname) {
		this.carname = carname;
	}

	public String getModelname() {
		return modelname;
	}

	public void setModelname(String modelname) {
		this.modelname = modelname;
	}

	public String getCarNumber() {
		return carNumber;
	}

	public void setCarNumber(String carNumber) {
		this.carNumber = carNumber;
	}

	public String getCarColor() {
		return carColor;
	}

	public void setCarColor(String carColor) {
		this.carColor = carColor;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getCarprice() {
		return carprice;
	}

	public void setCarprice(double carprice) {
		this.carprice = carprice;
	}

	public GearType getGeartype() {
		return geartype;
	}

	public void setGeartype(GearType geartype) {
		this.geartype = geartype;
	}

	public FuelType getFueltype() {
		return fueltype;
	}

	public void setFueltype(FuelType fueltype) {
		this.fueltype = fueltype;
	}

	@Override
	public String toString() {
		return "CarsEntity [id=" + id + ", carname=" + carname + ", modelname=" + modelname + ", carNumber=" + carNumber
				+ ", carColor=" + carColor + ", location=" + location + ", description=" + description + ", carprice="
				+ carprice + ", geartype=" + geartype + ", fueltype=" + fueltype + "]";
	}

	public CarsEntity(String carname, String modelname, String carNumber, String carColor, String location,
			String description, double carprice, GearType geartype, FuelType fueltype) {
		super();
		this.carname = carname;
		this.modelname = modelname;
		this.carNumber = carNumber;
		this.carColor = carColor;
		this.location = location;
		this.description = description;
		this.carprice = carprice;
		this.geartype = geartype;
		this.fueltype = fueltype;
	}

	
	
	
	
}