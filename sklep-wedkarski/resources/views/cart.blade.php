<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pstrągarnia</title>

    <link rel="icon" href="{{ asset('favicon.ico') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/cart.css') }}">

    <script src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
    <!-- <script src="{{ asset('js/cart.js') }}"></script> -->
</head>

<body>
@include('layouts.navbar')

    <main>
        <h2 class="cart_title">Koszyk</h2>

        <div id="cart_content">
            <table><thead><tr><th>Nazwa produktu</th><th>Liczba sztuk</th><th>Cena</th></tr></thead><tbody>
                @if (!isset($cartItems))
                    <tr><td colspan="4">Brak produktów w koszyku</td></tr>
                @else
                    @foreach ($cartItems as $cartItem)
                        <tr>
                            <td>{{ $cartItem->product->product_name }}</td>
                            <td>
                            <a href="{{ route('cart.add', ['productId' => $cartItem->product->id]) }}"><i class="fas fa-plus"></i></a>    
                            {{ $cartItem->quantity }}
                            <a href="{{ route('cart.remove', ['productId' => $cartItem->product->id]) }}"><i class="fas fa-minus"></i></a>
                        </td>
                            <td>{{ $cartItem->product->product_price * $cartItem->quantity }} zł</td>
                            
                        </tr>
                    @endforeach
                @endif
            </tbody></table>
        </div>

        <form action="javascript:sendDelivery()">
            <div id="delivery_info">
                <table>
                    <thead>
                        <tr>
                            <th colspan="2">Dane wysyłki</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label for="first_name">Imię:</label></td>
                            <td><input type="text" id="first_name" name="first_name" required
                                    pattern="^([A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+( [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?)$"></td>
                        </tr>
                        <tr>
                            <td><label for="last_name">Nazwisko:</label></td>
                            <td><input type="text" id="last_name" name="last_name" required
                                    pattern="^([A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+(-[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+)?)$"></td>
                        </tr>
                        <tr>
                            <td><label for="postal">Kod pocztowy:</label></td>
                            <td><input type="text" id="postal" name="postal" required pattern="^[0-9]{2}-[0-9]{3}$">
                            </td>
                        </tr>
                        <tr>
                            <td><label for="locality">Miejscowość:</label></td>
                            <td><input type="text" id="locality" name="locality" required
                                    pattern="^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż\- ]{1,50}$"></td>
                        </tr>
                        <tr>
                            <td><label for="address">Numer domu:</label></td>
                            <td><input type="text" id="address" name="address" required
                                    pattern="^[0-9]{1,6}[a-zA-Z]{0,2}$">
                            </td>
                        </tr>
                        <tr>
                            <td><label for="email">Adres e-mail:</label></td>
                            <td><input type="email" id="email" name="email" required
                                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"></td>
                        </tr>
                        <tr>
                            <td><label for="phone">Numer telefonu:</label></td>
                            <td><input type="tel" id="phone" name="phone" required
                                    pattern="^[0-9]{3}[\- ]?[0-9]{3}[\- ]?[0-9]{3}$"></td>
                        </tr>
                        <tr>
                            <td><label for="payment">Metoda płatności:</label></td>
                            <td><select id="payment" name="payment" required>
                                    <option label="Wybierz płatność"></option>
                                    <option value="credit_card">Karta kredytowa</option>
                                    <option value="debit_card">Karta debetowa</option>
                                    <option value="paypal">PayPal</option>
                                    <option value="blik">BLIK</option>
                                    <option value="transfer">Przelew</option>
                                    <option value="cash">Gotówka przy odbiorze</option>
                                </select></td>
                        </tr>
                        <tr>
                            <td><label for="delivery_method">Metoda dostawy:</label></td>
                            <td><select id="delivery_method" name="delivery_method" required>
                                    <option label="Wybierz dostawę"></option>
                                    <option value="dhl">Kurier DHL</option>
                                    <option value="dpd">Kurier DPD</option>
                                    <option value="pocztex">Kurier Pocztex</option>
                                    <option value="inpost">Paczkomat InPost</option>
                                </select></td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <input id="submit_delivery" type="submit" value="Zamów">
        </form>
    </main>

    @include('layouts.footer')
</body>

</html>