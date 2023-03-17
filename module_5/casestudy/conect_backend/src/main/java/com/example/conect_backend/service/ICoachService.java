package com.example.conect_backend.service;

import com.example.conect_backend.model.Coach;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICoachService {
  Page<Coach> findAll(Pageable pageable);
  void deleteCoach(int id);
}
