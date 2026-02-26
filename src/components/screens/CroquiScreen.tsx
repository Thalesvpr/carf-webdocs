import { useState } from 'react'
import { View, Text } from 'react-native'
import { ArrowLeft } from 'lucide-react'
import { AppBar } from '@/components/ui/AppBar'
import { SegmentedControl } from '@/components/ui/SegmentedControl'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MapViewMock } from '@/mocks/MapViewMock'

export function CroquiScreen() {
  const [layer, setLayer] = useState('lotes')

  return (
    <View className="flex-1 bg-background">
      <AppBar title="Areas e Dimensoes" variant="small" leadingIcon={ArrowLeft} flush />

      <View className="px-3 py-2">
        <SegmentedControl
          options={[
            { label: 'Quadras', value: 'quadras' },
            { label: 'Lotes', value: 'lotes' },
            { label: 'Edific.', value: 'edificacoes' },
          ]}
          value={layer}
          onValueChange={setLayer}
        />
      </View>

      <View className="flex-1">
        <MapViewMock
          polygons={[
            { points: '10,15 90,15 90,85 10,85', stroke: '#7C4DFF', fill: 'rgba(124,77,255,0.1)' },
            { points: '15,20 45,20 45,50 15,50', stroke: '#00E5FF', fill: 'rgba(0,229,255,0.3)' },
            { points: '50,20 85,20 85,50 50,50', stroke: '#00E5FF', fill: 'rgba(0,229,255,0.15)' },
            { points: '15,55 50,55 50,80 15,80', stroke: '#00E5FF', fill: 'rgba(0,229,255,0.15)' },
          ]}
          pins={[]}
        />
      </View>

      <View className="px-4 py-3">
        <Card variant="elevated">
          <View className="gap-2">
            <Text className="text-title-md font-semibold text-on-surface">Lote 01</Text>
            <Text className="text-body-sm text-on-surface-variant">Area: 150.00 m2</Text>
            <View className="flex-row gap-2 mt-1">
              <Button variant="outline" size="sm" className="flex-1">Desmembrar</Button>
              <Button variant="outline" size="sm" className="flex-1">Remembrar</Button>
            </View>
          </View>
        </Card>
      </View>
    </View>
  )
}
