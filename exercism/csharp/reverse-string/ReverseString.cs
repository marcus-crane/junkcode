﻿using System;

public static class ReverseString
{
    public static string Reverse(string input)
    {
        return new string(input.ToCharArray().Reverse());
    }
}
