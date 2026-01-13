// from AI

"use client";
import { useState } from "react";

interface AddressData {
  country: string;
  province: string;
  city: string;
  postalCode: string;
  address: string;
  makeMain: boolean;
}

interface AddressFormProps {
  onAddressChange: (address: AddressData) => void;
}

export default function AddressForm({ onAddressChange }: AddressFormProps) {
  const [addressType, setAddressType] = useState("new"); // 'existing' | 'new'
  const [formData, setFormData] = useState({
    country: "Indonesia",
    province: "",
    city: "",
    postalCode: "",
    address: "",
    makeMain: false,
  });

  const handleChange = (field: keyof AddressData, value: string | boolean) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onAddressChange(newData);
  };

  return (
    <div className="bg-card p-6 rounded-lg border space-y-4">
      <h3 className="text-xl font-bold text-white">Address</h3>

      {/* Address Type Toggle */}
      <div className="flex space-x-4">
        <button
          onClick={() => setAddressType("existing")}
          className={`px-4 py-2 rounded ${
            addressType === "existing"
              ? "bg-orange-500 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          Existing Address
        </button>
        <button
          onClick={() => setAddressType("new")}
          className={`px-4 py-2 rounded ${
            addressType === "new"
              ? "bg-orange-500 text-white"
              : "bg-gray-700 text-gray-300"
          }`}
        >
          New Address
        </button>
      </div>

      {/* Form Fields */}
      {addressType === "new" && (
        <div className="grid grid-cols-2 gap-4">
          <select
            value={formData.country}
            onChange={(e) => handleChange("country", e.target.value)}
            className="bg-gray-700 text-white p-3 rounded border"
          >
            <option value="Indonesia">Indonesia</option>
          </select>

          <select
            value={formData.province}
            onChange={(e) => handleChange("province", e.target.value)}
            className="bg-gray-700 text-white p-3 rounded border"
          >
            <option value="">Province</option>
            <option value="Jakarta">Jakarta</option>
          </select>

          <select
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="bg-gray-700 text-white p-3 rounded border"
          >
            <option value="">City</option>
            <option value="Jakarta">Jakarta</option>
          </select>

          <input
            type="text"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={(e) => handleChange("postalCode", e.target.value)}
            className="bg-gray-700 text-white p-3 rounded border"
          />

          <textarea
            placeholder="Input Complete Address"
            value={formData.address}
            onChange={(e) => handleChange("address", e.target.value)}
            className="col-span-2 bg-gray-700 text-white p-3 rounded border h-24"
          />

          <label className="col-span-2 flex items-center text-gray-300">
            <input
              type="checkbox"
              checked={formData.makeMain}
              onChange={(e) => handleChange("makeMain", e.target.checked)}
              className="mr-2"
            />
            Make it the main address
          </label>
        </div>
      )}

      {/* Shipping */}
      <div className="bg-gray-700/50 p-4 rounded">
        <h4 className="text-white font-medium mb-2">Shipping</h4>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
          <span className="text-white">NexusHub Courier</span>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-gray-700/50 p-4 rounded">
        <h4 className="text-white font-medium mb-2">Payment Method</h4>
        <div className="flex items-center">
          <span className="bg-white text-black px-2 py-1 rounded text-xs mr-3">
            Pay
          </span>
          <span className="text-white">Apple Pay</span>
        </div>
      </div>
    </div>
  );
}
