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
        Schema::create('fishing_grounds', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->float('latitude')->required();
            $table->float('longitude')->required();
            $table->string('name')->required();
            $table->string('species')->required();
            $table->boolean('night_fishing')->required();
            $table->boolean('tent')->required();
            $table->string('voivodeship')->required();
            $table->boolean('accommodation')->required();
            $table->boolean('spinning')->required();
            $table->float('area')->required();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fishing_grounds');
    }
};
