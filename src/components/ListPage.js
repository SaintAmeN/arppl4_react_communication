import React, {useEffect, useState} from 'react';
import classes from './ListPage.module.css';
import axios from 'axios';
import {Grid} from "@mui/material";

const ListPage = () => {
    const [produkty, setProdukty] = useState([]);

    const polaczenie = axios.create({
        baseURL: "http://localhost:8080"
    });

    // Zapobiega zbyt częstemu odświeżaniu komponentu
    useEffect(() => {
        // http://localhost:8080/products
        polaczenie.get("/products")
            .then((odpowiedz) => {
                console.log('Polaczenie then ')

                setProdukty(odpowiedz.data);
            }).catch(() => {
            console.log('Byl blad')
        });
    }, []);

    return (
        <div className={classes.ListPage}>
            <Grid container className={classes.NaglowekTabeli}>
                <Grid item xs={1}>Id</Grid>
                <Grid item xs={2}>Name</Grid>
                <Grid item xs={3}>Description</Grid>
                <Grid item xs={2}>State</Grid>
                <Grid item xs={1}>Type</Grid>
                <Grid item xs={1}>Price</Grid>
                <Grid item xs={1}>Quantity</Grid>
                <Grid item xs={1}/>
            </Grid>
            <Grid container className={classes.TabelaRekordy}>
                {
                    produkty.map((produkt) => {
                        return (
                            <Grid key={produkt.id} container className={classes.RekordTabeli}>
                                <Grid item xs={1}>{produkt.id}</Grid>
                                <Grid item xs={2}>{produkt.name}</Grid>
                                <Grid item xs={3}>{produkt.description}</Grid>
                                <Grid item xs={2}>{produkt.state}</Grid>
                                <Grid item xs={1}>{produkt.type}</Grid>
                                <Grid item xs={1}>{produkt.price}</Grid>
                                <Grid item xs={1}>{produkt.quantity}</Grid>
                                <Grid item xs={1}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    );
};

export default ListPage;
