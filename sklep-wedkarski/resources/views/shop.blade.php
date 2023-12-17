<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pstrągarnia</title>

    <link rel="icon" href="{{ asset('favicon.ico') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/shop.css') }}">

    <script src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
    <script src="{{ asset('js/cart.js') }}"></script>
    <script src="{{ asset('js/shop.js') }}"></script>
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

    <main>
        <div id="shop">
            <aside id="filters">
                <div class="category">
                    <div class="category_name">
                        Wędziska
                    </div>
                    <ul>
                        <li><a href="javascript:showCategory(1);">Spinningowe</a></li>
                        <li><a href="javascript:showCategory(2);">Karpiowe</a></li>
                    </ul>
                </div>
                <div class="category">
                    <div class="category_name">
                        Kołowrotki
                    </div>
                    <ul>
                        <li><a href="javascript:showCategory(3);">Z przednim hamulcem</a></li>
                        <li><a href="javascript:showCategory(4);">Z tylnym hamulcem</a></li>
                    </ul>
                </div>
                <div class="category">
                    <div class="category_name">
                        Żyłki
                    </div>
                    <ul>
                        <li><a href="javascript:showCategory(5);">Główne</a></li>
                    </ul>
                </div>
                <div class="category">
                    <div class="category_name">
                        Przynęty
                    </div>
                    <ul>
                        <li><a href="javascript:showCategory(6);">Sztuczne</a></li>
                        <li><a href="javascript:showCategory(7);">Naturalne</a></li>
                    </ul>
                </div>
            </aside>


            <div id="items">
                <h2 class="selected_category">Wybierz kategorię</h2>
                <div id="items_display"></div>
            </div>
        </div>
    </main>

    <footer>
        Autor strony: Adam Mazur
    </footer>
</body>

</html>