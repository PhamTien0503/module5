package com.example.conect_backend.repository;

import com.example.conect_backend.model.Coach;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ws.soap.server.endpoint.annotation.SoapActions;

@Transactional
public interface ICoachRepository extends JpaRepository<Coach, Integer> {
  @Query(value = "select c.* from coach as c", nativeQuery = true)
  Page<Coach> findAllCoach(Pageable pageable);

  @Modifying
  @Query(value = "delete from coach as c where c.id= :idDelete", nativeQuery = true)
  void deleteCoach(@Param("idDelete") int id);
}
