import React from 'react';
import classes from './PageBody.module.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import ListPage from "./ListPage";
import FormPage from "./FormPage";

const PageBody = () => {
    return (
        <div className={classes.PageBody}>
            <Routes>
                <Route path={"/"} element={<HomePage/>}></Route>
                <Route path={"/list"} element={<ListPage/>}></Route>
                <Route path={"/form"} element={<FormPage/>}></Route>
            </Routes>
        </div>
    );
};

export default PageBody;
