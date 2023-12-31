import axios from "axios";
import { useState, useEffect } from "react";
import { Character } from "../shared/character.model";

interface CharacterData {
  _id: number;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
  sourceUrl: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  __v: number;
}

export const useCharactersData = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "https://api.disneyapi.dev/character?pageSize=100"
        );
        let data: Character[] = response.data.data.reduce(
          (acc: Character[], character: CharacterData) => {
            if (character.films.length > 0) {
              acc.push({
                id: character._id,
                films: character.films,
                tvShows: character.tvShows,
                name: character.name,
                imageUrl: character.imageUrl,
              });
            }
            return acc;
          },
          []
        );
        data = data.sort((a, b) => b.films.length - a.films.length);
        setCharacters(data);
      } catch (error) {
        console.error(error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An error occurred while fetching the data.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { characters, loading, error };
};
