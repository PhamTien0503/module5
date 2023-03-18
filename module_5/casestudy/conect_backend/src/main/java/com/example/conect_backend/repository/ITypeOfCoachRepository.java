package com.example.conect_backend.repository;

import com.example.conect_backend.model.TypeOfCoach;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface ITypeOfCoachRepository extends JpaRepository<TypeOfCoach, Integer> {
  @Query(value = "select t.* from type_of_coach as t", nativeQuery = true)
  List<TypeOfCoach> findAll();
}
