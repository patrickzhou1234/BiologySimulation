import { camera } from '../core/babylon-setup.js';
import { change } from '../core/state-utils.js';
import { createSphereBtn, importmesh, clear, clearbtns, createBasicPopup } from '../core/utils.js';
import { state } from '../core/state.js';

export function loadnervous(val) {
    change(state.m.getChild(), "loadnervous(0)");
    showui();
    clearbtns();
    document.getElementById("title").innerHTML = "Nervous System"
    clear();
    importmesh("nervous_system.glb", null, new BABYLON.Vector3(0.05740795922190678,7.15830432454763,0.9948979818070001), null, new BABYLON.Vector3(8, 8, 8));
    createSphereBtn(-0.0847792182819817,13.727592170977577,-0.13707866476222108, function () {
       createBasicPopup("Central Nervous System (CNS)", "The central nervous system (CNS) comprises the brain and spinal cord, serving as the primary control center for processing sensory information, generating thoughts, emotions, and memories, and coordinating voluntary and involuntary actions throughout the body. It interprets incoming data and sends out commands to the peripheral nervous system to execute responses. ", document.querySelectorAll(".spinebtns"));
    });
    createSphereBtn(-2.117950967884778,9.656626590025594,0.807392259406166, function () {
        createBasicPopup("Peripheral Nervous System (PNS)", "The peripheral nervous system (PNS) consists of all the nerves outside the brain and spinal cord, including cranial and spinal nerves, and is responsible for transmitting sensory information to the CNS and carrying out its motor commands. It connects the CNS to muscles, glands, and sensory receptors, facilitating communication between the brain and the body's extremities and organs.");
     });
    showbtn(backHuman);
}

export function loadbrain(val) {
    change(state.m.getChild(), "loadbrain(0)");
    if (checkvis(document.querySelectorAll(".brainbtns")[0]) || val == 0) {
        showui();
        clear();
        document.getElementById("title").innerHTML = "Brain"
        importmesh("limbic_system.glb", new BABYLON.Vector3(-2, 1, -60), new BABYLON.Vector3(-5, 2, -2), 50, new BABYLON.Vector3(0.35, 0.35, 0.35));
        camera.upperRadiusLimit = 100;

        showbtn(document.getElementById("backHuman"));
        showbtn(document.getElementById("exterior"));
        showbtn(document.getElementById("panelbtn"));
        hidebtn(document.getElementById("backcell"));
        showbtn(document.getElementById("neuron"));
    }
}

export function showExteriorBrain() {
    change(state.m.getChild(), "showExteriorBrain()");
    if (document.getElementById("exterior").textContent == "Show Exterior View") {
        document.getElementById("exterior").textContent = "Hide Exterior View";
        document.getElementById("backHuman").setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important; pointer-events: none;");
        document.getElementById("neuron").setAttribute("style", "opacity: 0.6 !important; cursor: not-allowed !important; pointer-events: none;");
        document.getElementById("neuron").textContent = "Show Neuron";
        document.getElementById("title").innerHTML = "Brain (Exterior)"
        clear();
        importmesh("brain.glb", new BABYLON.Vector3(0,0,0), new BABYLON.Vector3(4.71217963126949, -0.8773744950316118, -1.0694323161220023), 50, new BABYLON.Vector3(175, 175, 175));
        camera.upperRadiusLimit = 100;

        createSphereBtn(9.783295435504865, -10.973468433087497, -0.7949386939274561, function () {
            createBasicPopup("Medulla", "Your medulla oblongata is the bottom-most part of your brain. It's where the spinal cord and brain merge, making it a key conduit for nerve signals to and from your body. It's main function is to control vital processes like your heartbeat, breathing and blood pressure. ");
        }, 2.5);

        createSphereBtn(8.43870385928456, -7.669021724662432, -3.3618906969331945, function () {
            createBasicPopup("Pons", "The pons connects your brainstem with the cerebral cortex, and controls movement and sleep. ");
        }, 2.5);

        createSphereBtn(5.881520530349253, -2.389640943659913, -3.7078067365543674, function () {
            createBasicPopup("Thalamus", "Your thalamus is an egg-shaped structure in the middle of your brain. It's known as a relay station of all incoming motor (movement) and sensory information — hearing, taste, sight and touch (but not smell) — from your body to your brain. ");
        }, 2.5);

        createSphereBtn(13, -7, 5, function () {
            createBasicPopup("Cerebellum", "The cerebellum (meaning 'little brain') is a brain shaped structures hanging in the back of the brain. It plays a role in motor movement regulation and balance control. The cerebellum coordinates movement and maintains posture, controls muscle tone and voluntary muscle activity but is unable to initiate muscle contraction. ");
        }, 2.5);

        createSphereBtn(-3.5737458068703276, 9.243767774489436, -11.965853805506342, function () {
            createBasicPopup("Frontal Lobe", "The frontal lobe, located at the front of the cerebral cortex, plays roles in various higher-level cognitive functions and personality traits. It is responsible for functions such as decision-making, problem-solving, planning, and concsious thought. The frontal lobe also houses the primary motor cortex, which controls voluntary movements throughout the body. ");
        }, 2.5);

        createSphereBtn(-3.1009753080826954, -2.0810282693562208, 3.43813110274354, function () {
            createBasicPopup("Temporal Lobe", "The temporal lobes are found on both sides of the brain. They serve to help you hear and process auditory information. Part of them is an area called Wernicke's Area, which plays critical roles in comprehending speech.");
        }, 2.5);

        createSphereBtn(11.218426505672202, 13.035765656995679, -0.6575950891862092, function () {
            createBasicPopup("Parietal Lobe", "The parietal lobe plays roles in processing sensory info such as touch, pressure, heat, cold, and pain. The parietal lobes are also involved in the perception of body awareness and the construction of a spatial coordinate system (mental map) to represent the world around us.");
        }, 2.5);

        createSphereBtn(13.991150944003131, 1.2128620511509567, 11.584530010406212, function () {
            createBasicPopup("Occipital Lobe", "The occipital lobe is a part of the brain responsible for processing visual information. On its outer surface, there are raised areas called gyri and grooves called sulci. The sides of the occipital lobe have three specific sulci that help define its shape. Inside, on the middle surface, there's a distinct calcarine sulcus, which divides it into the cuneus and lingual regions. The upper and lower parts of the calcarine sulcus contain the primary visual cortex, which is where we process what we see. This cortex gets information from our eyes and helps us understand things like shapes, colors, and distances. The occipital lobe's main job is to help us understand and recognize what we see. There are different areas in this lobe, like the primary visual cortex, which receives information directly from our eyes, and secondary visual cortex areas that work with this information to help us recognize objects and understand where they are. The occipital lobe also sends information to other parts of the brain c two pathways: the dorsal stream for recognizing where objects are and the ventral stream for recognizing what objects are.");
        }, 2.5);
    }
    else {
        document.getElementById("exterior").textContent = "Show Exterior View";
        loadbrain(0);
    }
}

export function loadneuron() {
    clear();
    clearbtns();
    document.getElementById('title').innerHTML = "Neuron";
    importmesh("neuron.glb", new BABYLON.Vector3(10, 0, 120), new BABYLON.Vector3(-30, -5, 0), 100, new BABYLON.Vector3(0.01, 0.01, 0.01));
    camera.upperRadiusLimit = 100;
    
    createSphereBtn(-30, -5, 0, function () {
        camera.lowerRadiusLimit = 2;
        createBasicPopup("Axon", "The axon is a projection that extends from the cell body (soma), and electrical signals called action potentials travel down it. Once action potentials reach the end of the axon, to endings called axon terminals, neurotransmitters (chemical messengers) are released into the synapse. The neurotransmitters released by the axon are received by dendrites of adjacent neurons, and the action potential cycle continues again.");
    }, 3);
    
    createSphereBtn(0, 2, 0, function () {
        camera.lowerRadiusLimit = 2;
        createBasicPopup("Axon Terminal", "Towards their ends, axons branch out into several smaller branches known as axon terminals. Each axon terminal contains small structures called synaptic vesicles. These vesicles are like tiny pods that store and release neurotransmitters, which are chemical messengers that transmit signals between the axon of one neuron and the dendrite of another, when stimulated by action potentials traveling down the axon.");
    }, 3);
    
    createSphereBtn(-60, -15, 10, function () {
        camera.lowerRadiusLimit = 2;
        createBasicPopup("Dendrite", "Dendrites are branch-like structures that extend from the soma (cell body). Their primary function is to receive signals in the form of neurotransmitters from the axons of neighboring neurons. These signals are then transmitted electrically across to the soma, where they are processed, and then further down into the axon.");
    }, 3);
    
    createSphereBtn(-10, 1, 0, function () {
        camera.lowerRadiusLimit = 2;
        createBasicPopup("Myelin Sheath", "The axons of neurons are covered by a protective layer called the myelin sheath, which consists of a thick coating of fatty substance called myelin. This myelin sheath acts as an insulator, which enhances the speed at which signals travel along the axon.");
    }, 3);
    
    createSphereBtn(-23, -2, 0, function () {
        camera.lowerRadiusLimit = 2;
        Swal.fire({
            title: "Node of Ranvier",
            text: "The myelin sheath does not cover the entire length of the axon. Instead, it has periodic gaps along the myelinated axon where the myelin is absent, and these gaps are called Nodes of Ranvier. These nodes are important for the transmission of action potentials. They serve as points along the axon where the electrical signals are regenerated, which in terms allows for more efficient conduction of nerve impulses. ",
            icon: "question",
            background: "black",
            color: "white",
            backdrop: false,
        }).then(function () {});
    }, 2);
    
    createSphereBtn(15, 0, 0, function () {
        camera.lowerRadiusLimit = 2;
        createBasicPopup("Synapse", "The synapse is the small junction between the axon terminal of one neuron and the dendrites of another neuron. It is a crucial site where communication between neurons takes place. The communication occurs when an action potential reaches the axon terminal of one neuron, triggering the release of neurotransmitters from the synaptic vesicles into the synapse. The neurotransmitters would then travel across the synapse and bind to the specific receptors on the receiving neuron, allowing the transmission of the signal from one neuron to the next.");
    }, 4);
    
    createSphereBtn(-65, -15, 0, function () {
        camera.lowerRadiusLimit = 2;
        createBasicPopup("Soma", "The soma is essentially the cell body of the neuron. It houses the nucleus and various organelles that are crucial for the normal functioning of the neuron. Signals received by the dendrites are directed to the soma where they are processed and then sent further down to the axon.");
    }, 3);
    
    document.getElementById('backHuman').style.display = 'block';
}

export function loadspine() {
    clear();
    clearbtns();
    document.getElementById('title').innerHTML = "Spinal Cord";
    importmesh("nervoussystem.glb", new BABYLON.Vector3(10, 1, 10), new BABYLON.Vector3(0, 5, 0), null, new BABYLON.Vector3(0.13, 0.13, 0.13));
    camera.upperRadiusLimit = 100;
    
    createSphereBtn(0, 7.5, 2.5, () => createBasicPopup("Brain","The brain is the central organ of the nervous system. It is a highly complex organ that is responsible for controlling and regulating all bodily functions, including movement, sensation, thought, memory, and emotion.", document.querySelectorAll(".brainbtns")), 0.7);
    createSphereBtn(-0.36, 2.21, 0.51, () => createBasicPopup("Spinal Cord","The pathway for nerve impulses to travel from the brain to the body and vice versa.", document.querySelectorAll(".spinebtns")), 0.7);
    
    document.getElementById('backHuman').style.display = 'block';
}