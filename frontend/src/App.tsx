import Home from './components/home'
import Service from './containers/service'
import About from './containers/about'
import Contact from './containers/contact'
import Form from './containers/form'
import Client from './containers/apolloClient'
import Calendar from './containers/calendar'
import { NotFound } from './containers/notFound'
import { Routes, Route } from 'react-router-dom'

function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/form" element={<Form />} />
      <Route path="/client" element={<Client />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router
