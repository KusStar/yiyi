import React from 'react';
import styled from 'styled-components';
import { Container, Image } from '@components/core'
import Box from '@components/Box'
import assets from '@utils/assets'
import { Route } from '@utils/enums';

const Logo = styled(Image)`
  height: 595px;
  width: 414px;
`

interface Props {
  navigate: (route: Route) => void
}

const Splash: React.FC<Props>= ({
  navigate
}) => {
  return (
    <Container fullscreen>
      <Box>
        <Logo
          src={assets.logo}
        />
        <button
          onClick={() => navigate(Route.Home)}
        >
          开始
        </button>
      </Box>
    </Container>
  )
}

export default Splash
