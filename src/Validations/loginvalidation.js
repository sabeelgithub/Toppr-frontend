import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Email required'),
    password: yup
    .string()
    .min(5, 'password should contain 5-16 characters')
    .max(16, 'password should contain 5-16 characters')
    // .matches(passwordRule, 'Please create a stronger password')
    .required('password required'),

})