const search = document.getElementById("search-bar"); //le input
const result = document.getElementById("result"); //les résultats exacts
const result2 = document.getElementById("result2"); //les résultats contenant
const separation = document.getElementById("separation"); //la barre de séparation
const contenant = document.getElementById("contenant"); //le titre des result contenant
const exact = document.getElementById("exact"); //le titre des resultats exacts
const imgNourriture = document.getElementById("imgNourriture"); //img du résultat

if (search) {
    search.addEventListener("keyup", () => {
        result.innerHTML = "";
        result2.innerHTML = "";
        if (search.value == "") {
            separation.style.display = "none";
            contenant.style.display = "none";
            exact.style.display = "none";
        } else {
            separation.style.display = "block";
            contenant.style.display = "block";
            exact.style.display = "block";
            //   console.log("recherche.php/?search=" + search.value);
            fetch("./recherche.php/?search=" + search.value)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    //   console.log(data);
                    data.forEach((element) => {
                        // console.log(element.nom);
                        let resultsSearch = document.createElement("p");
                        resultsSearch.innerHTML = '<a href= "./element.php?id=' + element.id + '">' + element.nom;
                        result.appendChild(resultsSearch);
                    });
                });
            fetch("./recherche.php/?search2=" + search.value)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    //   console.log(data);
                    data.forEach((element) => {
                        // console.log(element.nom);
                        let resultsSearch = document.createElement("p");
                        resultsSearch.innerHTML = '<a href= "./element.php?id=' + element.id + '">' + element.nom;
                        result2.appendChild(resultsSearch);
                    });
                });
        }
    });
}

// On insère le resultat sur la page Element.php
const link = window.location.href;
const id = link.split("=");
const image = document.getElementById("image");
// console.log("recherche.php/?id=" + id[1]);
fetch("./recherche.php/?id=" + id[1])
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        data.forEach((element) => {
            // console.log(element.nom);
            let resultsSearch = document.createElement("p");
            resultsSearch.innerHTML = "Nom: " + element.nom + "</br> Type: " + element.type;
            image.src = "./assets/" + element.nom + ".gif";
            imgNourriture.appendChild(resultsSearch);
            imgNourriture.appendChild(image);
        });
    });

// désactiver la touche ENTREE
window.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        return false;
    }
});
