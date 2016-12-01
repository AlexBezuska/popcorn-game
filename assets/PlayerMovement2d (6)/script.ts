class PlayerMovement2dbehavior extends Sup.Behavior {
  
  speed = 0.03;
  
  update() {
    
    //Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, Sup.ArcadePhysics2D.getAllBodies());

    
    let velocity = this.actor.arcadeBody2D.getVelocity();
   let angleZ = this.actor.getEulerZ();
    if (Sup.Input.isKeyDown("LEFT")){
       
      angleZ += 0.01;
      
    
    }
    if (Sup.Input.isKeyDown("RIGHT")){
       
      angleZ -= 0.01;
      
    
    }
    
    if (Sup.Input.isKeyDown("SPACE")){
       
     this.speed = 0.03;
    
    }else{
      this.speed = 0;
    }
     
    this.actor.arcadeBody2D.setVelocity(this.actor.getEulerZ() * this.speed,this.actor.getEulerZ() * this.speed);
    this.actor.setEulerZ(angleZ);
    Sup.log(this.actor.getEulerZ());
  }
}
Sup.registerBehavior(PlayerMovement2dbehavior);




