import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <ul>
      {genres && genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
    </ul>
  );
};

export default GenreList;
