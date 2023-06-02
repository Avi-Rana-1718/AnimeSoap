let searchParams = new URLSearchParams(window.location.search);
var id = searchParams.get('id');

function load() {

var totalEp, title;


   fetch(`https://animeapi.avirana2.repl.co/info?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById("title").innerHTML = data.title;
        document.getElementById("totalEp").innerHTML= 'Total episodes: ' + data.totalEpisodes;
        document.getElementById("status").innerHTML= 'Status: ' + data.status;
        document.getElementById("desc").innerHTML= data.desc;
        document.getElementById("cover").src = data.img;

        document.getElementById("breadcrumb").innerHTML = `<a href='index.html'>Library</a> / ${data.title}`;

        
        if(localStorage.getItem(`${id}-epNumber`)!=null)
        document.getElementById("play").innerHTML = `<i class="fas fa-play"></i> Continue Watching E${localStorage.getItem(`${id}-epNumber`)}`;
        else 
        document.getElementById("play").innerHTML = `<i class="fas fa-play"></i> Start Watching E1`;

        title=data.id;
        totalEp = data.totalEpisodes;
        
        for(var i=1;i<=totalEp;i++) {
            var ul = document.getElementById("list");
            var li = document.createElement("li");
            if(localStorage.getItem(`${id}-epNumber`)>=i) {
                li.setAttribute("style", `background-color:#7047EB;color:#fff;`);
            }
            li.setAttribute("onclick", `window.location.href='watch.html?id=${title}&ep=${i}';`);
            li.appendChild(document.createTextNode(i));
            ul.appendChild(li);
        }
        
    }).catch((error) => {
        console.log(error);
        document.write(error);
      });


    function animeProgress() {
        localStorage.setItem(`${id}-epNumber`,)
    }
    
    function play() {
        if((localStorage.getItem(`${id}-epNumber`)==null) && (title!=undefined)) {
            window.location.href=`watch.html?id=${title}&ep=1`;

        } else {
            window.location.href=`watch.html?id=${title}&ep=${localStorage.getItem(`${id}-epNumber`)}`;
        }
    }
}