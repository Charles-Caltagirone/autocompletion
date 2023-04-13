<?php require('./config.php');
if (isset($_GET['search'])) {
    $request = $bdd->prepare("SELECT * FROM nourriture WHERE nom LIKE ? ORDER BY nom ASC");
    $request->execute([$_GET['search'] . '%']);
    $result = $request->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($result);
    echo $json;
}
if (isset($_GET['search2'])) {
    $request2 = $bdd->prepare("SELECT * FROM nourriture WHERE nom LIKE ? ORDER BY nom ASC");
    $request2->execute(['%' . $_GET['search2'] . '%']);
    $result2 = $request2->fetchAll(PDO::FETCH_ASSOC);
    $json2 = json_encode($result2);
    echo $json2;
}
if (isset($_GET['id'])) {
    $request = $bdd->prepare("SELECT * FROM nourriture WHERE id = ? ORDER BY nom ASC");
    $request->execute([$_GET['id']]);
    $result = $request->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($result);
    echo $json;
}
