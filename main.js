//Declare vars
var num_one, num_two, answer, calculateBtn;
var num_one_value, num_two_value, answer_value;

//set up my vars
num_one = document.getElementById('num_one');
num_two = document.getElementById('num_two');
answer = document.getElementById('answer');
calculateBtn = document.getElementById('calculateBtn');

calculateBtn.onclick = function(){
	num_one_value = num_one.value;
	num_two_value = num_two.value;
	num_one_value = Number(num_one_value);
	num_two_value = Number(num_two_value);

	answer_value = num_one_value + num_two_value;
  answer.innerHTML = answer_value;
}






/* 1. Watch for button click
	2. When click happens grab input form num_one 
	and num_two fields.
	3. Add to fields
	4. Send output next to answer text



		


 */