import React from 'react';
import * as yup from 'yup';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContext } from '../contexts/auth-context';
import { useContext } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Eye, EyeOff } from 'react-feather';
import BaseInput from '../components/UI/form/BaseInput';

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required('Email is required')
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Email is not valid'
    ),
  password: yup
    .string()
    .trim()
    .required('Password is required')
    .min(8, 'Minimum length 8 characters')
    .max(255, 'Miximum length 100 characters'),
});

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisivle, setPasswordVisivle] = useState(false);
  const history = useHistory();
  const methods = useForm({ resolver: yupResolver(schema) });

  const { handleSubmit } = methods;

  const authCtx = useContext(AuthContext);

  const onSubmit = (data: FormData) => {
    let email = data.email,
      password = data.password;

    setIsLoading(true);

    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB1X-DhmY3hf734ki6JAuoo-WJYrfJ-WFc';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authenication failed!';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            // alert(error);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.replace('/');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const togglePasswordHandler = () => {
    setPasswordVisivle(preState => !preState);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h2>Login</h2>

        <BaseInput
          label="Email:"
          hasFocus={false}
          input={{
            id: 'email',
            type: 'text',
            name: 'email',
            placeholder: 'email...',
            defaultValue: '',
          }}
        />
        <div className="password">
          <BaseInput
            label="Password:"
            hasFocus={false}
            input={{
              id: 'password',
              type: passwordVisivle ? 'text' : 'password',
              name: 'password',
              placeholder: 'password...',
              defaultValue: '',
            }}
          />
          {passwordVisivle ? (
            <Eye onClick={togglePasswordHandler} color="black" size="15px" strokeWidth="2px" className="eye" />
          ) : (
            <EyeOff
              onClick={togglePasswordHandler}
              color="black"
              size="15px"
              strokeWidth="2px"
              className="eye"
            />
          )}
        </div>

        {/* <BaseInput
          label="Password Confirmation:"
          hasFocus={false}
          input={{
            id: 'confirmpassword',
            type: 'password',
            name: 'confirmpassword',
            placeHolder: 'confirm password...',
            defaultValue: '',
          }}
        /> */}

        <div className="form-bottom">
          {isLoading ? 'Loading...' : <button type="submit">Login</button>}
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
