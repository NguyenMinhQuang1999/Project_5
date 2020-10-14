import { Component, Injector, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/common/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

declare var $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector, private fb: FormBuilder) {
    super(injector);
  }

  formData: any;

  name: any;
  category_id: any;
  quantity: any;
  price: any;
  promotion_price: any;
  image: any;
  description: any;
  detail: any;
  status: any;
  message: any;






  products: any;
  product: any;







  ngOnInit(): void {

  this.formData = this.fb.group({
  name: ['', Validators.required],
  category_id:  [''],
  quantity:  [''],
  price:  [''],
  promotion_price: [''],
  image: [''],
  description:  [''],
  detail: [''],
  status:  [''],
    });


    Observable.combineLatest(
      this._api.get('api/product/get-all'),

    ).takeUntil(this.unsubcribe).subscribe(
      res=> {
        this.products = res[0];
        console.log(this.products);
      // setTimeout(() => {
      //   this.loadScripts();
      // });
      }, err => { })


  }

  getProduct(id: any) {
    Observable.combineLatest(
      this._api.get('api/product/get-by-id/'+id)
    ).takeUntil(this.unsubcribe).subscribe(
      res => {
        this.product = res;
      }
    )
  }

  delete(id: any) {
    Observable.combineLatest(
      this._api.get('api/product/delete-product/' + id)
    ).takeUntil(this.unsubcribe).subscribe(
      res => {

                this.products = this.products.filter(val => val.product_id !== id);



        }
      )
  }

  update(id: any) {

        Observable.combineLatest(
      this._api.get('api/product/get-by-id/'+id)
    ).takeUntil(this.unsubcribe).subscribe(
      res => {
        this.product = res[0];
        console.log(this.product);
        setTimeout(() => {
           $("#updateModal").modal("toggle");
        } );

      }
    )
  }

  updateProduct(id: any, value:any) {

    Observable.combineLatest(
      this._api.put('api/product/update-product/' + id, {
      name: value.name,
      category_id: value.category_id,
      quantity: +value.quantity,
      price: +value.price,
      promotion_price: +value.promotion_price,
      image: value.image,
      description: value.description,
      detail: value.detail,
      status: +value.status,
      },)
    ).takeUntil(this.unsubcribe).subscribe(
      res => {

      }
    )
  }


  //Show modal
  create() {
   $('#formModal').modal('toggle');
  }

  onSubmitCreate(value: any) {

    console.log(value);
    this._api.post('api/product/create-product', {
      name: value.name,
      category_id: value.category_id,
      quantity: +value.quantity,
      price: +value.price,
      promotion_price: +value.promotion_price,
      image: value.image,
      description: value.description,
      detail: value.detail,
      status: +value.status,
    }).takeUntil(this.unsubcribe).subscribe((res) => {
      this.message = res;
     // location.reload();
    });

    }
  }



