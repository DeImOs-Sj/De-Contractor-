import React, { useState } from 'react';

function UploadBill({ contract, onUpload }) {
    const [billId, setBillId] = useState('');
    const [billData, setBillData] = useState('');
    const [initialOwners, setInitialOwners] = useState('');

    const handleUpload = async () => {
        const parsedInitialOwners = initialOwners.split(',').map(address => address.trim());

        try {
            await contract.uploadBill(billId, billData, parsedInitialOwners);
            console.log('Bill uploaded successfully.');
            onUpload();
        } catch (error) {
            console.error('Error uploading bill:', error);
        }
    };

    return (
        <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-4">Upload Bill</h2>
            <input
                className="mb-2 w-full px-3 py-2 border rounded"
                type="text"
                placeholder="Bill ID"
                value={billId}
                onChange={(e) => setBillId(e.target.value)}
            />
            <textarea
                className="mb-2 w-full px-3 py-2 border rounded"
                rows="4"
                placeholder="Bill Data"
                value={billData}
                onChange={(e) => setBillData(e.target.value)}
            />
            <input
                className="mb-2 w-full px-3 py-2 border rounded"
                type="text"
                placeholder="Initial Owners (comma-separated)"
                value={initialOwners}
                onChange={(e) => setInitialOwners(e.target.value)}
            />
            <button
                className="w-full bg-blue-500 text-white p-2 rounded"
                onClick={handleUpload}
            >
                Upload Bill
            </button>
        </div>
    );
}

export default UploadBill;
