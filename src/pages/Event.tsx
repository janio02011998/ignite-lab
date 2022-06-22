import { useParams } from 'react-router-dom'
import * as C from 'src/components'

function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className='flex flex-col min-h-screen'>
      <C.Header />
      <main className='flex flex-1'>
        {slug ? <C.Video lessonSlug={slug} /> : <div className='flex-1' />}
        <C.Sidebar />
      </main>
    </div>
  )
}

export default Event

// Challenge add placeholder or load first lesson available
