import React from 'react';
import { Link } from 'react-router';

export enum ButtonLinkType {
  OUTLINED = 'outlined',
  FILLED = 'filled',
  TEXT = 'text',
}
type Props = {
  color: string;
  type?: ButtonLinkType;
  children: React.ReactNode;
  to: string;
};

function getButtonStyle(
  color: string,
  type?: ButtonLinkType,
): React.CSSProperties {
  switch (type) {
    case ButtonLinkType.OUTLINED:
      return {
        border: `1px solid ${color}`,
        color: color,
      };
    case ButtonLinkType.TEXT:
      return {
        color: color,
        fontWeight: 'bold',
      };
    case ButtonLinkType.FILLED:
    default:
      return {
        backgroundColor: color,
        color: 'white',
      };
  }
}
export default function ButtonLink({ children, to, color, type }: Props) {
  return (
    <Link to={to}>
      <button
        style={{
          ...getButtonStyle(color, type),
          borderRadius: '100%',
          fontSize: '1.125 rem',
          padding: '1.25rem 0.25rem',
        }}
      >
        {children}
      </button>
    </Link>
  );
}
