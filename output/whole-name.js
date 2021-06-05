"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.WholeName = void 0;
var last_name_1 = require("./last-name");
var WholeName = /** @class */ (function (_super) {
    __extends(WholeName, _super);
    function WholeName(firstName, lastName) {
        var _this = _super.call(this, lastName) || this;
        _this.firstName = firstName;
        _this.wholeName = _this.firstName + ' ' + _this.lastName;
        return _this;
    }
    WholeName.prototype.print = function () {
        console.log("My name is " + this.wholeName);
    };
    return WholeName;
}(last_name_1.LastName));
exports.WholeName = WholeName;
