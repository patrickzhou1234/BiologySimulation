import { camera } from '../core/babylon-setup.js';
import { change } from '../core/state-utils.js';
import { createSphereBtn, importmesh, clear, clearbtns, createBasicPopup } from '../core/utils.js';
import { state } from '../core/state.js';

export function loadcirculatory() {
    clear();
    clearbtns();
    document.getElementById('title').innerHTML = "Circulatory System";
    importmesh("circulatory_system.glb", new BABYLON.Vector3(80, 0.5, 80), new BABYLON.Vector3(0, 9, 0), 23, new BABYLON.Vector3(10, 10, 10));
    
    // Create sphere buttons for each circulatory component with exact coordinates from script.js
    createSphereBtn(0, 12.8, -0.6, () => {
        createBasicPopup("Heart", "The heart is the central organ of the circulatory, or cardiovascular, system. Its main function is to pump blood to deliver oxygen and nutrients to all the cells and tissues in the body. The heart maintains homeostasis and plays a critical role in oxygenating blood. In addition, it regulates blood pressure and supports the entire circulatory system. The heart is divided into four chambers: two atria and two ventricles, with one atrium and one ventricle on the left side and one atrium and one ventricle on the right side. The right atrium receives deoxygenated blood from the body and pumps it into the right ventricle, which then sends the blood to the lungs through the pulmonary artery for oxygenation. The left atrium receives freshly oxygenated blood from the lungs and pushes it into the left ventricle, which pumps the oxygen-rich blood out to the rest of the body. To ensure a one-way circulation of blood, valves are located between the atria and ventricles, preventing backflow.");
    }, 0.5);
    
    createSphereBtn(-0.55, 5.8, -0.3, () => {
        createBasicPopup("Artery", "Arteries (colored red) are thick blood vessels that bring blood away from the heart. Blood in arteries is always oxygenated, with the exception of the pulmonary artery, which brings deoxygenated blood away from the heart to the lungs to become oxygenated.");
    }, 0.4);
    
    createSphereBtn(-0.8, 6.8, 0, () => {
        createBasicPopup("Arteriole", "Smaller arteries");
    }, 0.4);
    
    createSphereBtn(2, 12.8, 0, () => {
        createBasicPopup("Veins", "Veins (colored blue) are thick blood vessels that bring blood toward from the heart. Blood in veins is always deoxygenated, with the exception of the pulmonary veins, which bring oxygenated blood away toward the heart from the lungs.");
    }, 0.4);
    
    createSphereBtn(0.5, 6.8, 0.2, () => {
        createBasicPopup("Venules", "Smaller veins");
    }, 0.4);
    
    createSphereBtn(0, 13.7, -0.3, () => {
        createBasicPopup("Aorta", "The main artery that brings oxygenated blood directly from the heart. All other arteries branch off of this one.");
    }, 0.4);
    
    createSphereBtn(0.2, 11.8, -0.2, () => {
        createBasicPopup("Vena Cava", "The main vein that brings all deoxygenated blood from the body into the heart. All other veins converge into this one");
    }, 0.4);
    
    document.getElementById('backHuman').style.display = 'block';
}

export function loadheart() {
    clear();
    clearbtns();
    document.getElementById('title').innerHTML = "Heart";
    importmesh("heart.glb", new BABYLON.Vector3(80, 1.5, 50), null, null, new BABYLON.Vector3(10, 10, 10));
    document.getElementById('backHuman').style.display = 'block';
} 