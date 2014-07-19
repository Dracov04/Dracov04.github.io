

$(".card").on("click", function(){
	event( $(this).attr("z"));
});

		VectorImage = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16);
		var value1 = 0;
		var value2 = 0;
		var turn = 0;

		function Aleatory() {
			var i=0;
			for(var i = 0, len = VectorImage.length/2; i < len+1; i++){
				VectorImage[i]=i+".jpg";
				VectorImage[i+VectorImage.length/2]=i+".jpg";
			}

			var aux="";

			for(i=1;i<17;i++) {
				var alea = Math.floor(Math.random()*15)+1;

				aux=VectorImage[i];
				VectorImage[i]=VectorImage[alea];
				VectorImage[alea]=aux;
			}
			for(i=1;i<17;i++) {
				document.getElementById(i+"a").src="images/"+VectorImage[i];
			}
		}

		function clean() {
			for(i=1;i<17;i++) {
				document.getElementById(i+"a").src="images/0.jpg";
			}			
		}

		function event(value) {
			if(turn==0) {
				value1=value;
			document.getElementById(value1+"a").src="images/"+VectorImage[value1];
			this.turn=1;

			}else {
				value2=value;
				document.getElementById(value2+"a").src="images/"+VectorImage[value2];
			this.turn=0;

				if(VectorImage[value1]==VectorImage[value2]){
				/*alert("the same");*/
				}else{
				alert("differents");
				document.getElementById(value1+"a").src="images/0.jpg";
				document.getElementById(value2+"a").src="images/0.jpg";
			}
			}
		}



