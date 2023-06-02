function load() {
var data;

if(localStorage.getItem("localAnime")!=null) {
    data = localStorage.getItem("localAnime").split(",");

    var j=0;
console.log(data);

    for(i=0;i<data.length;i++) {
        fetch(`https://animeapi.avirana2.repl.co/info?id=${data[i]}`)
        .then((response) => response.json())
        .then((res) => {
            var ul = document.getElementById("watchlist");
            var li = document.createElement("li");
            li.setAttribute("style", `order:` + j);
            li.insertAdjacentHTML('beforeend', `<a href="anime.html?id=${res.id}"><img src="${res.img}"><section><span>${res.title}</span></section></a>`);
        ul.appendChild(li);
            j++;
        }).catch((error) => {
            console.log(error);
            var ul = document.getElementById("watchlist");
            var li = document.createElement("li");
            li.setAttribute("style", `order:` + j);
            li.insertAdjacentHTML('beforeend', `<a href="anime.html?id=${data[i]}">${data[i]}</a>`);
        ul.appendChild(li);
          });
    }
} else {
    document.getElementById("watchlistDiv").style.display = "none";
}



console.log(localStorage.getItem("localAnime"));



//popular
fetch(`https://animeapi.avirana2.repl.co/popular?id=1`)
        .then((response) => response.json())
        .then((res) => {
            for (let j=0;j<15;j++) {
            var ul = document.getElementById("popularList");
            var li = document.createElement("li");
            li.setAttribute("style", `order:` + j);
            li.insertAdjacentHTML('beforeend', `<a href="anime.html?id=${res[j].id}"><img src="${res[j].img}"><section><span>${res[j].title}</span></section></a>`);
        ul.appendChild(li);
            }
        }).catch((error) => {
            console.log(error);
            var ul = document.getElementById("popularList");
            var li = document.createElement("li");
            li.setAttribute("style", `order:` + j);
            li.insertAdjacentHTML('beforeend', `<a href="anime.html?id=${data[i]}">${data[i]}</a>`);
        ul.appendChild(li);
          });
        }