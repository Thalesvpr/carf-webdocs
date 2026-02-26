import * as React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  Badge,
  Alert,
  AppBar,
  Input,
  Switch,
  Checkbox,
  SegmentedControl,
  IconButton,
  Avatar,
  SearchBar,
  Select,
} from '@/components/ui'
import { SectionCard } from '@/components/SectionCard'
import {
  ArrowLeft,
  Bell,
  Camera,
  Check,
  Home,
  Map,
  MapPin,
  Plus,
  Settings,
  User,
  Wifi,
} from 'lucide-react'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View className="mb-8">
      <Text className="text-title-lg font-semibold text-on-surface mb-4">{title}</Text>
      {children}
    </View>
  )
}

export function ComponentShowcase() {
  const [switchOn, setSwitchOn] = React.useState(true)
  const [checkA, setCheckA] = React.useState(true)
  const [checkB, setCheckB] = React.useState(false)
  const [segment, setSegment] = React.useState('mapa')
  const [search, setSearch] = React.useState('')
  const [selectVal, setSelectVal] = React.useState('')
  const [inputVal, setInputVal] = React.useState('')

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary px-6 py-6">
        <Link to="/" className="text-body-md text-primary-foreground/70 no-underline hover:text-primary-foreground">
          ← Voltar
        </Link>
        <h1 className="text-headline-md font-bold text-primary-foreground mt-2">
          UI Components — Portados do REURBCAD
        </h1>
        <p className="text-body-md text-primary-foreground/70 mt-1">
          Todos renderizados via react-native-web com o mesmo design system
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Buttons */}
        <Section title="Button">
          <View className="flex-row flex-wrap gap-3">
            <Button variant="filled">Filled</Button>
            <Button variant="tonal">Tonal</Button>
            <Button variant="elevated">Elevated</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="text">Text</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="filled" icon={Plus}>Com Icone</Button>
            <Button variant="filled" loading>Loading</Button>
            <Button variant="filled" disabled>Disabled</Button>
          </View>
          <View className="flex-row flex-wrap gap-3 mt-3">
            <Button variant="filled" size="sm">Small</Button>
            <Button variant="filled" size="default">Default</Button>
            <Button variant="filled" size="lg">Large</Button>
          </View>
        </Section>

        {/* IconButton */}
        <Section title="IconButton">
          <View className="flex-row flex-wrap gap-3 items-center">
            <IconButton variant="filled" icon={Plus} />
            <IconButton variant="tonal" icon={Settings} />
            <IconButton variant="outlined" icon={Bell} badge={3} />
            <IconButton variant="standard" icon={MapPin} />
            <IconButton variant="filled" icon={Camera} size="sm" />
            <IconButton variant="tonal" icon={Map} size="default" />
          </View>
        </Section>

        {/* Badge */}
        <Section title="Badge">
          <View className="flex-row flex-wrap gap-3 items-center">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge count={5} />
            <Badge count={120} max={99} />
            <Badge size="dot" variant="destructive" />
          </View>
        </Section>

        {/* Card */}
        <Section title="Card">
          <View className="gap-4">
            <Card variant="elevated">
              <Text className="text-body-lg text-on-surface">Card Elevated — sombra CSS</Text>
            </Card>
            <Card variant="filled">
              <Text className="text-body-lg text-on-surface">Card Filled — fundo mais forte</Text>
            </Card>
            <Card variant="outlined" label="Card com Label">
              <Text className="text-body-lg text-on-surface">Card Outlined com label acima</Text>
            </Card>
          </View>
        </Section>

        {/* Alert */}
        <Section title="Alert">
          <View className="gap-3">
            <Alert variant="default" title="Info" description="Alerta informativo padrao" />
            <Alert variant="success" title="Sucesso" description="Operacao completada" />
            <Alert variant="warning" title="Atencao" description="Verifique antes de continuar" />
            <Alert variant="destructive" title="Erro" description="Algo deu errado" closable />
          </View>
        </Section>

        {/* AppBar */}
        <Section title="AppBar">
          <View className="gap-4 overflow-hidden rounded-component border border-outline-variant">
            <AppBar
              variant="center-aligned"
              title="Center Aligned"
              leadingIcon={ArrowLeft}
              trailingIcon={Settings}
              flush
            />
          </View>
          <View className="gap-4 overflow-hidden rounded-component border border-outline-variant mt-4">
            <AppBar
              variant="medium"
              title="Medium AppBar"
              leadingIcon={ArrowLeft}
              flush
            />
          </View>
        </Section>

        {/* Input */}
        <Section title="Input">
          <View className="gap-3 max-w-md">
            <Input
              label="Nome Completo"
              placeholder="Digite seu nome"
              value={inputVal}
              onChangeText={setInputVal}
            />
            <Input
              label="CPF"
              placeholder="000.000.000-00"
              value="123.456.789-00"
              onChangeText={() => {}}
            />
            <Input
              label="Com erro"
              value=""
              onChangeText={() => {}}
              error="Campo obrigatorio"
            />
          </View>
        </Section>

        {/* SearchBar */}
        <Section title="SearchBar">
          <View className="max-w-md">
            <SearchBar
              value={search}
              onChangeText={setSearch}
              placeholder="Buscar unidades..."
            />
          </View>
        </Section>

        {/* Select */}
        <Section title="Select">
          <View className="max-w-md">
            <Select
              label="Comunidade"
              placeholder="Selecione a comunidade"
              value={selectVal}
              onValueChange={setSelectVal}
              options={[
                { label: 'Vila Nova', value: 'vila-nova' },
                { label: 'Jardim das Flores', value: 'jardim-flores' },
                { label: 'Parque Industrial', value: 'parque-ind' },
              ]}
            />
          </View>
        </Section>

        {/* Switch */}
        <Section title="Switch">
          <View className="gap-3">
            <Switch checked={switchOn} onCheckedChange={setSwitchOn} label="Somente Wi-Fi" />
            <Switch checked={false} onCheckedChange={() => {}} label="Modo Escuro" />
            <Switch checked disabled label="Desabilitado" />
          </View>
        </Section>

        {/* Checkbox */}
        <Section title="Checkbox">
          <View className="gap-3">
            <Checkbox checked={checkA} onCheckedChange={setCheckA} label="Li e aceito os Termos" />
            <Checkbox checked={checkB} onCheckedChange={setCheckB} label="Aceito a Politica de Privacidade" />
            <Checkbox indeterminate label="Indeterminado" />
            <Checkbox disabled label="Desabilitado" />
          </View>
        </Section>

        {/* SegmentedControl */}
        <Section title="SegmentedControl">
          <View className="max-w-md">
            <SegmentedControl
              options={[
                { label: 'Mapa', value: 'mapa' },
                { label: 'Satelite', value: 'satelite' },
              ]}
              value={segment}
              onValueChange={setSegment}
            />
          </View>
          <View className="max-w-lg mt-3">
            <SegmentedControl
              options={[
                { label: 'Quadras', value: 'quadras' },
                { label: 'Lotes', value: 'lotes' },
                { label: 'Edific.', value: 'edific' },
              ]}
              value="quadras"
              onValueChange={() => {}}
            />
          </View>
        </Section>

        {/* Avatar */}
        <Section title="Avatar">
          <View className="flex-row gap-3 items-center">
            <Avatar fallback="Maria Silva" size="sm" />
            <Avatar fallback="Joao Costa" size="default" status="online" />
            <Avatar fallback="Ana Souza" size="lg" status="busy" />
          </View>
        </Section>

        {/* SectionCard */}
        <Section title="SectionCard (composto)">
          <View className="max-w-md gap-4">
            <SectionCard
              label="Titular"
              filled={true}
              filledText="Titular vinculado"
              emptyText="Nenhum titular vinculado"
              buttonLabel="Ver Titular"
              buttonIcon={User}
              onPress={() => {}}
            />
            <SectionCard
              label="Fotos da Fachada"
              filled={false}
              filledText="Fotos capturadas"
              emptyText="Nenhuma foto capturada"
              buttonLabel="Capturar Fotos"
              buttonIcon={Camera}
              onPress={() => {}}
            />
          </View>
        </Section>

      </main>
    </div>
  )
}
