import { CardProps } from '../../../types/Card';

export function Card({ title, icon, children }: CardProps) {
  return (
    <div className="bg-black border border-gray-800 p-2 md:p-4 rounded-lg w-full">
      {(title || icon) && (
        <div className="flex items-center justify-between mb-2">
          {title && <h2 className="text-xs md:text-sm font-medium text-gray-400">{title}</h2>}
          {icon && <div className="text-gray-500">{icon}</div>}
        </div>
      )}
      {children}
    </div>
  );
}
