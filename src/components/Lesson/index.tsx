// Third party
import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

// Local
import { ILessonProps } from './types'
import { Link, useParams } from 'react-router-dom'

export function Lesson({ isLive, isReleased, title, availableAt, slug }: ILessonProps) {
  // Hooks
  const { slug: slugParams } = useParams<{ slug: string }>()

  // Others
  isReleased = isPast(availableAt)
  const availableAtFormated = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'K'h'MM", {
    locale: ptBr
  })

  return (
    <Link to={isReleased ? `/event/lesson/${slug}` : '/event'} className='group'>
      <span className="text-gray-300">{availableAtFormated}</span>

      <div className={`relative rounded ${slug === slugParams ? 'bg-green-500' : 'bg-transparent'} border ${slug === slugParams ? 'border-green-500' : 'border-gray-500'} group-hover:border-green-500 transition-colors p-4 mt-2`}>
        <header className="flex items-center justify-between">
          <span className={`flex items-center gap-2 text-sm ${slug === slugParams ? 'text-white' : isReleased ? 'text-blue-500' : 'text-orange-500'} font-medium`}>
            {isReleased ? (
              <>
                <CheckCircle size={20} />
                Conteúdo liberado
              </>
            ) : (
              <>
                <Lock size={20} />
                Em breve
              </>
            )}
          </span>
          <span className={`text-xs rounded px-2 py-[2px] ${slug === slugParams ? 'text-white' : isLive ? 'text-green-300' : 'text-white'} border ${slug === slugParams ? 'text-white' : isLive ? 'border-green-300' : 'border-gray-300'} font-bold`}>
            {isLive ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className={`${slug === slugParams ? 'text-white' : 'text-gray-200'} mt-5 block`}>{title}</strong>
      </div>
    </Link>
  )
}