import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../model/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: number;
  formProductUpdate: FormGroup;
  productUpdate: Product;


  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      this.id = parseInt(paraMap.get('id'), 10);
    });
    this.productUpdate = this.productService.findById(this.id);
    this.formProductUpdate = new FormGroup({
      id: new FormControl(this.productUpdate.id),
      name: new FormControl(this.productUpdate.name),
      price: new FormControl(this.productUpdate.price),
      description: new FormControl(this.productUpdate.description),
    });


  }

  update() {
    const product = this.formProductUpdate.value;
    this.productService.update(product);
    this.router.navigateByUrl('product/list');

  }
}
