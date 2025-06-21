import { change } from '../core/state-utils.js';
import { clear, clearbtns, importmesh, createEvolutionBtn, createSphereBtn, createBasicPopup, createPanel } from '../core/utils.js';
import { state } from '../core/state.js';

export function loadmuscular() {
    clear();
    clearbtns();
    change(state.m.getChild(), "loadmuscular(0)");
    document.getElementById('title').innerHTML = "Muscular System";
    importmesh("muscular_system.glb", new BABYLON.Vector3(4, 1, -20), new BABYLON.Vector3(0, -2, 0), 30, new BABYLON.Vector3(0.3, 0.3, 0.3));
    
    // Create panels for each muscle
    const glutmaxpanel = createPanel("glutmaxpanel", "Gluteus Maximus Information", "glutmaxclose", "Function: This muscle extends and externally rotates the hip.\nEvolutionary Perspective: The gluteus maximus is one of the most significant muscles for bipedal locomotion. It evolved to provide the power needed for upright walking, running, and jumping. In humans, the gluteus maximus is particularly important for maintaining an upright posture and for activities that require strong hip extension.");
    const glutmaxbtn = createEvolutionBtn("Gluteus Maximus", glutmaxpanel.id);
    
    const quadpanel = createPanel("quadpanel", "Quadriceps Information", "quadclose", "Function: This group of muscles extends the knee.\nEvolutionary Perspective: The quadriceps are vital for bipedalism, providing the necessary force for walking, running, and jumping. As humans evolved to cover longer distances on foot, the quadriceps adapted to support endurance and strength in the lower limbs. Efficient quadriceps function is essential for the stability and mobility required in a bipedal stance.");
    const quadbtn = createEvolutionBtn("Quadriceps", quadpanel.id);
    
    const hampanel = createPanel("hampanel", "Hamstrings Information", "hamclose", "Function: This group of muscles flexes the knee and extends the hip.\nEvolutionary Perspective: The hamstrings are crucial for efficient bipedal locomotion. In early hominins, the development of strong hamstrings allowed for more effective walking and running, supporting endurance and speed. These muscles are also important for stabilizing the pelvis and supporting the body's weight during movement.");
    const hambtn = createEvolutionBtn("Hamstrings", hampanel.id);
    
    const gastropanel = createPanel("gastropanel", "Gastrocnemius Information", "gastroclose", "Function: This muscle plantarflexes the foot and flexes the knee.\nEvolutionary Perspective: The gastrocnemius is essential for propelling the body forward during walking and running. In humans, this muscle has adapted to support the energy-efficient movement required for long-distance travel. It also plays a role in maintaining balance and stability while standing and moving.");
    const gastrobtn = createEvolutionBtn("Gastrocnemius", gastropanel.id);
    
    const bicepspanel = createPanel("bicepspanel", "Biceps Brachii Information", "bicepsclose", "Function: This muscle flexes the elbow and supinates the forearm.\nEvolutionary Perspective: In early primates, the biceps brachii was essential for climbing and brachiation. For humans, its role evolved to include functions important for manipulating objects, using tools, and performing precise hand movements. The development of fine motor skills in humans required an adaptation of the biceps brachii for more nuanced control.");
    const bicepsbtn = createEvolutionBtn("Biceps Brachii", bicepspanel.id);
    
    const triceppanel = createPanel("triceppanel", "Triceps Brachii Information", "tricepclose", "Function: This muscle extends the elbow.\nEvolutionary Perspective: The triceps brachii is important for pushing movements. In early primates, strong triceps were necessary for climbing and brachiation. In humans, the triceps have adapted to support a variety of pushing and lifting tasks, crucial for tool use and manual labor.");
    const tricepbtn = createEvolutionBtn("Triceps Brachii", triceppanel.id);
    
    const rectuspanel = createPanel("rectuspanel", "Rectus Abdominis Information", "rectusclose", "Function: This muscle is responsible for flexing the lumbar spine.\nEvolutionary Perspective: The rectus abdominis plays a significant role in posture and core stability in humans. As hominins evolved to walk upright, the rectus abdominis became more developed to help maintain an erect posture and support the internal organs against gravity. This muscle is also crucial for movements that require bending the torso forward.");
    const rectusbtn = createEvolutionBtn("Rectus Abdominis", rectuspanel.id);
    
    const obliquepanel = createPanel("obliquepanel", "Obliques Information", "obliqueclose", "Function: The internal and external obliques are involved in trunk rotation and lateral flexion.\nEvolutionary Perspective: These muscles are essential for maintaining balance and stability, especially in bipedal locomotion. The development of the obliques in humans is tied to the need for a stable core to support upright walking and running. Additionally, these muscles contribute to complex movements of the torso, which are important for tasks like throwing and twisting.");
    const obliquebtn = createEvolutionBtn("Obliques", obliquepanel.id);
    
    const pectoralpanel = createPanel("pectoralpanel", "Pectoralis Major Information", "pectoralclose", "Function: This muscle is responsible for movements of the shoulder joint, including flexion, adduction, and internal rotation of the humerus.\nEvolutionary Perspective: The pectoralis major has evolved to be more robust in humans compared to other primates. This is likely due to the increased need for strength in pushing and climbing activities. As humans evolved to become bipedal and less reliant on their upper limbs for locomotion, the pectoralis major became crucial for tasks involving upper body strength and manual dexterity.");
    const pectoralbtn = createEvolutionBtn("Pectoralis Major", pectoralpanel.id);
    
    const latsdorsipanel = createPanel("latsdorsipanel", "Latissimus Dorsi Information", "latsdorsiclose", "Function: This muscle is involved in the extension, adduction, and internal rotation of the shoulder.\nEvolutionary Perspective: The latissimus dorsi is vital for powerful arm movements, such as climbing and swimming. In humans, it supports actions like pulling and lifting, which were important for early human activities like tool use, hunting, and gathering.");
    const latsdorsibtn = createEvolutionBtn("Latissimus Dorsi", latsdorsipanel.id);
    
    const deltoidpanel = createPanel("deltoidpanel", "Deltoids Information", "deltoidclose", "Function: The deltoids are responsible for arm abduction, flexion, and extension.\nEvolutionary Perspective: In primates, the deltoids are essential for climbing and brachiation. In humans, these muscles have adapted to facilitate a wide range of arm movements, crucial for tasks requiring precision and strength. The ability to lift and manipulate objects is a significant evolutionary advantage provided by well-developed deltoids.");
    const deltoidbtn = createEvolutionBtn("Deltoids", deltoidpanel.id);
    
    const trapzpanel = createPanel("trapzpanel", "Trapezius Information", "trapzclose", "Function: This muscle moves, rotates, and stabilizes the scapula and extends the neck.\nEvolutionary Perspective: The trapezius is important for the shoulder and neck movements necessary for brachiation in primates. In humans, it has adapted to support the extensive range of motion in the shoulder joint and to assist with tasks that require shoulder and neck stability, such as carrying objects and using tools.");
    const trapzbtn = createEvolutionBtn("Trapezius", trapzpanel.id);
    
    const soleuspanel = createPanel("soleuspanel", "Soleus Information", "soleusclose", "Function: This muscle plantar flexes the foot.\nEvolutionary Perspective: The soleus works with the gastrocnemius to provide the powerful push-off needed for walking and running. Its development is critical for endurance and stability in bipedal locomotion. The soleus is particularly important for maintaining posture and preventing fatigue during prolonged standing and movement.");
    const soleusbtn = createEvolutionBtn("Soleus", soleuspanel.id);
    
    const tibialispanel = createPanel("tibialispanel", "Tibialis Anterior Information", "tibialisclose", "Function: This muscle dorsiflexes the foot and inverts the foot.\nEvolutionary Perspective: The tibialis anterior is crucial for walking and running, allowing the foot to clear the ground during the swing phase of gait. In early hominins, the development of this muscle helped improve efficiency in bipedal locomotion, reducing the energy cost of walking and running.");
    const tibialisbtn = createEvolutionBtn("Tibialis Anterior", tibialispanel.id);
    
    const rectfempanel = createPanel("rectfempanel", "Rectus Femoris Information", "rectfemclose", "Function: Part of the quadriceps group, it extends the knee and flexes the hip.\nEvolutionary Perspective: The rectus femoris has evolved to support the demands of bipedal locomotion. In early hominins, stronger and more efficient quadriceps were necessary to enable prolonged walking and running. This muscle's role in knee extension and hip flexion is critical for efficient and powerful leg movements.");
    const rectfembtn = createEvolutionBtn("Rectus Femoris", rectfempanel.id);
    
    const supraspinatuspanel = createPanel("supraspinatuspanel", "Supraspinatus Information", "supraspinatusclose", "Function: The supraspinatus is one of the four rotator cuff muscles that stabilize the shoulder and help with abduction of the arm.\nEvolutionary Perspective: The rotator cuff muscles are critical for the mobility and stability of the shoulder joint in primates. The supraspinatus, in particular, has adapted to support the wide range of arm movements needed for tasks like climbing and tool use.");
    const supraspinatusbtn = createEvolutionBtn("Supraspinatus", supraspinatuspanel.id);

    // Create sphere buttons for each muscle with exact coordinates from script.js
    createSphereBtn(-0.9595757246715109, -2.4508153315399683, 1.7633318747775952, () => {
        createBasicPopup("Gluteus maximus", "The largest muscle in the buttocks, responsible for hip extension and external rotation.", [glutmaxbtn]);
    }, 0.4);

    createSphereBtn(0.6882254289724681, -5.217013467858925, -0.2827176474055335, () => {
        createBasicPopup("Quadriceps", "A group of four muscles in the front of the thigh that extend the knee joint.", [quadbtn]);
    }, 0.4);

    createSphereBtn(1.0569583130871347, -4.490435223965783, 1.1028404875539088, () => {
        createBasicPopup("Hamstrings", "A group of three muscles at the back of the thigh that flex the knee joint and extend the hip joint.", [hambtn]);
    }, 0.4);

    createSphereBtn(-0.8992677017875774, -4.318400530692453, 1.0402248330083737, () => {
        createBasicPopup("Gastrocnemius", "The calf muscle, responsible for plantar flexion of the foot.", [gastrobtn]);
    }, 0.4);

    createSphereBtn(2.7572234229919785, 1.3032823272624965, 0.31611737245809124, () => {
        createBasicPopup("Biceps Brachii", "Located in the upper arm, this muscle is involved in elbow flexion and forearm supination.", [bicepsbtn]);
    }, 0.4);

    createSphereBtn(-2.6793534430233543, 1.8298286818625975, 1.7296695182045667, () => {
        createBasicPopup("Triceps Brachii", "Found on the back of the upper arm, it extends the elbow joint.", [tricepbtn]);
    }, 0.4);

    createSphereBtn(-0.191356019553929, -0.20163609969102048, -1.1340124778106109, () => {
        createBasicPopup("Rectus Abdominis", "Also known as the abs, it flexes the spine and helps stabilize the core.", [rectusbtn]);
    }, 0.4);

    createSphereBtn(1.2986588627082112, -0.14246239629252244, -0.5962617308827127, () => {
        createBasicPopup("Obliques", "The external and internal obliques assist in rotation and lateral flexion of the spine.", [obliquebtn]);
    }, 0.4);

    createSphereBtn(-0.7858814124471021, 2.594602223677178, -1.0091268162423788, () => {
        createBasicPopup("Pectoralis Major", "The chest muscle, responsible for shoulder flexion, adduction, and internal rotation.", [pectoralbtn]);
    }, 0.4);

    createSphereBtn(-1.2800446733460544, 1.4113759110829651, 1.7001175571319962, () => {
        createBasicPopup("Latissimus Dorsi", "Located in the back, it performs shoulder extension, adduction, and medial rotation.", [latsdorsibtn]);
    }, 0.4);

    createSphereBtn(-2.1179032206981585, 3.135423221082636, 1.6565915952165646, () => {
        createBasicPopup("Deltoids", "The shoulder muscles responsible for arm abduction, flexion, and extension.", [deltoidbtn]);
    }, 0.4);

    createSphereBtn(-0.011323480934285701, 3.325926619570299, 1.6627112678871612, () => {
        createBasicPopup("Trapezius", "The large muscle in the upper back and neck, responsible for shoulder movement and neck extension.", [trapzbtn]);
    }, 0.4);

    createSphereBtn(-1.2551765442635419, -8.686381271946104, 1.577246976393095, () => {
        createBasicPopup("Soleus", "Located beneath the gastrocnemius, it assists in plantar flexion of the foot.", [soleusbtn]);
    }, 0.4);

    createSphereBtn(-1.5790522311693351, -8.93094836393881, 0.4329394841819061, () => {
        createBasicPopup("Tibialis Anterior", "Found in the front of the lower leg, it dorsiflexes the foot.", [tibialisbtn]);
    }, 0.4);

    createSphereBtn(0.6882254289724681, -5.217013467858925, -0.2827176474055335, () => {
        createBasicPopup("Rectus Femoris", "Part of the quadriceps group, it extends the knee and flexes the hip.", [rectfembtn]);
    }, 0.4);

    createSphereBtn(-2.1179032206981585, 3.135423221082636, 1.6565915952165646, () => {
        createBasicPopup("Supraspinatus", "One of the four rotator cuff muscles that stabilize the shoulder and help with arm abduction.", [supraspinatusbtn]);
    }, 0.4);

    document.getElementById('backHuman').style.display = 'block';
} 