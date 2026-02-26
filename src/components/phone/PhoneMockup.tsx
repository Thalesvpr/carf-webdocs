import { View, Text } from 'react-native'
import { NavigationBar, type NavigationItem } from '@/components/ui/NavigationBar'
import { Users, Map, Layers } from 'lucide-react'

const defaultNavItems: NavigationItem[] = [
  { key: 'equipe', label: 'Equipe', icon: Users },
  { key: 'mapa', label: 'Mapa', icon: Map },
  { key: 'regiao', label: 'Regiao', icon: Layers },
]

interface PhoneMockupProps {
  children: React.ReactNode
  showNavBar?: boolean
  activeTab?: string
  scale?: number
  className?: string
}

export function PhoneMockup({
  children,
  showNavBar = false,
  activeTab = 'mapa',
  scale = 1,
  className = '',
}: PhoneMockupProps) {
  return (
    <div
      className={`inline-block ${className}`}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
      }}
    >
      <div
        className="relative bg-black rounded-[44px] p-3 shadow-2xl"
        style={{ width: 375, height: 812 }}
      >
        {/* Screen bezel */}
        <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-background flex flex-col">
          {/* Status bar */}
          <div className="h-11 bg-surface flex items-end justify-between px-6 pb-1 z-10 shrink-0">
            <Text className="text-[15px] font-semibold text-on-surface">9:41</Text>
            <div className="flex items-center gap-1.5">
              {/* Signal */}
              <svg width="16" height="12" viewBox="0 0 16 12">
                <rect x="0" y="8" width="3" height="4" rx="0.5" fill="hsl(var(--on-surface))" />
                <rect x="4.5" y="5" width="3" height="7" rx="0.5" fill="hsl(var(--on-surface))" />
                <rect x="9" y="2" width="3" height="10" rx="0.5" fill="hsl(var(--on-surface))" />
                <rect x="13.5" y="0" width="3" height="12" rx="0.5" fill="hsl(var(--on-surface))" opacity="0.3" />
              </svg>
              {/* WiFi */}
              <svg width="16" height="12" viewBox="0 0 16 12">
                <path d="M8 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill="hsl(var(--on-surface))" transform="translate(0,-2)" />
                <path d="M4.5 8.5C5.5 7 6.7 6.3 8 6.3s2.5.7 3.5 2.2" stroke="hsl(var(--on-surface))" strokeWidth="1.3" fill="none" strokeLinecap="round" />
                <path d="M2 5.5C3.5 3.2 5.6 2 8 2s4.5 1.2 6 3.5" stroke="hsl(var(--on-surface))" strokeWidth="1.3" fill="none" strokeLinecap="round" />
              </svg>
              {/* Battery */}
              <svg width="27" height="12" viewBox="0 0 27 12">
                <rect x="0" y="1" width="23" height="10" rx="2" stroke="hsl(var(--on-surface))" strokeWidth="1" fill="none" />
                <rect x="24" y="4" width="2" height="4" rx="1" fill="hsl(var(--on-surface))" opacity="0.4" />
                <rect x="1.5" y="2.5" width="18" height="7" rx="1" fill="hsl(var(--on-surface))" />
              </svg>
            </div>
          </div>

          {/* Dynamic island / notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
            <div className="w-28 h-[25px] bg-black rounded-full" />
          </div>

          {/* Screen content */}
          <View className="flex-1 overflow-hidden">
            {children}
          </View>

          {/* Bottom navigation bar */}
          {showNavBar && (
            <NavigationBar
              items={defaultNavItems}
              activeKey={activeTab}
              onItemPress={() => {}}
            />
          )}
        </div>
      </div>
    </div>
  )
}
