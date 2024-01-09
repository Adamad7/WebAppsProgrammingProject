<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\DeliveryDetails;
use App\Models\User;
use App\Models\Cart;

class OrderController extends Controller
{
    public function placeOrder(Request $request) {

        if(auth()->user()->cart->cartItems->isEmpty()) {
            return redirect()->route('cart.index', ['order_status' => 'Nie udało się złożyć zamówienia. Koszyk jest pusty.']);
        }
        
        $request->validate([
            'first_name' => 'required|string|regex:/^([A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+( [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?)$/',
            'last_name' => 'required|string|regex:/^([A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?)$/',
            'postal_code' => 'required|string|regex:/^[0-9]{2}-[0-9]{3}$/',
            'city' => 'required|string|regex:/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż\- ]{1,50}$/',
            'street' => 'required|string|regex:/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż\- ]{1,50}$/',
            'house_number' => 'required|string|regex:/^[0-9]{1,6}[a-zA-Z]{0,2}$/',
            'phone_number' => 'required|string|regex:/^[0-9]{3}[\- ]?[0-9]{3}[\- ]?[0-9]{3}$/',
            'payment_method' => 'required|string|in:credit_card,debit_card,paypal,transfer,blik,cash',
            'delivery_method' => 'required|string|in:dhl,dpd,pocztex,inpost',
        ]);

        $deliveryDetails = new DeliveryDetails([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'postal_code' => $request->postal_code,
            'city' => $request->city,
            'street' => $request->street,
            'house_number' => $request->house_number,
            'phone_number' => $request->phone_number,
            'payment_method' => $request->payment_method,
            'delivery_method' => $request->delivery_method,
        ]);

        $deliveryDetails->save();


        $order = new Order();
        $order->user_id = auth()->user()->id;
        $order->cart_id = auth()->user()->cart->id;
        $order->delivery_details_id = $deliveryDetails->id;
        $order->save();

        $newCart = new Cart();
        $newCart->save();
        auth()->user()->cart_id = $newCart->id;
        auth()->user()->save();

        return redirect()->route('cart.index', ['order_status' => 'Zamówienie zostało złożone. Dziękujemy!']);
    }
}
