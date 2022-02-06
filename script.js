var picture = document.getElementById('picture');
var btnSearch = document.getElementById('search');
var app = document.getElementById('app');
// picture.addEventListener('input', fun);
btnSearch.addEventListener('click', fun);
function fun(){
    // console.log('fun');
    let URL = "https://api.unsplash.com/search/photos/?client_id=mCNSmbR8Wp7wDFrzZrI8c-EhAR7ZfM3mxGhNR_EOjFA&query=" + picture.value;

    fetch(URL).then((response)=>{
        return response.json();
    }
    )
    .then((data)=>{
        getData(data);
    }
    ).catch(arg=>{
        alert(arg);
    })
}

function getData(data) {
    console.log(data);
    for (let i = 0; i < data.results.length; i++)
    {
        let image = document.createElement('img');
        image.src = data.results[i].urls.small;
        image.className = 'image-view';
        app.appendChild(image);
        // console.log(image);
    }
    document.getElementById('app').scrollIntoView() ;
}
