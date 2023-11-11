<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdditivesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('additives', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_contract')->references('id')->on('contracts');
            $table->string('process_number');
            $table->date('validity');
            $table->string('notes')->default('null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('additives');
    }
}
