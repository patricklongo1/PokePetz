import InfoBar from '../components/pages-components/InfoBar'

export default function Schedule() {
  const crumbs = [{ label: 'Home', path: '/' }, { label: 'Agendar Consulta' }]

  return (
    <InfoBar
      crumbs={crumbs}
      title="Agendar Consulta"
      description="Recupere seus pokémons em 5 segundos"
    />
  )
}
