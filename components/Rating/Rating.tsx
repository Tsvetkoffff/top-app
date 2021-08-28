import { RatingProps } from "./Rating.props";
import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState, KeyboardEvent } from "react";
import StarIcon from './Star.svg';


export const Rating = ({ isEditeble = false, rating, setRaiting, ...props }: RatingProps): JSX.Element => {
        
    const [raitingArray, setRairingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRaiting(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rating]);

    const constructRaiting = (currentRaiting: number) => {
        const updatedArray = raitingArray.map(
            (r, i) => {
                return (
                    <span 
                        className={cn(styles.star, {
                            [styles.filled]: i < currentRaiting,
                            [styles.editable]: isEditeble
                        })}
                        onMouseEnter={() => changeDisplay(i+1)}
                        onMouseLeave={() => changeDisplay(rating)}
                        onClick={() => handleClick(i+1)}
                    >
                        <StarIcon 
                            tabIndex={isEditeble ? 0 : -1}
                            onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditeble && handleSpace(i+1, e)}
                        />
                    </span>
                );
            }
        );
        setRairingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if(!isEditeble) {
            return;
        }
        constructRaiting(i);
    }; 

    const handleClick = (i: number) => {
        if(!isEditeble || !setRaiting) {
            return;
        }
        setRaiting(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if(e.code != 'Space' || !setRaiting) {
            return;
        }
        setRaiting(i);
    };
    
    return <div {...props}>
        { raitingArray.map((r, i) => (<span key={i}>{r}</span>)) }
    </div>;
};