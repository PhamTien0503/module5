import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CoachService} from '../service/xe-khach.service';
import {Coach} from '../model/xe-khach';


@Component({
  selector: 'app-xe-khach-update',
  templateUrl: './xe-khach-update.component.html',
  styleUrls: ['./xe-khach-update.component.css']
})
export class XeKhachUpdateComponent implements OnInit {
  formXe?: FormGroup;
  id: number;
  xeUpdate: Coach;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private xeKhachService: CoachService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((para: ParamMap) => {
      this.id = parseInt(para.get('id'), 10);
      this.xeKhachService.findById(this.id).subscribe(next => {
        this.xeUpdate = next;
        this.formXe = new FormGroup({
          bienSoXe: new FormControl(this.xeUpdate.code),
          loaiXe: new FormControl(this.xeUpdate.typeOfCoach, [Validators.required]),
          tenNhaXe: new FormControl(this.xeUpdate.companyName, [Validators.required]),
          diemDi: new FormControl(this.xeUpdate.departure, [Validators.required]),
          diemDen: new FormControl(this.xeUpdate.destination, [Validators.required]),
          soDienThoai: new FormControl(this.xeUpdate.phoneNumber, [Validators.required,
            Validators.pattern('^(090[0-9]{7}|093[0-9]{7}|097[0-9]{7})$')]),
          email: new FormControl(this.xeUpdate.email, [Validators.required, Validators.email]),
          gioDi: new FormControl(this.xeUpdate.departure, [Validators.required]),
          gioDen: new FormControl(this.xeUpdate.arrivalTime, [Validators.required]),
        });
      });
    });
  }

  update() {
    const xe = this.formXe.value;
    this.xeKhachService.updateXe(this.id, xe).subscribe(next => {
      alert('update thanh cong');
      this.router.navigateByUrl('/xeKhach');
    });
  }
}
