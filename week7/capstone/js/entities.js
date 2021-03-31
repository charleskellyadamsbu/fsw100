class Entity {
    constructor(id) {
        this.id = id;
        entities[this.id] = this;
        this.x = 0;
        this.y = 0;
    }

    addSprite(sprite) {
        sprites[this.id] = sprite;
    }

    addTileMap(tilemap) {
        tilemaps[this.id] = tilemap;
    }

    destroy() {
        ids.push(this.id);
        sprites[this.id] = null;
        entities[this.id] = null;
        tilemaps[this.id] = null;
    }

    update() {
        
    }
}

class Player extends Entity {
    constructor() {
        super(ids.shift());
        this.addSprite(new Sprite(0, 1, 32, 32));
        this.direction = 0;
        window.addEventListener('keyup', e => {
            playerJustMoved = true;

            switch(e.key) {
                
                case "w":
                    if(collisionGrid.getGridItem(this.x / 32, this.y / 32 - 1) == false) {
                        this.y -= 32;
                        this.direction = 0;
                    }
                break;

                case "s":
                    if(collisionGrid.getGridItem(this.x / 32, this.y / 32 + 1) == false) {
                        this.y += 32;
                        this.direction = 2;
                    }
                break;

                case "a":
                    if(collisionGrid.getGridItem(this.x / 32 - 1, this.y / 32) == false) {
                        this.x -= 32;
                        this.direction = 3;
                    }
                break;

                case "d":
                    if(collisionGrid.getGridItem(this.x / 32 + 1, this.y / 32) == false) {
                        this.x += 32;
                        this.direction = 1;
                    }
                break;

                case " ":
                    
                break;
            }
        });
    }

    update() {
        
    }
}

class Zombie extends Entity {
    constructor() {
        super(ids.shift());
        this.addSprite(new Sprite(0, 0, 32, 32));
    }
}