import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import syles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={syles.profileContainer}>
            <img src="https://github.com/FelipeCostaS.png" alt="Felipe Costa" />
            <div>
                <strong>Felipe Costa</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}