import { BaseComponent } from '../../lib/base-component';
import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css'],
})
export class DetailItemComponent extends BaseComponent implements OnInit {
  item: any;
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit(): void {
    this.item = {};
    this._route.params.subscribe((params) => {
      let id = params['id'];
      this._api
        .get('/api/item/get-by-id/' + id)
        .takeUntil(this.unsubscribe)
        .subscribe((res) => {
          this.item = res;
          setTimeout(() => {
            this.loadScripts();
          });
        });
    });
  }
}
