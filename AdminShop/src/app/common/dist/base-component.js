"use strict";
exports.__esModule = true;
exports.BaseComponent = void 0;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var api_service_1 = require("./api_service");
var BaseComponent = /** @class */ (function () {
    function BaseComponent(injector) {
        this.unsubcribe = new rxjs_1.Subject();
        this.today = new Date();
        this.dateFormat = "dd/mm/yy";
        this._renderer = injector.get(core_1.Renderer2);
        this._api = injector.get(api_service_1.ApiService);
        this._route = injector.get(router_1.ActivatedRoute);
        this.roles = [
            { label: 'Admin', value: 'Admin' },
            { label: 'User', value: 'User' }
        ];
        this.genders = [
            { label: 'Nam', value: 'Nam' },
            { label: 'Nữ', value: 'Nữ' },
            { label: 'Khác', value: 'Khác' },
        ];
        this.locale_vn = {
            firstDayOfWeek: 1,
            dayNames: [
                'Chủ nhật',
                'Thứ 2',
                'Thứ 3',
                'Thứ 4',
                'Thứ 5',
                'Thứ 6',
                'Thứ 7',
            ],
            dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
            dayNamesMin: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
            monthNames: [
                'Tháng 1',
                'Tháng 2',
                'Tháng 3',
                'Tháng 4',
                'Tháng 5',
                'Tháng 6',
                'Tháng 7',
                'Tháng 8',
                'Tháng 9',
                'Tháng 10',
                'Tháng 11',
                'Tháng 12',
            ],
            monthNamesShort: [
                'Th 1',
                'Th 2',
                'Th 3',
                'Th 4',
                'Th 5',
                'Th 6',
                'Th 7',
                'Th 8',
                'Th 9',
                'Th 10',
                'Th 11',
                'Th 12',
            ],
            today: 'Hôm nay',
            clear: 'Xóa'
        };
        this._api = injector.get(api_service_1.ApiService);
        this._route = injector.get(router_1.ActivatedRoute);
    }
    //  public loadScripts() {
    //        this.renderExternalScript('assets/js/main.js').onload = () => {
    //        }
    //      }
    BaseComponent.prototype.renderExternalScript = function (src) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.async = true;
        script.defer = true;
        this._renderer.appendChild(document.body, script);
        return script;
    };
    BaseComponent.prototype.getEncodeFromImage = function (fileUpload) {
        if (fileUpload) {
            if (fileUpload.files == null || fileUpload.files.length == 0) {
                return rxjs_1.of('');
            }
            var file_1 = fileUpload.files[0];
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(file_1);
            return rxjs_1.fromEvent(reader_1, 'load').pipe(operators_1.map(function (e) {
                var result = '';
                var tmp = reader_1.result;
                var baseCode = tmp.substring(tmp.indexOf('base64,', 0) + 7);
                result = file_1.name + ';' + file_1.size + ';' + baseCode;
                return result;
            }));
        }
        else {
            return rxjs_1.of(null);
        }
    };
    BaseComponent.prototype.saveAsExcelFile = function (buffer, fileName) {
        Promise.resolve().then(function () { return require("file-saver"); }).then(function (FileSaver) {
            var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
            var EXCEL_EXTENSION = '.xlsx';
            var data = new Blob([buffer], {
                type: EXCEL_TYPE
            });
            FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        });
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
