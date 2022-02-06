var picture = document.getElementById('picture');
var btnSearch = document.getElementById('search');

picture.addEventListener('input', fun);
btnSearch.addEventListener('click', fun);
function fun(){
    console.log('fun');
    let URL = "https://api.unsplash.com/search/photos/?client_id=mCNSmbR8Wp7wDFrzZrI8c-EhAR7ZfM3mxGhNR_EOjFA&query=" + picture.value;

    fetch(URL).then((response)=>{
        return response.json();
    }
    )
    .then((data)=>{
        getData(data);
    }
    ).catch(arg=>{
        console.log(arg);
    })
}

function getData(data) {
console.log(data);
}