// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    console.log("yo")    
   

    //Have a randome word that when I press keys
    //need to have some words we can chose from
    var wordArray = ["baseball", "basketball", "football", "soccer", "hockey", "cricket"];
    //need to chose one of those words at random
    // console.log(Math.floor(Math.random() * wordArray.length));

    var rando = Math.floor(Math.random() * wordArray.length);
    console.log(wordArray[rando]);
    //show blanks spaces to user to show how many letters  in word

    console.log(wordArray[rando].split(""));
    var splitWordA = wordArray[rando].split("");
    var chosenWUnderscore = [];
    var remGuesses = 10;
    var currentLosses = 0;
    var currentWins = 0;
    var gameScoreChange
 

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
   	for (var i = 0; i < splitWordA.length; i++) {

   		if (userGuess == splitWordA[i]) {
   			console.log("you found me");
   			// console.log("this is what you are looking for: " + splitWordA[3]);
   			chosenWUnderscore[i] = userGuess;  
   			remGuesses = remGuesses + 1; 			
   		}

   		// else if (userGuess !== splitWordA[3]) {
   		// 	console.log("not the one");
   		// }
   	}
	
	document.getElementById("currentWord").innerHTML = chosenWUnderscore.join(" ");	
		

		// if (userGuess !== splitWordA[i]) {
		// 	// remGuesses = remGuesses - 1;
		// 	console.log("not the one");

		// }

	// document.getElementById("remGuesses").innerHTML = remGuesses;		
			
		})
   			document.addEventListener("keyup", function() {

   					if (chosenWUnderscore.join(" ") == splitWordA.join(" ")) {
					alert("You Win!")

					var addWin = (currentWins = currentWins + 1);
					// alert("You Lost!");
					document.getElementById("winTotal").innerHTML = addWin;
					var wordArray = ["baseball", "basketball", "football", "soccer", "hockey", "cricket"];
					var rando = Math.floor(Math.random() * wordArray.length);
				}					
   			})	


				   document.addEventListener("keyup", function() {

				   		var userGuess = event.key;

				   	 if (userGuess != splitWordA) {
							var guessesLeft = (remGuesses = remGuesses - 1);
							document.getElementById("remGuesses").innerHTML = guessesLeft;
						};

					if (remGuesses < 1) {

						var addLoss = (currentLosses = currentLosses + 1);
						alert("You Lost!");
						document.getElementById("lossTotal").innerHTML = addLoss;
						var wordArray = ["baseball", "basketball", "football", "soccer", "hockey", "cricket"];
							   	var rando = Math.floor(Math.random() * wordArray.length);
							   	var splitWordA = wordArray[rando].split("");
							   	var chosenWUnderscore = [];
							   	console.log(splitWordA);

							   		for (var i = 0; i < splitWordA.length; i++) {
							   			chosenWUnderscore.push("_")
							   		}
							   		document.getElementById("currentWord").innerHTML = chosenWUnderscore.join(" "); 
							}			
				   })


   document.onclick = function reloadFunction() {
   	location.reload();
   }




			

   // })


   // if its not in the word i want to see that it wasnt in the word
   //I want to know if I can win or lose and see on the screen

   











  //  document.addEventListener("keyup", function() { 

		// if (remGuesses < 1)  {
		// 		var wordArray = ["baseball", "basketball", "football", "soccer", "hockey", "cricket"];
		// 	   	var rando = Math.floor(Math.random() * wordArray.length);
		// 	   	var splitWordA = wordArray[rando].split("");
		// 	   	var chosenWUnderscore = [];
		// 	   	console.log(splitWordA);

		// 	   		for (var i = 0; i < splitWordA.length; i++) {
		// 	   			chosenWUnderscore.push("_")
		// 	   		}

		// 	   		document.getElementById("currentWord").innerHTML = chosenWUnderscore.join(" ");  	
    						
    

		// 	}

		// })


    

    

  









