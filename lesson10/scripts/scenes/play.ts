/// <reference path="../core/_reference.ts" />
module scenes {
    export class Play extends models.Scene {
        //  PRIVATE INSTANCE VARIABLES


        /**
         * Creates an instance of Menu.
         *
         */
        constructor() {
            super();
        }

        /**
         *
         */
        public Start():void {
            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            // scene updates happen here...
        }

        // EVENT HANDLERS ++++++++++++++++

    }
}