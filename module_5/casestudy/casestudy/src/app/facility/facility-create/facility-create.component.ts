import {Component, OnInit} from '@angular/core';
import {RentType} from '../../../model/facility/rent_type';
import {FacilityType} from '../../../model/facility/facility_type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityTypeService} from '../../service/facility-type.service';
import {RentTypeService} from '../../service/rent-type.service';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
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

  saveFacility() {
    this.facilityService.save(this.facilityFormCreate.value);
  }
}
