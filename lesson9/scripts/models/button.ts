/**
 * Created by Leonti on 2016-07-04.
 */
/// <reference path="../core/_reference.ts" />

module models {
    export class Button extends createjs.Bitmap {
        constructor(imageString:string, x:number, y:number, isCentered:boolean) {
            super(core.assets.getResult(imageString));

            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }

            this.x = x;
            this.y = y;

            this.on("mouseover", this._mouseOver, this);
            this.on("mouseout", this._mouseOut, this);
        }

        private _mouseOver(event:createjs.MouseEvent):void {
            this.alpha = 0.7;
        }

        private _mouseOut(event:createjs.MouseEvent):void {
            this.alpha = 1.0;
        }
    }
}