interface Appointments {
  postId: String
  id: String
  name: string
  email: String
  body: string
}

/**
 * Description:
 * This function fetches appointments related to a given medical record from a remote API endpoint
 * (specifically, jsonplaceholder.typicode.com). It utilizes asynchronous JavaScript (async/await)
 * and the Fetch API to make the HTTP request and retrieve the data.
 *
 * Usage:
 * To use this function, call it with the postId of the appointment you want to retrieve as an
 * argument. It returns a Promise that resolves to an array of Appointments.
 * @param postId
 * @returns array of appointments
 */

const fetchAppointment = async (postId: String): Promise<Appointments[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch patients')
  }

  return response.json()
}

export default fetchAppointment
