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
    <link rel="stylesheet  type="text/css"" href="{{ asset('css/blog.css') }}">

    <script src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
    <script src="{{ asset('js/cart.js') }}"></script>
    <script>
        $(document).ready(function () {
        @if (session('scroll'))
            @if (session('scroll_to'))
                $('html, body').animate({
                    scrollTop: $('#{{session('scroll_to')}}').offset().top
                }, 0, 'swing');
            @else
            $('html, body').animate({
                scrollTop: $('#comments').offset().top
            }, 0, 'swing');
            @endif
        @endif
    });
    </script>
</head>

<body>
    @include('layouts.navbar')

    <main>
        <article class="full">
            <h2>{{ $blogPost->title }}</h2>
            {!! $blogPost->content !!}
        </article>

        <a href="{{  url('/blog')  }}">
            <div id="go_back"><i class="fa-solid fa-chevron-left fa-fade"></i> Wróć</div>
        </a>


        <h2 class="short">Komentarze</h2>

        @if (!session('edited_comment'))
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
                <form action="{{route('blog.add_comment', ['id' => $blogPost->id])}}" method="POST">
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
        @endif


        

        <div id='comments'>
        @foreach ($blogPost->comments as $comment)
        <div class="comment" id="{{hash('sha256', $comment->id)}}">
            <div class="comment_author">{{$comment->author->name}}</div>
            <div class="comment_content">        



            @if (session('edited_comment') && session('edited_comment')->id == $comment->id)
            <form action="{{route('blog.apply_comment_edit', ['blogPost' => $blogPost->id, 'comment' => $comment->id])}}" method="POST">
                @csrf
                @method('PUT')
                <textarea name="edit_content" id="edit_content" cols="50" rows="5"
                    placeholder="Treść komentarza">{!!nl2br(e($comment->content))!!}</textarea>
                <input class="add_comment_button" type="submit" value="Zapisz"></input>
            </form>
            @else
                {!!nl2br(e($comment->content))!!}
            @endif
            </div>



            <div class="comment_date">{{$comment->created_at}}</div>
            @if (!session('edited_comment') && auth()->user() != null && auth()->user()->id == $comment->user_id)
            
            <div class="comment_buttons">
                <form action="{{route('blog.delete_comment', ['blogPost' => $blogPost->id, 'comment' => $comment->id])}}" method="POST">
                    @csrf
                    @method('DELETE')
                    <input class="delete_comment_button" type="submit" value="Usuń">
                </form>
                <form action="{{route('blog.edit_comment', ['blogPost' => $blogPost->id, 'comment' => $comment->id])}}"
                    method="POST">
                    @csrf
                    @method('PUT')
                    <input class="edit_comment_button" type="submit" value="Edytuj">
                </form>
            </div>
            
            @endif
        </div>
        @endforeach
        </div>

    </main>

    @include('layouts.footer')
</body>

</html>