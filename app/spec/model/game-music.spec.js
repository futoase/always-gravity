describe('GameMusic', () => {

  describe('#main', () => {
    it ('should be get is music of Main.', () => {
      assert(GameMusic.main instanceof Kiwi.Sound.Audio);
    });
  });

  describe('#gameOver', () => {
    it ('should be get is music of GAMEOVER.', () => {
      assert(GameMusic.gameOver instanceof Kiwi.Sound.Audio);
    });
  });

  describe('#soundEffectOfBullet', () => {
    it ('should be get is Sound Effect of Bullet.', () => {
      assert(GameMusic.soundEffectOfBullet instanceof Kiwi.Sound.Audio);
    });
  });

  describe('#soundEffectOfExplosion', () => {
    it ('should be get is Sound Effect of Explosion.', () => {
      assert(GameMusic.soundEffectOfExplosion instanceof Kiwi.Sound.Audio);
    });
  });

  describe('#soundEffectOfCautionForSpeed', () => {
    it ('should be get is Sound Effect of Caution for speed.', () => {
      assert(GameMusic.soundEffectOfCautionForSpeed instanceof Kiwi.Sound.Audio);
    });
  });

  describe('#soundEffectOfCircle', () => {
    it ('should be get is Sound Effect of Circle.', () => {
      assert(GameMusic.soundEffectOfCircle instanceof Kiwi.Sound.Audio);
    });
  });

  describe('#soundEffectOfMyUnitExplosion', () => {
    it ('should be get is Sound Effect of MyUnitExplosion.', () => {
      assert(GameMusic.soundEffectOfMyUnitExplosion instanceof Kiwi.Sound.Audio);
    });
  });

});
