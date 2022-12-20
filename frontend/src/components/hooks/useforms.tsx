import { PageLayout } from '../../layout'
import AppState from './useState'
import NameForm from "./nameForms"



const useForms = () => {

  return (
    <PageLayout>
      <div className="text-blue-900 text-4xl flex justify-center items-center text-center mt-20 bg-service_bg bg-no-repeat h-[45rem] bg-cover">
        <div className="grid space-y-16">
          <p>useforms</p>
        </div>
      </div>
      <NameForm />
      <AppState />
      <div className="flex justify-center items-center pt-10">
        <a className="border-green-500 border-2 px-10 py-2 rounded-full text-green-500 bg-gradient-to-tr from-[#DF1279] to to-[#007FAD]" href="/">
          Home page
        </a>
      </div>
    </PageLayout>
  )
}

export default useForms
