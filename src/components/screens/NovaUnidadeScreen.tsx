import { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ArrowLeft } from 'lucide-react'
import { AppBar } from '@/components/ui/AppBar'
import { Alert } from '@/components/ui/Alert'
import { Select } from '@/components/ui/Select'
import { SegmentedControl } from '@/components/ui/SegmentedControl'
import { Button } from '@/components/ui/Button'

export function NovaUnidadeScreen() {
  const [tipoOcupante, setTipoOcupante] = useState('posseiro')
  const [tipoUso, setTipoUso] = useState('residencial')
  const [condicao, setCondicao] = useState('bom')
  const [status, setStatus] = useState('presente')

  return (
    <View className="flex-1 bg-background">
      <AppBar title="Nova Unidade" variant="small" leadingIcon={ArrowLeft} flush />

      <ScrollView className="flex-1" contentContainerStyle={{ padding: 16, gap: 16 }}>
        <Alert variant="success" title="Ponto GPS capturado" />

        <View className="gap-3">
          <Text className="text-title-sm font-semibold text-on-surface">Informacoes Basicas</Text>
          <Select label="Tipo de Ocupante" value={tipoOcupante} onValueChange={setTipoOcupante}
            options={[
              { label: 'Posseiro', value: 'posseiro' },
              { label: 'Proprietario', value: 'proprietario' },
              { label: 'Locatario', value: 'locatario' },
            ]}
          />
          <Select label="Tipo de Uso" value={tipoUso} onValueChange={setTipoUso}
            options={[
              { label: 'Residencial', value: 'residencial' },
              { label: 'Comercial', value: 'comercial' },
              { label: 'Misto', value: 'misto' },
            ]}
          />
          <Select label="Condicao" value={condicao} onValueChange={setCondicao}
            options={[
              { label: 'Bom', value: 'bom' },
              { label: 'Regular', value: 'regular' },
              { label: 'Precario', value: 'precario' },
            ]}
          />
        </View>

        <View className="gap-3">
          <Text className="text-title-sm font-semibold text-on-surface">Status de Atendimento</Text>
          <SegmentedControl
            options={[
              { label: 'Presente', value: 'presente' },
              { label: 'Ausente', value: 'ausente' },
              { label: 'Recusado', value: 'recusado' },
            ]}
            value={status}
            onValueChange={setStatus}
          />
        </View>

        <Button variant="filled" className="mt-2">Proximo</Button>
      </ScrollView>
    </View>
  )
}
