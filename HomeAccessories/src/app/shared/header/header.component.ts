import { Component, Injector, OnInit } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { BaseComponent } from 'src/app/lib/base-component';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent extends BaseComponent implements OnInit {
  total: any;

  list: any;
  page: any;
  pageSize: any;
  totalItems: any;
  category_id: any;
  categories: any;
  name: any;

  keyword:string = 'tai nghe';
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._cart.items.subscribe((res) => {
      this.total = res ? res.length : 0;

      $('#total').data('number', this.total);
      this._api
        .get('api/category/get-category')
        .takeUntil(this.unsubscribe)
        .subscribe((res) => {
          this.categories = res;
        });


    });
    // this.sendMessage();
    // this.clearMessages();



    this.loadPage();
  }
  loadPage() {
    this._cart.items.subscribe((res) => {
      this.total = res ? res.length : 0;

      $('#total').data('number', this.total);
      console.log(this.total);


    });
    }



  sendMessage(key) : void   {
    this._search.sendMessage(key);
    console.log(key);

  }
  clearMessages(): void {
        // clear messages
        this._search.clearMessges();
    }


}
