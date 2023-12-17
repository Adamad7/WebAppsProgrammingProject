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
    <nav>
        <a href="{{ url('/') }}">Strona główna</a>
        <a href="{{ url('/shop') }}">Sklep</a>
        <a href="{{ url('/blog') }}">Blog</a>
        <div class="dropdown">
            <button class="dropbtn">Niezbędnik
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                <a href="{{ url('/fishing_grounds') }}">Łowiska</a>
                <a href="{{ url('/calendar') }}">Kalendarz</a>
            </div>
        </div>
        <a href="{{ url('/newsletter') }}">Newsletter</a>
        <a href="{{ url('/sources') }}">Źródła</a>
        <a href="{{ url('/cart') }}">
            <div id="cart_value"><i class="fas fa-shopping-cart"></i> (0zł)</div>
        </a>
    </nav>

    <main></main>

    <footer>
        Autor strony: Adam Mazur
    </footer>
</body>

</html>