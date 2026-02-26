import { useState } from 'react'
import { View, Text } from 'react-native'
import { ArrowLeft } from 'lucide-react'
import { AppBar } from '@/components/ui/AppBar'
import { SegmentedControl } from '@/components/ui/SegmentedControl'
import { MapViewMock } from '@/mocks/MapViewMock'

export function QuadraEditorScreen() {
  const [layer, setLayer] = useState('lotes')

  return (
    <View className="flex-1 bg-background">
      <AppBar title="Editor de Quadra" variant="small" leadingIcon={ArrowLeft} flush />

      <View className="px-3 py-2">
        <SegmentedControl
          options={[
            { label: 'Quadras', value: 'quadras' },
            { label: 'Lotes', value: 'lotes' },
            { label: 'Edificacoes', value: 'edificacoes' },
          ]}
          value={layer}
          onValueChange={setLayer}
        />
      </View>

      <View className="flex-1">
        <MapViewMock
          dark
          polygons={[
            { points: '10,15 90,15 90,85 10,85', stroke: '#7C4DFF', fill: 'rgba(124,77,255,0.2)' },
            { points: '15,20 45,20 45,50 15,50', stroke: '#00E5FF', fill: 'rgba(0,229,255,0.2)' },
            { points: '50,20 85,20 85,50 50,50', stroke: '#00E5FF', fill: 'rgba(0,229,255,0.2)' },
            { points: '20,55 40,55 40,78 20,78', stroke: '#FFD600', fill: 'rgba(255,214,0,0.2)' },
          ]}
          pins={[]}
        />
      </View>

      <View className="flex-row justify-around items-center py-3 px-4 bg-surface-container border-t border-outline-variant">
        {['Vertice', 'Mover', 'Deletar'].map((tool) => (
          <View key={tool} className="px-4 py-2 rounded-full bg-surface-container-high">
            <Text className="text-body-sm font-medium text-on-surface">{tool}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}
