    <link rel="icon" href="{{ asset('favicon.ico') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/calendar.css') }}">

    <script src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
    <script src="{{ asset('js/cart.js') }}"></script>
    <script src="{{ asset('js/calendar.js') }}"></script>
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
        <div id="events_calendar">
            <div id="left_panel">
                <h2 class="calendar_title">Wydarzenia</h2>
                <div id="events">

                </div>
            </div>

            <div id="calendar">
                <div id="calendar_nav">
                    <button class="calendar_nav_button" onclick="previousMonth()"><i
                            class="fa fa-angle-left"></i></button>
                    <div id="calendar_nav_title"></div>
                    <button class="calendar_nav_button" onclick="nextMonth()"><i class="fa fa-angle-right"></i></button>
                </div>

                <div id="calendar_days"></div>
            </div>
        </div>
    </main>

    <footer>
        Autor strony: Adam Mazur
    </footer>
</body>

</html>