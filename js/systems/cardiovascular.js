import { camera } from '../core/babylon-setup.js';
import { change } from '../core/state-utils.js';
import { createSphereBtn, importmesh, clear, clearbtns, createBasicPopup } from '../core/utils.js';
import { state } from '../core/state.js';

export function loadcirculatory(val = 1) {
    if (val !== 2) {
        change(state.m.getChild(), "loadcirculatory(0)");
    }
    clear();
    clearbtns();
    document.getElementById("title").innerHTML = "Circulatory System";
    importmesh("circulatory_system.glb", new BABYLON.Vector3(0, 0, -15), null, 20, new BABYLON.Vector3(0.01, 0.01, 0.01));

    createSphereBtn(new BABYLON.Vector3(-0.02,7.18,0.20), () => {createBasicPopup("Heart","The heart is a muscular organ that pumps blood throughout the body. It is the center of the circulatory system. The heart is composed of four chambers: two atria and two ventricles. The atria receive blood from the veins, and the ventricles pump blood into the arteries. The heart is responsible for pumping oxygenated blood to the body and deoxygenated blood to the lungs.", document.querySelectorAll(".heartbtns"));});
    createSphereBtn(new BABYLON.Vector3(0.12,9.32,-0.47), () => {createBasicPopup("Superior Vena Cava","The superior vena cava is a large vein that carries deoxygenated blood from the upper half of the body to the heart's right atrium.");});
    createSphereBtn(new BABYLON.Vector3(0.06,1.48,-0.12), () => {createBasicPopup("Inferior Vena Cava","The inferior vena cava is a large vein that carries deoxygenated blood from the lower and middle body into the right atrium of the heart.");});
    createSphereBtn(new BABYLON.Vector3(0.25,9.22,-0.27), () => {createBasicPopup("Aorta","The aorta is the main artery that carries oxygenated blood from the heart to the rest of the body.");});

    document.getElementById('backHuman').style.display = 'block';
}

export function loadheart(val = 1) {
    change(state.m.getChild(), "loadheart(0)");
    clear();
    clearbtns();
    document.getElementById("title").innerHTML = "Heart";
    importmesh("heart.glb", new BABYLON.Vector3(0, 0, 30), new BABYLON.Vector3(0, 0, 0), 20, new BABYLON.Vector3(0.04, 0.04, 0.04));
    camera.upperRadiusLimit = 100;
    
    createSphereBtn(new BABYLON.Vector3(-0.62,1.38,1.45), () => {createBasicPopup("Right Atrium","The right atrium receives deoxygenated blood from the body through the vena cavae and pumps it into the right ventricle which then sends it to the lungs to be oxygenated.");});
    createSphereBtn(new BABYLON.Vector3(0.92,1.24,0.78), () => {createBasicPopup("Left Atrium","The left atrium receives oxygenated blood from the lungs and pumps it into the left ventricle which then pumps it out to the rest of a body.");});
    createSphereBtn(new BABYLON.Vector3(0.92,0.24,1.15), () => {createBasicPopup("Left Ventricle","The left ventricle is the thickest of the heart's chambers and is responsible for pumping oxygenated blood to tissues all over the body.");});
    createSphereBtn(new BABYLON.Vector3(-0.55,0.3,1.49), () => {createBasicPopup("Right Ventricle","The right ventricle is the chamber within the heart that is responsible for pumping deoxygenated blood to the lungs.");});
    
    document.getElementById('backHuman').style.display = 'block';
} 