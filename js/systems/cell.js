import { camera } from '../core/babylon-setup.js';
import { change } from '../core/state-utils.js';
import { createSphereBtn, importmesh, clear, clearbtns, createBasicPopup } from '../core/utils.js';
import { state } from '../core/state.js';

function cellSpheres() {
    createSphereBtn(new BABYLON.Vector3(0, 0, 3.8), () => {
        Swal.fire({
            title: "Cell Membrane",
            text: "The cell membrane is composed primarily of a phospholipid bilayer, with other molecules such as proteins and cholesterol embedded. Phospholipids have 2 unsaturated fatty acid tails and one head. The phospholipid head is hydrophilic (it's attracted to water) and the 2 unsaturated fatty acid tails are hydrophobic (they repel water). The phospholipid bilayer has many kinks and bends in it. This allows the inside of the membrane to be fluid, meaning it can get more or less solid depending on outside conditions, such as temperature. This characteristic is mainly due to the cholesterol embedded. The many proteins in the membrane have a vast array of uses, some including being used for transport, attachment, and signaling.",
            background: "black",
            color: "white",
            imageUrl: "images/cellmembrane.png",
            imageWidth: window.innerWidth * 0.5,
            imageHeight: window.innerHeight * 0.5,
            footer: "Click on a button to learn more about a feature of the cell membrane (Hover over a button to see what feature it will show)",
            width: window.innerWidth * 0.8,
            backdrop: false,
        }).then(function () {
            document.querySelectorAll(".smlbtns").forEach(el => el.style.display = 'none');
        });
        document.querySelectorAll(".smlbtns").forEach(el => el.style.display = 'block');
    });
    createSphereBtn(new BABYLON.Vector3(0.4, 0.2, 3.3), () => {
        createBasicPopup("Cell Mitochondria", "The mitochondria, aka the 'powerhouse of the cell', is a very important organelle that primarily functions in generating energy in the form of ATP for cellular processes through cellular respiration. The anatomy of a mitochondrion is designed to maximize energy production. The inner and outer membranes increase surface area and provide a place for energy production to happen.", document.querySelectorAll(".mitosmlbtns"));
    });
    createSphereBtn(new BABYLON.Vector3(0.3, 0.2, 0), () => {
        createBasicPopup("Cell Nucleus", "The nucleus serves as the control center of the cell, and is where genetic information is stored. The DNA is enclosed in a protective structure called the nuclear envelope. This is a double membrane made up of a phospholipid bilayer, much like that of the cell membrane. Holes in the envelope, called nuclear pores, regulate what goes in and out of the nucleus. The interior of the nucleus, also called the nucleoplasm, contains the genetic material of the cell. In humans, there are 23 pairs of chromosomes, and the nucleus is where processes such as DNA replication and transcription happen. The nucleolus is a condensed region inside the nucleus, and it is the location of assembly of ribosomes (rRNA), which exit the nucleus for use in protein synthesis.");
    });
    createSphereBtn(new BABYLON.Vector3(-1.3, 0.2, 1.7), () => {
        createBasicPopup("Cell Golgi", 'The Golgi apparatus, aka the Golgi body, is an organelle composed of a series of small, flat sacs stacked in the cell\'s cytoplasm. The function of the Golgi apparatus is to sort out and package protein and lipid molecules synthesized by the ER or free-floating ribosomes for intercellular use or transport out of the cell. Additionally, the Golgi can add "tags" to molecules, making them more structurally stable. It can sometimes also locate where the tagged structure goes.', document.querySelectorAll(".golgismlbtns"));
    });
    createSphereBtn(new BABYLON.Vector3(0.48, 0.07, 2.11), () => {
        document.getElementById("ribopanelbtn").style.display = 'block';
        Swal.fire({
            title: "Ribosome",
            text: "Ribosomes, complexes made of ribosomal RNA (rRNA) and protein, carry out protein synthesis in cells. They are made up of a larger top subunit and a smaller bottom subunit. These both interact with mRNA and tRNA molecules to perform translation. High rates of protein synthesis are associated with an abundance of ribosomes. Ribosomes function in two cytoplasmic locations: free ribosomes in the cytosol and bound ribosomes attached to the rough endoplasmic reticulum or nuclear envelope. Both bound and free ribosomes are structurally identical and can switch roles. Free ribosomes produce proteins for the cytosol, such as enzymes catalyzing sugar breakdown, while bound ribosomes create proteins for membrane insertion, packaging within organelles, or cell export, common in cells specialized in protein secretion, like the pancreas cells that secrete digestive enzymes.",
            icon: "question",
            background: "black",
            color: "white",
            backdrop: false,
        }).then(function () {
            if (!document.getElementById("ribopanel").classList.contains("cd-panel--is-visible")) {
                document.getElementById("ribopanelbtn").style.display = 'none';
            }
        });
    }, 0.15);
    createSphereBtn(new BABYLON.Vector3(1.8, 0.2, -0.5), () => {
        createBasicPopup("Rough Endoplasmic Reticulum", "The Rough ER, studded with ribosomes, plays a role in synthesizing and secreting proteins. It also acts as a membrane factory, growing by incorporating proteins and phospholipids and transporting them via vesicles to other parts of the cell.", document.querySelectorAll(".roughersmlbtns"));
    });
    createSphereBtn(new BABYLON.Vector3(1.22, 0.16, 1.86), () => {
        createBasicPopup("Smooth Endoplasmic Reticulum", "(add description here)", document.querySelectorAll(".smoothersmlbtns"));
    });
    createSphereBtn(new BABYLON.Vector3(0.35, 0.43, -0.32), () => {
        createBasicPopup("Nucleolus", "The nucleolus is a condensed region inside the nucleus, and it is the location of assembly of ribosomes (rRNA), which exit the nucleus for use in protein synthesis. ", document.querySelectorAll(".dnabtns"));
    });
    createSphereBtn(new BABYLON.Vector3(1.19, 0.15, 2.49), () => {
        createBasicPopup("Centrioles", "Centrioles are essential for cell division, aiding in the organization of microtubules during mitosis and meiosis. They also contribute to the formation of cilia and flagella, crucial for cell movement and sensory functions. ");
    });
}

export function loadcell() {
    clearbtns();
    document.getElementById("backHuman").style.display = 'block';
    change(state.m.getChild(), "loadcell()");
    state.meshes.forEach(mesh => mesh.visibility = 1);
    // This assumes human meshes will be identified or tagged appropriately in the future
    // For now, it won't break anything.
    document.querySelectorAll(".human-mesh").forEach(mesh => mesh.visibility = 0);
    camera.lowerRadiusLimit = 2;
    clear();
    Swal.close();
    importmesh("ribosoma.glb", null, null, null, new BABYLON.Vector3(0.4855579893367401, -0.19247690443455667, 2.106724807070549));
    document.getElementById("title").innerHTML = "Cell";
    importmesh("animal_cell.glb", new BABYLON.Vector3(-10, 100, 5), new BABYLON.Vector3(0, 0, 0), 5);
    cellSpheres();
}

export function membraneclicked() {
    clear();
    importmesh("cell_membrane.glb", new BABYLON.Vector3(0, 0, 0));
    document.getElementById("title").innerHTML = "Cell Membrane";
    document.getElementById('backHuman').style.display = 'none';
    document.getElementById('backcell').style.display = 'block';
}

export function phosphoclicked() {
    clear();
    importmesh("phospho_sama.glb", new BABYLON.Vector3(0, 0, 0));
    document.getElementById("title").innerHTML = "Phospholipid";
    document.getElementById('backHuman').style.display = 'none';
    document.getElementById('backcell').style.display = 'block';
}

export function phosphoclicked2() {
    document.getElementById("swal2-html-container").innerHTML = "<ul>Selective permeability</ul><ul>Passive transport</ul><ul>Active transport</ul><ul>Facilitated transport</ul>";
    clear();
    importmesh("phospholipid.glb", new BABYLON.Vector3(0, 0, 0), null, null, new BABYLON.Vector3(0.01, 0.01, 0.01));
    document.getElementById("title").innerHTML = "2 Phospholipids";
    document.getElementById('backHuman').style.display = 'none';
    document.getElementById('backcell').style.display = 'block';
}

export function openchannel() {
    clear();
    importmesh("openchannel.glb", new BABYLON.Vector3(0, 0, 0));
    document.getElementById("title").innerHTML = "Open Channel";
    document.getElementById('backHuman').style.display = 'none';
    document.getElementById('backcell').style.display = 'block';
}

export function cholestrolclicked() {
    clear();
    importmesh("Cholestoral.glb", new BABYLON.Vector3(0, 0, 0));
    document.getElementById("title").innerHTML = "Cholesterol";
    document.getElementById('backHuman').style.display = 'none';
    document.getElementById('backcell').style.display = 'block';
}

export function receptorproteinclicked() {
    Swal.fire({
        html: '<img class="receptorgifs" src="images/ReceptorProteins/antiporter.gif"></img><img class="receptorgifs" src="images/ReceptorProteins/gated_channel.gif"></img><img class="receptorgifs" src="images/ReceptorProteins/open_channel.gif"></img><br><img class="receptorgifs" src="images/ReceptorProteins/symporter.gif"></img><img class="receptorgifs" src="images/ReceptorProteins/transport_rhodopsin.gif"></img><img class="receptorgifs" src="images/ReceptorProteins/uniporter.gif"></img><p style="text-align:left;">Antiporter: An antiporter is a protein that helps move two different substances across a cell membrane in opposite directions. It is crucial for maintaining things like ion balance and pH levels inside cells. <br><br> Gated Channel: A gated channel is a protein in the cell membrane that can open or close in response to certain signals, like voltage changes or molecule binding. This controls the flow of ions in and out of cells. <br><br> Symporter: A symporter is a protein that transports two molecules or ions across the membrane in the same direction. One substance often moves with its concentration gradient, helping to push the other across. <br><br> Transport Rhodopsin: Transport rhodopsin is a special light-sensitive protein found in some bacteria. When it absorbs light, it helps move ions like protons across the membrane, playing a role similar to ion pumps but activated by light. <br><br> Uniporter: A uniporter is a protein that allows one molecule or ion to passively move across the cell membrane. It only works with one type of substance at a time, usually flowing down its concentration gradient without using energy.</p>',
        backdrop: false,
        background: "black",
        color: "white",
        title: "Receptor Proteins",
        width: window.innerWidth * 0.8,
    });
}

export function loadmitochondria() {
    clear();
    importmesh("mitocondrias.glb", new BABYLON.Vector3(0, 0, 0), null, null, new BABYLON.Vector3(5, 5, 5));
    document.getElementById("title").innerHTML = "Mitochondria";
    document.getElementById('backcell').style.display = 'block';
    const showETCBtn = document.getElementById('showETC');
    showETCBtn.style.display = 'block';
    showETCBtn.textContent = "Show Electron Transport Chain";
}

export function loadETC() {
    const showETCBtn = document.getElementById('showETC');
    if (showETCBtn.textContent === "Show Electron Transport Chain") {
        change("loadETC()");
        showETCBtn.textContent = "Hide Electron Transport Chain";
        clear();
        clearbtns();
        importmesh("etc.glb", new BABYLON.Vector3(0,0,0), new BABYLON.Vector3(2.2716116774026744,2.9540898105264355,-15.497743901108434), null, new BABYLON.Vector3(5, 5, 5));
        document.getElementById('backcell').style.display = 'block';
        document.getElementById("title").innerHTML = "Electron Transport Chain";
    } else {
        loadmitochondria(); 
    }
}

export function loadgolgi() {
    clear();
    importmesh("golgi.glb", new BABYLON.Vector3(0, 50, 0), new BABYLON.Vector3(0, 0, 0), null, new BABYLON.Vector3(5, 5, 5));
    document.getElementById("title").innerHTML = "Golgi";
    document.getElementById('backcell').style.display = 'block';
}

export function loadrougher() {
    clear();
    importmesh("rough_er.glb", new BABYLON.Vector3(0, 0, 0), null, null, new BABYLON.Vector3(20, 20, 20));
    document.getElementById("title").innerHTML = "Rough Endoplasmic Reticulum";
    document.getElementById('backcell').style.display = 'block';
}

export function loadsmoother() {
    clear();
    importmesh("smooth_er.glb", new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 0, 0), null, new BABYLON.Vector3(0.01, 0.01, 0.01), new BABYLON.Vector3(0, 0, 0.5));
    document.getElementById("title").innerHTML = "Smooth Endoplasmic Reticulum";
    document.getElementById('backcell').style.display = 'block';
}

export function loaddna() {
    clear();
    importmesh("dna.glb", new BABYLON.Vector3(2.4089047395701412,-3,250), new BABYLON.Vector3(36,236.14133640561624,-22.866524279775604), null, new BABYLON.Vector3(0.1, 0.1, 0.1));
    document.getElementById("title").innerHTML = "DNA";
    document.getElementById('backcell').style.display = 'block';
} 