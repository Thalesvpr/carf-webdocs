import { View, Text, ScrollView } from 'react-native'
import { ArrowLeft } from 'lucide-react'
import { AppBar } from '@/components/ui/AppBar'
import { Card } from '@/components/ui/Card'
import { Checkbox } from '@/components/ui/Checkbox'
import { Button } from '@/components/ui/Button'

export function AssinaturaScreen() {
  return (
    <View className="flex-1 bg-background">
      <AppBar title="Assinatura" variant="small" leadingIcon={ArrowLeft} flush />

      <ScrollView className="flex-1" contentContainerStyle={{ padding: 16, gap: 16 }}>
        <Text className="text-body-md text-on-surface text-center">
          O titular deve assinar abaixo para confirmar o cadastro
        </Text>

        {/* Signature pad */}
        <View
          className="rounded-component items-center justify-center"
          style={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#d1d5db',
            height: 200,
          }}
        >
          <svg width="260" height="100" viewBox="0 0 260 100">
            <path
              d="M 15 70 Q 35 30, 55 50 T 95 42 Q 115 32, 135 52 T 175 47 Q 195 42, 215 57 T 245 60"
              stroke="#1e293b"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 25 75 Q 30 90, 40 85 T 60 80"
              stroke="#1e293b"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </View>

        <View className="flex-row items-center justify-between">
          <Button variant="outline" size="sm">Limpar</Button>
          <Text className="text-body-sm text-on-surface-variant italic">
            Assinado por: Maria da Silva
          </Text>
        </View>

        <Card variant="outlined">
          <View className="gap-3">
            <Checkbox checked label="Declaro que as informacoes sao verdadeiras" />
            <Checkbox checked label="Autorizo o uso dos dados para regularizacao" />
          </View>
        </Card>

        <Button variant="filled">Finalizar Cadastro</Button>
      </ScrollView>
    </View>
  )
}
