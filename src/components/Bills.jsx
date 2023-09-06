import React, { useEffect, useState } from 'react';

function Bills({ contract }) {
    const [bills, setBills] = useState([]);

    useEffect(() => {
        fetchBills();
    }, []);

    const fetchBills = async () => {
        try {
            const fetchedBills = await contract.showBills();
            setBills(fetchedBills);
        } catch (error) {
            console.error('Error fetching bills:', error);
        }
    };

    return (
        <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Uploaded Bills</h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {bills.map((billData, index) => (
                    <div key={index} className="bg-blue-100 p-4 rounded shadow">
                        <p className="text-lg font-semibold">{billData}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bills;
