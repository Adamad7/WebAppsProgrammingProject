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
        $comment->content = filter_var($request->content, FILTER_SANITIZE_STRING);
        $comment->user_id = auth()->user()->id;
        $comment->blog_post_id = $id;
        $comment->save();

        return redirect()->back();
    }

    public function deleteComment($blogPostId, $commentId)
    {
        $blogPost = BlogPost::find($blogPostId);
        $blogPost->comments()->where('id', $commentId)->delete();
        return redirect()->back();
    }

    public function editComment($blogPostId, $commentId)
    {   

        $editedComment = BlogPostComment::find($commentId);
        if(auth()->user()->id == $editedComment->user_id)
        {
            return redirect()->route('blog.show', $blogPostId)->with(['edited_comment' => $editedComment]);
        }
        else {
            return redirect()->back()->with(['edit_error' => 'Nie możesz edytować komentarza, który nie należy do Ciebie']);
        }
        
    }

    public function applyCommentEdit(Request $request, $blogPostId, $commentId)
    {
        $request->validate([
            'edit_content' => 'required|min:10|max:1000',
        ]);
        $blogPost = BlogPost::find($blogPostId);
        $stripped =  filter_var($request->edit_content, FILTER_SANITIZE_STRING);
        $blogPost->comments()->where('id', $commentId)->update(['content' => $stripped]);
        return redirect()->back();
    }
}
