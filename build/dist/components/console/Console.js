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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import Select from "react-select";
import "./Console.scss";
import { Weapon } from "./Weapon";
import { Suspect } from "./Suspect";
import { Room } from "./Room";
var Console = /** @class */ (function (_super) {
    __extends(Console, _super);
    function Console(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSuspectChange = function (selectedOption) { };
        _this.handleRoomChange = function (selectedOption) { };
        _this.handleWeaponChange = function (selectedOption) { };
        _this.weapons = Object.keys(Weapon).filter(function (item) {
            return isNaN(Number(item));
        });
        _this.suspects = Object.keys(Suspect).filter(function (item) {
            return isNaN(Number(item));
        });
        _this.rooms = Object.keys(Room).filter(function (item) {
            return isNaN(Number(item));
        });
        _this.state = {
            value: ""
        };
        _this.handleSuspectChange = _this.handleSuspectChange.bind(_this);
        _this.handleRoomChange = _this.handleRoomChange.bind(_this);
        _this.handleWeaponChange = _this.handleWeaponChange.bind(_this);
        return _this;
    }
    Console.prototype.render = function () {
        var customStyle = {
            container: function (styles) { return (__assign(__assign({}, styles), { width: "40%" })); }
        };
        return (React.createElement("div", { className: "console-container" },
            React.createElement("p", { className: "title" }, "Console"),
            React.createElement("div", { className: "block" },
                React.createElement("label", null, "Suspects:"),
                React.createElement(Select, { placeholder: "Select a suspect..", styles: customStyle, options: this.suspects.map(function (v) { return ({
                        label: Suspect[v],
                        value: v
                    }); }), onChange: this.handleSuspectChange })),
            React.createElement("div", { className: "block" },
                React.createElement("label", null, "Rooms:"),
                React.createElement(Select, { placeholder: "Select a room..", styles: customStyle, options: this.rooms.map(function (v) { return ({
                        label: Room[v],
                        value: v
                    }); }), onChange: this.handleRoomChange })),
            React.createElement("div", { className: "block" },
                React.createElement("label", null, "Weapons:"),
                React.createElement(Select, { placeholder: "Select a weapon..", styles: customStyle, options: this.weapons.map(function (v) { return ({
                        label: Weapon[v],
                        value: v
                    }); }), onChange: this.handleWeaponChange }))));
    };
    return Console;
}(React.Component));
export default Console;
//# sourceMappingURL=Console.js.map