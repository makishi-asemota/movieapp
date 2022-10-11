import axios from "axios";

const URL = "https://imdb8.p.rapidapi.com/auto-complete";

export const getMovieData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: { q: "cars" },
      headers: {
        "X-RapidAPI-Key": "ec8d98f21dmsh0fb9bd6720f6ed5p1d8addjsnceb9443a552d",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
