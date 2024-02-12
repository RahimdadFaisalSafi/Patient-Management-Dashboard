import { useQuery } from 'react-query'
import Patient from './Patient'
import { fetchPatients } from '../utility/fetchPatient'

type props = {
  onPatientClick: (id: number) => void
}
const PatientList = (props: props) => {
  const { onPatientClick } = props
  const {
    data: patients,
    isLoading,
    isError,
  } = useQuery('patients', fetchPatients)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching patients</div>
  }

  {
    /* The onPatientClick function is passed down to the Patient component as a prop, 
        allowing it to handle patient selection events. */
  }
  return (
    <div>
      {patients?.map((patient: any) => (
        <Patient
          key={patient.id}
          id={patient.id}
          name={patient.name}
          onPatientClick={onPatientClick}
        />
      ))}
    </div>
  )
}

export default PatientList
