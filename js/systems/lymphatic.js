import { change } from '../core/state-utils.js';
import { clickcond, importmesh, clear, clearbtns, showui } from '../core/utils.js';

const HUMAN_BODY_MAIN_IDS = ["circulatory", "nervous", "digestive", "endocrine", "muscular", "lymphatic", "respiratory", "excretory", "skin", "skeletal"];
const LYMPHATIC_BUTTON_IDS = ["spleenbtn"]; // Placeholder

export function loadlymphatic(ind) {
    change("loadlymphatic(0)");

    const lymphaticButton = document.getElementById("lymphatic");
    if (lymphaticButton?.style.display !== 'none' || ind === 0) {
        clear();
        clearbtns();
        showui(HUMAN_BODY_MAIN_IDS);
        clickcond(HUMAN_BODY_MAIN_IDS, ind);

        document.getElementById("title").innerHTML = "Lymphatic System";
        importmesh("lymphatic_system.glb", new BABYLON.Vector3(0, 5, -20), new BABYLON.Vector3(0, 2, 0), 20, new BABYLON.Vector3(4.5, 4.5, 4.5), new BABYLON.Vector3(0, -2, 0));

        document.getElementById('backHuman').style.display = 'block';
        showui(LYMPHATIC_BUTTON_IDS);
    }
}

export function loadspleen(ind) {
    change("loadspleen(0)");
    clear();
    clearbtns();
    clickcond(LYMPHATIC_BUTTON_IDS, ind);

    document.getElementById("title").innerHTML = "Spleen";
    importmesh("spleen.glb", new BABYLON.Vector3(0, 5, -30), new BABYLON.Vector3(0, 5, 0), 20, new BABYLON.Vector3(0.01, 0.01, 0.01));

    document.getElementById('backLymphatic').style.display = 'block';
} 