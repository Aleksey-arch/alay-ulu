import styless from './SignUp.module.scss'
import { Link } from 'react-router'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit: SubmitHandler<FieldValues> = ({ login, email, password, dublePassword }) => {}
  return (
    <div className={styless.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className={styless.label} htmlFor="login">
            Логин:
          </label>
          <input
            className={styless.input}
            type="text"
            id="login"
            style={{ outline: `${errors?.login ? '2px solid #983232' : ''}` }}
            placeholder="Login"
            {...register('login', { required: true, minLength: 3, maxLength: 25 })}
          />
        </div>
        <div>
          <label className={styless.label} htmlFor="email">
            Почта:
          </label>
          <input
            className={styless.input}
            type="text"
            id="email"
            placeholder="Email"
            style={{ outline: `${errors?.email ? '2px solid #983232' : ''}` }}
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
            })}
          />
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
            style={{ outline: `${errors?.password ? '2px solid #983232' : ''}` }}
            {...register('password', { required: true, minLength: 6, maxLength: 40 })}
          />
          {errors?.password && (
            <div style={{ color: '#983232', fontSize: '12px' }}>
              Ваш пароль меньше 6 или больше 40
            </div>
          )}
        </div>
        <div>
          <label className={styless.label} htmlFor="password">
            Подтвердите пароль:
          </label>
          <input
            className={styless.input}
            type="password"
            id="dublePassword"
            placeholder="Password"
            {...register('dublePassword', {
              required: true,
              validate: (val: string) => {
                if (watch('password') !== val) {
                  return 'Ваши пароли не совпадают'
                }
              },
            })}
            style={{ outline: `${errors?.dublePassword ? '2px solid #983232' : ''}` }}
          />
          {errors?.dublePassword && (
            <div style={{ color: '#983232', fontSize: '12px' }}>Ваши пароли не совпадают</div>
          )}
        </div>

        <button className={styless.btn} type="submit">
          Зарегистрироваться
        </button>
      </form>
      <div className={styless.toRegister}>
        Уже есть профиль?
        <Link to="/sign-in">Вход</Link>
      </div>
    </div>
  )
}

export default SignUp
