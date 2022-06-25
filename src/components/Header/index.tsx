// Project
import LogoImg from '../../static/images/logo.svg'

export function Header() {
  return (
    <header className='w-full py-4 flex items-center justify-center bg-gray-700 border-b border-gray-600'>
      <img src={LogoImg} />
    </header>
  )
}