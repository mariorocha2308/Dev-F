import create from 'zustand'

interface conversationState {
  conversation: any;
  setConversation: (payload: any) => void
  clearConversation: () => void
}

const useStoreConversation = create<conversationState>((set, get) => ({
  conversation: [],
  setConversation: (payload) => set({conversation: [payload]}),
  clearConversation: () => set({conversation: []})
}))

export { useStoreConversation }