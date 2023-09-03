const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
const createScene = function () {
    // Creates a basic Babylon Scene object
    const scene = new BABYLON.Scene(engine);
    // Creates and positions a free camera
    camera = new BABYLON.ArcRotateCamera("camera", 0, 0, 10, new BABYLON.Vector3.Zero(), scene);
    //camera = new BABYLON.ArcRotateCamera("camera", 0, 0, 0, new BABYLON.Vector3.Zero(), scene);
    camera.setTarget(new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    // Creates a light, aiming 0,1,0 - to the sky
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    // Dim the light a small amount - 0 to 1
    light.intensity = 0.7;
    // Built-in 'sphere' shape.
    //const neuron = BABYLON.SceneLoader.ImportMeshAsync("", "/models/", "neuron.glb");
    BABYLON.SceneLoader.ImportMesh("", "", "rough_er.glb", scene, function (meshes) {
        meshes[0].scaling = new BABYLON.Vector3(6, 6, 6);
    });
    // Built-in 'ground' shape.
    //neuron.scaling = new BABYLON.Vector3(0.000001,0.0000001,0.0000001)
    return scene;
};
const scene = createScene(); //Call the createScene function
// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
    scene.render();
});
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
    engine.resize();
});