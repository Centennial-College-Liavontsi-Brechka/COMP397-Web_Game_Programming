/**
 * Created by Leonti on 2016-05-16.
 */
/// <reference path="../libs/typings/easeljs/easeljs.d.ts" />;
var stage;
var canvas = document.getElementById("canvas");
function init() {
    console.log("Hello world!");
    stage = new createjs.Stage(canvas);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", gameLoop);
    main();
}
function gameLoop() {
    stage.update();
}
function main() {
    console.log("Running...");
    var textHello = new createjs.Text("COMP 397", "40px Arial", "#00FF00");
    textHello.x = 100;
    textHello.y = 200;
    stage.addChild(textHello);
}
//# sourceMappingURL=game.js.map