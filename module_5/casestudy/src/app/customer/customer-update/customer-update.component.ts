import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../../../model/customer/customer-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Customer} from '../../../model/customer/customer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  customerTypes?: CustomerType[];
  customerFormCreate: FormGroup;
  id: number;
  customer: Customer;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(next => {
      this.customerTypes = next;
      this.activatedRoute.paramMap.subscribe((paramap: ParamMap) => {
        this.id = parseInt(paramap.get('id'), 10);
        this.customerService.findById(this.id).subscribe(b => {
          this.customer = b;
          console.log(b.name);
          this.customerFormCreate = new FormGroup({
            name: new FormControl(b.name, [Validators.required]),
            dateOfBirth: new FormControl(b.dateOfBirth, Validators.required),
            gender: new FormControl(b.gender, Validators.required),
            idCard: new FormControl(b.idCard, [Validators.pattern('^([0-9]{9}|[0-9]{12})$')]),
            phoneNumber: new FormControl(b.phoneNumber, [Validators.required,
              Validators.pattern('^(([(]84[)][+]91)|([(]84[)][+]90)|090|091)[0-9]{7}$')]),
            email: new FormControl(b.email, Validators.email),
            address: new FormControl(b.address, Validators.required),
            customerType: new FormControl(b.customerType, Validators.required)
          });
        });
      });
    });
  }

  updateCustomer() {
    this.customerService.updateCustomer(this.customerFormCreate.value, this.id).subscribe(next => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        showConfirmButton: true,
        timer: 1000
      });
      this.router.navigateByUrl('/customer');
    });
  }
}
