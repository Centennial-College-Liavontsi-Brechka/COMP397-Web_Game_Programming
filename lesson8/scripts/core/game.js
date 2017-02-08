/**
 * Created by Leonti on 2016-07-04.
 */
/// <reference path="_reference.ts" />
var objects;
(function (objects) {
    var Person = (function () {
        // CONSTRUCTOR
        function Person(name, age) {
            this._name = name;
            this._age = age;
        }
        // PUBLIC METHODS
        Person.prototype.Speaks = function () {
            console.log(this._name + " says Hello World!");
        };
        return Person;
    }());
    objects.Person = Person;
})(objects || (objects = {}));
// make a reference to the canvas element
var canvas = document.getElementById("canvas");
// create a reference to a stage container
var stage;
var helloLabel;
var startButton;
function init() {
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", gameLoop);
    main();
}
function gameLoop() {
    stage.update();
}
function main() {
    helloLabel = new createjs.Text("Hello World!", "40px Arial", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredLineHeight() * 0.5;
    helloLabel.x = 320;
    helloLabel.y = 240;
    startButton = new models.Button("../../assets/images/button.png", 320, 340, true);
    startButton.on("click", function (eventObj) {
        helloLabel.text = "Clicked!";
    });
    stage.addChild(helloLabel);
    stage.addChild(startButton);
}
window.addEventListener("load", init);
//# sourceMappingURL=game.js.map