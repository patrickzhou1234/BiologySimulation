import { camera } from '../core/babylon-setup.js';
import { change } from '../core/state-utils.js';
import { createSphereBtn, importmesh, clear, clearbtns, createBasicPopup } from '../core/utils.js';
import { state } from '../core/state.js';

const EYE_BUTTON_IDS = ['eyecsbtn'];
const CORNEA_LAYER_BUTTON_IDS = ["bowman", "epithelium", "stroma", "descement", "endothelium"];

export function loadeye() {
    clear();
    clearbtns();
    document.getElementById('title').innerHTML = "Eye";
    importmesh("eye.glb", new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 0, 0), 23, new BABYLON.Vector3(1, 1, 1));
    camera.upperRadiusLimit = 100;
    
    createSphereBtn(-1.42, 0.11, 1.15, () => {createBasicPopup("Sclera","The sclera, the white part of the eye, is a tough, protective layer that covers most of the eyeball. It provides structural support and protection for the delicate internal structures of the eye.");}, 0.4);
    createSphereBtn(0.06, 0.11, 2.06, () => {createBasicPopup("Cornea","The cornea is the transparent front part of the eye that covers the iris, pupil, and anterior chamber. It refracts light and provides protection for the eye.");}, 0.4);
    createSphereBtn(0.05, 0.01, 1.56, () => {createBasicPopup("Pupil","The pupil is the opening in the center of the iris that allows light to enter the eye so it can be focused on the retina.");}, 0.4);
    createSphereBtn(0.07, 0.85, 1.52, () => {createBasicPopup("Iris","The iris is a thin, circular structure in the eye, responsible for controlling the diameter and size of the pupil and thus the amount of light reaching the retina.");}, 0.4);
    createSphereBtn(0.08, -0.13, 0.38, () => {createBasicPopup("Lens","The lens is a transparent, biconvex structure in the eye that, along with the cornea, helps to refract light to be focused on the retina.");}, 0.4);
    
    document.getElementById('backHuman').style.display = 'block';
}

export function loadeyecs() {
    clear();
    clearbtns();
    document.getElementById('title').innerHTML = "Eye Cross-Section";
    importmesh("eye_crosssection.glb", new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 0, 0), 23, new BABYLON.Vector3(1, 1, 1));
    camera.upperRadiusLimit = 100;
    
    createSphereBtn(0, 0, 2, () => {createBasicPopup("Cornea","The transparent front part of the eye that covers the iris, pupil, and anterior chamber. It refracts light, accounting for approximately two-thirds of the eye's total optical power.");}, 0.4);
    
    document.getElementById('backHuman').style.display = 'block';
}

export function bowmanclicked() {
    Swal.fire({ title: "Bowman's Layer", text: "Bowman's layer is a smooth, acellular, nonregenerating layer, located between the superficial stroma and the epithelial basement membrane.", background: "black", color: "white" });
}
export function epitheliumclicked() {
    Swal.fire({ title: "Epithelium", text: "The epithelium is the cornea's outermost region, composed of layers of cells. It blocks the passage of foreign material and provides a smooth surface that absorbs oxygen and cell nutrients from tears.", background: "black", color: "white" });
}
export function stromaclicked() {
    Swal.fire({ title: "Stroma", text: "The stroma comprises about 90% of the cornea's thickness. It consists of water, collagen fibrils, and other proteoglycans. The collagen's structural arrangement is key to corneal transparency.", background: "black", color: "white" });
}
export function descementclicked() {
    Swal.fire({ title: "Descemet's membrane", text: "Descemet's membrane is a thin acellular layer that serves as the modified basement membrane of the corneal endothelium, from which the cells are derived.", background: "black", color: "white" });
}
export function endotheliumclicked() {
    Swal.fire({ title: "Endothelium", text: "The endothelium is a single layer of cells on the inner surface of the cornea. It is responsible for regulating fluid and solute transport between the aqueous and corneal stromal compartments.", background: "black", color: "white" });
} 