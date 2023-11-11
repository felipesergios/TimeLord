<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;


class TriggerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('triggers')->insert([
            'severity' => Str::random(10),
            'level'=>random_int(1,10),
            'descripton' => Str::random(10),
        ]);
    }
}
