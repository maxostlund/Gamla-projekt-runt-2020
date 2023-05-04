using System;

namespace RockPaperScissors
{
	class Program
	{	
		static void Main()
		{
			int keepPlaying = 1;
			while (keepPlaying == 1) 
			{ 
				Play();
				Console.WriteLine("Do you want to play again?\n1. Keep playing\n0. Quit game");
				keepPlaying = Convert.ToInt32(Console.ReadLine());
				if (keepPlaying == 0) { Environment.Exit(0); }
				else { Main(); }
			}
			 
			static void Error() { Console.WriteLine("Something went wrong!"); }

			static void Play() 
			{
				string[] choice = { "Rock", "Paper", "Scissors" };
				Random random = new Random();
				int indexCPU = random.Next(choice.Length);


				Console.WriteLine("Welcome to ROCK, PAPER, SCISSORS!\nPlease choose one of the following\n1. Rock\n2. Paper\n3. Scissors\nType 1, 2 or 3 for respective choice: \n");
				try
				{
					int indexPlayer = Convert.ToInt32(Console.ReadLine()) - 1;

					if (indexPlayer == indexCPU) { Console.WriteLine("CPU chose " + choice[indexCPU] + " and player chose " + choice[indexPlayer] + ", which means it's a TIE!"); }
					else
					{
						switch (indexCPU)
						{
							case 0:
								if (indexPlayer == 2) { Console.WriteLine("CPU chose " + choice[indexCPU] + " and player chose " + choice[indexPlayer] + ", which means Player LOSES!"); }
								else { Console.WriteLine("CPU chose " + choice[indexCPU] + " and player chose " + choice[indexPlayer] + ", which means Player WINS!"); }
								break;
							case 1:
								if (indexPlayer == 2) { Console.WriteLine("CPU chose " + choice[indexCPU] + " and player chose " + choice[indexPlayer] + ", which means Player WINS!"); }
								else { Console.WriteLine("CPU chose " + choice[indexCPU] + " and player chose " + choice[indexPlayer] + ", which means Player LOSES!"); }
								break;
							case 2:
								if (indexPlayer == 1) { Console.WriteLine("CPU chose " + choice[indexCPU] + " and player chose " + choice[indexPlayer] + ", which means Player LOSES!"); }
								else { Console.WriteLine("CPU chose " + choice[indexCPU] + " and player chose " + choice[indexPlayer] + ", which means Player WINS!"); }
								break;
							default:
								Error();
								break;
						}
					}
				}
				catch { Error(); }
			}
		}

	}
}
