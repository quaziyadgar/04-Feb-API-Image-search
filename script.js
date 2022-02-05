var picture = document.getElementById('picture');
var btnSearch = document.getElementById('search');

btnSearch.addEventListener('click', fun);

function fun(){
    console.log('fun');
    let URL = "https://api.unsplash.com/photos/?client_id=AIzaSyDstObYyeOlUTdBdrSC-5kyzhvpw9Mg2tU" + picture.value;

    fetch(URL).then((response)=>{
        return response.json();}
    )
    .then((data)=>{
        return console.log(data);}
    ).catch(arg=>{
        console.log(arg);
    })
}
