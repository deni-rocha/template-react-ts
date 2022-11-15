import React from 'react'
import Input from '../../components/Input'
import Logo from '../../components/Logo'

const Login = (): JSX.Element => {
  return (
    <section className="bg-[#474747] w-screen h-screen flex items-center justify-center">
      <div
        className="
            xs:w-10/12 xs:h-10/12
            bg-[#848484] text-white w-[400px] h-[517px] flex items-center flex-col rounded-xl drop-shadow-md
            "
      >
        <div className="w-full h-32 flex flex-col mt-10 items-center">
          <Logo />
          <h1 className="text-2xl font-light">Acessar o moov</h1>
        </div>

        <section className="flex flex-col gap-6 w-10/12 mt-3">
          <label className="flex flex-col h-24">
            <p className="font-bold">E-mail de acesso</p>
            <Input type="email" placeholder="Informação" name="email" />
            <p className="self-end text-sm pt-2 cursor-pointer">
              Esqueceu a sua <strong>senha?</strong>
            </p>
          </label>
          <label className="flex flex-col h-24">
            <p className="font-bold">Senha de acesso</p>
            <Input
              type="password"
              name="password"
              placeholder="****************"
            />
          </label>
          <button className="rounded-xl h-16 bg-[#4C4C4C] font-bold">
            Fazer login
          </button>
        </section>
      </div>
    </section>
  )
}

export default Login
