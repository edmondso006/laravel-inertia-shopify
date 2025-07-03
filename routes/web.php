<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'message' => 'Welcome to the Home Page!'
    ]);
})->middleware(['verify.shopify'])->name('home');
