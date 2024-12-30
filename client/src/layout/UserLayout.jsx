import React, { useEffect, useState } from 'react'
import Header from '../components/user/Header'
import Footer from '../components/user/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import UserHeader from '../components/user/UserHeader'
import { useSelector } from 'react-redux'
import { axiosInstance } from '../config/axiosInstance'

function userLayout() {

    const { darkMode } = useSelector((state) => state.mode)
    console.log(darkMode)

    useEffect(() => {
        document.body.style.background = darkMode ? "white" : "black";
    }, [darkMode]);

    const location = useLocation()

    const { isUserAuth } = useSelector((state) => state.user)



    const checkUser = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: "/user/check-user",
            });
            // setIsUserAuth(true)
            console.log(response, "=====checkUser");
        } catch (error) {
            console.log(error);
            // setIsUserAuth(true)
        }
    };

    console.log("isuserAuth : - ", isUserAuth );

    useEffect(() => {
        checkUser();
    }, [location.pathname]);


    return (
        <>
            {isUserAuth ? <UserHeader /> : <Header />}
            <Outlet />
            <Footer />
        </>
    )
}

export default userLayout