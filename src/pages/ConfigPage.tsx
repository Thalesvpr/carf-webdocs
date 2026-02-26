import { useState } from 'react'
import { View, Text } from 'react-native'
import { Card } from '@/components/ui/Card'
import { SegmentedControl } from '@/components/ui/SegmentedControl'
import { PhoneMockup } from '@/components/phone/PhoneMockup'
import { SettingsScreen } from '@/components/screens/SettingsScreen'

const themePresets = [
  { name: 'Azul', color: '#4A80F0' },
  { name: 'Roxo', color: '#7C4DFF' },
  { name: 'Verde', color: '#22C55E' },
  { name: 'Rosa', color: '#EC4899' },
  { name: 'Laranja', color: '#FF9800' },
  { name: 'Teal', color: '#14B8A6' },
]

export function ConfigPage() {
  const [themeMode, setThemeMode] = useState('claro')

  return (
    <div>
      <View className="mb-6">
        <Text className="text-headline-lg font-bold text-on-surface">
          Configuracoes & Temas
        </Text>
        <Text className="text-body-lg text-on-surface-variant mt-2">
          O app permite personalizar aparencia, comportamento de sincronizacao e
          preferencias de mapa. Todas as configuracoes sao persistidas localmente.
        </Text>
      </View>

      <div className="flex flex-col lg:flex-row gap-8 items-start mb-10">
        <div className="shrink-0 mx-auto lg:mx-0">
          <PhoneMockup scale={0.55}>
            <SettingsScreen />
          </PhoneMockup>
        </div>
        <div className="flex-1">
          <Text className="text-title-lg font-semibold text-on-surface mb-3">
            Opcoes disponiveis
          </Text>

          {/* Sync settings */}
          <Text className="text-title-md font-medium text-on-surface mb-2">Sincronizacao</Text>
          <ul className="list-disc list-inside space-y-1 text-body-md text-on-surface-variant mb-4">
            <li><span className="font-medium">Somente Wi-Fi:</span> Impede sync via dados moveis</li>
            <li><span className="font-medium">Sync automatica:</span> Sincroniza ao detectar conexao</li>
          </ul>

          {/* Map settings */}
          <Text className="text-title-md font-medium text-on-surface mb-2">Mapa</Text>
          <ul className="list-disc list-inside space-y-1 text-body-md text-on-surface-variant mb-4">
            <li><span className="font-medium">Tela ligada:</span> Previne standby durante trabalho de campo</li>
            <li><span className="font-medium">GPS alta precisao:</span> Usa mais bateria mas melhora posicionamento</li>
          </ul>

          {/* Appearance */}
          <Text className="text-title-md font-medium text-on-surface mb-2">Aparencia</Text>
          <Text className="text-body-md text-on-surface-variant mb-3">
            Alterne entre tema claro, escuro ou automatico (segue o sistema).
          </Text>
          <SegmentedControl
            options={[
              { label: 'Sistema', value: 'sistema' },
              { label: 'Claro', value: 'claro' },
              { label: 'Escuro', value: 'escuro' },
            ]}
            value={themeMode}
            onValueChange={setThemeMode}
            className="mb-4"
          />
        </div>
      </div>

      {/* Theme presets */}
      <Text className="text-title-lg font-semibold text-on-surface mb-4">
        Presets de tema
      </Text>
      <Text className="text-body-md text-on-surface-variant mb-4">
        O REURBCAD oferece 6 paletas de cores. O preset escolhido afeta botoes,
        links, badges e outros elementos interativos em todo o app.
      </Text>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {themePresets.map((preset) => (
          <Card key={preset.name} variant="outlined">
            <View className="items-center gap-2">
              <div
                className="w-10 h-10 rounded-full"
                style={{ backgroundColor: preset.color }}
              />
              <Text className="text-body-sm font-medium text-on-surface">{preset.name}</Text>
            </View>
          </Card>
        ))}
      </div>
    </div>
  )
}
