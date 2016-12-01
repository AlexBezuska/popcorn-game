class shoot extends Sup.Behavior {

  speed = 0.05;
  corns = 0;
  public shootCoolDown = false;
  
  coolDown = function(){
    this.shootCoolDown = true;
    Sup.setTimeout(Sup.Math.Random.integer(20,80), () => { this.shootCoolDown = false; })
  }
  
  sounds = ["sounds/pop1", "sounds/pop2", "sounds/pop3"];
  powerupSounds = ["sounds/powerup1", "sounds/powerup2", "sounds/powerup2", "sounds/powerup4"];
  
  start() {
    
  }

  update() {
    
    if (Sup.Input.isKeyDown("SPACE")&& !this.shootCoolDown) {
      Sup.Audio.playSound(this.sounds[Sup.Math.Random.integer(0,2)], Sup.Math.Random.float(0,1));
      this.coolDown();
      
      let newParticle = Sup.appendScene("Particles")[0];
      let playerCurrentPos = Sup.getActor("player").getLocalPosition();
      
      //set origin by player
      newParticle.setEulerZ(Sup.Math.Random.float(0,3.14));
      newParticle.arcadeBody2D.warpPosition(playerCurrentPos.x - 0.09, playerCurrentPos.y + 0.05);

      let velocity = newParticle.arcadeBody2D.getVelocity();
      velocity.x = Sup.Math.Random.float(-this.speed, this.speed );
      velocity.y = Sup.Math.Random.float(-this.speed, this.speed );
      newParticle.arcadeBody2D.setVelocity(velocity);
      this.corns++;
      
    }
    Sup.getActor("cornCounter").textRenderer.setText("CORNS:" + this.corns);
    
    if (this.corns % 50 === 0 && this.corns > 0){
      Sup.Audio.playSound(this.powerupSounds[Sup.Math.Random.integer(0,3)]);
    }
  
  }
}

Sup.registerBehavior(shoot);