    var flashcard = document.getElementById('flashcard');
	var prev = document.querySelector('#prev');
	var flip = document.querySelector('#flip');
	var next = document.querySelector('#next');
		
        /*Change the questions to whatever you want! Remember to stick to the theme of music this month.*/
		var questions=[
			"Is it better to eat fried or baked potatoes?",
			"Question 2?",
			"Question 3?",
			"Question 4?",
			"Question 5?",
			"Question 6?"
		];


		
		var images=[
			"https://images.unsplash.com/photo-1520944052104-261c48c33a35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
			"", // can we add images in here 
			"",
			"",
			"",
			""
		];
		
		var answers=[
			"Baked Potato",
			"Anwer 2",
			"Answer 3",
			"Answer 4",
			"Answer 5",
			"Answer 6"
		];
		// please explain this part 
		var currentText = questions[0];
		var questionNumber = 0;
		var cardState = 0;
		// /*!-- 0 indicates the front question side and 1 indicates the back answer side*/

		updateFront();  // what does this code do
		updateBack();

		function flipCard()
		{
			if(cardState==0){         // what is the function of cardState == 0
				currentText = answers[questionNumber];
				cardState++;
				updateBack();
			}
			
			else{
				currentText = questions[questionNumber];
				cardState--;
				updateFront();
			}
		}
		// please expain this part completely 
		function nextCard()
		{
			var length = questions.length;

			if(questionNumber<length-1)
				questionNumber++;
			else
				questionNumber=0;
			
			if(cardState==0){
				currentText = questions[questionNumber];
				updateFront();
			}
			else{
				flipCard();
				flashcard.classList.toggle('flipped');
				updateText();
			}

		}
		
		function previousCard()
		{
			var length = questions.length;
			if(questionNumber>0)
				questionNumber--;
			else
				questionNumber=length-1;
			
			if(cardState==0){
				currentText = questions[questionNumber];
				updateFront();
			}
			else{
				flipCard();
				flashcard.classList.toggle('flipped');
				updateText();
			}
		}
		
		// /*Updates the text shown on the flashcard after a button press.*/
		function updateFront(){
			document.getElementById("flashcard-content-front").innerHTML = currentText;
			
		}
		function updateBack(){
			document.getElementById("flashcard-content-back").innerHTML = currentText;
			document.getElementById("card-image").src = images[questionNumber];
		}
		
		flip.addEventListener('click', flipCard);
		prev.addEventListener('click', previousCard);
		next.addEventListener('click', nextCard);
		
		flip.addEventListener('click', function() {
			flashcard.classList.toggle('flipped');
			updateText();
		}, false);    


		// function functionThatReturn() {
		// 	return 'Hello world';
		// }
		// var a = functionThatReturn();
		// console.log(a)

		// function functionThatReturn(string) {
		// 	return string
		// }
		// var a = functionThatReturn();
		// console.log(a)

		// function add(a, b) {
		// 	return a + b
		// }
		// var result = add(1, 20)

		// function addEvent() {
		// 	var div = document.createElement("div");
		// 	document.body.appendChild(div)
		// 	div.classList.add
		// }