import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

import { LoginSchema } from '../schema';
import { ILoginQuery } from '../models';
import { BASE_AUTH_TOKEN, ROUTE_DASHBOARD } from '../../../common/constants';
import { AUTH_FIELD_PASSWORD, AUTH_FIELD_REMEMBER, AUTH_FIELD_USER_NAME } from '../constants';

export const useLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    defaultValues: {
      [AUTH_FIELD_USER_NAME]: '',
      [AUTH_FIELD_PASSWORD]: '',
    },
    resolver: yupResolver(LoginSchema),
    mode: 'onBlur',
  })
  const { register, control, formState: { errors }, handleSubmit, setValue } = form;

  const handleErrors = (errors: any) => {
    console.log('error');
  };

  const onSubmit = (values: ILoginQuery) => {
    setIsLoading(true);
    login(values)
      .then(({ token }) => {
        setBearerToken(token);
        navigate(ROUTE_DASHBOARD);
      })
      .catch(handleErrors)
      .finally(() => setTimeout(() => setIsLoading(false), 20));
  };

  const handleLogin = handleSubmit(onSubmit);

  return { control, register, setValue, isLoading, handleLogin, form };
};

export const login = (values: ILoginQuery): Promise<{token: string}> => {
  return Promise.resolve({ token: 'MOCK TOKEN' })
}

export const setBearerToken = (token: string) => {
  localStorage.setItem(BASE_AUTH_TOKEN, token);
  // headers.common['Authorization'] = `Token ${token}`;
};