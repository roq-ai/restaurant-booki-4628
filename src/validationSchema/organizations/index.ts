import * as yup from 'yup';

export const organizationValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  name: yup.string().required(),
  user_name: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
