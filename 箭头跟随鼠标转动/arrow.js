function Arrow(){
	this.x = 0; //初始位置
	this.y = 0;
	this.rotation = 0; //初始旋转角度
	this.color = "#ff6503";
}
Arrow.prototype.draw = function(context){
	context.save();
	context.translate(this.x,this.y); //将坐标移到this.x和this.y
	console.log("X:"+this.x)
	console.log("Y:"+this.y)
	context.rotate(this.rotation); //设置旋转角度
	context.lineWidth = 5;
	context.fillStyle = this.color;
	context.beginPath(); //路径开始
	context.moveTo(-50,-25);
	context.lineTo(0,-25);
	context.lineTo(0,-50);
	context.lineTo(50,0);
	context.lineTo(0,50);
	context.lineTo(0,25);
	context.lineTo(-50,25);
	context.closePath();
	context.stroke();
	context.restore();
}
