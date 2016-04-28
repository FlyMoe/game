var game = {
	//grid initiated to all garbage values, non repeating, 0 for O, 1 for X
	grid : [ ["G", "A", "R"], ["B", "A", "G"], ["E", "!", "~"] ],
	spaceSelected: "",
	// 0 for Os, 1 for Xs
	currentPlayer: 1,
	gameWon: false,
	testVariableSame: true,
	exes: function (){
		$("#"+game.spaceSelected).html('<img id="exes" src="assets/images/tic-tac-toe-X.png">')
	},
	ohs: function(){
		$("#"+game.spaceSelected).html('<img id="ohs" src="assets/images/tic-tac-toe-O.png">')
	}
};

$(".square").on("click", function(){
	if(game.gameWon == false)
	{

		game.spaceSelected = $(this).attr("id");

		switch(game.spaceSelected)
		{
			case "1-1":
			if(game.currentPlayer == 0)
			{
				game.grid[0][0] = 0;
				game.currentPlayer = 1;
				game.ohs();
			}
			else
			{
				game.grid[0][0] = 1;
				game.currentPlayer = 0;
				game.exes();
			}
			break;

			case "1-2":
			if(game.currentPlayer == 0)
			{
				game.grid[0][1] = 0;
				game.currentPlayer = 1;
				game.ohs();
			}
			else
			{
				game.grid[0][1] = 1;
				game.currentPlayer = 0;
				game.exes();
			}
			break;

			case "1-3":
			if(game.currentPlayer == 0)
			{
				game.grid[0][2] = 0;
				game.currentPlayer = 1;
				game.ohs();
			}
			else
			{
				game.grid[0][2] = 1;
				game.currentPlayer = 0;
				game.exes();
			}
			break;

			case "2-1":
			if(game.currentPlayer == 0)
			{
				game.grid[1][0] = 0;
				game.currentPlayer = 1;
				game.ohs();
			}
			else
			{
				game.grid[1][0] = 1;
				game.currentPlayer = 0;
				game.exes();
			}
			break;

			case "2-2":
			if(game.currentPlayer == 0)
			{
				game.grid[1][1] = 0;
				game.currentPlayer = 1;
				game.ohs();
			}
			else
			{
				game.grid[1][1] = 1;
				game.currentPlayer = 0;
				game.exes();
			}
			break;

			case "2-3":
			if(game.currentPlayer == 0)
			{
				game.grid[1][2] = 0;
				game.currentPlayer = 1;
				game.ohs();
			}
			else
			{
				game.grid[1][2] = 1;
				game.currentPlayer = 0;
				game.exes();
			}
			break;

			case "3-1":
			if(game.currentPlayer == 0)
			{
				game.grid[2][0] = 0;
				game.currentPlayer = 1;
				game.ohs();
			}
			else
			{
				game.grid[2][0] = 1;
				game.currentPlayer = 0;
				game.exes();
			}
			break;

			case "3-2":
			if(game.currentPlayer == 0)
			{
				game.grid[2][1] = 0;
				game.currentPlayer = 1;
				game.ohs();
			}
			else
			{
				game.grid[2][1] = 1;
				game.currentPlayer = 0;
				game.exes();
			}
			break;

			case "3-3":
			if(game.currentPlayer == 0)
			{
				game.grid[2][2] = 0;
				game.currentPlayer = 1;
				game.ohs();
			}
			else
			{
				game.grid[2][2] = 1;
				game.currentPlayer = 0;
				game.exes();
			}
			break;

			default:
				alert("Something broke!");
		}

		//test for horizontal win
		for(var i = 0; i < game.grid.length; i++)
		{
			if (game.gameWon == false)
			{
				//tests all columns against first value in first row
				var controlVar = game.grid[i][0];
				for(var j = 0; j < game.grid[i].length; j++)
				{
					//if a value is found to not be equal a win is not met
					if(controlVar != game.grid[i][j])
					{
						game.testVariableSame = false;
					}
				}
				//if false has not been flagged, all values are equal in row. Therefore win.
				if(game.testVariableSame == true)
				{
					game.gameWon = true;
					alert("You've won!!!");
				}
				//resets the variable test for the next run
				game.testVariableSame = true;
			}
		}

		//test for vertical win
		for(var i = 0; i < game.grid.length; i++)
		{
			if (game.gameWon == false)
			{
				//tests all rows against first value in first column
				var controlVar = game.grid[0][i];
				for(var j = 0; j < game.grid[i].length; j++)
				{
					//if a value is found to not be equal a win is not met
					if(controlVar != game.grid[j][i])
					{
						game.testVariableSame = false;
					}
				}
				//if false has not been flagged, all values are equal in row. Therefore win.
				if(game.testVariableSame == true)
				{
					game.gameWon = true;
					alert("You've won!!!");
				}
				//resets the variable test for the next run
				game.testVariableSame = true;
			}
		}


		//test for first diagonal
			//if a value is found to not be equal a win is not met
			if((game.grid[0][0] != game.grid[1][1]) || (game.grid[0][0] != game.grid[2][2]))
			{
				game.testVariableSame = false;
			}
		//if false has not been flagged, all values are equal in row. Therefore win.
			if(game.testVariableSame == true)
			{
				game.gameWon = true;
				alert("You've won!!!");
			}
		//resets the variable test for the next run
			game.testVariableSame = true;


		//test for second diagonal
			//if a value is found to not be equal a win is not met
			if((game.grid[0][2] != game.grid[1][1]) || (game.grid[0][2] != game.grid[2][0]))
			{
				game.testVariableSame = false;
			}
		//if false has not been flagged, all values are equal in row. Therefore win.
			if(game.testVariableSame == true)
			{
				game.gameWon = true;
				alert("You've won!!!");
			}
		//resets the variable test for the next run
			game.testVariableSame = true;

	}
});