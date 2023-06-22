auth("Avi","agentavi");
stay();
async function auth(user,pass) {
let data=  await fetch(`https://magicauth.avirana2.repl.co/auth?username=${user}&pass=${pass}`);
let response = await data.json();
document.cookie = `user=${user};pass=${pass}`;
console.log(response);

}

async function stay() {
    if(document.cookie) {
        console.log(document.cookie);
    } else {
        console.log(document.cookie);
    }
}