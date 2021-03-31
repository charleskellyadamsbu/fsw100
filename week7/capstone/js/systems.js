class EntitySystem {
    constructor() {

    }

    update() {
        for(let i = 0; i < maxEntities; i++) {
            if(entities[i] != null) {
                entities[i].update();
            }
        } 
    }
}

class SpriteSystem {
    constructor() {

    }

    update(ctx, camera) {
        for(let i = 0; i < maxEntities; i++) {
            if(sprites[i] != null && entities[i] != null) {
                ctx.drawImage(spriteSheet, sprites[i].x * 32, sprites[i].y * 32, 32, 32, -camera.x + entities[i].x, -camera.y + entities[i].y, 32, 32);
            }
        }
    }
}

class TileMapSystem {
    constructor() {

    }

    update(ctx, camera, player) {
        for(let i = 0; i < tilemaps.length; i++) {
            if(tilemaps[i] != null) {
                for(let y = Math.floor(player.y / 32 - 10); y < Math.floor(player.y / 32 + 10); y++) {
                    for(let x = Math.floor(player.x / 32 - 10); x < Math.floor(player.x / 32 + 10); x++) {
                        if(x < 0) continue;
                        if(x >= tilemaps[i].w) continue;
                        if(y < 0) continue;
                        if(y >= tilemaps[i].h) continue;
                        
                        switch(tilemaps[i].image) {
                            case 0:
                                ctx.drawImage(spriteSheet, tilemaps[i].getTile(x, y)[0] * 32, tilemaps[i].getTile(x, y)[1] * 32, 32, 32, -camera.x + x * 32, -camera.y + y * 32, 32, 32);
                            break;
                        }
                    }
                }
            }
        }
    }
}

let entitySystem = new EntitySystem();
let spriteSystem = new SpriteSystem();
let tileMapSystem = new TileMapSystem();