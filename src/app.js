import Constants from './constants';
import LogicSolutionTrainer from './logic-solution-trainer';
import { initializeCircuitRender } from './rendering';

let currentLeadingCircuit;
let gateSprites;
let height = global.innerHeight;
let pixi = global.PIXI;
let Sprite = pixi.Sprite;
let textures;
let width = global.innerWidth;
let screen = {height, width};

let pixiApp = new pixi.Application({width: width, height: height});
pixi.loader
  .add("img/atlas.json")
  .load(() => {
    textures = pixi.loader.resources['img/atlas.json'].textures;

    gateSprites = [];
    for (let i = 0; i < testTrainer.circuitSize; i++) {
      let newSprite = new Sprite(textures['and.png']);

      pixiApp.stage.addChild(newSprite);
      gateSprites.push(newSprite);
    }

    initializeCircuitRender(screen, gateSprites);

    pixiApp.ticker.add(() => {
      gateSprites.forEach((sprite, index) => {
        sprite.texture = textures[`${currentLeadingCircuit.gates[index].type.toLowerCase()}.png`];
      });
    });
  });

var testTrainer = new LogicSolutionTrainer({
  onEvaluated: (circuits) => {
    currentLeadingCircuit = circuits[0];
    console.log('run');
  },
  onFinished: (circuit) => {
    console.log(circuit);
  },
  circuitSize: 96,
  immigrantsPerGeneration: 5,
  population: 15
});

global.document.body.appendChild(pixiApp.view);

testTrainer.evolve([0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0], [0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0]);
