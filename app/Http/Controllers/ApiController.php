<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Keyword;
use App\Message;

class ApiController extends Controller
{
    public function postMessage(Keyword $keyword, Request $request) {
        $message = $keyword->messages()->create($request->all());
        if($message)
            return response()->json('Message saved', 200);
        else
            return response()->json('Error occured', 401);
    }

    public function getMessages(Keyword $keyword) {
        return response()->json($keyword->messages->all(), 200);
    }

    public function getKeywords() {
        $keywords = Keyword::all()->toArray();

        foreach (Keyword::all() as $key => $value) {
           $keywords[$key]["count"] = count($value->messages);
        }

        return response()->json(['keywords' => $keywords], 200);
    }
}
