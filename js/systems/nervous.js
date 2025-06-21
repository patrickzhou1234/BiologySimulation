import { camera } from '../core/babylon-setup.js';
import { change } from '../core/state-utils.js';
import { createSphereBtn, importmesh, clear, clearbtns, createBasicPopup } from '../core/utils.js';
import { state } from '../core/state.js';

export function loadnervous(val = 1) {
    change(state.m.getChild(), "loadnervous(0)");
    clear();
    clearbtns();
    document.getElementById('title').innerHTML = "Nervous System";
    importmesh("nervous_system.glb", null, new BABYLON.Vector3(0.05, 7.15, 0.99), null, new BABYLON.Vector3(8, 8, 8));

    createSphereBtn(new BABYLON.Vector3(-0.08,13.72,-0.13), () => {
       createBasicPopup("Central Nervous System (CNS)", "The central nervous system (CNS) comprises the brain and spinal cord, serving as the primary control center for processing sensory information, generating thoughts, emotions, and memories, and coordinating voluntary and involuntary actions throughout the body. It interprets incoming data and sends out commands to the peripheral nervous system to execute responses. ", document.querySelectorAll(".spinebtns"));
    });
    createSphereBtn(new BABYLON.Vector3(-2.11,9.65,0.80), () => {
        createBasicPopup("Peripheral Nervous System (PNS)", "The peripheral nervous system (PNS) consists of all the nerves outside the brain and spinal cord, including cranial and spinal nerves, and is responsible for transmitting sensory information to the CNS and carrying out its motor commands. It connects the CNS to muscles, glands, and sensory receptors, facilitating communication between the brain and the body's extremities and organs.");
    });
    document.getElementById('backHuman').style.display = 'block';
}

export function loadbrain(val = 1) {
    change(state.m.getChild(), "loadbrain(0)");
    clear();
    clearbtns();
    
    document.getElementById('showNeuron').textContent = "Show Neuron";
    document.getElementById('title').innerHTML = "Brain";
    importmesh("limbic_system.glb", new BABYLON.Vector3(-2, 1, -60), new BABYLON.Vector3(-5, 2, -2), 50, new BABYLON.Vector3(0.35, 0.35, 0.35));
    camera.upperRadiusLimit = 100;

    document.getElementById('backHuman').style.display = 'block';
    document.getElementById('showExterior').style.display = 'block';
    document.getElementById('panelbtn').style.display = 'block';
    document.getElementById('showNeuron').style.display = 'block';
}

export function showExteriorBrain() {
    change(state.m.getChild(), "showExteriorBrain()");
    const showExteriorBtn = document.getElementById('showExterior');
    
    if (showExteriorBtn.textContent === "Show Exterior View") {
        showExteriorBtn.textContent = "Hide Exterior View";
        document.getElementById('backHuman').style.opacity = '0.6';
        document.getElementById('backHuman').style.cursor = 'not-allowed';
        document.getElementById('backHuman').style.pointerEvents = 'none';
        document.getElementById('showNeuron').style.opacity = '0.6';
        document.getElementById('showNeuron').style.cursor = 'not-allowed';
        document.getElementById('showNeuron').style.pointerEvents = 'none';
        
        document.getElementById('title').innerHTML = "Brain (Exterior)";
        importmesh("brain.glb", new BABYLON.Vector3(0,0,0), new BABYLON.Vector3(4.71, -0.87, -1.06), 50, new BABYLON.Vector3(175, 175, 175));
        camera.upperRadiusLimit = 100;

        createSphereBtn(new BABYLON.Vector3(9.78, -10.97, -0.79), () => createBasicPopup("Medulla", "Your medulla oblongata is the bottom-most part of your brain. It's where the spinal cord and brain merge, making it a key conduit for nerve signals to and from your body. It's main function is to control vital processes like your heartbeat, breathing and blood pressure. "), 2.5);
        createSphereBtn(new BABYLON.Vector3(8.43, -7.66, -3.36), () => createBasicPopup("Pons", "The pons connects your brainstem with the cerebral cortex, and controls movement and sleep. "), 2.5);
        createSphereBtn(new BABYLON.Vector3(5.88, -2.38, -3.70), () => createBasicPopup("Thalamus", "Your thalamus is an egg-shaped structure in the middle of your brain. It's known as a relay station of all incoming motor (movement) and sensory information — hearing, taste, sight and touch (but not smell) — from your body to your brain. "), 2.5);
        createSphereBtn(new BABYLON.Vector3(13, -7, 5), () => createBasicPopup("Cerebellum", "The cerebellum (meaning 'little brain') is a brain shaped structures hanging in the back of the brain. It plays a role in motor movement regulation and balance control. The cerebellum coordinates movement and maintains posture, controls muscle tone and voluntary muscle activity but is unable to initiate muscle contraction. "), 2.5);
        createSphereBtn(new BABYLON.Vector3(-3.57, 9.24, -11.96), () => createBasicPopup("Frontal Lobe", "The frontal lobe, located at the front of the cerebral cortex, plays roles in various higher-level cognitive functions and personality traits. It is responsible for functions such as decision-making, problem-solving, planning, and concsious thought. The frontal lobe also houses the primary motor cortex, which controls voluntary movements throughout the body. "), 2.5);
        createSphereBtn(new BABYLON.Vector3(-3.10, -2.08, 3.43), () => createBasicPopup("Temporal Lobe", "The temporal lobes are found on both sides of the brain. They serve to help you hear and process auditory information. Part of them is an area called Wernicke's Area, which plays critical roles in comprehending speech."), 2.5);
        createSphereBtn(new BABYLON.Vector3(11.21, 13.03, -0.65), () => createBasicPopup("Parietal Lobe", "The parietal lobe plays roles in processing sensory info such as touch, pressure, heat, cold, and pain. The parietal lobes are also involved in the perception of body awareness and the construction of a spatial coordinate system (mental map) to represent the world around us."), 2.5);
        createSphereBtn(new BABYLON.Vector3(13.99, 1.21, 11.58), () => createBasicPopup("Occipital Lobe", "The occipital lobe is a part of the brain responsible for processing visual information. On its outer surface, there are raised areas called gyri and grooves called sulci. The sides of the occipital lobe have three specific sulci that help define its shape. Inside, on the middle surface, there's a distinct calcarine sulcus, which divides it into the cuneus and lingual regions. The upper and lower parts of the calcarine sulcus contain the primary visual cortex, which is where we process what we see. This cortex gets information from our eyes and helps us understand things like shapes, colors, and distances. The occipital lobe's main job is to help us understand and recognize what we see. There are different areas in this lobe, like the primary visual cortex, which receives information directly from our eyes, and secondary visual cortex areas that work with this information to help us recognize objects and understand where they are. The occipital lobe also sends information to other parts of the brain c two pathways: the dorsal stream for recognizing where objects are and the ventral stream for recognizing what objects are."), 2.5);

    }
}

export function loadneuron() {
    change(state.m.getChild(), "loadneuron()");
    const showNeuronBtn = document.getElementById('showNeuron');

    if (showNeuronBtn.textContent === "Show Neuron") {
        showNeuronBtn.textContent = "Hide Neuron";
        clear();
        clearbtns();
        document.getElementById('showNeuron').style.display = 'block';
        document.getElementById('title').innerHTML = "Neuron";
        importmesh("neuron.glb", new BABYLON.Vector3(10, 0, 120), new BABYLON.Vector3(-30, -5, 0), 100, new BABYLON.Vector3(0.01, 0.01, 0.01));
        camera.upperRadiusLimit = 100;
        
        createSphereBtn(new BABYLON.Vector3(-51, -5, -20), () => createBasicPopup("Axon", "The axon is a long, slender projection of a nerve cell that conducts electrical impulses away from the neuron's cell body."), 2.5);
        createSphereBtn(new BABYLON.Vector3(-12, -4, 25), () => createBasicPopup("Dendrite", "Dendrites are branched protoplasmic extensions of a nerve cell that propagate the electrochemical stimulation received from other neural cells to the cell body."), 2.5);
        createSphereBtn(new BABYLON.Vector3(-30, -5, 0), () => createBasicPopup("Soma", "The soma, or cell body, is the spherical part of the neuron that contains the nucleus."), 2.5);
        createSphereBtn(new BABYLON.Vector3(-30, 0, -20), () => createBasicPopup("Myelin Sheath", "The myelin sheath is a fatty white substance that surrounds the axon of some nerve cells, forming an electrically insulating layer. It is essential for the proper functioning of the nervous system."), 2.5);
        createSphereBtn(new BABYLON.Vector3(-35, -15, -20), () => createBasicPopup("Schwann Cell", "Schwann cells are a variety of glial cells that keep peripheral nerve fibres (both myelinated and unmyelinated) alive."), 2.5);
        createSphereBtn(new BABYLON.Vector3(-32, -8, -25), () => createBasicPopup("Node of Ranvier", "Nodes of Ranvier are microscopic gaps found within myelinated axons. Their function is to speed up propagation of action potentials along the axon."), 2.5);
        createSphereBtn(new BABYLON.Vector3(-20, -5, 20), () => createBasicPopup("Nucleus", "The nucleus is a membrane-bound organelle that contains the cell's chromosomes. The nucleus regulates the cell's growth, metabolism, and reproduction."), 2.5);
        createSphereBtn(new BABYLON.Vector3(-80, -5, -15), () => createBasicPopup("Axon Terminal", "The axon terminal is the very end of a branch of a nerve's axon, a long slender nerve fiber that conducts electrical signals to a nerve synapse."), 2.5);
    } else {
        showNeuronBtn.textContent = "Show Neuron";
        loadbrain(0); // Go back to brain view
    }
}

export function loadspine(val = 1) {
    change(state.m.getChild(), "loadspine(0)");
    if(val === 2){
        clear();
        clearbtns();
    }
    document.getElementById('title').innerHTML = "Nervous System";
    importmesh("nervoussystem.glb", new BABYLON.Vector3(10, 1, 10), new BABYLON.Vector3(0, 5, 0), null, new BABYLON.Vector3(0.13, 0.13, 0.13));
    
    createSphereBtn(new BABYLON.Vector3(0,7.5,2.5), () => createBasicPopup("Brain","The brain is the central organ of the nervous system. It is a highly complex organ that is responsible for controlling and regulating all vital body functions, as well as intelligence, consciousness, processing information, memories, thoughts, and much more. The brain is made up of billions of neurons, and billions of other supporting cells like glial cells. It is subdivided into many parts, each specialized to control specific tasks. For example, the brainstem controls vital functions, the hippocampus functions in long term memory, and the amygdala is a major center for processing emotions.", document.querySelectorAll(".brainbtns")), 0.5);
    createSphereBtn(new BABYLON.Vector3(-0.36,2.21,0.51), () => createBasicPopup("Spinal Cord","The pathway for nerve impulses to travel from the brain to the body and vice versa.", document.querySelectorAll(".spinebtns")), 0.5);
    clearbtns();
    document.getElementById('backHuman').style.display = 'block';
}

export function loadspinalcord(val = 1) {
    change(state.m.getChild(), "loadspinalcord(0)");
    clear();
    clearbtns();
    document.getElementById('title').innerHTML = "Spinal Cord";
    importmesh("spinalcord1.glb", new BABYLON.Vector3(10, 1, 10), new BABYLON.Vector3(0, 5, 0), 23, new BABYLON.Vector3(0.2, 0.2, 0.2));
    camera.upperRadiusLimit = 100;
    
    createSphereBtn(new BABYLON.Vector3(-0.48,-2.68,-0.09), () => { createBasicPopup("Coccyx", "The coccyx, often referred to as the tailbone, is a small, triangular bony structure at the very base of the vertebral column. Composed of three to five fused vertebrae, the coccyx provides attachment points for various ligaments, tendons, and muscles that support the pelvic floor. Despite its small size, the coccyx plays a critical role in maintaining balance and stability when sitting, as well as during movements involving the lower body.");}, 0.4);
    
    clearbtns();
    document.getElementById('backHuman').style.display = 'block';
} 