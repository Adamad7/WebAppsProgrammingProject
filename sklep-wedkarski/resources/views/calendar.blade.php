    <link rel="icon" href="{{ asset('favicon.ico') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/calendar.css') }}">

    <script src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
    <script src="{{ asset('js/calendar.js') }}"></script>
</head>

<body>
@include('layouts.navbar')

    <main>
        <div id="events_calendar">
            <div id="left_panel">
                <h2 class="calendar_title">Wydarzenia</h2>
                <div id="events">

                </div>
            </div>

            <div id="calendar">
                <div id="calendar_nav">
                    <button id="calendar_previous_month" class="calendar_nav_button"><i
                            class="fa fa-angle-left"></i></button>
                    <div id="calendar_nav_title"></div>
                    <button id="calendar_next_month" class="calendar_nav_button"><i class="fa fa-angle-right"></i></button>
                </div>

                <div id="calendar_days"></div>
            </div>
        </div>
    </main>

    @include('layouts.footer')
</body>

</html>