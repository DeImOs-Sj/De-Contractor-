import React from 'react';

function NavBar({ activePage, setActivePage }) {
    return (
        <nav className="bg-[#ffffff] p-4 shadow-md	">
            <div className="flex justify-between items-center">
                <h1 className="text- text-xl font-semibold">MultiSignature App</h1>
                <div className="flex space-x-4">
                    <button
                        className={`text-[#454343] ${activePage === 'home' ? 'font-semibold' : ''}`}
                        onClick={() => setActivePage('home')}
                    >
                        HomePage
                    </button>
                    <button
                        className={`text-[#454343] ${activePage === 'upload' ? 'font-semibold' : ''}`}
                        onClick={() => setActivePage('upload')}
                    >
                        Upload Bill
                    </button>
                    <button
                        className={`text-[#454343] ${activePage === 'bills' ? 'font-semibold' : ''}`}
                        onClick={() => setActivePage('bills')}
                    >
                        Bills
                    </button>
                    <button
                        className={`text-[#454343] ${activePage === 'approve' ? 'font-semibold' : ''}`}
                        onClick={() => setActivePage('approve')}
                    >
                        ApproveBill
                    </button>
                    <button
                        className={`text-[#454343] ${activePage === 'checkApproval' ? 'font-semibold' : ''}`}
                        onClick={() => setActivePage('checkApproval')}
                    >
                        ApprovalStatus
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
