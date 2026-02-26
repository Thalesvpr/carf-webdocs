import { View, Text, ScrollView } from 'react-native'
import { ArrowLeft } from 'lucide-react'
import { AppBar } from '@/components/ui/AppBar'
import { Alert } from '@/components/ui/Alert'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const ocrFields = [
  { label: 'Nome', value: 'Maria da Silva Santos', confidence: 'Alta' as const },
  { label: 'CPF', value: '123.456.789-00', confidence: 'Alta' as const },
  { label: 'RG', value: '12.345.678-9', confidence: 'Media' as const },
  { label: 'Data Nasc.', value: '15/03/1985', confidence: 'Alta' as const },
  { label: 'Endereco', value: 'Rua das Flores, 123', confidence: 'Baixa' as const },
]

const confidenceVariant = { Alta: 'success', Media: 'warning', Baixa: 'destructive' } as const

export function OcrResultScreen() {
  return (
    <View className="flex-1 bg-background">
      <AppBar title="Confirmar Dados" variant="small" leadingIcon={ArrowLeft} flush />

      <ScrollView className="flex-1" contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Alert variant="success" title="Documento digitalizado com sucesso" />

        {ocrFields.map((field) => (
          <Card key={field.label} variant="outlined">
            <View className="flex-row items-center justify-between">
              <View className="flex-1">
                <Text className="text-body-sm text-on-surface-variant mb-1">{field.label}</Text>
                <Text className="text-body-md font-medium text-on-surface">{field.value}</Text>
              </View>
              <Badge variant={confidenceVariant[field.confidence]} size="sm">
                {field.confidence}
              </Badge>
            </View>
          </Card>
        ))}

        <View className="h-4" />

        <View className="flex-row gap-3">
          <Button variant="outline" className="flex-1">Corrigir</Button>
          <Button variant="filled" className="flex-1">Confirmar</Button>
        </View>
      </ScrollView>
    </View>
  )
}
