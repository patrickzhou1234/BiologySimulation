import { camera } from '../core/babylon-setup.js';
import { change } from '../core/state-utils.js';
import { createSphereBtn, importmesh, clear, clearbtns, createBasicPopup } from '../core/utils.js';
import { state } from '../core/state.js';

export function loadendocrine(val = 1) {
    if(val != 2){
        change(state.m.getChild(), "loadendocrine(0)");
    }
    clear();
    clearbtns();
    document.getElementById("title").innerHTML = "Endocrine System";

    importmesh("endocrine_system.glb", new BABYLON.Vector3(0, 0, -15), null, 20, new BABYLON.Vector3(0.01, 0.01, 0.01));
    createSphereBtn(new BABYLON.Vector3(0,9.5,0.7), () => {createBasicPopup("Endocrine Glands","The endocrine system is a complex network of glands that produce and secrete hormones, which are chemical messengers that regulate various bodily functions. The endocrine system works in conjunction with the nervous system to maintain homeostasis, or a stable internal environment. The endocrine system is composed of several glands, including the pituitary gland, thyroid gland, parathyroid glands, adrenal glands, pancreas, ovaries, and testes.", document.querySelectorAll(".endocrine1btns"));});
    
    document.getElementById('backHuman').style.display = 'block';
}

export function loadendocrine1(val = 1) {
    change(state.m.getChild(), "loadendocrine1(0)");
    clear();
    clearbtns();
    document.getElementById("title").innerHTML = "Endocrine System";

    importmesh("endocrinesystem1.glb", new BABYLON.Vector3(0, -5, -25), null, 20, new BABYLON.Vector3(5, 5, 5), new BABYLON.Vector3(0, -3, 0));
    camera.upperRadiusLimit = 100;
    
    createSphereBtn(new BABYLON.Vector3(0.06,8.82,1.38), () => {createBasicPopup("Pituitary Gland","The pituitary gland is a small, pea-sized gland located at the base of the brain. It is often referred to as the 'master gland' because it produces and secretes a variety of hormones that control the functions of other endocrine glands.");});
    createSphereBtn(new BABYLON.Vector3(-0.02,8.96,1.44), () => {createBasicPopup("Hypothalamus","The hypothalamus is a small region of the brain located just above the pituitary gland. It plays a crucial role in regulating many of the body's essential functions, including temperature, hunger, thirst, and sleep. The hypothalamus also controls the pituitary gland, and thus, the endocrine system.");});
    createSphereBtn(new BABYLON.Vector3(0,6.7,0.7), () => {createBasicPopup("Thyroid Gland","The thyroid gland is a butterfly-shaped gland located in the neck, just below the Adam's apple. It produces and secretes hormones that regulate the body's metabolism, or the rate at which it burns calories.");});
    createSphereBtn(new BABYLON.Vector3(0.25,2.71,-0.12), () => {createBasicPopup("Adrenal Gland","The adrenal glands are two small glands located on top of each kidney. They produce and secrete a variety of hormones that regulate the body's response to stress, as well as blood pressure, and blood sugar levels.");});
    createSphereBtn(new BABYLON.Vector3(0.24,2.37,-0.75), () => {createBasicPopup("Pancreas","The pancreas is a long, flat gland located behind the stomach. It produces and secretes hormones that regulate blood sugar levels, as well as enzymes that aid in digestion.");});
    createSphereBtn(new BABYLON.Vector3(0,1,0), () => {createBasicPopup("Ovaries","The ovaries are two small, almond-shaped glands located on either side of the uterus in women. They produce and secrete hormones that regulate the menstrual cycle and pregnancy.");});
    createSphereBtn(new BABYLON.Vector3(0,0,0), () => {createBasicPopup("Testes","The testes are two small, oval-shaped glands located in the scrotum in men. They produce and secrete hormones that regulate the development of male reproductive organs and secondary sexual characteristics.");});
    document.getElementById('backHuman').style.display = 'block';
} 