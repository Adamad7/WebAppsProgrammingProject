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
        Schema::create('newsletters', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('email', 255)->unique();
            $table->string('name', 255)->notNullable();
            $table->string('frequency', 255)->notNullable();
            $table->string('subjects', 255)->notNullable();
            $table->string('favorite_type', 255)->notNullable();
            $table->text('comment')->nullable();
            $table->boolean('consent')->notNullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('newsletters');
    }
};
