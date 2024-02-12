import classNames from 'classnames'

interface PatientProps {
  id: number
  name: string
  onPatientClick: (id: number) => void
}

// Declare Tailwindcss classes
const linkClasses1 =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700'
const linkClasses2 =
  'hover:no-underline active:bg-neutral-600 rounded-sm text-base'

const Patient = (props: PatientProps) => {
  const { id, name, onPatientClick } = props

  // Updates the state when a patient's name is clicked on the sidebar
  const localClick = () => {
    onPatientClick(id)
  }

  return (
    <button
      className={classNames('text-white w-full', linkClasses1, linkClasses2)}
      onClick={localClick}
      value={id}
    >
      {name}
    </button>
  )
}
export default Patient
