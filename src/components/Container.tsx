import type { ReactNode } from 'react'

export default function Container(props: { children: ReactNode, size?: string }) {
  return (
    <div className={`container ${props.size ? `container--${props.size}` : ''}`}>
      {props.children}
    </div>
  )
}