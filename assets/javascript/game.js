// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    console.log("yo");    
   

    //Have a randome word that when I press keys
    //need to have some words we can chose from
    var wordArray = ["baseball", "basketball", "football", "soccer", "hockey", "cricket", "fishing", "poker",
					"racing", "darts", "polo", "regatta", "bowling", "dodgeball", "archery", "volleyball", "boxing",
					"fencing", "golf", "surfing", "wrestling", "squash", "raquetball", "lacrosse"];
    //need to chose one of those words at random
    // console.log(Math.floor(Math.random() * wordArray.length));

    var rando = Math.floor(Math.random() * wordArray.length);
    console.log(wordArray[rando]);
    //show blanks spaces to user to show how many letters  in word

    console.log(wordArray[rando].split(""));
    var splitWordA = wordArray[rando].split("");
    var chosenWUnderscore = [];
    var remGuesses = 5;
    var currentLosses = 0;
    var currentWins = 0;
    var gameScoreChange;
    var guessedLetters = [];
    

    for (var i = 0; i < splitWordA.length; i++) {

    	//gen underscore
    	//push tthat array   	
    	chosenWUnderscore.push("_")
    }

    //show that array on screen
	//display on screen so user can see its
    document.getElementById("currentWord").innerHTML = chosenWUnderscore.join(" ");
    
    //see if this key i pressed exists in thsi word
    //function that listens for key presses
   document.addEventListener("keyup", function() {
   console.log(event);


   	//user key they guessed
   	console.log(event.key);
 	var userGuess = event.key;

 	guessedLetters.push(userGuess);
	document.getElementById("guessedLetters"). innerHTML = guessedLetters.join("   ");


   	for (var i = 0; i < splitWordA.length; i++) {

   		if (userGuess == splitWordA[i]) {
   			console.log("you found me");
			chosenWUnderscore[i] = userGuess;  
   			console.log(i);
   			console.log([splitWordA]);   						
   		}
   	}  	

   		if (splitWordA.includes(userGuess)) {
   			console.log("boya!");
   		}

   		else {
   			console.log("Sorry Charlie!");
   			remGuesses--;
   		}		
 
	document.getElementById("currentWord").innerHTML = chosenWUnderscore.join(" ");
	document.getElementById("remGuesses").innerHTML = remGuesses;			
		

   					if (chosenWUnderscore.join(" ") == splitWordA.join(" ")) {					

						remGuesses = 5;
						guessedLetters = [];
						alert("You Win!");

						document.getElementById("remGuesses").innerHTML = remGuesses;
						document.getElementById("winTotal").innerHTML = ++currentWins;
						document.getElementById("guessedLetters").innerHTML = guessedLetters.join(" ");

						 rando = Math.floor(Math.random() * wordArray.length);
						   	 splitWordA = wordArray[rando].split("");
							 chosenWUnderscore = [];
				   			 console.log(splitWordA);

								   		for (var i = 0; i < splitWordA.length; i++) {
								   			chosenWUnderscore.push("_")
								   		}
								   		document.getElementById("currentWord").innerHTML = chosenWUnderscore.join(" ");

					
					}						
   			

					if (remGuesses < 1) {

						remGuesses = 5;
						guessedLetters = [];

						alert("You Lost!");
						document.getElementById("remGuesses").innerHTML = remGuesses;
						document.getElementById("lossTotal").innerHTML = ++currentLosses;
						document.getElementById("guessedLetters").innerHTML = guessedLetters.join(" ");
						
						 rando = Math.floor(Math.random() * wordArray.length);
					   	 splitWordA = wordArray[rando].split("");
						 chosenWUnderscore = [];
			   			 console.log(splitWordA);

							   		for (var i = 0; i < splitWordA.length; i++) {
							   			chosenWUnderscore.push("_")
							   		}

				   		document.getElementById("currentWord").innerHTML = chosenWUnderscore.join(" "); 
					}				
   })

   document.getElementById("resetButton").onclick = function() {reloadFunction()};
      
	   function reloadFunction() {
	     location.reload();
	   }




    

    

  









