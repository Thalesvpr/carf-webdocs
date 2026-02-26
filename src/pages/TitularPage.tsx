import { View, Text } from 'react-native'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { PhoneMockup } from '@/components/phone/PhoneMockup'
import { OcrCameraScreen } from '@/components/screens/OcrCameraScreen'
import { OcrResultScreen } from '@/components/screens/OcrResultScreen'
import { HolderFormScreen } from '@/components/screens/HolderFormScreen'
import { ArrowRight } from 'lucide-react'

const confidenceLevels = [
  { label: 'Alta', variant: 'success' as const, desc: 'Campo reconhecido com mais de 90% de certeza' },
  { label: 'Media', variant: 'warning' as const, desc: 'Campo reconhecido mas precisa de revisao' },
  { label: 'Baixa', variant: 'destructive' as const, desc: 'Campo incerto — edicao manual recomendada' },
]

export function TitularPage() {
  return (
    <div>
      <View className="mb-6">
        <Text className="text-headline-lg font-bold text-on-surface">
          Gestao de Titulares
        </Text>
        <Text className="text-body-lg text-on-surface-variant mt-2">
          O cadastro de titulares pode ser feito manualmente ou acelerado com OCR —
          o app digitaliza documentos (RG, CPF) e preenche os campos automaticamente.
        </Text>
      </View>

      {/* OCR Flow */}
      <Text className="text-title-lg font-semibold text-on-surface mb-2">
        Fluxo: OCR de documentos
      </Text>
      <Text className="text-body-md text-on-surface-variant mb-6">
        O agente aponta a camera para o documento do titular. O app detecta o
        documento, extrai os dados e apresenta para confirmacao.
      </Text>

      {/* 3 phones showing the flow */}
      <div className="flex flex-col lg:flex-row gap-6 items-start mb-10 overflow-x-auto">
        {/* Step 1: Camera */}
        <div className="flex flex-col items-center gap-2 shrink-0">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-[11px] font-bold">1</span>
            </div>
            <Text className="text-title-sm font-medium text-on-surface">Capturar</Text>
          </div>
          <PhoneMockup scale={0.45}>
            <OcrCameraScreen />
          </PhoneMockup>
        </div>

        {/* Arrow */}
        <div className="hidden lg:flex items-center self-center">
          <ArrowRight size={24} color="hsl(var(--outline))" />
        </div>

        {/* Step 2: Result */}
        <div className="flex flex-col items-center gap-2 shrink-0">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-[11px] font-bold">2</span>
            </div>
            <Text className="text-title-sm font-medium text-on-surface">Confirmar</Text>
          </div>
          <PhoneMockup scale={0.45}>
            <OcrResultScreen />
          </PhoneMockup>
        </div>

        {/* Arrow */}
        <div className="hidden lg:flex items-center self-center">
          <ArrowRight size={24} color="hsl(var(--outline))" />
        </div>

        {/* Step 3: Form */}
        <div className="flex flex-col items-center gap-2 shrink-0">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-[11px] font-bold">3</span>
            </div>
            <Text className="text-title-sm font-medium text-on-surface">Completar</Text>
          </div>
          <PhoneMockup scale={0.45}>
            <HolderFormScreen />
          </PhoneMockup>
        </div>
      </div>

      {/* Confidence badges */}
      <Text className="text-title-lg font-semibold text-on-surface mb-4">
        Niveis de confianca OCR
      </Text>
      <Text className="text-body-md text-on-surface-variant mb-4">
        Cada campo extraido pelo OCR recebe um indicador de confianca. Campos com
        confianca baixa sao destacados para o agente revisar e corrigir manualmente.
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
        {confidenceLevels.map((c) => (
          <Card key={c.label} variant="outlined">
            <View className="gap-2">
              <Badge variant={c.variant} size="sm">{c.label}</Badge>
              <Text className="text-body-sm text-on-surface-variant">{c.desc}</Text>
            </View>
          </Card>
        ))}
      </div>

      {/* CPF Validation */}
      <Text className="text-title-lg font-semibold text-on-surface mb-4">
        Validacao de CPF
      </Text>
      <Card variant="outlined">
        <View className="gap-2">
          <Text className="text-body-md text-on-surface-variant">
            O CPF e validado automaticamente pelo algoritmo de digitos verificadores.
            Se o numero for invalido, o campo fica com borda vermelha e o agente precisa
            corrigir antes de salvar. Duplicatas (CPF ja cadastrado em outra unidade)
            tambem sao detectadas e alertadas.
          </Text>
        </View>
      </Card>
    </div>
  )
}
