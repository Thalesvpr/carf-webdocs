import { View, Text, ScrollView } from 'react-native'
import { Check } from 'lucide-react'
import { AppBar } from '@/components/ui/AppBar'
import { Switch } from '@/components/ui/Switch'
import { SegmentedControl } from '@/components/ui/SegmentedControl'
import { Badge } from '@/components/ui/Badge'
import { Avatar } from '@/components/ui/Avatar'
import { Button } from '@/components/ui/Button'

const themeColors = [
  { name: 'blue', color: '#4A80F0', selected: true },
  { name: 'purple', color: '#7C4DFF', selected: false },
  { name: 'green', color: '#22C55E', selected: false },
  { name: 'rose', color: '#EC4899', selected: false },
  { name: 'orange', color: '#FF9800', selected: false },
  { name: 'teal', color: '#14B8A6', selected: false },
]

export function SettingsScreen() {
  return (
    <View className="flex-1 bg-background">
      <AppBar title="Configuracoes" variant="small" flush />

      <ScrollView className="flex-1">
        {/* Sincronizacao */}
        <View className="px-4 py-5 border-b border-outline-variant">
          <Text className="text-title-sm font-semibold text-on-surface mb-4">Sincronizacao</Text>
          <Switch checked label="Sincronizar apenas via Wi-Fi" className="mb-3" />
          <Switch checked label="Sincronizacao automatica" className="mb-3" />
          <View className="flex-row items-center gap-3 mt-1">
            <Badge variant="warning">12 pendentes</Badge>
            <Text className="text-body-sm text-on-surface-variant">Ultima sync: 15/01 14:30</Text>
          </View>
        </View>

        {/* Aparencia */}
        <View className="px-4 py-5 border-b border-outline-variant">
          <Text className="text-title-sm font-semibold text-on-surface mb-4">Aparencia</Text>
          <SegmentedControl
            options={[
              { label: 'Sistema', value: 'sistema' },
              { label: 'Claro', value: 'claro' },
              { label: 'Escuro', value: 'escuro' },
            ]}
            value="claro"
            onValueChange={() => {}}
            className="mb-4"
          />
          <View className="flex-row flex-wrap gap-3">
            {themeColors.map((t) => (
              <View
                key={t.name}
                className="w-6 h-6 rounded-full items-center justify-center"
                style={{ backgroundColor: t.color }}
              >
                {t.selected && <Check size={14} color="#fff" />}
              </View>
            ))}
          </View>
        </View>

        {/* Mapa */}
        <View className="px-4 py-5 border-b border-outline-variant">
          <Text className="text-title-sm font-semibold text-on-surface mb-4">Mapa</Text>
          <Switch checked label="Manter tela ligada" className="mb-3" />
          <Switch label="GPS de alta precisao" />
        </View>

        {/* Conta */}
        <View className="px-4 py-5">
          <Text className="text-title-sm font-semibold text-on-surface mb-4">Conta</Text>
          <View className="flex-row items-center gap-3 mb-4">
            <Avatar fallback="Joao Agente" />
            <View className="flex-1">
              <Text className="text-body-md font-medium text-on-surface">Joao Agente</Text>
              <Text className="text-body-sm text-on-surface-variant">agente@carf.gov.br</Text>
            </View>
          </View>
          <Button variant="destructive" size="sm">Sair</Button>
        </View>
      </ScrollView>
    </View>
  )
}
