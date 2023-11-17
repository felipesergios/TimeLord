<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dados  = [
            'name'=>'Felipe',
            'email'=>'felipe@cotic.rn.gov.br',
            'password'=>bcrypt('feras1956'),
        ];
        if(User::where('email','=',$dados['email'])->count()){
            $usuario = User::where('email','=',$dados['email'])->count()->first();
            $usuario->update($dados);
             echo "usuario Alterado";
        }else{
            User::create($dados);
             echo "Criado com sucesso";
        }
    }
}
