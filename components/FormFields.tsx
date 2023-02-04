import React from 'react';
import { MenuItem, TextField, makeStyles,  } from '@material-ui/core';
import { camelCaseToLabel } from '../utils';

interface FormField {
    fieldName: string;
    type: string;
    value: string | number;
    options?: string[];
}

interface FormFieldComponentProps {
    field: FormField;
    fieldValue?: string | number;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles({
    root: {
        margin: '10px 0',
    },
});

const FormFieldComponent: React.FC<FormFieldComponentProps> = ({ field, handleChange, fieldValue }) => {
    const classes = useStyles();

    switch (field.type) {
        case 'text':
        case 'email':
        case 'number':
        case 'multiline':
            return (
                <TextField
                    size='small'
                    label={camelCaseToLabel(field.fieldName)}
                    variant='outlined'
                    fullWidth
                    name={field.fieldName}
                    value={fieldValue}
                    multiline={field.type === 'multiline'}
                    defaultValue={field.value}
                    onChange={handleChange}
                    className={classes.root}
                />
            );
        case 'select':
            return (
   
                    <TextField
                        fullWidth
                        size='small'
                        variant='outlined'
                        label={camelCaseToLabel(field.fieldName)}
                        name={field.fieldName}
                        value={fieldValue}
                        select
                        defaultValue={field.value}
                        onChange={handleChange}
                        className={classes.root}
                    >
                        {field.options?.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
            
                  
               
            );
        default:
            return null;
    }
};

export default FormFieldComponent;