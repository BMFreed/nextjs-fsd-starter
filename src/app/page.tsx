'use client'

import { BreadCrumb } from 'primereact/breadcrumb'
import { Button } from 'primereact/button'
import { InputSwitch } from 'primereact/inputswitch'
import { FC, useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'

const Home: FC = () => {
  const items = useMemo(() => {
    return [
      { label: 'This starter' },
      { label: 'Uses' },
      { label: 'PrimeReact and Styled-Components' },
    ]
  }, [])

  const [checked, setChecked] = useState(false)

  const onButtonClick = useCallback(() => {
    setChecked(!checked)
  }, [checked])

  return (
    <SMain>
      <BreadCrumb model={items} />
      <InputSwitch checked={checked} onChange={onButtonClick} />
      <SButton className='p-ripple'>I&apos;m a PrimeReact button!</SButton>
    </SMain>
  )
}

export default Home

const SMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  gap: 20px;
`
const SButton = styled(Button)`
  background-color: orange;
  border: 1px solid orange;
`
