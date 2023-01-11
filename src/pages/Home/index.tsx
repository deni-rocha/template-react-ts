import React from 'react'

const Home = (): JSX.Element => {
  return (
    <div className="h-screen w-screen from-red-600 to-red-500 bg-gradient-to-b">
      <div className="bg-red-500 h-full w-5/6 flex py-4 justify-center mx-auto shadow-md">
        <h1 className="text-5xl text-white font-bold">
          Projeto com Typescript Eslint e Prettier Configurado
        </h1>
      </div>
    </div>
  )
}

export default Home
