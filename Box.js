class Box {
    constructor(x, y, width, height) {
      var options = {
          'isStatic': false,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity =255;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed < 4){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        fill(0,255,0);
        rect(0, 0, this.width, this.height);
        pop();
      }

      else {
        World.remove(world, this.body);
        push();
        this.Visiblity -=5;
        tint(255,this.Visiblity);
        pop();
      }
    }

    score() {
      if (this.Visiblity<0 && this.Visiblity>-105) {
        score++;
      }
    }
  }