import { View, Text } from 'react-native'
import { Card } from '@/components/ui/Card'
import { PhoneMockup } from '@/components/phone/PhoneMockup'
import { MapScreen } from '@/components/screens/MapScreen'
import { COLORS } from '@/constants/colors'

const pinColors = [
  { color: COLORS.map.pinNew, label: 'Novo / Presente', desc: 'Unidade recem-criada ou titular presente' },
  { color: COLORS.map.pinUnit, label: 'Existente', desc: 'Unidade ja cadastrada' },
  { color: COLORS.map.pinSelected, label: 'Selecionado', desc: 'Unidade em edicao' },
  { color: COLORS.attendance.signed, label: 'Assinado', desc: 'Cadastro completo com assinatura' },
]

const polygonColors = [
  { color: COLORS.quadra.stroke, label: 'Quadra', desc: 'Delimitacao do quarteiro' },
  { color: COLORS.croqui.lotStroke, label: 'Lote', desc: 'Parcela individual dentro da quadra' },
  { color: COLORS.croqui.buildingStroke, label: 'Edificacao', desc: 'Construcao sobre o lote' },
]

export function MapaPage() {
  return (
    <div>
      <View className="mb-6">
        <Text className="text-headline-lg font-bold text-on-surface">
          Mapa de Campo
        </Text>
        <Text className="text-body-lg text-on-surface-variant mt-2">
          A tela principal do app. O mapa mostra todas as unidades da comunidade
          selecionada, com pins coloridos indicando o status de cada cadastro.
        </Text>
      </View>

      {/* Phone + explanation side by side */}
      <div className="flex flex-col lg:flex-row gap-8 items-start mb-10">
        <div className="shrink-0 mx-auto lg:mx-0">
          <PhoneMockup showNavBar activeTab="mapa" scale={0.55}>
            <MapScreen />
          </PhoneMockup>
        </div>
        <div className="flex-1">
          <Text className="text-title-lg font-semibold text-on-surface mb-3">
            Navegacao
          </Text>
          <Text className="text-body-md text-on-surface-variant leading-relaxed">
            O mapa usa a localizacao GPS do dispositivo para centralizar a visao na posicao
            do agente. As unidades aparecem como pins no mapa — cada cor indica um status
            diferente. O seletor de comunidade no topo filtra quais unidades sao exibidas.
          </Text>
          <Text className="text-body-md text-on-surface-variant leading-relaxed mt-3">
            Tocar no botao "+" cria uma nova unidade na posicao atual do GPS. Tocar em um
            pin existente abre os detalhes da unidade.
          </Text>

          {/* Pin colors */}
          <Text className="text-title-md font-semibold text-on-surface mt-6 mb-3">
            Cores dos pins
          </Text>
          <div className="flex flex-col gap-2">
            {pinColors.map((p) => (
              <div key={p.label} className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-full shrink-0"
                  style={{ backgroundColor: p.color }}
                />
                <div>
                  <span className="text-body-md font-medium text-on-surface">{p.label}</span>
                  <span className="text-body-sm text-on-surface-variant ml-2">{p.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Polygon colors */}
      <Text className="text-title-lg font-semibold text-on-surface mb-4">
        Camadas GIS
      </Text>
      <Text className="text-body-md text-on-surface-variant mb-4">
        Alem dos pins, o mapa pode exibir poligonos do levantamento GIS — quadras,
        lotes e edificacoes, cada um com sua cor caracteristica.
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {polygonColors.map((p) => (
          <Card key={p.label} variant="outlined">
            <View className="flex-row items-center gap-3">
              <div
                className="w-8 h-8 rounded-sm border-2"
                style={{
                  borderColor: p.color,
                  backgroundColor: p.color + '33',
                }}
              />
              <View>
                <Text className="text-title-sm font-medium text-on-surface">{p.label}</Text>
                <Text className="text-body-sm text-on-surface-variant">{p.desc}</Text>
              </View>
            </View>
          </Card>
        ))}
      </div>
    </div>
  )
}
