import { Link } from 'react-router-dom'
import { View, Text } from 'react-native'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Smartphone, Server, Monitor, Shield } from 'lucide-react'

const systems = [
  {
    name: 'REURBCAD',
    desc: 'App mobile de campo para cadastro de unidades, titulares e levantamento GIS',
    icon: Smartphone,
    to: '/reurbcad',
    active: true,
  },
  {
    name: 'GEOAPI',
    desc: 'Backend .NET 9 com Clean Architecture, sync e processamento geoespacial',
    icon: Server,
    to: '#',
    active: false,
  },
  {
    name: 'REURBWEB',
    desc: 'Painel web para coordenadores — dashboards, relatorios e gestao de equipes',
    icon: Monitor,
    to: '#',
    active: false,
  },
  {
    name: 'Keycloak',
    desc: 'Autenticacao e autorizacao — SSO, roles e gestao de acesso',
    icon: Shield,
    to: '#',
    active: false,
  },
]

export function CARFHome() {
  return (
    <div>
      <View className="mb-8">
        <Text className="text-headline-lg font-bold text-on-surface">
          CARF — Sistema de Regularizacao Fundiaria
        </Text>
        <Text className="text-body-lg text-on-surface-variant mt-2">
          Documentacao tecnica e manuais interativos dos sistemas que compoem a plataforma
          de Cadastro e Regularizacao Fundiaria.
        </Text>
      </View>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {systems.map((sys) => {
          const Icon = sys.icon
          const content = (
            <Card variant="outlined" className="h-full">
              <View className="flex-row items-start gap-3">
                <View className="w-10 h-10 rounded-component bg-primary/10 items-center justify-center">
                  <Icon size={20} color="hsl(var(--primary))" />
                </View>
                <View className="flex-1">
                  <View className="flex-row items-center gap-2 mb-1">
                    <Text className="text-title-md font-semibold text-on-surface">
                      {sys.name}
                    </Text>
                    <Badge
                      variant={sys.active ? 'primary' : 'secondary'}
                      size="sm"
                    >
                      {sys.active ? 'Disponivel' : 'Em breve'}
                    </Badge>
                  </View>
                  <Text className="text-body-md text-on-surface-variant">
                    {sys.desc}
                  </Text>
                </View>
              </View>
            </Card>
          )

          if (sys.active) {
            return (
              <Link key={sys.name} to={sys.to} className="no-underline block hover:opacity-90 transition-opacity">
                {content}
              </Link>
            )
          }
          return (
            <div key={sys.name} className="opacity-60 cursor-not-allowed">
              {content}
            </div>
          )
        })}
      </div>
    </div>
  )
}
