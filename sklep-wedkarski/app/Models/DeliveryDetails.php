<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Order;

class DeliveryDetails extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'postal_code',
        'city',
        'street',
        'house_number',
        'phone_number',
        'payment_method',
        'delivery_method',
    ];

    public function order()
    {
        return $this->has(Order::class);
    }
}
