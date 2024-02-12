interface Patient {
  id: number
  name: string
}

/**
 * Description:
 * This asynchronous function fetches patients from a remote API (jsonplaceholder.typicode.com).
 * It utilizes async/await syntax to handle asynchronous operations and the Fetch API to make HTTP
 * requests.
 *
 * Usage:
 * This function does not require any arguments. Simply call it to fetch the list of patients.
 * It returns a Promise that resolves to an array of Patient objects.
 * @returns array of Patient objects
 */
export async function fetchPatients(): Promise<Patient[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) {
    throw new Error('Failed to fetch patients')
  }
  return response.json()
}
