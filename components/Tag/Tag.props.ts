import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size: 's' | 'm';
    children: ReactNode;
    color?: 'ghost' | 'grey' | 'green' | 'red' | 'primery'
    href?: string
}