// Use dynamic import to avoid TypeScript errors during build
import { useState, useEffect } from 'react'

export function useFeatureFlag(flagKey: string): boolean {
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    let mounted = true
    
    const checkFlag = async () => {
      try {
        // Dynamic import to avoid build issues
        const posthogReact = await import('posthog-js/react')
        if (posthogReact.useFeatureFlagEnabled && mounted) {
          const enabled = posthogReact.useFeatureFlagEnabled(flagKey)
          setIsEnabled(enabled)
        }
      } catch (error) {
        console.warn('PostHog feature flag check failed:', error)
        if (mounted) {
          setIsEnabled(false)
        }
      }
    }

    checkFlag()

    return () => {
      mounted = false
    }
  }, [flagKey])

  return isEnabled
}
