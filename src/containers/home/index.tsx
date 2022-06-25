// React
import { ChangeEvent, FormEvent, useState } from 'react'

// Project
import LogoImg from '../../static/images/logo.svg'
import DemoImg from '../../static/images/code_mockup.png'
import ReactImg from '../../static/images/react_login.svg'
import { gql, useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { Loader } from '../../components/Loader'

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber ($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }

`

export function Home() {
  // State
  const [form, setForm] = useState({ name: '', email: '' })

  // Hooks
  const navigate = useNavigate()

  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION)

  function onChangeForm(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault()

    createSubscriber({
      variables: { name: form.name, email: form.email },
      onCompleted(data) {
        navigate({ pathname: '/event' })
      },
    })
  }

  return (
    <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
      <img src={ReactImg} className='absolute w-[400px] top-4' />

      <div className='w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto'>
        <div className='max-w-[640px] '>
          <img src={LogoImg} />
          <h1 className='mt-8 text-[2.5rem] leading-tight'>
            Construa uma <strong className='text-blue-500'>aplicação completa</strong>, do zero, com <strong className='text-blue-500'>React</strong>
          </h1>
          <p className='mt-4 text-gray-200 leading-relaxed'>
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className='p-8 bg-gray-700 border border-gray-500 rounded'>
          <strong className='text-2xl mb-6 block'>Inscreva-se gratuitamente</strong>

          <form onSubmit={handleOnSubmit} className='flex flex-col gap-2 w-full'>
            <input
              className='bg-gray-900 rounded px-5 h-14'
              type="text"
              required
              name='name'
              onChange={onChangeForm}
              placeholder='Seu nome completo'
            />
            <input
              className='bg-gray-900 rounded px-5 h-14'
              required
              name='email'
              onChange={onChangeForm}
              type="email"
              placeholder='Digite seu email'
            />

            <button
              disabled={loading}
              className={`${loading && 'opacity-70'} ${loading && 'cursor-not-allowed'} flex items-center justify-center mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm ${!loading && 'hover:bg-green-700'} transition-colors`}
              type="submit"
            >
              {loading ? (
                <Loader size='mini' />
              ) : ('Garantir minha vaga')}
            </button>
          </form>
        </div>
      </div>


      <img src={DemoImg} className='mt-10' />
    </div>
  )
}