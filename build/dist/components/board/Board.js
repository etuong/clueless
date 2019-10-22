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
import * as React from 'react';
import bathroom from '../../assets/ballroom.png';
import billiard from '../../assets/billiard.png';
import conservatory from '../../assets/conservatory.png';
import dining from '../../assets/dining.png';
import hall from '../../assets/hall.png';
import kitchen from '../../assets/kitchen.png';
import library from '../../assets/library.png';
import lounge from '../../assets/lounge.png';
import study from '../../assets/study.png';
import './Board.scss';
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Board.prototype.render = function () {
        return (React.createElement("table", null,
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("img", { src: bathroom })),
                    React.createElement("td", null,
                        React.createElement("div", { className: "horizontal-hall" })),
                    React.createElement("td", null,
                        React.createElement("img", { src: billiard })),
                    React.createElement("td", null,
                        React.createElement("div", { className: "horizontal-hall" })),
                    React.createElement("td", null,
                        React.createElement("img", { src: conservatory }))),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("div", { className: "vertical-hall" })),
                    React.createElement("td", null),
                    React.createElement("td", null,
                        React.createElement("div", { className: "vertical-hall" })),
                    React.createElement("td", null),
                    React.createElement("td", null,
                        React.createElement("div", { className: "vertical-hall" }))),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("img", { src: dining })),
                    React.createElement("td", null,
                        React.createElement("div", { className: "horizontal-hall" })),
                    React.createElement("td", null,
                        React.createElement("img", { src: hall })),
                    React.createElement("td", null,
                        React.createElement("div", { className: "horizontal-hall" })),
                    React.createElement("td", null,
                        React.createElement("img", { src: kitchen }))),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("div", { className: "vertical-hall" })),
                    React.createElement("td", null),
                    React.createElement("td", null,
                        React.createElement("div", { className: "vertical-hall" })),
                    React.createElement("td", null),
                    React.createElement("td", null,
                        React.createElement("div", { className: "vertical-hall" }))),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("img", { src: library })),
                    React.createElement("td", null,
                        React.createElement("div", { className: "horizontal-hall" })),
                    React.createElement("td", null,
                        React.createElement("img", { src: lounge })),
                    React.createElement("td", null,
                        React.createElement("div", { className: "horizontal-hall" })),
                    React.createElement("td", null,
                        React.createElement("img", { src: study }))))));
    };
    return Board;
}(React.Component));
export default Board;
//# sourceMappingURL=Board.js.map