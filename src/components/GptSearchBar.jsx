import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";
import { GoogleGenAI } from "@google/genai";
import { API_OPTIONS, GEMINI_API_KEY } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

function GptSearchBar() {
  const languageKey = useSelector((store) => store.config.lang);
  const search = useRef(null);
  const dispatch = useDispatch();

  const searchMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const gptSearchMovie = () => {
    console.log(search.current.value);
    // Let's try to integrate gemini API
    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
    const main = async () => {
      const prompt =
        "Act as a movie recommendation system and suggest some movies for the query" +
        search.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example : Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      console.log(response.text);

      const movies = response.text.split(", ");

      const promises = movies.map((movie) => searchMovies(movie));

      const movieResult = await Promise.all(promises);

      dispatch(
        addGptMovies({ movieNames: movies, movieResults: movieResult })
      );
    };
    main();
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 grid grid-cols-12 bg-black rounded-sm"
      >
        <input
          ref={search}
          type="text"
          placeholder={lang[languageKey].gptPlaceholderText}
          className="rounded-sm p-4 m-4 col-span-10 bg-white"
        />
        <button
          className="bg-red-600 text-white col-span-2 my-4 mr-4 cursor-pointer rounded-lg"
          onClick={gptSearchMovie}
        >
          {lang[languageKey].name}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
