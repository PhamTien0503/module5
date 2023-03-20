package com.example.conect_backend.dto;

import com.example.conect_backend.model.TypeOfCoach;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.NotBlank;


public class CoachDto implements Validator {

  @NotBlank(message = "khong duoc de trong")
  private String code;
  private TypeOfCoach typeOfCoach;
  private String companyName;
  private String departure;
  private String destination;
  private String phoneNumber;
  private String email;
  private String departureTime;
  private String arrivalTime;

  public CoachDto(String code, TypeOfCoach typeOfCoach, String companyName, String departure, String destination,
                  String phoneNumber, String email, String departureTime, String arrivalTime) {
    this.code = code;
    this.typeOfCoach = typeOfCoach;
    this.companyName = companyName;
    this.departure = departure;
    this.destination = destination;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
  }

  public CoachDto() {
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

  @Override
  public boolean supports(Class<?> clazz) {
    return false;
  }

  @Override
  public void validate(Object target, Errors errors) {

  }
}
