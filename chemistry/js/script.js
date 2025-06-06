function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tabContent");
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].className = tabContents[i].className.replace(" active", "");
    }
    
    const tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).className += " active";
    evt.currentTarget.className += " active";
  }
  
  function closeAllTabs() {
    const tabContents = document.getElementsByClassName("tabContent");
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].className = tabContents[i].className.replace(" active", "");
    }
    
    const tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" active", "");
    }
  }

  let scene, camera, renderer, controls;
  let periodicTable = {};
  let currentAtom = null;
  let currentElement = null;

  const elementColors = {
    'Alkali Metal': 0xFF6666,
    'Alkaline Earth Metal': 0xFFDEAD,
    'Transition Metal': 0xFFC0CB,
    'Post-Transition Metal': 0xCCCCCC,
    'Metalloid': 0xCCCC99,
    'Nonmetal': 0xA0FFA0,
    'Halogen': 0xFFFF99,
    'Noble Gas': 0xC0FFFF,
    'Lanthanide': 0xFFBFFF,
    'Actinide': 0xFF99CC
  };

  function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;
    scene.background = new THREE.Color(0x9EEBEB); 

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.35);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    createPeriodicTable();

    window.addEventListener('resize', onWindowResize, false);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('click', onDocumentMouseClick, false);
  }

  function createPeriodicTable() {
    const table = [
      ['H', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'He'],
      ['Li', 'Be', '', '', '', '', '', '', '', '', '', '', 'B', 'C', 'N', 'O', 'F', 'Ne'],
      ['Na', 'Mg', '', '', '', '', '', '', '', '', '', '', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar'],
      ['K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr'],
      ['Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe'],
      ['Cs', 'Ba', 'La', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn'],
      ['Fr', 'Ra', 'Ac', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og'],
      ['', '', '', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', ''],
      ['', '', '', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', '']
    ];

    const loader = new THREE.FontLoader();
    loader.load('js/typeface.json', function(font) {
      for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
          if (table[i][j] !== '') {
            const element = table[i][j];
            const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
            const material = new THREE.MeshPhongMaterial({ color: getElementColor(element) });
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(j - 8.5, -i + 4, 0);
            scene.add(cube);
            
            periodicTable[element] = {
              mesh: cube,
              position: new THREE.Vector3(j - 8.5, -i + 4, 0)
            };

            const textGeometry = new THREE.TextGeometry(element, {
              font: font,
              size: 0.3,
              height: 0.1,
            });
            const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);
            textMesh.position.set(j - 8.7, -i + 3.8, 0.5);
            scene.add(textMesh);
          }
        }
      }
    });
  }

  function getElementColor(element) {
    const categories = {
      'H': 'Nonmetal',
      'He': 'Noble Gas',
      'Li': 'Alkali Metal',
      'Be': 'Alkaline Earth Metal',
      'B': 'Metalloid',
      'C': 'Nonmetal',
      'N': 'Nonmetal',
      'O': 'Nonmetal',
      'F': 'Halogen',
      'Ne': 'Noble Gas',
      'Na': 'Alkali Metal',
      'Mg': 'Alkaline Earth Metal',
      'Al': 'Post-Transition Metal',
      'Si': 'Metalloid',
      'P': 'Nonmetal',
      'S': 'Nonmetal',
      'Cl': 'Halogen',
      'Ar': 'Noble Gas',
      'K': 'Alkali Metal',
      'Ca': 'Alkaline Earth Metal',
      'Sc': 'Transition Metal',
      'Ti': 'Transition Metal',
      'V': 'Transition Metal',
      'Cr': 'Transition Metal',
      'Mn': 'Transition Metal',
      'Fe': 'Transition Metal',
      'Co': 'Transition Metal',
      'Ni': 'Transition Metal',
      'Cu': 'Transition Metal',
      'Zn': 'Transition Metal',
      'Ga': 'Post-Transition Metal',
      'Ge': 'Metalloid',
      'As': 'Metalloid',
      'Se': 'Nonmetal',
      'Br': 'Halogen',
      'Kr': 'Noble Gas',
      'Rb': 'Alkali Metal',
      'Sr': 'Alkaline Earth Metal',
      'Y': 'Transition Metal',
      'Zr': 'Transition Metal',
      'Nb': 'Transition Metal',
      'Mo': 'Transition Metal',
      'Tc': 'Transition Metal',
      'Ru': 'Transition Metal',
      'Rh': 'Transition Metal',
      'Pd': 'Transition Metal',
      'Ag': 'Transition Metal',
      'Cd': 'Transition Metal',
      'In': 'Post-Transition Metal',
      'Sn': 'Post-Transition Metal',
      'Sb': 'Metalloid',
      'Te': 'Metalloid',
      'I': 'Halogen',
      'Xe': 'Noble Gas',
      'Cs': 'Alkali Metal',
      'Ba': 'Alkaline Earth Metal',
      'La': 'Lanthanide',
      'Ce': 'Lanthanide',
      'Pr': 'Lanthanide',
      'Nd': 'Lanthanide',
      'Pm': 'Lanthanide',
      'Sm': 'Lanthanide',
      'Eu': 'Lanthanide',
      'Gd': 'Lanthanide',
      'Tb': 'Lanthanide',
      'Dy': 'Lanthanide',
      'Ho': 'Lanthanide',
      'Er': 'Lanthanide',
      'Tm': 'Lanthanide',
      'Yb': 'Lanthanide',
      'Lu': 'Lanthanide',
      'Hf': 'Transition Metal',
      'Ta': 'Transition Metal',
      'W': 'Transition Metal',
      'Re': 'Transition Metal',
      'Os': 'Transition Metal',
      'Ir': 'Transition Metal',
      'Pt': 'Transition Metal',
      'Au': 'Transition Metal',
      'Hg': 'Transition Metal',
      'Tl': 'Post-Transition Metal',
      'Pb': 'Post-Transition Metal',
      'Bi': 'Post-Transition Metal',
      'Po': 'Metalloid',
      'At': 'Metalloid',
      'Rn': 'Noble Gas',
      'Fr': 'Alkali Metal',
      'Ra': 'Alkaline Earth Metal',
      'Ac': 'Actinide',
      'Th': 'Actinide',
      'Pa': 'Actinide',
      'U': 'Actinide',
      'Np': 'Actinide',
      'Pu': 'Actinide',
      'Am': 'Actinide',
      'Cm': 'Actinide',
      'Bk': 'Actinide',
      'Cf': 'Actinide',
      'Es': 'Actinide',
      'Fm': 'Actinide',
      'Md': 'Actinide',
      'No': 'Actinide',
      'Lr': 'Actinide',
      'Rf': 'Transition Metal',
      'Db': 'Transition Metal',
      'Sg': 'Transition Metal',
      'Bh': 'Transition Metal',
      'Hs': 'Transition Metal',
      'Mt': 'Transition Metal',
      'Ds': 'Transition Metal',
      'Rg': 'Transition Metal',
      'Cn': 'Transition Metal',
      'Nh': 'Post-Transition Metal',
      'Fl': 'Post-Transition Metal',
      'Mc': 'Post-Transition Metal',
      'Lv': 'Post-Transition Metal',
      'Ts': 'Halogen',
      'Og': 'Noble Gas'
    };

    return elementColors[categories[element]] || 0xCCCCCC;
  }

  function createAtomModel(element, speed = 0.02) {
  console.log(element)
  console.log(currentAtom)
  if (currentAtom) {
    scene.remove(currentAtom);
  }

  const atomGroup = new THREE.Group();

  const nucleusGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  const nucleusMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
  const nucleus = new THREE.Mesh(nucleusGeometry, nucleusMaterial);
  atomGroup.add(nucleus);

  const electronConfiguration = getElectronConfiguration(element);

  electronConfiguration.forEach((electronsInShell, i) => {
    const shellRadius = (i + 1) * 1.5;
    const shellGeometry = new THREE.TorusGeometry(shellRadius, 0.02, 16, 100);
    const shellMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const shell = new THREE.Mesh(shellGeometry, shellMaterial);
    shell.rotation.x = 0;
    atomGroup.add(shell);

    for (let j = 0; j < electronsInShell; j++) {
      const electronGeometry = new THREE.SphereGeometry(0.1, 16, 16);
      const electronMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x00ff00,
        emissive: 0x003300,
        shininess: 100
      });
      const electron = new THREE.Mesh(electronGeometry, electronMaterial);
      const angle = (j / electronsInShell) * Math.PI * 2;
      electron.position.set(
        shellRadius * Math.cos(angle),
        shellRadius * Math.sin(angle),
        0
      );
      if(speed == null){
        electron.userData = {
          angle,
          radius: shellRadius,
          speed: Math.random() * 0.02 + 0.01
        };
      }
      else{
        electron.userData = {
          angle,
          radius: shellRadius,
          speed: speed
        };
      }
      atomGroup.add(electron);
    }
  });

  atomGroup.position.set(0, 0, 5 * electronConfiguration.length);
  scene.add(atomGroup);
  currentAtom = atomGroup;
}

function animateElectrons() {
  if (!currentAtom) return;

  currentAtom.children.forEach(child => {
    if (child.userData && child.userData.speed) {
      child.userData.angle += child.userData.speed;
      child.position.set(
        child.userData.radius * Math.cos(child.userData.angle),
        child.userData.radius * Math.sin(child.userData.angle),
        0
      );
    }
  });
}

function getElectronConfiguration(element) {
  const electronConfigurations = {
    'H': [1], 'He': [2], 'Li': [2, 1], 'Be': [2, 2], 'B': [2, 3], 'C': [2, 4], 'N': [2, 5], 'O': [2, 6], 'F': [2, 7], 'Ne': [2, 8],
    'Na': [2, 8, 1], 'Mg': [2, 8, 2], 'Al': [2, 8, 3], 'Si': [2, 8, 4], 'P': [2, 8, 5], 'S': [2, 8, 6], 'Cl': [2, 8, 7], 'Ar': [2, 8, 8],
    'K': [2, 8, 8, 1], 'Ca': [2, 8, 8, 2], 'Sc': [2, 8, 9, 2], 'Ti': [2, 8, 10, 2], 'V': [2, 8, 11, 2], 'Cr': [2, 8, 13, 1], 'Mn': [2, 8, 13, 2], 
    'Fe': [2, 8, 14, 2], 'Co': [2, 8, 15, 2], 'Ni': [2, 8, 16, 2], 'Cu': [2, 8, 18, 1], 'Zn': [2, 8, 18, 2], 'Ga': [2, 8, 18, 3], 'Ge': [2, 8, 18, 4], 
    'As': [2, 8, 18, 5], 'Se': [2, 8, 18, 6], 'Br': [2, 8, 18, 7], 'Kr': [2, 8, 18, 8], 'Rb': [2, 8, 18, 8, 1], 'Sr': [2, 8, 18, 8, 2], 
    'Y': [2, 8, 18, 9, 2], 'Zr': [2, 8, 18, 10, 2], 'Nb': [2, 8, 18, 12, 1], 'Mo': [2, 8, 18, 13, 1], 'Tc': [2, 8, 18, 13, 2], 'Ru': [2, 8, 18, 15, 1], 
    'Rh': [2, 8, 18, 16, 1], 'Pd': [2, 8, 18, 18], 'Ag': [2, 8, 18, 18, 1], 'Cd': [2, 8, 18, 18, 2], 'In': [2, 8, 18, 18, 3], 'Sn': [2, 8, 18, 18, 4], 
    'Sb': [2, 8, 18, 18, 5], 'Te': [2, 8, 18, 18, 6], 'I': [2, 8, 18, 18, 7], 'Xe': [2, 8, 18, 18, 8], 'Cs': [2, 8, 18, 18, 8, 1], 'Ba': [2, 8, 18, 18, 8, 2], 
    'La': [2, 8, 18, 18, 9, 2], 'Ce': [2, 8, 18, 19, 9, 2], 'Pr': [2, 8, 18, 21, 8, 2], 'Nd': [2, 8, 18, 22, 8, 2], 'Pm': [2, 8, 18, 23, 8, 2], 
    'Sm': [2, 8, 18, 25, 8, 2], 'Eu': [2, 8, 18, 25, 9, 2], 'Gd': [2, 8, 18, 25, 9, 2], 'Tb': [2, 8, 18, 27, 8, 2], 'Dy': [2, 8, 18, 28, 8, 2], 
    'Ho': [2, 8, 18, 29, 8, 2], 'Er': [2, 8, 18, 30, 8, 2], 'Tm': [2, 8, 18, 31, 8, 2], 'Yb': [2, 8, 18, 32, 8, 2], 'Lu': [2, 8, 18, 32, 9, 2], 
    'Hf': [2, 8, 18, 32, 10, 2], 'Ta': [2, 8, 18, 32, 11, 2], 'W': [2, 8, 18, 32, 12, 2], 'Re': [2, 8, 18, 32, 13, 2], 'Os': [2, 8, 18, 32, 14, 2], 
    'Ir': [2, 8, 18, 32, 15, 2], 'Pt': [2, 8, 18, 32, 17, 1], 'Au': [2, 8, 18, 32, 18, 1], 'Hg': [2, 8, 18, 32, 18, 2], 'Tl': [2, 8, 18, 32, 18, 3], 
    'Pb': [2, 8, 18, 32, 18, 4], 'Bi': [2, 8, 18, 32, 18, 5], 'Po': [2, 8, 18, 32, 18, 6], 'At': [2, 8, 18, 32, 18, 7], 'Rn': [2, 8, 18, 32, 18, 8], 
    'Fr': [2, 8, 18, 32, 18, 8, 1], 'Ra': [2, 8, 18, 32, 18, 8, 2], 'Ac': [2, 8, 18, 32, 18, 9, 2], 'Th': [2, 8, 18, 32, 18, 10, 2], 
    'Pa': [2, 8, 18, 32, 20, 9, 2], 'U': [2, 8, 18, 32, 21, 9, 2], 'Np': [2, 8, 18, 32, 22, 9, 2], 'Pu': [2, 8, 18, 32, 24, 8, 2], 
    'Am': [2, 8, 18, 32, 25, 8, 2], 'Cm': [2, 8, 18, 32, 25, 9, 2], 'Bk': [2, 8, 18, 32, 27, 8, 2], 'Cf': [2, 8, 18, 32, 28, 8, 2], 
    'Es': [2, 8, 18, 32, 29, 8, 2], 'Fm': [2, 8, 18, 32, 30, 8, 2], 'Md': [2, 8, 18, 32, 31, 8, 2], 'No': [2, 8, 18, 32, 32, 8, 2], 
    'Lr': [2, 8, 18, 32, 32, 8, 3], 'Rf': [2, 8, 18, 32, 32, 10, 2], 'Db': [2, 8, 18, 32, 32, 11, 2], 'Sg': [2, 8, 18, 32, 32, 12, 2], 
    'Bh': [2, 8, 18, 32, 32, 13, 2], 'Hs': [2, 8, 18, 32, 32, 14, 2], 'Mt': [2, 8, 18, 32, 32, 15, 2], 'Ds': [2, 8, 18, 32, 32, 17, 1], 
    'Rg': [2, 8, 18, 32, 32, 17, 2], 'Cn': [2, 8, 18, 32, 32, 18, 2], 'Nh': [2, 8, 18, 32, 32, 18, 3], 'Fl': [2, 8, 18, 32, 32, 18, 4], 
    'Mc': [2, 8, 18, 32, 32, 18, 5], 'Lv': [2, 8, 18, 32, 32, 18, 6], 'Ts': [2, 8, 18, 32, 32, 18, 7], 'Og': [2, 8, 18, 32, 32, 18, 8]
  };
  return electronConfigurations[element] || [];
}


  function getElectronCount(element) {
    const electronCounts = {
      'H': 1, 'He': 2, 'Li': 3, 'Be': 4, 'B': 5, 'C': 6, 'N': 7, 'O': 8, 'F': 9, 'Ne': 10,
      'Na': 11, 'Mg': 12, 'Al': 13, 'Si': 14, 'P': 15, 'S': 16, 'Cl': 17, 'Ar': 18, 'K': 19, 'Ca': 20,
      'Sc': 21, 'Ti': 22, 'V': 23, 'Cr': 24, 'Mn': 25, 'Fe': 26, 'Co': 27, 'Ni': 28, 'Cu': 29, 'Zn': 30,
      'Ga': 31, 'Ge': 32, 'As': 33, 'Se': 34, 'Br': 35, 'Kr': 36, 'Rb': 37, 'Sr': 38, 'Y': 39, 'Zr': 40,
      'Nb': 41, 'Mo': 42, 'Tc': 43, 'Ru': 44, 'Rh': 45, 'Pd': 46, 'Ag': 47, 'Cd': 48, 'In': 49, 'Sn': 50,
      'Sb': 51, 'Te': 52, 'I': 53, 'Xe': 54, 'Cs': 55, 'Ba': 56, 'La': 57, 'Ce': 58, 'Pr': 59, 'Nd': 60,
      'Pm': 61, 'Sm': 62, 'Eu': 63, 'Gd': 64, 'Tb': 65, 'Dy': 66, 'Ho': 67, 'Er': 68, 'Tm': 69, 'Yb': 70,
      'Lu': 71, 'Hf': 72, 'Ta': 73, 'W': 74, 'Re': 75, 'Os': 76, 'Ir': 77, 'Pt': 78, 'Au': 79, 'Hg': 80,
      'Tl': 81, 'Pb': 82, 'Bi': 83, 'Po': 84, 'At': 85, 'Rn': 86, 'Fr': 87, 'Ra': 88, 'Ac': 89, 'Th': 90,
      'Pa': 91, 'U': 92, 'Np': 93, 'Pu': 94, 'Am': 95, 'Cm': 96, 'Bk': 97, 'Cf': 98, 'Es': 99, 'Fm': 100,
      'Md': 101, 'No': 102, 'Lr': 103, 'Rf': 104, 'Db': 105, 'Sg': 106, 'Bh': 107, 'Hs': 108, 'Mt': 109,
      'Ds': 110, 'Rg': 111, 'Cn': 112, 'Nh': 113, 'Fl': 114, 'Mc': 115, 'Lv': 116, 'Ts': 117, 'Og': 118
    };
    return electronCounts[element] || 1;
  }

  function getAtomicNumber(element) {
    const atomicNumbers = {
      'H': 1, 'He': 2, 'Li': 3, 'Be': 4, 'B': 5, 'C': 6, 'N': 7, 'O': 8, 'F': 9, 'Ne': 10,
      'Na': 11, 'Mg': 12, 'Al': 13, 'Si': 14, 'P': 15, 'S': 16, 'Cl': 17, 'Ar': 18, 'K': 19, 'Ca': 20,
      'Sc': 21, 'Ti': 22, 'V': 23, 'Cr': 24, 'Mn': 25, 'Fe': 26, 'Co': 27, 'Ni': 28, 'Cu': 29, 'Zn': 30,
      'Ga': 31, 'Ge': 32, 'As': 33, 'Se': 34, 'Br': 35, 'Kr': 36, 'Rb': 37, 'Sr': 38, 'Y': 39, 'Zr': 40,
      'Nb': 41, 'Mo': 42, 'Tc': 43, 'Ru': 44, 'Rh': 45, 'Pd': 46, 'Ag': 47, 'Cd': 48, 'In': 49, 'Sn': 50,
      'Sb': 51, 'Te': 52, 'I': 53, 'Xe': 54, 'Cs': 55, 'Ba': 56, 'La': 57, 'Ce': 58, 'Pr': 59, 'Nd': 60,
      'Pm': 61, 'Sm': 62, 'Eu': 63, 'Gd': 64, 'Tb': 65, 'Dy': 66, 'Ho': 67, 'Er': 68, 'Tm': 69, 'Yb': 70,
      'Lu': 71, 'Hf': 72, 'Ta': 73, 'W': 74, 'Re': 75, 'Os': 76, 'Ir': 77, 'Pt': 78, 'Au': 79, 'Hg': 80,
      'Tl': 81, 'Pb': 82, 'Bi': 83, 'Po': 84, 'At': 85, 'Rn': 86, 'Fr': 87, 'Ra': 88, 'Ac': 89, 'Th': 90,
      'Pa': 91, 'U': 92, 'Np': 93, 'Pu': 94, 'Am': 95, 'Cm': 96, 'Bk': 97, 'Cf': 98, 'Es': 99, 'Fm': 100,
      'Md': 101, 'No': 102, 'Lr': 103, 'Rf': 104, 'Db': 105, 'Sg': 106, 'Bh': 107, 'Hs': 108, 'Mt': 109,
      'Ds': 110, 'Rg': 111, 'Cn': 112, 'Nh': 113, 'Fl': 114, 'Mc': 115, 'Lv': 116, 'Ts': 117, 'Og': 118
    };
    return atomicNumbers[element] || 0;
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onDocumentMouseMove(event) {
    event.preventDefault();
    const mouse = new THREE.Vector2(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    );

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
      const object = intersects[0].object;
      for (const element in periodicTable) {
        if (periodicTable[element].mesh === object) {
          document.getElementById('elementInfo').innerText = element;
          break;
        }
      }
    } else {
      document.getElementById('elementInfo').innerText = '';
    }
  }
  
  function resetCam() {
    const duration = 1000;

    const initialPosition = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z
    };
    const targetPosition = {
        x: 0,
        y: 0,
        z: 20
    };

    const initialRotation = {
        x: camera.rotation.x,
        y: camera.rotation.y,
        z: camera.rotation.z
    };
    const targetRotation = {
        x: 0,
        y: 0,
        z: 0
    };

    const initialZoom = { zoom: camera.zoom };
    const targetZoom = { zoom: 1 };

    new TWEEN.Tween(initialPosition)
        .to(targetPosition, duration)
        .onUpdate(() => {
            camera.position.set(initialPosition.x, initialPosition.y, initialPosition.z);
        })
        .start();

    new TWEEN.Tween(initialRotation)
        .to(targetRotation, duration)
        .onUpdate(() => {
            camera.rotation.set(initialRotation.x, initialRotation.y, initialRotation.z);
        })
        .start();

    new TWEEN.Tween(initialZoom)
        .to(targetZoom, duration)
        .onUpdate(() => {
            camera.zoom = initialZoom.zoom;
            camera.updateProjectionMatrix();
        })
        .start();

    const initialTarget = controls.target.clone();
    const targetTarget = new THREE.Vector3(0, 0, 0);

    new TWEEN.Tween(initialTarget)
        .to(targetTarget, duration)
        .onUpdate(() => {
            controls.target.set(initialTarget.x, initialTarget.y, initialTarget.z);
        })
        .onComplete(() => {
            controls.target.set(targetTarget.x, targetTarget.y, targetTarget.z);
            controls.update();
        })
        .start();

    if (currentAtom) {
        scene.remove(currentAtom);
        currentAtom = null;
    }
  }

  function onDocumentMouseClick(event) {

    event.preventDefault();
    const mouse = new THREE.Vector2(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    );

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
      const object = intersects[0].object;
      for (const element in periodicTable) {
        if (periodicTable[element].mesh === object) {
          createAtomModel(element);
          currentElement = element
          new TWEEN.Tween(camera.position)
            .to({ x: periodicTable[element].position.x, y: periodicTable[element].position.y, z: 10*getElectronConfiguration(element).length }, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();
          break;
        }
      }
    }
  }

  function toggleElectronMovement() {
    var button = document.getElementById('electronSpeedButton');
    if (button.innerHTML === '<i class="material-icons">speed</i> Dynamic Electron Movement: Off') {
      button.innerHTML = '<i class="material-icons">speed</i> Dynamic Electron Movement: On';
      createAtomModel(currentElement, null)
    } else {
      button.innerHTML = '<i class="material-icons">speed</i> Dynamic Electron Movement: Off';
      createAtomModel(currentElement, 0.02)
    }
  }

  function showComparisonModel(element) {
    closeAllTabs()
    createAtomModel(element);
    currentElement = element;
    
    const shellCount = getElectronConfiguration(element).length;
    const zoom = 10 * shellCount;
    
    new TWEEN.Tween(camera.position)
      .to({ x: 0, y: 0, z: zoom }, 1000)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();
      
    new TWEEN.Tween(controls.target)
      .to({ x: 0, y: 0, z: 0 }, 1000)
      .easing(TWEEN.Easing.Quadratic.Out)
      .onComplete(() => {
        controls.update();
      })
      .start();
  }

  function animate() {
    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();

    animateElectrons();

    renderer.render(scene, camera);
  }

  init();
  animate();