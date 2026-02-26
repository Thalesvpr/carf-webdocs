import { View, Text } from 'react-native'
import { Card } from '@/components/ui/Card'
import { PhoneMockup } from '@/components/phone/PhoneMockup'
import { NovaUnidadeScreen } from '@/components/screens/NovaUnidadeScreen'
import { UnitDetailScreen } from '@/components/screens/UnitDetailScreen'
import { AssinaturaScreen } from '@/components/screens/AssinaturaScreen'
import { ClipboardList, MapPin, Ruler, Camera, PenTool, CheckCircle2 } from 'lucide-react'

const steps = [
  { icon: ClipboardList, label: 'Informacoes Basicas', desc: 'Tipo de ocupante, uso do imovel, condicao e status de atendimento', hasPhone: true },
  { icon: MapPin, label: 'Endereco', desc: 'Logradouro, numero, complemento e ponto de referencia. GPS capturado automaticamente', hasPhone: false },
  { icon: Ruler, label: 'Area e Dimensoes', desc: 'Metragem, frente, fundos e lateral do imovel. Pode vincular ao croqui GIS', hasPhone: false },
  { icon: Camera, label: 'Fotos', desc: 'Foto da fachada e outras fotos relevantes. Compressao automatica para economizar espaco', hasPhone: false },
  { icon: PenTool, label: 'Assinatura', desc: 'Coleta de assinatura digital do titular na tela do dispositivo', hasPhone: true },
]

export function CadastroPage() {
  return (
    <div>
      <View className="mb-6">
        <Text className="text-headline-lg font-bold text-on-surface">
          Cadastro de Unidade
        </Text>
        <Text className="text-body-lg text-on-surface-variant mt-2">
          O cadastro de uma unidade segue um wizard de 5 passos. O agente preenche
          cada etapa sequencialmente ate finalizar com a coleta de assinatura.
        </Text>
      </View>

      {/* Step 1 with phone */}
      <div className="flex flex-col lg:flex-row gap-8 items-start mb-10">
        <div className="flex-1">
          <Text className="text-title-lg font-semibold text-on-surface mb-4">
            Fluxo do cadastro
          </Text>

          {/* Timeline */}
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.label} className="flex gap-3">
                  {/* Timeline line + dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-primary-foreground text-body-sm font-bold">{i + 1}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-outline-variant my-1" style={{ minHeight: 24 }} />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-5">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={16} color="hsl(var(--primary))" />
                      <Text className="text-title-sm font-semibold text-on-surface">{step.label}</Text>
                    </div>
                    <Text className="text-body-md text-on-surface-variant">{step.desc}</Text>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Phone showing step 1 */}
        <div className="shrink-0 mx-auto lg:mx-0">
          <PhoneMockup showNavBar activeTab="mapa" scale={0.55}>
            <NovaUnidadeScreen />
          </PhoneMockup>
        </div>
      </div>

      {/* Signature step */}
      <Text className="text-title-lg font-semibold text-on-surface mb-4">
        Assinatura digital
      </Text>
      <div className="flex flex-col lg:flex-row gap-8 items-start mb-10">
        <div className="shrink-0 mx-auto lg:mx-0">
          <PhoneMockup scale={0.55}>
            <AssinaturaScreen />
          </PhoneMockup>
        </div>
        <div className="flex-1">
          <Text className="text-body-md text-on-surface-variant leading-relaxed">
            No ultimo passo, o titular assina diretamente na tela do dispositivo. A assinatura
            e armazenada como imagem vetorial junto ao cadastro. O titular tambem confirma
            duas declaracoes obrigatorias antes de finalizar.
          </Text>
          <Card variant="outlined" className="mt-4">
            <View className="flex-row items-center gap-2">
              <CheckCircle2 size={18} color="hsl(var(--success))" />
              <Text className="text-body-md text-on-surface">
                Apos a assinatura, o cadastro fica com status "Assinado" e o pin no mapa muda para verde.
              </Text>
            </View>
          </Card>
        </div>
      </div>

      {/* Result */}
      <Text className="text-title-lg font-semibold text-on-surface mb-4">
        Resultado final
      </Text>
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1">
          <Text className="text-body-md text-on-surface-variant leading-relaxed">
            Apos completar todos os passos, a unidade aparece na tela de detalhes com todas
            as informacoes consolidadas: dados basicos, titular vinculado, fotos e status
            da assinatura.
          </Text>
          <Text className="text-body-md text-on-surface-variant leading-relaxed mt-3">
            A unidade e armazenada localmente e entra na fila de sincronizacao para ser
            enviada ao servidor GEOAPI quando houver conexao.
          </Text>
        </div>
        <div className="shrink-0 mx-auto lg:mx-0">
          <PhoneMockup showNavBar activeTab="mapa" scale={0.55}>
            <UnitDetailScreen />
          </PhoneMockup>
        </div>
      </div>
    </div>
  )
}
