console.log( document.title);


const text1 = document.querySelector("#nama");
const text2 = document.querySelector("#name");
const text3 = document.querySelector("#login");


const getDataAsync = async () => {
    let response = await fetch("https://api.github.com/users/elisnf");
    let result = await response.json();

    const name = document.getElementById("name");
    const login = document.getElementById("login");
    const bio = document.getElementById("bio");

    console.log(result);
    name.innerHTML = result.name;
    login.innerHTML = result.login;
    bio.innerHTML = result.bio;

    document.getElementById("myBtn").addEventListener("click", function() {
        alert("Makasiii udah mampirr!! :)");
      });

    document.body.style.backgroundColor = "#CEE5D05";
    document.getElementById("nama").style.color = "#5B8A72";
    document.getElementById("nama").style.fontFamily = "monospace";
    document.getElementById("login").style.color = "#3B5249";
    document.getElementById("bio").style.color = "#3B5249";
    document.getElementById("name").style.color = "#3B5249";
    document.getElementById("name").style.fontFamily = "monospace";
    document.getElementById("bio").style.fontFamily = "monospace";
    document.getElementById("login").style.fontFamily = "monospace";

    var myName = "di atas ada data GitHub Elis";
    console.log(myName);

};
getDataAsync();

