
		$(document).ready(function(){

			$(":text").keyup(function(){
			//recuperar os valores de todos os inputs e armazenar em variaceis
					
			var inp1 = parseInt($("#inp1").val(), 10)
			var inp2 = parseInt($("#inp2").val(), 10)
			var inp3 = parseInt($("#inp3").val(), 10)
			var inp9 = parseInt($("#inp9").val(), 10)
			var inp4 = parseInt($("#inp4").val(), 10)
			var inp5 = parseInt($("#inp5").val(), 10)
			var inp6 = parseInt($("#inp6").val(), 10)
			var inp7 = parseInt($("#inp7").val(), 10)
			var inp8 = parseInt($("#inp8").val(), 10)
			var inp9 = parseInt($("#inp9").val(), 10)					
			//toda vez que hover uma jogada eu vou verificar
			if( //orizontal
				inp1 + inp2 + inp3 === 15 &&
				inp4 + inp5 + inp6 === 15 &&
				inp7 + inp8 + inp9 === 15 &&
				//vertical	
				inp1 + inp4 + inp7 === 15 &&
				inp2 + inp5 + inp8 === 15 &&
				inp3 + inp6 + inp9 === 15 &&
				//diagonais
				inp1 + inp5 + inp9 === 15 &&
				inp7 + inp5 + inp3 === 15 ){
				$(".resultado").html("<h3>Parabéns, você venceu!!</h3>")
				$("#body").replaceWith("<audio src='aplausos.mp3' autoplay='autoplay'></audio>")
				//registrando tempo decorrido...

				setTimeout(function(){
					location.reload();
				}, 5000)

			
			}
	
				if(  $("#tuto").is(":checked")){
					if (inp1 === 2 && inp5 === 5 && inp2 === 9 && 
						inp3 != 1)
						{
							alert("você está indo bem!")

						}
				}//fim de if 1
				
			})//fim da função keyup

			$(".help").click(function(){
				$(".ajuda").css("opacity", "1")
				setTimeout(function(){
					$(".ajuda").css("opacity", "0")
				}, 8000)

			

			});


			$(".but2").click(function(){
				location.reload();
			})
		
		//cronometro//função nova
		var i=0, i2 =0;
		setInterval(function(){
		i++;
		var tempS = $(".cro").val();
		$(".cro").val(i)
		if (tempS >58)	
			{i = 0; } }, 1000)
		setInterval(function(){
		i2++;
		$(".cro2").val(i2)
		},60000)


	
			
		});//fim de função principal
