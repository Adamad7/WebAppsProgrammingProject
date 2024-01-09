<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FishingEvent;

class FishingEventController extends Controller
{
    public function getEvents()
    {
        $events = FishingEvent::all();
        return response()->json($events);
    }
}
