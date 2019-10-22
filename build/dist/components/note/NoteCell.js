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
import * as React from "react";
import { FaTimes } from "react-icons/fa";
var NoteCell = /** @class */ (function (_super) {
    __extends(NoteCell, _super);
    function NoteCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoteCell.prototype.render = function () {
        var _a = this.props, deleteNote = _a.deleteNote, note = _a.note, id = _a.id;
        return (React.createElement("div", { className: "cell" },
            React.createElement("p", { className: "note" }, note),
            React.createElement("div", { className: "icon-container" },
                React.createElement(FaTimes, { onClick: function () { return deleteNote(id); }, color: "red", size: 22, className: "times" }))));
    };
    return NoteCell;
}(React.Component));
export default NoteCell;
//# sourceMappingURL=NoteCell.js.map