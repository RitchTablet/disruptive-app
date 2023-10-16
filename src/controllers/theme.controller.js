const themes = [
  { id: 1, name: "Tema 1" },
  { id: 2, name: "Tema 2" },
  // ... más temas
];

// Obtener todos los temas
export const getThemes = (req, res) => {
  res.json(themes);
};

// Obtener un solo tema por ID
export const getTheme = (req, res) => {
  const themeId = parseInt(req.params.id);
  const theme = themes.find((theme) => theme.id === themeId);

  if (!theme) {
    return res.status(404).json({ message: "Tema no encontrado" });
  }

  res.json(theme);
};

// Crear un nuevo tema
export const createTheme = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ message: "El nombre del tema es obligatorio" });
  }

  const newTheme = { id: themes.length + 1, name };
  themes.push(newTheme);

  res.json(newTheme);
};

// Actualizar un tema existente por ID
export const updateTheme = (req, res) => {
  const themeId = parseInt(req.params.id);
  const updatedName = req.body.name;

  const themeIndex = themes.findIndex((theme) => theme.id === themeId);

  if (themeIndex === -1) {
    return res.status(404).json({ message: "Tema no encontrado" });
  }

  themes[themeIndex].name = updatedName;

  res.json({ message: "Tema actualizado exitosamente" });
};

// Eliminar un tema por ID
export const deleteTheme = (req, res) => {
  const themeId = parseInt(req.params.id);

  const themeIndex = themes.findIndex((theme) => theme.id === themeId);

  if (themeIndex === -1) {
    return res.status(404).json({ message: "Tema no encontrado" });
  }

  themes.splice(themeIndex, 1);

  res.json({ message: "Tema eliminado exitosamente" });
};
