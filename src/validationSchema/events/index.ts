import * as yup from 'yup';

export const eventValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  date: yup.date().required(),
  organization_id: yup.string().nullable().required(),
});
