import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

function MovieDetails({ details, videos }) {
  // console.log(videos.results[0].id);
  const params = useRouter().query.id;
  console.log(params);
  console.log(details);
  console.log(videos);

  return (
    <div className="md:flex w-3/4 m-auto p-3">
      <div className="my-3 md:mr-3">
        <Image
          src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
          width={500}
          height={700}
        />
      </div>
      <div className="md:flex md:flex-col text-lg leading-8">
        <p className="text-3xl font-bold mb-3 text-center sm:text-left">
          {details.original_title || details.original_name}
        </p>
        <p className="flex items-center w-fit m-auto sm:m-0">
          {params.length > 1 ? "TV . " : "Movie ."}{" "}
          {details.release_date || details.first_air_date} .{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {details.vote_count}
        </p>
        <div
          className="flex"
          style={
            details.genres.length > 3
              ? { flexDirection: "column" }
              : { flexDirection: "row" }
          }
        >
          <span className="font-bold">Genres:&nbsp;</span>
          {details.genres.length < 4
            ? details.genres?.map((genre, index) => (
                <p key={index}>
                  {genre.name} {index !== details.genres.length - 1 && "."}{" "}
                  &nbsp;
                </p>
              ))
            : details.genres?.map((genre, index) => (
                <p key={index}>{genre.name}</p>
              ))}
        </div>
        <p>
          <span className="font-bold">Description:</span> {details.overview}
        </p>
        {videos.results.length > 0 ? (
          <iframe
            className="m-3 w-full h-96"
            src={`https://www.youtube.com/embed/${videos.results[0].key}`}
          ></iframe>
        ) : (
          <p className="my-10 text-red-500 font-black">
            Sorry, No Trailer Available
          </p>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;

export const getServerSideProps = async (ctx) => {
  const id = ctx.query.id;
  if (id[1] === "tv") {
    const [detailsRes, videosRes] = await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY}`
      ),
      fetch(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.API_KEY}`
      ),
    ]);

    const [details, videos] = await Promise.all([
      detailsRes.json(),
      videosRes.json(),
    ]);

    return {
      props: {
        details,
        videos,
      },
    };
  } else {
    const [detailsRes, videosRes] = await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.API_KEY}`
      ),
    ]);

    const [details, videos] = await Promise.all([
      detailsRes.json(),
      videosRes.json(),
    ]);

    return {
      props: {
        details,
        videos,
      },
    };
  }
};
