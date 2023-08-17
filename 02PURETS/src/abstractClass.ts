abstract class TakePhoto  {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number {
        // some complex calculation 
        return 8
    }
}

// const cb = new TakePhoto('') // you can't get value this way 
// you should create a child (extend) to get the values 

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log('Sepia');
    }
}

const hc = new Instagram('test', 'test', 3)

console.log(hc.getReelTime()); 
