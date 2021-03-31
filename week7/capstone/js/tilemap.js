class TileMap {
    constructor(w, h, image) {
        this.w = w;
        this.h = h;
        this.grid = [w * h];
        this.image = image;

        for(let i = 0; i < w * h; i++) {
            this.grid[i] = [0, 0];
        }
    }

    setTile(x, y, x1, y1) {
        this.grid[x + y * this.w] = [x1, y1];
    }

    getTile(x, y) {
        return this.grid[x + y * this.w];
    }
}

class TerrainTileMap extends TileMap {
    constructor() {
        super(terrainGrid.w, terrainGrid.h, 0);
        noise.seed(Math.random());
        for(let y = 0; y < gridSize; y++) {
            for(let x = 0; x < gridSize; x++) {
                let value = noise.simplex2(x / 8, y / 8);
                
                if(value >= 0.0 && value < 0.3) {
                    this.setTerrainTile(x, y, new Grass());
                } else {
                    this.setTerrainTile(x, y, new Grass());
                }
            }
        }
    }

    setTerrainTile(x, y, tile) {
        if(tile.solid == true) {
            collisionGrid.setGridItem(x, y, true);
        }

        terrainGrid.setGridItem(x, y, tile);
        this.setTile(x, y, terrainGrid.getGridItem(x, y).x, terrainGrid.getGridItem(x, y).y);
    }
}

let tilemaps = [];