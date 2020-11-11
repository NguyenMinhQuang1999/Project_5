import { Component, Injector, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '../lib/base-component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent extends BaseComponent implements OnInit {
  products: any;
  config: any;
  constructor(private injector: Injector) {
    super(injector);
  }

      ngOnInit(): void {
        this._route.params.subscribe((parmas) => {
          let search = parmas[name];

          this._api
            .get('api/product/search-name/' + search)
            .takeUntil(this.unsubscribe)
            .subscribe((res) => {
              this.products = res;
              console.log(this.products.length);

            })


        });




    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.products.length,

    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }


    addToCart(it) {
    this._cart.addToCart(it);
    alert('Thêm thành công!');
    }


  }





