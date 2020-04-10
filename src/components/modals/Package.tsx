import React from 'react'
import styled from 'styled-components'
import { Image, Text } from '@components/core'
import Wrapper from './Wrapper'
import assets from '@utils/assets'

const Col = styled(Wrapper)`
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Item = styled(Image)`
  height:60px;
  width: 60px;
  transition: all 0.3s;

  &:hover {
    transform: translate3d(0, -2px, 0);
  }
`

const items = [
  {
    src: assets.mask,
  },
  {
    src: assets.money,
    style: {
      margin: 10,
      marginBottom: 30,
    } as React.CSSProperties
  },
  {
    src: assets.food,
    style: {
      height: 67,
      width: 67
    } as React.CSSProperties
  },
]

const Package: React.FC = () => {
  return (
    <Col>
      <Text>
        asd
      </Text>
      <Row>
        {items.map((item) => (
          <Item 
            key={item.src}
            src={item.src}
            style={item.style}
          />
        ))}
      </Row>
      <Image
        style={{
          height: 252,
          width: 254
        }}
        src={assets.largeBox}
      />
    </Col>
  )
}

export default Package;
