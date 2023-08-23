import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import contractAbi from './contracts/MultiSignatureBillValidation.json';
import NavBar from './components/Navbar';
import UploadBill from './components/UploadBill';
import CheckApprovalStatus from './components/CheckApprovalStatus';
import ApproveBill from './components/ApproveBill';
import Bills from './components/Bills';

function App() {
  const [contract, setContract] = useState(null);
  const [activePage, setActivePage] = useState('upload');
  const [bills, setBills] = useState([]);

  useEffect(() => {
    initializeContract();
  }, []);

  const requestAccount = async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  };

  const initializeContract = async () => {
    try {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner(); // Get the signer (usually from MetaMask)
      const contractAddress = '0x0c8f42Fd6B5F00Fd599FFe01F35F8A28Dd06659D';

      const multisigContract = new ethers.Contract(contractAddress, contractAbi, signer);

      setContract(multisigContract);
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  const handleUpload = async () => {
    // ... (existing code)
    try {
      await contract.uploadBill(billId, billData, parsedInitialOwners);
      console.log('Bill uploaded successfully.');
      setBills(prevBills => [...prevBills, { billData }]);
      setActivePage('bills');
    } catch (error) {
      console.error('Error uploading bill:', error);
    }
  };

  return (
    <>
      <NavBar setActivePage={setActivePage} />
      <div className="flex justify-center items-center h-screen">
        {activePage === 'upload' && (
          <UploadBill contract={contract} onUpload={handleUpload} />
        )}
        {activePage === 'checkApproval' && (
          <CheckApprovalStatus contract={contract} />
        )}
        {activePage === 'approve' && (
          <ApproveBill contract={contract} onApprove={() => setActivePage('')} />
        )}
        {activePage === 'bills' && (
          <Bills bills={bills} />
        )}
      </div>
    </>
  );
}

export default App;
