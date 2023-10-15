export const authorize = (rol, permisos) => {
  return (req, res, next) => {
    console.log({ user: req.user, rol, permisos });
    next(); // Continuar con la siguiente función de middleware
  };
};
