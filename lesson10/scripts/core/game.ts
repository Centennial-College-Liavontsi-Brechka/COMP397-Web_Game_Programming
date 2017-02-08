/**
 * Created by Leonti on 2016-07-04.
 */
/// <reference path="_reference.ts" />
module core {
    // declare a reference to the Preloader
    export let assets:createjs.LoadQueue;
    // make a reference to the canvas element
    let canvas:HTMLElement = document.getElementById("canvas");
    // create a reference to a stage container
    export let stage:createjs.Stage;

    let helloLabel:models.Label;
    let startButton:models.Button;

    // declare scene variables
    let currentScene:models.Scene;
    export let scene:number;

    let menu:models.Scene;
    let over:models.Scene;
    let play:models.Scene;
    // asset manifest for images and sounds
    let assetData = [
        {id: "startButton", src: "assets/images/button.png"}
    ];

    /**
     * Preloads assets for the game
     *
     * @method preload
     * @returns {void}
     */
    function preload():void {
        assets = new createjs.LoadQueue(); // instantiates the loader
        assets.installPlugin(createjs.Sound);
        assets.on("complete", init, this);
        assets.loadManifest(assetData);
    }

    function init():void {
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);

        // setup the default scene
        scene = config.Scene.MENU;
        changeScene();
    }

    function gameLoop():void {
        // call scenes update's method
        currentScene.update();

        stage.update();
    }

    function startButtonClick(eventObj:createjs.MouseEvent) {
        helloLabel.text = "Clicked!";
    }

    export function changeScene():void {
        // Launch Various Scenes
        switch (scene) {
            // Show the MENU scene
            case config.Scene.MENU:
                stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            // Show the PLAY scene
            case config.Scene.PLAY:
                stage.removeAllChildren();
                play = new scenes.Play();
                currentScene = play;
                break;
            // Show the OVER scene
            case config.Scene.OVER:
                stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;
        }
    }

    window.addEventListener("load", preload);
}