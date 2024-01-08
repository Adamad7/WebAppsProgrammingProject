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

            <!-- <div class=\"item\"> 
                <div class=\"item_image\">
                    <img src=\"".concat(displayedItems[i].img, "\" alt=\"item_img\">
                </div>
                <div class=\"item_name\">
                    displayedItems[i].name
                </div>
                <div class=\"item_description\">
                    itemsDescriptions[i]
                </div>
                <dvi class=\"item_price_details\">
                    <div class=\"item_price\">
                        displayedItems[i].price[0], " z\u0142
                    </div>
                    <button class=\"item_details\" onclick=\"showItemDetails(").concat(categoryId, ", ").concat(i, ")\">
                        Szczeg\xF3\u0142y
                    </button>
                </div>
            </div> -->


            <div id="items">
                @if (isset($categoryName))
                <h2 class="selected_category">{{$categoryName}}</h2>
                @else
                <h2 class="selected_category">Wybierz kategorięee</h2>
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
                            <a class="item_details" href="{{ route('cart.add', ['productId' => $product->id]) }}">
                                Do koszyka
                            </a>
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