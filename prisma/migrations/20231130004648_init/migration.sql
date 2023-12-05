-- CreateTable
CREATE TABLE "Categorias" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SubCategorias" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "categoriaId" TEXT NOT NULL,
    CONSTRAINT "SubCategorias_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categorias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Platos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "precio" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "subcategoriaId" TEXT NOT NULL,
    CONSTRAINT "Platos_subcategoriaId_fkey" FOREIGN KEY ("subcategoriaId") REFERENCES "SubCategorias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
ALTER TABLE "SubCategorias" ADD COLUMN "descripcion" TEXT;
