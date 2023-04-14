const search = document.getElementById("search-bar");
const result = document.getElementById("result");
const result2 = document.getElementById("result2");
const separation = document.getElementById("separation");
const contenant = document.getElementById("contenant");
const exact = document.getElementById("exact");
const resultNourriture = document.getElementById("resultNourriture");

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
            resultNourriture.appendChild(resultsSearch);
            resultNourriture.appendChild(image);
        });
    });

// désactiver la touche ENTREE
// 
window.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        return false;
    }
});
