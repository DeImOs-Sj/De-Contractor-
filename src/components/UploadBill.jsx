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
            window.alert('Bill has been uploaded successfully.');

        } catch (error) {
            console.error('Error uploading bill:', error);
        }
    };
    const handleFileChange = (e) => {
        // Update the selectedFile state when a file is selected
        setSelectedFile(e.target.files[0]);
    };


    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex items-center flex-col my-2 w-[51rem]  ">
            <h2 className="text-2xl font-semibold mb-4">Upload Bill</h2>

            <h1 className='text-md font-serif font-medium'>Enter Bill_ID</h1>
            <input
                className="mb-2 w-[30rem] px-3 py-2 border-2 rounded flex justify-center"
                type="text"
                placeholder="Bill ID"
                value={billId}
                onChange={(e) => setBillId(e.target.value)}
            />

            <h1 className='text-md font-serif font-medium'>Enter Data</h1>

            <textarea
                className="mb-2 w-[30rem] h-[4rem] px-3 py-2 border-2 rounded"
                rows="4"
                placeholder="Bill Data"
                value={billData}
                onChange={(e) => setBillData(e.target.value)}
            />
            <h1 className='text-md font-serif font-medium'>Approvers' Addresses</h1>

            <input
                className="mb-2 w-[30rem] px-3 py-2 border-2 rounded"
                type="text"
                placeholder="Initial Owners (comma-separated)"
                value={initialOwners}
                onChange={(e) => setInitialOwners(e.target.value)}
            />
            <input
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleFileChange}
                className="pb-2"
            />
            <button
                className="w-[10rem] bg-blue-500 text-white p-2 rounded"
                onClick={handleUpload}
            >
                Upload Bill
            </button>
        </div>
    );
}

export default UploadBill;
