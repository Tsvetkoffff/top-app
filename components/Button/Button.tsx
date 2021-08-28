import { ButtonProps } from "./Button.props";
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './Arrow.svg';


export const Button = ({ children, apearence, className, arrow = 'none', ...props }: ButtonProps): JSX.Element => {
    return <>
        <button 
            className={cn(styles.button, className, {
                [styles.primery]: apearence == 'primery',
                [styles.ghost]: apearence == 'ghost'
                })}
            {...props}
        >
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down'
            })}>
                <ArrowIcon />
            </span>}
        </button>
    </>;
};