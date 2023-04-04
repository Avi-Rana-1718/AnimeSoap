var data;

if(localStorage.getItem("localAnime")!=null) {
    data = localStorage.getItem("localAnime").split(",");

    var j=0;
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
        });
    }
} else {
    document.getElementById("watchlistDiv").style.display = "none";
}



console.log(localStorage.getItem("localAnime"));

function del(pos) {
data[pos]="\0";
localStorage.setItem("localAnime") = data.toString();
}