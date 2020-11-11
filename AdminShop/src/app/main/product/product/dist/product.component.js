"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var base_component_1 = require("../../../common/base-component");
require("rxjs/add/observable/combineLatest");
require("rxjs/add/operator/takeUntil");
var forms_1 = require("@angular/forms");
var fileupload_1 = require("primeng/fileupload");
var ProductComponent = /** @class */ (function (_super) {
    __extends(ProductComponent, _super);
    function ProductComponent(injector, fb, messageService, confirmationService) {
        var _this = _super.call(this, injector) || this;
        _this.fb = fb;
        _this.messageService = messageService;
        _this.confirmationService = confirmationService;
        _this.p = 1;
        _this.submitted = false;
        _this.pageSize = 3;
        _this.page = 1;
        _this.uploadedFiles = [];
        return _this;
    }
    Object.defineProperty(ProductComponent.prototype, "f", {
        get: function () { return this.formData.controls; },
        enumerable: false,
        configurable: true
    });
    ;
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formsearch = this.fb.group({
            'category_id': ['']
        });
        this.formData = this.fb.group({
            product_id: [''],
            name: ['', forms_1.Validators.required,],
            category_id: ['', forms_1.Validators.required],
            quantity: ['', forms_1.Validators.required],
            price: ['', forms_1.Validators.required],
            promotion_price: [''],
            image_url: [''],
            description: [''],
            detail: [''],
            status: ['', forms_1.Validators.required]
        });
        rxjs_1.Observable.combineLatest(this._api.get('api/product/get-all')).takeUntil(this.unsubcribe).subscribe(function (res) {
            _this.products = res[0];
            console.log(_this.products);
            setTimeout(function () {
            });
        }, function (err) { });
        rxjs_1.Observable.combineLatest(this._api.get('api/bill/get-billdetail')).takeUntil(this.unsubcribe).subscribe(function (res) {
            _this.billdetail = res[0];
            console.log(_this.billdetail);
        }, function (err) { });
        rxjs_1.Observable.combineLatest(this._api.get('api/category/get-category')).takeUntil(this.unsubcribe)
            .subscribe(function (res) {
            _this.category = res[0];
        }, function (err) { });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1
        };
    };
    ProductComponent.prototype.checkInBill = function (id) {
        var ok = false;
        if (this.billdetail) {
            this.billdetail.forEach(function (element) {
                if (element.product_id == id) {
                    ok = true;
                }
            });
        }
        return ok;
    };
    ProductComponent.prototype["delete"] = function (id) {
        var _this = this;
        console.log(this.checkInBill(id));
        if (confirm("Bạn có muốn chắn chắn xóa không!")) {
            if (this.checkInBill(id) == true) {
                alert("Sản phẩm đang có trong giỏ hàng!");
                this.messageService.add({ severity: 'warning', summary: 'Service Message', detail: 'Via MessageService' });
            }
            else {
                rxjs_1.Observable.combineLatest(this._api.get('api/product/delete-product/' + id)).takeUntil(this.unsubcribe).subscribe(function (res) {
                    _this.products = _this.products.filter(function (val) { return val.product_id !== id; });
                    _this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
                });
            }
        }
    };
    ProductComponent.prototype.update = function (id) {
        var _this = this;
        rxjs_1.Observable.combineLatest(this._api.get('api/product/get-by-id/' + id)).subscribe(function (res) {
            _this.product = res[0];
            console.log(_this.product);
            _this.category_id = _this.product.category_id;
            setTimeout(function () {
                _this.formData.controls['product_id'].setValue(_this.product.product_id);
                _this.formData.controls['name'].setValue(_this.product.name);
                _this.formData.controls['quantity'].setValue(_this.product.quantity);
                _this.formData.controls['price'].setValue(_this.product.price);
                _this.formData.controls['promotion_price'].setValue(_this.product.promotion_price);
                _this.formData.controls['description'].setValue(_this.product.description);
                _this.formData.controls['detail'].setValue(_this.product.detail);
                _this.formData.controls['category_id'].setValue(_this.product.category_id);
                _this.formData.controls['status'].setValue(_this.product.status);
                $(".modal-title").html("Sửa sản phẩm");
                $('#formModal').modal('toggle');
                //  this.formData.reset();
            });
        });
    };
    //Show modal
    ProductComponent.prototype.create = function () {
        this.formData.reset();
        $(".modal-title").html("Thêm sản phẩm");
        $('#formModal').modal('toggle');
    };
    ProductComponent.prototype.onSubmitCreate = function (value) {
        var _this = this;
        this.submitted = true;
        if (value.product_id == null) {
            this.getEncodeFromImage(this.file_image).subscribe(function (data) {
                var data_image = data == '' ? null : data;
                console.log(value);
                _this._api.post('api/product/create-product', {
                    name: value.name,
                    image_url: data_image,
                    category_id: value.category_id,
                    quantity: +value.quantity,
                    price: +value.price,
                    promotion_price: +value.promotion_price,
                    description: value.description,
                    detail: value.detail,
                    status: +value.status
                }).takeUntil(_this.unsubcribe).subscribe(function (res) {
                    _this.message = res;
                    _this.products.unshift(_this.message);
                    _this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
                    $("#formModal").modal('hide');
                });
            });
        }
        else {
            console.log(value);
            this.getEncodeFromImage(this.file_image).subscribe(function (data) {
                var data_image = data == '' ? null : data;
                _this._api.post('api/product/update-product/' + value.product_id, {
                    name: value.name,
                    category_id: value.category_id,
                    quantity: +value.quantity,
                    price: +value.price,
                    promotion_price: +value.promotion_price,
                    image_url: data_image,
                    description: value.description,
                    detail: value.detail,
                    status: +value.status
                }).takeUntil(_this.unsubcribe).subscribe(function (res) {
                    _this.message = res;
                    _this.products[_this.findIndexById(_this.message.product_id)] = _this.message;
                    _this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
                    //  location.reload();
                    $("#formModal").modal('hide');
                });
            });
        }
    };
    ProductComponent.prototype.search = function () {
        var _this = this;
        this.page = 1;
        this.pageSize = 5;
        this._api.post('api/product/search', { page: this.page, pageSize: this.pageSize, category_id: this.formsearch.get('category_id') })
            .takeUntil(this.unsubcribe).subscribe(function (res) {
            _this.products = res.data;
            _this.totalRecords = res.totalRecords;
            _this.pageSize = res.pageSize;
        });
    };
    ProductComponent.prototype.findIndexById = function (id) {
        var index = -1;
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].product_id == id) {
                index = i;
                break;
            }
        }
        return index;
    };
    __decorate([
        core_1.ViewChild(fileupload_1.FileUpload, { static: false })
    ], ProductComponent.prototype, "file_image");
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
        })
    ], ProductComponent);
    return ProductComponent;
}(base_component_1.BaseComponent));
exports.ProductComponent = ProductComponent;
