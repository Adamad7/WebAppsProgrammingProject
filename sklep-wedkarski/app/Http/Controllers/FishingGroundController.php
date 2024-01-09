<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\FishingGround;

class FishingGroundController extends Controller
{
    public function getFishingGrounds() {
        $fishingGrounds = FishingGround::all();
        return response()->json($fishingGrounds);
    }
}
