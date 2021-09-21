import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório').matches(/^[a-zA-ZáàâãéèêíïóôõöúçÁÀÂÃÉÈÍÏÓÔÕÖÚÇ ]+$/, 'Nome com apenas letras'),
  email: yup.string().required('E-mail é obrigatório').email('Não é um e-mail válido'),
  password: yup.string().required('Senha é obrigatória').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, 'A senha não é forte o suficiente'),
  passwordConfirmation: yup.string().required('Confirmação de senha é obrigatória').oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
});

export default schema;