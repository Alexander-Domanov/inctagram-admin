import React, { useContext } from 'react'

import { useQuery } from '@apollo/client'
import Cookies from 'js-cookie'
import { FieldValues } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

import { useGlobalForm } from '@/common'
import { GET_DATA, loadingEffect, LoginEffect, schemaLogin } from '@/modules/login-module/login'
import { AuthContext } from '@/store/store'
import { GlobalButton, GlobalInput, InputWithEye, Preloader } from '@/ui'
export const LoginForm = () => {
  const { login, logout, setLoading, auth } = useContext(AuthContext)
  const { refetch, data, loading } = useQuery(GET_DATA, {
    fetchPolicy: 'no-cache',
  })

  const { t } = useTranslation()
  const { handleSubmit, register, errors } = useGlobalForm(schemaLogin)
  const handleFormSubmit = async ({ email, password }: FieldValues) => {
    const authorization = btoa(email + ':' + password)

    refetch()
      .then()
      .catch(() => toast.error('Bad request'))
    Cookies.set('authToken', authorization)
  }

  LoginEffect({ data, login, logout })

  loadingEffect({ loading, setLoading })
  if (auth) return <Preloader />

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <form
          className="flex flex-col grow gap-[10px] pt-[22px]  pb-[18px] w-full"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <GlobalInput
            type="email"
            id="email"
            value="admin@admin.me"
            placeholder={t('signIn.email')}
            label={t('login.email')}
            error={errors?.email?.message}
            {...register('email')}
          />
          <InputWithEye
            id="password"
            placeholder={t('signIn.password')}
            label={t('login.password')}
            error={errors?.password?.message}
            {...register('password')}
          />
          <GlobalButton variant="default" type="submit">
            {t('login.signIn')}
          </GlobalButton>
        </form>
      )}
    </>
  )
}
