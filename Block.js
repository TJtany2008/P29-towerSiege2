class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/block.png");
      World.add(world, this.body);
      this.Visibility = 255;
    }
    display(){
      if(this.body.speed){
        super.display();
      }
      else
      {
        World.remove(world,this.body);
        push()
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
        //image(this.image, this.position.x, this.position.y,50,50);
        pop()
      }
    }
}

