// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["r", "p", "s"];
    var wins = 0;
    var losses = 0;
    var ties = 0;

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;
      document.getElementById("userChoice").textContent = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      document.getElementById("computerChoice").textContent = computerGuess;

      // Alerts the key the user pressed (userGuess).
      alert("User guess: " + userGuess);

      // Alerts the Computer's guess.
      alert("Computer guess: " + computerGuess);

      if ((userGuess === "r" || userGuess === "p" || userGuess === "s")) {
        // if ((userGuess === "r") && (computerGuess === "s")) {
        //   document.getElementById("userWins").innerHTML = wins++;
        // }

        // else if ((userGuess === "r") && (computerGuess === "r")) {
        //   document.getElementById("userTies").innerHTML = ties++;
        // }

        // else if ((userGuess === "r") && (computerGuess === "p")) {
        //   document.getElementById("userLoses").innerHTML = losses++;
        // }

        if (userGuess === computerGuess) {
          document.getElementById("userTies").textContent = ++ties;
          alert("You Tied");
        }

        else if ((userGuess === "r") && (computerGuess === "s")) {
          document.getElementById("userWins").textContent = ++wins;
          alert("You Win!");
        }

        else if ((userGuess === "p") && (computerGuess === "r")) {
          document.getElementById("userWins").textContent = ++wins;
          alert("You Win!");
        }

        else if ((userGuess === "s") && (computerGuess === "p")) {
          document.getElementById("userWins").textContent = ++wins;
          alert("You Win!");
        }

        else {
          document.getElementById("userLoses").textContent = ++losses;
          alert("You Lost");
        }

      }
    }
