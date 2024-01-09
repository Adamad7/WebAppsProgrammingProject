<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pstrągarnia</title>

    <link rel="icon" href="{{ asset('favicon.ico') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="{{ asset('css/lightbox.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/blog.css') }}">

</head>

<body>
    @include('layouts.navbar')

    <main>


        <h2 class="short">Artykuły</h2>

        <div id="articles">
            @foreach ($blogPosts as $blogPost)
            <article class="small">
                <img src="{{  $blogPost->cover_img }}" alt="{{$blogPost->cover_img}}">
                <div class="article_title_and_button">
                    <div class="article_title">{{$blogPost->title}}</div>
                    <a href=" {{  url("/blog/{$blogPost->id}")  }}"><p>Przeczytaj</p></a>
                </div>
            </article>
            @endforeach
        </div>

    </main>

    @include('layouts.footer')
</body>

</html>