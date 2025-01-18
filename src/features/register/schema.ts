import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .required('Username is required'),
  
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  fullname: Yup.string()
    .min(3, 'fullname must be at least 3 characters')
    .required('fullname is required'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
