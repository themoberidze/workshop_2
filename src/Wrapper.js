import React from "react";
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Parent } from './Parent';

export const Wrapper = () => {
    return (
        <>
            <Navbar/>
            <Parent/>
            <Footer />
        </>
    );
}
