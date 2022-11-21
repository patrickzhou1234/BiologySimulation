/// <reference path="babylon.d.ts" />

cellmeshes = [];
roundbtns=document.querySelectorAll(".smlbtns");
mitosmlbtns = document.querySelectorAll(".mitosmlbtns");
backcell = document.getElementById("backcell");
let divFps = document.getElementById("fpsct");
let cellref=0;
let memref=0;
let phoref=0;
const canvas = document.getElementById("babcanv"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true);
function showui() {
  engine.displayLoadingUI();
}

showui();

function hideui() {
  engine.hideLoadingUI();
}

function hidebtn(psbtn) {
  psbtn.setAttribute("style", "");
  psbtn.classList.remove("animbtn");
  psbtn.classList.add("animobtn");
}

function showbtn(psbtn) {
  psbtn.setAttribute("style", "");
  if (psbtn.classList.contains("animobtn")) {
    psbtn.classList.remove("animobtn");
  }
  psbtn.classList.add("animbtn");
}

function orgsettings(psorg) {
        psorg.actionManager.registerAction(
            new BABYLON.InterpolateValueAction(
                BABYLON.ActionManager.OnPointerOverTrigger,
                psorg.material,
                'diffuseColor',
                new BABYLON.Color3(0, 1, 0),
                500
            )
    );
    psorg.actionManager.registerAction(
      new BABYLON.InterpolateValueAction(
          BABYLON.ActionManager.OnPointerOutTrigger,
          psorg.material,
          'diffuseColor',
          new BABYLON.Color3(1, 1, 1),
          500
      )
    );
}

function clickcond(ind) {
  for (i=0;i<cellmeshes.length;i++) {
    cellmeshes[i].visibility = 0;
  }
  for (i=0;i<roundbtns.length;i++) {
    if (i!=ind) {
      hidebtn(roundbtns[i]);
    } else {
      roundbtns[i].setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important;");
    }
  }
}

function clickcondmito(ind) {
  for (i=0;i<cellmeshes.length;i++) {
    cellmeshes[i].visibility = 0;
  }
  for (i=0;i<mitosmlbtns.length;i++) {
    if (i!=ind) {
      hidebtn(mitosmlbtns[i]);
    } else {
      mitosmlbtns[i].setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important;");
    }
  }
}

function checkvis(ind) {
  if (!roundbtns[ind].classList.contains("animobtn") && roundbtns[ind].getAttribute("style")!="opacity: 0.6 !important; cursor: not-allowed !important;") {
    return true;
  }
  return false;
}

function checkvismito(ind) {
  if (!mitosmlbtns[ind].classList.contains("animobtn") && mitosmlbtns[ind].getAttribute("style")!="opacity: 0.6 !important; cursor: not-allowed !important;") {
    return true;
  }
  return false;
}

function bckcell() {
  hidebtn(backcell);
  for (i=0;i<cellmeshes.length;i++) {
    cellmeshes[i].visibility = 1;
  }
  showui();
  camera.lowerRadiusLimit = 5;
  BABYLON.SceneLoader.ImportMesh("", "", "animal_cell.glb", scene, function (meshes) {
    try {
      memref.dispose();
    }
    catch(err) {

    }
    try {
      phoref.dispose();
    } catch(err) {

    }
    camera.target = meshes[0];
    hideui();
    cellref=meshes[0];
  });
}

var createScene = function (canvas, engine) {
    var scene = new BABYLON.Scene(engine);

    camera = new BABYLON.ArcRotateCamera("camera", -10, -100, 5, new BABYLON.Vector3.Zero(), scene);

    camera.setTarget(BABYLON.Vector3.Zero());

    camera.attachControl(canvas, true);
    
    camera.wheelPrecision = 50;
    
    camera.lowerRadiusLimit = 5;
    camera.upperRadiusLimit = 20;

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    light.intensity = 0.7;
    
    BABYLON.SceneLoader.ImportMesh("", "", "animal_cell.glb", scene, function (meshes) {
      camera.target = meshes[0];
      hideui();
      cellref=meshes[0];
    });

    memmat = new BABYLON.StandardMaterial("mat", scene);

    const membrane = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:0.25, segments:32}, scene);
    membrane.position.set(0, 0, 3.8);
    membrane.material = memmat;
    cellmeshes.push(membrane);
    membrane.actionManager = new BABYLON.ActionManager(scene);
    membrane.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger, function() {
            camera.lowerRadiusLimit = 2;
            Swal.fire({
              title: 'Cell Membrane',
              text: 'Description',
              icon: 'question',
              background: 'black',
              color: 'white',
              imageUrl: 'cellmembrane.png',
              imageWidth: window.innerWidth*0.5,
              imageHeight: window.innerHeight*0.5,
              width: window.innerWidth*0.8,
              backdrop: false,
            }).then(function () {
              for (i=0;i<roundbtns.length;i++) {
                hidebtn(roundbtns[i]);
              }
            });
            for (i=0;i<roundbtns.length;i++) {
              showbtn(roundbtns[i]);
            }
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
      new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger, function() {
            camera.lowerRadiusLimit = 2;
            Swal.fire({
              title: 'Cell Mitochondria',
              text: 'Description',
              icon: 'question',
              background: 'black',
              color: 'white',
              backdrop: false
            }).then(function() {
              for (i=0;i<mitosmlbtns.length;i++) {
                hidebtn(mitosmlbtns[i]);
              }
            });
            for (i=0;i<mitosmlbtns.length;i++) {
              showbtn(mitosmlbtns[i]);
            }
            camera.target = mito;
            camera.inertialRadiusOffset += 4;
          }
      )
    );
    
    nucmat = new BABYLON.StandardMaterial("nuc", scene);

    nucleus = BABYLON.MeshBuilder.CreateSphere("nucleus", {diameter:0.25, segments:32}, scene);
    cellmeshes.push(nucleus);
    nucleus.material = nucmat;
    nucleus.position.set(0.3, 0.2, 0);
    nucleus.actionManager = new BABYLON.ActionManager(scene);
    nucleus.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger, function() {
            camera.lowerRadiusLimit = 2;
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
      new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger, function() {
            camera.lowerRadiusLimit = 2;
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

    for (i=0;i<cellmeshes.length;i++) {
      orgsettings(cellmeshes[i]);
    }
    return scene;
};

function membraneclicked() {
  if (checkvis(0)) {
    showui();
    clickcond(0);
    BABYLON.SceneLoader.ImportMesh("", "", "cell_membrane.glb", scene, function (meshes) {
      cellref.dispose();
      hideui();
      camera.target = meshes[0];
      memref=meshes[0];
    });
    showbtn(backcell);
  }
}

function phosphoclicked() {
  if (checkvis(1)) {
    showui();
    clickcond(1);
    BABYLON.SceneLoader.ImportMesh("", "", "phospho_sama.glb", scene, function (meshes) {
      cellref.dispose();
      hideui();
      camera.target = meshes[0];
      // meshes[0].scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);
      phoref=meshes[0];
    });
    showbtn(backcell);
  }
}

function phosphoclicked2() {
  if (checkvis(2)) {
    showui();
    clickcond(2);
    BABYLON.SceneLoader.ImportMesh("", "", "phospholipid.glb", scene, function (meshes) {
      cellref.dispose();
      hideui();
      meshes[0].scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);
      camera.target = meshes[0];
      // meshes[0].scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);
      phoref=meshes[0];
    });
    showbtn(backcell);
  }
}

function loadmito() {
  if (checkvismito(0)) {
    showui();
    clickcondmito(0);
    BABYLON.SceneLoader.ImportMesh("", "", "mitocondrias.glb", scene, function (meshes) {
      cellref.dispose();
      hideui();
      camera.target = meshes[0];
      meshes[0].scaling = new BABYLON.Vector3(5, 5, 5);
      phoref=meshes[0];
    });
    showbtn(backcell);
  }
}

const scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
  divFps.innerHTML = engine.getFps().toFixed() + " fps";
});

window.addEventListener("resize", function () {
  engine.resize();
});