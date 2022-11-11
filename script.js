cellmeshes = [];
phospho = document.getElementById("phospho");
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
    
    camera.lowerRadiusLimit = 2;
    camera.upperRadiusLimit = 20;

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Our built-in 'sphere' shape.
    cell = BABYLON.SceneLoader.Append("", "animal_cell.glb", scene, function (meshes) {
      camera.target = meshes[0];
    });

    memmat = new BABYLON.StandardMaterial("mat", scene);

    const membrane = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:0.25, segments:32}, scene);
    membrane.position.set(0, 0, 3.8);
    membrane.material = memmat;
    cellmeshes.push(membrane);

    membrane.actionManager = new BABYLON.ActionManager(scene);
        membrane.actionManager.registerAction(
            new BABYLON.InterpolateValueAction(
                BABYLON.ActionManager.OnPointerOverTrigger,
                membrane.material,
                'diffuseColor',
                new BABYLON.Color3(0, 1, 0),
                500
            )
    );
    membrane.actionManager.registerAction(
      new BABYLON.InterpolateValueAction(
          BABYLON.ActionManager.OnPointerOutTrigger,
          membrane.material,
          'diffuseColor',
          new BABYLON.Color3(1, 1, 1),
          500
      )
    );
    membrane.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger, function() {
            Swal.fire({
              title: 'Cell Membrane',
              text: 'Description',
              icon: 'question',
              background: 'black',
              color: 'white',
              imageUrl: 'cellmembrane.png',
              imageWidth: window.innerWidth*0.6,
              imageHeight: window.innerHeight*0.5,
              width: window.innerWidth*0.8,
              height: window.innerHeight*0.8,
              backdrop: false,
            }).then(function () {
              phospho.classList.remove("animbtn");
              phospho.classList.add("animobtn");
              setTimeout(function() {
                phospho.classList.remove("animobtn");
              }, 1000);
            });
            phospho.classList.add("animbtn");
            camera.target = membrane;
            camera.inertialRadiusOffset += 4;
          }
      )
    );

    mitomat = new BABYLON.StandardMaterial("mito", scene);

    mito = BABYLON.MeshBuilder.CreateSphere("mito", {diameter:0.25, segments:32}, scene);
    cellmeshes.push(mito);
    mito.position.set(0.4, 0.2, 3.3);
    mito.material = mitomat;

    mito.actionManager = new BABYLON.ActionManager(scene);
        mito.actionManager.registerAction(
            new BABYLON.InterpolateValueAction(
                BABYLON.ActionManager.OnPointerOverTrigger,
                mito.material,
                'diffuseColor',
                new BABYLON.Color3(0, 1, 0),
                500
            )
    );
    mito.actionManager.registerAction(
      new BABYLON.InterpolateValueAction(
          BABYLON.ActionManager.OnPointerOutTrigger,
          mito.material,
          'diffuseColor',
          new BABYLON.Color3(1, 1, 1),
          500
      )
    );
    mito.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger, function() {
            Swal.fire({
              title: 'Cell Mitochondria',
              text: 'Description',
              icon: 'question',
              background: 'black',
              color: 'white'
            });
            camera.target = mito;
            camera.inertialRadiusOffset += 4;
          }
      )
    );
    
    nucmat = new BABYLON.StandardMaterial("nuc", scene);

    nucleus = BABYLON.MeshBuilder.CreateSphere("nucleus", {diameter:0.25, segments:32}, scene);
    cellmeshes.push(nucleus);
    nucleus.position.set(0.3, 0.2, 0);
    nucleus.material = nucmat;

    nucleus.actionManager = new BABYLON.ActionManager(scene);
        nucleus.actionManager.registerAction(
            new BABYLON.InterpolateValueAction(
                BABYLON.ActionManager.OnPointerOverTrigger,
                nucleus.material,
                'diffuseColor',
                new BABYLON.Color3(0, 1, 0),
                500
            )
    );
    nucleus.actionManager.registerAction(
      new BABYLON.InterpolateValueAction(
          BABYLON.ActionManager.OnPointerOutTrigger,
          nucleus.material,
          'diffuseColor',
          new BABYLON.Color3(1, 1, 1),
          500
      )
    );
    nucleus.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger, function() {
            Swal.fire({
              title: 'Cell Nucleus',
              text: 'Description',
              icon: 'question',
              background: 'black',
              color: 'white',
              backdrop: false
            });
            camera.target = nucleus;
            camera.inertialRadiusOffset += 4;
          }
      )
    );

    gogmat = new BABYLON.StandardMaterial("gog", scene);

    golgi = BABYLON.MeshBuilder.CreateSphere("golgi", {diameter:0.25, segments:32}, scene);
    cellmeshes.push(golgi);
    golgi.position.set(-1.3, 0.2, 1.7);
    golgi.material = gogmat;

    golgi.actionManager = new BABYLON.ActionManager(scene);
        golgi.actionManager.registerAction(
            new BABYLON.InterpolateValueAction(
                BABYLON.ActionManager.OnPointerOverTrigger,
                golgi.material,
                'diffuseColor',
                new BABYLON.Color3(0, 1, 0),
                500
            )
    );
    golgi.actionManager.registerAction(
      new BABYLON.InterpolateValueAction(
          BABYLON.ActionManager.OnPointerOutTrigger,
          golgi.material,
          'diffuseColor',
          new BABYLON.Color3(1, 1, 1),
          500
      )
    );
    golgi.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger, function() {
            Swal.fire({
              title: 'Cell Golgi',
              text: 'Description',
              icon: 'question',
              background: 'black',
              color: 'white',
              backdrop: false
            });
            camera.target = golgi;
            camera.inertialRadiusOffset += 4;
          }
      )
    );
    return scene;
};

function membraneclicked() {
  for (i=0;i<cellmeshes.length;i++) {
    cellmeshes[i].visibility = 0;
  }
}

const scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener("resize", function () {
  engine.resize();
});