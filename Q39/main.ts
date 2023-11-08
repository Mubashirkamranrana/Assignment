type Album = {
    artist: string;
    title: string;
    tracks?: number;
  };
          //This line defines a TypeScript type alias named Album. It represents the structure of an album object with three 
          //properties: artist, title, and tracks. The tracks property is optional (denoted by the ? symbol), which means it can be present 
          //or absent in the album object.
          
  function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
      artist: artist,
      title: title
    };
          //This is a function declaration named make_album. It takes three parameters: artist (string), title (string), and tracks (optional number). 
          //The function returns an object that conforms to the Album type.
    if (tracks !== undefined) {
      album.tracks = tracks;  //If the tracks parameter is provided (not undefined), this line of code assigns the value of tracks to the tracks property of the album object.
    }
  
    return album;   //The function returns the album object after setting its properties based on the provided arguments. If tracks is not provided, the album object will not have the tracks property.
  }
  
  const album1 = make_album("Jagjit Sing", "Close to my Heart");
  const album2 = make_album("Strings", "Dhani");
  const album3 = make_album("Ali Sethi", "Chandni Raat", 12);
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
  