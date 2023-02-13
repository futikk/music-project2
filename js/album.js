let container = document.querySelector(`.album`);

let search = new URLSearchParams(window.location.search);
let i = search.get(`i`);

let album = albums[i];

if (!album) {
    container.innerHTML = `Ошибка`
} else {
    container.innerHTML = ` 
<div class="card mb-3">
<div class="row">
    <div class="col-md-4">
        <img src="${album.img}" alt="" class="img-fluid rounded-start">
    </div>
    <div class="co-md-8">
        <div class="card-body">
            <h5 class="card-title">${album.title}</h5>
            <p class="card-text">${album.description}</p>
            <p class="card-text"><small class="text-muted">Сборник выпущен в ${album.year} году</small></p>
        </div>
    </div>
</div>
</div>
`
    let playlist = document.querySelector(`.playlist`);

    let tracks = album.tracks;

    for (let j = 0; j < tracks.length; j++) {
        let track = tracks[j];
        playlist.innerHTML += ` 
    <li class="list-group-item d-flex align-items-center">
    <img src="assets/2.png" alt="" class="me-3" height="30px">
    <div>
        <div>${track.title}</div>
        <div class="text-secondary">${track.auther}</div>
    </div>
    <div class="ms-auto">${track.time}</div>
</li>
`
    }
}