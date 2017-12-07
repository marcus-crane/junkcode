using System;

class ParcelCalculator
{
    static void Main()
    {
        double width, height, length, parcelCost, pricePerCentimetre;
        string widthString, heightString, lengthString;

        pricePerCentimetre = 0.02;

        widthString = Console.ReadLine();
        width = double.Parse(widthString);

        heightString = Console.ReadLine();
        height = double.Parse(heightString);

        lengthString = Console.ReadLine();
        length = double.Parse(lengthString);

        parcelCost = (width * height * length) * pricePerCentimetre;

        Console.WriteLine("Your parcel is approximately $" + parcelCost +
                         " to ship!");
    }
}