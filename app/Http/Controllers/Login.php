<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Login extends Controller
{
    public function __invoke(){
        return \Inertia\Inertia::render('app');
    }
}
