package com.example.conect_backend.model;

import javax.persistence.*;

@Entity
public class Coach {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String code;
  @ManyToOne
  @JoinColumn(name = "type_id", referencedColumnName = "id")
  private TypeOfCoach typeOfCoach;
  private String companyName;
  private String departure;
  private String destination;
  private String phoneNumber;
  private String email;
  private String departureTime;
  private String arrivalTime;

  public Coach() {
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getCode() {
    return code;
  }

  public void setCode(String code) {
    this.code = code;
  }

  public TypeOfCoach getTypeOfCoach() {
    return typeOfCoach;
  }

  public void setTypeOfCoach(TypeOfCoach typeOfCoach) {
    this.typeOfCoach = typeOfCoach;
  }

  public String getCompanyName() {
    return companyName;
  }

  public void setCompanyName(String companyName) {
    this.companyName = companyName;
  }

  public String getDeparture() {
    return departure;
  }

  public void setDeparture(String departure) {
    this.departure = departure;
  }

  public String getDestination() {
    return destination;
  }

  public void setDestination(String destination) {
    this.destination = destination;
  }

  public String getPhoneNumber() {
    return phoneNumber;
  }

  public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getDepartureTime() {
    return departureTime;
  }

  public void setDepartureTime(String departureTime) {
    this.departureTime = departureTime;
  }

  public String getArrivalTime() {
    return arrivalTime;
  }

  public void setArrivalTime(String arrivalTime) {
    this.arrivalTime = arrivalTime;
  }
}
