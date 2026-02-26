import { View, Text } from 'react-native'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export function LoginScreen() {
  return (
    <View className="flex-1 bg-background px-6 justify-center">
      <View className="items-center mb-12">
        <Text className="text-headline-lg font-bold text-primary">REURBCAD</Text>
        <Text className="text-body-md text-on-surface-variant mt-1 text-center">
          Cadastro e Regularizacao Fundiaria
        </Text>
      </View>

      <View className="gap-4">
        <Input label="Email" value="agente@carf.gov.br" placeholder="Email" editable={false} />
        <Input label="Senha" value="••••••••" placeholder="Senha" editable={false} />
        <Button variant="filled" className="mt-2">Entrar</Button>
        <Text className="text-body-sm text-primary text-center mt-2">
          Esqueceu a senha?
        </Text>
      </View>
    </View>
  )
}
