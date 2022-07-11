const fs = require("fs");

const componentsPath = "./components"
const projectsPath = "../projects"

function createProjectFolder(name) {
	if (!fs.existsSync(`${projectsPath}`)) {
		fs.mkdirSync(`${projectsPath}`);
	}
	if (!fs.existsSync(`${projectsPath}/${name}`)) {
		fs.mkdirSync(`${projectsPath}/${name}`);
	}
	fs.copyFile(`${componentsPath}/index.php`, `${projectsPath}/${name}/index.php`, (err) => {
		if (err) throw err;
	});

    
    fs.readFile(`${projectsPath}/${name}/index.php`, 'utf-8', function (err, contents) {
        if (err) {
          console.log(err);
          return;
        }
      
        // 👇️ match string case-insensitively 👇️
        const replaced = contents.replace(/\${description}/g, name);
      
        fs.writeFile(`${projectsPath}/${name}/index.php`, replaced, 'utf-8', function (err) {
          console.log(err);
        });
      });
}

module.exports = createProjectFolder;
