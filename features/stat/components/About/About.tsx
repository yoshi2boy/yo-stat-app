import React from "react";
import styles from './About.module.scss';
import Wrapper from "@/componets/elements/Wrapper";
import Text from "@/componets/elements/Text";

const Anout = () => {
    return (
        <div>
            <Wrapper className={styles.wrapper}>
                <Text
                    className={undefined}
                    text='ABOUT'
                />
            </Wrapper>
        </div>
    )
}

export default Anout;