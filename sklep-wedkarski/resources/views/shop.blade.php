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
@include('layouts.navbar')

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

    @include('layouts.footer')
</body>

</html>