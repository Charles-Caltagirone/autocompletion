<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Element</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
<div class="recherche">
        <form>
            <input type="search" id="search-bar" class="mt-5" name="search" placeholder="Recherchez ici..." autocomplete="off" autofocus style="border: none;">
            <p id="exact" class="text-light" style="display: none">Résultats exacts :</p>
            <div id="result">
            </div>
            <hr id="separation" class="border border-primary border-2 opacity-50" style="display: none">
            <p id="contenant" class="text-light" style="display: none">Contenant la recherche :</p>
            <div id="result2">
            </div>
        </form>
    </div>

    <div id="result">
        <img src="" alt="" id="image">
    </div>
    <script src="./js/script.js"></script>
</body>
</html>