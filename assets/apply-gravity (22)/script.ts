class launch extends Sup.Behavior {
  gravity = 0.002;

  awake() {
    
  }

  update() {
     let velocity = this.actor.arcadeBody2D.getVelocity();
    velocity.y -= this.gravity;
    velocity.x -= this.gravity;
    this.actor.arcadeBody2D.setVelocity(velocity);
  }
}
Sup.registerBehavior(launch);
