<nav>
    <a href="{{ url('/') }}">Strona główna</a>
    <a href="{{ url('/shop') }}">
        <i class="fa-solid fa-shop"></i> Sklep
    </a>
    <a href="{{ url('/blog') }}">
        <i class="fa-solid fa-newspaper"></i> Blog
    </a>
    <div class="dropdown">
        <button class="dropbtn">
            <i class="fa fa-caret-down"></i> Niezbędnik
        </button>
        <div class="dropdown-content">
            <a href="{{ url('/fishing_grounds') }}">Łowiska</a>
            <a href="{{ route('calendar') }}">Kalendarz</a>
        </div>
    </div>
    <a href="{{ url('/newsletter') }}">
        <i class="fa-solid fa-envelope"></i> Newsletter
    </a>
    <a href="{{ url('/sources') }}">Źródła</a>
    
    @if (Route::has('login'))

    @auth
    <a href="{{ url('/cart') }}">
        <i class="fas fa-shopping-cart"></i> Koszyk
    </a>
    <a href="{{route('profile.edit')}}">
        <i class="fa-solid fa-user"></i> {{  Auth::user()->name  }}
    </a>
    <form method="POST" action="{{ route('logout') }}">
        @csrf
        <a href="{{ route('logout') }}" onclick="event.preventDefault();
                                                this.closest('form').submit();">
            Wyloguj się</a>
    </form>
    @else
    <a href="{{ route('login') }}">Zaloguj się</a>

    @if (Route::has('register'))
    <a href="{{ route('register') }}">Zarejestruj się</a>
    @endif
    @endauth

    @endif
</nav>