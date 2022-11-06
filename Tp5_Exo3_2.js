const fs = require("fs").promises;
const path = require("path");
const dirname = path.resolve("C:/Users/InesB/tp5/tp55");


async function readDir(dirname) {
  const allResults = [];

  try {
    const files = await fs.readdir(dirname);

    for (const fileName of files) {
      
      try {
        
        const content = await fs.readFile(`${dirname}/${fileName}`, {
          encoding: "utf-8"
        });

        if (content.includes("aymen")) {
          allResults.push(fileName);
        }
      } catch (error) {
        console.log("NONE".message);
      }
    }

    return allResults;
  } catch (error) {
    console.log("NONE");
  }
}

readDir(dirname).then(data => {
  console.log(data);
});