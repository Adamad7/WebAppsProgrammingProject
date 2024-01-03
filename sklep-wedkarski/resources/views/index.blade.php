<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pstrągarnia</title>

    <link rel="icon" href="{{ asset('favicon.ico') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">

    <script src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
    <script src="{{ asset('js/cart.js') }}"></script>
</head>

<body>
@include('layouts.navbar')

    <main>
        <img id="index_page_fish" src="{{ asset('img/sea-fish-drawing.png') }}" alt="ryba">

        <h2 class="index_title">
            Witaj na naszej stronie poświęconej wędkarstwu!
        </h2>

        <div id="main_page_content">
            <div>
                Odkryj pasję wędkarstwa na naszej kompleksowej stronie, która oferuje wiele atrakcji dla miłośników tego
                pięknego hobby. Znajdziesz tutaj wszystko, czego potrzebujesz, aby cieszyć się wędkowaniem na całego.
            </div>
            <div>
                Zapraszamy do naszego <a href="{{ url('/shop') }}">sklepu</a> ze sprzętem, gdzie znajdziesz szeroki wybór
                wysokiej jakości akcesoriów
                wędkarskich, wędzisk, przynęt oraz innych niezbędnych artykułów. Nasza oferta jest skierowana zarówno do
                początkujących, jak i do doświadczonych wędkarzy.
            </div>
            <div>
                Na naszym <a href="{{ url('/blog') }}">blogu</a> znajdziesz porady, informacje i inspiracje dotyczące różnych
                technik łowienia ryb,
                miejsc wędkarskich, nowych produktów oraz relacji z udanych wędkarskich wypraw. Bądź na bieżąco i
                zgłębiaj wiedzę dzięki naszym regularnie aktualizowanym wpisom.
            </div>
            <div>
                Nie przegap również naszego <a href="{{ url('/calendar') }}">kalendarza wydarzeń</a>, gdzie znajdziesz informacje
                o nadchodzących zawodach
                wędkarskich, targach, warsztatach i innych wydarzeniach związanych z wędkarstwem.
            </div>
            <div>
                Nasza <a href="{{ url('fishing_grounds') }}">mapa łowisk</a> pomoże Ci znaleźć najlepsze miejsca do wędkowania w
                Twojej okolicy. Znajdź jeziora,
                stawy i inne akweny, które są znane z obfitości ryb i pięknej scenerii. Dzięki naszej
                interaktywnej mapie łowisk odkryjesz nowe miejsca i będziesz mógł planować swoje wędkarskie przygody.
            </div>
            <div>
                Nie zapomnij również zapisać się na nasz <a href="{{ url('/newsletter') }}">newsletter</a>, aby otrzymywać
                regularne aktualizacje, informacje o
                nowościach, promocje oraz ekskluzywne oferty. Bądź na pierwszym miejscu wiedzy i ciesz się dodatkowymi
                korzyściami, dostępnymi tylko dla naszych subskrybentów.
            </div>
            <div>
                Przygotuj się na wspaniałą przygodę wędkarską i dołącz do społeczności pasjonatów wędkarstwa na naszej
                stronie. Odkryj nowe techniki, zakupy, ciekawe wydarzenia i wiele więcej. Baw się dobrze i złap
                wyjątkowe ryby, tworząc niezapomniane wspomnienia na łowiskach.
            </div>
        </div>
    </main>

    @include('layouts.footer')
</body>

</html>