<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('delivery_details', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('first_name')->required();
            $table->string('last_name')->required();
            $table->string('postal_code')->required();
            $table->string('city')->required();
            $table->string('street')->required();
            $table->string('house_number')->required();
            $table->string('phone_number')->required();
            $table->string('payment_method')->required();
            $table->string('delivery_method')->required();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('delivery_details');
    }
};
