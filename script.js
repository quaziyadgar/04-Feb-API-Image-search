var picture = document.getElementById('picture');
var btnSearch = document.getElementById('search');

btnSearch.addEventListener('click', fun);

function fun(){
    console.log('fun');
    let URL = "https://api.unsplash.com/search/photos/?client_id=mCNSmbR8Wp7wDFrzZrI8c-EhAR7ZfM3mxGhNR_EOjFA&query=" + picture.value;

    fetch(URL).then((response)=>{
        return response.json();
    }
    )
    .then((data)=>{
        console.log(data.results[0].links.html);
    }
    ).catch(arg=>{
        console.log(arg);
    })
}
