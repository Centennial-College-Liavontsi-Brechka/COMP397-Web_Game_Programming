/**
 * Created by Leonti on 2016-07-11.
 */
/// <reference path="../core/_reference.ts" />
module scenes {
    export class Menu extends models.Scene {
        private _menuLabel:models.Label;
        private _startButton:models.Button;

        constructor() {
            super();
        }

        /**
         *
         */
        public start():void {
            // add menu label
            this._menuLabel = new models.Label("Menu Scene", "60px", "Consolas", "#000000", 320, 240);
            this._startButton = new models.Button("startButton", 320, 420, true);
            this._startButton.on("click", this._startButtonClick, this);

            this.addChild(this._menuLabel);
            this.addChild(this._startButton);

            // add scene to the global scene container
            core.stage.addChild(this);
        }

        public update():void {

        }

        private _startButtonClick(eventObj:createjs.MouseEvent):void {
            // switch the scene
            // core.scene = config.Scene.PLAY;
            // core.changeScene();

            // for now change label text to 'clicked'
            this._menuLabel.text = "Clicked";
        }
    }
}