import { HeroUIProvider } from "@heroui/react"
import { type ReactNode } from "react"
import { CustomPostHogProvider } from "./CustomPostHogProvider"
import { ClineAuthProvider } from "./context/ClineAuthContext"
import { ExtensionStateContextProvider } from "./context/ExtensionStateContext"
import { PlatformProvider } from "./context/PlatformContext"

export function Providers({ children }: { children: ReactNode }) {
	return (
		<PlatformProvider>
			<ExtensionStateContextProvider>
				<ClineAuthProvider>
					{/* Now CustomPostHogProvider is inside ClineAuthProvider, so it can access ClineAuthContext */}
					<CustomPostHogProvider>
						<HeroUIProvider>{children}</HeroUIProvider>
					</CustomPostHogProvider>
				</ClineAuthProvider>
			</ExtensionStateContextProvider>
		</PlatformProvider>
	)
}
