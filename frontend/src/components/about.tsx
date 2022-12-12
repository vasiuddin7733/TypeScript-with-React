import React from 'react'
import { PageLayout } from '../layout'
import { useQuery } from '@tanstack/react-query'
import './styles.css'

const fetcher = () =>
  fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())

const About = () => {
  const { isLoading, error, data: aboutInfo } = useQuery(['contacts'], fetcher)
  if (isLoading) return <p>Loading</p>
  if (error) return <p>An error occurred</p>


  console.log('aboutInfo', aboutInfo)
  const aboutInformation = aboutInfo?.slice(0, 8);

  type about = { id: string; name?: string; username?: string; email: string; address: { street: string } }

  return (
    <PageLayout>
      <div className="text-blue-900 text-4xl flex justify-center items-center text-center mt-20 bg-about_bg flex-col bg-no-repeat h-[45rem] bg-cover">
        <div className="grid space-y-16">
          <p className="">About page</p>
        </div>
        <div className="flex flex-col justify-center items-center my-8">
          <table>
            <tr className="w-full">
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>location</th>

            </tr>
            {aboutInformation?.map((about: about, index: number) => {
              return (
                <tr className="w-full text-center" key={index}>
                  <td>{about?.id}</td>
                  <td>{about?.username}</td>
                  <td>{about?.name}</td>
                  <td>{about?.email}</td>
                  <td>{about?.address?.street}</td>
                </tr>
              )
            },
            )}
          </table>
          <div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <a className="border-blue-900 border-2 px-10 rounded-full" href="/">
          Home page
        </a>
      </div>
    </PageLayout>
  )
}

export default About
