class RenderFPS extends Sup.Behavior {
  awake() {
    
  }

  update() {
    let fps = Sup.Game.getFPS();
    // this.actor.setX(2);
    // this.actor.setY(2);
    this.actor.textRenderer.setText("FPS:" + fps);
  }
}
Sup.registerBehavior(RenderFPS);
