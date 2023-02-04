import React, { ReactNode } from 'react';
import { Grid } from '@material-ui/core';

type Props = {
  children?: ReactNode
};

const Layout = ({ children }: Props) => (
  <Grid container style={{ width: '500px', margin: '0 auto' }}>
    <Grid item xs={12} style={{ justifyContent: 'center' }}>
      {children}
    </Grid>
  </Grid>
);

export default Layout;
