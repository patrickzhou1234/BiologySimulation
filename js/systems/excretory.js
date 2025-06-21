import { camera } from '../core/babylon-setup.js';
import { change } from '../core/state-utils.js';
import { createSphereBtn, importmesh, clear, clearbtns, createBasicPopup } from '../core/utils.js';
import { state } from '../core/state.js';

export function loadexcretory() {
    clear();
    clearbtns();
    document.getElementById('title').innerHTML = "Excretory System";
    importmesh("exretory_system.glb", new BABYLON.Vector3(0, 0, -15), null, null, new BABYLON.Vector3(0.01, 0.01, 0.01));
    
    // Create sphere buttons for excretory system components with exact coordinates from script.js
    createSphereBtn(1.3, 5, -0.6, () => {
        createBasicPopup("Kidney", "The kidneys, each about the size of a human fist, are bean-shaped organs located on either side of the spine in the lower back. They filter blood to remove waste products and excess water, producing urine that is then transported to the bladder for storage and eventual elimination from the body.");
    }, 0.4);
    
    createSphereBtn(0.98, 0, -0.25, () => {
        createBasicPopup("Ureter", "The channels through which the urine formed in the kidney enters the urinary bladder.");
    }, 0.4);
    
    document.getElementById('backHuman').style.display = 'block';
}

export function loadkidney() {
    clear();
    clearbtns();
    document.getElementById('title').innerHTML = "Kidney";
    importmesh("kidney.glb", new BABYLON.Vector3(0, 0, -0.1), null, null, new BABYLON.Vector3(0.005, 0.005, 0.005));
    
    // Create sphere buttons for kidney components with exact coordinates from script.js
    createSphereBtn(-0.35, -0.15, 0, () => {
        createBasicPopup("Ureter", "The channel through which the urine formed in the kidney enters the urinary bladder.");
    }, 0.1);
    
    createSphereBtn(0, 0, 0.225, () => {
        createBasicPopup("Renal Capsule", "The outermost layer of the kidney. It is a tough, fibrous membrane that protects the kidney. The renal capsule is surrounded by adipose tissue and connective tissue.");
    }, 0.1);
    
    createSphereBtn(0.26, 0, -0.025, () => {
        createBasicPopup("Renal Cortex", "The outer region of the kidney that houses the glomerulus and convoluted tubules of the nephrons. Nephorons are units of the kidney that filter blood and produce urine.");
    }, 0.1);
    
    createSphereBtn(0.19, -0.15, -0.025, () => {
        createBasicPopup("Renal Medulla", "Filters waste materials and eliminates fluid from the body. It also houses the loops of Henle, which are unique to the kidney and help concentrate urine.");
    }, 0.1);
    
    createSphereBtn(-0.15, -0.175, -0.025, () => {
        createBasicPopup("Renal Pelvis", "The inner region of the kidney that collects urine as it is produced, and sends it through the ureters to the bladder.");
    }, 0.1);
    
    document.getElementById('backHuman').style.display = 'block';
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