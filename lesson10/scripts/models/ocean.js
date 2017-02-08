var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Leonti on 2016-07-18.
 */
/// <reference path="../core/_reference.ts" />
var models;
(function (models) {
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        function Ocean(imageString) {
            _super.call(this, core.assets.getResult(imageString));
        }
        return Ocean;
    }(createjs.Bitmap));
    models.Ocean = Ocean;
})(models || (models = {}));
//# sourceMappingURL=ocean.js.map