/// <reference path="../../js/babylon.d.ts" />

const canvas = document.getElementById("babcanv"); 
const engine = new BABYLON.Engine(canvas, true);
let currentCamera; 

const arcRotateCamera = new BABYLON.ArcRotateCamera("arcCam", -Math.PI / 2, Math.PI / 2, 10, BABYLON.Vector3.Zero());
const freeCamera = new BABYLON.FreeCamera("freeCam", new BABYLON.Vector3(0, 5, -10));

var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    
    currentCamera = arcRotateCamera;
    currentCamera.attachControl(canvas, true); 

    var anchor = new BABYLON.TransformNode("");

    var manager = new BABYLON.GUI.GUI3DManager(scene);

    var panel = new BABYLON.GUI.CylinderPanel();
    panel.margin = 0.1;

    manager.addControl(panel);
    panel.linkToTransformNode(anchor);
    panel.position.z = -1.5;


    var addButton = function (i) {
        var button = new BABYLON.GUI.HolographicButton("orientation");
        panel.addControl(button);

        fetch("./data/data.json")
            .then((response) => response.json())
            .then((data) => {
                button.text = i + " " + data.elements[i].number;
            });
    };

    panel.blockLayout = true;
    for (var index = 0; index < 118; index++) {
        addButton(index + 1);
    }
    panel.blockLayout = false;

    return scene;
};

const scene = createScene();

engine.runRenderLoop(function () {
    scene.render();
});


window.addEventListener("keydown", function (event) {
    if (event.key === "Shift") {
        
        if (currentCamera !== freeCamera) {
            currentCamera.detachControl(canvas); 
            currentCamera = freeCamera; 
            freeCamera.attachControl(canvas, true);
        }
    }
});

window.addEventListener("keyup", function (event) {
    if (event.key === "Shift") {
        if (currentCamera !== arcRotateCamera) {
            currentCamera.detachControl(canvas);
            currentCamera = arcRotateCamera; 
            arcRotateCamera.attachControl(canvas, true); 
        }
    }
});

window.addEventListener("resize", function () {
    engine.resize();
});
