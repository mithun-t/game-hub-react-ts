import { GameQuery } from "../App";
import useData from "./useData";


export interface Platform{
    id:number;
    name:string;
    slug:string;
}

export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic:number
  }
  const useGames = (gameQuery:GameQuery) => {
    const { data, error, isLoading } = useData<Game>(
      '/games', { 
      params: { 
        genre: gameQuery.genre?.id,
        platforms:gameQuery.platform?.id
      } 
      }, 
      [gameQuery]
      );
    return { games: data, error, isLoading };
};

export default useGames;