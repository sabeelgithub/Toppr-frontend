import * as yup from 'yup';

export const AddSubTutorialSchema = yup.object().shape({
    sub_tutorial_name: yup.string().required('Sub tutorial required'),
    description:yup.string().required('description required'),
    tutorial:yup.number().required('required'),
    domain:yup.number().required('required')


})