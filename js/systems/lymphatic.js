import { change } from '../core/state-utils.js';
import { clickcond, importmesh, clear, clearbtns, showui, createSphereBtn, createBasicPopup } from '../core/utils.js';

const LYMPHATIC_BUTTON_IDS = ["spleenbtn"]; // Placeholder

export function loadlymphatic() {
    change("loadlymphatic(0)");

    const lymphaticButton = document.getElementById("lymphatic");
    if (lymphaticButton?.style.display !== 'none') {
        clear();
        clearbtns();

        document.getElementById("title").innerHTML = "Lymphatic System";
        importmesh("lymphatic_system.glb", new BABYLON.Vector3(0, 0.5, 80), new BABYLON.Vector3(0, 0, -8), 23, new BABYLON.Vector3(0.01, 0.01, 0.01));
        
        // Create sphere buttons for each lymphatic component with exact coordinates from script.js
        createSphereBtn(0.7830194453121005, 3.544277965793885, -7.439955816834036, () => {
            createBasicPopup("Spleen", "Lymphatic vessels (shown in green here) are a crucial component of the lymphatic system, responsible for transporting lymph, a clear fluid containing white blood cells, throughout the body. They play a vital role in maintaining fluid balance, filtering out harmful substances, and supporting the immune system by facilitating the movement of immune cells to sites of infection and inflammation. The lymph nodes, which are the rounded structures, serve as filtration hubs for lymph fluid.  They trap and destroy harmful pathogens, foreign particles, and cancer cells, while also housing immune cells such as lymphocytes and macrophages, which coordinate the body's immune response to infections and diseases. ");
        }, 0.4);
        
        createSphereBtn(0.2521704550731494, 4.918606436122572, -6.90876421115608, () => {
            createBasicPopup("Lymph Node", "Lymph nodes are small, bean-shaped structures that are part of the lymphatic system, playing a crucial role in the immune response. They filter lymph fluid to trap and destroy harmful substances like bacteria, viruses, and cellular debris, while housing immune cells like lymphocytes that fight infection. Strategically located throughout the body, lymph nodes swell during infection as they work to combat pathogens. ");
        }, 0.4);
        
        createSphereBtn(-0.006699910640601381, 5.330263803744348, -6.248526009523893, () => {
            createBasicPopup("Thymus", "The thymus is a primary lymphoid organ located in the chest that plays a critical role in the development and maturation of T-cells, a type of immune cell essential for adaptive immunity. It is most active during childhood and gradually shrinks with age, as the immune system becomes established. The thymus ensures that T-cells can distinguish between the body's own cells and foreign invaders. ");
        }, 0.4);
        
        createSphereBtn(-0.41456337485081596, 6.449239069241051, -6.215651524259993, () => {
            createBasicPopup("Tonsils", "The tonsils are lymphoid tissues located in the throat that act as the first line of defense in the immune system. They trap and analyze pathogens entering through the mouth or nose, initiating immune responses by activating lymphocytes. Tonsils contribute to protecting the respiratory and digestive tracts from infections. ");
        }, 0.4);
        
        createSphereBtn(-0.5266987655277928, 0.3880124283341502, -6.520158817166713, () => {
            createBasicPopup("Peyer's Patches", "Peyer's patches are specialized clusters of lymphoid tissue located in the walls of the small intestine. They monitor gut contents for harmful microorganisms and activate immune responses to maintain intestinal health. These patches play an important role in distinguishing between beneficial and harmful microbes in the gastrointestinal tract.");
        }, 0.4);
        
        createSphereBtn(-2.363506068828399, 1.9300334174393425, -6.519252118903179, () => {
            createBasicPopup("Bone Marrow", "Bone marrow is a spongy tissue found within certain bones that serves as the primary site for the production of blood cells, including immune cells like B-cells and T-cell precursors. It plays a foundational role in the lymphatic system by generating cells critical for both innate and adaptive immunity. B-cells mature in the bone marrow before entering circulation to fight infections. ");
        }, 0.4);

        document.getElementById('backHuman').style.display = 'block';
    }
}

export function loadspleen() {
    change("loadspleen(0)");
    clear();
    clearbtns();

    document.getElementById("title").innerHTML = "Spleen";
    importmesh("spleen.glb", new BABYLON.Vector3(80, 0.5, 80), new BABYLON.Vector3(0, 9, 0), 23, new BABYLON.Vector3(10, 10, 10));

    document.getElementById('backHuman').style.display = 'block';
} 