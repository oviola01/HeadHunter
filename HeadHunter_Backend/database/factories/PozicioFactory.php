<?php

namespace Database\Factories;

use App\Models\Terulet;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pozicio>
 */
class PozicioFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'terulet' => fake()->unique()->randomElement(Terulet::pluck('id')),
            'pozicio' => fake()->text(15),
        ];
    }
}
