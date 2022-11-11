import logo from '../../assets/Logo/logo.svg'

const Logo = () => {
  return(
      <div className="relative w-20 h-20">
        <div className='absolute'>
        <img src={logo} alt="logo"/>
        </div>
      </div>
  )
}


export default Logo