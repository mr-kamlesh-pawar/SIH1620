import React from "react";

function InventoryManagement() {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg my-10 mx-auto max-w-4xl">
      <h2 className="text-3xl font-semibold text-blue-900 mb-6">
        Inventory Management
      </h2>
      <p className="text-gray-700 mb-4">
        Manage hospital medicines and consumables inventory efficiently.
      </p>
      <ul className="list-disc list-inside">
        <li className="mb-2">
          Monitor stock levels and re-order notifications
        </li>
        <li className="mb-2">Track dispensation and consumption patterns</li>
        <li className="mb-2">
          Ensure compliance with health and safety regulations
        </li>
      </ul>
    </div>
  );
}

export default InventoryManagement;
