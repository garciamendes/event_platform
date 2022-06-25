// Third party
import { gql, useQuery } from '@apollo/client'
import { isUndefined, map } from 'lodash'

// Project
import { Lesson } from '../Lesson'
import { IGetLessonsQuery } from '../Lesson/types'
import { Loader } from '../Loader'

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      slug
      title
      availableAt
  }
}
`

export function SideBar() {
  const { data } = useQuery<IGetLessonsQuery>(GET_LESSONS_QUERY)

  return (
    <div className="w-[348px]  bg-gray-700 p-6 border-l border-gray-600">
      {isUndefined(data) ? (
        <div className='flex justify-center'>
          <Loader />
        </div>
      ) : (
        <>
          <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">Cronograma das aulas</span>

          <div className='flex flex-col gap-8'>
            {map(data.lessons, (item) => {
              return (
                <Lesson
                  availableAt={new Date(item.availableAt)}
                  slug={item.slug}
                  title={item.title}
                  isLive={item.lessonType === 'live' ? true : false}
                  key={item.id}
                />
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}