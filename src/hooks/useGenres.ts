import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

 interface Genre {
    id: number;
    name: string;
   
  }
  interface FetchGenreResponse {
    count: number;
    results: Genre[];
  }
const useGames=()=>{

    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {

    const controller = new AbortController();    
      setIsLoading(true);
      apiClient
        .get<FetchGenreResponse>("/genres",{signal:controller.signal})
        .then((res) => {
          setGenres(res.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
            setIsLoading(false);
            if(err instanceof CanceledError) return
          setError(err.message);
        });
        return ()=>controller.abort()
    }, []);

    return{genres,error,isLoading}
}
export default useGames;