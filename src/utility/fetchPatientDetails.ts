interface PatientDetails {
  id: number
  name: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

/**
 * Fetches details of a patient with the specified ID from an external API.
 * @param id The ID of the patient to fetch.
 * @returns A promise that resolves to the details of the patient.
 * @throws Error if fetching patient details fails.
 */

const fetchPatientDetails = async (id: number): Promise<PatientDetails> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  if (!response.ok) {
    throw new Error('Failed to fetch patients')
  }
  return response.json()
}

export default fetchPatientDetails
