package com.example.conect_backend.service.impl;

import com.example.conect_backend.model.Coach;
import com.example.conect_backend.repository.ICoachRepository;
import com.example.conect_backend.service.ICoachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

@Service
public class CoachService implements ICoachService {
  @Autowired
  private ICoachRepository coachRepository;

  @Override
  public Page<Coach> findAll(Pageable pageable) {
    return coachRepository.findAllCoach(pageable);
  }

  @Override
  public void deleteCoach(int id) {
    coachRepository.deleteCoach(id);
  }

  @Override
  public Coach findById(int id) {
    return coachRepository.findById(id);
  }

  @Override
  public void saveCoach(Coach coach) {
    coachRepository.saveCoach(coach.getArrivalTime(),coach.getCode(), coach.getCompanyName(), coach.getDeparture(),
      coach.getDepartureTime() , coach.getDestination(),coach.getEmail(), coach.getPhoneNumber(), coach.getTypeOfCoach().getId());
  }

  @Override
  public void updateCoach(int idFind, Coach coach) {
    coachRepository.updateCoach(coach.getArrivalTime(),coach.getCode(), coach.getCompanyName(), coach.getDeparture(),
      coach.getDepartureTime() , coach.getDestination(),coach.getEmail(), coach.getPhoneNumber(),
      coach.getTypeOfCoach().getId(),idFind);
  }
}
