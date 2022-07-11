const express = require("express");
const { PrismaClient } = require("@prisma/client");
var { expressjwt: jwt } = require("express-jwt");
const createProjectFolder = require("../helpers/projects");


const router = express.Router();
const prisma = new PrismaClient();

router.get(
	"/",
	jwt({ secret: process.env.TOKEN_KEY, algorithms: ["HS256"] }),
	async (req, res) => {
		userId = req.auth.id;
		const projects = await prisma.project.findMany({
			where: {
				userId,
			},
		});
		res.json(projects);
	}
);


router.get("/:id", async(req, res) => {
   	const id = req.params.id;
	const project = await prisma.project.findFirst({
		where:{
			id,
		},
	});

	if(!project){
		res.status(401).json({
			message: "Project not found",
		});
		return;
	}

	res.json(project.name);
});

router.post(
	"/",
	jwt({ secret: process.env.TOKEN_KEY, algorithms: ["HS256"] }),
	async (req, res) => {
		const { name, description } = req.body;
		userId = req.auth.id;
		const project = await prisma.project.create({
			data: {
				name,
				description,
				userId,
			},
		});
		createProjectFolder(name);
		res.json(project);
	}
);

router.delete(
	"/:id",
	jwt({ secret: process.env.TOKEN_KEY, algorithms: ["HS256"] }),
	async (req, res) => {
		const id = req.params.id;
		const userId = req.auth.id;
		const project = await prisma.project.deleteMany({
			where: {
				id,
				userId,
			},
		});
		res.json(project);
	}
);
module.exports = router;
