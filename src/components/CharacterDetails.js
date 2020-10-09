// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacterDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;


  

`

export default function CharacterDetails (props) {

const { character, close } = props;


    return (
        <StyledCharacterDetails>
            
        
            <p>Hair Color: {character.hair_color}</p>


            <button onClick={close}>Close</button>
        </StyledCharacterDetails>
    )
}