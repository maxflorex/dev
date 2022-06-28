import logoMx from '../../assets/LOGOTYPE-08.svg'
import logoMx2 from '../../assets/LOGO-03.svg'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex-between bg-navy text-white font-serif '>
      <img src={logoMx} alt="Logo Max" className='w-16' />
      <h2>2022 - Max Flores</h2>
      <img src={logoMx2} alt="Logo Max" className='w-8 animate-spin animate-duration-5000 hover:animate-duration-200' />
    </div>
  )
}

export default Footer