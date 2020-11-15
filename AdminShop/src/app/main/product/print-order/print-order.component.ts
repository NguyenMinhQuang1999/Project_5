import { Component, Injector, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/common/base-component';

@Component({
  selector: 'app-print-order',
  templateUrl: './print-order.component.html',
  styleUrls: ['./print-order.component.css']
})
export class PrintOrderComponent extends BaseComponent implements OnInit {
  order_detail: any;
  constructor(private injector: Injector) {
    super(injector);
  }
  day = new Date();
  name: any;
  address: any;
  total: any;
  phone: any;
  created_at


  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      let id = params['id'];

      Observable.combineLatest(
        this._api.get('api/bill/get-bill-detail/' + id)).takeUntil(this.unsubcribe).subscribe(
          res => {
            this.order_detail = res[0];
            console.log(this.order_detail);
            setTimeout(() => {
              console.log(this.order_detail);
              this.total = (this.order_detail[0]['total']);
              this.phone = (this.order_detail[0]['phone']);
              this.address = (this.order_detail[0]['address']);
              this.name = (this.order_detail[0]['customer_name']);
              this.created_at = (this.order_detail[0]['created_at']);
            });
          }
        );
    });
    this.printOrder();



  }
  printOrder() {
    setTimeout(() => {
      print();
    }, 1000);

    }



}
