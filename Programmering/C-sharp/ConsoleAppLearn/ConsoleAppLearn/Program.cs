using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleAppLearn
{
    class Program
    {
        static void Main(string[] args)
        {
            
            System.Console.WriteLine("What is your name");

            try
            {
                string name = Console.ReadLine();
                Console.WriteLine("So your name is " + name);
            }
            catch 
            {
                Console.WriteLine("That's not your name");
            }
            Console.ReadLine();
        }
    }
}
