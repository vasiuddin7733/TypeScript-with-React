import React from 'react'
import { PageLayout } from '../layout'
import { useQuery, gql } from '@apollo/client'

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`

const ApolloClient = () => {
  const {
    loading: locaton_loading,
    error: locaton_error,
    data: locations,
  } = useQuery(GET_LOCATIONS)

  console.log("location", locations)

  if (locaton_loading) return <p>Loading...</p>
  if (locaton_error) return <p>Error : {locaton_error.message}</p>
  return (
    <PageLayout>
      <div className="text-blue-900 text-4xl flex justify-center items-center text-center mt-20 bg-service_bg bg-no-repeat h-[45rem] bg-cover">
        <div className="grid space-y-16">
          <p>Client page</p>
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <a className="border-blue-900 border-2 px-10 rounded-full" href="/">
          Home page
        </a>
      </div>
      <div>
        <div>{locations?.description}</div>
        {/* {locations.locations.map(({ id, name, description, photo }) => (
          <div key={id} className="flex flex-col justify-center items-center">
            <h3>{name}</h3>
            <img
              width="400"
              height="250"
              alt="location-reference"
              src={`${photo}`}
            />
            <br />
            <b>About this location:</b>
            <div className="flex flex-col justify-center items-center">
              <p className="w-1/3">{description}</p>
            </div>
            <br />
            <h2>My first Apollo app 🚀</h2>
          </div>
        ))} */}
      </div>
    </PageLayout>
  )
}

export default ApolloClient
