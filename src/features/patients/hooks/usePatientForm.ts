import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { patientFormSchema } from '../schema';

export const usePatientForm = () => {

  const [isLoading, setIsLoading] = useState(false);

  const defaultValues = {}

  const { register, control, formState: { errors }, handleSubmit, setValue, reset, getValues } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(patientFormSchema),
    mode: 'onBlur',
  });

  const handleErrors = (errors: any) => {
    console.log(errors);
  };

  const onSubmit = (values: any) => {
    console.log(values);
    setIsLoading(true);
    createPatient(values)
      .then(() => {

      })
      .catch(handleErrors)
      .finally(() => setTimeout(() => setIsLoading(false), 20));
  };

  const handleReset = () => {
    reset(defaultValues)
  }

  const handlePatientForm = handleSubmit(onSubmit);

  return { control, register, setValue, getValues, isLoading, handleReset, resetValues: reset, handlePatientForm };
};

export const createPatient = (values: any): Promise<{ success: boolean }> => {
  return Promise.resolve({ success: true })
}