import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Coach} from '../model/xe-khach';
import {TypeOfCoach} from '../model/type-of-coach';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CoachService} from '../service/xe-khach.service';

@Component({
  selector: 'app-coach-create',
  templateUrl: './coach-create.component.html',
  styleUrls: ['./coach-create.component.css']
})
export class CoachCreateComponent implements OnInit {
  formXe?: FormGroup;
  id: number;
  coachUpdate: Coach;
  typeOfCoaches: TypeOfCoach[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private coachService: CoachService) {
  }

  ngOnInit(): void {
    this.coachService.getAllTypeOfCoach().subscribe(a => {
      this.typeOfCoaches = a;
      this.formXe = new FormGroup({
        code: new FormControl('', [Validators.required]),
        typeOfCoach: new FormControl('', [Validators.required]),
        companyName: new FormControl('', [Validators.required]),
        departure: new FormControl('', [Validators.required]),
        destination: new FormControl('', [Validators.required]),
        phoneNumber: new FormControl('', [Validators.required,
          Validators.pattern('^(090[0-9]{7}|093[0-9]{7}|097[0-9]{7})$')]),
        email: new FormControl('', [Validators.required, Validators.email]),
        departureTime: new FormControl('', [Validators.required]),
        arrivalTime: new FormControl('', [Validators.required]),
      });
    });
  }

  createCoach() {
    const xe = this.formXe.value;
    console.log(xe);
    this.coachService.saveCoach(xe).subscribe(next => {
      alert('them thanh cong');
      this.router.navigateByUrl('/coach');
    });
  }
}
