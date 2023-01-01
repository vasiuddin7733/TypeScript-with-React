import Home from './components/home/home'
import Hello from './components/basic/hello'
import Useforms from './containers/useForms'
import Contact from './containers/contact'
import Form from './containers/form'
import Client from './containers/apolloClient'
import Calendar from './containers/calendar'
import { NotFound } from './containers/notFound'
import { Routes, Route } from 'react-router-dom'
import Calculator from './containers/calculator'

function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/hello" index element={<Hello />} />
      <Route path="/useforms" element={<Useforms />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/form" element={<Form />} />
      <Route path="/client" element={<Client />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router
