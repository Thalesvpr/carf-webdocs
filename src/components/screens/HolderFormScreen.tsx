import { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { AppBar } from '@/components/ui/AppBar'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'

export function HolderFormScreen() {
  const [estadoCivil, setEstadoCivil] = useState('casada')

  return (
    <View className="flex-1 bg-background">
      <AppBar title="Dados do Titular" variant="small" leadingIcon={ArrowLeft} flush />

      <ScrollView className="flex-1" contentContainerStyle={{ padding: 16, gap: 12 }}>
        <Input label="Nome Completo" value="Maria da Silva Santos" editable={false} />
        <Input
          label="CPF"
          value="123.456.789-00"
          editable={false}
          trailingIcon={<CheckCircle2 size={18} color="hsl(var(--success))" />}
        />
        <Input label="RG" value="12.345.678-9" editable={false} />
        <Input label="Data de Nascimento" value="15/03/1985" editable={false} />
        <Input label="Telefone" value="(11) 98765-4321" editable={false} />
        <Input label="Email" value="maria.silva@email.com" editable={false} />
        <Select
          label="Estado Civil"
          value={estadoCivil}
          onValueChange={setEstadoCivil}
          options={[
            { label: 'Solteiro(a)', value: 'solteiro' },
            { label: 'Casado(a)', value: 'casada' },
            { label: 'Divorciado(a)', value: 'divorciado' },
            { label: 'Viuvo(a)', value: 'viuvo' },
          ]}
        />
        <View className="h-4" />
        <Button variant="filled">Salvar</Button>
      </ScrollView>
    </View>
  )
}
