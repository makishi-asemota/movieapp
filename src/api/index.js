import axios from "axios";

const URL = "https://online-movie-database.p.rapidapi.com/auto-complete";

const getMovieData = async (movie) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: { q: "cars" },
      headers: {
        "X-RapidAPI-Key": "a947316714msh6764694cc039a95p1fb94bjsn4f6d955aaf2e",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getMovieData;
