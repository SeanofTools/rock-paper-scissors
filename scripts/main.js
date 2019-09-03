        let userInput;
        //user click will determine what gets returned
        const userRock = () => userInput = 'rock'
        const userPaper = () => userInput = 'paper'
        const userScissors = () => userInput = 'scissors'
        const userCheat = () => userInput = 'gun'
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
                alert('You used '+ user +' and the CPU used '+ cpMove +'. It\s a draw!') 
			} else if (user === 'rock' && cpMove === 'paper') {
                alert('You used ROCK and the CPU used PAPER. The CPU wins!') 
			cpuScore++;
			} else if (user === 'paper' && cpMove === 'scissors') {
                alert('You used PAPER and the CPU used SCISSORS. The CPU wins!') 
			cpuScore++;
			} else if (user === 'scissors' && cpMove === 'rock') {
                alert('You used SCISSORS and the CPU used ROCK. The CPU wins!') 
			cpuScore++;
			} else if (user === 'gun') { 
                alert('You brought a gun to a game of Rock, Paper, Scissors?! Take your win and go away!') 
			userScore++;
            } else {
                alert('You used '+ user.toUpperCase() +' and the CPU used '+ cpMove.toUpperCase() +'. You win!') 
			userScore++;
            }
		document.getElementById("userScoreCount").innerHTML = ' '+userScore;
		document.getElementById("cpuScoreCount").innerHTML = ' '+cpuScore;
          }
