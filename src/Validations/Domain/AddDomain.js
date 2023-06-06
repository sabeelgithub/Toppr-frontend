import * as yup from 'yup';

export const AddDomainSchema = yup.object().shape({
    domain_name: yup.string().required('Domain required'),
    description: yup.string().required('Description required'),
    price:yup.number('should be number')
    .positive()
    .integer()
    .required('phone number required'),

})