import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import fetchMedicalRecord from '../utility/fetchMedicalRecord'
import fetchPatientDetails from '../utility/fetchPatientDetails'

type props = {
  id: number
}

const Details = ({ id }: props) => {
  console.log('Patient Id in Details', id)
  const {
    data: patient,
    isLoading,
    isError,
  } = useQuery(['fetchPatientDetails', id], () => fetchPatientDetails(id || 0))

  const {
    data: userPosts,
    isLoading: isPostsLoading,
    isError: isPostsError,
  } = useQuery(['fetchUserPosts', id], () => fetchMedicalRecord(id || 0))

  return (
    <div>
      <div className="mb-6 rounded border-2 border-slate-100 bg-slate-50 p-2 shadow-md">
        {isLoading ? (
          <div>Looding...</div>
        ) : (
          <div>
            <table>
              <thead className="border-b text-xl dark:border-neutral-600">
                <tr>
                  <th scope="col" className="px-3 py-2">
                    Patient's Info:
                  </th>
                </tr>
              </thead>
              <tr>
                <td scope="col" className="px-3 pb-1 pt-2">
                  ID:
                </td>
                <td scope="col" className="px-3 pb-1 pt-2">
                  {patient?.id}
                </td>
              </tr>
              <tr>
                <td scope="col" className="px-3 py-1">
                  Name:
                </td>
                <td scope="col" className="px-3 py-1">
                  {patient?.name}
                </td>
              </tr>
              <tr>
                <td scope="col" className="px-3 py-1">
                  Email:
                </td>
                <td scope="col" className="px-3 py-1">
                  {patient?.email}
                </td>
              </tr>
              <tr>
                <td scope="col" className="px-3 py-1">
                  Address:
                </td>
                <td scope="col" className="px-3 py-1">
                  {patient?.phone}
                </td>
              </tr>
            </table>
          </div>
        )}
      </div>

      <div>
        <div className="p-3 text-xl text-b font-semibold mb-6 rounded border-2 border-slate-100 bg-slate-50 shadow-md">
          <h1 className="p-2">Medical Records:</h1>
        </div>
        {userPosts &&
          userPosts.map((p, i) => (
            <div
              className="mb-6 rounded border-2 border-slate-100 bg-slate-50 p-2 shadow-md"
              key={p.id + '-' + i}
            >
              <div className="px-3">
                <table>
                  <tr>
                    <td className="text-lg">Medical Record ID:</td>
                    <td className="px-4">{p.id}</td>
                  </tr>
                </table>
              </div>
              <div className="p-3">
                {p.body}
                <br />
                <Link to={`/appointments/${p.id}`}> Go to appointments</Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Details
