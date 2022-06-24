import { useGetLessonsQuery } from 'app/graphql/generated'
import * as C from 'src/components'

export function Sidebar() {
  const { data } = useGetLessonsQuery()

  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
        Cronograma de aulas
      </span>

      <div className='flex flex-col gap-8'>
        {data?.lessons.map((lesson) => (
          <C.Lesson
            key={lesson.id}
            type={lesson.lessonType}
            slug={lesson.slug}
            title={lesson.title}
            availableAt={new Date(lesson.availableAt)}
          />
        ))}
      </div>
    </aside>
  )
}
