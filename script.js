const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);
console.log(ctx);



class Line {
      constructor(canvas) {
            this.canvas = canvas;
             this.x = Math.random() * this.canvas.width;
            this.y = Math.random() * this.canvas.height;
            this.history = [{x: this.x, y: this.y}];
            
            //this.endX = Math.random() * this.canvas.width;
            //this.endY = Math.random() * this.canvas.height;
            this.lineWidth = Math.floor(Math.random() * 15 + 1);
            this.hue = Math.floor(Math.random() * 360);
            this.maxLength = Math.floor(Math.random() * 150 + 10);
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = 7;
            this.lifeSpan = this.maxLength * 3;
            this.timer = 0;
            
      }
      draw(context){
           // context.strokeStyle = "hsl(" + this.hue + ", 100%, 50%)";
            context.strokeStyle = "hsl(76.4, 35.5%, 63.5%)";
            context.lineWidth = this.lineWidth;
            context.beginPath();
            context.moveTo(this.history[0].x, this.history[0].y);
              
                  
            for (let i = 0; i < this.history.length; i++) {
                  
                 context.lineTo(this.history[i].x, this.history[i].y);
            }      
            context.stroke();
      }
    update(){
            this.timer++;
            if (this.timer < this.lifeSpan){ 
                this.x += this.speedX + Math.random() * 20 - 10;
                  console.log(this.x);
                this.y += this.speedY + Math.random() * 20 - 10;
                  console.log(this.y);
                this.history.push({x: this.x, y: this.y});
                if (this.history.length > this.maxLength){
                    this.history.shift();
                }      
            } else if (this.history.length <= 1){
                  console.log("resetting");
                  this.reset();
            } else {
                  this.history.shift();
            } 
      }      
      reset(){
            this.x = Math.random() * this.canvas.width;
            this.y = Math.random() * this.canvas.height;
            this.history = [{x: this.x, y: this.y}];
            this.timer = 0;
     }


   //   update(){
   //        this.x = this.x + this.speedX;
   //        this.y = this.y + this.speedY;
           //this.x = Math.random() * this.canvas.width;
  //         console.log(this.x, this.y);
           //this.y = Math.random() * this.canvas.height;
      
    //       this.history.push({x: this.x, y: this.y});
    //       if (this.history.length > this.maxLength){
    //            this.history.shift();
    //       }      
      
    //   } 
}//      
   
            
const linesArray = [];
const numberOfLines = 100;
for (let i = 0; i < numberOfLines; i++){
      linesArray.push(new Line(canvas));
}
console.log(linesArray);


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    linesArray.forEach(line => line.draw(ctx));
    linesArray.forEach(line => line.update());
    requestAnimationFrame(animate);
}      
animate();      
      

