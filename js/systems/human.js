import { change } from '../core/state-utils.js';
import { createSphereBtn, importmesh, clear, clearbtns } from '../core/utils.js';
import { loadeye } from './eye.js';
import { loadear } from './ear.js';
import { state } from '../core/state.js';

export function loadhuman(val = 1) {
    if(val != 2){
        change(state.m.getChild(), "loadhuman(0)");
    }
    clear();
    clearbtns();

    document.getElementById("title").innerHTML = "Human";

    importmesh("human.glb", new BABYLON.Vector3(0, 5, -20), new BABYLON.Vector3(0, 5, 0), 20, new BABYLON.Vector3(6, 6, 6));

    document.getElementById('backcell').style.display = 'block';

    // Sphere buttons for specific organs
    createSphereBtn(new BABYLON.Vector3(0.2, 10, -0.8), () => {
        loadeye(0);
    }, 0.25);

    createSphereBtn(new BABYLON.Vector3(-0.53, 9.90, -0.04), () => {
        loadear(0);
    }, 0.25);
} 