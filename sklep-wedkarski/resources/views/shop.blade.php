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
                        <li><a href="{{  route('shop.category', ['category' => 'spinning_rods'])  }}">Spinningowe</a></li>
                        <li><a href="{{  route('shop.category', ['category' => 'carp_rods'])  }}">Karpiowe</a></li>
                    </ul>
                </div>
                <div class="category">
                    <div class="category_name">
                        Kołowrotki
                    </div>
                    <ul>
                        <li><a href="{{  route('shop.category', ['category' => 'front_reels'])  }}">Z przednim hamulcem</a></li>
                        <li><a href="{{  route('shop.category', ['category' => 'back_reels'])  }}">Z tylnym hamulcem</a></li>
                    </ul>
                </div>
                <div class="category">
                    <div class="category_name">
                        Żyłki
                    </div>
                    <ul>
                        <li><a href="{{  route('shop.category', ['category' => 'main_strings'])  }}">Główne</a></li>
                    </ul>
                </div>
                <div class="category">
                    <div class="category_name">
                        Przynęty
                    </div>
                    <ul>
                        <li><a href="{{  route('shop.category', ['category' => 'artificial_baits'])  }}">Sztuczne</a></li>
                        <li><a href="{{  route('shop.category', ['category' => 'natural_baits'])  }}">Naturalne</a></li>
                    </ul>
                </div>
            </aside>


            <div id="items">
                @guest
                <p id="login_to_add"> Zaloguj się, aby móc dodawać produkty do koszyka </p>
                @endguest
                @if (isset($categoryName))
                <h2 class="selected_category">{{$categoryName}}</h2>
                @else
                <h2 class="selected_category">Wybierz kategorię</h2>
                @endif
                <div id="items_display">
                    @if (isset($products))
                    @foreach ($products as $product)
                    <div class="item"> 
                        <div class="item_image">
                            <img src="/img/item_images/{{ $product->product_image }}" alt="item_img">
                        </div>
                        <div class="item_name">
                            {{ $product->product_name }}
                        </div>
                        <div class="item_description">
                            {{ $product->product_description }}
                        </div>
                        <div class="item_price_details">
                            <div class="item_price">
                                {{ $product->product_price }} zł
                            </div>
                            @auth
                            <a class="item_details" href="{{ route('cart.add', ['productId' => $product->id]) }}">
                                Do koszyka
                            </a>
                            @endauth
                            
                        </div>
                    </div>
                    @endforeach
                    @endif
                </div>

            </div>
        </div>
    </main>

    @include('layouts.footer')
</body>

</html>