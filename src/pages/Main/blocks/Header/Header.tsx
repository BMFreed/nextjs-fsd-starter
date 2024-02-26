import Link from 'next/link';
import styled from 'styled-components';

const SWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    color: ${(props) => props.theme.colors.secondary};
`;

const SPages = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;
const SLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export default function Header() {
  return (
    <SWrapper>
      <SLogo>Logo</SLogo>
      <SPages>
        <Link href="/">Исследования</Link>
        <Link href="/">Мероприятия</Link>
      </SPages>
    </SWrapper>
  );
}
