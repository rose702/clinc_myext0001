import { type ReactNode } from "react"

interface CustomPostHogProviderProps {
	children: ReactNode
}

export function CustomPostHogProvider({ children }: CustomPostHogProviderProps) {
	// Don't initialize PostHog at all
	return <>{children}</>
}
