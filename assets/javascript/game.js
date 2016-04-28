var game = {
//  0 for play, 1 for game over	
	states: 0
	grid : [ [" ", " ", " "], [" ", " ", " "], [" ", " ", " "] ],
	spaceSelected: "",
	// 0 for Os, 1 for Xs
	currentPlayer: 1


};

$(".square").on("click", function(){

	game.spaceSelected = $(this).attr("id");

	switch(game.spaceSelected)
	{
		case "1-1":
			if(game.currentPlayer == 0)
			{
				game.grid[1][1] = 0;
				currentPlayer = 1;
			}
			else
			{
				game.grid[1][1] = 1;
				currentPlayer = 0;
			}
			break;

		case "1-2":
			if(game.currentPlayer == 0)
			{
				game.grid[1][2] = 0;
				currentPlayer = 1;
			}
			else
			{
				game.grid[1][2] = 1;
				currentPlayer = 0;
			}
			break;

		case "1-3":
			if(game.currentPlayer == 0)
			{
				game.grid[1][3] = 0;
				currentPlayer = 1;
			}
			else
			{
				game.grid[1][3] = 1;
				currentPlayer = 0;
			}
			break;

		case "2-1":
			if(game.currentPlayer == 0)
			{
				game.grid[2][1] = 0;
				currentPlayer = 1;
			}
			else
			{
				game.grid[2][1] = 1;
				currentPlayer = 0;
			}
			break;

		case "2-2":
			if(game.currentPlayer == 0)
			{
				game.grid[2][2] = 0;
				currentPlayer = 1;
			}
			else
			{
				game.grid[2][2] = 1;
				currentPlayer = 0;
			}
			break;

		case "2-3":
			if(game.currentPlayer == 0)
			{
				game.grid[2][3] = 0;
				currentPlayer = 1;
			}
			else
			{
				game.grid[2][3] = 1;
				currentPlayer = 0;
			}
			break;

		case "3-1":
			if(game.currentPlayer == 0)
			{
				game.grid[3][1] = 0;
				currentPlayer = 1;
			}
			else
			{
				game.grid[3][1] = 1;
				currentPlayer = 0;
			}
			break;

		case "3-2":
			if(game.currentPlayer == 0)
			{
				game.grid[3][2] = 0;
				currentPlayer = 1;
			}
			else
			{
				game.grid[3][2] = 1;
				currentPlayer = 0;
			}
			break;

		case "3-3":
			if(game.currentPlayer == 0)
			{
				game.grid[3][3] = 0;
				currentPlayer = 1;
			}
			else
			{
				game.grid[3][3] = 1;
				currentPlayer = 0;
			}
			break;

		default:
			alert("Something broke!");
	}

	console.log(game.grid);

});