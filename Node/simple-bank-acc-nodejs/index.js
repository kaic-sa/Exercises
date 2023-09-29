const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
app.use(express.json());

const customers = [];

//middleware
function verifyAccountExists(req, res, next) {
	const { cpf } = req.headers;

	const customer = customers.find((customer) => customer.cpf === cpf);
	if (!customer) {
		return res.status(400).json({ error: "Customer not found" });
	}
	req.customer = customer;
	return next();
}
function getAccBalance(statement) {
	const balance = statement.reduce((acc, operation) => {
		if (operation.type === "credit") {
			return acc + operation.amount;
		} else {
			return acc - operation.amount;
		}
	}, 0);
	return balance;
}

app.listen(3333, () => {
	console.log("Listen");
});
// cpf - string, name - string, id - uuid, statement []
app.post("/account", (req, res) => {
	const { cpf, name } = req.body;
	const id = uuidv4();
	const customerExists = customers.some((customer) => {
		return customer.cpf === cpf;
	});

	if (customerExists) {
		return res.status(400).json({ error: "customer exists" });
	}
	customers.push({
		cpf,
		name,
		id,
		statement: [],
	});

	return res.status(201).send();
});
app.get("/", (req, res) => {
	return res.send(customers);
});

app.get("/statement", verifyAccountExists, (req, res) => {
	const { customer } = req;
	return res.json(customer.statement);
});

app.post("/withdraw", verifyAccountExists, (req, res) => {
	const { amount } = req.body;
	const { customer } = req;

	const balance = getAccBalance(customer.statement);
	if (balance < amount) {
		return res.status(400).json({ error: "Saldo insuficiente" });
	}

	const statementOperation = {
		amount,
		created_at: new Date(),
		type: "debit",
	};
	customer.statement.push(statementOperation);
});

app.post("/deposit", verifyAccountExists, (req, res) => {
	const { description, amount } = req.body;
	const { customer } = req;
	const statementOperation = {
		description,
		amount,
		created_at: new Date(),
		type: "credit",
	};
	customer.statement.push(statementOperation);

	return res.status(201).send();
});

app.get("/statement/date", verifyAccountExists, (req, res) => {
	const { customer } = req;
	const { date } = req.query;
	const dateFormat = new Date(date + " 00:00");

	const statement = customer.statement.filter((p) => {
		return p.created_at.toDateString() === dateFormat.toDateString();
	});

	return res.json(statement);
});

app.put("/account", verifyAccountExists, (req, res) => {
	const { name } = req.body;
	const { customer } = req;
	customer.name = name;
	return res.status(201).send();
});

app.get("/account", verifyAccountExists, (req, res) => {
	const { customer } = req;
	return res.json(customer).send();
});

app.delete("/account", verifyAccountExists, (req, res) => {
	const { customer } = req;
	customers.splice(customer, 1);
	return res.status(200).json(customers);
});

app.get("/balance", verifyAccountExists, (req, res) => {
	const { customer } = req;

	const balance = getAccBalance(customer.statement);
	return res.json(balance);
});
