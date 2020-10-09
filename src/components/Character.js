// Write your Character component here
import React, { useState } from 'react'
import styled from 'styled-components'
import CharacterDetails from './CharacterDetails'

const StyledCharacter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    


    .acc {
        display: flex;
        width: 30%;
        justify-content: space-between;
        border: 1px solid black;
        padding: 1%;
        background: rgb(0, 0, 0, 0.25);
        color: white;
    }
       

`

export default function Character (props) {
    const [ activeChar, setActiveChar ] = useState(null)

    const { character } = props;

    const setDetails = name => {
        if(activeChar === name){
            setActiveChar(null)
        }else{
            setActiveChar(name)
        }
    }

    

    return (
        <StyledCharacter
             onClick={() => setDetails(character.name)}
        >
            <div className="acc">
                <p>{character.name}</p>
                <p>{character.birth_year}</p>
            </div>
                
        {
          activeChar && 
            <CharacterDetails 
                character={character}
            />
        }
        </StyledCharacter>
    )
}