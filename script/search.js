function search() {

    if(document.getElementById("searchResults").getElementsByTagName("li").length==0) {
    document.getElementById("searchProgress").style.display = "block";
    document.getElementById("searchProgress").innerHTML = "Searching";



   fetch(`https://animeapi.avirana2.repl.co/search?id=${document.getElementById("searchbar").value}`)
    .then((response) => response.json())
    .then((data) => {
        for(var i=0;i<data.length;i++) {
            var ul = document.getElementById("searchResults");
            var li = document.createElement("li");
            li.insertAdjacentHTML('beforeend', `<a href="anime.html?id=${data[i].id}"><img src="${data[i].img}"> <span>${data[i].title}</span></a>`);
            // li.setAttribute("style", `background-image:url("${data[i].img}");`);
            ul.appendChild(li);
        }
        document.getElementById("searchProgress").style.display = "none";
    }).catch((error) => {
        console.log(error);
        document.getElementById("searchProgress").innerHTML = error;
      });

    } else {
        document.getElementById("searchResults").innerHTML=null;
        search();
    }

}