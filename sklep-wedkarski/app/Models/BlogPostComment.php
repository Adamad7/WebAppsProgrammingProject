<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\BlogPost;

class BlogPostComment extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
    ];

    public function blogPost()
    {
        return $this->belongsTo(BlogPost::class);
    }
}
