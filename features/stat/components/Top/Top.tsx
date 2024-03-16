import React from "react";
import styles from './Top.module.scss';
import Wrapper from "@/componets/elements/Wrapper";
import Text from "@/componets/elements/Text";

const Top = () => {
    return (
        <div>
            <Wrapper className={styles.wrapper}>
                <Text
                    className={undefined}
                    onClick={undefined}
                    text={"Top"}
                />
            </Wrapper>
        </div>
    )
}

export default Top;