import { useQuery } from 'react-query'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Details from './Details'
import fetchAppointment from '../utility/fetchAppointment'

const Appointment = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    data: appointments,
    isLoading,
    isError,
  } = useQuery(['fetchPatientDetails', id], () => fetchAppointment(id || '0'))

  if (isLoading) {
    return (
      <div>
        <h2>Looding...</h2>
      </div>
    )
  }

  return (
    <>
      <div className="text-3xl  text-neutral-900 h-19 font-semibold font-serif bg-neutral-900 flex justify-center p-5">
        <Link to="/">
          <h1 className="text-white">Patient Management Dashboard</h1>
        </Link>
      </div>
      <div className="justify-center align-content-center w-[950px] m-6 mx-auto">
        {appointments &&
          appointments.map((appointment: any) => {
            return (
              <div
                className="mb-6 rounded border-2 border-slate-100 bg-slate-50 p-2 shadow-md"
                key={appointment.id}
              >
                <h2 className="pb-2 font-semibold text-neutral-800">
                  Related medical record: {appointment.postId}
                </h2>
                <p>{appointment.body}</p>
              </div>
            )
          })}
        <Link to="/">Go to home</Link>
      </div>
    </>
  )
}

export default Appointment
