import { camera } from '../core/babylon-setup.js';
import { change } from '../core/state-utils.js';
import { createSphereBtn, importmesh, clear, clearbtns, createBasicPopup } from '../core/utils.js';
import { state } from '../core/state.js';

export function loadendocrine() {
    clear();
    clearbtns();
    document.getElementById('title').innerHTML = "Endocrine System";
    importmesh("endocrine_system.glb", new BABYLON.Vector3(4.7, -35.25, -127), new BABYLON.Vector3(0, 9, 0), 23, new BABYLON.Vector3(10, 10, 10));
    
    createSphereBtn(0.38177421210721185, 10.476974486561003, -0.7496007303027916, () => {
        createBasicPopup("View Endocrine System", "", document.querySelectorAll(".endocrine1btns"));
    }, 0.4);
    
    document.getElementById('backHuman').style.display = 'block';
}

export function loadendocrine1() {
    clear();
    clearbtns();
    document.getElementById('title').innerHTML = "Endocrine System";
    importmesh("endocrinesystem1.glb", new BABYLON.Vector3(4.7, 20.25, -127), new BABYLON.Vector3(0, 15, 0), 23, new BABYLON.Vector3(10, 10, 10));
    camera.upperRadiusLimit = 100;
    
    createSphereBtn(0.06, 8.82, 1.38, () => {
        createBasicPopup("Pituitary Gland", "The pituitary gland is a small, pea-sized gland located at the base of the brain. It is often referred to as the 'master gland' because it produces and secretes a variety of hormones that control the functions of other endocrine glands.");
    }, 0.4);
    
    createSphereBtn(-0.02, 8.96, 1.44, () => {
        createBasicPopup("Hypothalamus", "The hypothalamus is a small region of the brain located just above the pituitary gland. It plays a crucial role in regulating many of the body's essential functions, including temperature, hunger, thirst, and sleep. The hypothalamus also controls the pituitary gland, and thus, the endocrine system.");
    }, 0.4);
    
    createSphereBtn(0, 6.7, 0.7, () => {
        createBasicPopup("Thyroid Gland", "The thyroid gland is a butterfly-shaped gland located in the neck, just below the Adam's apple. It produces and secretes hormones that regulate the body's metabolism, or the rate at which it burns calories.");
    }, 0.4);
    
    createSphereBtn(0.25, 2.71, -0.12, () => {
        createBasicPopup("Adrenal Gland", "The adrenal glands are two small glands located on top of each kidney. They produce and secrete a variety of hormones that regulate the body's response to stress, as well as blood pressure, and blood sugar levels.");
    }, 0.4);
    
    createSphereBtn(0.24, 2.37, -0.75, () => {
        createBasicPopup("Pancreas", "The pancreas is a long, flat gland located behind the stomach. It produces and secretes hormones that regulate blood sugar levels, as well as enzymes that aid in digestion.");
    }, 0.4);
    
    createSphereBtn(0, 1, 0, () => {
        createBasicPopup("Ovaries", "The ovaries are two small, almond-shaped glands located on either side of the uterus in women. They produce and secrete hormones that regulate the menstrual cycle and pregnancy.");
    }, 0.4);
    
    createSphereBtn(0, 0, 0, () => {
        createBasicPopup("Testes", "The testes are two small, oval-shaped glands located in the scrotum in men. They produce and secrete hormones that regulate the development of male reproductive organs and secondary sexual characteristics.");
    }, 0.4);
    
    document.getElementById('backHuman').style.display = 'block';
} 