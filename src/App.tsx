import React from "react";
import './style/App.scss';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import {Routes, Route} from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import SubmitPage from "./pages/SubmitPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/forgotPass" element={<ForgotPassword/>}/>
                <Route path="/submitPage" element={<SubmitPage/>}/>
            </Routes>
            <Footer/>
        </>

    );
}

export default App;