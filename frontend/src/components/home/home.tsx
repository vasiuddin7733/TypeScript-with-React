import { PageLayout } from '../../layout'
import { useQuery } from '@tanstack/react-query'
import 'react-calendar/dist/Calendar.css';


const fetcher = () =>
  fetch('https://api.chucknorris.io/jokes/random').then((res) => res.json())

const Home = () => {
  const { isLoading, error, data: homeInfo } = useQuery(['contacts'], fetcher)
  if (isLoading) return <p>Loading</p>
  if (error) return <p>An error occurred</p>

  console.log('home', homeInfo)

  return (
    <div>
      <PageLayout>
        <div className="bg-home_bg flex flex-col bg-no-repeat h-[45rem] bg-cover">
          <h2 className="text-blue-900 text-4xl flex justify-center text-center mt-20 pb-10">
            Home page
          </h2>

          <div className="flex flex-col justify-center text-center text-red-500">
            <p>{homeInfo.id}</p>
            <p>{homeInfo.url}</p>
            <p>{homeInfo.created_at}</p>
            <p>{homeInfo.updated_at}</p>
            <p>{homeInfo.icon_url}</p>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <div className='flex justify-between space-x-5'>
            <a className="border-green-500 border-2 px-10 py-2 rounded-full text-green-500 bg-gradient-to-tr from-[#DF1279] to to-[#007FAD]" href="/calendar">
              Calendar page
            </a>

            <a className="border-green-500 border-2 px-10 py-2 rounded-full text-green-500 bg-gradient-to-tr from-[#DF1279] to to-[#007FAD]" href="/calculator">
              Calculator page
            </a>
          </div>
          <div className='flex justify-between pt-10 space-x-5'>
            <a className="border-green-500 border-2 px-10 py-2 rounded-full text-green-500 bg-gradient-to-tr from-[#DF1279] to to-[#007FAD]" href="/client">
              Client page
            </a>
            <a className="border-green-500 border-2 px-10 py-2 rounded-full text-green-500 bg-gradient-to-tr from-[#DF1279] to to-[#007FAD]" href="/form">
              Form page
            </a>
            <a className="border-green-500 border-2 px-10 py-2 rounded-full text-green-500 bg-gradient-to-tr from-[#DF1279] to to-[#007FAD]" href="/useforms">
              Useforms
            </a>
            <a className="border-green-500 border-2 px-10 py-2 rounded-full text-green-500 bg-gradient-to-tr from-[#DF1279] to to-[#007FAD]" href="/contact">
              Contact page
            </a>

          </div>
        </div>
      </PageLayout>
    </div>
  )
}

export default Home
