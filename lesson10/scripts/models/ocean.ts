/**
 * Created by Leonti on 2016-07-18.
 */
/// <reference path="../core/_reference.ts" />
module models {
    export class Ocean extends createjs.Bitmap {
        constructor(imageString:string) {
            super(core.assets.getResult(imageString));
        }
    }
}