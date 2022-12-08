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

  
  console.log('about', aboutInfo)

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
            {/* {aboutInfor?.map((contact) => (
              <tr className="w-full text-center">
                <td>{contact?.id}</td>
                <td>{contact?.name}</td>
                <td>{contact?.username}</td>
                <td>{contact?.email}</td>
                <td>{contact?.address?.street}</td>
              </tr>
            ))} */}
          </table>
          <div>
        <h3>A Simple React Component Example with Typescript</h3>
        <p>This component shows the Logrocket logo.</p>
        <p>For more info on Logrocket, please visit https://logrocket.com </p>
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
