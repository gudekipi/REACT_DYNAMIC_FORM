import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
    }),
);

const Loader: React.FC = () => {
    const classes = useStyles();
    const isLoading = useAppSelector((state) => state.isLoading);
    return (
        isLoading && <div className={classes.root}>
            <CircularProgress />
        </div>
    );
};

export default Loader;