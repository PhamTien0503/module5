import {Component, OnInit} from '@angular/core';
import {Facility} from '../../../model/facility/facility';



@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {


  facility: Facility[] = [
    {
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg',
      name: 'room',
      cost: 100000,
      area: 100,
      maxPeople: 3
    },
    {
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg',
      name: 'room',
      cost: 100000,
      area: 100,
      maxPeople: 3
    },
    {
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg',
      name: 'room',
      cost: 100000,
      area: 100,
      maxPeople: 3
    },
    {
      img: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg',
      name: 'room',
      cost: 100000,
      area: 100,
      maxPeople: 3
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
