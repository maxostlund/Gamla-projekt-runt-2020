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
            
            System.Console.WriteLine("Whatcha neme");

            try
            {
                string name = Console.ReadLine();
                Console.WriteLine("ya neme e " + name);
            }
            catch 
            {
                Console.WriteLine("nigga yo name aint");
            }
            Console.ReadLine();
        }
    }
}
