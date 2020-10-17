import { Component, Injector, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/common/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SharedModule } from '../../../shared/shared.module';

declare var $: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent extends BaseComponent implements OnInit {

  constructor(injector: Injector, private fb: FormBuilder,  private messageService: MessageService, private confirmationService: ConfirmationService) {
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
  category: any;








        ngOnInit(): void {

          this.formData = this.fb.group({
        product_id : [''],
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
          setTimeout(() => {

          });
          }, err => { })

          Observable.combineLatest(this._api.get('api/category/get-category')).takeUntil(this.unsubcribe)
            .subscribe(res => {
              this.category = res[0];

          }, err => {})


      }

        // getProduct(id: any) {
        //   Observable.combineLatest(
        //     this._api.get('api/product/get-by-id/'+id)
        //   ).takeUntil(this.unsubcribe).subscribe(
        //     res => {
        //       this.product = res;
        //     }
        //   )
        // }

       delete(id: any) {


          Observable.combineLatest(
            this._api.get('api/product/delete-product/' + id)
          ).takeUntil(this.unsubcribe).subscribe(
            res => {

                this.products = this.products.filter(val => val.product_id !== id);
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
            }

            )}


        update(id: any) {

            Observable.combineLatest(
            this._api.get('api/product/get-by-id/'+id)
          ).takeUntil(this.unsubcribe).subscribe(
            res => {
              this.product = res[0];
              console.log(this.product);
              this.category_id = this.product.category_id;
              setTimeout(() => {

                //this.product_id = this.product.product_id;
                this.formData.controls['product_id'].setValue(this.product.product_id);
                this.formData.controls['name'].setValue(this.product.product_id);
                this.formData.controls['quantity'].setValue(this.product.quantity);
                this.formData.controls['price'].setValue(this.product.price);
                this.formData.controls['promotion_price'].setValue(this.product.promotion_price);
                this.formData.controls['description'].setValue(this.product.description);
                this.formData.controls['detail'].setValue(this.product.detail);
                // this.formData.controls['product_id'].setValue(this.product.product_id);
                // this.formData.controls['product_id'].setValue(this.product.product_id);
                $(".modal-title").html("Sửa sản phẩm");
                $('#formModal').modal('toggle');
               // this.formData.reset();

              });

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
    this.formData.reset();
       $(".modal-title").html("Thêm sản phẩm");
        $('#formModal').modal('toggle');
        }

      findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
              break;

          }
          return index;
          }
        }

        onSubmitCreate(value: any) {
          if (value.product_id == null) {
           // this.formData.reset();

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
            this.products.push(this.message);
           // this.formData.reset();
            $("#formModal").modal('hide');
          });
          } else {
             console.log(value);
          this._api.post('api/product/update-product/' + value.product_id, {
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
        //  location.reload();
         //   this.products = this.products;
          //  this.formData.reset();
            $("#formModal").modal('hide');
          });
          }



          }
        }



