<?php

namespace Database\Factories;

use App\Models\Answers;
use Illuminate\Database\Eloquent\Factories\Factory;

class AnswersFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Answers::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $specialfood = array("No", "Octovegetariana", "Pesco-vegetariana", "Sin gluten");
        $doExercise = array("Si", "No");
        $weightLoss = array("Si", "Nol");
        $foodType = array("Saludables", "Chatarra", "No pido comida");
        $foodLapse = array("Menos de 2", "3", "4", "5", "Mas de 6");
        $eatVegetables = array("Si", "No");
        $eatFruits = array("Si", "No");

        $specialFoodAnswer = $specialfood[rand(0, 3)];
        $doExerciseAnswer = $doExercise[rand(0, 1)];
        $weightLossAnswer = $weightLoss[rand(0, 1)];
        $foodTypeAnswer = $foodType[rand(0, 2)];
        $foodLapseAnswer = $foodLapse[rand(0, 4)];
        $eatVegetablesAnswer = $eatVegetables[rand(0, 1)];
        $eatFruitsAnswer = $eatFruits[rand(0, 1)];

        $answers = [$specialFoodAnswer, $doExerciseAnswer, $weightLossAnswer, $foodTypeAnswer, $foodLapseAnswer, $eatVegetablesAnswer, $eatFruitsAnswer];
        $answer = $answers[rand(0, 6)];
        

        return [
            'client_id' => $this->faker->numberBetween(1, 40),
            'answer_desc' => $answer,
            'question_id' => $this->faker->numberBetween(1, 8),
        ];
    }
}
