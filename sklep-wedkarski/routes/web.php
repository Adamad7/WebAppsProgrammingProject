<?php

use App\Http\Controllers\ProfileController;
use App\Models\Newsletter;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\BlogController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/blog', [BlogController::class, 'index'])->name('blog');

Route::get('/calendar', function () {
    return view('calendar');
});

Route::get('/cart', function () {
    return view('cart');
});

Route::get('/fishing_grounds', function () {
    return view('fishing_grounds');
});

Route::get('/newsletter', [NewsletterController::class, 'index'])->name('newsletter.index');

Route::post('/newsletter', [NewsletterController::class, 'store'])->name('newsletter.store');

Route::get('/shop', function () {
    return view('shop');
});

Route::get('/sources', function () {
    return view('sources');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
