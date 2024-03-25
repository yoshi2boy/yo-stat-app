import React, { ReactNode } from "react";

type Props = {
    className: string | undefined;
    children: ReactNode;
}

const Wrapper = React.memo(({ className, children }: Props) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
});

export default Wrapper;
