<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Newsletter;

class NewsletterController extends Controller
{
    public function index()
    {
        return view('newsletter');
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email:rfc,dns|distinct|unique:newsletters',
            'name' => 'required|string|max:255',
            'frequency' => 'required|string|in:codziennie,2_na_tydzien,1_na_tydzien,1_na_dwa_tygodnie,1_na_miesiac',
            'subjects' => 'required|array',
            'subjects.*' => 'string|in:relacje,promocje,poradniki,wydarzenia,wiadomosci',
            'fav_fishing_type' => 'required|string|in:splawik,spinning,gruntowe',
            'comments' => 'nullable|string',
            'rodo' => 'required|accepted',
        ]);

        $newsletter = new Newsletter();
        $newsletter->email = $request->email;
        $newsletter->name = $request->name;
        $newsletter->frequency = $request->frequency;
        $newsletter->subjects = implode(',', $request->subjects);
        $newsletter->favorite_type = $request->fav_fishing_type;
        $newsletter->comment = $request->comments;
        $newsletter->consent = $request->rodo == 'on' ? true : false;
        $newsletter->save();

        return redirect()->route('newsletter.index')->with('success', 'Dziękujemy za zapisanie się do newslettera!');
    }
}
