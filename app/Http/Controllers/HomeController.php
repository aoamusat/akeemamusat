<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function contactForm(Request $request)
    {
        $request->validate([
            "name" => ["required", "max:50"],
            "email" => ["required", "email"],
            "subject" => ["required", "max:120"],
            "message" => ["required"],
        ]);

        return redirect()->route("contact")->with("message", "Message Sent!");
    }
}
