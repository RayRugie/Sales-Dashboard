import { Card } from "@/components/ui/Card";
import Chart from "@/components/ui/Chart";
import { salesChartData, salesChartOptions } from "@/lib/chartConfig";

export default function SalesChart() {
  return (
    <Card>
        <div className="p-3 md:p-6 text-white ">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 md:mb-4 gap-2 md:gap-3">
            <h4 className="text-sm md:text-lg font-semibold">Sales Report</h4>
            <div className="flex flex-wrap gap-1 md:gap-2">
            {["Daily", "Monthly", "Yearly"].map((range) => (
                <button
                key={range}
                className="px-2 md:px-3 py-1 text-xs md:text-sm rounded-md bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition"
                >
                {range}
                </button>
            ))}
            </div>
        </div>
        <div className="w-full h-full ">
            <Chart 
                type="bar" 
                data={salesChartData} 
                options={salesChartOptions}
            />
        </div>
        </div>
    </Card>
  );
}