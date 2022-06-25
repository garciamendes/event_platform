// React
import { useParams } from 'react-router-dom'

// Project
import { Video } from '../../components/Video'
import { Header } from '../../components/Header'
import { SideBar } from '../../components/Sidebar'

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1'>
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className='flex-1 flex justify-center'>
            <strong className='mt-10 text-green-400'>Selecione uma aula</strong>
          </div>
        )}
        <SideBar />
      </main>
    </div>
  )
}