/// <reference path="babylon.d.ts" />

// stats.js implementation and styling
var stats = new Stats();
stats.dom.classList.add("statsdom");
document.body.appendChild(stats.dom);
document.querySelectorAll(".statsdom")[0].setAttribute("style", "");
// declaration


let panel;
panel = createPanel("brainpanel", "Brain Divisions", "brainclose", "The brain is split into four main parts: the cerebrum, the diencephalon, the brainstem, and the cerebellum. The cerebrum, is composed of superficial gray matter and deep white matter. The gray matter makes up the cerebral cortex, which is further subdivided into the 4 brain lobes. These are mainly responsible for cognitive abilities and sensory information. White matter helps the body process information. The diencephalon consists of the thalamus, hypothalumus, and pituitary gland. It's responsible for routing sensory info and for many involuntary body functions. The brain stem controls essential functions such as breathing and heart rate, and conencts to the spine. The cerebellum is responsible for balance and coordination. It's important to remember that many of these brain parts are further subdivided, and their functions and physical structures can sometimes overlap with each other. <br></br> Notable structures seen in this image include: </br><br>- The pituitary gland, also known as the 'master gland', which controls hormonal balances in the body.  <br>- The amygdala, which controls the emotion of fear and influences aggression, reward-based learning, unconscious memory, social understanding, parenting emotions, memory-emotion connections, and addiction behaviors. <br>- The hippocampus, part of the brain's limbic system, is vital for memory, learning, and emotions. It stores short-term memories and facilitates their conversion into long-term memory.  Key functions include storing declarative facts, transferring short-term to long-term memory (assisted by sleep), and aiding spatial navigation and mental mapping. <br>- The hypothalamus, deep within the brain, links the endocrine and nervous systems to maintain body stability (homeostasis). It interprets chemical signals from the brain and peripheral nerves, regulating vital functions like temperature, blood pressure, hunger, thirst, and mood. It also influences sex drive and sleep, controlling these processes through the autonomic nervous system and hormone regulation. </br>", panelbtn, true); // get access to the html code of the brain info panel

// same as above but for ribosome information
let ribopanel;
let ribotext = ` 
Structure - Ribosomes are made up of two main components, the large subunit and the small subunit. Ribosomes are made in the nucleolus where four strands of rRNA combine with ribosomal proteins to make the large and small subunit. 
<br><br>
Function - The main function of ribosomes is to help build proteins. In the process of building proteins, they are present in the translation. After the transcription happens, where the mRNA is produced as a copy of DNA, The mRNA goes to the ribosome to start the process of translation. In translation, The mRNA is translated by the tRNA to bring the corresponding amino acids and produce a polypeptide chain. The process of producing a polypeptide can be split into three parts. The initiation of translation starts when the tRNA binds to the start codon of the mRNA this happens on the small subunit of the ribosome, then the large subunit of the ribosome covers the small subunit of the ribosome, the elongation of the proteins starts. To accommodate the tRNA, ribosomes have an A site, P site, and an E site. The tRNA first enters through the P site of the ribosome with an amino acid attached to it. There will be another tRNA in the P site of the ribosome with the current chain of amino acids. The chain of polypeptides on the P site will be attached to the amino acid of the tRNA on the A site so the current chain of polypeptides in the tRNA on the A site. Then the tRNA in the P site will exit the ribosome though the E site and the tRNA with the polypeptides will move to the P site. This cycle will continue till the end of the polypeptide when the tRNA reads the end codon. 
<br><br>
Position - There are two types of ribosomes, bound and unbound ribosomes. Bound ribosomes are typically present on the nuclear envelope or the endoplasmic reticulum(ER) while unbound ribosomes float around in the cytosol. While the position of the ribosomes have no difference in structure, they both produce different types of proteins. Proteins made from bound ribosomes usually carry materials that are exported from the cell or are inserted into membranes, like lysosomes. The amount of ribosomes present in the cell depends on the cell function and its need for proteins. For example, cells in the pancreas frequently export digestive enzymes, therefore it has a lot of bound ribosomes.
<br><br>
mRNA decides if protein is made on ER or cytosol. mRNA has a signal to tell if protein is made on ER or cytosol. Those made on ER need further modification
<br><br>
Evolution - Early life forms relied more heavily on RNA for both genetic information storage and catalytic functions. In the context of ribosomes, this suggests that primitive ribosomes might have been composed primarily of RNA, with catalytic roles carried out by ribozymes (RNA molecules with enzymatic activity).
<br><br>
Over time, as organisms evolved, there was a transition from an RNA-centric world to one where proteins took on more structural and catalytic roles. This led to the development of the modern ribosome, which is a complex made up of both RNA and proteins. The small and large subunits of the ribosome are composed of ribosomal RNA (rRNA) and proteins, and they work together to facilitate the synthesis of proteins in a highly orchestrated process.
<br><br><br><br>
`;
ribopanel = createPanel("ribopanel", "Ribosome Functionality", "riboclose", ribotext, ribopanelbtn, false);

let smokingpanel;
smokingpanel = createPanel("smokingpanel", "IYTC Collab (Anti Smoking)", "smokingclose", "info goes here :D", smokingbtn, true);


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
cordbtns = document.querySelectorAll(".cordbtns");
kidneybtns = document.querySelectorAll(".kidneybtns");
exretorybtns = document.querySelectorAll(".exretorybtns");
respinsitubtns = document.querySelectorAll(".respinsitubtns");
stomachbtns = document.querySelectorAll(".stomachbtns");
respbtns = document.querySelectorAll(".respbtns");
digestivebtns = document.querySelectorAll(".digestivebtns");
circulatorybtns = document.querySelectorAll(".circulatorybtns");
bronchibtns = document.querySelectorAll(".bronchibtns");
lymphbtns = document.querySelectorAll(".lymphbtns");
endocrine1btns = document.querySelectorAll(".endocrine1btns");
liverbtns = document.querySelectorAll(".liverbtns");
esophagusbtns = document.querySelectorAll(".esophagusbtns");
intestinebtns = document.querySelectorAll(".intestinebtns");
spleenbtns = document.querySelectorAll(".spleenbtns");
pancreasbtns = document.querySelectorAll(".pancreasbtns");
lungbtns = document.querySelectorAll(".lungbtns");
colonbtns = document.querySelectorAll(".colonbtns");
skinbtns = document.querySelectorAll(".skinbtns");
diabtns = document.querySelectorAll(".diaphragmbtns")
endocrinebtns = document.querySelectorAll(".endocrinebtns");
muscularbtns = document.querySelectorAll(".muscularbtns");
spinebtns = Array.from(document.querySelectorAll(".spinebtns"));
digestiveinsitubtns = document.querySelectorAll(".digestiveinsitubtns");
skullbtns = Array.from(document.querySelectorAll(".skullbtns"));
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
smokingbtn = document.getElementById("smokingbtn");
// searchbox = document.getElementById("searchbox");
kidney2dmodelbtn = document.getElementById("kidney2dmodelbtn");
showsystems = document.getElementById("systembtn");
skinbtn = document.getElementById("skinbtn");
diaphragmbtn = document.getElementById("diaphragmbtn");
lungcrosssec = document.getElementById("lungcsbtn");
lungcsbtns = []
lungcsbtns.push(lungcrosssec)
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
let cordref = 0;
let esophagusref = 0;
let endocrine1ref = 0;
let respref = 0;
let colonref = 0;
let skeletalref = 0;
let digestiveinsituref = 0;
let skullref = 0;
let circulatoryref = 0;
let bronchiref = 0;
let digestiveref = 0;
let lymphref = 0;
let muscularref =0;
let endocrineref=0;
let respinsituref=0;
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
let digestiveinsitumeshes = [];
let skeletalmeshes = [];
let kidneymeshes = [];
let nephronmeshes = [];
let endocrine1meshes = [];
let digestivemeshes = [];
let skullmeshes = [];
let skinmeshes = [];
let circulatorymeshes = [];
let bronchimeshes = [];
let respmeshes = [];
let lymphmeshes = [];
let cordmeshes = [];
let muscularmeshes = [];
let spinemeshes = [];
let endocrinemeshes = [];
let exretorymeshes = [];
let respinsitumeshes = [];
let livermeshes =[];
let intestinemeshes = [];
let spleenmeshes = [];
let pancreasmeshes = [];
let esophagusmeshes = [];
let colonmeshes = [];
let allMeshes = [];
let buttons = [backcell, backHuman, backExretory, backKidney, showNeuron, showETC, panelbtn, showExterior, kidney2dmodelbtn, nephronbtn, smokingbtn];
let buttonArrays = [roundbtns, respbtns, cordbtns, respinsitubtns, endocrine1btns, mitosmlbtns, golgismlbtns, brainbtns, heartbtns, skinbtns, skullbtns, kidneybtns, spinebtns, endocrinebtns, liverbtns, intestinebtns, colonbtns, pancreasbtns, digestiveinsitubtns, muscularbtns, stomachbtns, digestivebtns, circulatorybtns,lymphbtns, eyemeshes, roughersmlbtns, smoothersmlbtns, exretorybtns, bronchibtns, esophagusbtns, lungbtns];
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
            onclick();
        })
    );
    return sphere;
}

/**
 * Creates a sphere button on a model which will show a popup upon clicking
 *
 * @param className class the panel belongs too (ex. brainpanel, ribopanel)
 * @param titleText title displayed at top of panel
 * @param classNameClose class of the button that closes panel (ex. brainclose, riboclose)
 * @param textInnerHTML text displayed in body of panel
 * @param btn btn that opens the panel -- needed only if btn needs to be hidden upon clicking
 */
function createPanel (className, titleText, classNameClose, textInnerHTML, btn=null, show) {
    // new Promise((resolve) => {
    // Create the main div
    const panel = document.createElement('div');
    panel.id = className;
    panel.className = `cd-panel ${className} cd-panel--from-right js-cd-panel-main`;

    // Create the header
    const header = document.createElement('header');
    header.className = 'cd-panel__header';
    panel.appendChild(header);

    // Create the title
    const title = document.createElement('h1');
    title.className = 'sTitle';
    title.textContent = titleText;
    header.appendChild(title);

    // Create the close link
    const closeLink = document.createElement('a');
    closeLink.className = `cd-panel__close js-cd-close ${classNameClose}`;
    closeLink.textContent = 'Close';
    header.appendChild(closeLink);

    // Create the container div
    const container = document.createElement('div');
    container.className = 'cd-panel__container';
    panel.appendChild(container);

    // Create the content div
    const content = document.createElement('div');
    content.className = 'cd-panel__content';
    container.appendChild(content);

    // Create the paragraph
    const paragraph = document.createElement('p');
    paragraph.className = 'sContent';
    paragraph.innerHTML = textInnerHTML;
    content.appendChild(paragraph);

    // Append the entire panel to the body or any other container
    document.body.appendChild(panel);


    document.querySelector(`.${classNameClose}`).onclick = () => {
        removeClass(panel, "cd-panel--is-visible");
        if (show) {
            showbtn(btn); // dont want to see the info button when panel is closed, so hide this btn on click of the close btn
        }
        else {
            hidebtn(btn);
        }
    };
    // resolve(panel);

    return panel

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
 * @param {*} imageURL image url
 * @param {*} imageHeight image height
 * @param {*} imageWidth image width
 * @param {*} modelBtnRef Class of the model which refers to the 3d model (i.e. mitosmlbtns)
 */
function createImagePopUp(title, description, imageURL, imageWidth, imageHeight, modelBtnRef = null){
    if(modelBtnRef != null){
        Swal.fire({
            title: title,
            text: description,
            background: "black",
            color: "white",
            imageUrl: imageURL,
            imageWidth: imageWidth,
            imageHeight: imageHeight,
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
            background: "black",
            color: "white",
            imageUrl: imageURL,
            imageWidth: imageWidth,
            imageHeight: imageHeight,
            backdrop: false,
        }) 
    }
}


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



    let vector = { x:'', y:'', z:'' };
    scene.onPointerDown = function (event, pickResult){
            //left mouse click
            if(event.button == 0){
                try{
                    vector = pickResult.pickedPoint;
                    console.log('left mouse click: ' + vector.x + ',' + vector.y + ',' + vector.z );
                }catch (err){}
            }
    }

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
    hidebtn(ribopanelbtn)
    Swal.close(); // closes the pop up with info on the ribosome
    addClass(ribopanel, "cd-panel--is-visible");
}

function loadsmokingpanel() {
    hidebtn(smokingbtn);
    hidebtn(showsystems);
    addClass(smokingpanel, "cd-panel--is-visible");
}

function loadskevpanel(panelID, btn) {
    // console.log(btn);
    // b = document.getElementById(btn);
    // hidebtn(b);
    Swal.close();
    p = document.getElementById(panelID)
    addClass(p, "cd-panel--is-visible");
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
            medulla.position.set(9.783295435504865,-10.973468433087497,-0.7949386939274561); // (depth,vertical,horizantal)
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
            pons.position.set(8.43870385928456,-7.669021724662432,-3.3618906969331945); // (depth,vertical,horizantal)
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
            thalamus.position.set(5.881520530349253,-2.389640943659913,-3.7078067365543674); // (depth,vertical,horizantal)
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
            frontalLobe.position.set(-3.5737458068703276,9.243767774489436,-11.965853805506342);
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
        temporal1.position.set(-3.1009753080826954,-2.0810282693562208,3.43813110274354); // (depth,vertical,horizantal)
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
        temporal2.position.set(-3.1009753080826954,-2.0810282693562208,3.43813110274354); // (depth,vertical,horizantal)
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
        parietal.position.set(11.218426505672202,13.035765656995679,-0.6575950891862092); // (depth,vertical,horizantal)
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
        occipital.position.set(13.991150944003131,1.2128620511509567,11.584530010406212); // (depth,vertical,horizantal)
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
    // hidebtn(showsystems);
    hidebtn(backcell);
    if (checkvis(spinebtns[0]) || val == 0 || val == 2) {
        showui();
        clickcond(humanmeshes, spinebtns, 0);
        if (val == 2) {
            console.log("inside load spine 2")
            clear();
            clearbtns();
            // hidebtn(showsystems);
            hidebtn(backcell);
            hidebtn(backPageBtn);
            hidebtn(backHuman);
        }
        BABYLON.SceneLoader.ImportMesh("", "", "models/nervoussystem.glb", scene, function (meshes) {
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
            createSphereBtn(-0.3611071484137547,2.2155669523598203,0.5144020521811177, spinemeshes, function(){createBasicPopup("Spinal Cord", "The pathway for nerve impulses to travel from the brain to the body and vice versa", cordbtns)}, .5)

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

            camera.position = new BABYLON.Vector3(0, 5, -20);
            camera.target = new BABYLON.Vector3(0, 5, 0);
            camera.radius = 20;

            showbtn(backcell);
            createSphereBtn(0.2, 10, -0.8, humanmeshes, function(){createBasicPopup("Eye", "The eye, a complex sensory apparatus, transforms incoming light through refraction by the cornea and lens, creating precise images on the retina. Photoreceptor cells in the retina convert light into neural signals, initiating the process of visual perception that shapes our understanding of the external world. ", eyebtns)}) 
            createSphereBtn(-0.534986287242269,9.902969211872968,-0.04703141752093032, humanmeshes, function(){createBasicPopup("Ear", "desc ")}) 

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
        clearbtns();
        clear();
        // hidebtn(showsystems);
        hidebtn(backcell);
        showbtn(backHuman);
        if (val == 2) {
            console.log("inside load resp 2")
            clear();
            clearbtns();
            // hidebtn(showsystems);
            hidebtn(backcell);
            hidebtn(backPageBtn);
            hidebtn(backHuman);
        }
        importmesh("exretory_system.glb", new BABYLON.Vector3(0.01, 0.01, 0.01), null, null, new BABYLON.Vector3(0, 0, -15));
        

        createSphereBtn(1.3, 5, -0.6, exretorymeshes, function(){createBasicPopup("Kidney", "The kidneys, each about the size of a human fist, are bean-shaped organs located on either side of the spine in the lower back. They filter waste and excess substances from the blood, regulating electrolyte balance, blood pressure, and producing urine for waste elimination.", kidneybtns)});
        createSphereBtn(0.98, 0, -0.25, exretorymeshes, function(){createBasicPopup("Ureter", "The channels through which the urine formed in the kidney enters the urinary bladder.")});
        createSphereBtn(-0.04, -4.42, -1.29, exretorymeshes, function(){createBasicPopup("Urinary Bladder", "The urinary bladder is made up of several layers of tissues and lined with transitional eptilhelium, which can relax and contract to accomodate urine. There are sphincter muscles between the bladder and the urethra that control urination.")});
        createSphereBtn(0.07, -5.27, -0.43, exretorymeshes, function(){createBasicPopup("Urethra", "The tube through which urine leaves the body.")});
    }
}

function loaddigestive(val) {
    change(m.getChild(), "loaddigestive(0)");
    if (checkvis(digestivebtns[0]) || val == 0 || val == 2) {
        showui();
        clickcond(humanmeshes, digestivebtns, 0);
        // hidebtn(showsystems);
        hidebtn(backcell);
        if (val == 2) {
            console.log("inside load digest 2")
            clear();
            clearbtns();
            // hidebtn(showsystems);
            hidebtn(backcell);
            hidebtn(backPageBtn);
            hidebtn(backHuman);
        }
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
            createSphereBtn(0, 2, -1.025, digestivemeshes, function(){createBasicPopup("Small Intestine", "The small intestine is a long, coiled tube where most of the digestion and absorption of nutrients occur. It consists of three sections—the duodenum, jejunum, and ileum—each playing a vital role in breaking down food and absorbing vitamins, minerals, and other nutrients into the bloodstream.c", intestinebtns)}, .7)
            createSphereBtn(0, 4, 0.2, digestivemeshes, function(){createBasicPopup("Pancreas", "The pancreas is a glandular organ located behind the stomach that plays a crucial role in both digestion and blood sugar regulation. It produces digestive enzymes that are released into the small intestine and hormones, such as insulin and glucagon, that help manage blood glucose levels.", pancreasbtns)}, .7)
            createSphereBtn(-1, 5, -1.3, digestivemeshes, function(){createBasicPopup("Stomach", "The stomach, a key part of the gastrointestinal (GI) tract, is a muscular organ that digests food using acids and enzymes. It's located in the upper left abdomen and has five sections: cardia, fundus, body, antrum, and pylorus. These sections work together to contract, mix, and process food before passing it to the small intestine. ", stomachbtns)}, .7)
            createSphereBtn(0, 10, 1.025, digestivemeshes, function(){createBasicPopup("Esophagus", "The esophagus is a muscular tube that connects the throat to the stomach, allowing the passage of swallowed food and liquids. It uses coordinated muscle contractions, known as peristalsis, to move substances downward. ", esophagusbtns)}, .7)
            createSphereBtn(1,6, -1.5, digestivemeshes, function(){createBasicPopup("Liver", "The liver carries out numerous essential functions, such as detoxifying harmful substances from the blood, disposing of old red blood cells, producing bile to aid in digestion, metabolizing proteins, carbohydrates, and fats for energy, facilitating blood clotting, regulating blood volume, and storing glycogen and vitamins for later use. This organ is divided into two main parts: the larger right lobe and the smaller left lobe, both containing intricate networks of blood vessels and lobules.", liverbtns)}, .7)
            createSphereBtn(1.5151203100242423,4.58159542163129,-0.4886603648770631, digestivemeshes, function(){createBasicPopup("Gallbladder", "The gallbladder is a small, pear-shaped organ located beneath the liver, responsible for storing and concentrating bile produced by the liver. This bile is released into the small intestine to aid in the digestion of fats. ")}, .7)
            createSphereBtn(0.11901681452779656,3.708769356834848,-1.5693504365953839, digestivemeshes, function(){createBasicPopup("Large Intestine (Colon)", "The colon, or large intestine, is the final part of the digestive system, responsible for absorbing water and electrolytes from indigestible food matter. It also compacts waste into feces for elimination from the body. ", colonbtns)}, .7)
            createSphereBtn(1.0278882681632533,-0.4251876960475176,-0.4062908418909057, digestivemeshes, function(){createBasicPopup("Appendix", "The appendix is a small, tube-shaped pouch attached to the lower end of the large intestine. Although its precise function is unclear, it is believed to play a role in the immune system and maintaining gut flora. ")}, .7)
            createSphereBtn(-0.050918167646385515,-0.8558629123022357,0.717677195142643, digestivemeshes, function(){createBasicPopup("Rectum", "The rectum is the final section of the large intestine, responsible for storing feces until they are ready to be expelled from the body. It signals the need for a bowel movement and facilitates the passage of waste through the anal canal. ")}, .7)
            createSphereBtn(0.01719847667590916,-2.0278662518005275,1.3534251692090413, digestivemeshes, function(){createBasicPopup("Anus", "The anus is the external opening at the end of the digestive tract through which feces are expelled from the body. It is surrounded by sphincter muscles that control the passage of stool during defecation.")}, .7)

        });
    }
}
function loaddigestiveinsitu(val) {
    change(m.getChild(), "loaddigestiveinsitu(0)");
    if (checkvis(digestiveinsitubtns[0]) || val == 0) {
        showui();
        showbtn(backHuman);
        // hidebtn(showsystems);
        hidebtn(backcell);
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
            createSphereBtn(0, 2, -1.025, digestiveinsitumeshes, function(){createBasicPopup("View Digestive System", "", digestivebtns)}, .7)

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
            camera.position = new BABYLON.Vector3(0,0,0);
            camera.target = new BABYLON.Vector3(0, 0, 0);
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
            createSphereBtn(0.26610380962321756,-2.6046785440048934,-0.9232411065429948, livermeshes, function(){createBasicPopup("Gallbladder", "The gallbladder is a small, pear-shaped organ located beneath the liver, responsible for storing and concentrating bile produced by the liver. This bile is released into the small intestine to aid in the digestion of fats.")}, .7)

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
            camera.position = new BABYLON.Vector3(0,0,20);
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
            createSphereBtn(2.5854595278409125,9.3249430687205,0.26042799839466113, intestinemeshes, function(){createBasicPopup("Duodenum", "The duodenum is the first and shortest part of the small intestine, connecting directly to the stomach. It receives partially digested food from the stomach and plays a critical role in further digestion by receiving bile from the liver and pancreatic enzymes from the pancreas.")}, .7)
            createSphereBtn(-1.0441230809222448,3.391124509169089,0.7264978034664225, intestinemeshes, function(){createBasicPopup("Jejunum", "The jejunum is the middle section of the small intestine, where most of the absorption of nutrients from digested food occurs. It is characterized by its extensive surface area, lined with villi and microvilli that facilitate the uptake of nutrients into the bloodstream.")}, .7)
            createSphereBtn(2.861563997450558,1.497042289458376,0.17179412339412536, intestinemeshes, function(){createBasicPopup("Ileum", "The ileum is the final section of the small intestine, connecting to the large intestine (colon). It absorbs remaining nutrients and water from digested food, playing a crucial role in completing the digestion and absorption process before waste products move into the colon for elimination.")}, .7)
            createSphereBtn(1.148921973367198,10.074631647478405,0.43739938350441676, intestinemeshes, function(){createBasicPopup("Pyloric sphincter", "The pyloric sphincter is a muscular valve located between the stomach and the small intestine. It regulates the flow of partially digested food (chyme) from the stomach into the duodenum, ensuring controlled digestion and absorption in the small intestine.")}, .7)
            createSphereBtn(4.050481837447435,-0.4583788453890749,0.14286343079463748, intestinemeshes, function(){createBasicPopup("Ileocecal valve", "The ileocecal valve is a one-way valve located between the ileum (the last part of the small intestine) and the cecum (the first part of the large intestine or colon). It regulates the flow of digested material from the small intestine into the large intestine, preventing backflow and allowing for controlled digestion and absorption.")}, .7)

            
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
function loadlungs(val) {
    change(m.getChild(), "loadlungs(0)");
    if (checkvis(lungbtns[0]) || val == 0) {
        clear();
        showui();
        clickcond(humanmeshes, lungbtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/lung.glb", scene, function (meshes) {
            hideui();  
            camera.position = BABYLON.Vector3(0, -10, 0);
            lungsref = meshes[0];
            allMeshes.push(lungsref);
            respmeshes.push(lungsref);
        });
    }
}
function loadcirculatory(val) {
    change(m.getChild(), "loadcirculatory(0)");
    if (checkvis(circulatorybtns[0]) || val == 0 || val == 2) {
        showui();
        clickcond(humanmeshes, circulatorybtns, 0);
        // hidebtn(showsystems);
        hidebtn(backcell);
        if (val == 2) {
            console.log("inside load circ 2")
            clear();
            clearbtns();
            // hidebtn(showsystems);
            hidebtn(backcell);
            hidebtn(backPageBtn);
            hidebtn(backHuman);
        }
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
            createSphereBtn(-0.55, 5.8, -0.3, circulatorymeshes, function(){createBasicPopup("Artery", "Arteries (colored red) are thick blood vessels that bring blood away from the heart. Blood in arteries is always oxygenated, with the exception of the pulmonary artery, which brings deoxygenated blood away from the heart to the lungs to become oxygenated.")}, .4)
            createSphereBtn(-0.8, 6.8, 0, circulatorymeshes, function(){createBasicPopup("Arteriole", "Smaller arteries")}, .4)
            createSphereBtn(2, 12.8, 0, circulatorymeshes, function(){createBasicPopup("Veins", "Veins (colored blue) are thick blood vessels that bring blood toward from the heart. Blood in veins is always deoxygenated, with the exception of the pulmonary veins, which bring oxygenated blood away toward the heart from the lungs.")}, .4)
            createSphereBtn(0.5, 6.8, 0.2, circulatorymeshes, function(){createBasicPopup("Venules", "Smaller veins")}, .4)
            createSphereBtn(0, 13.7, -0.3, circulatorymeshes, function(){createBasicPopup("Aorta", "The main artery that brings oxygenated blood directly from the heart. All other arteries branch off of this one.")}, .4)
            createSphereBtn(0.2, 11.8, -0.2, circulatorymeshes, function(){createBasicPopup("Vena Cava", "The main vein that brings all deoxygenated blood from the body into the heart. All other veins converge into this one", )}, .4)

        });
        camera.position = new BABYLON.Vector3(80, 0.5, 80);
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

            camera.position = new BABYLON.Vector3(0,0, 30);
            camera.target = new BABYLON.Vector3(0, 0, 0);
            meshes[0].scaling = new BABYLON.Vector3(1, 1, 1);
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            bronchiref = meshes[0];
            allMeshes.push(bronchiref);

        });
        clearbtns();
        showbtn(backHuman);
    }
}
function loadcord(val) {
    change(m.getChild(), "loadcord(0)");
    if (checkvis(cordbtns[0]) || val == 0) {
        showui();
        clearbtns();
        clickcond(humanmeshes, cordbtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/spinalcord1.glb", scene, function (meshes) {
            clear();
            hideui();

            camera.position = new BABYLON.Vector3(10,1,10);
            camera.target = new BABYLON.Vector3(0, 5, 0);
            meshes[0].scaling = new BABYLON.Vector3(.2, .2, .2);
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            cordref = meshes[0];
            allMeshes.push(cordref);
            createSphereBtn(-0.4898616709510044,-2.6803959776525828,-0.09921364781747144, cordmeshes, function(){createBasicPopup("Coccyx", "desc", )}, .4)

        });
        clearbtns();
        showbtn(backHuman);
    }
}
function loadrespinsitu(val) {
    change(m.getChild(), "loadrespinsitu(0)");
    if (checkvis(respinsitubtns[0]) || val == 0) {
        showui();
        clickcond(humanmeshes, respinsitubtns, 0);
        BABYLON.SceneLoader.ImportMesh("", "", "models/respiratorysysteminsitu1.glb", scene, function (meshes) {
            clear();
            hideui();
            camera.position = new BABYLON.Vector3(10,0,10);
            camera.target = new BABYLON.Vector3(0, 5, 0);
            meshes[0].scaling = new BABYLON.Vector3(15, 15, 15);
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            respinsituref = meshes[0];
            allMeshes.push(respinsituref);
            createSphereBtn(0.8556685562009205,5.889500466127727,0.49144617724636674, respinsitumeshes, function(){createBasicPopup("Lungs & Diaphragm", "", respbtns )}, .4)
            // createSphereBtn(0.06539137074837198,8.320759863924653,-0.3325914103056329, respinsitumeshes, function(){createBasicPopup("Larynx", "",)}, .4)
            // createSphereBtn(0.15748713793142244,8.663781263101397,-0.734095474869271, respinsitumeshes, function(){createBasicPopup("Pharynx", "", )}, .4)
            // createSphereBtn(-0.16773238650178612,10.425574829659665,0.4786251011717475, respinsitumeshes, function(){createBasicPopup("Notrils ", "", )}, .4)
            // createSphereBtn(-0.21591421901896712,8.479358037941617,-0.4453685576808546, respinsitumeshes, function(){createBasicPopup("Epiglottis ", "", )}, .4)
            // createSphereBtn(0.1397080083473481,9.847689668424586,0.022215815897260516, respinsitumeshes, function(){createBasicPopup("Nasal Cavity ", "", )}, .4)
        });
        clearbtns();
        showbtn(backHuman);
        showbtn(smokingbtn);
    }
}
function loadlymphatic(val) {
    change(m.getChild(), "loadlymphatic(0)");
    if (checkvis(lymphbtns[0]) || val == 0 || val == 2) {
        showui();
        clickcond(humanmeshes, lymphbtns, 0);
        // hidebtn(showsystems);
        hidebtn(backcell);
        if (val == 2) {
            console.log("inside load lymp 2")
            clear();
            clearbtns();
            // hidebtn(showsystems);
            hidebtn(backcell);
            hidebtn(backPageBtn);
            hidebtn(backHuman);
        }
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
          //  createSphereBtn(1, 3, -7, lymphmeshes, function(){createBasicPopup("Spleen", "desc", spleenmeshes)}, 0.4)

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
    if (checkvis(endocrinebtns[0]) || val == 0 || val == 2) {
        showui();
        clickcond(humanmeshes, endocrinebtns, 0);
        // hidebtn(showsystems);
        hidebtn(backcell);
        if (val == 2) {
            console.log("inside load endo 2")
            clear();
            clearbtns();
            // hidebtn(showsystems);
            hidebtn(backcell);
            hidebtn(backPageBtn);
            hidebtn(backHuman);
        }
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
            createSphereBtn(0.38177421210721185,10.476974486561003,-0.7496007303027916, endocrinemeshes, function(){createBasicPopup("View Endocrine System", "", endocrine1btns)}, .4)

        });
        clearbtns();
        showbtn(backHuman);
    }
}
function loadendocrine1(val) {
    change(m.getChild(), "loadendocrine1(0)");
    if (checkvis(endocrine1btns[0]) || val == 0 || val == 2) {
        showui();
        clickcond(humanmeshes, endocrine1btns, 0);
        // hidebtn(showsystems);
        hidebtn(backcell);
        BABYLON.SceneLoader.ImportMesh("", "", "models/endocrinesystem1.glb", scene, function (meshes) {
            clear();
            hideui();
            camera.position = new BABYLON.Vector3(4.7, 20.25, -127);
            camera.target = new BABYLON.Vector3(0, 15, 0);
            camera.upperRadiusLimit = 100;
            camera.radius = 23;
            clear();
            humanmeshes.forEach((el) => {
                el.visibility = 0;
            });
            meshes[0].scaling = new BABYLON.Vector3(10, 10, 10);
            endocrine1ref = meshes[0];
            allMeshes.push(endocrine1ref);
            createSphereBtn(0.19422271158972215,15.053095487973781,0.3765937280360596, endocrinemeshes, function(){createBasicPopup("Thyroid Gland", "The thyroid gland is a butterfly-shaped gland located in the front of the neck, just below the Adam's apple. It produces hormones, primarily thyroxine (T4) and triiodothyronine (T3), which regulate metabolism, growth, and development throughout the body. The thyroid gland also plays a role in regulating body temperature, heart rate, and the production of other hormones.")}, .2)
            createSphereBtn(-0.052308999432993275,13.980299730520228,0.11839942778949109, endocrinemeshes, function(){createBasicPopup("Thymus", "The thymus is a specialized organ located in the upper chest, behind the sternum and between the lungs. It is crucial for the development and maturation of T-lymphocytes (T cells), which are essential for the immune system's function. The thymus is most active during childhood and adolescence, gradually decreasing in size and activity with age.")}, .2)
            createSphereBtn(0.4548344838084215,12.218283970225333,0.6109802685730505, endocrinemeshes, function(){createBasicPopup("Adrenal Gland", "The adrenal glands, located atop each kidney, produce hormones essential for regulating metabolism, stress response, and body balance.")}, .2)
            createSphereBtn(-0.13667778030159905,11.812149353633087,0.07705994682174655, endocrinemeshes, function(){createBasicPopup("Pancreas","The pancreas is a vital organ located behind the stomach that produces digestive enzymes and hormones, including insulin and glucagon, crucial for regulating blood sugar levels.                ")}, .2)
            createSphereBtn(0.19422271158972215,15.053095487973781,0.3765937280360596, endocrinemeshes, function(){createBasicPopup("Thyroid Gland", "The thyroid gland is a butterfly-shaped organ located in the front of the neck, responsible for producing hormones that regulate metabolism, growth, and energy levels throughout the body.")}, .2)
            createSphereBtn(-0.3790778878018308,9.211812257647377,0.5720214617706709, endocrinemeshes, function(){createBasicPopup("Testes/Ovaries", "The testes are male reproductive organs responsible for producing sperm and testosterone, while ovaries are female reproductive organs that produce eggs and hormones like estrogen and progesterone.")}, .2)
            createSphereBtn(-0.14833353391744186,17.198081967825033,-0.1482179000675199, endocrinemeshes, function(){createBasicPopup("Brain Organs: Hypothalamus, Pituitary Gland, Pineal Gland", "The hypothalamus is a region in the brain responsible for regulating various bodily functions, including temperature, hunger, thirst, and sleep. It also plays a crucial role in hormone production and secretion by controlling the pituitary gland. The pituitary gland, often referred to as the 'master gland,' is located at the base of the brain. It produces and releases hormones that regulate other endocrine glands and various body functions, such as growth, reproduction, and metabolism. The pineal gland, situated in the brain's center, produces the hormone melatonin, which regulates sleep-wake cycles (circadian rhythms) and has effects on seasonal biological rhythms. ")}, .2)

        });
        clearbtns();
        showbtn(backHuman);
    }
}
function loadskin(val) {
    change(m.getChild(), "loadskin(0)");
    if (checkvis(skinbtns[0]) || val == 0 || val == 2) {
        showui();
        clickcond(humanmeshes, skinbtns, 0);
        // hidebtn(showsystems);
        hidebtn(backcell);
        if (val == 2) {
            console.log("inside load skin 2")
            clear();
            clearbtns();
            // hidebtn(showsystems);
            hidebtn(backcell);
            hidebtn(backPageBtn);
            hidebtn(backHuman);
        }
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
            createSphereBtn(-1.429031476552809,9.20573235888369,-5.859479645096261, skinmeshes, function(){createBasicPopup("Epidermis (Stratum corneum)", "The most superficial layer of skin. Composed of keratinized cells and dead cells, several layers thick.")}, 0.25)
            createSphereBtn(-1.6835021588256234,7.14752135776231,-5.802487106408545, skinmeshes, function(){createBasicPopup("Epidermis (Stratum spinosum)", "The stratum spinosum is a layer within the epidermis, the outermost layer of the skin. It consists of several layers of polygonal cells that provide strength and flexibility to the skin, playing a role in its protective function against external factors.")}, 0.25)
            createSphereBtn(-0.3852876160194004,5.085492373710684,-5.79909174554934, skinmeshes, function(){createBasicPopup("Epidermis (Stratum basale)", "The stratum basale, also known as the basal layer, is the deepest layer of the epidermis. It consists of columnar or cuboidal cells that continually divide to replenish the upper layers of the epidermis. This layer also contains melanocytes, which produce melanin, the pigment responsible for skin color and UV protection.")}, 0.25)
            createSphereBtn(4.641838912032425,5.702284249509858,-5.889503782882748, skinmeshes, function(){createBasicPopup("Dermis (Papillary Layer)", "The papillary layer is the upper layer of the dermis, situated just beneath the epidermis. It consists of loose connective tissue containing capillaries, nerve endings, and dermal papillae that interlock with the epidermis. This layer supports the epidermis and contributes to its nourishment and sensitivity to touch.")}, 0.25)
            createSphereBtn(4.106870472545223,1.9705955450635333,-5.841123706667769, skinmeshes, function(){createBasicPopup("Dermis (Reticular Layer)", "The reticular layer is the deeper and thicker layer of the dermis, located beneath the papillary layer. It consists of dense irregular connective tissue that provides strength and elasticity to the skin. This layer contains collagen and elastic fibers, as well as structures such as sweat glands, hair follicles, and deeper blood vessels, contributing to skin structure and function.")}, 0.25)
            createSphereBtn(2.4247239531816733,2.031074141443843,-6.46664647299108, skinmeshes, function(){createBasicPopup("Eccrine Sweat Gland", "Eccrine sweat glands are distributed across the body and are particularly abundant on the palms of the hands, soles of the feet, and forehead. They produce a watery sweat that helps regulate body temperature through evaporation, contributing to cooling during physical exertion or in response to heat.")}, 0.25)
            createSphereBtn(-7.893215560417568,4.6456544535072455,-5.396551753469076, skinmeshes, function(){createBasicPopup("Hair Follicle", "A hair follicle is a structure within the skin that produces hair. It extends from the surface of the skin into the dermis and sometimes into the subcutaneous layer. Surrounding each hair follicle are sebaceous glands, which secrete an oily substance called sebum that lubricates the hair and skin.")}, 0.25)
            createSphereBtn(-3.6271103275220824,-0.3045936995585201,-5.852358112119418, skinmeshes, function(){createBasicPopup("Hypodermis", "The hypodermis, also known as the subcutaneous layer or superficial fascia, is located beneath the dermis of the skin. It consists primarily of adipose (fat) tissue and loose connective tissue that serves several important functions. These include insulation to regulate body temperature, cushioning and protecting underlying tissues and organs, and storing energy in the form of fat.")}, 0.25)
            createSphereBtn(1.6738174780913555,10.775824622157021,-1.6476496506116582, skinmeshes, function(){createBasicPopup("Surface Hairs", "Surface hairs, also known as vellus hairs, are fine, short, and lightly pigmented hairs that cover most of the body. They are especially prominent on areas like the face, arms, and back. Vellus hairs play a role in thermal regulation and provide a tactile sense.")}, 0.25)
//NOTE: When writing descriptions, add free nerve endings to their respective buttons please.
        });
        clearbtns();
        showbtn(backHuman);
    }
}
function loadmuscular(val) {
    change(m.getChild(), "loadmuscular(0)");
    if (checkvis(muscularbtns[0]) || val == 0 || val == 2) {
        showui();
        clickcond(humanmeshes, muscularbtns, 0);
        // hidebtn(showsystems);
        hidebtn(backcell);
        if (val == 2) {
            console.log("inside load musc 2")
            clear();
            clearbtns();
            // hidebtn(showsystems);
            hidebtn(backcell);
            hidebtn(backPageBtn);
            hidebtn(backHuman);
        }
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

            glutmaxpanel = createPanel("glutmaxpanel", "Gluteus Maximus Information", "glutmaxclose", "INFO GOES HERE");
            glutmaxbtn = createEvolutionBtn("Glueteus Maximus", glutmaxpanel.id);
            glutmax = createSphereBtn(-0.9595757246715109,-2.4508153315399683,1.7633318747775952, muscularmeshes, function(){createBasicPopup("Gluteus maximus" , "The largest muscle in the buttocks, responsible for hip extension and external rotation.", [glutmaxbtn])}, 0.4)
            
            quadpanel = createPanel("quadpanel", "Quadriceps Information", "quadclose", "INFO GOES HERE");
            quadbtn = createEvolutionBtn("Quadriceps", quadpanel.id);
            quad = createSphereBtn(0.6882254289724681, -5.217013467858925, -0.2827176474055335, muscularmeshes, function() { createBasicPopup("Quadriceps", "A group of four muscles in the front of the thigh that extend the knee joint.", [quadbtn]); }, 0.4);

            hampanel = createPanel("hampanel", "Hamstrings Information", "hamclose", "INFO GOES HERE");
            hambtn = createEvolutionBtn("Hamstrings", hampanel.id);
            ham = createSphereBtn(1.0569583130871347, -4.490435223965783, 1.1028404875539088, muscularmeshes, function() { createBasicPopup("Hamstrings", "A group of three muscles at the back of the thigh that flex the knee joint and extend the hip joint.", [hambtn]); }, 0.4);

            gastropanel = createPanel("gastropanel", "Gastrocnemius Information", "gastroclose", "INFO GOES HERE");
            gastrobtn = createEvolutionBtn("Gastrocnemius", gastropanel.id);
            gastro = createSphereBtn(-0.8992677017875774, -4.318400530692453, 1.0402248330083737, muscularmeshes, function() { createBasicPopup("Gastrocnemius", "The calf muscle, responsible for plantar flexion of the foot.", [gastrobtn]); }, 0.4);

            bicepspanel = createPanel("bicepspanel", "Biceps Brachii Information", "bicepsclose", "INFO GOES HERE");
            bicepsbtn = createEvolutionBtn("Biceps Brachii", bicepspanel.id);
            biceps = createSphereBtn(2.7572234229919785, 1.3032823272624965, 0.31611737245809124, muscularmeshes, function() { createBasicPopup("Biceps Brachii", "Located in the upper arm, this muscle is involved in elbow flexion and forearm supination.", [bicepsbtn]); }, 0.4);

            triceppanel = createPanel("triceppanel", "Triceps Brachii Information", "tricepclose", "INFO GOES HERE");
            tricepbtn = createEvolutionBtn("Triceps Brachii", triceppanel.id);
            tricep = createSphereBtn(-2.6793534430233543, 1.8298286818625975, 1.7296695182045667, muscularmeshes, function() { createBasicPopup("Triceps Brachii", "Found on the back of the upper arm, it extends the elbow joint.", [tricepbtn]); }, 0.4);

            rectuspanel = createPanel("rectuspanel", "Rectus Abdominis Information", "rectusclose", "INFO GOES HERE");
            rectusbtn = createEvolutionBtn("Rectus Abdominis", rectuspanel.id);
            rectus = createSphereBtn(-0.191356019553929, -0.20163609969102048, -1.1340124778106109, muscularmeshes, function() { createBasicPopup("Rectus Abdominis", "Also known as the abs, it flexes the spine and helps stabilize the core.", [rectusbtn]); }, 0.4);

            obliquepanel = createPanel("obliquepanel", "Obliques Information", "obliqueclose", "INFO GOES HERE");
            obliquebtn = createEvolutionBtn("Obliques", obliquepanel.id);
            oblique = createSphereBtn(1.2986588627082112, -0.14246239629252244, -0.5962617308827127, muscularmeshes, function() { createBasicPopup("Obliques", "The external and internal obliques assist in rotation and lateral flexion of the spine.", [obliquebtn]); }, 0.4);

            pectoralpanel = createPanel("pectoralpanel", "Pectoralis Major Information", "pectoralclose", "INFO GOES HERE");
            pectoralbtn = createEvolutionBtn("Pectoralis Major", pectoralpanel.id);
            pectoral = createSphereBtn(-0.7858814124471021, 2.594602223677178, -1.0091268162423788, muscularmeshes, function() { createBasicPopup("Pectoralis Major", "The chest muscle, responsible for shoulder flexion, adduction, and internal rotation.", [pectoralbtn]); }, 0.4);

            latsdorsipanel = createPanel("latsdorsipanel", "Latissimus Dorsi Information", "latsdorsiclose", "INFO GOES HERE");
            latsdorsibtn = createEvolutionBtn("Latissimus Dorsi", latsdorsipanel.id);
            latsdorsi = createSphereBtn(-1.2800446733460544, 1.4113759110829651, 1.7001175571319962, muscularmeshes, function() { createBasicPopup("Latissimus Dorsi", "Located in the back, it performs shoulder extension, adduction, and medial rotation.", [latsdorsibtn]); }, 0.4);

            deltoidpanel = createPanel("deltoidpanel", "Deltoids Information", "deltoidclose", "INFO GOES HERE");
            deltoidbtn = createEvolutionBtn("Deltoids", deltoidpanel.id);
            deltoid = createSphereBtn(-2.1179032206981585, 3.135423221082636, 1.6565915952165646, muscularmeshes, function() { createBasicPopup("Deltoids", "The shoulder muscles responsible for arm abduction, flexion, and extension.", [deltoidbtn]); }, 0.4);

            trapzpanel = createPanel("trapzpanel", "Trapezius Information", "trapzclose", "INFO GOES HERE");
            trapzbtn = createEvolutionBtn("Trapezius", trapzpanel.id);
            trapz = createSphereBtn(-0.011323480934285701, 3.325926619570299, 1.6627112678871612, muscularmeshes, function() { createBasicPopup("Trapezius", "The large muscle in the upper back and neck, responsible for shoulder movement and neck extension.", [trapzbtn]); }, 0.4);

            soleuspanel = createPanel("soleuspanel", "Soleus Information", "soleusclose", "INFO GOES HERE");
            soleusbtn = createEvolutionBtn("Soleus", soleuspanel.id);
            soleus = createSphereBtn(-1.2551765442635419, -8.686381271946104, 1.577246976393095, muscularmeshes, function() { createBasicPopup("Soleus", "Located beneath the gastrocnemius, it assists in plantar flexion of the foot.", [soleusbtn]); }, 0.4);

            tibialispanel = createPanel("tibialispanel", "Tibialis Anterior Information", "tibialisclose", "INFO GOES HERE");
            tibialisbtn = createEvolutionBtn("Tibialis Anterior", tibialispanel.id);
            tibialis = createSphereBtn(-1.5790522311693351, -8.93094836393881, 0.4329394841819061, muscularmeshes, function() { createBasicPopup("Tibialis Anterior", "Found in the front of the lower leg, it dorsiflexes the foot.", [tibialisbtn]); }, 0.4);

            rectfempanel = createPanel("rectfempanel", "Rectus Femoris Information", "rectfemclose", "INFO GOES HERE");
            rectfembtn = createEvolutionBtn("Rectus Femoris", rectfempanel.id);
            rectfem = createSphereBtn(-0.8810866857949913, -3.1537589343874246, -0.5608825936760073, muscularmeshes, function() { createBasicPopup("Rectus Femoris", "Part of the quadriceps group, it flexes the hip and extends the knee.", [rectfembtn]); }, 0.4);

            suprapanel = createPanel("suprapanel", "Supraspinatus Information", "supraclose", "INFO GOES HERE");
            suprabtn = createEvolutionBtn("Supraspinatus", suprapanel.id);
            supra = createSphereBtn(0.8081998349093804, 4.08562975702055, 0.46671843769535837, muscularmeshes, function() { createBasicPopup("Supraspinatus", "One of the rotator cuff muscles, it assists in shoulder abduction.", [suprabtn]); }, 0.4);

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
    if (checkvis(respbtns[0]) || val == 0 || val == 2) {
        clear();
        clearbtns();
        clickcond(humanmeshes, respbtns, 0);
        showbtn(backHuman);
            clear();
            clearbtns();
            // hidebtn(showsystems);
            hidebtn(backcell);
            hidebtn(backPageBtn);
            hidebtn(backHuman);
        }
        
        camera.target = new BABYLON.Vector3(0, -0.75, 0);
        camera.position = new BABYLON.Vector3(0,0,3);
        BABYLON.SceneLoader.ImportMesh("", "", "models/lung.glb", scene, function (meshes) {
            meshes[0].scaling = new BABYLON.Vector3(0.18, 0.18, 0.18);
            respref = meshes[0];
            muscularmeshes.push(respref);
        });
        loaddiaphragm();
        // camera.radius.upperRadiusLimit = 100;
        // camera.radius = 15;
        showbtn(backHuman);
        showbtn(smokingbtn);
        createSphereBtn(0, 0.2, 0.025, respmeshes, function(){createBasicPopup("Trachea", "The trachea is the long tube that connects your larynx (voice box) to your bronchi. Your bronchi send air to your lungs.")}, .05)
        createSphereBtn(0, 0, 0.025, respmeshes, function(){createBasicPopup("Bronchi", "The bronchi are the two large tubes that carry air from the windpipe (trachea) into the lungs and back out again.", bronchibtns)}, .05)
        createSphereBtn(0.36621450755113255,-0.9993902851519447,0.22129484768301144, respmeshes, function(){createBasicPopup("Diaphragm", "The diaphragm is a muscular dome that separates the abdominal and thoracic (chest) chambers. Its ability to contract and relax to aid in breathing is essential to respiration. The diaphragm flattens and contracts during inhalation, expanding the thoracic cavity's volume and producing a vacuum that pulls air into the lungs. It relaxes and takes on the shape of a dome during exhalation, reducing the volume of the thoracic cavity and releasing air from the lungs. In addition to offering structural support, the diaphragm divides the heart and lungs from the abdominal organs. By raising stomach pressure, it also helps with other body processes like sneezing, coughing etc. The diaphragm is coordinated with other breathing muscles by means of the phrenic nerves that regulate its movements.", diabtns)}, .05)
        createSphereBtn(0.21614443373303704,-0.25441559952179893,0.26041848467991624, respmeshes, function(){createBasicPopup("Lungs", "The lungs, crucial for breathing, sit symmetrically in the chest. The right lung has three lobes, while the left has two. Their main job is gas exchange, taking in oxygen and releasing carbon dioxide. Air enters through the nose/mouth, travels down the airway, and reaches tiny sacs called alveoli. Here, oxygen enters the blood, and carbon dioxide is removed. Protective features like nasal hairs and mucus ensure smooth airflow. Lungs are buoyant, and one can function with just one. Regular exercise boosts lung capacity, and adults have millions of alveoli. In essence, lungs play a vital role in maintaining our health and sustaining life through efficient gas exchange.", lungcsbtns)}, 0.05) 

        
    }

function loadlungcs(val) {     
    change(m.getChild(), "loadlungcs(0)");
    if (checkvis(lungcsbtns[0]) || val == 0) {
        showui();
        clickcond(respmeshes, lungcsbtns, 0);
        clear();
        BABYLON.SceneLoader.ImportMesh("", "", "models/lungcs.glb", scene, function (meshes) {
            hideui();
            camera.target = new BABYLON.Vector3(0, 0, 0)
            meshes[0].scaling = new BABYLON.Vector3(1, 1, 1);
            camera.position = new BABYLON.Vector3(0, -4.5,-13);
            lungcs = meshes[0];
            muscularmeshes.push(lungcs);
        });
    }
}
    
function loaddiaphragm() {    
     
    BABYLON.SceneLoader.ImportMesh("", "", "models/diaphragm.glb", scene, function (meshes) {
        meshes[0].scaling = new  BABYLON.Vector3(7, 7, -7);
        meshes[0].position = new BABYLON.Vector3(0,-3.5,0);
        diaphragmref = meshes[0];
        muscularmeshes.push(diaphragmref);
    });
}

function loaddiaphragmonly(val) {
    change(m.getChild(), "loaddiaphramonly(0)");
    if (checkvis(diabtns[0]) || val == 0) {
        showui();
        clickcond(respinsitumeshes, diabtns, 0);
        clear();
        BABYLON.SceneLoader.ImportMesh("", "", "models/diaphragm.glb", scene, function (meshes) {
            hideui();
            meshes[0].scaling = new BABYLON.Vector3(7, 7, -7);
            meshes[0].position = new BABYLON.Vector3(0,-3,0);
            diaphragmref = meshes[0];
            muscularmeshes.push(diaphragmref);
        });
    }
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

function createEvolutionBtn(bone, panel) {

    // Create the button element
    const button = document.createElement('button');

    // Set the button attributes
    button.id = `${bone}panelbtn`;
    button.setAttribute('onclick', `loadskevpanel("${panel}", "${button.id}")`);
    button.style.display = 'none';
    button.classList.add('mui-btn', 'mui-btn--primary', 'largeBtn', 'evolutionpanel');

    // Set the button text
    button.textContent =`${bone} Evolution Information`;

    // Append the button to the body or any other container
    document.body.appendChild(button);

    return button;
    
}

function loadskeletal(val) {
    change(m.getChild(), "loadskeletal(0)");
    if (val == 0 || val == 2) {
        showui();
        // hidebtn(showsystems);
        hidebtn(backcell);
        if (val == 2) {
            console.log("inside load skel 2")
            clear();
            clearbtns();
            // hidebtn(showsystems);
            hidebtn(backcell);
            hidebtn(backPageBtn);
            hidebtn(backHuman);
        }
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
                if (val != 2) {
                   showbtn(backcell); 
                }

                meshes[0].scaling = new BABYLON.Vector3(0.9, 0.9, 0.9);
               
                skeletalref = meshes[0];
                allMeshes.push(skeletalref);
            });

            skullpanel = createPanel("skullpanel", "Skull Evolution Information", "skullclose", "INFO GOES HERE");
            skullevbtn = createEvolutionBtn("Skull", skullpanel.id);
            skullbtns.push(skullevbtn);
            skull = createSphereBtn(0, 7, -0.51, skeletalmeshes, function(){createBasicPopup("Skull", "Protects the brain and houses sensory organs like the eyes and ears.", skullbtns)})
        
            spinepanel = createPanel("spinepanel", "Spine Evolution Information", "spineclose", "INFO GOES HERE");
            spineevbtn = createEvolutionBtn("spine", spinepanel.id);
            spinebtns.push(spineevbtn);
            spine = createSphereBtn(0, 3, 0.8, skeletalmeshes, function(){createBasicPopup("Spine", "Provides support and protection for the spinal cord and allows for movement.", spinebtns)})
        
            femurbtns = []
            femurpanel = createPanel("femurpanel", "Femur Evolution Information", "femurclose", "INFO GOES HERE");
            femurevbtn = createEvolutionBtn("femur", femurpanel.id);
            femurbtns.push(femurevbtn);
            femur = createSphereBtn(1, -1, -0.2, skeletalmeshes, function(){createImagePopUp("Femur", "The thigh bone, which is the longest and strongest bone in the body, supporting body weight and facilitating walking and running.", "images/femur.png", window.innerWidth * 0.2, window.innerHeight * 0.7, femurbtns)});
            
            pelvisbtns = []
            pelvispanel = createPanel("pelvispanel", "Pelvis Evolution Information", "pelvisclose", "INFO GOES HERE");
            pelvisevbtn = createEvolutionBtn("pelvis", pelvispanel.id);
            pelvisbtns.push(pelvisevbtn);
            pelvis = createSphereBtn(0, 0, -0.5, skeletalmeshes, function(){createImagePopUp("Pelvis", "Forms the base of the spine and supports the body's weight; also protects internal reproductive organs.", "images/pelvis.png", window.innerWidth * 0.4, window.innerHeight * 0.4, pelvisbtns)});
            
            ribbtns = [];
            ribspanel = createPanel("ribspanel", "Rib Cage Evolution Information", "ribclose", "INFO GOES HERE");
            ribsevbtn = createEvolutionBtn("ribs", ribspanel.id);
            ribbtns.push(ribsevbtn);
            ribs = createSphereBtn(-0.5, 3.5, -1, skeletalmeshes, function() {
                createImagePopUp("Ribs", "Protect the vital organs in the chest, such as the heart and lungs.", "images/ribs.png", window.innerWidth * 0.4, window.innerHeight * 0.4, ribbtns);
            });

            humerusbtns = [];
            humeruspanel = createPanel("humeruspanel", "Humerus Evolution Information", "humerusclose", "INFO GOES HERE");
            humerusevbtn = createEvolutionBtn("humerus", humeruspanel.id);
            humerusbtns.push(humerusevbtn);
            humerus = createSphereBtn(-1.8, 3, 0.2, skeletalmeshes, function(){createImagePopUp("Humerus", "The upper arm bone that connects the shoulder to the elbow and allows for arm movement.", "images/humerus.png", window.innerWidth * 0.4, window.innerHeight * 0.6, humerusbtns)});

            tibfibbtns = [];
            tibfibpanel = createPanel("tibfibpanel", "Tibula and Fibula Evolution Information", "tibfibclose", "INFO GOES HERE");
            tibfibevolbtn = createEvolutionBtn("tibula and fibula", tibfibpanel.id);
            tibfibbtns.push(tibfibevolbtn);
            tibfib = createSphereBtn(0.8, -4, -0.2, skeletalmeshes, function() {
                createBasicPopup("Tibula and Fibula", "The two bones in the lower leg, with the tibia bearing most of the body's weight and the fibula providing stability.", tibfibbtns);
            });

            radulnbtns = [];
            radulnpanel = createPanel("radulnpanel", "Radius and Ulna Evolution Information", "radulnclose", "INFO GOES HERE");
            radulnevbtn = createEvolutionBtn("radius and ulna", radulnpanel.id);
            radulnbtns.push(radulnevbtn);
            raduln = createSphereBtn(-2.5, 1, 0.2, skeletalmeshes, function(){createBasicPopup("Radius and Ulna", "The bones of the forearm that allow for forearm rotation and wrist movement.", radulnbtns)});

            sternumbtns = [];
            sternumpanel = createPanel("sternumpanel", "Sternum Evolution Information", "sternumclose", "INFO GOES HERE");
            sternumevbtn = createEvolutionBtn("sternum", sternumpanel.id);
            sternumbtns.push(sternumevbtn);
            sternum = createSphereBtn(0, 3.5, -1, skeletalmeshes, function() {
                createBasicPopup("Sternum (aka Breastbone)", "Protects the heart and lungs and anchors the ribcage.", sternumbtns);
            });

            scapulabtns = [];
            scapulapanel = createPanel("scapulapanel", "Scapula Evolution Information", "scapulaclose", "INFO GOES HERE");
            scapulaevbtn = createEvolutionBtn("scapula", scapulapanel.id);
            scapulabtns.push(scapulaevbtn);
            scapula = createSphereBtn(-0.82, 4, 0.8, skeletalmeshes, function() {
                createBasicPopup("Scapula (aka Shoulder Blade)", "Provides attachment for muscles that control shoulder and arm movement.", scapulabtns);
            });

            phalangebtns = [];
            phalangepanel = createPanel("phalangepanel", "Phalange Evolution Information", "phalangeclose", "INFO GOES HERE");
            phalangeevbtn = createEvolutionBtn("phalange", phalangepanel.id);
            phalangebtns.push(phalangeevbtn);
            phalangeFoot = createSphereBtn(0.5, -7, -0.9, skeletalmeshes, function() {
                createBasicPopup("Phalange", "Phalanges are the smaller bones that make up the fingers and toes, with each digit typically consisting of three phalanges (proximal, middle, and distal).", phalangebtns);
            });
            phalangeHand = createSphereBtn(-2.8, -0.6, 0.2, skeletalmeshes, function() {
                createBasicPopup("Phalange", "Phalanges are the smaller bones that make up the fingers and toes, with each digit typically consisting of three phalanges (proximal, middle, and distal).", phalangebtns);
            });

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
    for (i = 0; i < respmeshes.length; i++) {
        try {
            respmeshes[i].dispose();
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
    } 
    for (i = 0; i < cordmeshes.length; i++) {
        try {
            cordmeshes[i].dispose();
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
            livermeshes[i].dispose();
        } catch (err) {}
    } for (i = 0; i < pancreasmeshes.length; i++) {
        try {
            pancreasmeshes[i].dispose();
        } catch (err) {}
    } for (i = 0; i < skinmeshes.length; i++) {
        try {
            skinmeshes[i].dispose();
        } catch (err) {}
    } for (i = 0; i < endocrine1meshes.length; i++) {
        try {
            endocrine1meshes[i].dispose();
        } catch (err) {}
    } for (i = 0; i < spinemeshes.length; i++) {
        try {
            spinemeshes[i].dispose();
        } catch (err) {}
    }for (i = 0; i < digestiveinsitumeshes.length; i++) {
        try {
            digestiveinsitumeshes[i].dispose();
        } catch (err) {}
    }
    for (i = 0; i < skullmeshes.length; i++) {
            try {
                skullmeshes[i].dispose();
            } catch (err) {}
    }
    for (i = 0; i < exretorymeshes.length; i++) {
        try {
            exretorymeshes[i].dispose();
        } catch (err) {}
    } 
    for (i = 0; i < respinsitumeshes.length; i++) {
        try {
            respinsitumeshes[i].dispose();
        } catch (err) {}
    }
    for (i = 0; i < lymphmeshes.length; i++) {
        try {
            lymphmeshes[i].dispose();
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
