<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Cart;
use App\Models\User;
use App\Models\DeliveryDetails;
class Order extends Model
{
    use HasFactory;

    public function cart()
    {
        return $this->hasOne(Cart::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function deliveryDetails()
    {
        return $this->hasOne(DeliveryDetails::class);
    }
}
