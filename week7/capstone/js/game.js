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
let player = new Player();
let camera = new Camera();
let playerJustMoved = false;
function updateLoop() {
    canvas.ctx.clearRect(0, 0, document.body.clientWidth, document.body.clientHeight);
    camera.x = player.x - document.body.clientWidth / 2 - 16;
    camera.y = player.y - document.body.clientHeight / 2 - 16;

    entitySystem.update();
    tileMapSystem.update(canvas.ctx, camera, player);
    spriteSystem.update(canvas.ctx, camera);

    if(playerJustMoved == true) {
        playerJustMoved = false;
    }

    requestAnimationFrame(updateLoop);
}

updateLoop();