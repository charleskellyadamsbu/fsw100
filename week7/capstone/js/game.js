class Canvas {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        window.addEventListener('load', e => {
            this.canvas.width = document.body.clientWidth;
            this.canvas.height = document.body.clientHeight;
        });

        window.addEventListener('resize', e => {
            this.canvas.width = document.body.clientWidth;
            this.canvas.height = document.body.clientHeight;
        });
    }
}

let collisionGrid = new Grid(gridSize, gridSize);

for(let y = 0; y < collisionGrid.h; y++) {
    for(let x = 0; x < collisionGrid.w; x++) {
        collisionGrid.setGridItem(x, y, false);
    }
}

let terrainGrid = new Grid(gridSize, gridSize);

for(let i = 0; i < maxEntities; i++) {
    ids.push(i);
    entities.push(null);
    sprites.push(null);
}

tilemaps.push(new TerrainTileMap());

let canvas = new Canvas();

function spawnEntity(x, y, entity) {
    if(collisionGrid.getGridItem(x, y) == false) {
        entity.x = x * 32;
        entity.y = y * 32;
        collisionGrid.setGridItem(x, y, true);
        return true;
    }

    return false;
}

let player = new Player();
while(spawnEntity(randomInt(0, 32), randomInt(0, 32), player) == false) {

}

for(let i = 0; i < 128; i++) {
    spawnEntity(randomInt(0, 32), randomInt(0, 32), new Zombie());
}

let time = 0;

function updateLoop() {
    canvas.ctx.clearRect(0, 0, document.body.clientWidth, document.body.clientHeight);
    camera.x = player.x - document.body.clientWidth / 2 - 16;
    camera.y = player.y - document.body.clientHeight / 2 - 16;
    entitySystem.update();
    tileMapSystem.update(canvas.ctx, camera, player);
    spriteSystem.update(canvas.ctx, camera, player);

    if(playerJustMoved == true) {
        playerJustMoved = false;
    }

    requestAnimationFrame(updateLoop);
}

updateLoop();