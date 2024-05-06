const fs = require("fs/promises");
const fileName = "myfile.txt";
const updateFile = async (fileName, fileContent) => {

  try{
    let existingContent =await fs.readFile(fileName,'utf8');
    let updateContent = existingContent +fileContent;
    await fs.writeFile(fileName, updateContent,'utf8');
    return updatedContent;
  // write code here
  // dont change function name
  }catch(error){
    console.error("Error updating file:",error);
  }
};

module.exports = updateFile;
