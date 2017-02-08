/**
 * Created by Leonti on 2016-07-04.
 */
/// <reference path="_reference.ts" />
var core;
(function (core) {
    // make a reference to the canvas element
    var canvas = document.getElementById("canvas");
    var helloLabel;
    var startButton;
    // declare scene variables
    var currentScene;
    var menu;
    var over;
    var play;
    // asset manifest for images and sounds
    var assetData = [
        { id: "startButton", src: "assets/images/button.png" }
    ];
    /**
     * Preloads assets for the game
     *
     * @method preload
     * @returns {void}
     */
    function preload() {
        core.assets = new createjs.LoadQueue(); // instantiates the loader
        core.assets.installPlugin(createjs.Sound);
        core.assets.on("complete", init, this);
        core.assets.loadManifest(assetData);
    }
    function init() {
        core.stage = new createjs.Stage(canvas);
        core.stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        // setup the default scene
        core.scene = config.Scene.MENU;
        changeScene();
    }
    function gameLoop() {
        // call scenes update's method
        currentScene.update();
        core.stage.update();
    }
    function startButtonClick(eventObj) {
        helloLabel.text = "Clicked!";
    }
    function changeScene() {
        // Launch Various Scenes
        switch (core.scene) {
            // Show the MENU scene
            case config.Scene.MENU:
                core.stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            // Show the PLAY scene
            case config.Scene.PLAY:
                core.stage.removeAllChildren();
                play = new scenes.Play();
                currentScene = play;
                break;
            // Show the OVER scene
            case config.Scene.OVER:
                core.stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;
        }
    }
    core.changeScene = changeScene;
    window.addEventListener("load", preload);
})(core || (core = {}));
//# sourceMappingURL=game.js.map