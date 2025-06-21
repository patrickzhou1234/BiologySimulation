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
    
    createSphereBtn(new BABYLON.Vector3(0.85, 5.88, 0.49), () => {
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

    createSphereBtn(new BABYLON.Vector3(0.85, 5.88, 0.49), () => {
        createBasicPopup("Lungs & Diaphragm", "", document.querySelectorAll(".respbtns"));
    }, 0.4);

    document.getElementById('backHuman').style.display = 'block';
}

export function loadlungs(val = 1) {
    clear();
    clearbtns();
    document.getElementById("title").innerHTML = "Lungs";
    importmesh("lung.glb", new BABYLON.Vector3(0, -10, 0));
    document.getElementById('backHuman').style.display = 'block';
}

export function loadbronchi(val = 1) {
    clear();
    clearbtns();
    document.getElementById("title").innerHTML = "Bronchi";
    importmesh("bronchi.glb", new BABYLON.Vector3(0, 0, 30), new BABYLON.Vector3(0, 0, 0), 23);
    camera.upperRadiusLimit = 100;
    document.getElementById('backHuman').style.display = 'block';
}

export function loadlungcs(val = 1) {
    change(state.m.getChild(), "loadlungcs(0)");
    clear();
    clearbtns();
    document.getElementById("title").innerHTML = "Lung Cross-section";
    importmesh("lungcs.glb", new BABYLON.Vector3(0, 0, -50));
    document.getElementById('backHuman').style.display = 'block';
    document.getElementById('lungcsbtn').style.display = 'none';
}

export function loaddiaphragm() {
    clear();
    clearbtns();
    loaddiaphragmonly();
    loadlungs(0);
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