<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BlogPost;

class BlogController extends Controller
{
    public function index()
    {
        $blogPosts = BlogPost::all();
        return view('blog', ['blogPosts' => $blogPosts]);
    }
}
