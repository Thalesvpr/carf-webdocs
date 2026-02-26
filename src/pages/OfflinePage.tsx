import { View, Text } from 'react-native'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Alert } from '@/components/ui/Alert'
import { PhoneMockup } from '@/components/phone/PhoneMockup'
import { SettingsScreen } from '@/components/screens/SettingsScreen'
import { Smartphone, Database, Cloud, ArrowLeftRight } from 'lucide-react'

export function OfflinePage() {
  return (
    <div>
      <View className="mb-6">
        <Text className="text-headline-lg font-bold text-on-surface">
          Modo Offline & Sincronizacao
        </Text>
        <Text className="text-body-lg text-on-surface-variant mt-2">
          O REURBCAD funciona 100% offline. Todos os dados sao armazenados localmente
          com WatermelonDB e sincronizados com o servidor quando houver conexao.
        </Text>
      </View>

      {/* Architecture diagram */}
      <Text className="text-title-lg font-semibold text-on-surface mb-4">
        Arquitetura offline-first
      </Text>
      <Card variant="outlined" className="mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 py-4">
          <div className="flex flex-col items-center gap-1">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Smartphone size={28} color="hsl(var(--primary))" />
            </div>
            <Text className="text-body-sm font-medium text-on-surface">Dispositivo</Text>
            <Text className="text-[11px] text-on-surface-variant">React Native</Text>
          </div>

          <div className="flex flex-col items-center gap-1">
            <ArrowLeftRight size={20} color="hsl(var(--outline))" />
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-14 h-14 rounded-xl bg-warning/10 flex items-center justify-center">
              <Database size={28} color="hsl(var(--warning))" />
            </div>
            <Text className="text-body-sm font-medium text-on-surface">Fila Local</Text>
            <Text className="text-[11px] text-on-surface-variant">WatermelonDB</Text>
          </div>

          <div className="flex flex-col items-center gap-1">
            <ArrowLeftRight size={20} color="hsl(var(--outline))" />
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center">
              <Cloud size={28} color="hsl(var(--success))" />
            </div>
            <Text className="text-body-sm font-medium text-on-surface">GEOAPI</Text>
            <Text className="text-[11px] text-on-surface-variant">.NET 9 + PostgreSQL</Text>
          </div>
        </div>
      </Card>

      {/* How it works */}
      <div className="flex flex-col lg:flex-row gap-8 items-start mb-10">
        <div className="flex-1">
          <Text className="text-title-lg font-semibold text-on-surface mb-3">
            Como funciona
          </Text>
          <div className="space-y-3">
            <Text className="text-body-md text-on-surface-variant leading-relaxed">
              <span className="font-medium text-on-surface">1. Criacao local:</span> Quando o agente cria
              ou edita uma unidade, os dados sao salvos diretamente no WatermelonDB do dispositivo.
              Cada registro recebe um ID unico (UUID) gerado no cliente.
            </Text>
            <Text className="text-body-md text-on-surface-variant leading-relaxed">
              <span className="font-medium text-on-surface">2. Fila de sync:</span> Registros modificados
              entram automaticamente na fila de sincronizacao. O badge "pendente" mostra quantos
              registros aguardam envio.
            </Text>
            <Text className="text-body-md text-on-surface-variant leading-relaxed">
              <span className="font-medium text-on-surface">3. Delta sync:</span> Quando o dispositivo
              se conecta, envia apenas as diferencas (delta) desde a ultima sincronizacao.
              O servidor processa e retorna as mudancas de outros dispositivos.
            </Text>
          </div>

          {/* Status indicators */}
          <Text className="text-title-md font-semibold text-on-surface mt-6 mb-3">
            Indicadores de status
          </Text>
          <div className="flex flex-wrap gap-2">
            <Badge variant="success">Sincronizado</Badge>
            <Badge variant="warning">Pendente</Badge>
            <Badge variant="destructive">Conflito</Badge>
          </div>
        </div>
        <div className="shrink-0 mx-auto lg:mx-0">
          <PhoneMockup scale={0.55}>
            <SettingsScreen />
          </PhoneMockup>
        </div>
      </div>

      {/* Conflicts */}
      <Text className="text-title-lg font-semibold text-on-surface mb-4">
        Resolucao de conflitos
      </Text>
      <Alert
        variant="default"
        title="Conflitos sao raros"
        description="O sistema atribui areas exclusivas a cada agente, minimizando edicoes simultaneas no mesmo registro. Quando ocorrem, o servidor aplica a estrategia 'last-write-wins' com base no timestamp, e o coordenador pode revisar no REURBWEB."
      />
    </div>
  )
}
