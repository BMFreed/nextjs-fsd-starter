import styled, { ThemeProvider } from 'styled-components';
import theme from '@/shared/theme/theme';
import Header from '@/pages/Main/blocks/Header/Header';
import { NextUIProvider } from '@nextui-org/react';
import { Breadcrumbs } from '@/pages/Main/blocks/Breadcrumbs/Breadcrumbs';

const SContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
`;

function Main() {
  return (
    <NextUIProvider>
      <ThemeProvider theme={theme}>
        <SContainer>
          <Header />
          <Breadcrumbs
            breadcrumbs={[
              { url: '/', name: 'ДИТ Аналитика' },
              { url: '/', name: 'Исследования' },
              {
                url: '/',
                name: 'Использование цифровых устройств в Москве',
              },
            ]}
          />
        </SContainer>
      </ThemeProvider>
    </NextUIProvider>
  );
}

export default Main;
