import create from 'zustand'

interface Contact {
  id: number,
  name: string,
  phone: string
}

interface contactState {
  contacts: Contact[];
  setContacts: (payload: Contact[]) => void;
}

const useStoreContacts = create<contactState>((set) => ({
  contacts: [],
  setContacts: (payload: Contact[]) => set({contacts: payload}),
}))

export { useStoreContacts }