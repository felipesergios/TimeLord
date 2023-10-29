<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TriggerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'severity' => fake()->name(),
            'level' => random(10),
            'description' => fake()->name(),
        ];
    }
}
