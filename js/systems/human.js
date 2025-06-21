import { camera } from '../core/babylon-setup.js';
import { change } from '../core/state-utils.js';
import { createSphereBtn, importmesh, clear, clearbtns, createBasicPopup, createImagePopUp, checkvis, showui, clickcond, showbtn, orgsettings } from '../core/utils.js';
import { state } from '../core/state.js';

export function loadhuman(val) {
    change(state.m.getChild(), "loadhuman(0)");
    if (checkvis(backHuman) || val == 0) {
        showui();
        clear();
        document.getElementById('title').innerHTML = "Human";
        importmesh("human.glb", new BABYLON.Vector3(0, 5, -20), new BABYLON.Vector3(0, 5, 0), 20, new BABYLON.Vector3(6, 6, 6));
        
        try {
            eyemeshes.forEach((el) => {
                el.dispose();
            });
        } catch (err) {}
        
        showbtn(backcell);
        createSphereBtn(0.2, 10, -0.8, function () {
            createImagePopUp("Eye", "The eye, a complex sensory apparatus, transforms incoming light through refraction by the cornea and lens, creating precise images on the retina. Photoreceptor cells in the retina convert light into neural signals. ", "images/eyepicture.jpg", window.innerWidth * 0.5, window.innerHeight * 0.5, document.querySelectorAll(".eyebtns"));
        });
        createSphereBtn(-0.534986287242269, 9.902969211872968, -0.04703141752093032, function () {
            createBasicPopup("Ear", "The ear is a complex organ responsible for hearing and balance, consisting of three main parts: the outer ear, middle ear, and inner ear. The outer ear captures sound waves and funnels them through the ear canal to the eardrum, which vibrates in response. These vibrations are transmitted through the middle ear, where three tiny bones (the malleus, incus, and stapes) amplify the sound and pass it to the inner ear. The inner ear, containing the cochlea and the vestibular system, converts sound waves into electrical signals that are sent to the brain for interpretation and helps maintain equilibrium and spatial orientation.", document.querySelectorAll(".earbtns"));
        });
        
        clearbtns();
    }
} 