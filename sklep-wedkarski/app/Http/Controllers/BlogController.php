<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BlogPost;
use App\Models\BlogPostComment;

class BlogController extends Controller
{
    public function index()
    {
        $blogPosts = BlogPost::all();
        return view('blog', ['blogPosts' => $blogPosts]);
    }


    public function show($id)
    {
        $blogPost = BlogPost::find($id);
        return view('blog_post', ['blogPost' => $blogPost]);
    }

    public function addComment(Request $request, $id)
    {
        $request->validate([
            'content' => 'required|min:10|max:1000',
        ]);
        $comment = new BlogPostComment();
        $comment->content = $request->content;
        $comment->user_id = auth()->user()->id;
        $comment->blog_post_id = $id;
        $comment->save();


        // $blogPost = BlogPost::find($id);
        // $blogPost->comments()->create([
        //     'content' => $request->content,
        //     'user_id' => auth()->user()->id,
        // ]);
        return redirect()->back();
    }

    public function deleteComment($blogPostId, $commentId)
    {
        $blogPost = BlogPost::find($blogPostId);
        $blogPost->comments()->where('id', $commentId)->delete();
        return redirect()->back();
    }
}
