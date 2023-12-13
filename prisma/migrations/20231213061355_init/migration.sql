-- CreateTable
CREATE TABLE "Categorias" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubCategorias" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "categoriaId" INTEGER NOT NULL,

    CONSTRAINT "SubCategorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "precio" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "video" TEXT,
    "subcategoriaId" INTEGER NOT NULL,

    CONSTRAINT "Platos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubCategorias" ADD CONSTRAINT "SubCategorias_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Platos" ADD CONSTRAINT "Platos_subcategoriaId_fkey" FOREIGN KEY ("subcategoriaId") REFERENCES "SubCategorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
