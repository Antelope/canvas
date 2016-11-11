function Arrow(){
	this.x = 0; //��ʼλ��
	this.y = 0;
	this.rotation = 0; //��ʼ��ת�Ƕ�
	this.color = "#ff6503";
}
Arrow.prototype.draw = function(context){
	context.save();
	context.translate(this.x,this.y); //�������Ƶ�this.x��this.y
	console.log("X:"+this.x)
	console.log("Y:"+this.y)
	context.rotate(this.rotation); //������ת�Ƕ�
	context.lineWidth = 5;
	context.fillStyle = this.color;
	context.beginPath(); //·����ʼ
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
