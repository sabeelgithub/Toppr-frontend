import * as yup from 'yup';

// const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const ClientEditSchema = yup.object().shape({
    username: yup
        .string()
        .min(2, 'username must be at least 2 characters')
        .max(20)
        .matches(/^[a-zA-Z]+$/, 'Only alphabets are allowed')
        .required('username required'),
    email: yup.string().email('Please enter a valid email').required('Email required'),
    phone: yup
        .number('Phone number must be a 10 digit number')
        .positive()
        .integer()
        .test('len', 'Phone number should be a 10 digit number', val => /^\d{10}$/.test(val))
        .required('phone number required'),      
});
