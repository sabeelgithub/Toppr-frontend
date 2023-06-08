import * as yup from 'yup';

export const AddTutorialSchema = yup.object().shape({
    tutorial_name: yup.string().required('Tutorial required'),
    domain:yup.string()
    .required('required')


})