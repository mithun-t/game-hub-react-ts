import useData from "./useData";
export interface Genre {
    id: number;
    name: string;
  }
const useGames=()=> useData<Genre>("/genres");
export default useGames;