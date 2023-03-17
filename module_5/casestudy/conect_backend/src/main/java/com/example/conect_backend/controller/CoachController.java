package com.example.conect_backend.controller;

import com.example.conect_backend.model.Coach;
import com.example.conect_backend.service.ICoachService;
import com.example.conect_backend.service.ITypeOfCoachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

  @DeleteMapping("/{id}")
  public ResponseEntity<Coach> deleteCoach(@PathVariable int id) {
    coachService.deleteCoach(id);
    return new ResponseEntity<>(HttpStatus.OK);
  }
}
