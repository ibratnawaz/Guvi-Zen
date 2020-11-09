interface CustomerInfo {
    cusId: number;
    name: string;
    discount ? : number;
}

interface AccountInfo {
    accId: number;
    customer: CustomerInfo;
    balance ? : number;
}

interface InvoiceInfo {
    inId: number;
    customer: CustomerInfo;
    amount: number;
}

class Customer {
    cusId: number;
    name: string;
    discount: number;
    constructor(customerInfo: CustomerInfo) {
        this.cusId = customerInfo.cusId;
        this.name = customerInfo.name;
        this.discount = customerInfo.discount;
    }

    getId() {
        return this.cusId;
    }

    getName() {
        return this.name;
    }

    getDiscount() {
        return this.discount;
    }

    setDiscount(discount: number) {
        this.discount = discount;
    }

    toString() {
        return `ID:${this.cusId} Name:${this.name} got Discount:${this.discount}`;
    }
}

class CustomerInvoice extends Customer {
    inId: number;
    customer: CustomerInfo;
    amount: number;

    constructor(accountInfo: InvoiceInfo) {
        super(accountInfo.customer);
        this.customer = accountInfo.customer;
        this.inId = accountInfo.inId;
        this.amount = accountInfo.amount;
    }

    getInId() {
        return this.inId;
    }

    getCustomer() {
        return this.customer;
    }

    setCustomer(customer: Customer) {
        this.customer.cusId = customer.cusId;
        this.customer.discount = customer.discount;
        this.customer.name = customer.name;
    }

    getAmount() {
        return this.amount;
    }

    setAmount(amount: number) {
        this.amount = amount;
    }

    getCustomerName() {
        return this.customer.name;
    }

    getAmountAfterDiscount() {
        this.amount = this.amount - (this.amount * this.discount / 100);
        return this.amount;
    }

}

class CustomerAccount extends Customer {
    accId: number;
    customer: CustomerInfo;
    balance: number;

    constructor(accountInfo: AccountInfo) {
        super(accountInfo.customer);
        this.customer = accountInfo.customer;
        this.accId = accountInfo.accId;
        this.balance = accountInfo.balance;
    }

    getAccId() {
        return this.accId;
    }

    getCustomer() {
        return this.customer;
    }

    getBalance() {
        return this.balance;
    }

    setBalance(balance: number) {
        this.balance = balance;
    }

    toStringAcc() {
        return `Name:${this.customer.name} Balance:${this.balance.toFixed(2)}`;
    }

    getCustomerName() {
        return this.customer.name;
    }

    deposit(amount: number) {
        this.balance += amount;
        let cusData: AccountInfo = {
            accId: this.accId,
            customer: this.customer,
            balance: this.balance
        }
        return cusData;
    }

    withdraw(amount: number) {
        if (this.balance > amount) {
            this.balance -= amount;
            let cusData: AccountInfo = {
                accId: this.accId,
                customer: this.customer,
                balance: this.balance
            }
            return cusData;
        } else {
            return `Amount withdrawn exceeded the current balance`
        }
    }
}

let i = 1;
let j = 1001;
let k = 1;
let createCustomer = () => {
    let name = ( < HTMLInputElement > document.getElementById('name')).value;
    let balance = ( < HTMLInputElement > document.getElementById('balance')).value;
    let amount = ( < HTMLInputElement > document.getElementById('amount')).value;
    let discount = ( < HTMLInputElement > document.getElementById('discount')).value;
    if (name) {

        document.getElementById('required').innerHTML = '';
        let customerDetails = new CustomerAccount({
            accId: j++,
            customer: {
                cusId: i++,
                name: name,
                discount: +discount
            },
            balance: +balance
        });

        let invoiceDetails = new CustomerInvoice({
            inId: k++,
            customer: {
                cusId: i++,
                name: name,
                discount: +discount
            },
            amount: +amount
        });

        let content = document.getElementById('table-body');
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <th scope="row">${customerDetails.getId()}</th>
            <td>${customerDetails.getName()}</td>
            <td>${customerDetails.getAccId()}</td>
            <td>${customerDetails.getBalance()}</td>
            <td>
                <button class="btn btn-success my-btn">+</button>
            </td>
            <td>
                <button class="btn btn-danger my-btn">-</button>
            </td>
            <td>
                <button class="btn btn-info my-btn">view</button>
            </td>
            <td>
                <button class="btn btn-secondary my-btn" data-toggle="modal"
                    data-target="#customerEditModal">edit</button>
            </td>
        `;
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

    } else {
        console.log(( < HTMLInputElement > document.getElementById('name')).value)
        document.getElementById('required').innerHTML = 'This field is required.';
    }
}