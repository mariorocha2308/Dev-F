export const getContactsQuery = () => {

  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(result => resolve(result.map((contact: any) => {
      return {
        id: contact.id,
        name: contact.name,
        image: `https://source.boringavatars.com/beam/40/${contact.name}?colors=264653,f4a261,e76f51`,
        phone: contact.phone,
        messages: []
      }
    })))
    .catch(() => reject('Failed to get in JSONplaceholder'))
  })
}