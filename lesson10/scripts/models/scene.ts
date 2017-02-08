/**
 * Created by Leonti on 2016-07-11.
 */
/// <reference path="../core/_reference.ts" />
module models {
    /**
     * This abstract scene class is used to create individual scenes
     */
    export abstract class Scene extends createjs.Container {
        constructor() {
            super();
        }

        /**
         * Adds game objects to the scene in this method
         *
         * @method start
         * @returns {void}
         */
        public start():void {
            core.stage.addChild(this);
        }

        /**
         * Updates game objects in the scene
         *
         * @method update
         * @return {void}
         */
        public update():void {

        }
    }
}