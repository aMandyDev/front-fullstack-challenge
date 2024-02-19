import loading from '../../assets/loading.png'
import Image from 'next/image'
import { Container } from './styles'

const Loading = () => {
  return (
    <Container>
      <Image
        src={loading}
        alt="carregamento de página"
        width={200}
        height={200}
      />
    </Container>
  )
}

export default Loading
