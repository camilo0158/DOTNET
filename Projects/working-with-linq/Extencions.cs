using System;
using System.Collections.Generic;
using System.Linq;
using System.IO;

namespace working_with_linq
{
    public static class Extencions
    {
        public static IEnumerable<T> InterleaveSequenceWith<T>(this IEnumerable<T> first, IEnumerable<T> second)
        {
            var firstIter = first.GetEnumerator();
            var secondIter = second.GetEnumerator();

            while(firstIter.MoveNext() && secondIter.MoveNext())
            {
                yield return firstIter.Current;
                yield return secondIter.Current;
            }
        }        

        public static bool SequenceEqual<T>(this IEnumerable<T> first, IEnumerable<T> second)
        {
            var firstIter = first.GetEnumerator();
            var secondIter = second.GetEnumerator();

            while(firstIter.MoveNext() && secondIter.MoveNext())
            {
                if(!firstIter.Current.Equals(secondIter.Current))
                {
                    return false;
                }                
            }
            return true;
        }

        public static IEnumerable<T> LogQuery<T>(this IEnumerable<T> sequence, string tag)
        {
            using(var writer = File.AppendText("debug.log"))
            {
                writer.WriteLine($"Execute tag {tag}");
            }

            return sequence;
        }
    }
}