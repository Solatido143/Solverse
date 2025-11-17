<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\BookController;

Route::apiResource('books', BookController::class);
