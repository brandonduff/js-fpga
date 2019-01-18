import Constants from '../constants';

export function initializeCircuitRender (screen, sprites) {
  let x = Constants.IMAGE_PADDING;
  let y = Constants.IMAGE_PADDING;

  sprites.forEach((sprite) => {
    const fullSize = Constants.IMAGE_SIZE + Constants.IMAGE_PADDING * 2;

    sprite.x = x;

    if (sprite.x + Constants.IMAGE_SIZE > screen.width) {
      x = Constants.IMAGE_PADDING;

      sprite.x = x;

      y += fullSize;
    }

    sprite.y = y;

    x += fullSize;
  });
}
