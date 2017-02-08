/**
 * Created by Leonti on 2016-07-11.
 */
/// <reference path="../core/_reference.ts" />
module models {
    /**
     * This is a generic class for the Game BoilerPlate
     *
     * @export
     * @class Label
     * @extends {createjs.Text}
     */
    export class Label extends createjs.Text {
        constructor(private labelString:string,
                    private fontSize:string,
                    private fontFamily:string,
                    private fontColor:string,
                    x:number, y:number) {
            super(labelString, (fontSize + " " + fontFamily), fontColor);

            this.regX = this.getMeasuredWidth() * 0.5;
            this.regY = this.getMeasuredHeight() * 0.5;

            // assign label coordinates
            this.x = x;
            this.y = y;
        }
    }
}