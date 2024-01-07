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
    @if (Route::has('login'))

    @auth
    <a href="{{route('profile.edit')}}">{{  Auth::user()->name  }}</a>
    <form method="POST" action="{{ route('logout') }}">
        @csrf
        <a href="{{ route('logout') }}" onclick="event.preventDefault();
                                                this.closest('form').submit();">
            Wyloguj się</a>
    @else
    <a href="{{ route('login') }}">Zaloguj się</a>

    @if (Route::has('register'))
    <a href="{{ route('register') }}">Zarejestruj się</a>
    @endif
    @endauth

    @endif
</nav>