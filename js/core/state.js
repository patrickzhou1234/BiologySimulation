import { Mem, change } from './state-utils.js';

// DOM Elements
export const title = document.getElementById("title");
export const backcell = document.getElementById("backcell");
export const backHuman = document.getElementById("backHuman");
export const backPageBtn = document.getElementById("backbtn");
export const nephronbtn = document.getElementById("nephronbtn");
export const backExretory = document.getElementById("backExretory");
export const showExterior = document.getElementById("exterior");
export const showNeuron = document.getElementById("neuron");
export const showETC = document.getElementById("ETC");
export const panelbtn = document.getElementById("panelbtn");
export const ribopanelbtn = document.getElementById("ribopanelbtn");
export const kidney2dmodelbtn = document.getElementById("kidney2dmodelbtn");
export const showsystems = document.getElementById("systembtn");
export const skinbtn = document.getElementById("skinbtn");
export const diaphragmbtn = document.getElementById("diaphragmbtn");
export const eyecsbtn = document.getElementById("eyecsbtn");
export const earcsbtn = document.getElementById("earcsbtn");
export const earbtn = document.getElementById("earbtn");
export const lungcrosssec = document.getElementById("lungcsbtn");

// Button Collections
export const roundbtns = document.querySelectorAll(".smlbtns");
export const corneabtns = document.querySelectorAll(".corneabtns");
export const mitosmlbtns = document.querySelectorAll(".mitosmlbtns");
export const golgismlbtns = document.querySelectorAll(".golgismlbtns");
export const roughersmlbtns = document.querySelectorAll(".roughersmlbtns");
export const smoothersmlbtns = document.querySelectorAll(".smoothersmlbtns");
export const brainbtns = document.querySelectorAll(".brainbtns");
export const eyebtns = document.querySelectorAll(".eyebtns");
export const earbtns = document.querySelectorAll(".earbtns");
export const heartbtns = document.querySelectorAll(".heartbtns");
export const cordbtns = document.querySelectorAll(".cordbtns");
export const kidneybtns = document.querySelectorAll(".kidneybtns");
export const exretorybtns = document.querySelectorAll(".exretorybtns");
export const respinsitubtns = document.querySelectorAll(".respinsitubtns");
export const stomachbtns = document.querySelectorAll(".stomachbtns");
export const respbtns = document.querySelectorAll(".respbtns");
export const NSbtns = document.querySelectorAll(".NSbtns");
export const digestivebtns = document.querySelectorAll(".digestivebtns");
export const circulatorybtns = document.querySelectorAll(".circulatorybtns");
export const bronchibtns = document.querySelectorAll(".bronchibtns");
export const lymphbtns = document.querySelectorAll(".lymphbtns");
export const endocrine1btns = document.querySelectorAll(".endocrine1btns");
export const liverbtns = document.querySelectorAll(".liverbtns");
export const esophagusbtns = document.querySelectorAll(".esophagusbtns");
export const intestinebtns = document.querySelectorAll(".intestinebtns");
export const spleenbtns = document.querySelectorAll(".spleenbtns");
export const pancreasbtns = document.querySelectorAll(".pancreasbtns");
export const lungbtns = document.querySelectorAll(".lungbtns");
export const colonbtns = document.querySelectorAll(".colonbtns");
export const skinbtns = document.querySelectorAll(".skinbtns");
export const diabtns = document.querySelectorAll(".diaphragmbtns");
export const endocrinebtns = document.querySelectorAll(".endocrinebtns");
export const muscularbtns = document.querySelectorAll(".muscularbtns");
export const spinebtns = Array.from(document.querySelectorAll(".spinebtns"));
export const digestiveinsitubtns = document.querySelectorAll(".digestiveinsitubtns");
export const skullbtns = Array.from(document.querySelectorAll(".skullbtns"));
export const dnabtns = document.querySelectorAll(".dnabtns");
export const lungcsbtns = [lungcrosssec];


// Mesh Arrays
export let cellmeshes = [];
export let humanmeshes = [];
export let lobemeshes = [];
export let eyemeshes = [];
export let neuronmeshes = [];
export let digestiveinsitumeshes = [];
export let skeletalmeshes = [];
export let kidneymeshes = [];
export let heartmeshes =[];
export let nephronmeshes = [];
export let endocrine1meshes = [];
export let digestivemeshes = [];
export let skullmeshes = [];
export let skinmeshes = [];
export let NSmeshes = [];
export let circulatorymeshes = [];
export let bronchimeshes = [];
export let respmeshes = [];
export let lymphmeshes = [];
export let cordmeshes = [];
export let muscularmeshes = [];
export let spinemeshes = [];
export let endocrinemeshes = [];
export let exretorymeshes = [];
export let respinsitumeshes = [];
export let livermeshes = [];
export let intestinemeshes = [];
export let spleenmeshes = [];
export let pancreasmeshes = [];
export let esophagusmeshes = [];
export let colonmeshes = [];
export let allMeshes = [];

// Panels
export let panel;
export let ribopanel;
export let eyeevbtn;
export let eyepanel;
export let glutmaxpanel, glutmaxbtn, glutmax;
export let quadpanel, quadbtn, quad;
export let hampanel, hambtn, ham;
export let gastropanel, gastrobtn, gastro;
export let bicepspanel, bicepsbtn, biceps;
export let triceppanel, tricepbtn, tricep;
export let rectuspanel, rectusbtn, rectus;
export let obliquepanel, obliquebtn, oblique;
export let pectoralpanel, pectoralbtn, pectoral;
export let latsdorsipanel, latsdorsibtn, latsdorsi;
export let deltoidpanel, deltoidbtn, deltoid;
export let trapzpanel, trapzbtn, trapz;
export let soleuspanel, soleusbtn, soleus;
export let tibialispanel, tibialisbtn, tibialis;
export let rectfempanel, rectfembtn, rectfem;
export let suprapanel, suprabtn, supra;
export let skullpanel, skullevbtn, spinepanel, spineevbtn, femurbtns, femurpanel, femurevbtn, pelvisbtns, pelvispanel, pelvisevbtn, ribbtns, ribspanel, ribsevbtn, humerusbtns, humeruspanel, humerusevbtn, tibfibbtns, tibfibpanel, tibfibevolbtn, radulnbtns, radulnpanel, radulnevbtn, sternumbtns, sternumpanel, sternumevbtn, scapulabtns, scapulapanel, scapulaevbtn, phalangebtns, phalangepanel, phalangeevbtn, phalangeFoot, phalangeHand, spine, skull, femur, pelvis, ribs, humerus, tibfib, raduln, sternum, scapula;

export function setPanel(newPanel) { panel = newPanel; }
export function setRibopanel(newPanel) { ribopanel = newPanel; }
export function setEyepanel(newPanel) { eyepanel = newPanel; }
export function setEyeEvBtn(newBtn) { eyeevbtn = newBtn; }

// Combined button arrays for easier iteration
export const buttons = [backcell, backHuman, backExretory, backKidney, showNeuron, showETC, panelbtn, showExterior, kidney2dmodelbtn, nephronbtn, eyecsbtn, earcsbtn, earbtn];
export const buttonArrays = [roundbtns, respbtns, cordbtns, respinsitubtns, endocrine1btns, mitosmlbtns, golgismlbtns, brainbtns, heartbtns, skinbtns, skullbtns, kidneybtns, spinebtns, endocrinebtns, liverbtns, intestinebtns, colonbtns, pancreasbtns, digestiveinsitubtns, muscularbtns, stomachbtns, digestivebtns, circulatorybtns, lymphbtns, eyemeshes, roughersmlbtns, smoothersmlbtns, exretorybtns, bronchibtns, esophagusbtns, lungbtns, corneabtns];

export let state = {
    meshes: [],
    buttons: [],
    visibleUI: [],
    m: new Mem(),
}; 