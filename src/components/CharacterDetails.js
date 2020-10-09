// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacterDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid black;
    padding: 1%;
    background: rgb(0, 0, 0, 0.25);
    width: 30%;
    color: white;
`

export default function CharacterDetails (props) {

const { character } = props;


    return (
        <StyledCharacterDetails>
            
        
            <p>Hair Color: {character.hair_color}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            <p>Mass: {character.mass}</p>
            <p>Height: {character.height}</p>


        </StyledCharacterDetails>
    )
}