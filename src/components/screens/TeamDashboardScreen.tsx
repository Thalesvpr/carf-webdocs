import { View, Text, ScrollView } from 'react-native'
import { AppBar } from '@/components/ui/AppBar'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Avatar } from '@/components/ui/Avatar'

const stats = [
  { label: 'Unidades', value: '234' },
  { label: 'Pendentes', value: '47' },
  { label: 'Assinadas', value: '187' },
]

const team = [
  { name: 'Ana Costa', role: 'Coordenador', variant: 'primary' as const },
  { name: 'Pedro Lima', role: 'Cadastrador', variant: 'secondary' as const },
  { name: 'Lucia Reis', role: 'Cadastrador', variant: 'secondary' as const },
]

const activities = [
  { color: '#22C55E', text: 'Ana criou Unidade #048 — 14:30' },
  { color: '#4A80F0', text: 'Pedro sincronizou 5 unidades — 13:15' },
  { color: '#FF9800', text: 'Lucia editou Titular #023 — 12:45' },
]

export function TeamDashboardScreen() {
  return (
    <View className="flex-1 bg-background">
      <AppBar title="Regiao Norte" variant="small" flush />

      <ScrollView className="flex-1">
        {/* Stats */}
        <View className="flex-row gap-2 px-4 py-4">
          {stats.map((s) => (
            <Card key={s.label} variant="outlined" className="flex-1">
              <View className="items-center py-1">
                <Text className="text-body-sm text-on-surface-variant">{s.label}</Text>
                <Text className="text-headline-md font-bold text-on-surface">{s.value}</Text>
              </View>
            </Card>
          ))}
        </View>

        {/* Equipe */}
        <View className="px-4 py-4 border-t border-outline-variant">
          <Text className="text-title-sm font-semibold text-on-surface mb-3">Equipe</Text>
          {team.map((m) => (
            <View key={m.name} className="flex-row items-center gap-3 py-2.5">
              <Avatar fallback={m.name} size="sm" />
              <Text className="flex-1 text-body-md font-medium text-on-surface">{m.name}</Text>
              <Badge variant={m.variant} size="sm">{m.role}</Badge>
            </View>
          ))}
        </View>

        {/* Atividade Recente */}
        <View className="px-4 py-4 border-t border-outline-variant">
          <Text className="text-title-sm font-semibold text-on-surface mb-3">Atividade Recente</Text>
          {activities.map((a, i) => (
            <View key={i} className="flex-row items-center gap-3 py-2">
              <View className="w-2 h-2 rounded-full" style={{ backgroundColor: a.color }} />
              <Text className="text-body-sm text-on-surface-variant flex-1">{a.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
