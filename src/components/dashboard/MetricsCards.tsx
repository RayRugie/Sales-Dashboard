import { Card } from "@/components/ui/Card";
import { metrics } from "@/lib/mockData";
import { Users, Package, DollarSign, TrendingUp } from "lucide-react";

const iconMap = {
  sales: TrendingUp,
  customers: Users,
  products: Package,
  revenue: DollarSign,
};

export default function MetricCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-3 md:gap-6 max-w-full">
      {metrics.map(({ id, title, value, growth, color }) => {
        const Icon = iconMap[id as keyof typeof iconMap];
        return (
          <Card key={id}>
            <div className="flex items-center justify-between p-3 md:p-6">
              <div className="flex-1 min-w-0">
                <p className="text-xs md:text-sm text-gray-400 truncate">{title}</p>
                <h3 className="text-base md:text-2xl font-semibold truncate" style={{ color: color }}>{value}</h3>
                <p
                  className={`text-xs md:text-sm mt-1 ${
                    growth >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {growth >= 0 ? "↑" : "↓"} {growth}%
                </p>
              </div>
              <div
                className="p-2 md:p-3 rounded-full flex-shrink-0 ml-2 md:ml-3"
                style={{ backgroundColor: color }}
              >
                <Icon size={14} className="text-white md:w-5 md:h-5" />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}