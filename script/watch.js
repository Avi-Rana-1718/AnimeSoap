let searchParams = new URLSearchParams(window.location.search);
var id = searchParams.get('id');
var ep= parseInt(searchParams.get('ep'));


if((localStorage.getItem("localAnime")!=null) && (localStorage.getItem("localAnime").includes(id)!=true)) {
    localStorage.setItem('localAnime', localStorage.getItem("localAnime")+ `,${id}`);
} else if(localStorage.getItem("localAnime")==null) {
    localStorage.setItem('localAnime', `${id}`);
}

console.log(localStorage.getItem("localAnime"));   

fetch(`https://animeapi.avirana2.repl.co/watch?id=${id}&ep=${ep}`)
.then((response) => response.json())
.then((data) => {

    
    document.getElementById("vid").src= "https://" + data.servers[0].iframe;
    for(var i=0;i<data.servers.length;i++) {
        var ul = document.getElementById("source");
        var li = document.createElement("li");

        
        var src=data.servers[i].iframe;
        if (src.includes('https://')!=true) {
            src='https://' + src;
        }

        li.setAttribute("onclick", `document.getElementById("vid").src = '` + src + "'");
        li.insertAdjacentHTML('beforeend', `${data.servers[i].name}`);
        ul.appendChild(li);
    }

});

fetch(`https://animeapi.avirana2.repl.co/info?id=${id}`)
.then((response) => response.json())
.then((data) => {
    document.getElementById("breadcrumb").innerHTML = `<a href='anime.html?id=${id}'>${data.title}</a> / Episode ${ep}`;
    document.getElementById("title").innerHTML=data.title;
    document.getElementById("ep").innerHTML=`Episode ${ep}`;
    if(ep>1)
    document.getElementById("back").href = `watch.html?id=${id}&ep=${ep-1}`;
    if(ep!=data.totalEpisodes)
    document.getElementById("foward").href = `watch.html?id=${id}&ep=${ep+1}`;
});

localStorage.setItem(`${id}-epNumber`, ep);

function set(video) {
    document.getElementById("vid").src=video;

}