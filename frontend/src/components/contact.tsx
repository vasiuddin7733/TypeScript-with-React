import React from 'react'
import PageLayout from '../layout/pageLayout'
import { useQuery } from '@tanstack/react-query'
import '../styles/styles.css'

const fetcher = () =>
  fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())

const Contact = () => {
  const { isLoading, error, data } = useQuery(['contacts'], fetcher)
  if (isLoading) return <p>Loading</p>
  if (error) return <p>An error occurred</p>

  console.log("data", data)
  return (
    <PageLayout>
      <div className="text-3xl flex flex-col bg-contact_bg bg-no-repeat h-[45rem] bg-cover">
        <div className="text-blue-900 text-4xl flex justify-center text-center mt-5">
          <div className="grid space-y-16">
            <p>Contact page</p>
          </div>
        </div>
        <div className="flex justify-center items-center my-8">
          <table>
            <tr className="w-full">
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>location</th>
            </tr>
            {data?.map((contact: { id: string, name: string, username: string, email: string, address: { street: string } }, index: number) => (
              <tr key={index} className="w-full text-center">
                <td>{contact?.id}</td>
                <td>{contact?.name}</td>
                <td>{contact?.username}</td>
                <td>{contact?.email}</td>
                <td>{contact?.address?.street}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      <div className="flex justify-center items-center pt-10">
        <a className="border-green-500 border-2 px-10 py-2 rounded-full text-green-500 bg-gradient-to-tr from-[#DF1279] to to-[#007FAD]" href="/">
          Home page
        </a>
      </div>
    </PageLayout>
  )
}

export default Contact
