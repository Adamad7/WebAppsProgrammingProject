<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\BlogPost;
use App\Models\User;

class BlogPostComment extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'user_id',
    ];

    public function blogPost()
    {
        return $this->belongsTo(BlogPost::class);
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'user_id', 'id')->orderBy('created_at', 'desc');
    }
}
