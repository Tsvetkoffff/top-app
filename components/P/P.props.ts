import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface Pprops extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 'mid' | 'big';
    children: ReactNode;
}