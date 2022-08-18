import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import gameContext from "../../gameContext";

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Zen Tokyo Zoo", cursive;
  position: absolute;
  color: #ddd;
  margin-left: 70%;
  top: 0;
  gap: 8px;
  @media only screen and (max-width: 1000px){
    margin-left: 0;
    position: relative;
    float: inline-end;
    flex-direction: row;
    gap: 25px;
  }
`;
const PlayerScore = styled.div`
  display: flex;
  flex-direction: row;
  font-family:  cursive;
  position: relative;
  color: #ddd;
  top: 100px;
`;


export function ScoreTable() {
    const {
        player1Score,
        player2Score,
      } = useContext(gameContext);
    return (
        <ScoreContainer>
            <PlayerScore>
                <h1>Vos: {player1Score}</h1>
            </PlayerScore>
            <PlayerScore>
                <h1>Otro: {player2Score}</h1>
            </PlayerScore>
        </ScoreContainer>
    )
}
