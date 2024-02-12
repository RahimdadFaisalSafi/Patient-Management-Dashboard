import SideBar from './SideBar'
import { useState } from 'react'
import Details from './Details'

const Home = () => {
  const [currentSelectedPerson, setCurrentSelectedPerson] = useState(0)

  const onPatentClick = (id: number) => {
    setCurrentSelectedPerson(id)
  }
  return (
    <div className="flex">
      <aside className="w-60 fixed left-0 top-0 h-screen bg-neutral-900">
        {/* The onPatientClick function is passed down to the SideBar component as a prop, 
        allowing it to handle patient selection events. */}
        <SideBar onPatientClick={onPatentClick} />
      </aside>
      <main className="flex-1 h-screen bg-stone-100 ml-60">
        <div className="text-3xl  text-neutral-900 h-19 font-semibold font-serif bg-neutral-900 flex justify-center p-5">
          <h1 className="text-white">Patient Management Dashboard</h1>
        </div>
        <div className="h-auto bg-neutral-100 p-10">
          {' '}
          {currentSelectedPerson == 0 ? (
            <div className="flex-1 text-center mt-40">
              <div className="text-2xl p-5 text-neutral-800 font-serif font-extrabold">
                <h3>Welcome to Patient Management Dashboard</h3>
              </div>
              <div className="font-serif font-thin text-neutral-600">
                To start navigating through Patients` medical records
                <br />
                please Click on a patient's name on the left sidebar{' '}
              </div>
            </div>
          ) : (
            currentSelectedPerson > 0 && <Details id={currentSelectedPerson} />
          )}
        </div>
      </main>
    </div>
  )
}

export default Home
