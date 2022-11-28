import * as Yup from 'yup'

export const schema = Yup.object().shape({
    name: Yup.string().min(3, "Minimo de caracteres aceitável é 3")
        .max(55, "Máximo de caracteres aceitável é 55")
        .required("O campo Nome é obrigatório"),
    age: Yup.number()
        .min(18, "Idade mínima aceitável é de 18 anos")
        .max(65, "Idade máxima aceitável é de 65 anos")
        .required("O campo idade é obrigatório"),
    email: Yup.string().trim()
        .matches(/\S+@\S+\.\S+/, "Email inválido")
        .required("O campo E-mail é obrigatório")
})