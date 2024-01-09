<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pstrągarnia</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/sources.css') }}">
</head>

<body>
@include('layouts.navbar')

    <main>
    <h2 class="sources_title">
        Źródła
    </h2>

    <div id="sources">
        <div class="source">
            <img src="{{ asset('img/sea-fish-drawing.png') }}" alt="ryba">
            <a href="https://pixy.org/download/147373/">pixy.org/download/147373</a> - Obrazek ryby
        </div>

        <div class="source">
            <img src="{{ asset('img/sea-fish-drawing.png') }}" alt="ryba">
            <a href="https://znajdzlowisko.pl">znajdzlowisko.pl</a> - Łowiska
        </div>

        <div class="source">
            <img src="{{ asset('img/sea-fish-drawing.png') }}" alt="ryba">
            <a href="https://sklepwedkarski.pl">sklepwedkarski.pl</a> - Sklep, zdjęcia produktów
        </div>

        <div class="source">
            <img src="{{ asset('img/sea-fish-drawing.png') }}" alt="ryba">
            <a href="https://przewodnicywedkarscy.pl">przewodnicywedkarscy.pl</a> - Blog, artykuły i zdjęcia
        </div>

        <div class="source">
            <img src="{{ asset('img/sea-fish-drawing.png') }}" alt="ryba">
            <a href="https://open-meteo.com">open-meteo.com</a> - Pogoda
        </div>

        <div class="source">
            <img src="{{ asset('img/sea-fish-drawing.png') }}" alt="ryba">
            <a href="https://leafletjs.com/">leafletjs.com</a> - Mapa
        </div>

        <div class="source">
            <img src="{{ asset('img/sea-fish-drawing.png') }}" alt="ryba">
            <a href="https://fontawesome.com">fontawesome.com</a> - Ikonki
        </div>

        <div class="source">
            <img src="{{ asset('img/sea-fish-drawing.png') }}" alt="ryba">
            <a href="http://jonraasch.com/blog/a-simple-jquery-slideshow">jonraasch.com/blog/a-simple-jquery-slideshow</a>
            - Slider ze zdjęciami
        </div>

        <div class="source">
            <img src="{{ asset('img/sea-fish-drawing.png') }}" alt="ryba">
            <a href="https://lokeshdhakar.com/projects/lightbox2/">lokeshdhakar.com/projects/lightbox2</a>
            - Galeria zdjęć
        </div>
    </div>
</main>

    @include('layouts.footer')
</body>

</html>