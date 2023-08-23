// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MultiSignatureBillValidation {
    struct Bill {
        string billData;
        mapping(address => bool) approvals;
        address[] approvingOwners;
        address[] owners; // Owners for this bill
        uint8 maxOwners; // Maximum number of owners for this bill
    }

    mapping(uint256 => Bill) public bills;
    uint256 public billCount;

    constructor() {}

    modifier onlyOwner(uint256 _billId) {
        require(isOwner(_billId, msg.sender), "Not an owner");
        _;
    }

    modifier onlyUpToThreeOwners(address[] memory _newOwners) {
        require(_newOwners.length <= 3, "Maximum 3 owners allowed");
        _;
    }

    function isOwner(
        uint256 _billId,
        address _address
    ) internal view returns (bool) {
        Bill storage bill = bills[_billId];
        for (uint256 i = 0; i < bill.owners.length; i++) {
            if (bill.owners[i] == _address) {
                return true;
            }
        }
        return false;
    }

    function uploadBill(
        uint256 _billId,
        string memory _billData,
        address[] memory _initialOwners
    ) public onlyUpToThreeOwners(_initialOwners) {
        require(
            _initialOwners.length > 0,
            "At least one owner must be specified"
        );

        Bill storage bill = bills[_billId];
        bill.billData = _billData;
        bill.owners = _initialOwners;
        bill.maxOwners = uint8(_initialOwners.length);
        billCount++;
    }

    function approveBill(uint256 _billId) public {
        require(isOwner(_billId, msg.sender), "Only owners can approve bills");
        Bill storage bill = bills[_billId];
        require(!bill.approvals[msg.sender], "Already approved");

        bill.approvals[msg.sender] = true;
        bill.approvingOwners.push(msg.sender);
    }

    function getApprovalStatus(
        uint256 _billId,
        address _owner
    ) public view returns (bool) {
        require(_billId < billCount, "Invalid bill ID");

        Bill storage bill = bills[_billId];
        return bill.approvals[_owner];
    }

    function isBillApproved(uint256 _billId) public view returns (bool) {
        require(_billId < billCount, "Invalid bill ID");

        Bill storage bill = bills[_billId];

        if (bill.approvingOwners.length < bill.maxOwners) {
            return false;
        }

        for (uint256 i = 0; i < bill.approvingOwners.length; i++) {
            if (!bill.approvals[bill.approvingOwners[i]]) {
                return false;
            }
        }

        return true;
    }
}
