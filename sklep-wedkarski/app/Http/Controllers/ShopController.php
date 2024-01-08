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
        // $products = Product::where('product_category_id', $id)->get();
        // $categoryName = ProductCategory::where('id', $id)->first()->category_name;
        return view('shop', ['products' => $products, 'categoryName' => $category]);
    }
}
