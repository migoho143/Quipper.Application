function validatetest(){
	var _option = document.getElementsByTagName('input');
	var checkanswer = [0,7,9,12,16,20,24,28,35,36];
	
	for(var pointer = 0; pointer < _option.length; pointer++){
		for(var i = 0; i < checkanswer.length; i++){
			if(pointer == checkanswer[i] ){
				if(_option[pointer].checked){
					//calculate the total correct answer
					if (localStorage.questions1correct) {
						localStorage.questions1correct = Number(localStorage.questions1correct)+1;
					} else {
						localStorage.questions1correct = 1;
					}
				}else{
					//calculate the total Wrong answer
					if (localStorage.questions1wrong) {
						localStorage.questions1wrong = Number(localStorage.questions1wrong)+1;
					} else {
						localStorage.questions1wrong = 1;
					}
					localStorage.questions1correct = 0;
				}
			}
		}
			
		
	}
	if(localStorage.questions1correct && localStorage.questions1wrong  ){
		document.getElementById('questions1totalitem').innerHTML = localStorage.questions1totalitem;
		document.getElementById('questions1correct').innerHTML = localStorage.questions1correct ;
		document.getElementById('questions1wrong').innerHTML = localStorage.questions1wrong;
		document.getElementById('questions1percentage').innerHTML = (parseInt(localStorage.questions1correct)/parseInt(localStorage.questions1totalitem)) * 100 + '%';
		//document.write(localStorage.questions1correct);
	}else{
		document.write('0');
	}
	
	
}


function hide(){
	for(var i = 2; i <= 10; i++){
		$('#'+i).hide();
	}
	$('#test1result').hide();
	
	
}