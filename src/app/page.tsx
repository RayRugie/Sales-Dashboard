// src/app/page.tsx
import DashboardLayout from "@/components/layout/DashboardLayout";
import MetricCards from "@/components/dashboard/MetricsCards";
import SalesChart from "@/components/dashboard/SalesChart";
import EarningCard from "@/components/dashboard/EarningCard";
import RatingCard from "@/components/dashboard/RatingCard";
import OrdersCard from "@/components/dashboard/OrdersCard";
import ProductsTable from "@/components/dashboard/ProductsTable";
import ClosedOrders from "@/components/dashboard/ClosedOrders";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="space-y-4 md:space-y-6 px-3 md:px-4 lg:px-6 xl:px-8 py-4 md:py-6 min-h-0 overflow-hidden max-w-full">
        <MetricCards />
        
        {/* Main dashboard grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 md:gap-6 min-h-0 max-w-full">
          {/* Left side - Sales Chart (2/3 width on desktop) */}
          <div className="w-full lg:col-span-2 min-h-0 max-w-full">
            <SalesChart />
          </div>
          
          {/* Right side - 2x2 Grid of cards (1/3 width on desktop) */}
          <div className="w-full lg:col-span-1 min-h-0 max-w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:grid-rows-2 gap-4 h-full">
              {/* Top left */}
              <div className="min-h-0">
                <EarningCard />
              </div>
              
              {/* Top right */}
              <div className="min-h-0">
                <RatingCard />
              </div>
              
              {/* Bottom left */}
              <div className="min-h-0">
                <ClosedOrders />
              </div>
              
              {/* Bottom right */}
              <div className="min-h-0 min-w-0">
                <OrdersCard />
              </div>
            </div>
          </div>
        </div>
        
        <ProductsTable />
      </div>
    </DashboardLayout>
  );
}