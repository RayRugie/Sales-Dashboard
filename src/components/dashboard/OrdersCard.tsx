import { Card } from "@/components/ui/Card";
import { ordersChartData } from "@/lib/chartConfig";
import Chart from "@/components/ui/Chart";

export default function OrdersCard() {
  return (
    <div>
    <Card>
        <div className="flex flex-col h-full p-3 md:p-4">
          <div className="flex flex-col justify-center">
            <h4 className="text-sm md:text-sm text-gray-400">Orders</h4>
            <p className="text-lg md:text-base font-bold text-white">22.6k</p>
          </div>
          <div className="flex-1 min-h-0 min-w-0">
            <div className="w-30 h-20 md:h-20 ">
              <Chart type="line" data={ordersChartData} stroke="#3b82f6"/>
            </div>
          </div>
        </div>
    </Card>

    </div>
  );
}