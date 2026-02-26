import { View, Text } from 'react-native'
import { CameraMock } from '@/mocks/CameraMock'

export function OcrCameraScreen() {
  return (
    <View className="flex-1">
      <CameraMock status="Posicione o documento no quadro" />

      {/* Top overlay */}
      <View
        className="absolute top-0 left-0 right-0 flex-row items-center justify-between px-4 py-3"
        style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
          Digitalizar Documento
        </Text>
        <View
          className="w-9 h-9 rounded-full items-center justify-center"
          style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>&#9889;</Text>
        </View>
      </View>
    </View>
  )
}
