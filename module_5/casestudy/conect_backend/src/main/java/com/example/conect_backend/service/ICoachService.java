package com.example.conect_backend.service;

import com.example.conect_backend.model.Coach;
import org.hibernate.boot.model.source.internal.hbm.RelationalValueSourceHelper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

public interface ICoachService {
  Page<Coach> findAll(Pageable pageable);

  void deleteCoach(int id);

  Coach findById(int id);

  void saveCoach(Coach coach);
  void updateCoach(int id, Coach coach);
}
