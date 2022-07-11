const express = require("express");
const { PrismaClient } = require("@prisma/client");
const jsonwebtoken = require("jsonwebtoken");
var { expressjwt: jwt } = require("express-jwt");

const router = express.Router();
const prisma = new PrismaClient();

router.get(
	"/protected",
	jwt({ secret: process.env.TOKEN_KEY, algorithms: ["HS256"] }),
	(req, res) => {
		res.json({ message: "User IS OK" });
	}
);

router.get("/", async (req, res) => {
	const users = await prisma.user.findMany();
	res.json(users);
});

router.get("/:id", async (req, res) => {
	const id = req.params.id;
	const user = await prisma.user.findFirst({
		where: {
			id,
		},
	});
	res.json(user);
});

router.get("/signup/:email", async (req, res) => {
	const email = req.params.email;
	let isFound = false;

	const user = await prisma.user.findFirst({
		where: {
			email,
		},
	});

	if (!user) {
		res.json(email);
	} else {
		isFound = true;
		res.json(email);
	}
});

router.post("/signup", async (req, res) => {
	const { username, email, password } = req.body;

	const exiUserEmail = await prisma.user.findFirst({
		where: {
			email,
		},
	});

	if (exiUserEmail) {
		res.status(401).json({
			message: "Email is taken",
		});
		return;
	}

	const user = await prisma.user.create({
		data: {
			name: username,
			email,
			password,
		},
	});
	res.json(user);
});

router.post("/login", async (req, res) => {
	const { username, password } = req.body;
	const user = await prisma.user.findFirst({
		where: {
			name: username,
			password,
		},
	});
	if (!user) {
		res.status(401).json({
			message: "Username or Password is wrong!",
		});
		return;
	}

	const token = jsonwebtoken.sign(
		{ id: user.id, username, email: user.email },
		process.env.TOKEN_KEY,
		{ expiresIn: "24h" }
	);
	user.token = token;
	res.json(user);
});

router.delete("/:id", async (req, res) => {
	const id = req.params.id;
	const user = await prisma.user.delete({
		where: {
			id,
		},
	});
	res.json(user);
});

module.exports = router;
