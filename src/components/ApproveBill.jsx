import React, { useState } from 'react';

function ApproveBill({ contract, onApprove }) {
    const [billId, setBillId] = useState('');

    const handleApprove = async () => {
        try {
            await contract.approveBill(billId);
            console.log('Bill approved successfully.');
            onApprove();
        } catch (error) {
            console.error('Error approving bill:', error);
        }
    };

    return (
        <div className='rounded-lg shadow-lg bg-white w-96 mx-auto p-6'>
            <h2 className="text-2xl font-semibold mb-4">Approve Bill</h2>
            <input
                type="number"
                placeholder="Bill ID"
                value={billId}
                onChange={(e) => setBillId(e.target.value)}
                className="mb-2 w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
                className="w-full bg-green-500 text-white p-2 rounded mt-2 hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
                onClick={handleApprove}
            >
                Approve Bill
            </button>
        </div>
    );
}

export default ApproveBill;
