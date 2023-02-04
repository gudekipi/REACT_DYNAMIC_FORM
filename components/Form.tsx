import React, { useState, useEffect } from 'react';
import { sendFormData, fetchFormData } from '../store/actions';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import FormFieldComponent from './FormFields';
import { Grid, Button } from '@material-ui/core';
import { FormField, FormValues } from '../interfaces/index'
import ResponseBox from './ResponseBox'

const Form: React.FC = () => {
  const form = useAppSelector((state) => state.formData);
  const isLoading = useAppSelector((state) => state.isLoading);
  const response = useAppSelector((state) => state.responseData);
  const [inputs, setInputs] = useState<FormValues>({});
  const [fields, setFields] = useState<FormField[]>();;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFormData());
  }, [dispatch]);

  useEffect(()=>{
    return setFields(form);
  }, [form])

  useEffect(() => {
    const formValues: FormField[] = form
    const formData = formValues.reduce(
      (acc, { fieldName, value }) => ({ ...acc, [fieldName]: value }),
      {}
    );
    setInputs(formData);

  }, [form]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const generateForm = () =>{
    dispatch(fetchFormData());
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(sendFormData(inputs));
  };

  return (
    <Grid>
      <form onSubmit={handleSubmit}>
        {fields?.map((field) => (
          <Grid item key={field.fieldName}>
            <FormFieldComponent fieldValue={inputs[field.fieldName]} field={field} handleChange={handleChange} />
          </Grid>
        ))}
        <Grid item >
          <Button fullWidth onClick={generateForm} disabled={isLoading} type="submit" variant='text'>
            Generate
          </Button>
          <Button  fullWidth disabled={isLoading} type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </form>
      {response && <Grid item  ><ResponseBox data={response} /> </Grid>}
    </Grid>
  );
};

export default Form;