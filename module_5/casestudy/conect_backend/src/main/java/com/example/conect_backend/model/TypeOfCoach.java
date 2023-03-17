package com.example.conect_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
public class TypeOfCoach {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private String name;
  @JsonIgnore
  @OneToMany(mappedBy = "typeOfCoach")
  private Set<Coach> coachSet;

  public TypeOfCoach() {
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Set<Coach> getCoachSet() {
    return coachSet;
  }

  public void setCoachSet(Set<Coach> coachSet) {
    this.coachSet = coachSet;
  }
}
