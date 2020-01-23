using System;
using System.Collections.Generic;
using System.Linq;

namespace working_with_linq
{
    class Program
    {
        static void Main(string[] args)
        {
            var startingDeck = (from s in Suits().LogQuery("Suit generation")
                               from r in Ranks().LogQuery("Rank generation")
                               select new  { Suit = s, Rank = r }).LogQuery("Starting deck")
                               .ToArray();

            foreach (var card in startingDeck)
            {
                Console.WriteLine(card);
            }

            Console.WriteLine("<<===================================>>");

            var top = startingDeck.Take(26);
            var bottom = startingDeck.Skip(26);
            var shuffle = top.InterleaveSequenceWith(bottom);

            foreach (var c in shuffle)
            {
                Console.WriteLine(c);
            }

            Console.WriteLine("<<===================================>>");

            var times = 0;
            shuffle = startingDeck;

            do
            {
                shuffle = shuffle.Skip(26).LogQuery("Botton half")
                .InterleaveSequenceWith(shuffle.Take(26)).LogQuery("Top half")
                .LogQuery("Shuffle")
                .ToArray();

                foreach (var card in shuffle)
                {
                    Console.WriteLine(card);
                }
                Console.WriteLine($"<<=================={times}================>>");
                times++;
            } while (!startingDeck.SequenceEqual(shuffle));
            Console.WriteLine(times);
        }      
        static IEnumerable<string> Suits()
        {
            yield return "clubs";
            yield return "diamonds";
            yield return "hearts";
            yield return "spades";
        }

        static IEnumerable<string> Ranks()
        {
            yield return "two";
            yield return "three";
            yield return "four";
            yield return "five";
            yield return "six";
            yield return "seven";
            yield return "eight";
            yield return "nine";
            yield return "ten";
            yield return "jack";
            yield return "queen";
            yield return "king";
            yield return "ace";
        }

        
    }
}
