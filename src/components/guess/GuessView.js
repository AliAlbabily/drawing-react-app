import React, { useRef } from 'react';

import './GuessView.css';

function GuessView(props) {
    const inputGuessRef = useRef(null);

    const guessWord = () => {
        if (inputGuessRef.current.value === props.wordToGuess) {
            console.log("CORRECT");
        } else {
            console.log("INCORRECT");
        }
    }

    //The word to guess: {props.wordToGuess}
    return ( 
        <div className='GuessView'>
            <div className='ImageDiv'>
                <img src={props.imageSrc} alt='drawing to guess'/>
            </div>
            <div className='InputDiv'>
                <form>
                    <h2>Your guess</h2>
                    <input type='text' ref={inputGuessRef} />
                </form>

                <button onClick={() => guessWord()}>Guess</button>
            </div>
        </div>
    );
}

export default GuessView;