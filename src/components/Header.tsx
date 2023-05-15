import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Header(props: Props) {
  return (
    <header>
      {props.children}
    </header>
  )
}