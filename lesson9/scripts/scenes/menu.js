var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Leonti on 2016-07-11.
 */
/// <reference path="../core/_reference.ts" />
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.call(this);
        }
        /**
         *
         */
        Menu.prototype.start = function () {
            // add menu label
            this._menuLabel = new models.Label("Menu Scene", "60px", "Consolas", "#000000", 320, 240);
            this._startButton = new models.Button("startButton", 320, 420, true);
            this._startButton.on("click", this._startButtonClick, this);
            this.addChild(this._menuLabel);
            this.addChild(this._startButton);
            // add scene to the global scene container
            core.stage.addChild(this);
        };
        Menu.prototype.update = function () {
        };
        Menu.prototype._startButtonClick = function (eventObj) {
            // switch the scene
            // core.scene = config.Scene.PLAY;
            // core.changeScene();
            // for now change label text to 'clicked'
            this._menuLabel.text = "Clicked";
        };
        return Menu;
    }(models.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map