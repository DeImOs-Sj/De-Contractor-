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
        <div>
            <h2 className="text-2xl font-semibold mb-4">Approve Bill</h2>
            {/* ... your input fields */}
            <button
                className="w-full bg-green-500 text-white p-2 rounded mt-2"
                onClick={handleApprove}
            >
                Approve Bill
            </button>
        </div>
    );
}

export default ApproveBill;
