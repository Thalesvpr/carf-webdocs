import { View, Text, ScrollView } from 'react-native'
import { ArrowLeft, CheckCircle2, Camera } from 'lucide-react'
import { AppBar } from '@/components/ui/AppBar'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Avatar } from '@/components/ui/Avatar'
import { Button } from '@/components/ui/Button'

export function UnitDetailScreen() {
  return (
    <View className="flex-1 bg-background">
      <AppBar title="Unidade #047" variant="small" leadingIcon={ArrowLeft} flush />

      <ScrollView className="flex-1" contentContainerStyle={{ padding: 16, gap: 16 }}>
        <Card variant="outlined">
          <View className="gap-2">
            <View className="flex-row gap-2">
              <Badge variant="success" size="sm">Presente</Badge>
              <Badge variant="primary" size="sm">Residencial</Badge>
            </View>
            <Text className="text-title-sm font-semibold text-on-surface">Posseiro</Text>
            <Text className="text-body-sm text-on-surface-variant">
              Rua das Flores, 123 - Comunidade Esperanca
            </Text>
          </View>
        </Card>

        <View className="gap-2">
          <Text className="text-title-sm font-semibold text-on-surface">Titular</Text>
          <View className="flex-row items-center gap-3">
            <Avatar fallback="Maria da Silva" />
            <View className="flex-1">
              <Text className="text-body-md font-medium text-on-surface">Maria da Silva</Text>
              <Badge variant="success" size="sm" className="mt-1">CPF Validado</Badge>
            </View>
          </View>
        </View>

        <View className="gap-2">
          <Text className="text-title-sm font-semibold text-on-surface">Fotos</Text>
          <View className="w-24 h-24 rounded-component bg-surface-container-high items-center justify-center border border-outline-variant">
            <Camera size={28} color="hsl(var(--on-surface-variant))" />
          </View>
        </View>

        <View className="gap-2">
          <Text className="text-title-sm font-semibold text-on-surface">Assinatura</Text>
          <View className="flex-row items-center gap-2">
            <CheckCircle2 size={20} color="hsl(var(--success))" />
            <Text className="text-body-md text-on-surface-variant">Assinado em 15/01/2025</Text>
          </View>
        </View>

        <Button variant="outline" className="mt-2">Editar</Button>
      </ScrollView>
    </View>
  )
}
