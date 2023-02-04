import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { camelCaseToLabel } from '../utils';


interface ResponseDataProps {
    data: {
        success: boolean;
        message: string;
        data?: any;
    };
}
const ResponseData: React.FC<ResponseDataProps> = ({ data }) => {
    return (
        <Paper style={{ padding: '20px', marginTop: '20px' }}>
            {data.success && data?.data ? (
                <>
                    <Typography style={{ fontWeight: 'bold' , marginBottom: '20px'}} variant="subtitle2">
                      Last Submission Status:   {camelCaseToLabel(data.message)}
                    </Typography>

                    {
                        Object.keys(data?.data).map((item) => (
                            <>
                                <Typography style={{ fontWeight: 'bold' }} variant="subtitle2">
                                    {camelCaseToLabel(item)}
                                </Typography>
                                <Typography variant="subtitle2">
                                    {data.data?.[item]}
                                </Typography>
                            </>
                        ))
                    }

                </>
            ) : (
                <Typography variant="h6">{data.message}</Typography>
            )}
        </Paper>
    );
};

export default ResponseData;