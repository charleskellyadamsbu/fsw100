class Tile {
    constructor(id, x, y, solid) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.solid = solid;
    }
}

class Grass extends Tile {
    constructor() {
        super(1, 1, 0, false);
    }
}

class Dirt extends Tile {
    constructor() {
        super(2, 2, 0, false);
    }
}

class Water extends Tile {
    constructor() {
        super(3, 3, 0, true);
    }
}