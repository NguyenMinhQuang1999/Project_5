import { Component, Injector, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '../lib/base-component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends BaseComponent implements OnInit {
  products: any;
  config: any;

  list: any;
  page: any;
  pageSize: any;
  totalItems: any;
  category_id: any;
  categories: any;
  keyword: any;
  str: any;
  subcription: Subscription;

  constructor(private injector: Injector) {
    super(injector);
  }




  ngOnInit(): void {
    //Nhan chuoi tim kiem






    this.list = [];
    this.page = 1;
    this.pageSize = 8;

    this.subcription = this._search.onMessage().subscribe(message => {
      if (message) {
        this.keyword = message;


    this._api
      .post('api/product/search-home', {
        page: this.page,
        pageSize: this.pageSize,
        keyword: this.keyword
      })
      .takeUntil(this.unsubscribe)
      .subscribe(
        (res) => {
          this.products = res.data;
          //console.log(this.list);
          this.totalItems = res.totalItems;
          this.keyword = "";
          this.ngOnDestroy();
        },
        (err) => { }
    );
        }
    });



  }


  pageChanged(event) {
    this.config.currentPage = event;
  }

  loadPage(page) {
  this.subcription = this._search.onMessage().subscribe(message => {
    if (message) {
        this.keyword = message;
    this._api
      .post('api/product/search-home', {
        page: page,
        pageSize: this.pageSize,
        keyword: this.keyword,
      })
      .takeUntil(this.unsubscribe)
      .subscribe(
        (res) => {
          this.products = res.data;
       //   console.log(this.list);
          this.totalItems = res.totalItems;

        },
        (err) => { }
    );
        }
  });




  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }
  addToCart(it) {
    this._cart.addToCart(it);
    alert('Thêm thành công!');
  }


}





