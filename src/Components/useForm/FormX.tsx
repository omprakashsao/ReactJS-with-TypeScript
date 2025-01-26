import {useForm, SubmitHandler} from 'react-hook-form'

type UserForm = {
    name: string,
    email: string,
    password: number,
}

const FormX = () => {

     const {register,
            handleSubmit,
            formState: {errors}
     } = useForm<UserForm>();

     const submitForm: SubmitHandler<UserForm> = (data) => console.log(data);
  return (
    <div>
        <form onSubmit={handleSubmit(submitForm)}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id='name' {...register("name",{required: 'name is required'})} />
                {errors.name && errors.name.message}
            </div>

            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" id='email' {...register('email', {required: 'email is required', pattern: {value: /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/, message: 'email is must be contain @gmail.com'}})} />
                {errors.email && errors.email.message}
            </div>

            <div>
                <label htmlFor="password">Password: </label>
                <input type="number" id='password' {...register('password', {required: 'password is required'})} />
                {errors.password && errors.password.message}
            </div>
            
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormX