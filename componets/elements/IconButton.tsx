import { ReactNode } from "react";
import MUIIconButton from '@mui/material/IconButton';

type Props = {
    className: string | undefined;
    children: ReactNode;
    onClick: () => void | undefined;
}

const IconButton = ({ className, children, onClick }: Props) => {

    return (
        <MUIIconButton
            className={className}
            onClick={onClick}
        >
            {children}
        </MUIIconButton>
    );
};

export default IconButton;
