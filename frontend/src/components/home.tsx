import { PageLayout } from '../layout'
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
        <div className="flex justify-evenly pt-10">
          <a
            className="border-green-500 border-2 px-5 rounded-full"
            href="/service"
          >
            Service page
          </a>
          <a
            className="border-green-500 border-2 px-5 rounded-full"
            href="/contact"
          >
            Contact page
          </a>
          <a
            className="border-green-500 border-2 px-5 rounded-full"
            href="/form"
          >
            Form page
          </a>
          <a
            className="border-green-500 border-2 px-5 rounded-full"
            href="/about"
          >
            About page
          </a>
          <a
            className="border-green-500 border-2 px-5 rounded-full"
            href="/client"
          >
            Client page
          </a>
          <a
            className="border-green-500 border-2 px-5 rounded-full"
            href="/calendar"
          >
            Calendar page
          </a>
        </div>
      </PageLayout>
    </div>
  )
}

export default Home
