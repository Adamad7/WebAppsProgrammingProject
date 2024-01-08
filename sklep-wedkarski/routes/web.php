<?php

use App\Http\Controllers\ProfileController;
use App\Models\Newsletter;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\CartController;

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

Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{id}', [BlogController::class, 'show'])->name('blog.show');
Route::post('/blog/{id}', [BlogController::class, 'addComment'])->name('blog.add_comment');
Route::delete('/blog/delete/{blogPost}/{comment}', [BlogController::class, 'deleteComment'])->name('blog.delete_comment');
Route::put('/blog/edit/{blogPost}/{comment}', [BlogController::class, 'editComment'])->name('blog.edit_comment');
Route::put('/blog/apply/{blogPost}/{comment}', [BlogController::class, 'applyCommentEdit'])->name('blog.apply_comment_edit');

Route::get('/calendar', function () {
    return view('calendar');
})->name('calendar');

Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
Route::get('/cart/add/{productId}', [CartController::class, 'addItem'])->name('cart.add');
Route::get('/cart/remove/{productId}', [CartController::class, 'removeItem'])->name('cart.remove');

Route::get('/fishing_grounds', function () {
    return view('fishing_grounds');
});

Route::get('/newsletter', [NewsletterController::class, 'index'])->name('newsletter.index');

Route::post('/newsletter', [NewsletterController::class, 'store'])->name('newsletter.store');

Route::get('/shop', [ShopController::class, 'index'])->name('shop.index');
Route::get('/shop/{category}', [ShopController::class, 'showCategory'])->name('shop.category');

Route::get('/sources', function () {
    return view('sources');
});

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');


// Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
// Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
// Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
