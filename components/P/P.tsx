import { Pprops } from "./P.props";
import styles from './P.module.css';
import cn from 'classnames';


export const P = ({ size, children, className, ...props }: Pprops): JSX.Element => {
            return <p 
                        className={cn(styles.p, className, {
                            [styles.mid]: size == 'mid',
                            [styles.big]: size == 'big'
                        })}
                        {...props}>
                {children}
            </p>;   
    };