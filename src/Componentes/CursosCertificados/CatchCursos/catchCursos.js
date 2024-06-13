import fs from "fs";

function gravarCursos(cursos, cursosJSON) {
  const dadosJSON = JSON.stringify(cursos, null, 2);
  fs.writeFileSync(cursosJSON, dadosJSON, { encoding: "utf-8" });
  console.log("Dados salvos em:", dadosJSON);
}

export default gravarCursos;
