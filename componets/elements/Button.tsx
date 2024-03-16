import Link from 'next/link';
import MUIButton from '@mui/material/Button';

type Props = {
    className: string | undefined;
    text: string;
    link: string;
}

const Button = ({ text, className, link }: Props) => {
    return (
        <MUIButton className={className}>
            <Link href={link} passHref>
                {text}
            </Link>
        </MUIButton>
    );
};

export default Button;
