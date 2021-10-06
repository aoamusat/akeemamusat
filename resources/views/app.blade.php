<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Akeem Amusat, Software Engineer" />
        <meta name="author" content="Akeem" />
        <meta
            name="keywords"
            content="Akeem Amusat, Software Engineer in Lagos, Fullstack Developer in Nigeria"
        />
        <title inertia>Akeem Amusat | Software Engineer</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="//fonts.googleapis.com/css2?family=Jost:wght@300;400;600&display=swap">

        <!-- Styles -->
        <link rel="stylesheet" href="{{ url('css/style.css') }}">
        <link rel="stylesheet" href="{{ url('css/style-liberty.css') }}">

        <!-- Scripts -->
        @routes
        <script src="{{ mix('js/app.js') }}" defer></script>
    </head>
    <body class="font-sans antialiased">
        @inertia
        <script src="{{ url('js/jquery-3.3.1.min.js') }}"></script>
        <script src="{{ url('js/bootstrap.min.js') }}"></script>
        <script src="{{ url('js/jquery.countup.js') }}"></script>
        <script src="{{ url('js/jquery.magnific-popup.min.js') }}"></script>
        <script src="{{ url('js/jquery.prettyPhoto.js') }}"></script>
        <script src="{{ url('js/jquery.quicksand.js') }}"></script>
        <script src="{{ url('js/jquery.waypoints.min.js') }}"></script>
        <script src="{{ url('js/owl.carousel.js') }}"></script>
        <script src="{{ url('js/script.js') }}"></script>
        @env('local')
            <script src="http://localhost:8080/js/bundle.js"></script>
        @endenv
    </body>
</html>
