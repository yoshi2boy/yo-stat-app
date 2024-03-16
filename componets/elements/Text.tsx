import MUITypography from '@mui/material/Typography';

type Props = {
    className: string | undefined;
    text: string;
    onClick: () => void | undefined;
}

const Text = ({ className, text, onClick }: Props) => {
    return (
        <MUITypography
            className={className}
            onClick={onClick}
        >
            {text}
        </MUITypography>
    );
};

export default Text;
