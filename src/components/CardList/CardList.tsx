"use client";
import React, { useEffect, useState } from "react";

import { CardListProps, Character } from "@/interfaces/types";
import { getCharactersApi } from "@/services/FetchCharactersService";
import CardItem from "../CardItem/CardItem";
import { CircularProgress } from "@mui/material";
import styles from "@/styles/CardList.module.css";

const CardList: React.FC<CardListProps> = ({ currPage, setTotalPages }) => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    const fetchCharacterAPI = async (currPage: number) => {
      const data = await getCharactersApi(currPage);
      const characters = data.results.map((entry: Character) => ({
        id: entry.id,
        name: entry.name,
        image: entry.image,
      }));
      setCharacterList(characters);
      setTotalPages(data.info.pages);
      setIsLoading(false);
    };

    fetchCharacterAPI(currPage);
  }, [currPage]);

  return (
    <div className={styles.cardList}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardListContainer}>
          {characterList.map((character) => (
            <CardItem
              key={character.id}
              id={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardList;
