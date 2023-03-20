import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CoachService} from '../service/xe-khach.service';
import {Coach} from '../model/xe-khach';
import {TypeOfCoach} from '../model/type-of-coach';


@Component({
  selector: 'app-xe-khach-update',
  templateUrl: './xe-khach-update.component.html',
  styleUrls: ['./xe-khach-update.component.css']
})
export class XeKhachUpdateComponent implements OnInit {
  formXe?: FormGroup;
  id: number;
  coachUpdate: Coach;
  typeOfCoaches: TypeOfCoach[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private xeKhachService: CoachService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((para: ParamMap) => {
      this.id = parseInt(para.get('id'), 10);
      this.xeKhachService.getAllTypeOfCoach().subscribe(a => {
        this.typeOfCoaches = a;
        this.xeKhachService.findById(this.id).subscribe(next => {
          this.coachUpdate = next;
          this.formXe = new FormGroup({
            code: new FormControl(this.coachUpdate.code),
            typeOfCoach: new FormControl(this.typeOfCoaches?.filter
            (c => c.id === this.coachUpdate.typeOfCoach.id)[0], [Validators.required]),
            companyName: new FormControl(this.coachUpdate.companyName, [Validators.required]),
            departure: new FormControl(this.coachUpdate.departure, [Validators.required]),
            destination: new FormControl(this.coachUpdate.destination, [Validators.required]),
            phoneNumber: new FormControl(this.coachUpdate.phoneNumber, [Validators.required,
              Validators.pattern('^(090[0-9]{7}|093[0-9]{7}|097[0-9]{7})$')]),
            email: new FormControl(this.coachUpdate.email, [Validators.required, Validators.email]),
            departureTime: new FormControl(this.coachUpdate.departureTime, [Validators.required]),
            arrivalTime: new FormControl(this.coachUpdate.arrivalTime, [Validators.required]),
          });
        });
      });
    });
  }

  update() {
    const xe = this.formXe.value;
    console.log(xe);
    this.xeKhachService.updateCoach(this.id, xe).subscribe(next => {
      alert('update thanh cong');
      this.router.navigateByUrl('/coach');
    });
  }
}
