<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pstrągarnia</title>

    <link rel="icon" href="{{ asset('favicon.ico') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/newsletter.css') }}">

    <script src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
    <script src="{{ asset('js/cart.js') }}"></script>
    <script src="{{ asset('js/newsletter.js') }}"></script>
</head>

<body>
    @include('layouts.navbar')

    <main>
        
        @if($errors->any())
        <div class="error_message">
            <ul>
                @foreach($errors->all() as $error)
                <li>
                    {{ $error }}
                </li>
                @endforeach
            </ul>
        </div>
        @endif

        @if(session()->has('success'))

        <div id="newsletter_title">
            <img src="{{ asset('img/sea-fish-drawing.png') }}" alt="ryba">
            <h2>
            {{ session()->get('success') }}
            </h2>
            <img src="{{ asset('img/sea-fish-drawing.png') }}" alt="ryba">
        </div>

        @else

        <div id="newsletter_title">
            <img src="{{ asset('img/sea-fish-drawing.png') }}" alt="ryba">
            <h2>
                Zapisz się do naszego newslettera!
            </h2>
            <img src="{{ asset('img/sea-fish-drawing.png') }}" alt="ryba">
        </div>
        
        
        <div id="newsletter_form">
            <form action="{{ route('newsletter.store') }}" method="post">
                @csrf
                <fieldset>
                    <legend>E-mail</legend>
                    <div class="form_elements">
                        <input type="email" name='email' id="email" required
                            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                            title="Wpisz poprawny adres email">
                    </div>
                    <div class="error_space" id="error_email"></div>
                </fieldset>

                <fieldset>
                    <legend>Imię</legend>
                    <div class="form_elements">
                        <input type="text" name='name' id="name" required pattern="^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{1,30}$"
                            title="Wpisz poprawne imię">
                    </div>
                    <div class="error_space" id="error_name"></div>
                </fieldset>

                <fieldset>
                    <legend>Częstotliwość</legend>
                    <div class="form_elements">
                        <div>
                            <input type="radio" name="frequency" id="freq_1" value="codziennie" required>
                            <label for="freq_1">Codziennie</label>
                        </div>
                        <div>
                            <input type="radio" name="frequency" id="freq_2" value="2_na_tydzien">
                            <label for="freq_2">2 razy w tygodniu</label>
                        </div>
                        <div>
                            <input type="radio" name="frequency" id="freq_3" value="1_na_tydzien">
                            <label for="freq_3">Raz w tygodniu</label>
                        </div>
                        <div>
                            <input type="radio" name="frequency" id="freq_4" value="1_na_dwa_tygodnie">
                            <label for="freq_4">Raz na dwa tygodnie</label>
                        </div>
                        <div>
                            <input type="radio" name="frequency" id="freq_5" value="1_na_miesiac">
                            <label for="freq_5">Raz na miesiąc</label>
                        </div>
                    </div>

                    <div class="error_space" id="error_frequency"></div>
                </fieldset>


                <fieldset>
                    <legend>Tematy</legend>
                    <div class="form_elements">
                        <div>
                            <input type="checkbox" name='subjects[]' class="subjects" id="trip_reports" value="relacje">
                            <label for="trip_reports">Relacje z wypraw</label>
                        </div>
                        <div>
                            <input type="checkbox" name='subjects[]' class="subjects" id="shop_sales" value="promocje">
                            <label for="shop_sales">Promocje w sklepie</label>
                        </div>
                        <div>
                            <input type="checkbox" name='subjects[]' class="subjects" id="guides" value="poradniki">
                            <label for="guides">Poradniki</label>
                        </div>
                        <div>
                            <input type="checkbox" name='subjects[]' class="subjects" id="events" value="wydarzenia">
                            <label for="events">Wydarzenia</label>
                        </div>
                        <div>
                            <input type="checkbox" name='subjects[]' class="subjects" id="news" value="wiadomosci">
                            <label for="news">Wiadomości</label>
                        </div>
                    </div>
                    <div class="error_space" id="error_subjects"></div>
                </fieldset>

                <fieldset>
                    <legend>Ulubiony typ wędkowania</legend>
                    <div class="form_elements">
                        <div>
                            <input type="radio" name="fav_fishing_type" id="float" value="splawik" required>
                            <label for="float">Spławik</label>
                        </div>
                        <div>
                            <input type="radio" name="fav_fishing_type" id="spinning" value="spinning">
                            <label for="spinning">Spinning</label>
                        </div>
                        <div>
                            <input type="radio" name="fav_fishing_type" id="ground" value="gruntowe">
                            <label for="ground">Gruntowe</label>
                        </div>
                    </div>
                    <div class="error_space" id="error_fav_fishing_type"></div>
                </fieldset>

                <fieldset>
                    <legend>Uwagi</legend>
                    <textarea rows="4" id="comments" name="comments"></textarea>
                </fieldset>

                <div id="rodo_section">
                    <input type="checkbox" name='rodo' id="rodo" required
                        title="Aby otrzymywać newsletter musisz wyrazić zgodę na przetwarzanie danych osobowych">
                    <label for="rodo">
                        Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                        otrzymywania newslettera
                    </label>
                </div>

                <input type="submit" value="Zapisz mnie!" id="submit_button">



            </form>
        </div>
        @endif
    </main>

    @include('layouts.footer')
</body>

</html>