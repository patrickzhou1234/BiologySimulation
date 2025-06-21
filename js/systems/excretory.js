import { camera } from '../core/babylon-setup.js';
import { change } from '../core/state-utils.js';
import { createSphereBtn, importmesh, clear, clearbtns, createBasicPopup } from '../core/utils.js';
import { state } from '../core/state.js';

export function loadexretory(val = 1) {
    if (val !== 2) {
        change(state.m.getChild(), "loadexretory(0)");
    }
    clear();
    clearbtns();
    document.getElementById("title").innerHTML = "Excretory System";
    importmesh("exretory_system.glb", new BABYLON.Vector3(0, 0, -15), null, 20, new BABYLON.Vector3(0.01, 0.01, 0.01));

    createSphereBtn(new BABYLON.Vector3(1.3,5,-0.6), () => {createBasicPopup("Kidney","The kidneys, each about the size of a human fist, are bean-shaped organs located on either side of the spine in the lower back. They filter waste and excess substances from the blood, regulating electrolyte balance, blood pressure, and producing urine for waste elimination.", document.querySelectorAll(".kidneybtns"));});
    createSphereBtn(new BABYLON.Vector3(0.98,0,-0.25), () => {createBasicPopup("Ureter","The channels through which the urine formed in the kidney enters the urinary bladder.");});
    createSphereBtn(new BABYLON.Vector3(-0.04,-4.42,-1.29), () => {createBasicPopup("Urinary Bladder","The urinary bladder is made up of several layers of tissues and lined with transitional epithelium, which can relax and contract to accommodate urine. There are sphincter muscles between the bladder and the urethra that control urination.");});
    createSphereBtn(new BABYLON.Vector3(0.07,-5.27,-0.43), () => {createBasicPopup("Urethra","The tube through which urine leaves the body.");});

    document.getElementById('backHuman').style.display = 'block';
}

export function loadkidney(val = 1) {
    change(state.m.getChild(), "loadkidney(0)");
    clear();
    clearbtns();
    document.getElementById("title").innerHTML = "Kidney";
    importmesh("kidney.glb", new BABYLON.Vector3(0, 5, -30), new BABYLON.Vector3(0, 0, 0), 20, new BABYLON.Vector3(1, 1, 1), new BABYLON.Vector3(0, -3, 0));
    
    document.getElementById('backExretory').style.display = 'block';
    document.getElementById('nephronbtn').style.display = 'block';
    document.getElementById('kidney2dmodelbtn').style.display = 'block';
}

export function loadnephron(val = 1) {
    change(state.m.getChild(), "loadnephron(0)");
    clear();
    clearbtns();
    document.getElementById("title").innerHTML = "Nephron";
    importmesh("nephron.glb", new BABYLON.Vector3(-80, 5, -100), null, 20, new BABYLON.Vector3(0.05, 0.05, 0.05));
    camera.upperRadiusLimit = 200;
    
    document.getElementById('backKidney').style.display = 'block';
}

export function kidney2dmodel() {
    clear();
    clearbtns();
    const kidneyImg = new Image();
    kidneyImg.src = 'images/kidney.png';
    kidneyImg.style.width = '80%';
    kidneyImg.style.height = 'auto';

    Swal.fire({
        title: 'Kidney (2D Model)',
        html: kidneyImg.outerHTML,
        width: '90%',
        background: "black",
        color: "white",
        backdrop: false,
    });
    document.getElementById('backKidney').style.display = 'block';
} 