import React, { useState } from 'react';

function CheckApprovalStatus({ contract }) {
    const [billId, setBillId] = useState('');
    const [approvalStatus, setApprovalStatus] = useState(false);

    const handleCheckApproval = async () => {
        try {
            const isApproved = await contract.getApprovalStatus(billId, contract.signer.getAddress());
            setApprovalStatus(isApproved);
        } catch (error) {
            console.error('Error checking approval status:', error);
        }
    };

    return (
        <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-4">Check Approval Status</h2>
            <input
                className="mb-2 w-full px-3 py-2 border rounded"
                type="number"
                placeholder="Bill ID"
                value={billId}
                onChange={(e) => setBillId(e.target.value)}
            />
            <button
                className="w-full bg-blue-500 text-white p-2 rounded"
                onClick={handleCheckApproval}
            >
                Check Approval Status
            </button>
            {approvalStatus !== null && (
                <p className="mt-2">
                    {approvalStatus ? 'Approved' : 'Not Approved'}
                </p>
            )}
        </div>
    );
}

export default CheckApprovalStatus;
