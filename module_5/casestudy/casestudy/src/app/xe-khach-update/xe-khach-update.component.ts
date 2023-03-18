import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CoachService} from '../service/xe-khach.service';
import {Coach} from '../model/xe-khach';
import {TypeOfCoach} from "../model/type-of-coach";


@Component({
  selector: 'app-xe-khach-update',
  templateUrl: './xe-khach-update.component.html',
  styleUrls: ['./xe-khach-update.component.css']
})
export class XeKhachUpdateComponent implements OnInit {
  formXe?: FormGroup;
  id: number;
  xeUpdate: Coach;
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
          this.xeUpdate = next;
          this.formXe = new FormGroup({
            code: new FormControl(this.xeUpdate.code),
            typeOfCoach: new FormControl(this.xeUpdate.typeOfCoach, [Validators.required]),
            companyName: new FormControl(this.xeUpdate.companyName, [Validators.required]),
            departure: new FormControl(this.xeUpdate.departure, [Validators.required]),
            destination: new FormControl(this.xeUpdate.destination, [Validators.required]),
            phoneNumber: new FormControl(this.xeUpdate.phoneNumber, [Validators.required,
              Validators.pattern('^(090[0-9]{7}|093[0-9]{7}|097[0-9]{7})$')]),
            email: new FormControl(this.xeUpdate.email, [Validators.required, Validators.email]),
            departureTime: new FormControl(this.xeUpdate.departureTime, [Validators.required]),
            arrivalTime: new FormControl(this.xeUpdate.arrivalTime, [Validators.required]),
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
      this.router.navigateByUrl('/xeKhach');
    });
  }
}
