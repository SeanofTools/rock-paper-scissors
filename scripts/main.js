        let userInput;
        //user click will determine what gets returned
        const userRock = () => {
		document.getElementById('rock').style.opacity = 1;
		document.getElementById('paper').style.opacity = 0.4;
		document.getElementById('scissors').style.opacity = 0.4;
		userInput = 'rock';
	 }
        const userPaper = () => {
		document.getElementById('rock').style.opacity = 0.4;
		document.getElementById('paper').style.opacity = 1;
		document.getElementById('scissors').style.opacity = 0.4;
		userInput = 'paper';
	 }
        const userScissors = () => {
		document.getElementById('rock').style.opacity = 0.4;
		document.getElementById('paper').style.opacity = 0.4;
		document.getElementById('scissors').style.opacity = 1;
		userInput = 'scissors';
	 }
        const userCheat = () => {
		document.getElementById('rock').style.opacity = 1;
		document.getElementById('paper').style.opacity = 1;
		document.getElementById('scissors').style.opacity = 1;
		userInput = 'gun'
	}

	 //declare scores
	 var userScore = 0;
	 var cpuScore = 0;

        
            //compares user input to cpu output to decide a winner. Game function
        const checkResult = (user) => {
    //roll a num from 0-2
        	let cpuMove = Math.floor(Math.random() * 3);
            //assign a word to the number declared earlier
       		const getCpuMove = num => {
           	 if (num === 0) {
                	return 'rock'
            		} else if (num === 1) {
               	 return 'paper'
           	 } else if (num === 2) {
            	    return 'scissors'
           	 }
             }
	  let cpMove = getCpuMove(cpuMove);

            if (user === cpMove) {
                document.getElementById("compResult").innerHTML = 'You used '+ user.toUpperCase() +' and the CPU used '+ cpMove.toUpperCase() +'. It\s a draw!';
			} else if (user === 'rock' && cpMove === 'paper') {
                document.getElementById("compResult").innerHTML = 'You used ROCK and the CPU used PAPER. The CPU wins!';
					cpuScore++;
			} else if (user === 'paper' && cpMove === 'scissors') {
                document.getElementById("compResult").innerHTML = 'You used PAPER and the CPU used SCISSORS. The CPU wins!';
			cpuScore++;
			} else if (user === 'scissors' && cpMove === 'rock') {
                document.getElementById("compResult").innerHTML = 'You used SCISSORS and the CPU used ROCK. The CPU wins!';
			cpuScore++;
			} else if (user === 'gun') { 
                document.getElementById("compResult").innerHTML = 'You brought a gun to a game of Rock, Paper, Scissors?! Take your win and go away!';
			userScore++;
            } else {
                document.getElementById("compResult").innerHTML = 'You used '+ user.toUpperCase() +' and the CPU used '+ cpMove.toUpperCase() +'. You win!'; 
			userScore++;
            }
		document.getElementById("userScoreCount").innerHTML = ' '+userScore;
		document.getElementById("cpuScoreCount").innerHTML = ' '+cpuScore;
          }
