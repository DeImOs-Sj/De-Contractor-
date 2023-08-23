import React from 'react';

function Bills({ bills }) {
    return (
        <div className="bg-white p-8 rounded shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-4">Uploaded Bills</h2>
            <ul>
                {bills.map((bill, index) => (
                    <li key={index}>{bill.billData}</li>
                ))}
            </ul>
        </div>
    );
}

export default Bills;
