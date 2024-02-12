interface MedicalRecord {
  id: number
  userId: number
  title: string
  body: string
}

/**
 * Description:
 * This function fetches medical records related to a given userId from a remote API endpoint
 * (jsonplaceholder.typicode.com). It utilizes asynchronous JavaScript (async/await) and the
 * Fetch API to make the HTTP request and retrieve the data.
 *
 * Usage:
 * To use this function, call it with the userId of the user whose medical records you want to
 * retrieve as an argument. It returns a Promise that resolves to an array of medical records
 * objects
 * representing the medical records.
 * @param userId
 * @returns array of medical records
 */

const fetchMedicalRecord = async (userId: number): Promise<MedicalRecord[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  )
  if (!response.ok) {
    throw new Error('Failed to fetch patients')
  }

  return response.json()
}

export default fetchMedicalRecord
