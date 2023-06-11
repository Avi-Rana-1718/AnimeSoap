let ul = document.getElementById("watchlist");


async function load() {
let data;
if(localStorage.getItem("localAnime")!=null) {
    data = localStorage.getItem("localAnime").split(",");
    console.log(data.length);

    let j=0;

    for(i=0;i<data.length;i++) {
        let res = await fetch(`https://animeapi.avirana2.repl.co/info?id=${data[i]}`);
        let resjson = await res.json();

        if(!res.ok) {
            console.log(error);
            let li = document.createElement("li");
            li.setAttribute("style", `order:` + j);
            li.insertAdjacentHTML('beforeend', `<a href="anime.html?id=${data[i]}">${data[i]}</a>`);
            ul.appendChild(li);
        } else {
            let li = document.createElement("li");
            li.setAttribute("style", `order:` + j);
            li.insertAdjacentHTML('beforeend', `<a href="anime.html?id=${resjson.id}"><img src="${resjson.img}"><section><span>${resjson.title}</span></section></a>`);
        ul.appendChild(li);
            j++;
        }
    }
} else {
    document.getElementById("watchlistDiv").style.display = "none";
}
console.log(localStorage.getItem("localAnime"))



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
