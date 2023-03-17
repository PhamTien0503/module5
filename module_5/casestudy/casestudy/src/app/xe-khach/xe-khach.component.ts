import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Coach} from '../model/xe-khach';
import {CoachService} from '../service/xe-khach.service';

@Component({
  selector: 'app-xe-khach',
  templateUrl: './xe-khach.component.html',
  styleUrls: ['./xe-khach.component.css']
})
export class XeKhachComponent implements OnInit {
  coaches: Coach[];
  code: number;
  id: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private xeKhachService: CoachService) {
  }

  ngOnInit(): void {
    this.getAll();
    console.log(this.coaches);
  }

  getAll() {
    this.xeKhachService.getAll().subscribe(next => {
      this.coaches = next.content;
      console.log(this.coaches);
    });
  }
  openModal(bienSoXe: number, id: number) {

    this.code = bienSoXe;
    this.id = id;
    console.log(this.code);
  }

  delete() {
    this.xeKhachService.deleteCoach(this.id).subscribe(next => {
      this.getAll();
      alert('xoa thanh cong');
      this.router.navigateByUrl('/xeKhach');
    });
  }
}
