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

    <script src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
    <script src="{{ asset('js/lightbox.js') }}"></script>
    <script src="{{ asset('js/cart.js') }}"></script>
    <script src="{{ asset('js/blog.js') }}"></script>
</head>

<body>
    @include('layouts.navbar')

    <main>
        <article class="full">
            <h2>{{ $blogPost->title }}</h2>
            {!! $blogPost->content !!}
        </article>

        <!-- <h2 class="short">Gelera</h2>
        <div id="gallery"> -->
            <!-- gallery -->
            <!-- <a href="${
            articles[articleId].images[i]
        }" target="_blank" data-lightbox="galeria" data-title="Zdjęcie ${
            i + 1
        }">
        <img src="${articles[articleId].images[i]}" alt="img_${i}"></a> -->
        
        <!-- </div> -->
        <a href="{{  url('/blog')  }}">
            <div id="go_back"><i class="fa-solid fa-chevron-left fa-fade"></i> Wróć</div>
        </a>


        <h2 class="short">Komentarze</h2>

        <div class="add_comment">
            @auth

            @if ($errors->any())
                <div class="errors">
                    <ul>
                @foreach ($errors->all() as $error)
                    <li>
                    {{$error}}
                    </li>
                @endforeach
                    </ul>
                </div>
            @endif



            <div class="add_comment_form">
                <form action="{{url("blog/{$blogPost->id}")}}" method="POST">
                    @csrf
                    <textarea name="content" id="content" cols="50" rows="5" placeholder="Treść komentarza"></textarea>
                    <input class="add_comment_button" type="submit" value="Dodaj komentarz"></input>
                </form>

            </div>
            @endauth

            @guest
            <div class="login_to_comment">Zaloguj się, aby dodać komentarz</div>
            @endguest
        </div>





        @foreach ($blogPost->comments as $comment)
        <div class="comment">
            <div class="comment_author">{{$comment->author->name}}</div>
            <div class="comment_content">{{$comment->content}}</div>
            <div class="comment_date">{{$comment->created_at}}</div>
            @if (auth()->user() != null)
                @if (auth()->user()->id == $comment->user_id)
                <form action="{{url("blog/{$blogPost->id}/{$comment->id}")}}" method="POST">
                    @csrf
                    @method('DELETE')
                    <input class="delete_comment_button" type="submit" value="Usuń">
                </form>
                @endif
            @endif
        </div>
        @endforeach

    </main>

    @include('layouts.footer')
</body>

</html>