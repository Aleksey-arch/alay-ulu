import styless from './SignIn.module.scss'
import { Link, useNavigate } from 'react-router'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { signIn } from '../../Entities/sign-in.ts'

function SignIn() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm()
  const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues): void => {
    const res: boolean = signIn(data)
    if (!res) {
      setError('email', {
        type: 'email',
        message: 'Email занят или неверный',
      })
      setError('password', {
        type: 'password',
        message: 'Email занят или неверный',
      })
    } else {
      navigate('/main-page')
    }
  }
  return (
    <div className={styless.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className={styless.label} htmlFor="email">
            Email:
          </label>
          <input
            className={styless.input}
            type="text"
            id="email"
            placeholder="Email"
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
            })}
            style={{ outline: `${errors?.email ? '2px solid #983232' : ''}` }}
          />
          {errors?.email && (
            <div style={{ color: '#983232', fontSize: '12px' }}>Почта или пароль не верен!</div>
          )}
        </div>
        <div>
          <label className={styless.label} htmlFor="password">
            Пароль:
          </label>
          <input
            className={styless.input}
            type="password"
            id="password"
            placeholder="Password"
            {...register('password', { required: true, minLength: 6, maxLength: 40 })}
            style={{ outline: `${errors?.password ? '2px solid #983232' : ''}` }}
          />
          {errors?.password && (
            <div style={{ color: '#983232', fontSize: '12px' }}>Почта или пароль не верен!</div>
          )}
        </div>

        <button className={styless.btn} type="submit">
          Войти
        </button>
      </form>
      <div className={styless.toRegister}>
        Нет профиля?
        <Link to="/sign-up">Регистрация</Link>
      </div>
    </div>
  )
}

export default SignIn
