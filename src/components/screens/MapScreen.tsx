import { useState } from 'react'
import { View } from 'react-native'
import { AppBar } from '@/components/ui/AppBar'
import { SegmentedControl } from '@/components/ui/SegmentedControl'
import { MapViewMock } from '@/mocks/MapViewMock'
import { Plus } from 'lucide-react'

export function MapScreen() {
  const [community, setCommunity] = useState('a')

  return (
    <View className="flex-1 bg-background">
      <AppBar title="Mapa de Campo" variant="small" flush />

      <View className="px-3 py-2">
        <SegmentedControl
          options={[
            { label: 'Comunidade A', value: 'a' },
            { label: 'Comunidade B', value: 'b' },
          ]}
          value={community}
          onValueChange={setCommunity}
        />
      </View>

      <View className="flex-1 relative">
        <MapViewMock />
        <div
          className="absolute bottom-5 right-5 w-14 h-14 rounded-full bg-primary flex items-center justify-center"
          style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.25)' }}
        >
          <Plus size={24} color="#fff" />
        </div>
      </View>
    </View>
  )
}
