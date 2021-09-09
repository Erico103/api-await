const API_KEY = "
getData = async () => {
  try {
    const apiUrl = "https://api.themoviedb.org/3/genre/movie/list";
    res = await fetch(`${apiUrl}${API_KEY}`, {
      method: "GET",
    })
      .then(response => response.json())
      return result
  } catch (err) {
    console.log("Error has occured");
  }
};


