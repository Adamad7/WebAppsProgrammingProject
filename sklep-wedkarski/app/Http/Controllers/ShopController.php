<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductCategory;

class ShopController extends Controller
{
    public function index()
    {
        return view('shop');
    }

    public function showCategory($category) {
        $categoryId = ProductCategory::where('category_name', $category)->first()->id;
        $products = Product::where('product_category_id', $categoryId)->get();

        $categoryNames = [
            'spinning_rods' => 'Wędziska spinningowe',
            'carp_rods' => 'Wędziska karpiowe',
            'front_reels' => 'Kołowrotki z przednim hamulcem',
            'back_reels' => 'Kołowrotki z tylnym hamulcem',
            'main_strings' => 'Żyłki główne',
            'artificial_baits' => 'Przynęty sztuczne',
            'natural_baits' => 'Przynęty naturalne',
        ];
        return view('shop', ['products' => $products, 'categoryName' => $categoryNames[$category]]);
    }
}
