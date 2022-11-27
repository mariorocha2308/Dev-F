import create from 'zustand'

interface conversationState {
  conversation: any;
  setConversation: (payload: any) => void
}

const useStoreConversation = create<conversationState>((set, get) => ({
  conversation: [],
  setConversation: (payload) => set({conversation: [payload]}),
}))

export { useStoreConversation }