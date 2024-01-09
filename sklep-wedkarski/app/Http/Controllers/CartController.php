<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\CartItem;
use App\Models\Cart;

class CartController extends Controller
{
    public function index(Request $request)
    {
        $cartItems = auth()->user()->cart->cartItems;
        return view('cart', ['cartItems' => $cartItems, 'order_status' => $request->order_status]);
    }

    public function addItem($productId) {
        $product = Product::where('id', $productId)->first();

        $cart = auth()->user()->cart;
        if ($cart->cartItems->contains('product_id', $product->id)) {
            $cartItem = $cart->cartItems->where('product_id', $product->id)->first();
            $cartItem->quantity += 1;
            $cartItem->save();
        }
        else {
            $cartItem = new CartItem();
            $cartItem->cart_id = $cart->id;
            $cartItem->product_id = $product->id;
            $cartItem->quantity = 1;
            $cartItem->save();
        }
        $cart->total_price += $product->product_price;
        $cart->save();
        return redirect()->route('cart.index');
        
    }

    public function removeItem($productId) {
        $product = Product::where('id', $productId)->first();
        $cart = auth()->user()->cart;
        if ($cart->cartItems->contains('product_id', $product->id)) {
            $cartItem = $cart->cartItems->where('product_id', $product->id)->first();
            if ($cartItem->quantity > 1) {
                $cartItem->quantity -= 1;
                $cartItem->save();
            }
            else {
                $cartItem->delete();
            }
        }
        $cart->total_price -= $product->product_price;
        $cart->save();
        return redirect()->route('cart.index');
    }

    public function deleteItem($productId) {
        $cart = auth()->user()->cart;
        if ($cart->cartItems->contains('product_id', $productId)) {
            $cartItem = $cart->cartItems->where('product_id', $productId)->first();
            $cart->total_price -= $cartItem->product->product_price * $cartItem->quantity;
            $cartItem->delete();
            $cart->save();
        }
        
        return redirect()->route('cart.index');
    }

}
