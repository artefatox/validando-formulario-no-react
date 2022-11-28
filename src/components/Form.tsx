import { useFormik } from "formik"
import { schema } from '../schemas/form-schema'

const Form = () => {
    const formik = useFormik({
        initialValues: { name: '', age: '', email: '' },
        validationSchema: schema,
        onSubmit: values => {
            console.log(values)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <label>Nome</label>
            <input type="text" name="name" onChange={formik.handleChange} value={formik.values.name}/>
            <span>{formik.errors.name}</span>

            <label>Idade</label>
            <input type="text" name="age" onChange={formik.handleChange} value={formik.values.age}  />
            <span>{formik.errors.age}</span>

            <label>E-mail</label>
            <input type="text" name="email" onChange={formik.handleChange} value={formik.values.email} />
            <span>{formik.errors.email}</span>

            <button type="submit">Enviar</button>
        </form>
    )
}

export default Form