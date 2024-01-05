<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\BlogPostComment;

class BlogPost extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
    ];

    public function comments()
    {
        return $this->hasMany(BlogPostComment::class);
    }
}
