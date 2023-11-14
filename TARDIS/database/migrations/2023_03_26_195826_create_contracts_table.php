<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContractsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contracts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_user')
            ->references('id')
            ->on('users')
            ->onUpdate('cascade')
            ->onDelete('cascade');
            $table->string('company_name');
            $table->string('process_number');
            $table->string('supervisor');
            $table->date('validity');
            $table->string('serial_contract');
            $table->string('object')->default('null');
            $table->string('notes')->default('null');
            $table->string('sector')->default('mysector');
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
        Schema::dropIfExists('contracts');
    }
}
