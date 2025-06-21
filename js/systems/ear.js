import { camera } from '../core/babylon-setup.js';
import { change } from '../core/state-utils.js';
import { createSphereBtn, importmesh, clear, clearbtns, createBasicPopup } from '../core/utils.js';
import { state } from '../core/state.js';

const EAR_BUTTON_IDS = ['earcsbtn'];

export function loadear(val = 1) {
    if (val !== 2) {
        change(state.m.getChild(), "loadear(0)");
    }
    clear();
    clearbtns();
    document.getElementById("title").innerHTML = "Ear";
    importmesh("ear.glb", new BABYLON.Vector3(0, 0, -10), null, null, new BABYLON.Vector3(0.01, 0.01, 0.01), null);
    
    document.getElementById('backHuman').style.display = 'block';
    document.getElementById('earcsbtn').style.display = 'block';
}

export function loadearcs(val = 1) {
    if(val != 2){
        change(state.m.getChild(), "loadearcs(0)");
    }
    clear();
    clearbtns();
    document.getElementById("title").innerHTML = "Ear Cross-Section";
    importmesh("earcs.glb", new BABYLON.Vector3(0, 0, -10), new BABYLON.Vector3(0, 0, 0), null, new BABYLON.Vector3(0.01, 0.01, 0.01));
    camera.upperRadiusLimit = 100;
    
    createSphereBtn(0.5, 0.5, 0.5, () => {
        createBasicPopup("Pinna", "The pinna is the visible part of the ear that resides outside of the head. It is also called the auricle. The function of the pinna is to collect sound, and perform spectral transformations to incoming sounds which enable the process of vertical localization to take place.", document.querySelectorAll(".earbtns"));
    }, 0.4);
    
    document.getElementById('backHuman').style.display = 'block';
} 