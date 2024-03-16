import { ReactNode } from "react";

type Props = {
    className: string | undefined;
    children: ReactNode;
}

const Wrapper = ({ className, children }: Props) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default Wrapper;
