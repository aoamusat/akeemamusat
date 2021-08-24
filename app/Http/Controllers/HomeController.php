<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

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

        try {
            Mail::raw($request->message, function ($message) use ($request) {
                $message->from($request->email, $request->name);
                $message->sender($request->email, $request->name);
                $message->to('aoamusat@gmail.com', 'Akeem Amusat');
                $message->cc('aoamusat@outlook.com', 'Akeem Amusat');
                $message->subject($request->subject);
                $message->priority(1);
            });
        } catch (Exception $e) {
            Log::error($e->getMessage());
        }

        return redirect()->route("contact")->with("message", "Message Sent!");
    }
}
