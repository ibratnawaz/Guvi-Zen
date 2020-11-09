var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    function Customer(customerInfo) {
        this.cusId = customerInfo.cusId;
        this.name = customerInfo.name;
        this.discount = customerInfo.discount;
    }
    Customer.prototype.getId = function () {
        return this.cusId;
    };
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getDiscount = function () {
        return this.discount;
    };
    Customer.prototype.setDiscount = function (discount) {
        this.discount = discount;
    };
    Customer.prototype.toString = function () {
        return "ID:" + this.cusId + " Name:" + this.name + " got Discount:" + this.discount;
    };
    return Customer;
}());
var CustomerInvoice = /** @class */ (function (_super) {
    __extends(CustomerInvoice, _super);
    function CustomerInvoice(accountInfo) {
        var _this = _super.call(this, accountInfo.customer) || this;
        _this.customer = accountInfo.customer;
        _this.inId = accountInfo.inId;
        _this.amount = accountInfo.amount;
        return _this;
    }
    CustomerInvoice.prototype.getInId = function () {
        return this.inId;
    };
    CustomerInvoice.prototype.getCustomer = function () {
        return this.customer;
    };
    CustomerInvoice.prototype.setCustomer = function (customer) {
        this.customer.cusId = customer.cusId;
        this.customer.discount = customer.discount;
        this.customer.name = customer.name;
    };
    CustomerInvoice.prototype.getAmount = function () {
        return this.amount;
    };
    CustomerInvoice.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    CustomerInvoice.prototype.getCustomerName = function () {
        return this.customer.name;
    };
    CustomerInvoice.prototype.getAmountAfterDiscount = function () {
        this.amount = this.amount - (this.amount * this.discount / 100);
        return this.amount;
    };
    return CustomerInvoice;
}(Customer));
var CustomerAccount = /** @class */ (function (_super) {
    __extends(CustomerAccount, _super);
    function CustomerAccount(accountInfo) {
        var _this = _super.call(this, accountInfo.customer) || this;
        _this.customer = accountInfo.customer;
        _this.accId = accountInfo.accId;
        _this.balance = accountInfo.balance;
        return _this;
    }
    CustomerAccount.prototype.getAccId = function () {
        return this.accId;
    };
    CustomerAccount.prototype.getCustomer = function () {
        return this.customer;
    };
    CustomerAccount.prototype.getBalance = function () {
        return this.balance;
    };
    CustomerAccount.prototype.setBalance = function (balance) {
        this.balance = balance;
    };
    CustomerAccount.prototype.toStringAcc = function () {
        return "Name:" + this.customer.name + " Balance:" + this.balance.toFixed(2);
    };
    CustomerAccount.prototype.getCustomerName = function () {
        return this.customer.name;
    };
    CustomerAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        var cusData = {
            accId: this.accId,
            customer: this.customer,
            balance: this.balance
        };
        return cusData;
    };
    CustomerAccount.prototype.withdraw = function (amount) {
        if (this.balance > amount) {
            this.balance -= amount;
            var cusData = {
                accId: this.accId,
                customer: this.customer,
                balance: this.balance
            };
            return cusData;
        }
        else {
            return "Amount withdrawn exceeded the current balance";
        }
    };
    return CustomerAccount;
}(Customer));
var i = 1;
var j = 1001;
var k = 1;
var createCustomer = function () {
    var name = document.getElementById('name').value;
    var balance = document.getElementById('balance').value;
    var amount = document.getElementById('amount').value;
    var discount = document.getElementById('discount').value;
    if (name) {
        document.getElementById('required').innerHTML = '';
        var customerDetails = new CustomerAccount({
            accId: j++,
            customer: {
                cusId: i++,
                name: name,
                discount: +discount
            },
            balance: +balance
        });
        var invoiceDetails = new CustomerInvoice({
            inId: k++,
            customer: {
                cusId: i++,
                name: name,
                discount: +discount
            },
            amount: +amount
        });
        var content = document.getElementById('table-body');
        var tr = document.createElement('tr');
        tr.innerHTML = "\n            <th scope=\"row\">" + customerDetails.getId() + "</th>\n            <td>" + customerDetails.getName() + "</td>\n            <td>" + customerDetails.getAccId() + "</td>\n            <td>" + customerDetails.getBalance() + "</td>\n            <td>\n                <button class=\"btn btn-success my-btn\">+</button>\n            </td>\n            <td>\n                <button class=\"btn btn-danger my-btn\">-</button>\n            </td>\n            <td>\n                <button class=\"btn btn-info my-btn\">view</button>\n            </td>\n            <td>\n                <button class=\"btn btn-secondary my-btn\" data-toggle=\"modal\"\n                    data-target=\"#customerEditModal\">edit</button>\n            </td>\n        ";
        content.appendChild(tr);
        console.log('Amount:', invoiceDetails.getAmount());
        console.log('Discount:', invoiceDetails.getDiscount());
        console.log('Amount after discount:', invoiceDetails.getAmountAfterDiscount());
        console.log('Id:', customerDetails.getId());
        console.log('Name:', customerDetails.getName());
        console.log('Discount:', customerDetails.getDiscount());
        customerDetails.setDiscount(50);
        console.log(customerDetails.toString());
        console.log('Child Functions');
        console.log('Account Id:', customerDetails.getAccId());
        console.log('Account Holder Details:', customerDetails.getCustomer());
        console.log('Balance:', customerDetails.getBalance());
        customerDetails.setBalance(50000);
        console.log(customerDetails.toStringAcc());
        console.log('Name:', customerDetails.getCustomerName());
        console.log('After Deposit:', customerDetails.deposit(50000));
        console.log('After withdraw:', customerDetails.withdraw(80000));
    }
    else {
        console.log(document.getElementById('name').value);
        document.getElementById('required').innerHTML = 'This field is required.';
    }
};
