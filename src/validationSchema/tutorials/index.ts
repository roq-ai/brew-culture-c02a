import * as yup from 'yup';

export const tutorialValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
