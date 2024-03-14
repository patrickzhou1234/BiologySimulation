/// <reference path="../../js/babylon.d.ts" />

const canvas = document.getElementById("babcanv"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true);
var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("cam", -Math.PI / 2, Math.PI / 2, 10, BABYLON.Vector3.Zero());
    var anchor = new BABYLON.TransformNode("");

    camera.wheelDeltaPercentage = 0.01;
    camera.attachControl(canvas, true);

    // Create the 3D UI manager
    var manager = new BABYLON.GUI.GUI3DManager(scene);

    var panel = new BABYLON.GUI.CylinderPanel();
    panel.margin = 0.5;

    manager.addControl(panel);
    panel.linkToTransformNode(anchor);
    panel.position.z = -1.5;

    // Let's add some buttons!
    var addButton = function (i) {
        var button = new BABYLON.GUI.HolographicButton("orientation");
        panel.addControl(button);

        fetch("./data/data.json")
            .then((response) => response.json())
            .then((data) => {
                button.text = i + " " + data.elements[i].name;
                console.log(data);
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

window.addEventListener("resize", function () {
    engine.resize();
});
