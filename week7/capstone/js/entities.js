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
                        collisionGrid.setGridItem(this.x / 32, this.y / 32, false);
                        collisionGrid.setGridItem(this.x / 32, this.y / 32 - 1, true);
                        this.y -= 32;
                        this.direction = 0;
                        this.addSprite(new Sprite(0, 4, 32, 32));
                    }
                break;

                case "s":
                    if(collisionGrid.getGridItem(this.x / 32, this.y / 32 + 1) == false) {
                        collisionGrid.setGridItem(this.x / 32, this.y / 32, false);
                        collisionGrid.setGridItem(this.x / 32, this.y / 32 + 1, true);
                        this.y += 32;
                        this.direction = 2;
                        this.addSprite(new Sprite(0, 1, 32, 32));
                    }
                break;

                case "a":
                    if(collisionGrid.getGridItem(this.x / 32 - 1, this.y / 32) == false) {
                        collisionGrid.setGridItem(this.x / 32, this.y / 32, false);
                        collisionGrid.setGridItem(this.x / 32 - 1, this.y / 32, true);
                        this.x -= 32;
                        this.direction = 3;
                        this.addSprite(new Sprite(0, 2, 32, 32));
                    }
                break;

                case "d":
                    if(collisionGrid.getGridItem(this.x / 32 + 1, this.y / 32) == false) {
                        collisionGrid.setGridItem(this.x / 32, this.y / 32, false);
                        collisionGrid.setGridItem(this.x / 32 + 1, this.y / 32, true);
                        this.x += 32;
                        this.direction = 1;
                        this.addSprite(new Sprite(0, 3, 32, 32));
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
        this.addSprite(new Sprite(1, 1, 32, 32));
    }

    update() {
        if(playerJustMoved == true) {
            this.move();
        }
    }

    move() {
        let direction = randomInt(0, 4);

        switch(direction) {
            case 0:
                if(collisionGrid.getGridItem(this.x / 32, this.y / 32 - 1) == false) {
                    collisionGrid.setGridItem(this.x / 32, this.y / 32, false);
                    collisionGrid.setGridItem(this.x / 32, this.y / 32 - 1, true);
                    this.y -= 32;
                    this.addSprite(new Sprite(1, 4, 32, 32));
                }
            break;

            case 1:
                if(collisionGrid.getGridItem(this.x / 32, this.y / 32 + 1) == false) {
                    collisionGrid.setGridItem(this.x / 32, this.y / 32, false);
                    collisionGrid.setGridItem(this.x / 32, this.y / 32 + 1, true);
                    this.y += 32;
                    this.addSprite(new Sprite(1, 1, 32, 32));
                }
            break;

            case 2:
                if(collisionGrid.getGridItem(this.x / 32 - 1, this.y / 32) == false) {
                    collisionGrid.setGridItem(this.x / 32, this.y / 32, false);
                    collisionGrid.setGridItem(this.x / 32 - 1, this.y / 32, true);
                    this.x -= 32;
                    this.addSprite(new Sprite(1, 2, 32, 32));
                }
            break;

            case 3:
                if(collisionGrid.getGridItem(this.x / 32 + 1, this.y / 32) == false) {
                    collisionGrid.setGridItem(this.x / 32, this.y / 32, false);
                    collisionGrid.setGridItem(this.x / 32 + 1, this.y / 32, true);
                    this.x += 32;
                    this.addSprite(new Sprite(1, 3, 32, 32));
                }
            break;
        }

    }
}