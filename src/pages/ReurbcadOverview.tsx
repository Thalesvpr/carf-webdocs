import { View, Text } from 'react-native'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { PhoneMockup } from '@/components/phone/PhoneMockup'
import { MapScreen } from '@/components/screens/MapScreen'
import { Map, Camera, Layers, WifiOff, PenTool } from 'lucide-react'

const features = [
  { icon: Map, label: 'Mapa de Campo', desc: 'Navegacao GPS, pins por status, camadas de comunidade' },
  { icon: Camera, label: 'OCR de Documentos', desc: 'Digitalizacao automatica de RG/CPF com camera' },
  { icon: Layers, label: 'Editor GIS', desc: 'Desenho de quadras, lotes e edificacoes com precisao' },
  { icon: WifiOff, label: 'Modo Offline', desc: 'Funciona sem internet — sincroniza quando conectar' },
  { icon: PenTool, label: 'Assinatura Digital', desc: 'Coleta de assinatura do titular na tela do dispositivo' },
]

export function ReurbcadOverview() {
  return (
    <div>
      <View className="mb-6">
        <Text className="text-headline-lg font-bold text-on-surface">
          REURBCAD
        </Text>
        <Text className="text-body-lg text-on-surface-variant mt-2">
          Aplicativo mobile de campo para regularizacao fundiaria urbana (REURB).
          Desenvolvido em React Native com Expo, permite que agentes de campo realizem
          o cadastro completo de unidades habitacionais, titulares e levantamento
          geoespacial diretamente no local.
        </Text>
      </View>

      {/* Hero: phone with map */}
      <div className="flex flex-col lg:flex-row gap-8 items-start mb-10">
        <div className="flex-1">
          <Text className="text-title-lg font-semibold text-on-surface mb-3">
            O que o app faz
          </Text>
          <Text className="text-body-md text-on-surface-variant leading-relaxed">
            O REURBCAD substitui o processo manual (prancheta + formularios em papel) por um
            fluxo digital completo: o agente chega na comunidade, abre o mapa, localiza a
            unidade, preenche o cadastro, digitaliza documentos com OCR, coleta assinatura
            digital e sincroniza tudo com o servidor quando houver internet.
          </Text>
          <Text className="text-body-md text-on-surface-variant leading-relaxed mt-3">
            O app funciona 100% offline — ideal para areas com conectividade precaria.
            Os dados sao armazenados localmente com WatermelonDB e sincronizados via
            delta sync com a GEOAPI quando o dispositivo se conecta.
          </Text>
        </div>
        <div className="shrink-0 mx-auto lg:mx-0">
          <PhoneMockup showNavBar activeTab="mapa" scale={0.55}>
            <MapScreen />
          </PhoneMockup>
        </div>
      </div>

      {/* Features grid */}
      <Text className="text-title-lg font-semibold text-on-surface mb-4">
        Funcionalidades principais
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {features.map((f) => {
          const Icon = f.icon
          return (
            <Card key={f.label} variant="outlined">
              <View className="flex-row items-start gap-3">
                <Icon size={20} color="hsl(var(--primary))" />
                <View className="flex-1">
                  <Text className="text-title-sm font-medium text-on-surface">{f.label}</Text>
                  <Text className="text-body-sm text-on-surface-variant mt-0.5">{f.desc}</Text>
                </View>
              </View>
            </Card>
          )
        })}
      </div>

      {/* Profiles */}
      <Text className="text-title-lg font-semibold text-on-surface mb-4">
        Perfis de usuario
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card variant="filled">
          <View className="gap-2">
            <View className="flex-row items-center gap-2">
              <Text className="text-title-md font-semibold text-on-surface">Cadastrador</Text>
              <Badge variant="primary" size="sm">Campo</Badge>
            </View>
            <Text className="text-body-md text-on-surface-variant">
              Agente que vai a campo realizar os cadastros. Acessa as abas Mapa e Equipe.
              Cria unidades, registra titulares, coleta assinaturas e fotos.
            </Text>
          </View>
        </Card>
        <Card variant="filled">
          <View className="gap-2">
            <View className="flex-row items-center gap-2">
              <Text className="text-title-md font-semibold text-on-surface">Coordenador</Text>
              <Badge variant="secondary" size="sm">Gestao</Badge>
            </View>
            <Text className="text-body-md text-on-surface-variant">
              Gerencia equipes e regioes. Acessa todas as abas incluindo Regiao.
              Acompanha progresso, atribui areas e resolve conflitos de sync.
            </Text>
          </View>
        </Card>
      </div>
    </div>
  )
}
