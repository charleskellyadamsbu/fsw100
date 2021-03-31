const maxEntities = 100;
const gridSize = 32;

class Camera {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.w = document.body.clientWidth;
        this.h = document.body.clientHeight;
    }
}

function loadImage(path) {
    let image = new Image();
    image.onload = function() {

    }
    image.src = path;
    return image;
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