"use client"


import { ThemeContext } from "@/components/context/ThemeContext";

// import { ThemeContext } from "../context/ThemeContext";
import React, { useContext, useEffect, useState } from "react"

const ThemeProvider = ({ children }:any) => {
    const { theme }:any = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    },[])

    if (mounted) {
        return <div className={theme}>{children}</div>
    }
    
}

export default ThemeProvider;