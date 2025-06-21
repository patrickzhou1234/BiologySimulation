import { change } from '../core/state-utils.js';
import { clickcond, importmesh, clear, clearbtns, showui } from '../core/utils.js';

const HUMAN_BODY_MAIN_IDS = ["circulatory", "nervous", "digestive", "endocrine", "muscular", "lymphatic", "respiratory", "excretory", "skin", "skeletal"];

export function loadskin(ind) {
    change("loadskin(0)");

    const skinButton = document.getElementById("skin");
    if (skinButton?.style.display !== 'none' || ind === 0) {
        clear();
        clearbtns();
        showui(HUMAN_BODY_MAIN_IDS);
        clickcond(HUMAN_BODY_MAIN_IDS, ind);

        document.getElementById("title").innerHTML = "Skin";
        importmesh("skin.glb", new BABYLON.Vector3(0, 5, -30), new BABYLON.Vector3(0, 5, 0), 20, new BABYLON.Vector3(0.01, 0.01, 0.01));

        document.getElementById('backHuman').style.display = 'block';
    }
} 