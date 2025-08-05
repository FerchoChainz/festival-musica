import { src, dest, watch } from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);

export function css(done) {
  src("src/scss/app.scss", {sourcemaps: true}) //ubica el archivo
    .pipe(sass().on("error", sass.logError)) //para escuchar errores
    .pipe(dest("dist/css", {sourcemaps: true})); //donde lo guardara

  done();
}

export function dev() {
  watch("src/scss/**/*.scss", css);
  //Aqui indicamos que archivos vamos a estar observando
  //pendiente de cambios y ejecutamos la funcion css
}
