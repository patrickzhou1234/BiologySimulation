import { camera } from '../core/babylon-setup.js';
import { change } from '../core/state-utils.js';
import { createSphereBtn, importmesh, clear, clearbtns, createBasicPopup } from '../core/utils.js';
import { state } from '../core/state.js';

export function loadrespiratory(val = 1) {
    if (val !== 2) {
        change(state.m.getChild(), "loadrespiratory(0)");
    }
    clear();
    clearbtns();
    document.getElementById("title").innerHTML = "Respiratory System";

    importmesh("trachea.glb", new BABYLON.Vector3(10, 0, 10), new BABYLON.Vector3(0, 5, 0), 23, new BABYLON.Vector3(15, 15, 15));
    camera.upperRadiusLimit = 100;
    
    createSphereBtn(0.8556685562009205, 5.889500466127727, 0.49144617724636674, () => {
        createBasicPopup("Lungs & Diaphragm", "", document.querySelectorAll(".respbtns"));
    }, 0.4);

    document.getElementById('backHuman').style.display = 'block';
    document.getElementById('lungcsbtn').style.display = 'block';
    document.getElementById('diaphragmbtn').style.display = 'block';
}

export function loadrespinsitu(val = 1) {
    change(state.m.getChild(), "loadrespinsitu(0)");
    clear();
    clearbtns();
    document.getElementById("title").innerHTML = "Respiratory System";
    importmesh("respiratorysysteminsitu1.glb", new BABYLON.Vector3(10, 0, 10), new BABYLON.Vector3(0, 5, 0), 23, new BABYLON.Vector3(15, 15, 15));
    camera.upperRadiusLimit = 100;

    createSphereBtn(0.8556685562009205, 5.889500466127727, 0.49144617724636674, () => {
        createBasicPopup("Lungs & Diaphragm", "", document.querySelectorAll(".respbtns"));
    }, 0.4);
    
    // Add commented out sphere buttons from script.js as active buttons
    createSphereBtn(0.06539137074837198, 8.320759863924653, -0.3325914103056329, () => {
        createBasicPopup("Larynx", "The larynx, commonly known as the voice box, is a cartilaginous structure located in the throat that plays a crucial role in speech production and protecting the airway during swallowing.");
    }, 0.4);
    
    createSphereBtn(0.15748713793142244, 8.663781263101397, -0.734095474869271, () => {
        createBasicPopup("Pharynx", "The pharynx is a muscular tube that serves as a common passageway for both air and food, connecting the nasal and oral cavities to the larynx and esophagus.");
    }, 0.4);
    
    createSphereBtn(-0.16773238650178612, 10.425574829659665, 0.4786251011717475, () => {
        createBasicPopup("Nostrils", "The nostrils are the external openings of the nasal cavity that allow air to enter the respiratory system and are lined with hairs and mucus to filter out particles.");
    }, 0.4);
    
    createSphereBtn(-0.21591421901896712, 8.479358037941617, -0.4453685576808546, () => {
        createBasicPopup("Epiglottis", "The epiglottis is a flap of cartilage that covers the opening of the larynx during swallowing to prevent food and liquid from entering the airway.");
    }, 0.4);
    
    createSphereBtn(0.1397080083473481, 9.847689668424586, 0.022215815897260516, () => {
        createBasicPopup("Nasal Cavity", "The nasal cavity is the internal space behind the nose that warms, humidifies, and filters incoming air before it reaches the lungs.");
    }, 0.4);

    document.getElementById('backHuman').style.display = 'block';
}

export function loadtrachea() {
    clear();
    clearbtns();
    document.getElementById('title').innerHTML = "Trachea";
    importmesh("trachea.glb", new BABYLON.Vector3(10, 0, 10), new BABYLON.Vector3(0, 5, 0), 23, new BABYLON.Vector3(15, 15, 15));
    document.getElementById('backHuman').style.display = 'block';
}

export function loadlungs() {
    clear();
    clearbtns();
    document.getElementById('title').innerHTML = "Lungs";
    importmesh("lung.glb", new BABYLON.Vector3(0, -10, 0));
    document.getElementById('backHuman').style.display = 'block';
}

export function loadbronchi() {
    clear();
    clearbtns();
    document.getElementById('title').innerHTML = "Bronchi";
    importmesh("bronchi.glb", new BABYLON.Vector3(0, 0, 30), new BABYLON.Vector3(0, 0, 0), 23, new BABYLON.Vector3(1, 1, 1));
    document.getElementById('backHuman').style.display = 'block';
}

export function loadlungcs() {
    clear();
    clearbtns();
    document.getElementById('title').innerHTML = "Lung Cross Section";
    importmesh("lungcs.glb", new BABYLON.Vector3(0, -4.5, -13), new BABYLON.Vector3(0, 0, 0), null, new BABYLON.Vector3(1, 1, 1));
    document.getElementById('backHuman').style.display = 'block';
}

export function loaddiaphragm() {
    clear();
    clearbtns();
    document.getElementById('title').innerHTML = "Diaphragm";
    importmesh("diaphragm.glb", null, false, null, new BABYLON.Vector3(7, 7, -7), new BABYLON.Vector3(0, -3.5, 0));
    document.getElementById('backHuman').style.display = 'block';
}

export function loaddiaphragmonly(val = 1) {
    change(state.m.getChild(), "loaddiaphragmonly(0)");
    clear();
    clearbtns();
    document.getElementById("title").innerHTML = "Diaphragm";
    importmesh("diaphragm.glb");
    document.getElementById('diaphragmbtn').style.display = 'none';
    document.getElementById('backHuman').style.display = 'block';
} 