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

  console.log("location", locations?.locations)

  if (locaton_loading) return <p>Loading...</p>
  if (locaton_error) return <p>Error : {locaton_error.message}</p>
  return (
    <PageLayout>
      <div className="text-4xl flex justify-center items-center text-center mt-20 bg-service_bg bg-no-repeat bg-cover">
        <p className='pb-10'>Client page</p>
      </div>
      <div>
        <div>{locations?.locations?.description}</div>
        <div className="grid grid-cols-2">
          {locations?.locations?.map((location: { id: string; name: string; description: string; photo: string }) => {
            return (
              <div className='flex flex-col justify-center items-center border-2 border-green-500 m-5' key={location?.id}>
                <h3>{location?.name}</h3>
                <h2>{`Id ${location?.id}`}</h2>
                <img
                  width="600"
                  height="250"
                  alt="location-reference"
                  src={`${location?.photo}`}
                />
                <br />
                <b>About this location:</b>
                <div className="flex flex-col justify-center items-center">
                  <p className="w-2/3">{location?.description}</p>
                </div>
                <br />
                <h2>My first Apollo app 🚀</h2>
              </div>

            )
          }
          )}
        </div>
        <div className="flex justify-center pt-10">
          <a className="border-blue-900 border-2 px-10 rounded-full" href="/">
            Home page
          </a>
        </div>
      </div>
    </PageLayout >
  )
}

export default ApolloClient
