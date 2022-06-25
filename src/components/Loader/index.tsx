// Local
import './spinner.css'
import { ILoader } from './types'

export function Loader({ size }: ILoader) {
  return (
    <div className='spinner-container'>
      <div className={`loading-spinner size-${size || 'medium' }`}></div>
    </div>
  )
}