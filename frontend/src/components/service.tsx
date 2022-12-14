import { PageLayout } from '../layout'
import { useQuery } from '@tanstack/react-query'

const fetcher = () =>
  fetch('https://random-facts2.p.rapidapi.com/getfact').then((res) =>
    res.json()
  )

const Service = () => {
  const {
    isLoading,
    error,
    data: serviceData,
  } = useQuery(['contacts'], fetcher)
  if (isLoading) return <p>Loading</p>
  if (error) return <p>An error occurred</p>
  console.log('servicedata', serviceData)

  return (
    <PageLayout>
      <div className="text-blue-900 text-4xl flex justify-center items-center text-center mt-20 bg-service_bg bg-no-repeat h-[45rem] bg-cover">
        <div className="grid space-y-16">
          <p>Service page</p>
        </div>
      </div>
      <p>{serviceData?.message}</p>
      <div className="flex justify-center pt-10">
        <a className="border-blue-900 border-2 px-10 rounded-full" href="/">
          Home page
        </a>
      </div>
    </PageLayout>
  )
}

export default Service
