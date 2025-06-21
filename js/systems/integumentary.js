import { change } from '../core/state-utils.js';
import { clickcond, importmesh, clear, clearbtns, showui, createSphereBtn, createBasicPopup } from '../core/utils.js';


export function loadskin(ind) {
    change("loadskin(0)");

    const skinButton = document.getElementById("skin");
    if (skinButton?.style.display !== 'none' || ind === 0) {
        clear();
        clearbtns();

        document.getElementById("title").innerHTML = "Integumentary System (Skin)";
        importmesh("skin.glb", new BABYLON.Vector3(0, 0, -127), new BABYLON.Vector3(0, 6, 0), 23, new BABYLON.Vector3(0.05, 0.05, 0.05));

        // Create sphere buttons for each skin layer with exact coordinates from script.js
        createSphereBtn(-1.429031476552809, 9.20573235888369, -5.859479645096261, () => {
            createBasicPopup("Epidermis (Stratum corneum)", "The most superficial layer of skin. Composed of keratinized cells and dead cells, several layers thick.");
        }, 0.25);
        
        createSphereBtn(-1.6835021588256234, 7.14752135776231, -5.802487106408545, () => {
            createBasicPopup("Epidermis (Stratum spinosum)", "The stratum spinosum is a layer within the epidermis, the outermost layer of the skin. It consists of several layers of polygonal cells that provide strength and flexibility to the skin, playing a role in its protective function against external factors.");
        }, 0.25);
        
        createSphereBtn(-0.3852876160194004, 5.085492373710684, -5.79909174554934, () => {
            createBasicPopup("Epidermis (Stratum basale)", "The stratum basale, also known as the basal layer, is the deepest layer of the epidermis. It consists of columnar or cuboidal cells that continually divide to replenish the upper layers of the epidermis. This layer also contains melanocytes, which produce melanin, the pigment responsible for skin color and UV protection.");
        }, 0.25);
        
        createSphereBtn(4.641838912032425, 5.702284249509858, -5.889503782882748, () => {
            createBasicPopup("Dermis (Papillary Layer)", "The papillary layer is the upper layer of the dermis, situated just beneath the epidermis. It consists of loose connective tissue containing capillaries, nerve endings, and dermal papillae that interlock with the epidermis. This layer supports the epidermis and contributes to its nourishment and sensitivity to touch.");
        }, 0.25);
        
        createSphereBtn(4.106870472545223, 1.9705955450635333, -5.841123706667769, () => {
            createBasicPopup("Dermis (Reticular Layer)", "The reticular layer is the deeper and thicker layer of the dermis, located beneath the papillary layer. It consists of dense irregular connective tissue that provides strength and elasticity to the skin. This layer contains collagen and elastic fibers, as well as structures such as sweat glands, hair follicles, and deeper blood vessels, contributing to skin structure and function.");
        }, 0.25);
        
        createSphereBtn(2.4247239531816733, 2.031074141443843, -6.46664647299108, () => {
            createBasicPopup("Eccrine Sweat Gland", "Eccrine sweat glands are distributed across the body and are particularly abundant on the palms of the hands, soles of the feet, and forehead. They produce a watery sweat that helps regulate body temperature through evaporation, contributing to cooling during physical exertion or in response to heat.");
        }, 0.25);
        
        createSphereBtn(-7.893215560417568, 4.6456544535072455, -5.396551753469076, () => {
            createBasicPopup("Hair Follicle", "A hair follicle is a structure within the skin that produces hair. It extends from the surface of the skin into the dermis and sometimes into the subcutaneous layer. Surrounding each hair follicle are sebaceous glands, which secrete an oily substance called sebum that lubricates the hair and skin.");
        }, 0.25);
        
        createSphereBtn(-3.6271103275220824, -0.3045936995585201, -5.852358112119418, () => {
            createBasicPopup("Hypodermis", "The hypodermis, also known as the subcutaneous layer or superficial fascia, is located beneath the dermis of the skin. It consists primarily of adipose (fat) tissue and loose connective tissue that serves several important functions. These include insulation to regulate body temperature, cushioning and protecting underlying tissues and organs, and storing energy in the form of fat.");
        }, 0.25);
        
        createSphereBtn(1.6738174780913555, 10.775824622157021, -1.6476496506116582, () => {
            createBasicPopup("Surface Hairs", "Surface hairs, also known as vellus hairs, are fine, short, and lightly pigmented hairs that cover most of the body. They are especially prominent on areas like the face, arms, and back. Vellus hairs play a role in thermal regulation and provide a tactile sense.");
        }, 0.25);

        clearbtns();
        document.getElementById('backHuman').style.display = 'block';
    }
} 