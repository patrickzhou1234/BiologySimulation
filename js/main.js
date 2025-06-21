import { engine, scene } from './core/babylon-setup.js';
import { state } from './core/state.js';
import * as utils from './core/utils.js';

import * as cell from './systems/cell.js';
import * as skeletal from './systems/skeletal.js';
import * as human from './systems/human.js';
import * as nervous from './systems/nervous.js';
import * as eye from './systems/eye.js';
import * as ear from './systems/ear.js';
import * as cardiovascular from './systems/cardiovascular.js';
import * as digestive from './systems/digestive.js';
import * as respiratory from './systems/respiratory.js';
import * as lymphatic from './systems/lymphatic.js';
import * as endocrine from './systems/endocrine.js';
import * as integumentary from './systems/integumentary.js';
import * as muscular from './systems/muscular.js';
import * as excretory from './systems/excretory.js';
import { change } from './core/state-utils.js';

// Assign all imported functions to the global window object
Object.assign(window, {
    ...cell,
    ...skeletal,
    ...human,
    ...nervous,
    ...eye,
    ...ear,
    ...cardiovascular,
    ...digestive,
    ...respiratory,
    ...lymphatic,
    ...endocrine,
    ...integumentary,
    ...muscular,
    ...excretory,
    ...utils,
    change,
});

document.addEventListener('DOMContentLoaded', () => {
    human.loadhuman(0);
    engine.runRenderLoop(function () {
        scene.render();
    });
});

window.addEventListener("resize", function () {
    engine.resize();
}); 