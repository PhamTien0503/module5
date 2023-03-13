import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../model/product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  id: number;
  productDelete: Product;


  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      this.id = parseInt(paraMap.get('id'), 10);
    });
    this.productDelete = this.productService.findById(this.id);
  }

  deleteProduct() {
    this.productService.deleteProduct(this.id);
    this.router.navigateByUrl('/product/list');

  }
}
