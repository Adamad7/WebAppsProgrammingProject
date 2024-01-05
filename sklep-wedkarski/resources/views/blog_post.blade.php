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
    <article class="full"><h2>{{ $blogPost->title }}</h2>
    {{ $blogPost->content }}
    </article>

    <h2 class="short">Gelera</h2>
    <div id="gallery">
    <!-- gallery -->
    <!-- <a href="${
            articles[articleId].images[i]
        }" target="_blank" data-lightbox="galeria" data-title="Zdjęcie ${
            i + 1
        }">
        <img src="${articles[articleId].images[i]}" alt="img_${i}"></a> -->
    </div>
    <a id="go_back" href="{{  url('/blog')  }}"><i class="fa-solid fa-chevron-left fa-fade"></i>   Wróć</a>


    </main>

    @include('layouts.footer')
</body>

</html>