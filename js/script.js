/// <reference path="babylon.d.ts" />

// stats.js implementation and styling
var stats = new Stats();
stats.dom.classList.add("statsdom");
document.body.appendChild(stats.dom);
document.querySelectorAll(".statsdom")[0].setAttribute("style", "");
// declaration


panel = document.querySelectorAll(".cd-panel")[0]; // get access to the html code of the brain info panel
document.querySelector(".js-cd-close").onclick = () => { // when the close button is clicked for the brain info panel, remove the class that makes the panel visible
    removeClass(panel, "cd-panel--is-visible");
};
// same as above but for ribosome information
ribopanel = document.querySelectorAll(".cd-ribopanel")[0];
document.querySelector(".js-cd-riboclose").onclick = () => {
    removeClass(ribopanel, "cd-panel--is-visible");
    hidebtn(ribopanelbtn); // dont want to see the info button when panel is closed, so hide this btn on click of the close btn
    showbtn(searchbox); // when the panel openned, we had made the search box disappear, this makes it reappear once panel closes
};

// returns boolean on whether or not an element has a class
function hasClass(el, className) {
    if (el.classList) return el.classList.contains(className);
    else return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
}
// adds class to an element
function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += " " + className;
}
// removes class from an element
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
roughersmlbtns = document.querySelectorAll(".roughersmlbtns");
smoothersmlbtns = document.querySelectorAll(".smoothersmlbtns");
brainbtns = document.querySelectorAll(".brainbtns");
eyebtns = document.querySelectorAll(".eyebtns");
heartbtns = document.querySelectorAll(".heartbtns");
kidneybtns = document.querySelectorAll(".kidneybtns");
exretorybtns = document.querySelectorAll(".exretorybtns");
lungbtns = document.querySelectorAll(".lungbtns");
tracheabtns = document.querySelectorAll(".tracheabtns");
stomachbtns = document.querySelectorAll(".stomachbtns");
digestivebtns = document.querySelectorAll(".digestivebtns");
circulatorybtns = document.querySelectorAll(".circulatorybtns");
bronchibtns = document.querySelectorAll(".bronchibtns");
lymphbtns = document.querySelectorAll(".lymphbtns");
liverbtns = document.querySelectorAll(".liverbtns");
esophagusbtns = document.querySelectorAll(".esophagusbtns");
intestinebtns = document.querySelectorAll(".intestinebtns");
spleenbtns = document.querySelectorAll(".spleenbtns");
pancreasbtns = document.querySelectorAll(".pancreasbtns");
colonbtns = document.querySelectorAll(".colonbtns");
skinbtns = document.querySelectorAll(".skinbtns");
endocrinebtns = document.querySelectorAll(".endocrinebtns");
muscularbtns = document.querySelectorAll(".muscularbtns");
spinebtns = document.querySelectorAll(".spinebtns");
digestiveinsitubtns = document.querySelectorAll(".digestiveinsitubtns");
skullbtns = document.querySelectorAll(".skullbtns");
backcell = document.getElementById("backcell");
backHuman = document.getElementById("backHuman");
backPageBtn = document.getElementById("backbtn");
nephronbtn = document.getElementById("nephronbtn");
backExretory = document.getElementById("backExretory");
showExterior = document.getElementById("exterior");
showNeuron = document.getElementById("neuron");
showETC = document.getElementById("ETC");
panelbtn = document.getElementById("panelbtn");
ribopanelbtn = document.getElementById("ribopanelbtn");
searchbox = document.getElementById("searchbox");
kidney2dmodelbtn = document.getElementById("kidney2dmodelbtn");
let cellref = 0;
let memref = 0;
let phoref = 0;
let humref = 0;
let brainref = 0;
let liverref =0;
let skinref = 0;
let intestineref = 0;
let spleenref = 0;
let pancreasref = 0;
let esophagusref = 0;
let colonref = 0;
let skeletalref = 0;
let digestiveinsituref = 0;
let skullref = 0;
let circulatoryref = 0;
let bronchiref = 0;
let trachearef = 0;
let digestiveref = 0;
let lymphref = 0;
let muscularref =0;
let endocrineref=0;
let ETCref = 0;
let neuronref = 0;
let eyeref = 0;
let riboref = 0;
let exteriorref = 0;
let spineref = 0;
let curFunction = "";
let lobemeshes = [];
let eyemeshes = [];
let neuronmeshes = [];
let lungmeshes = [];
let digestiveinsitumeshes = [];
let skeletalmeshes = [];
let kidneymeshes = [];
let nephronmeshes = [];
let digestivemeshes = [];
let skullmeshes = [];
let skinmeshes = [];
let circulatorymeshes = [];
let bronchimeshes = [];
let lymphmeshes = [];
let muscularmeshes = [];
let spinemeshes = [];
let endocrinemeshes = [];
let exretorymeshes = [];
let livermeshes =[];
let intestinemeshes = [];
let spleenmeshes = [];
let pancreasmeshes = [];
let esophagusmeshes = [];
let tracheameshes = [];
let colonmeshes = [];
let allMeshes = [];
let buttons = [backcell, backHuman, backExretory, backKidney, showNeuron, showETC, panelbtn, showExterior, kidney2dmodelbtn, nephronbtn];
let buttonArrays = [tracheabtns, roundbtns, mitosmlbtns, golgismlbtns, brainbtns, heartbtns, skinbtns, skullbtns, kidneybtns, spinebtns, endocrinebtns, liverbtns, intestinebtns, colonbtns, pancreasbtns, digestiveinsitubtns, muscularbtns, lungbtns, stomachbtns, digestivebtns, circulatorybtns,lymphbtns, eyemeshes, roughersmlbtns, smoothersmlbtns, exretorybtns, bronchibtns, esophagusbtns];
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

/**
 * Creates a sphere button on a model which will show a popup upon clicking
 *
 * @param diameter Diameter of the sphere (default is 0.25)
 * @param depth Depth of the sphere into the 3d model
 * @param verticalpos Vertical position of the sphere
 * @param horizontalpos Horizontal position of the sphere
 * @param meshesarray The array to push the sphere object into (i.e. cellmeshes/humanmeshes)
 * @param onclick Function to call once the sphere is clicked (Swal.fire function to show a popup)
 */
function createSphereBtn(depth, verticalpos, horizontalpos, meshesarray, onclick, diameter = 0.25){
    mat = new BABYLON.StandardMaterial("Material", scene);
    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: diameter, segments: 32 }, scene);
    sphere.position.set(depth, verticalpos, horizontalpos); // (depth,vertical,horizantal)
    sphere.material = mat;
    meshesarray.push(sphere);
    sphere.actionManager = new BABYLON.ActionManager(scene);
    sphere.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function(){
            camera.lowerRadiusLimit = 2;
            onclick()
        })
    );
}

class Memory {
    constructor(parent,child) {
        this.p = parent;
        this.c = child;
    }
    getParent() {
        return this.p;
    }
    getChild() {
        return this.c;
    }
    setParent(parent) {
        this.p = parent;
    }
    setChild(child) {
        this.c = child;
    }
}

const m = new Memory(null, "loadhuman(0)");
/**
 * Creates a basic popup with a title, description, and 3d model button
 * 
 * @param {string} title Title of the popup
 * @param {string} description k in the popup
 * @param {*} modelBtnRef Class of the model which refers to the 3d model (i.e. mitosmlbtns)
 */
function change(prev, next) {
    m.setParent(prev);
    m.setChild(next);
}

function createBasicPopup(title, description, modelBtnRef = null){
    if(modelBtnRef != null){
        Swal.fire({
            title: title,
            text: description,
            icon: "question",
            background: "black",
            color: "white",
            backdrop: false,
        }).then(function () {
            modelBtnRef.forEach((el) => {
                hidebtn(el);
            });
        });
        modelBtnRef.forEach((el) => {
            showbtn(el);
        });
    }
    else{
        Swal.fire({
            title: title,
            text: description,
            icon: "question",
            background: "black",
            color: "white",
            backdrop: false,
        }) 
    }
}

for(btn of buttonArrays){
    btn.forEach((el) => {
        el.classList.add("animobtn");
    });
}
backcell.classList.add("animobtn");

// sets up actions to be triggered when the pointer (mouse cursor) hovers over and moves away from the 3D object
function orgsettings(psorg) {
    psorg.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOverTrigger, psorg.material, "diffuseColor", new BABYLON.Color3(0, 1, 0), 500)); // when the pointer hovers over the object, its material's diffuseColor will transition to green for 500 milliseconds
    psorg.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOutTrigger, psorg.material, "diffuseColor", new BABYLON.Color3(1, 1, 1), 500)); // when the pointer moves away, the diffuseColor will transition back to white for 500 milliseconds
}

/**
 * sets element at index 'ind' to be semi-transparent and have a 'not allowed' cursor, all other elements in cellmeshes and roundbtns are hidden
 *
 * @param meshesarray The array which contains the meshes of the sphere buttons (i.e. cellmeshes/humanmeshes)
 * @param btnclass The class of the button (i.e. roundbtns, lungbtns, etc.)
 * @param ind index of the button in the btnclass (if applicable)
 */
function clickcond(meshesarray, btnclass, ind = null) {
    // Makes all the sphere buttons dissapear
    for (i = 0; i < meshesarray.length; i++) {
        meshesarray[i].visibility = 0;
    }

    if(ind != null){
        for (i = 0; i < btnclass.length; i++) {
            if (i != ind) {
                hidebtn(btnclass[i]);
            } else {
                btnclass[i].setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important;");
            }
        }
    }

    else{
        btnclass.setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important;");
    }
}
function clickcondeye(ind) {
    for (i = 0; i < humanmeshes.length; i++) {
        humanmeshes[i].visibility = 0;
    }
    for (i = 0; i < eyebtns.length; i++) {
        if (i != ind) {
            hidebtn(eyebtns[i]);
        } else {
            eyebtns[i].setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important;");
        }
    }
}

// checks visibility of ind element in specified arrays: checks if the element does not have "animobtn" and an opaque buttin since they're only in hidden elements

function checkvis(btn) {
    if (!btn.classList.contains("animobtn") && btn.getAttribute("style") != "opacity: 0.6 !important; cursor: not-allowed !important;") {
        return true;
    }
    return false;
}

// loads the cell you see on openning of website
function loadcell() {
    // if (!backcell.classList.contains("animobtn")) {
    clearbtns(); // function that hides all btns
    showbtn(backHuman);
    // showbtn(backHuman);
    change(m.getChild(), "loadcell()");
    // hide human meshes but show cell meshes
    for (i = 0; i < cellmeshes.length; i++) {
        cellmeshes[i].visibility = 1;
    }
    for (i = 0; i < humanmeshes.length; i++) {
        humanmeshes[i].visibility = 0;
    }
    showui();
    camera.lowerRadiusLimit = 2; // sets minimum allowed distance from the camera's target (the point it's looking at) to the camera
    clear()
    importmesh("ribosoma.glb", new BABYLON.Vector3(0.5, 0.5, 0.5), new BABYLON.Vector3(0.4855579893367401,-0.19247690443455667,2.106724807070549))
    BABYLON.SceneLoader.ImportMesh("", "", "models/animal_cell.glb", scene, function (meshes) {
        // imports 3D mesh

        hideui();

        camera.position = new BABYLON.Vector3(-10, 100, 5);
        camera.target = new BABYLON.Vector3(0, 0, 0);
        camera.radius = 5;

        cellref = meshes[0]; // sets reference to this variable

        allMeshes.push(cellref); // adds cellref to an array allMeshes

        cellSpheres(); // function that displays all the spheres associated with the parts of a cell (mitochondria, ...)
    });
}

var createScene = function (canvas, engine) {
    var scene = new BABYLON.Scene(engine); // creates new scene

    camera = new BABYLON.ArcRotateCamera("camera", -10, -100, 5, new BABYLON.Vector3(0, 0, 0), scene); // creates ArcRotateCamera with initial positions and target

    camera.setTarget(BABYLON.Vector3.Zero()); // sets target to origin of model

    camera.attachControl(canvas, true); // attaches camera controls to the canvas, allowing users to interact with the scene using mouse and touch controls

    camera.wheelPrecision = 50; // sets wheel precision for when scrolling with mouse

    // upper and lower bounds for camera distance from model
    camera.lowerRadiusLimit = 2;
    camera.upperRadiusLimit = 100;

    camera.radius = 5;

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene); // adds shining light effect

    light.intensity = 0.7; // sets intesity of light

    // BABYLON.SceneLoader.ImportMesh("", "", `models/ribosoma.glb`, scene, function (meshes) {
    //     // imports 3D model
    //     meshes[0].scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);
    //     meshes[0].position = new BABYLON.Vector3(0.4855579893367401,-0.19247690443455667,2.106724807070549);
    //     allMeshes.push(meshes[0]);
    // });

    // BABYLON.SceneLoader.ImportMesh("", "", "models/animal_cell.glb", scene, function (meshes) {
    //     // imports mesh from animal_cell.glb
    //     camera.target = meshes[0]; // sets camera target to first element of meshes array
    //     hideui();
    //     cellref = meshes[0];

    //     allMeshes.push(cellref);
    // });

    document.addEventListener("DOMContentLoaded", function () {
        loadhuman(0);
    });

    // const axes = new BABYLON.AxesViewer(scene);



    // let vector = { x:'', y:'', z:'' };
    // scene.onPointerDown = function (event, pickResult){
    //         //left mouse click
    //         if(event.button == 0){
    //             try{
    //                 vector = pickResult.pickedPoint;
    //                 console.log('left mouse click: ' + vector.x + ',' + vector.y + ',' + vector.z );
    //             }catch (err){}
    //         }
    // }

    return scene;
};

function cellSpheres() {
   createSphereBtn(0, 0, 3.8, cellmeshes, function(){
        Swal.fire({
            title: "Cell Membrane",
            text: "The cell membrane is composed primarily of a phospholipid bilayer, with other molecules such as proteins and cholesterol embedded. Phospholipids have 2 unsaturated fatty acid tails and one head. The phospholipid head is hydrophilic (it's attracted to water) and the 2 unsaturated fatty acid tails are hydrophobic (they repel water). The phospholipid bilayer has many kinks and bends in it. This allows the inside of the membrane to be fluid, meaning it can get more or less solid depending on outside conditions, such as temperature. This characteristic is mainly due to the cholesterol embedded. The many proteins in the membrane have a vast array of uses, some including being used for transport, attachment, and signaling.",
            background: "black",
            color: "white",
            imageUrl: "images/cellmembrane.png",
            imageWidth: window.innerWidth * 0.5,
            imageHeight: window.innerHeight * 0.5,
            footer: "Click on a button to learn more about a feature of the cell membrane (Hover over a button to see what feature it will show)",
            width: window.innerWidth * 0.8,
            backdrop: false,
        }).then(function () {
            // hides all btns that are part of roundbtns (the hiding and showing of these btns makes more sense when u run the website and physically experiment with it)
            for (i = 0; i < roundbtns.length; i++) {
                hidebtn(roundbtns[i]);
            }
        });
        // shows all btns that are part of roundbtns
        for (i = 0; i < roundbtns.length; i++) {
            showbtn(roundbtns[i]);
        }
    })
    createSphereBtn(0.4, 0.2, 3.3, cellmeshes, function(){createBasicPopup("Cell Mitochondria", "The mitochondria, aka the 'powerhouse of the cell', is a very important organelle that primarily functions in generating energy in the form of ATP for cellular processes through cellular respiration. The anatomy of a mitochondrion is designed to maximize energy production. The inner and outer membranes increase surface area and provide a place for energy production to happen.", mitosmlbtns)})
    createSphereBtn(0.3, 0.2, 0, cellmeshes, function(){createBasicPopup("Cell Nucleus", "The nucleus serves as the control center of the cell, and is where genetic information is stored. The DNA is enclosed in a protective structure called the nuclear envelope. This is a double membrane made up of a phospholipid bilayer, much like that of the cell membrane. Holes in the envelope, called nuclear pores, regulate what goes in and out of the nucleus. The interior of the nucleus, also called the nucleoplasm, contains the genetic material of the cell. In humans, there are 23 pairs of chromosomes, and the nucleus is where processes such as DNA replication and transcription happen. The nucleolus is a condensed region inside the nucleus, and it is the location of assembly of ribosomes (rRNA), which exit the nucleus for use in protein synthesis.")})
    createSphereBtn(-1.3, 0.2, 1.7, cellmeshes, function(){createBasicPopup("Cell Golgi", 'The Golgi apparatus, aka the Golgi body, is an organelle composed of a series of small, flat sacs stacked in the cell\'s cytoplasm. The function of the Golgi apparatus is to sort out and package protein and lipid molecules synthesized by the ER or free-floating ribosomes for intercellular use or transport out of the cell. Additionally, the Golgi can add "tags" to molecules, making them more structurally stable. It can sometimes also locate where the tagged structure goes.', golgismlbtns)})
    createSphereBtn(0.4839717512431795,0.070853748469808,2.111442063940009, cellmeshes, function (){
        showbtn(ribopanelbtn)
        Swal.fire({
            title: "Ribosome",
            text: "Ribosomes, complexes made of ribosomal RNA (rRNA) and protein, carry out protein synthesis in cells. They are made up of a larger top subunit and a smaller bottom subunit. These both interact with mRNA and tRNA molecules to perform translation. High rates of protein synthesis are associated with an abundance of ribosomes. Ribosomes function in two cytoplasmic locations: free ribosomes in the cytosol and bound ribosomes attached to the rough endoplasmic reticulum or nuclear envelope. Both bound and free ribosomes are structurally identical and can switch roles. Free ribosomes produce proteins for the cytosol, such as enzymes catalyzing sugar breakdown, while bound ribosomes create proteins for membrane insertion, packaging within organelles, or cell export, common in cells specialized in protein secretion, like the pancreas cells that secrete digestive enzymes.",
            icon: "question",
            background: "black",
            color: "white",
            backdrop: false,
        }).then(function() {
            // after "ok" button is clicked and the ribo info panel btn does not have the specified class, then hide the btn
            if(!(ribopanel.classList.contains("cd-panel--is-visible"))) {
                hidebtn(ribopanelbtn);
            }
        })
    }, 0.15)
    createSphereBtn(1.8, 0.2, -0.5, cellmeshes, function(){createBasicPopup("Rough Endoplasmic Reticulum", "The Rough ER, studded with ribosomes, plays a role in synthesizing and secreting proteins. It also acts as a membrane factory, growing by incorporating proteins and phospholipids and transporting them via vesicles to other parts of the cell.", roughersmlbtns)})
    createSphereBtn(1.2248904211980474,0.16952203700465684,1.8693672639905412, cellmeshes, function(){createBasicPopup("Smooth Endoplasmic Reticulum", "(add description here)", smoothersmlbtns)})
    createSphereBtn(0.353150398090031,0.4304624896982965,-0.32896007806854577, cellmeshes, function(){createBasicPopup("Nucleolus", "The nucleolus is a condensed region inside the nucleus, and it is the location of assembly of ribosomes (rRNA), which exit the nucleus for use in protein synthesis. ")}) 
    createSphereBtn(1.1942075977140756,0.15042321941889902,2.4992473761184826, cellmeshes, function(){createBasicPopup("Centrioles", "Centrioles are essential for cell division, aiding in the organization of microtubules during mitosis and meiosis. They also contribute to the formation of cilia and flagella, crucial for cell movement and sensory functions. ")}) 

    // tells each item in the cellmeshes array what to do when the mouse cursor hovers over and moves away from the part

    for (i = 0; i < cellmeshes.length; i++) {
        orgsettings(cellmeshes[i]);
    }
}

/**
 * Imports a specified mesh
 *
 * @param {string} filename the name of the glb file
 * @param {BABYLON.Vector3} scaling scaling of the mesh (i.e. new BABYLON.Vector3(5, 5, 5)), will use default scaling if argument is not provided   
 * @param {BABYLON.Vector3} position position of the mesh (i.e. new BABYLON.Vector3(5, 5, 5)), will use default position if argument is not provided  
 * @param {BABYLON.Vector3} camera_target axes to target the camera at (i.e. new BABYLON.Vector3(5, 5, 5)), will use default axes if argument is not provided
 * @param {BABYLON.Vector3} camera_position initial position of the camera (i.e. new BABYLON.Vector3(5, 5, 5)), will use position axes if argument is not provided

*/ 
function importmesh(filename, scaling = null, position = null, camera_target = null, camera_position = new BABYLON.Vector3(0, 0, 0)) {
    showui();
    BABYLON.SceneLoader.ImportMesh("", "", `models/${filename}`, scene, function (meshes) {
        // imports 3D model
        hideui();  
        if(camera_target == null){
            camera.target = meshes[0]; // sets camera target
        }
        else{
            camera.target = camera_target;
        }
        if(scaling != null){
            meshes[0].scaling = scaling;
        }
        if(position != null){
            meshes[0].position = position;
        }
        camera.position = camera_position;
        allMeshes.push(meshes[0]);
    });
}

// handles the cases of when user clicks on the parts of the cell
function membraneclicked() {
    if (checkvis(roundbtns[0])) {
        clickcond(cellmeshes, roundbtns, 0);
        clear()
        importmesh("cell_membrane.glb")
        hidebtn(backHuman);
        showbtn(backcell);
    }
}

function phosphoclicked() {
    if (checkvis(roundbtns[1])){
        clickcond(cellmeshes, roundbtns, 1);
        clear()
        importmesh("phospho_sama.glb")
        hidebtn(backHuman);
        showbtn(backcell);
    }
}

function phosphoclicked2() {
    if (checkvis(roundbtns[2])) {
        document.getElementById("swal2-html-container").innerHTML = "<ul>Selective permeability</ul><ul>Passive transport</ul><ul>Active transport</ul><ul>Facilitated transport</ul>";
        clickcond(cellmeshes, roundbtns, 2);
        clear()
        importmesh("phospholipid.glb")
        hidebtn(backHuman);
        showbtn(backcell);  
    }
}

function openchannel() {
    if (checkvis(roundbtns[3])) {
        clickcond(cellmeshes, roundbtns, 3);
        clear()
        importmesh("openchannel.glb")
        hidebtn(backHuman);
        showbtn(backcell);
    }
}

function cholestrolclicked() {
    if (checkvis(roundbtns[4])) {
        clickcond(cellmeshes, roundbtns, 4);
        clear()
        importmesh("Cholestoral.glb")
        hidebtn(backHuman);
        showbtn(backcell);
    }
}

function receptorproteinclicked() {
    showui();
    clickcond(cellmeshes, roundbtns, 4);
    clear();
    hideui();
    hidebtn(backHuman);
    showbtn(backcell);
}

function loadmito(val) {
    if (checkvis(mitosmlbtns[0]) || val == 0) {
        clickcond(cellmeshes, mitosmlbtns, 0);
        clear()
        scaling = new BABYLON.Vector3(5, 5, 5)
        importmesh("mitocondrias.glb", scaling)
        showbtn(backcell);
        showbtn(showETC);
        showETC.textContent = "Show Electron Transport Chain";
    }
}
function loadETC(val){
    if (showETC.textContent == "Show Electron Transport Chain") {
        showETC.textContent = "Hide Electron Transport Chain";
        showETC.textContent = "Hide Electron Transport Chain";
        scaling = new BABYLON.Vector3(5, 5, 5)
        clearbtns();
        clear();
        BABYLON.SceneLoader.ImportMesh("", "", "models/etc.glb", scene, function (meshes) {
            etcref = meshes[0];
            allMeshes.push(etcref);
            showbtn(backcell);
        });
}
}

function loadgolgi(val) {
    if (checkvis(golgismlbtns[0]) || val == 0) {
        clickcond(cellmeshes, golgismlbtns, 0);
        clear()
        scaling = new BABYLON.Vector3(5, 5, 5)
        importmesh("golgi.glb", scaling)
    }
}

function loadrougher(val) {
    clickcond(cellmeshes, roughersmlbtns, 0);
    clear()
    importmesh("rough_er.glb", new BABYLON.Vector3(20, 20, 20))
}

function loadsmoother(val) {
    clickcond(cellmeshes, smoothersmlbtns, 1);
    clear()
    importmesh("smooth_er.glb", new BABYLON.Vector3(0.01, 0.01, 0.01), new BABYLON.Vector3(0, 0, 0.5), new BABYLON.Vector3(0, 0, 0))
}

function loadpanel() {
    addClass(panel, "cd-panel--is-visible");
}
function loadribopanel() {
    hidebtn(searchbox);
    hidebtn(ribopanelbtn)
    Swal.close(); // closes the pop up with info on the ribosome
    addClass(ribopanel, "cd-panel--is-visible");
}

function showExteriorBrain() {
    change(m.getChild(), "showExteriorBrain()");
    if (showExterior.textContent == "Show Exterior View") {
        showExterior.textContent = "Hide Exterior View";
        backHuman.setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important; pointer-events: none;");
        showNeuron.setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important; pointer-events: none;");
        showNeuron.textContent = "Show Neuron";
        BABYLON.SceneLoader.ImportMesh("", "", "models/brain.glb", scene, function (meshes) {
            clear();

            hideui();

            meshes[0].scaling = new BABYLON.Vector3(175, 175, 175);
            exteriorref = meshes[0];
            allMeshes.push(exteriorref);

            camera.position = new BABYLON.Vector3(-1.57, 1.3, -60);
            camera.target = new BABYLON.Vector3(5, 5, 10);
            camera.upperRadiusLimit = 100;
            camera.radius = 50;

            medullaLobeMat = new BABYLON.StandardMaterial("medullaMat", scene);
            const medulla = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2.5, segments: 32 }, scene);
            medulla.position.set(8, -5, 8.5); // (depth,vertical,horizantal)
            medulla.material = medullaLobeMat;
            lobemeshes.push(medulla); // adds frontalLobe to lobemeshes array
            medulla.actionManager = new BABYLON.ActionManager(scene);
            medulla.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Medulla",
                        text: "Your medulla oblongata is the bottom-most part of your brain. It's where the spinal cord and brain merge, making it a key conduit for nerve signals to and from your body. It's main function is to control vital processes like your heartbeat, breathing and blood pressure. ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    });
                })
            );

            ponsLobeMat = new BABYLON.StandardMaterial("ponsMat", scene);
            const pons = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2.5, segments: 32 }, scene);
            pons.position.set(6, -3, 8.5 ); // (depth,vertical,horizantal)
            pons.material = ponsLobeMat;
            lobemeshes.push(pons);
            pons.actionManager = new BABYLON.ActionManager(scene);
            pons.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Pons",
                        text: "The pons connects your brainstem with the cerebral cortex, and controls movement and sleep. ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    });
                })
            );

            thalamusLobeMat = new BABYLON.StandardMaterial("thalamusMat", scene);
            const thalamus = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2.5, segments: 32 }, scene);
            thalamus.position.set(2, 0, 8.5); // (depth,vertical,horizantal)
            thalamus.material = thalamusLobeMat;
            lobemeshes.push(thalamus); // adds frontalLobe to lobemeshes array
            thalamus.actionManager = new BABYLON.ActionManager(scene);
            thalamus.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Thalamus",
                        text: "Your thalamus is an egg-shaped structure in the middle of your brain. It's known as a relay station of all incoming motor (movement) and sensory information — hearing, taste, sight and touch (but not smell) — from your body to your brain. ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    });
                })
            );

            cerebellumLobeMat = new BABYLON.StandardMaterial("cerebellumMat", scene);
            const cerebellum = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2.5, segments: 32 }, scene);
            cerebellum.position.set(13, -7, 5); // (depth,vertical,horizantal)
            cerebellum.material = cerebellumLobeMat;
            lobemeshes.push(cerebellum); // adds frontalLobe to lobemeshes array
            cerebellum.actionManager = new BABYLON.ActionManager(scene);
            cerebellum.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Cerebellum",
                        text: "The cerebellum (meaning 'little brain') is a brain shaped structures hanging in the back of the brain. It plays a role in motor movement regulation and balance control. The cerebellum coordinates movement and maintains posture, controls muscle tone and voluntary muscle activity but is unable to initiate muscle contraction. ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    });
                })
            );
            // Frontal Lobe
            frontalLobemat = new BABYLON.StandardMaterial("frontalLobe", scene);
            const frontalLobe = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2.5, segments: 32 }, scene);
            frontalLobe.position.set(0, 28, 0);
            frontalLobe.material = frontalLobemat;
            lobemeshes.push(frontalLobe); // adds frontalLobe to lobemeshes array
            frontalLobe.actionManager = new BABYLON.ActionManager(scene);
            frontalLobe.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Frontal Lobe",
                        text: "The frontal lobe, located at the front of the cerebral cortex, plays roles in various higher-level cognitive functions and personality traits. It is responsible for functions such as decision-making, problem-solving, planning, and concsious thought. The frontal lobe also houses the primary motor cortex, which controls voluntary movements throughout the body. ",
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
                    text: "The temporal lobes are found on both sides of the brain. They serve to help you hear and process auditory information. Part of them is an area called Wernicke's Area, which plays critical roles in comprehending speech.",
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
                    text: "The temporal lobes are found on both sides of the brain. They serve to help you hear and process auditory information. Part of them is an area called Wernicke's Area, which plays critical roles in comprehending speech.",
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
        parietal.position.set(15.5, 10, 8); // (depth,vertical,horizantal)
        parietal.material = parietalLobeMat;
        lobemeshes.push(parietal); // adds frontalLobe to lobemeshes array
        parietal.actionManager = new BABYLON.ActionManager(scene);
        parietal.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                camera.lowerRadiusLimit = 2;
                Swal.fire({
                    title: "Parietal Lobe",
                    text: "The parietal lobe plays roles in processing sensory info such as touch, pressure, heat, cold, and pain. The parietal lobes are also involved in the perception of body awareness and the construction of a spatial coordinate system (mental map) to represent the world around us.",
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
        occipital.position.set(16.5, -3, 8.5); // (depth,vertical,horizantal)
        occipital.material = occipitalLobeMat;
        lobemeshes.push(occipital); // adds frontalLobe to lobemeshes array
        occipital.actionManager = new BABYLON.ActionManager(scene);
        occipital.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                camera.lowerRadiusLimit = 2;
                Swal.fire({
                    title: "Occipital Lobe",
                    text: "The occipital lobe is a part of the brain responsible for processing visual information. On its outer surface, there are raised areas called gyri and grooves called sulci. The sides of the occipital lobe have three specific sulci that help define its shape. Inside, on the middle surface, there's a distinct calcarine sulcus, which divides it into the cuneus and lingual regions. The upper and lower parts of the calcarine sulcus contain the primary visual cortex, which is where we process what we see. This cortex gets information from our eyes and helps us understand things like shapes, colors, and distances. The occipital lobe's main job is to help us understand and recognize what we see. There are different areas in this lobe, like the primary visual cortex, which receives information directly from our eyes, and secondary visual cortex areas that work with this information to help us recognize objects and understand where they are. The occipital lobe also sends information to other parts of the brain c two pathways: the dorsal stream for recognizing where objects are and the ventral stream for recognizing what objects are.",
                    icon: "question",
                    background: "black",
                    color: "white",
                    backdrop: false,
                });
            })
        );

        });
    } else {
        exteriorref.dispose();
        showExterior.textContent = "Show Exterior View";
        loadbrain(0);
    }
}
function loadbrain(val) {
    change(m.getChild(), "loadbrain(0)");
    if (checkvis(brainbtns[0]) || val == 0) {
        showui();
        clickcond(humanmeshes, brainbtns, 0);
        showNeuron.textContent = "Show Neuron";
        BABYLON.SceneLoader.ImportMesh("", "", "models/limbic_system.glb", scene, function (meshes) {
            clear();

            hideui();

            meshes[0].scaling = new BABYLON.Vector3(0.35, 0.35, 0.35);
            brainref = meshes[0];
            allMeshes.push(brainref);

            camera.position = new BABYLON.Vector3(-2, 1, -60);
            camera.target = new BABYLON.Vector3(-5, 2, -2);
            camera.upperRadiusLimit = 100;
            camera.radius = 50;
        });

        

        showbtn(backHuman);
        showbtn(showExterior);
        showbtn(panelbtn);
        hidebtn(backcell);
        showbtn(showNeuron);
    }
}
function loadspine(val) {
    change(m.getChild(), "loadspine(0)");
    if (checkvis(spinebtns[0]) || val == 0) {
        showui();
        clickcond(humanmeshes, spinebtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/spine.glb", scene, function (meshes) {
            clear();
            hideui();

            camera.position = new BABYLON.Vector3(10,1,10);
            camera.target = new BABYLON.Vector3(0, 5, 0);
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            meshes[0].scaling = new BABYLON.Vector3(.13, .13, .13);
            spineref = meshes[0];
            allMeshes.push(spineref);
            createSphereBtn(0, 7.5, 2.5, spinemeshes, function(){createBasicPopup("Brain", "The brain is the central organ of the nervous system. It is a highly complex organ that is responsible for controlling and regulating all vital body functions, as well as intelligence, consciousness, processing information, memories, thoughts, and much more. The brain is made up of billions of neurons, and billions of other supporting cells like glial cells. It is subdivided into many parts, each specialized to control specific tasks. For example, the brainstem controls vital functions, the hippocampus functions in long term memory, and the amygdala is a major center for processing emotions.", brainbtns)}, .5)

        });
        clearbtns();
        showbtn(backHuman);
    }
}
function loadhuman(val) {
    change(m.getChild(), "loadhuman(0)");
    if (checkvis(backHuman) || val == 0) {
        showui();
        clickcond(cellmeshes, backHuman);
        BABYLON.SceneLoader.ImportMesh("", "", "models/human.glb", scene, function (meshes) {
            clear();
            hideui();
            meshes[0].scaling = new BABYLON.Vector3(6, 6, 6);

            try {
                eyemeshes.forEach((el) => {
                    el.dispose();
                });
            } catch (err) {};
            humref = meshes[0];
            allMeshes.push(humref);
            createSphereBtn(0, 10.8, -0.2, humanmeshes, function(){createBasicPopup("Hair", "desc.")}, .25)

            camera.position = new BABYLON.Vector3(0, 5, -20);
            camera.target = new BABYLON.Vector3(0, 5, 0);
            camera.radius = 20;

            showbtn(backcell);
            eyemat = new BABYLON.StandardMaterial("eyemat", scene);

            eye = BABYLON.MeshBuilder.CreateSphere("eye", { diameter: 0.25, segments: 32 }, scene);

            humanmeshes.push(eye);
            eye.position.set(0.2, 10, -0.8); // (horizontal,vertical,depth)
            eye.material = eyemat;
            eye.actionManager = new BABYLON.ActionManager(scene);
            eye.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Eye",
                        text: "The eye, a complex sensory apparatus, transforms incoming light through refraction by the cornea and lens, creating precise images on the retina. Photoreceptor cells in the retina convert light into neural signals, initiating the process of visual perception that shapes our understanding of the external world.",
                        background: "black",
                        color: "white",
                        imageUrl: "images/Eye.png"
                    }).then(function () {
                        eyebtns.forEach((el) => {
                            hidebtn(el);
                        });
                    });
                    eyebtns.forEach((el) => {
                        showbtn(el);
                    });
                    camera.target = eye;
                    camera.inertialRadiusOffset += 4;
                })
            );
        });

        clearbtns();
        // showbtn(backcell);
        humanmeshes.forEach((el) => {
            orgsettings(el);
        });
    }
}
function loadeye() {
    change(m.getChild(), "loadeye()");
    if (checkvis(eyebtns[0])) {
        showui();
        clickcondeye(0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/eye.glb", scene, function (meshes) {
            clear();
            hideui();
            meshes[0].scaling = new BABYLON.Vector3(10, 10, 10);
            eyeref = meshes[0];
            allMeshes.push(eyeref);

            vitreousmat = new BABYLON.StandardMaterial("vitreousmat", scene);
            vitreous = BABYLON.MeshBuilder.CreateSphere("vitreous", { diameter: 0.2, segments: 32 }, scene);

            eyemeshes.push(vitreous);
            vitreous.position.set(8.5,10,-2.1);
            vitreous.material = vitreousmat;
            vitreous.actionManager = new BABYLON.ActionManager(scene);
            vitreous.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Sclera",
                        text: "The sclera is a protective layer that surrounds the eye. It is the 'white' of the eye. ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    })
                })
            );
            createSphereBtn(8.55, 9.5, -3.4, eyemeshes, function(){createBasicPopup("Iris", "The iris is a colored ring of muscle that controls the size of the pupil. By contracting or dilating the pupil, it controls the amount of light being let in. ")}) 
            createSphereBtn(8.25, 9.5, -3.4, eyemeshes, function(){createBasicPopup("Pupil", "The pupil is a hole in the eye where light enters from. ")}) 

            
        });
        camera.position = new BABYLON.Vector3(-3, 3, -35);
        camera.target = new BABYLON.Vector3(8, 9.5, -2.7);
        camera.radius = 4;
        clearbtns();
        showbtn(backHuman);
    }

}
function loadheart(val) {
    change(m.getChild(), "loadheart(0)");
    if (checkvis(heartbtns[0]) || val == 0) {
        showui();
        clickcond(humanmeshes, heartbtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/heart.glb", scene, function (meshes) {
            clear();
            hideui();
            camera.target = meshes[0];
            meshes[0].scaling = new BABYLON.Vector3(10, 10, 10);
            heartref = meshes[0];

            allMeshes.push(heartref);
        });
        camera.position = new BABYLON.Vector3(80, 1.5, 50);
        clearbtns();
        showbtn(backHuman);
    }
}

function loadexretory(val) {
    change(m.getChild(), "loadexretory(0)");
    if (checkvis(exretorybtns[0]) || val == 0) {
        clearbtns()
        clear()
        importmesh("exretory_system.glb", new BABYLON.Vector3(0.01, 0.01, 0.01), null, null, new BABYLON.Vector3(0, 0, -15))
        showbtn(backHuman)

        createSphereBtn(1.3, 5, -0.6, exretorymeshes, function(){createBasicPopup("Kidney", "The kidneys, each about the size of a human fist, are bean-shaped organs located on either side of the spine in the lower back. They filter waste and excess substances from the blood, regulating electrolyte balance, blood pressure, and producing urine for waste elimination.", kidneybtns)})
        createSphereBtn(0.98, 0, -0.25, exretorymeshes, function(){createBasicPopup("Ureter", "The channels through which the urine formed in the kidney enters the urinary bladder.")})
        createSphereBtn(-0.04, -4.42, -1.29, exretorymeshes, function(){createBasicPopup("Urinary Bladder", "The urinary bladder is made up of several layers of tissues and lined with transitional eptilhelium, which can relax and contract to accomodate urine. There are sphincter muscles between the bladder and the urethra that control urination.")})
        createSphereBtn(0.07, -5.27, -0.43, exretorymeshes, function(){createBasicPopup("Urethra", "The tube through which urine leaves the body.")})
    }
}

function loaddigestive(val) {
    change(m.getChild(), "loaddigestive(0)");
    if (checkvis(digestivebtns[0]) || val == 0) {
        showui();
        clickcond(humanmeshes, digestivebtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/digestive_system1.glb", scene, function (meshes) {
            clear();
            hideui();
            camera.position = new BABYLON.Vector3(4.7, 15.25, -127);
            camera.target = new BABYLON.Vector3(0, 9, 0);
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            meshes[0].scaling = new BABYLON.Vector3(0.25, 0.25, 0.25);
            digestiveref = meshes[0];
            allMeshes.push(digestiveref);
            createSphereBtn(0, 2, -1.025, digestivemeshes, function(){createBasicPopup("Intestines", "desc", intestinebtns)}, .7)
            createSphereBtn(0, 4, 0.2, digestivemeshes, function(){createBasicPopup("Pancreas", "desc", pancreasbtns)}, .7)
            createSphereBtn(-1, 5, -1.3, digestivemeshes, function(){createBasicPopup("Stomach", "The stomach, a key part of the gastrointestinal (GI) tract, is a muscular organ that digests food using acids and enzymes. It's located in the upper left abdomen and has five sections: cardia, fundus, body, antrum, and pylorus. These sections work together to contract, mix, and process food before passing it to the small intestine. ", stomachbtns)}, .7)
            createSphereBtn(0, 10, 1.025, digestivemeshes, function(){createBasicPopup("Esophagus", "desc ", esophagusbtns)}, .7)
            createSphereBtn(1,6, -1.5, digestivemeshes, function(){createBasicPopup("Liver", "desc ", liverbtns)}, .7)
        });
    }
}
function loaddigestiveinsitu(val) {
    change(m.getChild(), "loaddigestiveinsitu(0)");
    if (checkvis(digestiveinsitubtns[0]) || val == 0) {
        showui();
        showbtn(backHuman);
        clickcond(humanmeshes, digestiveinsitubtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/digestiveinsitu.glb", scene, function (meshes) {
            clear();
            hideui();
            camera.position = new BABYLON.Vector3(4.7, 10.25, -127);
            camera.target = new BABYLON.Vector3(0, 9, 0);
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            meshes[0].scaling = new BABYLON.Vector3(0.25, 0.25, 0.25);
            digestiveinsuturef = meshes[0];
            allMeshes.push(digestiveinsuturef);
            createSphereBtn(0, 2, -1.025, digestiveinsitumeshes, function(){createBasicPopup("View Digestive System", "desc", digestivebtns)}, .7)

        });
    }
}
function loadliver(val) {
    change(m.getChild(), "loadliver(0)");
    if (checkvis(liverbtns[0]) || val == 0) {
        showui();
        clickcond(humanmeshes, liverbtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/livergallbladder.glb", scene, function (meshes) {
            clear();
            hideui();
            camera.position = new BABYLON.Vector3(4.7,0, -127);
            camera.target = new BABYLON.Vector3(0, 9, 0);
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            meshes[0].scaling = new BABYLON.Vector3(50, 50, 50);
            liverref = meshes[0];
            allMeshes.push(liverref);
            clearbtns();

        });
    }
}
function loadintestine(val) {
    change(m.getChild(), "loadintestine(0)");
    if (checkvis(intestinebtns[0]) || val == 0) {
        showui();
        clearbtns();
        clickcond(humanmeshes, intestinebtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/intestine.glb", scene, function (meshes) {
            clear();
            hideui();
            camera.position = new BABYLON.Vector3(4.7, 15.25, -127);
            camera.target = new BABYLON.Vector3(0, 0, 0);
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            meshes[0].scaling = new BABYLON.Vector3(10, 10, 10);
            intestineref = meshes[0];
            allMeshes.push(intestineref);
            clearbtns();
            createSphereBtn(1, 4, 0.025, intestinemeshes, function(){createBasicPopup("Colon", "desc", colonbtns)}, 1.5)

        });
    }
}
function loadcolon(val) {
    change(m.getChild(), "loadcolon(0)");
    if (checkvis(colonbtns[0]) || val == 0) {
        showui();
        clearbtns();
        clickcond(humanmeshes, colonbtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/colon.glb", scene, function (meshes) {
            clear();
            hideui();
            camera.position = new BABYLON.Vector3(190, 0, -200);
            camera.target = new BABYLON.Vector3(0, 0,0 );
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            meshes[0].scaling = new BABYLON.Vector3(.025, .025, .025);
            colonref = meshes[0];
            allMeshes.push(colonref);
            clearbtns();

        });
    }
}
function loadesophagus(val) {
    change(m.getChild(), "loadesophagus(0)");
    if (checkvis(esophagusbtns[0]) || val == 0) {
        showui();
        clearbtns();
        clickcond(humanmeshes, esophagusbtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/esophagus.glb", scene, function (meshes) {
            clear();
            hideui();
            camera.position = new BABYLON.Vector3(190, 0, -200);
            camera.target = new BABYLON.Vector3(0, 9,0 );
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            meshes[0].scaling = new BABYLON.Vector3(1, 1, 1);
            esophagusref = meshes[0];
            allMeshes.push(esophagusref);
            clearbtns();

        });
    }
}
function loadpancreas(val) {
    change(m.getChild(), "loadpancreas(0)");
    if (checkvis(pancreasbtns[0]) || val == 0) {
        showui();
        clickcond(humanmeshes, pancreasbtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/pancreas.glb", scene, function (meshes) {
            clear();
            hideui();
            camera.position = new BABYLON.Vector3(4.7, 15.25, -127);
            camera.target = new BABYLON.Vector3(-8, 0, 0);
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            meshes[0].scaling = new BABYLON.Vector3(30, 30, 30);
            pancreasref = meshes[0];
            allMeshes.push(pancreasref);
            clearbtns();

        });
    }
}

function loadcirculatory(val) {
    change(m.getChild(), "loadcirculatory(0)");
    if (checkvis(circulatorybtns[0]) || val == 0) {
        showui();
        clickcond(humanmeshes, circulatorybtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/circulatory_system.glb", scene, function (meshes) {
            clear();
            hideui();

            camera.position = new BABYLON.Vector3(4.7, 1.25, -127);
            camera.target = new BABYLON.Vector3(0, 9, 0);
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            meshes[0].scaling = new BABYLON.Vector3(10, 10, 10);
            circulatoryref = meshes[0];
            allMeshes.push(circulatoryref);
            createSphereBtn(0, 12.8, -0.6, circulatorymeshes, function(){createBasicPopup("Heart", "The heart is the central organ of the circulatory, or cardiovascular, system. Its main function is to pump blood to deliver oxygen and nutrients to all the cells and tissues in the body. The heart maintains homeostasis and plays a critical role in oxygenating blood. In addition, it regulates blood pressure and supports the entire circulatory system. The heart is divided into four chambers: two atria and two ventricles, with one atrium and one ventricle on the left side and one atrium and one ventricle on the right side. The right atrium receives deoxygenated blood from the body and pumps it into the right ventricle, which then sends the blood to the lungs through the pulmonary artery for oxygenation. The left atrium receives freshly oxygenated blood from the lungs and pushes it into the left ventricle, which pumps the oxygen-rich blood out to the rest of the body. To ensure a one-way circulation of blood, valves are located between the atria and ventricles, preventing backflow.", heartbtns)}, .5)

        });
        camera.position = new BABYLON.Vector3(80, 0.5, 80);
        clearbtns();
        showbtn(backHuman);
    }
}
function loadbronchi(val) {
    change(m.getChild(), "loadbronchi(0)");
    if (checkvis(bronchibtns[0]) || val == 0) {
        showui();
        clearbtns();
        clickcond(humanmeshes, bronchibtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/bronchi.glb", scene, function (meshes) {
            clear();
            hideui();

            camera.position = new BABYLON.Vector3(-184, 1.25, 620);
            camera.target = new BABYLON.Vector3(0, 9, 0);
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            meshes[0].scaling = new BABYLON.Vector3(10, 10, 10);
            bronchiref = meshes[0];
            allMeshes.push(bronchiref);
            createSphereBtn(10, 2, -105, bronchimeshes, function(){createBasicPopup("Bronchi", "The bronchi are the two large tubes that carry air from your windpipe to your lungs. You have a left and right main bronchus in each lung. After the main bronchi, these tubes branch out into segments that look like tree branches. Many respiratory conditions, such as asthma or bronchitis, can affect your bronchi", bronchibtns)}, 2.0)

        });
        clearbtns();
        showbtn(backHuman);
    }
}

function loadlymphatic(val) {
    change(m.getChild(), "loadlymphatic(0)");
    if (checkvis(lymphbtns[0]) || val == 0) {
        showui();
        clickcond(humanmeshes, lymphbtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/lymphatic_system.glb", scene, function (meshes) {
            clear();
            hideui();
            camera.position = new BABYLON.Vector3(4.7, 1.25, -127);
            camera.target = new BABYLON.Vector3(0, 0, -8);
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            meshes[0].scaling = new BABYLON.Vector3(.01, .01, .01);
            lymphref = meshes[0];
            allMeshes.push(lymphref);
            createSphereBtn(1, 3, -7, lymphmeshes, function(){createBasicPopup("Spleen", "desc", spleenmeshes)}, 0.4)

        });
        camera.position = new BABYLON.Vector3(0, 0.5, 80);
        clearbtns();
        showbtn(backHuman);
    }
}
function loadspleen(val) {
    change(m.getChild(), "loadspleen(0)");
    if (checkvis(spleenbtns[0]) || val == 0) {
        showui();
        clickcond(humanmeshes, spleenbtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/spleen.glb", scene, function (meshes) {
            clear();
            hideui();

            camera.position = new BABYLON.Vector3(4.7, 1.25, -127);
            camera.target = new BABYLON.Vector3(0, 9, 0);
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            meshes[0].scaling = new BABYLON.Vector3(10, 10, 10);
            spleenref = meshes[0];
            allMeshes.push(spleenref);

        });
        camera.position = new BABYLON.Vector3(80, 0.5, 80);
        clearbtns();
        showbtn(backHuman);
    }
}
function loadendocrine(val) {
    change(m.getChild(), "loadendocrine(0)");
    if (checkvis(endocrinebtns[0]) || val == 0) {
        showui();
        clickcond(humanmeshes, endocrinebtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/endocrine_system.glb", scene, function (meshes) {
            clear();
            hideui();
            camera.position = new BABYLON.Vector3(4.7, -35.25, -127);
            camera.target = new BABYLON.Vector3(0, 9, 0);
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            meshes[0].scaling = new BABYLON.Vector3(10, 10, 10);
            endocrineref = meshes[0];
            allMeshes.push(endocrineref);

        });
        clearbtns();
        showbtn(backHuman);
    }
}
function loadskin(val) {
    change(m.getChild(), "loadskin(0)");
    if (checkvis(skinbtns[0]) || val == 0) {
        showui();
        clickcond(humanmeshes, skinbtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/skin.glb", scene, function (meshes) {
            clear();
            hideui();
            camera.position = new BABYLON.Vector3(0, 0, -127);
            camera.target = new BABYLON.Vector3(0, 6, 0);
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            meshes[0].scaling = new BABYLON.Vector3(.05, .05, .05);
            skinref = meshes[0];
            allMeshes.push(skinref);

        });
        clearbtns();
        showbtn(backHuman);
    }
}
function loadmuscular(val) {
    change(m.getChild(), "loadmuscular(0)");
    if (checkvis(muscularbtns[0]) || val == 0) {
        showui();
        clickcond(humanmeshes, muscularbtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/muscular_system.glb", scene, function (meshes) {
            clear();
            hideui();
            // camera.position = new BABYLON.Vector3(804.7, 1.25, 0);
            camera.position = new BABYLON.Vector3(4, 1, -20);
            camera.target = new BABYLON.Vector3(0, -2, 0);
            camera.upperRadiusLimit = 100;
            camera.radius = 30;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            meshes[0].scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
            muscularref = meshes[0];
            allMeshes.push(muscularref);

        });
        clearbtns();
        showbtn(backHuman);
    }
}
function loadskull(val) {
    change(m.getChild(), "loadskull(0)");
    if (checkvis(skullbtns[0]) || val == 0) {
        showui();
        clickcond(humanmeshes, skullbtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/skull.glb", scene, function (meshes) {
            clear();
            hideui();
            camera.position = new BABYLON.Vector3(4.7, 0, 30);
            camera.target = new BABYLON.Vector3(0, 0, 0 );
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            meshes[0].scaling = new BABYLON.Vector3(5, 5,5);
            skullref = meshes[0];
            allMeshes.push(skullref);

        });
        clearbtns();
        showbtn(backHuman);
    }
}

function loadnephron(val) {
    change(m.getChild(), "loadnephron(0)");
    if (checkvis(nephronbtn) || val == 0) {
        clearbtns();
        clear()
        importmesh("nephron.glb", new BABYLON.Vector3(0.01, 0.01, 0.01), null, null, new BABYLON.Vector3(0, 0, -10))
        showbtn(backHuman);
        showbtn(backKidney);

        createSphereBtn(3.375595141346529,2.4682702873351188,0.6946576585017357, nephronmeshes, function(){createBasicPopup("Glomerulus", "A network of tiny capillaries that filters blood plasma")}, 0.25)
        createSphereBtn(3.1098293040773948,1.8883451424945672,-0.05928368389477079, nephronmeshes, function(){createBasicPopup("Bowman's Capsule", "A double-walled sac that surrounds the glomerulus and collects the filtered fluid, called filtrate. ")}, 0.25)
        createSphereBtn(5.089893115931107,2.713369118639208,1.0275498790554836, nephronmeshes, function(){createBasicPopup("Afferent Arteriole", "The afferent ateriole brings in blood to the glomerulus, and it is much larger than the efferent arteriole. This produces a huge amount of pressure on the blood in the glomerulus. This pressure is what allows fluid (water, urea, etc.), small molecules (glucose, vitamins, etc), and ions (Na+, etc.) to pass through the pores in the walls of the glomerular capillaries and into the Bowman's capsule.")}, 0.25)
        createSphereBtn(4.579063780991133,1.662565291025302,0.5811871632474528, nephronmeshes, function(){createBasicPopup("Efferent Arteriole", "The efferent arteriole brings blood out of the glomerulus. Because blood cells and proteins are too big to be able to pass through the tiny pores of the capillaries, they remain in the blood and leave through the efferent arteriole.")}, 0.25)
    }
}

function loadkidney(val) {
    change(m.getChild(), "loadkidney(0)");
    if (checkvis(kidneybtns[0]) || val == 0) {
        clearbtns();
        clear()
        importmesh("kidney.glb", new BABYLON.Vector3(0.005, 0.005, 0.005), null, null, new BABYLON.Vector3(0, 0, -0.10))
        clickcond(kidneymeshes, kidneybtns, 0);
        showbtn(backHuman);
        showbtn(backExretory);
        showbtn(kidney2dmodelbtn);
        showbtn(nephronbtn)

        createSphereBtn(-0.35, -0.15, 0, kidneymeshes, function(){createBasicPopup("Uretur", "The channel through which the urine formed in the kidney enters the urinary bladder.")}, 0.1)
        createSphereBtn(0, 0, 0.225, kidneymeshes, function(){createBasicPopup("Renal Capsule", "The outermost layer of the kidney. It is a tough, fibrous membrane that protects the kidney. The renal capsule is surrounded by adipose tissues. ")}, 0.1)
        createSphereBtn(0.26, 0, -0.025, kidneymeshes, function(){createBasicPopup("Renal Cortex", "The outer region of the kidney that houses the glomerulus and convoluted tubules of the nephrons. Nephorons are units of cells that filter the blood. ")}, 0.1)
        createSphereBtn(0.19, -0.15, -0.025, kidneymeshes, function(){createBasicPopup("Renal Medulla", "Filters waste materials and eliminates fluid from the body. It also houses the loops of Henle, which are units that reabsorb water into the bloodstream")}, 0.1)
        createSphereBtn(-0.15, -0.175, -0.025, kidneymeshes, function(){createBasicPopup("Renal Pelvis", "The inner region of the kidney that collects urine as it is produced, and sends it through the ureturs to the bladder.")}, 0.1)

    }
}

function kidney2dmodel(){
    Swal.fire({
        imageUrl: "images/kidney.png"
    });
}

function loadresp(val) {
    change(m.getChild(), "loadresp(0)");
    if (checkvis(lungbtns[0]) || val == 0) {
        clear()
        clearbtns();
        clickcond(humanmeshes, lungbtns, 0);
        showbtn(backHuman);

        camera.target = new BABYLON.Vector3(0, -0.75, 0);
        camera.position = new BABYLON.Vector3(0,0,3);
        // importmesh("lung.glb", scaling = new BABYLON.Vector3(.18, 0.18, .18), camera_target = new BABYLON.Vector3(0, -1, 0), camera_position = new BABYLON.Vector3(0, 0, 5))
        BABYLON.SceneLoader.ImportMesh("", "", "models/lung.glb", scene, function (meshes) {
            meshes[0].scaling = new BABYLON.Vector3(0.18, 0.18, 0.18);
            lungref = meshes[0];
            allMeshes.push(lungref);
        });
        loaddiaphragm();
        // camera.radius.upperRadiusLimit = 100;
        // camera.radius = 15;
        showbtn(backHuman);
        createSphereBtn(0, 0.2, 0.025, lungmeshes, function(){createBasicPopup("Trachea", "The trachea is the long tube that connects your larynx (voice box) to your bronchi. Your bronchi send air to your lungs.", tracheabtns)}, .05)
        createSphereBtn(0, 0, 0.025, lungmeshes, function(){createBasicPopup("Bronchi", "The bronchi are the two large tubes that carry air from the windpipe (trachea) into the lungs and back out again.", bronchibtns)}, .05)
    }
}
function loaddiaphragm() {
    BABYLON.SceneLoader.ImportMesh("", "", "models/diaphragm.glb", scene, function (meshes) {
        meshes[0].scaling = new BABYLON.Vector3(7, 7, -7);
        meshes[0].position = new BABYLON.Vector3(0,-3.5,0);
        diaphragm = meshes[0];
        allMeshes.push(diaphragmref);
    });
}
function loadstomach(val) {
    change(m.getChild(), "loadstomach(0)");
    if (checkvis(stomachbtns[0]) || val == 0) {
        showui();
        clickcond(humanmeshes, stomachbtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/stomach.glb", scene, function (meshes) {
            clear();
            hideui();
            camera.target = meshes[0];
            meshes[0].scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
            stomachref = meshes[0];

            allMeshes.push(stomachref);
        });
        camera.position = new BABYLON.Vector3(0, 0, 0);
        clearbtns();
        showbtn(backHuman);
    }
}

function loadskeletal(val) {
    change(m.getChild(), "loadskeletal(0)");
    if (val == 0) {
        showui();
        camera.position = new BABYLON.Vector3(4.7, 1.25, -127);
            camera.target = new BABYLON.Vector3(0, -0.25, 0);
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();

            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            BABYLON.SceneLoader.ImportMesh("", "", "models/skeletal.glb", scene, function (meshes) {
                hideui();
                clearbtns();
                showbtn(backcell);

                meshes[0].scaling = new BABYLON.Vector3(0.9, 0.9, 0.9);
                createSphereBtn(0, 7, -0.51, skeletalmeshes, function(){createBasicPopup("Skull", "Protects the brain and houses sensory organs like the eyes and ears.", skullbtns)}, .5)

                skeletalref = meshes[0];
                allMeshes.push(skeletalref);
            });

            skullmat = new BABYLON.StandardMaterial("skull", scene);
            skull = BABYLON.MeshBuilder.CreateSphere("skull", { diameter: 0.3, segments: 32 }, scene);
            skull.position.set(0, 7, -0.51); // (horizontal,vertical,depth)
            skull.material = skullmat;
            skull.actionManager = new BABYLON.ActionManager(scene);
            skull.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Skull",
                        text: "Protects the brain and houses sensory organs like the eyes and ears. ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    }).then(function () {});
                    // camera.target = skull;
                    // camera.inertialRadiusOffset += 4;
                })
            );

            skeletalmeshes.push(skull);
            spinemat = new BABYLON.StandardMaterial("spine", scene);
            spine = BABYLON.MeshBuilder.CreateSphere("spine", { diameter: 0.3, segments: 32 }, scene);
            spine.position.set(0, 3, 0.8); // (horizontal,vertical,depth)
            spine.material = spinemat;
            spine.actionManager = new BABYLON.ActionManager(scene);
            spine.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Spine",
                        text: "Provides support and protection for the spinal cord and allows for movement. ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    }).then(function () {});
                    // camera.target = spine;
                    // camera.inertialRadiusOffset += 4;
                })
            );

            skeletalmeshes.push(spine);
            femurmat = new BABYLON.StandardMaterial("femur", scene);
            femur = BABYLON.MeshBuilder.CreateSphere("femur", { diameter: 0.3, segments: 32 }, scene);
            femur.position.set(1, -1, -0.2); // (horizontal,vertical,depth)
            femur.material = femurmat;
            femur.actionManager = new BABYLON.ActionManager(scene);
            femur.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Femur",
                        text: "The thigh bone, which is the longest and strongest bone in the body, supporting body weight and facilitating walking and running. ",
                        background: "black",
                        color: "white",
                        imageUrl: "images/femur.png",
                        imageWidth: window.innerWidth * 0.2,
                        imageHeight: window.innerHeight * 0.7,
                        backdrop: false,
                    }).then(function () {});
                    // camera.target = femur;
                    // camera.inertialRadiusOffset += 4;
                })
            );

            skeletalmeshes.push(femur);
            pelvismat = new BABYLON.StandardMaterial("pelvis", scene);
            pelvis = BABYLON.MeshBuilder.CreateSphere("pelvis", { diameter: 0.3, segments: 32 }, scene);
            pelvis.position.set(0, 0, -0.5); // (horizontal,vertical,depth)
            pelvis.material = pelvismat;
            pelvis.actionManager = new BABYLON.ActionManager(scene);
            pelvis.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Pelvis",
                        text: "Forms the base of the spine and supports the body's weight; also protects internal reproductive organs. ",
                        background: "black",
                        color: "white",
                        imageUrl: "images/pelvis.png",
                        imageWidth: window.innerWidth * 0.4,
                        imageHeight: window.innerHeight * 0.4,
                        backdrop: false,
                    }).then(function () {});
                    // camera.target = pelvis;
                    // camera.inertialRadiusOffset += 4;
                })
            );

            skeletalmeshes.push(pelvis);
            ribsmat = new BABYLON.StandardMaterial("ribs", scene);
            ribs = BABYLON.MeshBuilder.CreateSphere("ribs", { diameter: 0.3, segments: 32 }, scene);
            ribs.position.set(-0.5, 3.5, -1); // (horizontal,vertical,depth)
            ribs.material = ribsmat;
            ribs.actionManager = new BABYLON.ActionManager(scene);
            ribs.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Ribs",
                        text: "Protect the vital organs in the chest, such as the heart and lungs. ",
                        background: "black",
                        color: "white",
                        imageUrl: "images/ribs.png",
                        imageWidth: window.innerWidth * 0.4,
                        imageHeight: window.innerHeight * 0.4,
                        backdrop: false,
                    }).then(function () {});
                    // camera.target = ribs;
                    // camera.inertialRadiusOffset += 4;
                })
            );

            skeletalmeshes.push(ribs);
            humerusmat = new BABYLON.StandardMaterial("humerus", scene);
            humerus = BABYLON.MeshBuilder.CreateSphere("humerus", { diameter: 0.3, segments: 32 }, scene);
            humerus.position.set(-1.8, 3, 0.2); // (horizontal,vertical,depth)
            humerus.material = humerusmat;
            humerus.actionManager = new BABYLON.ActionManager(scene);
            humerus.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Humerus",
                        text: "The upper arm bone that connects the shoulder to the elbow and allows for arm movement. ",
                        background: "black",
                        color: "white",
                        imageUrl: "images/humerus.png",
                        imageWidth: window.innerWidth * 0.4,
                        imageHeight: window.innerHeight * 0.6,
                        backdrop: false,
                    }).then(function () {});
                    // camera.target = humerus;
                    // camera.inertialRadiusOffset += 4;
                })
            );

            skeletalmeshes.push(humerus);
            tibfibmat = new BABYLON.StandardMaterial("tibfib", scene);
            tibfib = BABYLON.MeshBuilder.CreateSphere("tibfib", { diameter: 0.3, segments: 32 }, scene);
            tibfib.position.set(0.8, -4, -0.2); // (horizontal,vertical,depth)
            tibfib.material = tibfibmat;
            tibfib.actionManager = new BABYLON.ActionManager(scene);
            tibfib.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Tibula and Fibula",
                        text: "The two bones in the lower leg, with the tibia bearing most of the body's weight and the fibula providing stability. ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    }).then(function () {});
                    // camera.target = tibfib;
                    // camera.inertialRadiusOffset += 4;
                })
            );

            skeletalmeshes.push(tibfib);
            radulnmat = new BABYLON.StandardMaterial("raduln", scene);
            raduln = BABYLON.MeshBuilder.CreateSphere("raduln", { diameter: 0.3, segments: 32 }, scene);
            raduln.position.set(-2.5, 1, 0.2); // (horizontal,vertical,depth)
            raduln.material = radulnmat;
            raduln.actionManager = new BABYLON.ActionManager(scene);
            raduln.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Radius and Ulna",
                        text: "The bones of the forearm that allow for forearm rotation and wrist movement. ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    }).then(function () {});
                    // camera.target = raduln;
                    // camera.inertialRadiusOffset += 4;
                })
            );

            skeletalmeshes.push(raduln);
            sternummat = new BABYLON.StandardMaterial("sternum", scene);
            sternum = BABYLON.MeshBuilder.CreateSphere("sternum", { diameter: 0.3, segments: 32 }, scene);
            sternum.position.set(0, 3.5, -1); // (horizontal,vertical,depth)
            sternum.material = sternummat;
            sternum.actionManager = new BABYLON.ActionManager(scene);
            sternum.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Sternum (aka Breastbone)",
                        text: "Protects the heart and lungs and anchors the ribcage. ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    }).then(function () {});
                    // camera.target = sternum;
                    // camera.inertialRadiusOffset += 4;
                })
            );

            skeletalmeshes.push(sternum);
            scapulamat = new BABYLON.StandardMaterial("scapula", scene);
            scapula = BABYLON.MeshBuilder.CreateSphere("scapula", { diameter: 0.3, segments: 32 }, scene);
            scapula.position.set(-0.82, 4, 0.8); // (horizontal,vertical,depth)
            scapula.material = scapulamat;
            scapula.actionManager = new BABYLON.ActionManager(scene);
            scapula.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Scapula (aka Shoulder Blade)",
                        text: "Provides attachment for muscles that control shoulder and arm movement. ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    }).then(function () {});
                    // camera.target = scapula;
                    // camera.inertialRadiusOffset += 4;
                })
            );

            skeletalmeshes.push(scapula);
            phalangefmat = new BABYLON.StandardMaterial("phalangef", scene);
            phalangef = BABYLON.MeshBuilder.CreateSphere("phalangef", { diameter: 0.3, segments: 32 }, scene);
            phalangef.position.set(0.5, -7, -0.9); // (horizontal,vertical,depth)
            phalangef.material = phalangefmat;
            phalangef.actionManager = new BABYLON.ActionManager(scene);
            phalangef.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Phalange",
                        text: "Phalanges are the smaller bones that make up the fingers and toes, with each digit typically consisting of three phalanges (proximal, middle, and distal). ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    }).then(function () {});
                    // camera.target = phalangef;
                    // camera.inertialRadiusOffset += 4;
                })
            );

            skeletalmeshes.push(phalangef);
            phalangehmat = new BABYLON.StandardMaterial("phalangeh", scene);
            phalangeh = BABYLON.MeshBuilder.CreateSphere("phalangeh", { diameter: 0.3, segments: 32 }, scene);
            phalangeh.position.set(-2.8, -0.6, -0.5); // (horizontal,vertical,depth)
            phalangeh.material = phalangehmat;
            phalangeh.actionManager = new BABYLON.ActionManager(scene);
            phalangeh.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Phalange",
                        text: "Phalanges are the smaller bones that make up the fingers and toes, with each digit typically consisting of three phalanges (proximal, middle, and distal). ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    }).then(function () {});
                    // camera.target = phalangeh;
                    // camera.inertialRadiusOffset += 4;
                })
            );

            skeletalmeshes.push(phalangeh);

        } else {
            skeletalref.dispose();
            showbtn(backHuman);
            loadhuman();
    }
}

function loadneuron(val) {
    change(m.getChild(), "loadneuron(0)");
    if (checkvis(showNeuron) || val == 0) {
        if (showNeuron.textContent == "Show Neuron") {
            showNeuron.textContent = "Hide Neuron";

            camera.position = new BABYLON.Vector3(10, 0, 120);

            // Built-in 'sphere' shape.
            /*brainref.dispose();
            brainbtns.forEach((el) => {
                el.visibility = 0;
            });*/

            clearbtns();
            clear();
            showbtn(showNeuron);
            
            BABYLON.SceneLoader.ImportMesh("", "", "models/neuron.glb", scene, function (meshes) {
                meshes[0].scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);

                neuronref = meshes[0];
                allMeshes.push(neuronref);
                camera.target = new BABYLON.Vector3(-30, -5, 0);

                camera.upperRadiusLimit = 100;
                camera.radius = 100;
            });
            axonmat = new BABYLON.StandardMaterial("axot", scene);
            axon = BABYLON.MeshBuilder.CreateSphere("axon", { diameter: 3, segments: 32 }, scene);
            axon.position.set(-30, -5, 0);
            axon.material = axonmat;
            axon.actionManager = new BABYLON.ActionManager(scene);
            axon.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Axon",
                        text: "The axon is a projection that extends from the cell body (soma), and electrical signals called action potentials travel down it. Once action potentials reach the end of the axon, to endings called axon terminals, neurotransmitters (chemical messengers) are released into the synapse. The neurotransmitters released by the axon are received by dendrites of adjacent neurons, and the action potential cycle continues again.",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    }).then(function () {});
                    camera.target = axon;
                    camera.inertialRadiusOffset += 4;
                })
            );
            // createSphereBtn(1.8, 0.2, -0.5, neuronmeshes, function(){createBasicPopup("Endoplasmic Reticulum", "The Rough ER, studded with ribosomes, plays a role in synthesizing and secreting proteins. It also acts as a membrane factory, growing by incorporating proteins and phospholipids and transporting them via vesicles to other parts of the cell. On the other hand, the smooth ER... (add description here)", ersmlbtns)})

            neuronmeshes.push(axon);
            axotmat = new BABYLON.StandardMaterial("axot", scene);
            axot = BABYLON.MeshBuilder.CreateSphere("axot", { diameter: 3, segments: 32 }, scene);
            axot.position.set(0, 2, 0);
            axot.material = axotmat;
            axot.actionManager = new BABYLON.ActionManager(scene);
            axot.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Axon Terminal",
                        text: "Towards their ends, axons branch out into several smaller branches known as axon terminals. Each axon terminal contains small structures called synaptic vesicles. These vesicles are like tiny pods that store and release neurotransmitters, which are chemical messengers that transmit signals between the axon of one neuron and the dendrite of another, when stimulated by action potentials traveling down the axon. ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    }).then(function () {});
                    camera.target = axot;
                    camera.inertialRadiusOffset += 4;
                })
            );
            neuronmeshes.push(axot);
            dendmat = new BABYLON.StandardMaterial("dend", scene);
            dend = BABYLON.MeshBuilder.CreateSphere("dend", { diameter: 3, segments: 32 }, scene);
            dend.position.set(-60, -15, 10);
            dend.material = dendmat;
            dend.actionManager = new BABYLON.ActionManager(scene);
            dend.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Dendrite",
                        text: "Dendrites are branch-like structures that extend from the soma (cell body). Their primary function is to receive signals in the form of neurotransmitters from the axons of neighboring neurons. These signals are then transmitted electrically across to the soma, where they are processed, and then further down into the axon. ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    }).then(function () {});
                    camera.target = dend;
                    camera.inertialRadiusOffset += 4;
                })
            );
            neuronmeshes.push(dend);
            sheathmat = new BABYLON.StandardMaterial("sheathmat", scene);
            sheath = BABYLON.MeshBuilder.CreateSphere("sheath", { diameter: 3, segments: 32 }, scene);
            sheath.position.set(-10, 1, 0);
            sheath.material = sheathmat;
            sheath.actionManager = new BABYLON.ActionManager(scene);
            sheath.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Myelin Sheath",
                        text: "The axons of neurons are covered by a protective layer called the myelin sheath, which consists of a thick coating of fatty substance called myelin. This myelin sheath acts as an insulator, which enhances the speed at which signals travel along the axon. ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    }).then(function () {});
                    camera.inertialRadiusOffset += 4;
                })
            );
            neuronmeshes.push(sheath);
            nodemat = new BABYLON.StandardMaterial("node", scene);
            node = BABYLON.MeshBuilder.CreateSphere("node", { diameter: 2, segments: 32 }, scene);
            node.position.set(-23, -2, 0);
            node.material = nodemat;
            node.actionManager = new BABYLON.ActionManager(scene);
            node.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Node of Ranvier",
                        text: "The myelin sheath does not cover the entire length of the axon. Instead, it has periodic gaps along the myelinated axon where the myelin is absent, and these gaps are called Nodes of Ranvier. These nodes are important for the transmission of action potentials. They serve as points along the axon where the electrical signals are regenerated, which in terms allows for more efficient conduction of nerve impulses. ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    }).then(function () {});
                    camera.inertialRadiusOffset += 4;
                })
            );
            neuronmeshes.push(node);
            synapsemat = new BABYLON.StandardMaterial("synapse", scene);
            synapse = BABYLON.MeshBuilder.CreateSphere("synapse", { diameter: 4, segments: 32 }, scene);
            synapse.position.set(15, 0, 0);
            synapse.material = dendmat;
            synapse.actionManager = new BABYLON.ActionManager(scene);
            synapse.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Synapse",
                        text: "The synapse is the small junction between the axon terminal of one neuron and the dendrites of another neuron. It is a crucial site where communication between neurons takes place. The communication occurs when an action potential reaches the axon terminal of one neuron, triggering the release of neurotransmitters from the synaptic vesicles into the synapse. The neurotransmitters would then travel across the synapse and bind to the specific receptors on the receiving neuron, allowing the transmission of the signal from one neuron to the next. ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    }).then(function () {});
                    camera.inertialRadiusOffset += 4;
                })
            );
            neuronmeshes.push(synapse);
            Somamat = new BABYLON.StandardMaterial("Soma", scene);
            Soma = BABYLON.MeshBuilder.CreateSphere("Soma", { diameter: 3, segments: 32 }, scene);
            Soma.position.set(-65, -15, 0);
            Soma.material = Somamat;
            Soma.actionManager = new BABYLON.ActionManager(scene);
            Soma.actionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                    camera.lowerRadiusLimit = 2;
                    Swal.fire({
                        title: "Soma",
                        text: "The soma is essentially the cell body of the neuron. It houses the nucleus and various organelles that are crucial for the normal functioning of the neuron. Signals received by the dendrites are directed to the soma where they are processed and then sent further down to the axon. ",
                        icon: "question",
                        background: "black",
                        color: "white",
                        backdrop: false,
                    }).then(function () {});
                    camera.target = Soma;
                    camera.inertialRadiusOffset += 4;
                })
            );

            neuronmeshes.push(Soma);
            for (i = 0; i < neuronmeshes.length; i++) {
                orgsettings(neuronmeshes[i]);
            }
        } else {
            showNeuron.textContent = "Show Neuron";

            backHuman.setAttribute("style", "");

            loadbrain(0);
        }
    }
}
function backPage() {
    eval(m.getParent())
}
// clears all meshes
function clear() {
    for (i = 0; i < allMeshes.length; i++) {
        try {
            allMeshes[i].dispose();
        } catch (err) {}
    }
    for (i = 0; i < lobemeshes.length; i++) {
        try {
            lobemeshes[i].dispose();
        } catch (err) {}
    }
    for (i = 0; i < neuronmeshes.length; i++) {
        try {
            neuronmeshes[i].dispose();
        } catch (err) {}
    }
    for (i = 0; i < cellmeshes.length; i++) {
        try {
            cellmeshes[i].visibility = 0;
        } catch (err) {}
    }
    for (i = 0; i < humanmeshes.length; i++) {
        try {
            humanmeshes[i].dispose();
        } catch (err) {}
    }
    for (i = 0; i < skeletalmeshes.length; i++) {
        try {
            skeletalmeshes[i].dispose();
        } catch (err) {}
    } 
    for (i = 0; i < kidneymeshes.length; i++) {
        try {
            kidneymeshes[i].dispose();
        } catch (err) {}
    } 
    for (i = 0; i < nephronmeshes.length; i++) {
        try {
            nephronmeshes[i].dispose();
        } catch (err) {}
    } 
    for (i = 0; i < digestivemeshes.length; i++) {
        try {
            digestivemeshes[i].dispose();
        } catch (err) {}
    } 
    for (i = 0; i < circulatorymeshes.length; i++) {
        try {
            circulatorymeshes[i].dispose();
        } catch (err) {}
    } 
    for (i = 0; i < endocrinemeshes.length; i++) {
        try {
            endocrinemeshes[i].dispose();
        } catch (err) {}
    } 
    for (i = 0; i < muscularmeshes.length; i++) {
        try {
            muscularmeshes[i].dispose();
        } catch (err) {}
    } 
    for (i = 0; i < bronchimeshes.length; i++) {
        try {
            bronchimeshes[i].dispose();
        } catch (err) {}
    }for (i = 0; i < spleenmeshes.length; i++) {
        try {
            spleenmeshes[i].dispose();
        } catch (err) {}
    } for (i = 0; i < intestinemeshes.length; i++) {
        try {
            intestinemeshes[i].dispose();
        } catch (err) {}
    } for (i = 0; i < colonmeshes.length; i++) {
        try {
            colonmeshes[i].dispose();
        } catch (err) {}
    } for (i = 0; i < livermeshes.length; i++) {
        try {
            livermesheseshes[i].dispose();
        } catch (err) {}
    } for (i = 0; i < pancreasmeshes.length; i++) {
        try {
            pancreasmeshes[i].dispose();
        } catch (err) {}
    } for (i = 0; i < skinmeshes.length; i++) {
        try {
            skinmeshes[i].dispose();
        } catch (err) {}
    } for (i = 0; i < spinemeshes.length; i++) {
        try {
            spinemeshes[i].dispose();
        } catch (err) {}
    }for (i = 0; i < digestiveinsitumeshes.length; i++) {
        try {
            digestiveinsitumeshes[i].dispose();
        } catch (err) {}
    for (i = 0; i < skullmeshes.length; i++) {
            try {
                skullmeshes[i].dispose();
            } catch (err) {}
    }
    }for (i = 0; i < exretorymeshes.length; i++) {
        try {
            exretorymeshes[i].dispose();
        } catch (err) {}
    } 
    for (i = 0; i < tracheameshes.length; i++) {
        try {
            tracheameshes[i].dispose();
        } catch (err) {}
    }
}

// clears all btns
function clearbtns() {
    buttons.forEach((btn) => {
        hidebtn(btn);
    });

    buttonArrays.forEach((ary) => {
        ary.forEach((btn) => {
            hidebtn(btn);
        });
    });
}
// search box
function search(value) {
    clear();
    clearbtns();

    if (value == "cell") {
        loadcell();
    }

    searchbox.value = "Search";

    showNeuron.textContent = "Show Neuron";
    showExterior.textContent = "Show Exterior View";

    eval("load" + value + "(0)");
}
const scene = createScene();

engine.runRenderLoop(function () {
    scene.render();
    stats.update();
});

window.addEventListener("resize", function () {
    engine.resize();
})
