import React, { ReactNode } from "react";
import MUIIconButton from '@mui/material/IconButton';

type Props = {
    className?: string;
    children: ReactNode;
    onClick?: () => void;
}

const IconButton = React.memo(({ className, children, onClick }: Props) => {

    return (
        <MUIIconButton
            className={className}
            onClick={onClick}
        >
            {children}
        </MUIIconButton>
    );
});

export default IconButton;
