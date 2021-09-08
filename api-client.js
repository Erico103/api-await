const API_KEY = "?api_key=8c844ad1392b841ca0ad3610102dc6c2";

getData = async () => {
  try {
    const apiUrl = "https://api.themoviedb.org/3/genre/movie/list";
    res = await fetch(`${apiUrl}${API_KEY}`, {
      method: "GET",
    })
      .then(response => response.json())
      .then(data => console.log(data));
  } catch (err) {
    console.log("Error has occured");
  }
};


