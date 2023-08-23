import React from 'react';

function NavBar({ activePage, setActivePage }) {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-white text-xl font-semibold">MultiSignature App</h1>
                <div className="flex space-x-4">
                    <button
                        className={`text-white ${activePage === 'upload' ? 'font-semibold' : ''}`}
                        onClick={() => setActivePage('upload')}
                    >
                        Upload Bill
                    </button>
                    <button
                        className={`text-white ${activePage === 'bills' ? 'font-semibold' : ''}`}
                        onClick={() => setActivePage('bills')}
                    >
                        Bills
                    </button>
                    <button
                        className={`text-white ${activePage === 'approved' ? 'font-semibold' : ''}`}
                        onClick={() => setActivePage('approved')}
                    >
                        Approved Bills
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
