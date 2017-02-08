/**
 * Created by Leonti on 2016-07-04.
 */
/// <reference path="../core/_reference.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var models;
(function (models) {
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button(pathString, x, y, isCentered) {
            _super.call(this, pathString);
            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
            this.x = x;
            this.y = y;
            this.on("mouseover", this._mouseOver, this);
            this.on("mouseout", this._mouseOut, this);
        }
        Button.prototype._mouseOver = function (event) {
            this.alpha = 0.7;
        };
        Button.prototype._mouseOut = function (event) {
            this.alpha = 1.0;
        };
        return Button;
    }(createjs.Bitmap));
    models.Button = Button;
})(models || (models = {}));
//# sourceMappingURL=button.js.map