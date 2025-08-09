import { Card } from "@/components/ui/Card";
import { products } from "@/lib/mockData";

export default function ProductsTable() {
  return (
    <Card>
      <div className="w-full">
        <h4 className="text-sm md:text-lg font-semibold mb-3 md:mb-4">Products Table</h4>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-xs md:text-sm">
            <thead className="bg-black text-gray-400">
              <tr>
                <th className="px-2 md:px-4 py-2 text-left">Product</th>
                <th className="px-2 md:px-4 py-2 text-left hidden sm:table-cell">Category</th>
                <th className="px-2 md:px-4 py-2 text-left">Stock</th>
                <th className="px-2 md:px-4 py-2 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={index} className="border-b border-[#333] hover:bg-[#252535]">
                  <td className="px-2 md:px-4 py-2 font-medium truncate max-w-[100px] md:max-w-none">{item.name}</td>
                  <td className="px-2 md:px-4 py-2 text-gray-400 hidden sm:table-cell truncate">{item.category}</td>
                  <td className="px-2 md:px-4 py-2">
                    <span className={`px-1 md:px-2 py-1 rounded-full text-xs ${
                      item.stock > 50 ? 'bg-green-900 text-green-300' : 
                      item.stock > 20 ? 'bg-yellow-900 text-yellow-300' : 
                      'bg-red-900 text-red-300'
                    }`}>
                      {item.stock}
                    </span>
                  </td>
                  <td className="px-2 md:px-4 py-2 font-semibold">${item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}