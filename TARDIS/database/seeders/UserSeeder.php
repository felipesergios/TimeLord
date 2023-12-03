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
        $dados =[
            'name'=>env('USER_SEED', 'administrator'),
            'email'=>env('USER_SEED_MAIL', 'administrator@mail.com'),
            'password'=>bcrypt(env('USER_SEED_PASS', 'admin'))
        ];
        if(User::where('email','=',$dados['email'])->count())
        {
            $usuario = User::where('email','=',$dados['email'])->first();
            $usuario->update($dados);
            echo "Usuario Alterado";
        }else{
            User::create($dados);
            echo "Usuario CRiado";
        }
    }
}
