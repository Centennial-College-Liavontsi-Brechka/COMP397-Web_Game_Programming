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
     * This abstract scene class is used to create individual scenes
     */
    var Scene = (function (_super) {
        __extends(Scene, _super);
        function Scene() {
            _super.call(this);
        }
        /**
         * Adds game objects to the scene in this method
         *
         * @method start
         * @returns {void}
         */
        Scene.prototype.start = function () {
            core.stage.addChild(this);
        };
        /**
         * Updates game objects in the scene
         *
         * @method update
         * @return {void}
         */
        Scene.prototype.update = function () {
        };
        return Scene;
    }(createjs.Container));
    models.Scene = Scene;
})(models || (models = {}));
//# sourceMappingURL=scene.js.map