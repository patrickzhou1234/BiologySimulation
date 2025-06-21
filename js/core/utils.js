import { scene, camera } from "./babylon-setup.js";
import { state } from "./state.js";

export function clear() {
    state.meshes.forEach((mesh) => {
        mesh.dispose();
    });
    state.meshes = [];
}

export function hideui() {
    // Hide all tracked UI elements
    state.visibleUI.forEach((el) => {
        if (el) {
            el.style.display = 'none';
        }
    });
    state.visibleUI = []; // Clear the array

    // Also hide the main panels that might have been shown by class or id
    document.querySelectorAll('.round-button, .custom-button, #panel, #panel2, #panel3, #panel4, #instructions').forEach(el => {
        if (el) el.style.display = 'none';
    });
}

export function clearbtns() {
    // Dispose BabylonJS sphere buttons
    state.buttons.forEach((button) => {
        button.dispose();
    });
    state.buttons = [];

    // Hide all HTML UI elements and panels
    hideui();
}

export function importmesh(filename, camera_position, camera_target, camera_radius, scaling, position, onSuccess) {
    BABYLON.SceneLoader.ImportMesh("", "models/", filename, scene, function (newMeshes) {
        if (camera_position) {
            camera.setPosition(new BABYLON.Vector3(camera_position.x, camera_position.y, camera_position.z));
        }
        if (camera_target) {
            camera.setTarget(new BABYLON.Vector3(camera_target.x, camera_target.y, camera_target.z));
        } else if (camera_target === false) {
            // Do nothing, leave target as is
        }
        else {
            camera.setTarget(new BABYLON.Vector3(0, 0, 0));
        }

        if (camera_radius) {
            camera.radius = camera_radius;
        }
        newMeshes.forEach(function (mesh) {
            if (scaling) {
                mesh.scaling = new BABYLON.Vector3(scaling.x, scaling.y, scaling.z);
            }
            if (position) {
                mesh.position = new BABYLON.Vector3(position.x, position.y, position.z);
            }
            state.meshes.push(mesh);
        });

        if (onSuccess) {
            onSuccess(newMeshes);
        }
    });
}

export function createSphereBtn(position, onclick, diameter = 0.25) {
    if (!scene) {
        console.error("Scene is not initialized");
        return;
    }

    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: diameter, segments: 32 }, scene);
    sphere.position = position;

    const sphereMaterial = new BABYLON.StandardMaterial("sphereMaterialInstance", scene);
    sphereMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5); // grey
    sphere.material = sphereMaterial;

    state.meshes.push(sphere);

    sphere.actionManager = new BABYLON.ActionManager(scene);

    sphere.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
            if (camera) {
                camera.lowerRadiusLimit = 2;
            }
            onclick();
        })
    );

    sphere.actionManager.registerAction(
        new BABYLON.InterpolateValueAction(
            BABYLON.ActionManager.OnPointerOverTrigger,
            sphere,
            "scaling",
            new BABYLON.Vector3(1.2, 1.2, 1.2),
            150
        )
    );
    sphere.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
            sphere.material.diffuseColor = new BABYLON.Color3(0.2, 0.8, 0.2); // green
        })
    );

    sphere.actionManager.registerAction(
        new BABYLON.InterpolateValueAction(
            BABYLON.ActionManager.OnPointerOutTrigger,
            sphere,
            "scaling",
            new BABYLON.Vector3(1, 1, 1),
            150
        )
    );
    sphere.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
            sphere.material.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5); // grey
        })
    );

    return sphere;
}

export function clickcond(btnarr, ind) {
    for (let i = 0; i < btnarr.length; i++) {
        let btn = document.getElementById(btnarr[i]);
        if (btn) {
            if (i == ind) {
                btn.style.backgroundColor = 'lightblue';
            } else {
                btn.style.backgroundColor = 'white';
            }
        }
    }
}

export function showui(btns) {
    const panel = document.getElementById('panel');
    if (panel) {
        panel.style.display = 'block';
        if (!state.visibleUI.includes(panel)) {
            state.visibleUI.push(panel);
        }
    }
    btns.forEach((el) => {
        const element = document.getElementById(el);
        if (element) {
            element.style.display = 'block';
            if (!state.visibleUI.includes(element)) {
                state.visibleUI.push(element);
            }
        }
    });
}

export function createButtonPopup(buttonId, popupId) {
    const button = document.getElementById(buttonId);
    const popup = document.getElementById(popupId);

    if (button && popup) {
        button.onclick = function () {
            popup.style.display = "block";
        }
    }
}

export function createEvolutionBtn(title, content) {
    const btn = document.createElement("button");
    btn.innerHTML = `Evolution of the ${title}`;
    btn.className = "evolution-btn"; // Add a class for styling
    btn.onclick = () => {
        Swal.fire({
            title: `Evolution of the ${title}`,
            text: content,
            background: "black",
            color: "white",
            showCloseButton: true,
        });
    };
    
    // You'll need to decide where to append this button.
    // For now, let's assume a container with id 'evolution-buttons-container' exists.
    const container = document.getElementById('evolution-buttons-container');
    if (container) {
        container.appendChild(btn);
        if (!state.visibleUI.includes(btn)) {
            state.visibleUI.push(btn);
        }
    }
    return btn;
}

export function createBasicPopup(title, text) {
    Swal.fire({
        title: title,
        text: text,
        background: "black",
        color: "white",
        showCloseButton: true,
    });
}

export function createImagePopUp(title, description, imageURL, imageWidth, imageHeight) {
    Swal.fire({
        title: title,
        text: description,
        imageUrl: imageURL,
        imageWidth: imageWidth,
        imageHeight: imageHeight,
        background: "black",
        color: "white",
        showCloseButton: true,
    });
} 