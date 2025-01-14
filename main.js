const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload('./zombie1.png');
ASSET_MANAGER.queueDownload('./walk.png');


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false ; 

	
    gameEngine.addEntity(new Zombie(gameEngine, ASSET_MANAGER.getAsset('./zombie1.png'), 0, 10, 40)); // Zombie 1
    gameEngine.addEntity(new Zombie(gameEngine, ASSET_MANAGER.getAsset('./walk.png'), 0, 300, 40)); // Zombie 2


	gameEngine.init(ctx);

	gameEngine.start();
});
