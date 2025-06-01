import React from 'react'

function Expense() {
    return (
        <>
            <body className="bg-gray-100 p-6">
  <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
    <h1 className="text-2xl font-bold mb-4">Monthly Expenses</h1>
    <div className="text-center mb-4">
      <span className="block text-lg font-semibold">September 2024</span>
    </div>
    <div className="grid grid-cols-7 gap-2 mb-6">
      <div className="bg-green-200 p-2 rounded text-center">23 Mon</div>
      <div className="bg-green-200 p-2 rounded text-center">24 Tue</div>
      <div className="bg-green-200 p-2 rounded text-center">25 Wed</div>
      <div className="bg-green-200 p-2 rounded text-center">26 Thu</div>
      <div className="bg-green-200 p-2 rounded text-center">27 Fri</div>
      <div className="bg-green-200 p-2 rounded text-center">28 Sat</div>
      <div className="bg-green-200 p-2 rounded text-center">29 Sun</div>
    </div>
    <form>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Category" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Description" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Amount</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Amount" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Income/Expense</label>
        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Income/Expense" />
      </div>
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Add Transaction</button>
    </form>
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Recent Transactions</h2>
      <div className="bg-gray-200 p-4 rounded mb-2">Transaction 1</div>
      <div className="bg-gray-200 p-4 rounded mb-2">Transaction 2</div>
      <div className="bg-gray-200 p-4 rounded mb-2">Transaction 3</div>
    </div>
  </div>
  </body>
        </>
    )
}

export default Expense
