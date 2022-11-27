export const getContactsQuery = () => {

  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(result => resolve(result.map((contact: any) => {
      return {
        id: contact.id,
        name: contact.name,
        phone: contact.phone,
        messages: []
      }
    })))
    .catch(() => reject('Failed to get in JSONplaceholder'))
  })
}