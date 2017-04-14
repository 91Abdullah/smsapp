<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Keyword;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        Model::unguard();

        $keyword1 = Keyword::create(['key' => 'Panic']);
        $keyword2 = Keyword::create(['key' => 'Incident']);

        Model::reguard();
    }
}
