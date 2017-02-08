/**
 * Created by Leonti on 2016-07-04.
 */
/// <reference path="_reference.ts" />
module objects {
    export class Person {
        // PRIVATE INSTANCE VARIABLES
        private _name:string;
        private _age:number;

        // CONSTRUCTOR
        constructor(name:string, age:number) {
            this._name = name;
            this._age = age;
        }

        // PUBLIC METHODS
        public Speaks():void {
            console.log(this._name + " says Hello World!");
        }
    }
}

// make a reference to the canvas element
let canvas:HTMLElement = document.getElementById("canvas");
// create a reference to a stage container
let stage:createjs.Stage;

let helloLabel:createjs.Text;
let startButton:models.Button;

function init():void {
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20);
    createjs.Ticker.framerate = 60;
    createjs.Ticker.on("tick", gameLoop);
    main();
}

function gameLoop():void {
    stage.update();
}

function main():void {
    helloLabel = new createjs.Text("Hello World!", "40px Arial", "#000000");
    helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
    helloLabel.regY = helloLabel.getMeasuredLineHeight() * 0.5;
    helloLabel.x = 320;
    helloLabel.y = 240;

    startButton = new models.Button("../../assets/images/button.png", 320, 340, true);
    startButton.on("click", (eventObj:createjs.MouseEvent) => {
        helloLabel.text = "Clicked!";
    });

    stage.addChild(helloLabel);
    stage.addChild(startButton);
}

window.addEventListener("load", init);