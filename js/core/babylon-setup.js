/// <reference path="../babylon.d.ts" />

const canvas = document.getElementById("babcanv"); 
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.25, 0.45, 0.65);

const camera = new BABYLON.ArcRotateCamera("camera", -10, -100, 5, new BABYLON.Vector3(0, 0, 0), scene);
camera.setTarget(BABYLON.Vector3.Zero());
camera.attachControl(canvas, true);
camera.wheelPrecision = 50;
camera.lowerRadiusLimit = 2;
camera.upperRadiusLimit = 100;
camera.radius = 5;

const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
light.intensity = 0.7;

export { engine, scene, camera, light }; 