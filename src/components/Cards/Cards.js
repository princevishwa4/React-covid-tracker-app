import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cls from 'classnames';
import styles from './Cards.module.css';

const Cards = (props) => {
    if (!props.data.confirmed)
        return 'Loading....';

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cls(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={props.data.confirmed.value} duration={2} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={4} className={cls(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={props.data.recovered.value} duration={3} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from the Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={4} className={cls(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={props.data.deaths.value} duration={3} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths due to Covid-19</Typography>
                    </CardContent>
                </Grid>                                
            </Grid>
        </div>
    );
}

export default Cards;