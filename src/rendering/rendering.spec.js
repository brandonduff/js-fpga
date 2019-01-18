import chai from 'chai';
import Constants from '../Constants';
import {initializeCircuitRender} from './';

describe('#Rendering', function () {
  let sprites = [
    {x: 0, y: 0},
    {x: 0, y: 0},
    {x: 0, y: 0},
    // {x: 0, y: 0},
    // {x: 0, y: 0}
  ];
  const expectedSprites = [
    {x: Constants.IMAGE_PADDING, y: 10},
    {x: Constants.IMAGE_PADDING * 3 + Constants.IMAGE_SIZE, y: 10},
    {x: Constants.IMAGE_PADDING, y: Constants.IMAGE_PADDING * 3 + Constants.IMAGE_SIZE},
    // {x: 0, y: 0},
    // {x: 0, y: 0}
  ];

  beforeEach(function () {

  });

  it('initializeCircuitRender properly plots sprite objects', () => {
    initializeCircuitRender({width: 104}, sprites);

    sprites.forEach((sprite, index) => {
      chai.expect(sprite.x).to.equal(expectedSprites[index].x);
      chai.expect(sprite.y).to.equal(expectedSprites[index].y);
    })
  });
});
