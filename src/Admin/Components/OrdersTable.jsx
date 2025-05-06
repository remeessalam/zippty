import React from "react";
import { MoreVertical } from "react-feather";

const OrdersTable = () => {
  const recentOrders = [
    {
      id: "#25426",
      product: "Zip Interactive Laser Toy",
      date: "Nov 8th,2023",
      customer: "Kavin",
      status: "Delivered",
      amount: "₹200.00",
    },
    {
      id: "#25425",
      product: "Zip Interactive Laser Toy",
      date: "Nov 7th,2023",
      customer: "Komael",
      status: "Canceled",
      amount: "₹200.00",
    },
    {
      id: "#25424",
      product: "Zip Interactive Laser Toy",
      date: "Nov 6th,2023",
      customer: "Nikhil",
      status: "Delivered",
      amount: "₹200.00",
    },
    {
      id: "#25423",
      product: "Zip Interactive Laser Toy",
      date: "Nov 5th,2023",
      customer: "Shivam",
      status: "Canceled",
      amount: "₹200.00",
    },
    {
      id: "#25422",
      product: "Zip Interactive Laser Toy",
      date: "Nov 4th,2023",
      customer: "Shadab",
      status: "Delivered",
      amount: "₹200.00",
    },
    {
      id: "#25421",
      product: "Zip Interactive Laser Toy",
      date: "Nov 2nd,2023",
      customer: "Yogesh",
      status: "Delivered",
      amount: "₹200.00",
    },
  ];
  return (
    <div>
      {" "}
      <div className="bg-white rounded-md p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Recent Orders</h2>
          <button className="text-gray-400">
            <MoreVertical size={16} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="w-10 py-3 text-left">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary"
                  />
                </th>
                <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer Name
                </th>
                <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order, index) => (
                <tr key={index}>
                  <td className="py-4">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary"
                    />
                  </td>
                  <td className="py-4 text-sm text-gray-900">
                    {order.product}
                  </td>
                  <td className="py-4 text-sm text-gray-900">{order.id}</td>
                  <td className="py-4 text-sm text-gray-900">{order.date}</td>
                  <td className="py-4 text-sm">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                        {order.customer.charAt(0)}
                      </div>
                      {order.customer}
                    </div>
                  </td>
                  <td className="py-4">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full mr-1 ${
                          order.status === "Delivered"
                            ? "bg-green-600"
                            : "bg-yellow-600"
                        }`}
                      ></span>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 text-sm text-gray-900">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;
