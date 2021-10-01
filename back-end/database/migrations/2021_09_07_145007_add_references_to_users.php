<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddReferencesToUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('client_id')
                  ->nullable()
                  ->onUpdate('cascade')
                  ->onDelete('cascade');

            $table->foreignId('adviser_id')
                  ->nullable()
                  ->onUpdate('cascade')
                  ->onDelete('cascade');
        });
    }
}
