import create from 'zustand'

interface chatState {
  chats: any;
  refresh: boolean,
  setChats: (payload: any) => void,
  addMessages: (payload: any, id: number) => void,
  setRefresh: () => void,
  deleteChat: (payload: number) => void
}

const useStoreChat = create<chatState>((set, get) => ({
  chats: [],
  refresh: false,
  setChats: (payload) => set((state) => ({chats: [...state.chats, payload]})),
  addMessages: (payload, id) => {
    get().chats.map((chat: any) => {
      if (chat.id === id) {
        chat.messages.push(payload)
      }
    })
  },
  setRefresh: () => {
    set({refresh: true})
    setTimeout(() => {
      set({refresh: false})
    }, 1000);
  },
  deleteChat: (payload) => {
    const cleanList = get().chats.filter((chat: any) => chat.id !== payload)
    get().chats.find((chat: any) => {
      if (chat.id === payload) {
        chat.messages = []
      }
    })
    set({chats: cleanList})
    console.log(get().chats);
  } 
}))

export { useStoreChat }