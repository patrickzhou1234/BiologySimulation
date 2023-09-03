/// <reference path="babylon.d.ts" />

// stats.js implementation and styling
var stats = new Stats();
stats.dom.classList.add("statsdom");
document.body.appendChild(stats.dom);
document.querySelectorAll(".statsdom")[0].setAttribute("style", "");
// declaration

panel = document.querySelectorAll(".cd-panel")[0];
document.querySelector(".js-cd-close").onclick = () => {
    removeClass(panel, "cd-panel--is-visible");
};
function hasClass(el, className) {
    if (el.classList) return el.classList.contains(className);
    else return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
}
function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += " " + className;
}
function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else if (hasClass(el, className)) {
        var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
        el.className = el.className.replace(reg, " ");
    }
}

cellmeshes = [];
humanmeshes = [];
roundbtns = document.querySelectorAll(".smlbtns");
mitosmlbtns = document.querySelectorAll(".mitosmlbtns");
golgismlbtns = document.querySelectorAll(".golgismlbtns");
brainbtns = document.querySelectorAll(".brainbtns");
backcell = document.getElementById("backcell");
backHuman = document.getElementById("backHuman");
showSkeletal = document.getElementById("skeletal");
showNeuron = document.getElementById("neuron");
lobes = document.getElementById("lobes");
brainDivisions = document.getElementById("brainDivisions");
panelbtn = document.getElementById("panelbtn");
let cellref = 0;
let memref = 0;
let phoref = 0;
let humref = 0;
let brainref = 0;
let skeltalref = 0;
let neuronref = 0;
let lobesref = 0;
let brainDivisionsref = 0;
let lobemeshes = [];
let brainDivisionsMeshes = [];
const canvas = document.getElementById("babcanv"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true);
function showui() {
    engine.displayLoadingUI();
}

showui();

function hideui() {
    engine.hideLoadingUI();
}

// function to hide button
function hidebtn(psbtn) {
    psbtn.setAttribute("style", ""); // resets inline styling
    psbtn.classList.remove("animbtn"); // removes class
    psbtn.classList.add("animobtn"); // adds class
}

// function to show button
function showbtn(psbtn) {
    psbtn.setAttribute("style", ""); // resets inline stying
    if (psbtn.classList.contains("animobtn")) {
        psbtn.classList.remove("animobtn"); // removes class based on if the button has that class
    }
    psbtn.classList.add("animbtn"); // adds a class
}

// // adds class to each item in loop
mitosmlbtns.forEach((el) => {
    el.classList.add("animobtn");
});
golgismlbtns.forEach((el) => {
    el.classList.add("animobtn");
});
brainbtns.forEach((el) => {
    el.classList.add("animobtn");
});
roundbtns.forEach((el) => {
    el.classList.add("animobtn");
});
backcell.classList.add("animobtn");

// sets up actions to be triggered when the pointer (mouse cursor) hovers over and moves away from the 3D object
function orgsettings(psorg) {
    psorg.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOverTrigger, psorg.material, "diffuseColor", new BABYLON.Color3(0, 1, 0), 500)); // when the pointer hovers over the object, its material's diffuseColor will transition to green for 500 milliseconds
    psorg.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOutTrigger, psorg.material, "diffuseColor", new BABYLON.Color3(1, 1, 1), 500)); // when the pointer moves away, the diffuseColor will transition back to white for 500 milliseconds
}

// sets element at index 'ind' to be semi-transparent and have a 'not allowed' cursor, all other elements in cellmeshes and roundbtns are hidden
function clickcond(ind) {
    for (i = 0; i < cellmeshes.length; i++) {
        cellmeshes[i].visibility = 0;
    }
    for (i = 0; i < roundbtns.length; i++) {
        if (i != ind) {
            hidebtn(roundbtns[i]);
        } else {
            roundbtns[i].setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important;");
        }
    }
}

// sets element at index 'ind' to be semi-transparent and have a 'not allowed' cursor, all other elements in cellmeshes and mitosmlbtns are hidden
function clickcondmito(ind) {
    for (i = 0; i < cellmeshes.length; i++) {
        cellmeshes[i].visibility = 0;
    }
    for (i = 0; i < mitosmlbtns.length; i++) {
        if (i != ind) {
            hidebtn(mitosmlbtns[i]);
        } else {
            mitosmlbtns[i].setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important;");
        }
    }
}

// sets element at index 'ind' to be semi-transparent and have a 'not allowed' cursor, all other elements in cellmeshes and golgismlbtns are hidden
function clickcondgolgi(ind) {
    for (i = 0; i < cellmeshes.length; i++) {
        cellmeshes[i].visibility = 0;
    }
    for (i = 0; i < golgismlbtns.length; i++) {
        if (i != ind) {
            hidebtn(golgismlbtns[i]);
        } else {
            golgismlbtns[i].setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important;");
        }
    }
}

function clickcondhuman() {
    for (i = 0; i < cellmeshes.length; i++) {
        cellmeshes[i].visibility = 0;
    }
    backHuman.setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important;");
}

function clickcondbrain(ind) {
    for (i = 0; i < humanmeshes.length; i++) {
        humanmeshes[i].visibility = 0;
    }
    for (i = 0; i < brainbtns.length; i++) {
        if (i != ind) {
            hidebtn(brainbtns[i]);
        } else {
            brainbtns[i].setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important;");
        }
    }
}

// checks visibility of ind element in specified arrays: checks if the element does not have "animobtn" and an opaque buttin since they're only in hidden elements

function checkvis(ind) {
    if (!roundbtns[ind].classList.contains("animobtn") && roundbtns[ind].getAttribute("style") != "opacity: 0.6 !important; cursor: not-allowed !important;") {
        return true;
    }
    return false;
}

function checkvismito(ind) {
    if (!mitosmlbtns[ind].classList.contains("animobtn") && mitosmlbtns[ind].getAttribute("style") != "opacity: 0.6 !important; cursor: not-allowed !important;") {
        return true;
    }
    return false;
}

function checkvisgolgi(ind) {
    if (!golgismlbtns[ind].classList.contains("animobtn") && golgismlbtns[ind].getAttribute("style") != "opacity: 0.6 !important; cursor: not-allowed !important;") {
        return true;
    }
    return false;
}

function checkvisbrain(ind) {
    if (!brainbtns[ind].classList.contains("animobtn") && brainbtns[ind].getAttribute("style") != "opacity: 0.6 !important; cursor: not-allowed !important;") {
        return true;
    }
    return false;
}

function checkvishuman() {
    if (!backHuman.classList.contains("animobtn") && backHuman.getAttribute("style") != "opacity: 0.6 !important; cursor: not-allowed !important;") {
        return true;
    }
    return false;
}

function checkvisskeletal() {
    if (!showSkeletal.classList.contains("animobtn") && backHuman.getAttribute("style") != "opacity: 0.6 !important; cursor: not-allowed !important;") {
        return true;
    }
    return false;
}

function checkvisneuron() {
    if (!showNeuron.classList.contains("animobtn") && showNeuron.getAttribute("style") != "opacity: 0.6 !important; cursor: not-allowed !important;") {
        return true;
    }
    return false;
}
function bckcell() {
    if (!backcell.classList.contains("animobtn")) {
        hidebtn(backcell);
        showbtn(backHuman);
        hidebtn(showSkeletal);

        for (i = 0; i < cellmeshes.length; i++) {
            cellmeshes[i].visibility = 1;
        }
        for (i = 0; i < humanmeshes.length; i++) {
            humanmeshes[i].visibility = 0;
        }
        showui();
        camera.lowerRadiusLimit = 5; // sets minimum allowed distance from the camera's target (the point it's looking at) to the camera
        BABYLON.SceneLoader.ImportMesh("", "", "models/animal_cell.glb", scene, function (meshes) {
            // imports 3D mesh
            // deletes the memref and phoref variables if they exist
            try {
                memref.dispose();
            } catch (err) {}
            try {
                phoref.dispose();
            } catch (err) {}
            try {
                humref.dispose();
            } catch (err) {}
            try {
                brainref.dispose();
            } catch (err) {}
            try {
                skeletalref.dispose();
            } catch(err) {}

            hideui();

            set_camera(-10, -100, 5, 0, 0, 0);

            cellref = meshes[0]; // sets reference to this variable
        });
    }
}

var createScene = function (canvas, engine) {
    var scene = new BABYLON.Scene(engine); // creates new scene

    camera = new BABYLON.ArcRotateCamera("camera", -10, -100, 5, new BABYLON.Vector3(0, 0, 0), scene); // creates ArcRotateCamera with initial positions and target

    camera.setTarget(BABYLON.Vector3.Zero()); // sets target to origin of model

    camera.attachControl(canvas, true); // attaches camera controls to the canvas, allowing users to interact with the scene using mouse and touch controls

    camera.wheelPrecision = 50; // sets wheel precision for when scrolling with mouse

    // upper and lower bounds for camera distance from model
    camera.lowerRadiusLimit = 5;
    camera.upperRadiusLimit = 20;

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene); // adds shining light effect

    light.intensity = 0.7; // sets intesity of light

    BABYLON.SceneLoader.ImportMesh("", "", "models/animal_cell.glb", scene, function (meshes) {
        // imports mesh from animal_cell.glb
        camera.target = meshes[0]; // sets camera target to first element of meshes array
        hideui();
        cellref = meshes[0];
    });

    memmat = new BABYLON.StandardMaterial("mat", scene);

    // Creates parts of the cells using .CreateSphere and handles what to do when the user clicks on that part of the cell
    const membrane = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 0.25, segments: 32 }, scene);
    membrane.position.set(0, 0, 3.8);
    membrane.material = memmat;
    cellmeshes.push(membrane); // adds membrane to cellmeshes array
    membrane.actionManager = new BABYLON.ActionManager(scene);
    membrane.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
            camera.lowerRadiusLimit = 2;
            Swal.fire({
                title: "Cell Membrane",
                text: "The cell membrane is composed primarily of a phospholipid bilayer, with other molecules such as proteins and cholesterol embedded. Phospholipids have 2 unsaturated fatty acid tails and one head. The phospholipid head is hydrophilic (it's attracted to water) and the 2 unsaturated fatty acid tails are hydrophobic (they repel water). The phospholipid bilayer has many kinks and bends in it. This allows the inside of the membrane to be fluid, meaning it can get more or less solid depending on outside conditions, such as temperature. This characteristic is mainly due to the cholesterol embedded. The many proteins in the membrane have a vast array of uses, some including being used for transport, attachment, and signaling.",
                icon: "question",
                background: "black",
                color: "white",
                imageUrl: "images/cellmembrane.png",
                imageWidth: window.innerWidth * 0.5,
                imageHeight: window.innerHeight * 0.5,
                width: window.innerWidth * 0.8,
                backdrop: false,
            }).then(function () {
                for (i = 0; i < roundbtns.length; i++) {
                    hidebtn(roundbtns[i]);
                }
            });
            for (i = 0; i < roundbtns.length; i++) {
                showbtn(roundbtns[i]);
            }
            camera.target = membrane;
            camera.inertialRadiusOffset += 4;
        })
    );
    mitomat = new BABYLON.StandardMaterial("mito", scene);

    mito = BABYLON.MeshBuilder.CreateSphere("mito", { diameter: 0.25, segments: 32 }, scene);
    cellmeshes.push(mito);
    mito.position.set(0.4, 0.2, 3.3);
    mito.material = mitomat;
    mito.actionManager = new BABYLON.ActionManager(scene);
    mito.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
            camera.lowerRadiusLimit = 2;
            Swal.fire({
                title: "Cell Mitochondria",
                text: "The mitochondria, aka the 'powerhouse of the cell', is a very important organelle that primarily functions in generating energy in the form of ATP for cellular processes through cellular respiration. The anatomy of a mitochondrion is designed to maximize energy production. The inner and outer membranes increase surface area and provide a place for energy production to happen.",
                icon: "question",
                background: "black",
                color: "white",
                backdrop: false,
            }).then(function () {
                mitosmlbtns.forEach((el) => {
                    hidebtn(el);
                });
            });
            mitosmlbtns.forEach((el) => {
                showbtn(el);
            });
            camera.target = mito;
            camera.inertialRadiusOffset += 4;
        })
    );

    nucmat = new BABYLON.StandardMaterial("nuc", scene);

    nucleus = BABYLON.MeshBuilder.CreateSphere("nucleus", { diameter: 0.25, segments: 32 }, scene);
    cellmeshes.push(nucleus);
    nucleus.material = nucmat;
    nucleus.position.set(0.3, 0.2, 0);
    nucleus.actionManager = new BABYLON.ActionManager(scene);
    nucleus.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
            camera.lowerRadiusLimit = 2;
            Swal.fire({
                title: "Cell Nucleus",
                text: "The nucleus serves as the control center of the cell, and is where genetic information is stored. The DNA is enclosed in a protective structure called the nuclear envelope. This is a double membrane made up of a phospholipid bilayer, much like that of the cell membrane. Holes in the envelope, called nuclear pores, regulate what goes in and out of the nucleus. The interior of the nucleus, also called the nucleoplasm, contains the genetic material of the cell. In humans, there are 23 pairs of chromosomes, and the nucleus is where processes such as DNA replication and transcription happen. The nucleolus is a condensed region inside the nucleus, and it is the location of assembly of ribosomes (rRNA), which exit the nucleus for use in protein synthesis.",
                icon: "question",
                background: "black",
                color: "white",
                backdrop: false,
            });
            camera.target = nucleus;
            camera.inertialRadiusOffset += 4;
        })
    );

    gogmat = new BABYLON.StandardMaterial("gog", scene);

    golgi = BABYLON.MeshBuilder.CreateSphere("golgi", { diameter: 0.25, segments: 32 }, scene);
    cellmeshes.push(golgi);
    golgi.position.set(-1.3, 0.2, 1.7);
    golgi.material = gogmat;
    golgi.actionManager = new BABYLON.ActionManager(scene);
    golgi.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
            camera.lowerRadiusLimit = 2;
            Swal.fire({
                title: "Cell Golgi",
                text: 'The Golgi apparatus, aka the Golgi body, is an organelle composed of a series of small, flat sacs stacked in the cell\'s cytoplasm. The function of the Golgi apparatus is to sort out and package protein and lipid molecules synthesized by the ER or free-floating ribosomes for intercellular use or transport out of the cell. Additionally, the Golgi can add "tags" to molecules, making them more structurally stable. It can sometimes also locate where the tagged structure goes.',
                icon: "question",
                background: "black",
                color: "white",
                backdrop: false,
            }).then(function () {
                golgismlbtns.forEach((el) => {
                    hidebtn(el);
                });
            });
            golgismlbtns.forEach((el) => {
                showbtn(el);
            });
            //brainbtns.forEach((el) => {
            //  hidebtn(el);
            //});
            camera.target = golgi;
            camera.inertialRadiusOffset += 4;
        })
    );

    // tells each item in the cellmeshes array what to do when the mouse cursor hovers over and moves away from the part

    for (i = 0; i < cellmeshes.length; i++) {
        orgsettings(cellmeshes[i]);
    }
    return scene;
};

// handles the cases of when user clicks on the parts of the cell
function membraneclicked() {
    if (checkvis(0)) {
        // checks visibility
        showui();
        clickcond(0); // has the membrane be semi-transparent and have a not allowed cursor
        BABYLON.SceneLoader.ImportMesh("", "", "models/cell_membrane.glb", scene, function (meshes) {
            // imports 3D model
            cellref.dispose(); // rids of cellref
            try {
                humref.dispose();
            } catch (err) {}
            hideui();
            camera.target = meshes[0]; // sets camera target
            memref = meshes[0]; // sets reference of this membrane to memref
        });
        hidebtn(backHuman);
        showbtn(backcell);
    }
}

function phosphoclicked() {
    if (checkvis(1)) {
        showui();
        clickcond(1);
        BABYLON.SceneLoader.ImportMesh("", "", "models/phospho_sama.glb", scene, function (meshes) {
            cellref.dispose();
            try {
                humref.dispose();
            } catch (err) {}
            hideui();
            camera.target = meshes[0];
            // meshes[0].scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);
            phoref = meshes[0];
        });
        hidebtn(backHuman);
        showbtn(backcell);
    }
}

function phosphoclicked2() {
    if (checkvis(2)) {
        document.getElementById("swal2-html-container").innerHTML = "<ul>Selective permeability</ul><ul>Passive transport</ul><ul>Active transport</ul><ul>Facilitated transport</ul>";
        showui();
        clickcond(2);
        BABYLON.SceneLoader.ImportMesh("", "", "models/phospholipid.glb", scene, function (meshes) {
            cellref.dispose();
            try {
                humref.dispose();
            } catch (err) {}
            hideui();
            meshes[0].scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);
            camera.target = meshes[0];
            // meshes[0].scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);
            phoref = meshes[0];
        });
        hidebtn(backHuman);
        showbtn(backcell);
    }
}

function openchannel() {
    if (checkvis(3)) {
        showui();
        clickcond(3);
        BABYLON.SceneLoader.ImportMesh("", "", "models/openchannel.glb", scene, function (meshes) {
            cellref.dispose();
            try {
                humref.dispose();
            } catch (err) {}
            hideui();
            camera.target = meshes[0];
            // meshes[0].scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);
            phoref = meshes[0];
        });
        hidebtn(backHuman);
        showbtn(backcell);
    }
}

function loadmito() {
    if (checkvismito(0)) {
        showui();
        clickcondmito(0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/mitocondrias.glb", scene, function (meshes) {
            cellref.dispose();
            try {
                humref.dispose();
            } catch (err) {}
            hideui();
            camera.target = meshes[0];
            meshes[0].scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);
            phoref = meshes[0];
        });
        hidebtn(backHuman);
        showbtn(backcell);
    }
}

function loadgolgi() {
    if (checkvisgolgi(0)) {
        showui();
        clickcondgolgi(0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/golgi.glb", scene, function (meshes) {
            cellref.dispose();
            try {
                humref.dispose();
            } catch (err) {}
            hideui();

            camera.target = meshes[0];
            meshes[0].scaling = new BABYLON.Vector3(5, 5, 5);
            phoref = meshes[0];
        });
        camera.inertialRadiusOffset -= 4;
        showbtn(backcell);
        hidebtn(backHuman);
    }
}

function loadpanel() {
    addClass(panel, "cd-panel--is-visible");
}
/* 
Two buttons, one for lobes, one for fore/mid/hind brains 

Show both buttons (for lobes and brains), and when one is clicked, have the other opaque and change text from "Show Lobes" to "Hide Lobes" for examples
*/
function displayLobes() {
    if (lobes.textContent == "Show Cerebral Cortex (Lobes)" && brainDivisions.textContent == "Show Brain Divisions") {
        // Checks to make sure the button is valid to click
        brainDivisions.setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important; pointer-events: none;");
        backHuman.setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important; pointer-events: none;");
        showNeuron.setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important; pointer-events: none;");

        lobes.textContent = "Hide Cerebral Cortex (Lobes)";
        BABYLON.SceneLoader.ImportMesh("", "", "models/brain.glb", scene, function (meshes) {
            // change brain.glb to the file name with the brain model corresponding to lobes
            brainref.dispose();
            hideui();

            meshes[0].scaling = new BABYLON.Vector3(5, 5, 5);
            lobesref = meshes[0];

            console.log(meshes[0].position.x, meshes[0].position.y, meshes[0].position.z);

            console.log(camera.position.x, camera.position.y, camera.position.z);

            // Frontal Lobe
            frontalLobemat = new BABYLON.StandardMaterial("frontalLobe", scene);
            const frontalLobe = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2.5, segments: 32 }, scene);
            frontalLobe.position.set(-2.5, 18, 8);
            frontalLobe.material = frontalLobemat;
            lobemeshes.push(frontalLobe); // adds frontalLobe to lobemeshes array
            frontalLobe.actionManager = new BABYLON.ActionManager(scene);
            frontalLobe.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Frontal Lobe",
                        text: "The frontal lobe, located at the front of the cerebral cortex, plays a critical role in various higher-level cognitive functions and personality traits. It is responsible for  functions such as decision-making, problem-solving, and planning. The frontal lobe also houses the primary motor cortex, which controls voluntary movements throughout the body. In addition, it is involved in regulating emotions, social behavior, and aspects of personality, including shaping our ability to interact with others and exhibit self-control. The frontal lobe's intricate neural networks and connectivity enable us to engage in complex cognitive processes, exercise self-awareness, and make conscious choices.                        ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    });
                })
            );

            // Temporal Lobes
            temporalLobeMat = new BABYLON.StandardMaterial("temperolMat", scene);

            const temporal1 = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2.5, segments: 32 }, scene);
            temporal1.position.set(10.5, 5, 20.5); // (depth,vertical,horizantal)
            temporal1.material = temporalLobeMat;
            lobemeshes.push(temporal1); // adds frontalLobe to lobemeshes array
            temporal1.actionManager = new BABYLON.ActionManager(scene);
            temporal1.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Temporal Lobe",
                        text: "The temporal lobes, found on both sides of the brain, have distinct functions and differences. The left temporal lobe is crucial for understanding language, memory, and verbal skills. On the other hand, the right temporal lobe is involved in processing non-verbal information, recognizing faces and expressions, and understanding drawings and music. These lobes depend on input from various brain areas and sensory information, and they can even convert sounds into mental images. For instance, without the temporal lobes, comprehending speech would be difficult. In these lobes, there's a region called Wernicke's area, vital for language comprehension and speech meaning. The auditory cortex, within the temporal lobe, processes auditory information by filtering out irrelevant details and sending meaningful information to be understood. This cortex is essential for hearing and language processing, and it's a part of the limbic system, which handles emotions, memories, and motivation. The hippocampus in the temporal lobe forms new memories, while the amygdala, also in the limbic system, processes emotions, fear, and reward, influencing memory strength based on emotional significance.",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    });
                })
            ); 

            const temporal2 = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2.5, segments: 32 }, scene);
            temporal2.position.set(10.5, 5, -4); // (depth,vertical,horizantal)
            temporal2.material = temporalLobeMat;
            lobemeshes.push(temporal2); // adds frontalLobe to lobemeshes array
            temporal2.actionManager = new BABYLON.ActionManager(scene);
            temporal2.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Temporal Lobe",
                        text: "The temporal lobes, found on both sides of the brain, have distinct functions and differences. The left temporal lobe is crucial for understanding language, memory, and verbal skills. On the other hand, the right temporal lobe is involved in processing non-verbal information, recognizing faces and expressions, and understanding drawings and music. These lobes depend on input from various brain areas and sensory information, and they can even convert sounds into mental images. For instance, without the temporal lobes, comprehending speech would be difficult. In these lobes, there's a region called Wernicke's area, vital for language comprehension and speech meaning. The auditory cortex, within the temporal lobe, processes auditory information by filtering out irrelevant details and sending meaningful information to be understood. This cortex is essential for hearing and language processing, and it's a part of the limbic system, which handles emotions, memories, and motivation. The hippocampus in the temporal lobe forms new memories, while the amygdala, also in the limbic system, processes emotions, fear, and reward, influencing memory strength based on emotional significance.",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    });
                })
            ); 

            // Parietal Lobe
            parietalLobeMat = new BABYLON.StandardMaterial("temperolMat", scene);

            const parietal = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2.5, segments: 32 }, scene);
            parietal.position.set(15.5, 17, 8); // (depth,vertical,horizantal)
            parietal.material = parietalLobeMat;
            lobemeshes.push(parietal); // adds frontalLobe to lobemeshes array
            parietal.actionManager = new BABYLON.ActionManager(scene);
            parietal.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Parietal Lobe",
                        text: "The parietal lobe constitutes approximately 19% of the total neocortical volume, slightly larger than the occipital lobe. Its spatial expanse extends from the central sulcus anteriorly, demarcating it from the frontal lobe, to the parieto-occipital fissure posteriorly, segregating it from the occipital lobe. Its inferolateral boundary coincides with the lateral sulcus, separating it from the temporal lobe. Medially, its confines are defined by the medial longitudinal fissure that splits both cerebral hemispheres. Primarily responsible for sensory perception and integration, the parietal lobe plays a pivotal role in processing taste, hearing, sight, touch, and smell. Within its realm lies the brain's primary somatic sensory cortex, a critical area for interpreting input from various body regions. Remarkably, research underscores a direct relationship between sensory input and parietal lobe surface area, with more prominent sensory regions of the body, such as the fingers and hands, corresponding to larger dedicated sections of the parietal lobe. Yet, despite the progress in understanding, the parietal lobe remains enigmatic, with ongoing studies continually unveiling new insights into its functions, emphasizing the likelihood that its complete range of roles is yet to be fully uncovered.                        ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    });
                })
            );
            
            // Occipital Lobe
            occipitalLobeMat = new BABYLON.StandardMaterial("occipitalLobe", scene);

            const occipital = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2.5, segments: 32 }, scene);
            occipital.position.set(22, 5, 8); // (depth,vertical,horizantal)
            occipital.material = occipitalLobeMat;
            lobemeshes.push(occipital); // adds frontalLobe to lobemeshes array
            occipital.actionManager = new BABYLON.ActionManager(scene);
            occipital.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Occipital Lobe",
                        text: "The occipital lobe is a part of the brain responsible for processing visual information. On its outer surface, there are raised areas called gyri and grooves called sulci. The sides of the occipital lobe have three specific sulci that help define its shape. Inside, on the middle surface, there's a distinct calcarine sulcus, which divides it into the cuneus and lingual regions. The upper and lower parts of the calcarine sulcus contain the primary visual cortex, which is where we process what we see. This cortex gets information from our eyes and helps us understand things like shapes, colors, and distances. The occipital lobe's main job is to help us understand and recognize what we see. There are different areas in this lobe, like the primary visual cortex, which receives information directly from our eyes, and secondary visual cortex areas that work with this information to help us recognize objects and understand where they are. The occipital lobe also sends information to other parts of the brain through two pathways: the dorsal stream for recognizing where objects are and the ventral stream for recognizing what objects are.",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    });
                })
            );

            lobemeshes.forEach((lobe) => {
                orgsettings(lobe);
            });
        });
    } else {
        brainDivisions.setAttribute("style", "");
        backHuman.setAttribute("style", "");
        showNeuron.setAttribute("style", "");

        lobes.textContent = "Show Cerebral Cortex (Lobes)";

        lobemeshes.forEach((lobe) => {
            lobe.dispose();
        });

        camera.target = new BABYLON.Vector3(5, 5, 10);

        lobesref.dispose();

        BABYLON.SceneLoader.ImportMesh("", "", "models/brain.glb", scene, function (meshes) {
            try {
                humref.dispose();
            } catch (err) {}
            try {
                lobesref.dispose();
            } catch (err) {}
            try {
                brainDivisionsref.dispose();
            } catch (err) {}

            hideui();

            meshes[0].scaling = new BABYLON.Vector3(5, 5, 5);
            brainref = meshes[0];
        });
    }
}

function displayBrainDivisions() {
    if (brainDivisions.textContent == "Show Brain Divisions" && lobes.textContent == "Show Cerebral Cortex (Lobes)") {
        lobes.setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important; pointer-events: none;");
        showNeuron.setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important; pointer-events: none;");
        backHuman.setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important; pointer-events: none;");
        brainDivisions.textContent = "Hide Brain Divisions";
        BABYLON.SceneLoader.ImportMesh("", "", "models/halfbrain.glb", scene, function (meshes) {
            // change brain.glb to the file name with the brain model corresponding to brain divisions
            brainref.dispose();
            hideui();

            console.log(meshes[0].position.x, meshes[0].position.y, meshes[0].position.z);

            meshes[0].scaling = new BABYLON.Vector3(400, 400, 400);
            brainDivisionsref = meshes[0];

            console.log(camera.position.x, camera.position.y, camera.position.z);

            
            console.log(camera.position.x, camera.position.y, camera.position.z);



        });
    } else {
        lobes.setAttribute("style", "");
        backHuman.setAttribute("style", "");
        showNeuron.setAttribute("style", "");
        brainDivisions.textContent = "Show Brain Divisions";

        camera.target = new BABYLON.Vector3(5, 5, 10);

        brainDivisionsref.dispose();

        BABYLON.SceneLoader.ImportMesh("", "", "models/brain.glb", scene, function (meshes) {
            try {
                humref.dispose();
            } catch (err) {}
            try {
                lobesref.dispose();
            } catch (err) {}
            try {
                brainref.dispose();
            } catch (err) {}

            hideui();

            meshes[0].scaling = new BABYLON.Vector3(5, 5, 5);
            brainref = meshes[0];
        });
    }
}

function loadbrain() {
    if (checkvisbrain(0)) {
        showui();
        clickcondbrain(0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/brain.glb", scene, function (meshes) {
            console.log(meshes[0].position.x, meshes[0].position.y, meshes[0].position.z);

            console.log(camera.position.x, camera.position.y, camera.position.z);
            try {
                humref.dispose();
            } catch (err) {}
            try {
                lobesref.dispose();
            } catch (err) {}
            try {
                brainDivisionsref.dispose();
            } catch (err) {}
            try {
                skeletalref.dispose();
            } catch(err) {}

            hideui();

            meshes[0].scaling = new BABYLON.Vector3(5, 5, 5);
            brainref = meshes[0];

            set_camera(-1.57, 1.3, 60, 5, 5, 10);
        });

        camera.inertialRadiusOffset -= 4;
        showbtn(backHuman);
        showbtn(lobes);
        showbtn(brainDivisions);
        showbtn(panelbtn);
        hidebtn(backcell);
        showbtn(showNeuron);
        hidebtn(showSkeletal);
    }
}

function loadhuman() {
  //  if (checkvishuman()) {
        showui();
        clickcondhuman();
        
        BABYLON.SceneLoader.ImportMesh("", "", "models/human.glb", scene, function (meshes) {
            cellref.dispose();
            try {
                brainref.dispose();
            } catch (err) {}
            try {
                lobesref.dispose();
            } catch (err) {}
            try {
                brainDivisionsref.dispose();
            } catch (err) {}
            try {
                neuronref.dispose();
            } catch(err) {}
            hideui();
            meshes[0].scaling = new BABYLON.Vector3(400, 400, 400);

            humref = meshes[0];

            set_camera(-1.57, 1.3, 15, 0, -1, 0);
        });

        camera.inertialRadiusOffset -= 4;
        hidebtn(backHuman);
        hidebtn(lobes);
        hidebtn(brainDivisions);
        hidebtn(panelbtn);
        showbtn(backcell);
        hidebtn(showNeuron);
        showbtn(showSkeletal);

        brainmat = new BABYLON.StandardMaterial("brain", scene);

        brain = BABYLON.MeshBuilder.CreateSphere("brain", { diameter: 0.25, segments: 32 }, scene);

        humanmeshes.push(brain);
        brain.position.set(0, 3.75, -0.25);
        brain.material = brainmat;
        brain.actionManager = new BABYLON.ActionManager(scene);
        brain.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                camera.lowerRadiusLimit = 2;
                Swal.fire({
                    title: "Brain",
                    text: "The brain is the central organ of the nervous system. It is a highly complex organ that is responsible for controlling and regulating all vital body functions, as well as intelligence, consciousness, processing information, memories, thoughts, and much more. The brain is made up of billions of neurons, and billions of other supporting cells like glial cells. It is subdivided into many parts, each specialized to control specific tasks. For example, the brainstem controls vital functions, the hippocampus functions in long term memory, and the amygdala is a major center for processing emotions.",
                    icon: "question",
                    background: "black",
                    color: "white",
                    backdrop: false,
                }).then(function () {
                    brainbtns.forEach((el) => {
                        hidebtn(el);
                    });
                });
                brainbtns.forEach((el) => {
                    showbtn(el);
                });
                camera.target = brain;
                camera.inertialRadiusOffset += 4;
            })
        );

        for (i = 0; i < humanmeshes.length; i++) {
            orgsettings(humanmeshes[i]);
        }
    //}
}

function loadSkeletal() {
    if (checkvisskeletal()) {
        if (showSkeletal.textContent == "Show Skeletal") {
            showSkeletal.textContent = "Hide Skeletal";
            camera.position = new BABYLON.Vector3(4.7, 1.25, -127);
            humref.dispose();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            BABYLON.SceneLoader.ImportMesh("", "", "models/skeletal.glb", scene, function (meshes) {
                meshes[0].scaling = new BABYLON.Vector3(6, 6, 6);

                skeletalref = meshes[0];
            });
        } else {
            skeletalref.dispose();
            showSkeletal.textContent = "Show Skeletal";
            loadhuman();
        }
    }
}

function loadNeuron() {
    if(checkvisneuron()){
        if (showNeuron.textContent == "Show Neuron") {
            showNeuron.textContent = "Hide Neuron";
            lobes.setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important; pointer-events: none;");
            brainDivisions.setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important; pointer-events: none;");
            backHuman.setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important; pointer-events: none;");

            camera.position = new BABYLON.Vector3( 4.7, 1.25, -130);

            // Built-in 'sphere' shape.
            brainref.dispose();
            brainbtns.forEach((el) => {
                el.visibility = 0;
            });
            BABYLON.SceneLoader.ImportMesh("", "", "models/neuron.glb", scene, function (meshes) {
                meshes[0].scaling = new BABYLON.Vector3(0.01,0.01,0.01);
    
                neuronref = meshes[0];

                camera.target = new BABYLON.Vector3(-35,0,0);
            });
        } else {
            neuronref.dispose();
            backHuman.setAttribute("style", "");
            lobes.setAttribute("style", "");
            brainDivisions.setAttribute("style", "");

            showNeuron.textContent = "Show Neuron";

            BABYLON.SceneLoader.ImportMesh("", "", "models/brain.glb", scene, function (meshes) {
                console.log(meshes[0].position.x, meshes[0].position.y, meshes[0].position.z);
    
                console.log(camera.position.x, camera.position.y, camera.position.z);
    
                hideui();
    
                meshes[0].scaling = new BABYLON.Vector3(5, 5, 5);
                brainref = meshes[0];
    
                set_camera(-1.57, 1.3, 60, 5, 5, 10);
            });
    
            }
       
    }
}

function set_camera(x, y, radius, target_x, target_y, target_z) {
    camera = new BABYLON.ArcRotateCamera("camera", x, y, radius, new BABYLON.Vector3(target_x, target_y, target_z), scene); // creates ArcRotateCamera with initial positions and target

    camera.wheelPrecision = 50; // sets wheel precision for when scrolling with mouse

    scene.activeCamera = camera;

    camera.attachControl(canvas, true); // attaches camera controls to the canvas, allowing users to interact with the scene using mouse and touch controls
}
const scene = createScene();

engine.runRenderLoop(function () {
    scene.render();
    stats.update();
});

window.addEventListener("resize", function () {
    engine.resize();
});
