
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function Make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Making three different albums
const album1: Album = Make_album("SHAZADROY", "Zidagi");
const album2: Album = Make_album("HLIHAIDER", "Chahat");
const album3: Album = Make_album("ATIFASLAM", "Merikahani", 12); // Including number of tracks

// Printing album information
console.log(album1);
console.log(album2);
console.log(album3);
