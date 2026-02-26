import { View, Text } from 'react-native'
import { Card } from '@/components/ui/Card'
import { Alert } from '@/components/ui/Alert'
import { PhoneMockup } from '@/components/phone/PhoneMockup'
import { QuadraEditorScreen } from '@/components/screens/QuadraEditorScreen'
import { CroquiScreen } from '@/components/screens/CroquiScreen'
import { COLORS } from '@/constants/colors'

const layers = [
  { label: 'Quadra', color: COLORS.quadra.stroke, desc: 'Delimitacao do quarteiro urbano' },
  { label: 'Lote', color: COLORS.croqui.lotStroke, desc: 'Parcela individual de terreno' },
  { label: 'Edificacao', color: COLORS.croqui.buildingStroke, desc: 'Construcao sobre o lote' },
]

export function GISPage() {
  return (
    <div>
      <View className="mb-6">
        <Text className="text-headline-lg font-bold text-on-surface">
          Editor GIS
        </Text>
        <Text className="text-body-lg text-on-surface-variant mt-2">
          O REURBCAD possui dois modos GIS distintos: o Modo Estrutural para criar
          geometrias e o Modo Operacional para consultar e manipular entidades existentes.
        </Text>
      </View>

      <Alert
        variant="warning"
        title="Modos separados"
        description="Os dois modos nunca sao misturados na mesma tela. O Modo Estrutural (quadra-editor) cria poligonos; o Modo Operacional (croqui) apenas seleciona e modifica entidades existentes."
        className="mb-8"
      />

      {/* Structural Mode */}
      <Text className="text-title-lg font-semibold text-on-surface mb-2">
        Modo Estrutural — Editor de Quadra
      </Text>
      <Text className="text-body-md text-on-surface-variant mb-4">
        Acessado pela aba Regiao, permite criar e editar quadras, lotes e edificacoes
        desenhando vertices diretamente no mapa. Usa fundo escuro (satelite) para
        melhor visualizacao das geometrias.
      </Text>

      <div className="flex flex-col lg:flex-row gap-8 items-start mb-10">
        <div className="shrink-0 mx-auto lg:mx-0">
          <PhoneMockup scale={0.55}>
            <QuadraEditorScreen />
          </PhoneMockup>
        </div>
        <div className="flex-1">
          <Text className="text-title-md font-semibold text-on-surface mb-3">
            Funcionalidades
          </Text>
          <ul className="list-disc list-inside space-y-2 text-body-md text-on-surface-variant">
            <li>Desenho de vertices com toque no mapa</li>
            <li>Edicao de vertices existentes (arrastar)</li>
            <li>SegmentedControl para alternar entre camadas (Quadras, Lotes, Edificacoes)</li>
            <li>Toolbar inferior com ferramentas: Vertice, Mover, Deletar</li>
            <li>Snap automatico entre vertices proximos</li>
          </ul>

          <Text className="text-title-md font-semibold text-on-surface mt-6 mb-3">
            Camadas e cores
          </Text>
          <div className="flex flex-col gap-2">
            {layers.map((l) => (
              <div key={l.label} className="flex items-center gap-3">
                <div
                  className="w-6 h-6 rounded-sm border-2"
                  style={{ borderColor: l.color, backgroundColor: l.color + '33' }}
                />
                <Text className="text-body-md text-on-surface">
                  <span className="font-medium">{l.label}</span> — {l.desc}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Operational Mode */}
      <Text className="text-title-lg font-semibold text-on-surface mb-2">
        Modo Operacional — Areas e Dimensoes
      </Text>
      <Text className="text-body-md text-on-surface-variant mb-4">
        Acessado pela aba Mapa ao editar uma unidade. Mostra as entidades GIS ja
        existentes e permite operacoes de desmembramento e remembramento de lotes.
      </Text>

      <div className="flex flex-col lg:flex-row gap-8 items-start mb-10">
        <div className="flex-1">
          <Text className="text-title-md font-semibold text-on-surface mb-3">
            Operacoes
          </Text>
          <div className="space-y-4">
            <Card variant="outlined">
              <View className="gap-1">
                <Text className="text-title-sm font-semibold text-on-surface">Desmembrar</Text>
                <Text className="text-body-sm text-on-surface-variant">
                  Selecionar um lote e definir pontos de corte para dividir em dois ou mais
                  lotes menores. Usado quando uma parcela precisa ser subdividida.
                </Text>
              </View>
            </Card>
            <Card variant="outlined">
              <View className="gap-1">
                <Text className="text-title-sm font-semibold text-on-surface">Remembrar</Text>
                <Text className="text-body-sm text-on-surface-variant">
                  Selecionar dois lotes adjacentes e unir em uma unica parcela. Usado quando
                  lotes vizinhos pertencem ao mesmo titular e devem ser consolidados.
                </Text>
              </View>
            </Card>
          </div>
        </div>
        <div className="shrink-0 mx-auto lg:mx-0">
          <PhoneMockup scale={0.55}>
            <CroquiScreen />
          </PhoneMockup>
        </div>
      </div>
    </div>
  )
}
