const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath("public");
mix.js("resources/js/app.js", "public/js")
    .js("resources/js/bootstrap.js", "public/js")
    .js("resources/js/calendar.js", "public/js")
    .js("resources/js/cart.js", "public/js")
    .js("resources/js/fishing_grounds", "public/js")
    .js("resources/js/lightbox.js", "public/js")
    .js("resources/js/shop.js", "public/js")
    .postCss("resources/css/app.css", "public/css")
    .postCss("resources/css/blog.css", "public/css")
    .postCss("resources/css/calendar.css", "public/css")
    .postCss("resources/css/cart.css", "public/css")
    .postCss("resources/css/fishing_grounds.css", "public/css")
    .postCss("resources/css/lightbox.css", "public/css")
    .postCss("resources/css/newsletter.css", "public/css")
    .postCss("resources/css/shop.css", "public/css")
    .postCss("resources/css/style.css", "public/css");
