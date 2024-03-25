import React from 'react';
import MUITypography from '@mui/material/Typography';

type Props = {
    className?: string;
    text: string;
    onClick?: () => void;
}

const Text = React.memo(({ className, text, onClick }: Props) => {
    return (
        <MUITypography
            className={className}
            onClick={onClick}
        >
            {text}
        </MUITypography>
    );
});

export default Text;
