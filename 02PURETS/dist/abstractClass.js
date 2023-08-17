"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculation 
        return 8;
    }
}
// const cb = new TakePhoto('') // you can't get value this way 
// you should create a child (extend) to get the values 
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('Sepia');
    }
}
const hc = new Instagram('test', 'test', 3);
console.log(hc.getReelTime());
