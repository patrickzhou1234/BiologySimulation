import { camera } from '../core/babylon-setup.js';
import { change } from '../core/state-utils.js';
import { createSphereBtn, importmesh, clear, clearbtns, createEvolutionBtn, createBasicPopup, createImagePopUp } from '../core/utils.js';
import { state } from '../core/state.js';

let skelpanel, spinepanel, femurpanel, humeruspanel, radiusulnapanel, pelvispanel, ribspanel, scapulapanel, tibfibpanel, sternumpanel, phalangespanel;

function createSkeletalPanels() {
    const container = document.getElementById('evolution-buttons-container');
    if (!container) return;

    skelpanel = createEvolutionBtn("Skull", "The skull (cranium) evolved to protect the brain, one of the most critical organs for survival. Early vertebrates had simple skulls, but over time, they became more complex to support larger brains and specialized sensory organs.");
    spinepanel = createEvolutionBtn("Spine", "Spine evolution started with simple cartilage in early fish. As life moved to land, amphibians developed stronger backbones. Reptiles and mammals evolved more specialized vertebrae for different movements. In humans, the S-shaped curve of the spine is a key adaptation for bipedalism.");
    femurpanel = createEvolutionBtn("Femur", "The femur, or thigh bone, is the longest and strongest bone in the body. It evolved to support the weight of the body during bipedal locomotion. Its structure allows for a wide range of motion at the hip joint, crucial for walking, running, and jumping.");
    humeruspanel = createEvolutionBtn("Humerus", "The humerus, the long bone of the upper arm, evolved for both strength and flexibility. In early tetrapods, it facilitated limb movement on land. In primates, it adapted for climbing and tool use, with a rotator cuff allowing for a wide range of shoulder motion.");
    radiusulnapanel = createEvolutionBtn("Radius and Ulna", "The radius and ulna are the two long bones of the forearm, allowing for complex movements of the wrist and hand. This dual-bone structure evolved to permit pronation and supination, which is critical for grasping and manipulating objects.");
    pelvispanel = createEvolutionBtn("Pelvis", "The pelvis evolved to support bipedal locomotion in humans and other primates. It provides attachment points for muscles involved in walking and standing upright. The shape of the human pelvis is a key adaptation for balancing the body's weight on two legs.");
    ribspanel = createEvolutionBtn("Ribs", "The ribs evolved to form a protective cage around the thoracic organs, such as the heart and lungs. This structure also supports breathing by allowing the chest to expand and contract. The number and shape of ribs vary among vertebrates, reflecting different modes of life.");
    scapulapanel = createEvolutionBtn("Scapula", "The scapula started as simple cartilage in early fish to help move fins. In amphibians and reptiles, it became a bone. In mammals, the scapula evolved to allow for a wider range of motion, which is especially important for primates and their complex arm movements.");
    tibfibpanel = createEvolutionBtn("Tibia and Fibula", "The tibia and fibula are the two bones of the lower leg. The tibia, being the larger bone, evolved to bear most of the body's weight, while the fibula provides stability to the ankle. This arrangement is a key feature of tetrapod locomotion.");
    sternumpanel = createEvolutionBtn("Sternum", "The sternum (breastbone) evolved as part of the rib cage to protect vital organs like the heart and lungs. It serves as an anchor for the ribs and clavicles, providing structural support to the upper body. In birds, the sternum is highly developed to support flight muscles.");
    phalangespanel = createEvolutionBtn("Phalanges", "Phalanges are the bones of the fingers and toes, which evolved to provide dexterity and grip. In primates, elongated phalanges allowed for better manipulation of objects and tool use, essential for survival. This development is a key factor in the evolutionary success of humans.");

    container.appendChild(skelpanel);
    container.appendChild(spinepanel);
    container.appendChild(femurpanel);
    container.appendChild(humeruspanel);
    container.appendChild(radiusulnapanel);
    container.appendChild(pelvispanel);
    container.appendChild(ribspanel);
    container.appendChild(scapulapanel);
    container.appendChild(tibfibpanel);
    container.appendChild(sternumpanel);
    container.appendChild(phalangespanel);
}


export function loadskeletal(val = 1) {
    if (val !== 2) {
        change(state.m.getChild(), "loadskeletal(0)");
    }
    clear();
    clearbtns();
    document.getElementById("title").innerHTML = "Skeletal System";
    importmesh("skeletal.glb", new BABYLON.Vector3(0, 0, -100), new BABYLON.Vector3(0, -15, 0), 100, new BABYLON.Vector3(20, 20, 20), new BABYLON.Vector3(0, -20, 0));

    createSkeletalPanels();

    createSphereBtn(new BABYLON.Vector3(0, 7, -0.51), () => {
        createImagePopUp("Skull", "Protects the brain and houses sensory organs like the eyes and ears. Click the button to learn more.", "images/skullpicture.jpg", window.innerWidth * 0.6, window.innerHeight * 0.4, loadskull);
    });
    createSphereBtn(new BABYLON.Vector3(0, 3, 0.8), () => {
        createImagePopUp("Spine", "Provides support and protection for the spinal cord and allows for movement. Click the button to learn more.", "images/spinepicture.png", window.innerWidth * 0.3, window.innerHeight * 0.7, loadspine);
    });
    createSphereBtn(new BABYLON.Vector3(1, -1, -0.2), () => createImagePopUp("Femur", "The thigh bone, which is the longest and strongest bone in the body, supporting body weight and facilitating walking and running.", "images/femur.png", window.innerWidth * 0.2, window.innerHeight * 0.7));
    createSphereBtn(new BABYLON.Vector3(0, 0, -0.5), () => createImagePopUp("Pelvis", "Forms the base of the spine and supports the body's weight; also protects internal reproductive organs.", "images/pelvis.png", window.innerWidth * 0.4, window.innerHeight * 0.4));
    createSphereBtn(new BABYLON.Vector3(-0.5, 3.5, -1), () => createImagePopUp("Ribs", "Protect the vital organs in the chest, such as the heart and lungs.", "images/ribs.png", window.innerWidth * 0.4, window.innerHeight * 0.4));
    createSphereBtn(new BABYLON.Vector3(-1.8, 3, 0.2), () => createImagePopUp("Humerus", "The upper arm bone that connects the shoulder to the elbow and allows for arm movement.", "images/humerus.png", window.innerWidth * 0.4, window.innerHeight * 0.6));
    createSphereBtn(new BABYLON.Vector3(0.8, -4, -0.2), () => createImagePopUp("Tibia and Fibula", "The two bones in the lower leg, with the tibia bearing most of the body's weight and the fibula providing stability.", "images/tibfibpicture.webp", window.innerWidth * 0.5, window.innerHeight * 0.5));
    createSphereBtn(new BABYLON.Vector3(-2.5, 1, 0.2), () => createImagePopUp("Radius and Ulna", "The bones of the forearm that allow for forearm rotation and wrist movement.", "images/radiusulnapicture.jpg", window.innerWidth * 0.5, window.innerHeight * 0.5));
    createSphereBtn(new BABYLON.Vector3(0, 3.5, -1), () => createImagePopUp("Sternum (aka Breastbone)", "Protects the heart and lungs and anchors the ribcage.", "images/sternumpicture.jpg", window.innerWidth * 0.4, window.innerHeight * 0.6));
    createSphereBtn(new BABYLON.Vector3(-0.82, 4, 0.8), () => createImagePopUp("Scapula (aka Shoulder Blade)", "Provides attachment for muscles that control shoulder and arm movement.", "images/scapulapicture.jpg", window.innerWidth * 0.4, window.innerHeight * 0.6));
    createSphereBtn(new BABYLON.Vector3(0.5, -7, -0.9), () => createImagePopUp("Phalange", "Phalanges are the smaller bones that make up the fingers and toes, with each digit typically consisting of three phalanges (proximal, middle, and distal).", "images/handpicture.svg", window.innerWidth * 0.5, window.innerHeight * 0.5));
    createSphereBtn(new BABYLON.Vector3(-2.8, -0.6, 0.2), () => createImagePopUp("Phalange", "Phalanges are the smaller bones that make up the fingers and toes, with each digit typically consisting of three phalanges (proximal, middle, and distal).", "images/handpicture.svg", window.innerWidth * 0.5, window.innerHeight * 0.5));

    document.getElementById('backHuman').style.display = 'block';
}

export function loadskull(val = 1) {
    if(val != 2){
        change(state.m.getChild(), "loadskull(0)");
    }
    clear();
    clearbtns();
    document.getElementById("title").innerHTML = "Skull";
    importmesh("skull.glb", new BABYLON.Vector3(0, 0, -30), new BABYLON.Vector3(0, -3, 0), 20, new BABYLON.Vector3(0.01, 0.01, 0.01));
    camera.upperRadiusLimit = 100;
    
    createSphereBtn(new BABYLON.Vector3(-0.02, 3.49, 1.77), () => createBasicPopup("Frontal bone", "The frontal bone is a bone in the human skull. The bone consists of two portions. These are the vertically oriented squamous part, and the horizontally oriented orbital part, making up the bony part of the forehead, part of the bony orbital cavity holding the eye, and part of the bony part of the nose respectively."));
    createSphereBtn(new BABYLON.Vector3(-0.02, 3.44, -1.13), () => createBasicPopup("Parietal bone", "The parietal bone is a bone in the human skull which, when joined together, form the sides and roof of the cranium."));
    createSphereBtn(new BABYLON.Vector3(-0.95, 1.48, -0.36), () => createBasicPopup("Temporal bone", "The temporal bones are situated at the sides and base of the skull, and lateral to the temporal lobes of the cerebral cortex."));
    createSphereBtn(new BABYLON.Vector3(-0.02, 1.48, -2.28), () => createBasicPopup("Occipital bone", "The occipital bone is a cranial dermal bone and the main bone of the occiput (the back and lower part of the skull)."));
    createSphereBtn(new BABYLON.Vector3(-1.18, 1.5, 0.7), () => createBasicPopup("Zygomatic bone", "The zygomatic bone is a paired irregular bone which articulates with the maxilla, the temporal bone, the sphenoid bone and the frontal bone."));
    createSphereBtn(new BABYLON.Vector3(-0.02, 1.25, 2.02), () => createBasicPopup("Maxilla", "The maxilla is the upper fixed (not fixed in Neopterygii) bone of the jaw formed from the fusion of two maxillary bones."));
    createSphereBtn(new BABYLON.Vector3(-0.02, -0.42, 1.8), () => createBasicPopup("Mandible", "The mandible, lower jaw or jawbone is the largest, strongest and lowest bone in the human facial skeleton."));
    
    document.getElementById('backHuman').style.display = 'block';
}

export function loadspine(val = 1) {
    if (val !== 2) {
        change(state.m.getChild(), "loadspine(0)");
    }
    clear();
    clearbtns();
    document.getElementById("title").innerHTML = "Spine";
    importmesh("spine.glb", new BABYLON.Vector3(0, 0, -50), new BABYLON.Vector3(0, -3, 0), 20, new BABYLON.Vector3(0.01, 0.01, 0.01));
    
    createSphereBtn(new BABYLON.Vector3(-0.16, 12.3, -0.9), () => createBasicPopup("Cervical vertebrae", "The cervical vertebrae are the vertebrae of the neck, immediately below the skull."));
    createSphereBtn(new BABYLON.Vector3(-0.16, 4.3, -0.9), () => createBasicPopup("Thoracic vertebrae", "The thoracic vertebrae compose the middle segment of the vertebral column, between the cervical vertebrae and the lumbar vertebrae."));
    createSphereBtn(new BABYLON.Vector3(-0.16, -4.7, -0.9), () => createBasicPopup("Lumbar vertebrae", "The lumbar vertebrae are, in human anatomy, the five vertebrae between the rib cage and the pelvis."));
    createSphereBtn(new BABYLON.Vector3(-0.16, -12.7, -0.9), () => createBasicPopup("Sacrum", "The sacrum is a large, triangular bone at the base of the spine that forms by the fusing of sacral vertebrae S1–S5 between 18 and 30 years of age."));
    createSphereBtn(new BABYLON.Vector3(-0.16, -15.7, -0.9), () => createBasicPopup("Coccyx", "The coccyx, commonly referred to as the tailbone, is the final segment of the vertebral column in all apes, and analogous structures in certain other mammals such as horses."));

    document.getElementById('backHuman').style.display = 'block';
} 