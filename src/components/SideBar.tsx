import { ImUser } from 'react-icons/im'
import PatientList from './PatientList'

type props = {
  onPatientClick: (id: number) => void
}
const SideBar = (props: props) => {
  const { onPatientClick } = props
  return (
    <nav className="flex flex-col p-3 text-white bg-neutral-900 w-60">
      <div className="flex items-center gap-2 px-1 py-3">
        <ImUser fontSize={22} />
        <span className="text-lg text-neutral-100">Patients</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {/* The onPatientClick function is passed down to the PatientList component as a prop, 
        allowing it to handle patient selection events. */}
        <PatientList onPatientClick={onPatientClick} />
      </div>
    </nav>
  )
}

export default SideBar
