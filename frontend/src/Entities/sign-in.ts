// import {IDataSignIn} from "./interface.ts";
// @ts-ignore
// import {dataUsers} from '../devDataUsers/devDataUsers.ts'
import { FieldValues } from 'react-hook-form'
const dataUsers = {
  '1@1.ru': {
    login: 'alex',
    email: '1@1.ru',
    password: '123123',
  },
}
export function signIn({ email, password }: FieldValues): boolean {
  if (email in dataUsers) {
    if (dataUsers['1@1.ru'].password === password) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
