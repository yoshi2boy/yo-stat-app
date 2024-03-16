import React from "react";
import * as Top from '@/features/stat/components/Top/index';
import Header from "@/componets/layouts/header/Header";
import Footer from "@/componets/layouts/footer/Footer";

const TopPage = () => {

    return (
        <div>
            <Header />
            <Top.Top />
            <Footer />
        </div>
    )
}

export default TopPage;
