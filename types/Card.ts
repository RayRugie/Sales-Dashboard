import { ReactNode } from 'react';

export interface CardProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
}