package com.example.conect_backend.service.impl;

import com.example.conect_backend.model.TypeOfCoach;
import com.example.conect_backend.repository.ITypeOfCoachRepository;
import com.example.conect_backend.service.ITypeOfCoachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeOfCoachService implements ITypeOfCoachService {
  @Autowired
 private  ITypeOfCoachRepository typeOfCoachRepository;

  @Override
  public List<TypeOfCoach> findAllTypeOfCoach() {
    return typeOfCoachRepository.findAll();
  }
}
