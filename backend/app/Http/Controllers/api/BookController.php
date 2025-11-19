<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Books;

class BookController extends Controller
{
    // GET /api/books
    public function index() {
        $books = Books::all();
        return response()->json($books);
    }

    // POST /api/books
    public function store(Request $request) {
        $request->validate([
            'name' => 'required|string',
            'author' => 'required|string',
            'publish_date' => 'required|date',
        ]);

        $book = new Books;
        $book->name = $request->name;
        $book->author  = $request->author;
        $book->publish_date = $request->publish_date;
        $book->save();

        return response()->json([
            'message' => 'Book added.',
            'book' => $book
        ], 201);
    }

    // GET /api/books/{id}
    public function show($id) {
        $book = Books::find($id);
        if ($book) {
            return response()->json($book);
        }
        return response()->json([
            'message' => 'Book not found'
        ], 404);
    }

    // PUT /api/books/{id} or PATCH /api/books/{id}
    public function update(Request $request, $id) {
        $book = Books::find($id);
        if (!$book) {
            return response()->json([
                'message' => 'Book not found'
            ], 404);
        }

        $book->name = $request->name ?? $book->name;
        $book->author = $request->author ?? $book->author;
        $book->publish_date = $request->publish_date ?? $book->publish_date;
        $book->save();

        return response()->json([
            'message' => 'Book updated.',
            'book' => $book
        ]);
    }

    // DELETE /api/books/{id}
    public function destroy($id) {
        $book = Books::find($id);
        if (!$book) {
            return response()->json([
                'message' => 'Book not found'
            ], 404);
        }

        $book->delete();

        return response()->json([
            'message' => 'Book deleted.'
        ]);
    }
}