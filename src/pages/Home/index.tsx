import React from 'react'

const Home = (): JSX.Element => {
  return (
    <div className="h-screen w-screen from-red-600 to-red-500 bg-gradient-to-b">
      <div className="bg-red-500 h-full w-5/6 items-center text-white flex py-4 justify-center mx-auto shadow-md">
        <section className="w-[600px] justify-center h-60 flex flex-col items-center">
          <h1 className="text-lg font-bold">
            Projeto React com Typescript, Eslint e Prettier
          </h1>
          <p className="text-sm">&copy; Denilson Rocha</p>
        </section>
      </div>
    </div>
  )
}

export default Home
