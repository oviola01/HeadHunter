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
        Schema::create('allaskeresos', function (Blueprint $table) {
            $table->id('user_id');
            $table->string('nem', 5);
            $table->date('szul_ido');
            $table->integer('telefonszam', 11);
            $table->integer('fax', 10);
            $table->string('allampolgarsag', 20);
            $table->boolean('jogositvany');
            $table->longText('szoc_keszseg', 150);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('allaskeresos');
    }
};