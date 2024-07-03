export default interface ProtectedRouteProps {
  path: string | undefined; // Propiedad para la ruta protegida
  element: React.ReactNode; // Elemento a renderizar si el usuario está autenticado
}