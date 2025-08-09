import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export interface ProgressRingProps {
  value: number;
  size?: number;
  stroke?: number;
  color?: string;
}