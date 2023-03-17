import {Component, OnInit} from '@angular/core';
import {RentType} from "../../../model/facility/rent_type";
import {FacilityType} from "../../../model/facility/facility_type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FacilityService} from "../../service/facility.service";
import {RentTypeService} from "../../service/rent-type.service";
import {FacilityTypeService} from "../../service/facility-type.service";

@Component({
  selector: 'app-facility-update',
  templateUrl: './facility-update.component.html',
  styleUrls: ['./facility-update.component.css']
})
export class FacilityUpdateComponent implements OnInit {
  rentTypes: RentType[] = [];
  facilityTypes: FacilityType[] = [];
  facilityFormCreate: FormGroup;

  constructor(private facilityService: FacilityService,
              private rentTypeService: RentTypeService,
              private facilityTypeService: FacilityTypeService) {
  }

  ngOnInit(): void {
    this.getRentType();
    this.getFacilityType();
    this.facilityFormCreate = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.pattern('^[^0-9]+$')]),
      area: new FormControl('', [Validators.min(10), Validators.required]),
      cost: new FormControl('', [Validators.min(0), Validators.required]),
      maxPeople: new FormControl('', [Validators.min(1), Validators.required]),
      rentType: new FormControl(),
      facilityType: new FormControl(),
      standardRoom: new FormControl('', Validators.required),
      descriptionOtherConvenience: new FormControl('', Validators.required),
      poolArea: new FormControl('', [Validators.min(0), Validators.required]),
      numberOfFloors: new FormControl('', [Validators.min(0), Validators.required]),
      facilityFree: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required)
    });
  }


  getRentType() {
    this.rentTypes = this.rentTypeService.getAll();
  }

  getFacilityType() {
    this.facilityTypes = this.facilityTypeService.getAll();
  }

  updateFacility() {
    this.facilityService.save(this.facilityFormCreate.value);
  }
}
