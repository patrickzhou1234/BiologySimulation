import { camera } from '../core/babylon-setup.js';
import { change } from '../core/state-utils.js';
import { createSphereBtn, importmesh, clear, clearbtns, createEvolutionBtn, createBasicPopup, createImagePopUp, createPanel, checkvis, showui, hidebtn, showbtn } from '../core/utils.js';
import { state } from '../core/state.js';

export function loadskeletal() {
    clear();
    clearbtns();
    change(state.m.getChild(), "loadskeletal(0)");
    document.getElementById("title").innerHTML = "Skeletal System";
    importmesh("skeletal.glb", new BABYLON.Vector3(4.7, 1.25, -127), new BABYLON.Vector3(0, -0.25, 0), 23, new BABYLON.Vector3(0.9, 0.9, 0.9));

    // Create panels for each bone
    const skullpanel = createPanel("skullpanel", "Skull Evolution Information", "skullclose", "The skull (cranium) evolved to protect the brain, one of the most critical organs for survival. Early vertebrates had simple skull structures, but as organisms evolved, the skull became more complex to accommodate larger brains, sensory organs, and features necessary for eating. The skull also evolved to support complex speech and facial expressions. This is why prior species in the homo genus often have smaller skulls.");
    const skullevbtn = createEvolutionBtn("Skull", skullpanel.id);
    
    const spinepanel = createPanel("spinepanel", "Spine Evolution Information", "spineclose", "Spine evolution started with simple cartilage in early fish. As life moved to land, amphibians developed stronger backbones. Reptiles, and later mammals and birds, further specialized their spines into regions like the neck, chest, and lower back for better support and movement.");
    const spineevbtn = createEvolutionBtn("Spine", spinepanel.id);
    
    const femurpanel = createPanel("femurpanel", "Femur Evolution Information", "femurclose", "The femur, or thigh bone, is the longest and strongest bone in the body. It evolved to support the weight of the body during bipedal locomotion. Its structure allows for efficient movement and stability, crucial for walking and running");
    const femurevbtn = createEvolutionBtn("Femur", femurpanel.id);
    
    const pelvispanel = createPanel("pelvispanel", "Pelvis Evolution Information", "pelvisclose", "The pelvis evolved to support bipedal locomotion in humans and other primates. It provides attachment points for muscles involved in walking, running, and maintaining upright posture. The shape and structure of the pelvis are also adapted to accommodate childbirth in humans.");
    const pelvisevbtn = createEvolutionBtn("Pelvis", pelvispanel.id);
    
    const ribspanel = createPanel("ribspanel", "Rib Cage Evolution Information", "ribclose", "The ribs evolved to form a protective cage around the thoracic organs, such as the heart and lungs. This structure also supports respiration by allowing expansion and contraction of the chest cavity. Early vertebrates had simple rib structures, which have become more specialized in mammals to enhance breathing efficiency. A 2020 study suggests that ribs were evolved to assist with locomotion when reptiles first emerged from the water, which were then later adapted for breathing");
    const ribsevbtn = createEvolutionBtn("Ribs", ribspanel.id);
    
    const humeruspanel = createPanel("humeruspanel", "Humerus Evolution Information", "humerusclose", "The humerus, the long bone of the upper arm, evolved for both strength and flexibility. In early tetrapods, it facilitated movement on land. Over time, the humerus adapted to various functions across species, from flight in birds to manipulation and tool use in primates, including humans.");
    const humerusevbtn = createEvolutionBtn("Humerus", humeruspanel.id);
    
    const tibfibpanel = createPanel("tibfibpanel", "Tibia and Fibula Evolution Information", "tibfibclose", "The tibia and fibula are the two bones of the lower leg. The tibia, being the larger bone, evolved to bear most of the body's weight, while the fibula provides stability and support. Together, they enable complex movements and balance necessary for bipedal locomotion.");
    const tibfibevolbtn = createEvolutionBtn("Tibia and Fibula", tibfibpanel.id);
    
    const radulnpanel = createPanel("radulnpanel", "Radius and Ulna Evolution Information", "radulnclose", "The radius and ulna are the two long bones of the forearm, allowing for complex movements of the wrist and hand. This evolutionary development enabled early vertebrates to perform more precise and varied movements, critical for tasks like climbing, grasping, and manipulating objects. The evolution of the radius and ulna assisted with early vertebrates walking on land.");
    const radulnevbtn = createEvolutionBtn("Radius and Ulna", radulnpanel.id);
    
    const sternumpanel = createPanel("sternumpanel", "Sternum Evolution Information", "sternumclose", "The sternum (breastbone) evolved as part of the rib cage to protect vital organs like the heart and lungs. It serves as an attachment point for ribs and plays a crucial role in the respiratory system by facilitating breathing movements. The evolution of the sternum is hypothesized to be linked with the changes in movement and posture");
    const sternumevbtn = createEvolutionBtn("Sternum", sternumpanel.id);
    
    const scapulapanel = createPanel("scapulapanel", "Scapula Evolution Information", "scapulaclose", "The scapula started as simple cartilage in early fish to help move fins. In amphibians and reptiles, it became a bone. In mammals and birds, it evolved further to support various limb movements and complex shoulder functions.");
    const scapulaevbtn = createEvolutionBtn("Scapula", scapulapanel.id);
    
    const phalangepanel = createPanel("phalangepanel", "Phalange Evolution Information", "phalangeclose", "Phalanges are the bones of the fingers and toes, which evolved to provide dexterity and grip. In primates, elongated phalanges allowed for better manipulation of objects and tool use, essential for survival. This development is a key factor in the evolutionary success of humans.");
    const phalangeevbtn = createEvolutionBtn("Phalange", phalangepanel.id);

    // Create sphere buttons for each bone
    createSphereBtn(0, 7, -0.51, () => {
        createImagePopUp("Skull", "Protects the brain and houses sensory organs like the eyes and ears. Click the button to learn more.", "images/skullpicture.jpg", window.innerWidth * 0.6, window.innerHeight * 0.4, [skullevbtn]);
    });
    
    createSphereBtn(0, 3, 0.8, () => {
        createImagePopUp("Spine", "Provides support and protection for the spinal cord and allows for movement. Click the button to learn more.", "images/spinepicture.png", window.innerWidth * 0.3, window.innerHeight * 0.7, [spineevbtn]);
    });
    
    createSphereBtn(1, -1, -0.2, () => {
        createImagePopUp("Femur", "The thigh bone, which is the longest and strongest bone in the body, supporting body weight and facilitating walking and running.", "images/femur.png", window.innerWidth * 0.2, window.innerHeight * 0.7, [femurevbtn]);
    });
    
    createSphereBtn(0, 0, -0.5, () => {
        createImagePopUp("Pelvis", "Forms the base of the spine and supports the body's weight; also protects internal reproductive organs.", "images/pelvis.png", window.innerWidth * 0.4, window.innerHeight * 0.4, [pelvisevbtn]);
    });
    
    createSphereBtn(-0.5, 3.5, -1, () => {
        createImagePopUp("Ribs", "Protect the vital organs in the chest, such as the heart and lungs.", "images/ribs.png", window.innerWidth * 0.4, window.innerHeight * 0.4, [ribsevbtn]);
    });
    
    createSphereBtn(-1.8, 3, 0.2, () => {
        createImagePopUp("Humerus", "The upper arm bone that connects the shoulder to the elbow and allows for arm movement.", "images/humerus.png", window.innerWidth * 0.4, window.innerHeight * 0.6, [humerusevbtn]);
    });
    
    createSphereBtn(0.8, -4, -0.2, () => {
        createImagePopUp("Tibia and Fibula", "The two bones in the lower leg, with the tibia bearing most of the body's weight and the fibula providing stability.", "images/tibfibpicture.webp", window.innerWidth * 0.5, window.innerHeight * 0.5, [tibfibevolbtn]);
    });
    
    createSphereBtn(-2.5, 1, 0.2, () => {
        createImagePopUp("Radius and Ulna", "The bones of the forearm that allow for forearm rotation and wrist movement.", "images/radiusulnapicture.jpg", window.innerWidth * 0.5, window.innerHeight * 0.5, [radulnevbtn]);
    });
    
    createSphereBtn(0, 3.5, -1, () => {
        createImagePopUp("Sternum (aka Breastbone)", "Protects the heart and lungs and anchors the ribcage.", "images/sternumpicture.jpg", window.innerWidth * 0.4, window.innerHeight * 0.6, [sternumevbtn]);
    });
    
    createSphereBtn(-0.82, 4, 0.8, () => {
        createImagePopUp("Scapula (aka Shoulder Blade)", "Provides attachment for muscles that control shoulder and arm movement.", "images/scapulapicture.jpg", window.innerWidth * 0.4, window.innerHeight * 0.6, [scapulaevbtn]);
    });
    
    createSphereBtn(0.5, -7, -0.9, () => {
        createImagePopUp("Phalange", "Phalanges are the smaller bones that make up the fingers and toes, with each digit typically consisting of three phalanges (proximal, middle, and distal).", "images/handpicture.svg", window.innerWidth * 0.5, window.innerHeight * 0.5, [phalangeevbtn]);
    });
    
    createSphereBtn(-2.8, -0.6, 0.2, () => {
        createImagePopUp("Phalange", "Phalanges are the smaller bones that make up the fingers and toes, with each digit typically consisting of three phalanges (proximal, middle, and distal).", "images/handpicture.svg", window.innerWidth * 0.5, window.innerHeight * 0.5, [phalangeevbtn]);
    });

    document.getElementById('backHuman').style.display = 'block';
}

export function loadskull(val) {
    change(state.m.getChild(), "loadskull(0)");
    if (checkvis(skullbtns[0]) || val == 0) {
        showui();
        title.innerHTML = "Skull"
        importmesh("skull.glb", new BABYLON.Vector3(4.7, 0, 30), new BABYLON.Vector3(0, 0, 0), 23, new BABYLON.Vector3(5, 5, 5));
        camera.upperRadiusLimit = 100;
        clearbtns();
        showbtn(backHuman);
    }
}

export function loadspinalcord(val) {
    change(state.m.getChild(), "loadspinalcord(0)");
    if (checkvis(cordbtns[0]) || val == 0) {
        showui();
        clearbtns();
        clickcond(humanmeshes, cordbtns, 0);
        title.innerHTML = "Spinal Cord"
        clear();
        importmesh("spinalcord1.glb", new BABYLON.Vector3(10, 1, 10), new BABYLON.Vector3(0, 5, 0), 23, new BABYLON.Vector3(0.2, 0.2, 0.2));
        camera.upperRadiusLimit = 100;
        humanmeshes.forEach((el) => {
            el.visibility = 0;
        });
        createSphereBtn(
            -0.4898616709510044,
            -2.6803959776525828,
            -0.09921364781747144,
            cordmeshes,
            function () {
                createBasicPopup("Coccyx", "The coccyx, often referred to as the tailbone, is a small, triangular bony structure at the very base of the vertebral column. Composed of three to five fused vertebrae, the coccyx provides attachment points for various ligaments, tendons, and muscles that support the pelvic floor. Despite its small size, the coccyx plays a critical role in maintaining balance and stability when sitting, as well as during movements involving the lower body.");
            },
            0.4
        );
        clearbtns();
        showbtn(backHuman);
    }
}