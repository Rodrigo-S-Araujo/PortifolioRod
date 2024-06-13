import puppeteer from "puppeteer";
import gravarCursos from "./catchCursos.js";

const cursosJSON = "./cursos.json";

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://cursos.alura.com.br/user/digoruddy");

  await page.waitForSelector(".footer");

  const cursos_certificados = await page.evaluate(() => {
    const cursos = [];
    let contador = 0;

    document.querySelectorAll(".course-card").forEach((curso) => {
      const src = curso
        .querySelector(".course-card__content .course-card__icon")
        .getAttribute("src");
      const titulo = curso.querySelector(".course-card__name").innerText;
      const path = curso
        .querySelector(".course-card__certificate")
        .getAttribute("href");

      if (src && titulo && path) {
        const id = `${contador + 1}`;
        cursos.push({
          id,
          src,
          src2: "",
          titulo,
          path: `https://cursos.alura.com.br${path}`,
        });
        contador++;
      }
    });

    return cursos;
  });
  gravarCursos(cursos_certificados, cursosJSON);

  console.log(cursos_certificados);

  await browser.close();
})();
