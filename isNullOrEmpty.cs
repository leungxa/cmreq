using System;
using ExtensionMethods;

namespace ExtensionMethods
{
    public static class MyExtensions
    {
        public static bool isNullOrEmpty(this String s1)
        {
            if (s1 != null)
            {
                if (s1.Length > 0)
                {
                    return false;
                }
            }
            return true;
        }
    }   
}

class Solution
{
   
    static void Main(string[] args)
    {
        string s = "Hello Extension Methods";
        string s1 = "";
        Console.Write(s.isNullOrEmpty());
        Console.Write(s1.isNullOrEmpty());
    }
    
}
