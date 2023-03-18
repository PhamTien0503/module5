package com.example.conect_backend.controller;

import com.example.conect_backend.dto.CoachDto;
import com.example.conect_backend.model.Coach;
import com.example.conect_backend.model.TypeOfCoach;
import com.example.conect_backend.service.ICoachService;
import com.example.conect_backend.service.ITypeOfCoachService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/coach")
public class CoachController {
  @Autowired
  private ICoachService coachService;
  @Autowired
  private ITypeOfCoachService typeOfCoachService;

  @GetMapping("")
  public ResponseEntity<Page<Coach>> getAllCoach(Pageable pageable) {
    Page<Coach> coaches = coachService.findAll(pageable);
    if (coaches.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } else return new ResponseEntity<>(coaches, HttpStatus.OK);
  }
  @GetMapping("/type")
  public ResponseEntity<List<TypeOfCoach>> getAllTypeOfCoach( ) {
    List<TypeOfCoach> typeOfCoaches = typeOfCoachService.findAllTypeOfCoach();
    if (typeOfCoaches.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } else return new ResponseEntity<>(typeOfCoaches, HttpStatus.OK);
  }


  @GetMapping("/{id}")
  public ResponseEntity<Coach> findById(@PathVariable int id) {
    Coach coach = coachService.findById(id);
    if (coach == null) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    return new ResponseEntity<>(coach, HttpStatus.OK);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Coach> deleteCoach(@PathVariable int id) {
    Coach coachDelete = coachService.findById(id);
    if (coachDelete == null) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }
    coachService.deleteCoach(id);
    return new ResponseEntity<>(HttpStatus.OK);
  }

  @PostMapping("")
  public ResponseEntity<CoachDto> saveCoach(@Validated @RequestBody CoachDto coachDto, BindingResult bindingResult) {
    if (bindingResult.hasErrors()) {
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
    Coach coach = new Coach();
    BeanUtils.copyProperties(coachDto, coach);
    coachService.saveCoach(coach);
    return new ResponseEntity<>(HttpStatus.CREATED);
  }

  @PatchMapping("/{id}")
  public ResponseEntity<Coach> updateCoach(@Validated @RequestBody CoachDto coachDto, @PathVariable int id, BindingResult bindingResult) {
    Coach coachUpdate = coachService.findById(id);
    if (coachUpdate == null) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    } else {
      if (bindingResult.hasErrors()) {
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
      }
      BeanUtils.copyProperties(coachDto, coachUpdate);
      coachService.updateCoach(id, coachUpdate);
      return new ResponseEntity<>(HttpStatus.OK);
    }
  }
}
