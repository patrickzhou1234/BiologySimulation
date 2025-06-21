import { camera } from '../core/babylon-setup.js';
import { change } from '../core/state-utils.js';
import { createSphereBtn, importmesh, clear, clearbtns, createBasicPopup } from '../core/utils.js';
import { state } from '../core/state.js';

export function loaddigestive() {
    clear();
    clearbtns();
    change(state.getChild(), "loaddigestive(0)");
    document.getElementById('title').innerHTML = "Digestive System";
    importmesh("digestive_system1.glb", new BABYLON.Vector3(4.7, 15.25, -127), new BABYLON.Vector3(0, 9, 0), 23, new BABYLON.Vector3(0.25, 0.25, 0.25));
    
    // Create sphere buttons for each digestive organ with exact coordinates from script.js
    createSphereBtn(0, 2, -1.025, () => {
        createBasicPopup("Small Intestine", "The small intestine is a long, coiled tube where most of the digestion and absorption of nutrients occur. It consists of three sections—the duodenum, jejunum, and ileum—each playing a vital role in breaking down food and absorbing vitamins, minerals, and other nutrients into the bloodstream.");
    }, 0.7);
    
    createSphereBtn(0, 4, 0.2, () => {
        createBasicPopup("Pancreas", "The pancreas is a glandular organ located behind the stomach that plays a crucial role in both digestion and blood sugar regulation. It produces digestive enzymes that are released into the small intestine and hormones, such as insulin and glucagon, that help manage blood glucose levels.");
    }, 0.7);
    
    createSphereBtn(-1, 5, -1.3, () => {
        createBasicPopup("Stomach", "The stomach, a key part of the gastrointestinal (GI) tract, is a muscular organ that digests food using acids and enzymes. It's located in the upper left abdomen and has five sections: cardia, fundus, body, antrum, and pylorus. These sections work together to contract, mix, and process food before passing it to the small intestine.");
    }, 0.7);
    
    createSphereBtn(0, 10, 1.025, () => {
        createBasicPopup("Esophagus", "The esophagus is a muscular tube that connects the throat to the stomach, allowing the passage of swallowed food and liquids. It uses coordinated muscle contractions, known as peristalsis, to move substances downward.");
    }, 0.7);
    
    createSphereBtn(1, 6, -1.5, () => {
        createBasicPopup("Liver", "The liver carries out numerous essential functions, such as detoxifying harmful substances from the blood, disposing of old red blood cells, producing bile to aid in digestion, metabolizing proteins, carbohydrates, and fats for energy, facilitating blood clotting, regulating blood volume, and storing glycogen and vitamins for later use. This organ is divided into two main parts: the larger right lobe and the smaller left lobe, both containing intricate networks of blood vessels and lobules.");
    }, 0.7);
    
    createSphereBtn(1.5151203100242423, 4.58159542163129, -0.4886603648770631, () => {
        createBasicPopup("Gallbladder", "The gallbladder is a small, pear-shaped organ located beneath the liver, responsible for storing and concentrating bile produced by the liver. This bile is released into the small intestine to aid in the digestion of fats.");
    }, 0.7);
    
    createSphereBtn(0.11901681452779656, 3.708769356834848, -1.5693504365953839, () => {
        createBasicPopup("Large Intestine (Colon)", "The colon, or large intestine, is the final part of the digestive system, responsible for absorbing water and electrolytes from indigestible food matter. It also compacts waste into feces for elimination from the body.");
    }, 0.7);
    
    createSphereBtn(1.0278882681632533, -0.4251876960475176, -0.4062908418909057, () => {
        createBasicPopup("Appendix", "The appendix is a small, tube-shaped pouch attached to the lower end of the large intestine. Although its precise function is unclear, it is believed to play a role in the immune system and maintaining gut flora.");
    }, 0.7);
    
    createSphereBtn(-0.050918167646385515, -0.8558629123022357, 0.717677195142643, () => {
        createBasicPopup("Rectum", "The rectum is the final section of the large intestine, responsible for storing feces until they are ready to be expelled from the body. It signals the need for a bowel movement and facilitates the passage of waste through the anal canal.");
    }, 0.7);
    
    createSphereBtn(0.01719847667590916, -2.0278662518005275, 1.3534251692090413, () => {
        createBasicPopup("Anus", "The anus is the external opening at the end of the digestive tract through which feces are expelled from the body. It is surrounded by sphincter muscles that control the passage of stool during defecation.");
    }, 0.7);
    
    document.getElementById('backHuman').style.display = 'block';
}

export function loaddigestiveinsitu() {
    clear();
    clearbtns();
    change(state.m.getChild(), "loaddigestiveinsitu(0)");
    document.getElementById('title').innerHTML = "Digestive System";
    importmesh("digestiveinsitu.glb", new BABYLON.Vector3(4.7, 10.25, -127), new BABYLON.Vector3(0, 9, 0), 23, new BABYLON.Vector3(0.25, 0.25, 0.25));
    
    createSphereBtn(0, 2, -1.025, () => {
        createBasicPopup("View Digestive System", "");
    }, 0.7);
    
    document.getElementById('backHuman').style.display = 'block';
}

export function loadliver() {
    clear();
    clearbtns();
    change(state.getChild(), "loadliver(0)");
    document.getElementById('title').innerHTML = "Liver";
    importmesh("livergallbladder.glb", new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 0, 0), 23, new BABYLON.Vector3(50, 50, 50));
    
    createSphereBtn(0.26610380962321756, -2.6046785440048934, -0.9232411065429948, () => {
        createBasicPopup("Gallbladder", "The gallbladder is a small, pear-shaped organ located beneath the liver, responsible for storing and concentrating bile produced by the liver. This bile is released into the small intestine to aid in the digestion of fats.");
    }, 0.7);
    
    document.getElementById('backHuman').style.display = 'block';
}

export function loadintestine() {
    clear();
    clearbtns();
    change(state.getChild(), "loadintestine(0)");
    document.getElementById('title').innerHTML = "Small Intestine";
    importmesh("intestine.glb", new BABYLON.Vector3(0, 0, 20), new BABYLON.Vector3(0.007446692495163276, 2.7207984888092964, -0.6814251652840753), 23, new BABYLON.Vector3(10, 10, 10));
    
    createSphereBtn(2.5854595278409125, 9.3249430687205, 0.26042799839466113, () => {
        createBasicPopup("Duodenum", "The duodenum is the first and shortest part of the small intestine, connecting directly to the stomach. It receives partially digested food from the stomach and plays a critical role in further digestion by receiving bile from the liver and pancreatic enzymes from the pancreas.");
    }, 0.7);
    
    createSphereBtn(-1.0441230809222448, 3.391124509169089, 0.7264978034664225, () => {
        createBasicPopup("Jejunum", "The jejunum is the middle section of the small intestine, where most of the absorption of nutrients from digested food occurs. It is characterized by its extensive surface area, lined with villi and microvilli that facilitate the uptake of nutrients into the bloodstream.");
    }, 0.7);
    
    createSphereBtn(2.861563997450558, 1.497042289458376, 0.17179412339412536, () => {
        createBasicPopup("Ileum", "The ileum is the final section of the small intestine, connecting to the large intestine (colon). It absorbs remaining nutrients and water from digested food, playing a crucial role in completing the digestion and absorption process before waste products move into the colon for elimination.");
    }, 0.7);
    
    createSphereBtn(1.148921973367198, 10.074631647478405, 0.43739938350441676, () => {
        createBasicPopup("Pyloric sphincter", "The pyloric sphincter is a muscular valve located between the stomach and the small intestine. It regulates the flow of partially digested food (chyme) from the stomach into the duodenum, ensuring controlled digestion and absorption in the small intestine.");
    }, 0.7);
    
    createSphereBtn(4.050481837447435, -0.4583788453890749, 0.14286343079463748, () => {
        createBasicPopup("Ileocecal valve", "The ileocecal valve is a one-way valve located between the ileum (the last part of the small intestine) and the cecum (the first part of the large intestine or colon). It regulates the flow of digested material from the small intestine into the large intestine, preventing backflow and allowing for controlled digestion and absorption.");
    }, 0.7);
    
    document.getElementById('backHuman').style.display = 'block';
}

export function loadstomach() {
    clear();
    clearbtns();
    change(state.getChild(), "loadstomach(0)");
    document.getElementById('title').innerHTML = "Stomach";
    importmesh("stomach.glb", new BABYLON.Vector3(0,0,0), null, null, new BABYLON.Vector3(0.1, 0.1, 0.1));
    document.getElementById('backHuman').style.display = 'block';
}

export function loadpancreas() {
    clear();
    clearbtns();
    change(state.getChild(), "loadpancreas(0)");
    document.getElementById('title').innerHTML = "Pancreas";
    importmesh("pancreas.glb", new BABYLON.Vector3(4.7, 15.25, -127), new BABYLON.Vector3(-8, 0, 0), 23, new BABYLON.Vector3(30, 30, 30));
    document.getElementById('backHuman').style.display = 'block';
}

export function loadcolon() {
    clear();
    clearbtns();
    change(state.getChild(), "loadcolon(0)");
    document.getElementById('title').innerHTML = "Colon (Large Intestine)";
    importmesh("colon.glb", new BABYLON.Vector3(190, 0, -200), new BABYLON.Vector3(0, 0, 0), 23, new BABYLON.Vector3(0.025, 0.025, 0.025));
    document.getElementById('backHuman').style.display = 'block';
}

export function loadesophagus() {
    clear();
    clearbtns();
    change(state.getChild(), "loadesophagus(0)");
    document.getElementById('title').innerHTML = "Esophagus";
    importmesh("esophagus.glb", new BABYLON.Vector3(190, 0, -200), new BABYLON.Vector3(-1.092117200582102, -0.14979557160125978, 1.9156961717874594), 23, new BABYLON.Vector3(1, 1, 1));
    document.getElementById('backHuman').style.display = 'block';
} 