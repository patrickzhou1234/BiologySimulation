const canvas = document.getElementById("babcanv"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true);
var createScene = function (canvas, engine) {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    camera = new BABYLON.ArcRotateCamera("camera", -10, 0, 5, new BABYLON.Vector3.Zero(), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);
    
    camera.wheelPrecision = 50;
    
    camera.lowerRadiusLimit = 3;
    camera.upperRadiusLimit = 20;

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape.
    var cell = BABYLON.SceneLoader.Append("", "animal_cell.glb", scene, function (meshes) {
      camera.target = meshes[0];
    });

    ballmat = new BABYLON.StandardMaterial("mat", scene);

    const ball = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:0.5, segments:32}, scene);
    ball.position.set(0, 0, 4);
    ball.material = ballmat;

    ball.actionManager = new BABYLON.ActionManager(scene);
        ball.actionManager.registerAction(
            new BABYLON.InterpolateValueAction(
                BABYLON.ActionManager.OnPointerOverTrigger,
                ball.material,
                'diffuseColor',
                new BABYLON.Color3(0, 1, 0),
                500
            )
    );
    ball.actionManager.registerAction(
      new BABYLON.InterpolateValueAction(
          BABYLON.ActionManager.OnPointerOutTrigger,
          ball.material,
          'diffuseColor',
          new BABYLON.Color3(1, 1, 1),
          500
      )
    );
    ball.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPointerOverTrigger, function() {
          }
      )
    );

    return scene;
};

const scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener("resize", function () {
  engine.resize();
});