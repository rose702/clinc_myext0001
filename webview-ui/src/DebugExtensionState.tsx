import { useContext, useEffect } from 'react'
import { ExtensionStateContext } from './context/ExtensionStateContext'

export function DebugExtensionState() {
  const state = useContext(ExtensionStateContext)

  useEffect(() => {
    console.log('=== DEBUG ExtensionState ===')
    console.log('Full state:', state)
    if (state) {
      console.log('State keys:', Object.keys(state))
      console.log('State type:', typeof state)

      // Check for user property at different levels
      if ((state as any).user) {
        console.log('Found .user:', (state as any).user)
      }
      if ((state as any).account) {
        console.log('Found .account:', (state as any).account)
      }
      if ((state as any).auth) {
        console.log('Found .auth:', (state as any).auth)
      }
      if ((state as any).currentUser) {
        console.log('Found .currentUser:', (state as any).currentUser)
      }
    }
    console.log('=== END DEBUG ===')
  }, [state])

  return null
}
