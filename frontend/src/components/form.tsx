import React from 'react'
import { PageLayout } from '../layout'
import { useQuery } from '@tanstack/react-query'
import './styles.css'
import axios from 'axios'

const fetcher = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.data)

const Form = () => {
  const { isLoading, error, data: formData } = useQuery(['contacts'], fetcher)
  if (isLoading) return <p>Loading</p>
  if (error) return <p>An error occurred</p>
  const firstForm = formData.slice(0, 10)
  console.log({ formData })

  return (
    <PageLayout>
      <div className="text-blue-900 text-4xl flex justify-center items-center text-center mt-20 bg-service_bg bg-no-repeat h-[45rem] bg-cover">
        <div className="grid space-y-16">
          <p>Service page</p>
        </div>
        <div className="flex justify-center">
          <table>
            <tr className="w-full">
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>location</th>
            </tr>
            {firstForm?.map((form: { id: string; userId?: string; title?: string; email?: string; }, index: number) => {
              return (
                <tr className="w-full text-center" key={index}>
                  <td>{form?.id}</td>
                  <td>{form?.userId}</td>
                  <td>{form?.title}</td>
                  <td>{form?.email}</td>
                </tr>
              )
            },

            )}
          </table>
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

export default Form
