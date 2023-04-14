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
    <script src="https://kit.fontawesome.com/9a09d189de.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class="recherche">
        <form>
            <div class="searchHome">
                <a href="./index.php" class="home"><i class="fa-solid fa-house"></i></a>
                <input type="text" id="search-bar" class="mt-5" name="search" placeholder="Recherchez ici..." autocomplete="off" autofocus style="border: none;">
            </div>
            <p id="exact" class="text-light" style="display: none">Résultats exacts :</p>
            <div id="result">
            </div>
            <hr id="separation" class="border border-primary border-2 opacity-50">
            <p id="contenant" class="text-light" style="display: none">Contenant la recherche :</p>
            <div id="result2">
            </div>
        </form>
    </div>

    <div id="resultNourriture">
        <img src="" alt="" id="image">
    </div>
</body>

</html>
<script src="./js/script.js"></script>
