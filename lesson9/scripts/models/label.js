var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Leonti on 2016-07-11.
 */
/// <reference path="../core/_reference.ts" />
var models;
(function (models) {
    /**
     * This is a generic class for the Game BoilerPlate
     *
     * @export
     * @class Label
     * @extends {createjs.Text}
     */
    var Label = (function (_super) {
        __extends(Label, _super);
        function Label(labelString, fontSize, fontFamily, fontColor, x, y) {
            _super.call(this, labelString, (fontSize + " " + fontFamily), fontColor);
            this.labelString = labelString;
            this.fontSize = fontSize;
            this.fontFamily = fontFamily;
            this.fontColor = fontColor;
            this.regX = this.getMeasuredWidth() * 0.5;
            this.regY = this.getMeasuredHeight() * 0.5;
            // assign label coordinates
            this.x = x;
            this.y = y;
        }
        return Label;
    }(createjs.Text));
    models.Label = Label;
})(models || (models = {}));
//# sourceMappingURL=label.js.map