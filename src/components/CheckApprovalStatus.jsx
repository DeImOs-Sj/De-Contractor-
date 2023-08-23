import React, { useState } from 'react';

function CheckApprovalStatus({ contract }) {
    const [billId, setBillId] = useState('');

    const handleCheckStatus = async () => {
        try {
            const isApproved = await contract.isBillApproved(billId);
            if (isApproved) {
                console.log('Bill is approved.');
            } else {
                console.log('Bill is not approved.');
            }
        } catch (error) {
            console.error('Error checking approval status:', error);
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Check Approval Status</h2>
            {/* ... your input fields */}
            <button
                className="w-full bg-yellow-500 text-white p-2 rounded mt-2"
                onClick={handleCheckStatus}
            >
                Check Approval Status
            </button>
        </div>
    );
}

export default CheckApprovalStatus;
