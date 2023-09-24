"use client";

import { Character } from "@/interfaces/types";
import React from "react";
import styles from "@/styles/CardItem.module.css";

const CardItem: React.FC<Character> = ({ id, name, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img className={styles.img} src={image} alt=""></img>
      </div>

      <div className={styles.cardName}>{name}</div>
    </div>
  );
};

export default CardItem;
