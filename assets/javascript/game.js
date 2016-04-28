var game = {
//  0 for play, 1 for game over	
	states: 0,
	grid : [ ["-1", "-2", "-3"], ["-1", "-2", "-3"], ["-1", "-2", "-3"] ],
	spaceSelected: "",
	// 0 for Os, 1 for Xs
	currentPlayer: 1,
	gameWon: false,
	testVariableSame: true
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
				}
				else
				{
					game.grid[0][0] = 1;
					game.currentPlayer = 0;
				}
				break;

			case "1-2":
				if(game.currentPlayer == 0)
				{
					game.grid[0][1] = 0;
					game.currentPlayer = 1;
				}
				else
				{
					game.grid[0][1] = 1;
					game.currentPlayer = 0;
				}
				break;

			case "1-3":
				if(game.currentPlayer == 0)
				{
					game.grid[0][2] = 0;
					game.currentPlayer = 1;
				}
				else
				{
					game.grid[0][2] = 1;
					game.currentPlayer = 0;
				}
				break;

			case "2-1":
				if(game.currentPlayer == 0)
				{
					game.grid[1][0] = 0;
					game.currentPlayer = 1;
				}
				else
				{
					game.grid[1][0] = 1;
					game.currentPlayer = 0;
				}
				break;

			case "2-2":
				if(game.currentPlayer == 0)
				{
					game.grid[1][1] = 0;
					game.currentPlayer = 1;
				}
				else
				{
					game.grid[1][1] = 1;
					game.currentPlayer = 0;
				}
				break;

			case "2-3":
				if(game.currentPlayer == 0)
				{
					game.grid[1][2] = 0;
					game.currentPlayer = 1;
				}
				else
				{
					game.grid[1][2] = 1;
					game.currentPlayer = 0;
				}
				break;

			case "3-1":
				if(game.currentPlayer == 0)
				{
					game.grid[2][0] = 0;
					game.currentPlayer = 1;
				}
				else
				{
					game.grid[2][0] = 1;
					game.currentPlayer = 0;
				}
				break;

			case "3-2":
				if(game.currentPlayer == 0)
				{
					game.grid[2][1] = 0;
					game.currentPlayer = 1;
				}
				else
				{
					game.grid[2][1] = 1;
					game.currentPlayer = 0;
				}
				break;

			case "3-3":
				if(game.currentPlayer == 0)
				{
					game.grid[2][2] = 0;
					game.currentPlayer = 1;
				}
				else
				{
					game.grid[2][2] = 1;
					game.currentPlayer = 0;
				}
				break;

			default:
				alert("Something broke!");
		}

		console.log(game.grid);

		//test for horizontal win
		for(var i = 0; i < game.grid.length; i++)
		{
			if (game.gameWon == false)
			{
				var controlVar = game.grid[i][0];
				for(var y = 0; y < 3; y++)
				{
					if((controlVar != game.grid[i][y]) && (game.testVariableSame == true))
						game.testVariableSame == false;
				}
			
				if(game.testVariableSame == true)
				{
					game.gameWon = true;
					alert("You've won!!!");
				}
			}
		}
	}
});