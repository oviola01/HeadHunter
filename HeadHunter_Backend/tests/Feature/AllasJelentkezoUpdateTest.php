<?php

namespace Tests\Feature;

use App\Models\Allas;
use App\Models\AllasJelentkezo;
use App\Models\Pozicio;
use App\Models\Terulet;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AllasJelentkezoUpdateTest extends TestCase
{
        use RefreshDatabase;

        public function test_admin__update_a_status_of_allasjelentkezo()
        {
            $faker = \Faker\Factory::create();

            $admin = User::find(1);
            $allasId = $faker->randomElement(Allas::pluck('allas_id'));
    
            $allaskereso = User::factory()->create();
            
            $allasjelentkezo = AllasJelentkezo::factory()->create([
                'allas' => $allasId,
                'allaskereso' => $allaskereso->user_id,
                'statusz' => 'jelentkezett',
            ]);
    
            $this->actingAs($admin)
                ->withSession(['banned' => false])
                ->withHeader('X-CSRF-TOKEN', csrf_token())
                ->putJson("/api/jobs/{$allasId}/applicants/{$allaskereso->user_id}/modification", [
                    'statusz' => 'folyamatban'
                ])
                ->assertStatus(200)
                ->assertJson([
                    'message' => 'Sikeres státuszfrissítés',
                ]);
    
            $this->assertDatabaseHas('allas_jelentkezos', [
                'allas' => $allasId,
                'allaskereso' => $allaskereso->user_id,
                'statusz' => 'folyamatban',
            ]);
        }
    }
