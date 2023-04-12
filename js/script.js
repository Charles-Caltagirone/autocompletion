const search = document.getElementById("search-bar");
const result = document.getElementById("result");
const result2 = document.getElementById("result2");
const hr = document.getElementById("separation");

if (search) {
    search.addEventListener("keyup", () => {
        result.innerHTML = "";
        result2.innerHTML = "";
        hr.style.display = "none";
        if (search.value != "") {
            hr.style.border = "1px solid blue";
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
            result.appendChild(resultsSearch);
        });
    });