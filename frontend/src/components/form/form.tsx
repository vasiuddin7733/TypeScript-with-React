import { PageLayout } from '../../layout'
import { useQuery } from '@tanstack/react-query'
import '../../styles/styles.css'
import axios from 'axios'

const fetcher = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.data)

const Form = () => {
  const { isLoading, error, data: formData } = useQuery(['contacts'], fetcher)
  if (isLoading) return <p>Loading</p>
  if (error) return <p>An error occurred</p>
  const firstForm = formData.slice(0, 3)
  console.log({ formData })

  return (
    <PageLayout>
      <div className="text-blue-900 text-4xl flex flex-col justify-center items-center text-center mt-20 bg-service_bg bg-no-repeat h-[45rem] bg-cover">
        <div className="grid pb-10">
          <p>Service page</p>
        </div>
        <div className="flex justify-center">
          <table>
            <tr className="w-full">
              <th>id</th>
              <th>name</th>
              <th>username</th>
              <th>body</th>
            </tr>
            {firstForm?.map((form: { id: string; userId?: string; title?: string; body?: string; }, index: number) => {
              return (
                <tr className="w-full text-center" key={index}>
                  <td>{form?.id}</td>
                  <td>{form?.userId}</td>
                  <td>{form?.title}</td>
                  <td>{form?.body}</td>
                </tr>
              )
            },

            )}
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

export default Form
