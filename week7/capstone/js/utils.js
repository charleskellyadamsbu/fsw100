const maxEntities = 1000;
const gridSize = 1024;
let playerJustMoved = false;

class Camera {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.w = document.body.clientWidth;
        this.h = document.body.clientHeight;
    }
}

let camera = new Camera();

function loadImage(path) {
    let image = new Image();
    image.onload = function() {

    }
    image.src = path;
    return image;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let spriteSheet = loadImage('../spritesheet.png');

class Grid {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        this.id = [w * h];

        for(let i = 0; i < w * h; i++) { 
            this.id[i] = null;
        }
    }

    boundsCheck(x, y) {
        if(x >= 0 && x < this.w && y >= 0 && y < this.h) {
            return true;
        } 

        return false;
    }

    isFree(x, y) {
        if(this.boundsCheck(x, y)) {
            if(this.id[x + y * this.w] == null) {
                return true;
            } 
        }

        return false;
    }

    getGridItem(x, y) {
        if(this.boundsCheck(x, y)) {
            return this.id[x + y * this.w];
        }
    }

    setGridItem(x, y, item) {
        if(this.boundsCheck(x, y)) {
            this.id[x + y * this.w] = item;
        }
    }
}