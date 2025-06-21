import { state } from './state.js';

export class Mem {
    constructor() {
        this.arr = new Array();
        this.arr.push("loadhuman(0)");
    }
    change(newval) {
        this.arr.push(newval);
    }
    getParent() {
        return this.arr[this.arr.length-2];
    }
    getChild() {
        return this.arr[this.arr.length-1];
    }
}

export function change(newval) {
    state.m.change(newval);
} 