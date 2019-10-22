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
import { MdAdd } from "react-icons/md";
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.onChange = function (e) {
            _this.setState({ note: e.target.value });
        };
        _this.handleKeyPress = function (e) {
            if (e.key === "Enter" && _this.state.note !== "") {
                var _a = _this.state, note = _a.note, id = _a.id;
                _this.props.createNote({ note: note, id: id });
                _this.setState({ note: "", id: id + 1 });
            }
        };
        _this.state = {
            note: "",
            id: 0
        };
        return _this;
    }
    Form.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "form" },
            React.createElement(MdAdd, { size: 28 }),
            React.createElement("input", { placeholder: "Write new note here..", onKeyPress: this.handleKeyPress, onChange: function (e) { return _this.onChange(e); }, value: this.state.note })));
    };
    return Form;
}(React.Component));
export default Form;
//# sourceMappingURL=Form.js.map