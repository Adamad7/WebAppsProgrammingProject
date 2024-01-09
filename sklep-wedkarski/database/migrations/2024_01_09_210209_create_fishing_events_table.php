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
        Schema::create('fishing_events', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('year')->required();
            $table->integer('month')->required();
            $table->integer('day')->required();
            $table->string('time')->required();
            $table->string('location')->required();
            $table->string('description')->required();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fishing_events');
    }
};
