import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {games && (
        <ul>
          {games.map((game) => (
            <li key={game.id}>{game.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default GameGrid;
