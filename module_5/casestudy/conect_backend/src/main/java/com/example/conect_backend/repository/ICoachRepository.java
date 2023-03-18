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


  @Query(value = "select c.* from coach as c where c.id= :idFind", nativeQuery = true)
  Coach findById(@Param("idFind") int id);

  @Modifying

  @Query(value = "insert into coach as c (arrival_time,code,company_name,departure,departure_time ,destination,email,phone_number,type_id)" +
    "values (:arrivalTime,:code,:companyName,:departure,:departureTime ,:destination,:email,:phoneNumber,:typeId)", nativeQuery = true)
  void saveCoach(
    @Param("arrivalTime") String arrivalTime,
    @Param("code") String code,
    @Param("companyName") String companyName,
    @Param("departure") String departure,
    @Param("departureTime") String departureTime,
    @Param("destination") String destination,
    @Param("email") String email,
    @Param("phoneNumber") String phoneNumber,
    @Param("typeId") int typeId);
  @Modifying
  @Query(nativeQuery = true, value = " update coach as c" +
    " set c.arrival_time= :arrivalTime," +
    " c.code=:code," +
    " c.company_name=:companyName," +
    " c.departure=:departure," +
    " c.departure_time=:departureTime," +
    " c.destination=:destination," +
    " c.email=:email," +
    " c.phone_number=:phoneNumber," +
    " c.type_id=:typeId" +
    " where c.id=:idFind")
  void updateCoach(
    @Param("arrivalTime") String arrivalTime,
    @Param("code") String code,
    @Param("companyName") String companyName,
    @Param("departure") String departure,
    @Param("departureTime") String departureTime,
    @Param("destination") String destination,
    @Param("email") String email,
    @Param("phoneNumber") String phoneNumber,
    @Param("typeId") int typeId,
    @Param("idFind") int idFind);
}
