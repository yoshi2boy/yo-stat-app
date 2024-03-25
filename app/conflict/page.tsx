import Footer from "@/componets/layouts/footer/Footer";
import Header from "@/componets/layouts/header/Header";
import * as About from '@/features/stat/components/About/index';
import React from "react";

const page = () => {
    return (
        <div>
            <Header />
            <About.About />
            <Footer />
        </div>
    )
}

export default page;