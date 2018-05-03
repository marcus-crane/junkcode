package de.thingsima.justjava;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.TextView;

import java.text.NumberFormat;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    int quantity = 2;
    double price = 2.50;

    public void incrementQuantity(View view) {
        quantity += 1;
        display(quantity);
    }

    public void decrementQuantity(View view) {
        quantity -= 1;
        display(quantity);
    }

    public void submitOrder(View view) {
        display(quantity);
        displayPrice(quantity * price);
    }

    private void display(int number) {
        TextView quantityTextView = (TextView) findViewById(R.id.quantity_text_view);
        quantityTextView.setText(Integer.toString(number));
    }

    private void displayPrice(double number) {
        TextView priceTextView = (TextView) findViewById(R.id.price_text_view);
        priceTextView.setText("Total: " + NumberFormat.getCurrencyInstance().format(number) + "\nThank You!");
    }
}