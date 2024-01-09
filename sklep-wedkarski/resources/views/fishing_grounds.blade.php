<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pstrągarnia</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/fishing_grounds.css') }}">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
        integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="">

    <script src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
        integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>
    <script src="{{ asset('js/fishing_grounds.js') }}"></script>
</head>

<body>
@include('layouts.navbar')

    <main>
        <div id="grounds_and_weather_container">
            <div id="grounds">
                <div id="details">
                    <h2 id="ground_name">Wybierz łowisko</h2>
                    <div class="ground_detail">
                        <div class="ground_detail_name">Wojedwództwo</div>
                        <div class="ground_detail_desc" id="ground_voivodeship"></div>
                    </div>
                    <div class="ground_detail">
                        <div class="ground_detail_name">Gatunki ryb</div>
                        <div class="ground_detail_desc" id="ground_spieces"></div>
                    </div>
                    <div class="ground_detail">
                        <div class="ground_detail_name">Powierzchnia (ha)</div>
                        <div class="ground_detail_desc" id="ground_area"></div>
                    </div>
                    <div class="ground_detail">
                        <div class="ground_detail_name">Łowienie nocą</div>
                        <div class="ground_detail_desc" id="ground_night_fishing"></div>
                    </div>
                    <div class="ground_detail">
                        <div class="ground_detail_name">Rozbicie namiotu</div>
                        <div class="ground_detail_desc" id="ground_tent"></div>
                    </div>
                    <div class="ground_detail">
                        <div class="ground_detail_name">Nocleg</div>
                        <div class="ground_detail_desc" id="ground_accommodation"></div>
                    </div>
                    <div class="ground_detail">
                        <div class="ground_detail_name">Spinning</div>
                        <div class="ground_detail_desc" id="ground_spinning"></div>
                    </div>
                </div>
                <div id="grounds_map">
                    <div id="map"></div>
                    <div id="map_buttons">
                        <button class="map_button" onclick="findClosestFishingGround()">Najbliże łowisko</button>
                        <div id="map_buttons_divider"></div>
                        <button class="map_button" onclick="panToCurrentLocation()">Moja lokalizacja</button>
                    </div>
                </div>
            </div>
            <div id="weather">
                <button id="check_weather_button" onclick="checkWeather()">Sprawdź pogodę</button>
                <div id="weather_forecast">
                </div>
            </div>
        </div>
    </main>

    @include('layouts.footer')
</body>

</html>