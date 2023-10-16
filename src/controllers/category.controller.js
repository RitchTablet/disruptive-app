export const getCategories = (req, res) => {
  return res.json([{ message: "categoria 1" }]);
};

export const getCategory = (req, res) => {
  const categoryId = req.params.id;
  const categories = [];
  const category = categories.find((category) => category.id === categoryId);

  if (!category) {
    return res.status(404).json({ message: "Categoría no encontrada" });
  }

  return res.json(category);
};

export const updateCategory = (req, res) => {
  const categoryId = req.params.id;
  const updatedCategory = req.body;
  const categories = [];
  const index = categories.findIndex((category) => category.id === categoryId);

  if (index === -1) {
    return res.status(404).json({ message: "Categoría no encontrada" });
  }

  categories[index] = { ...categories[index], ...updatedCategory };
  return res.json({ message: "Categoría actualizada exitosamente" });
};

export const deleteCategory = (req, res) => {
  const categoryId = req.params.id;
  const index = categories.findIndex((category) => category.id === categoryId);
  const categories = [];

  if (index === -1) {
    return res.status(404).json({ message: "Categoría no encontrada" });
  }

  categories.splice(index, 1);
  return res.json({ message: "Categoría eliminada exitosamente" });
};
