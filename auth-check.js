// Verificación de autenticación para páginas protegidas
(function() {
    // Lista de páginas que no requieren autenticación
    const publicPages = ['/login.html', '/register.html', '/index.html'];
    
    // Obtener la página actual
    const currentPage = window.location.pathname;
    
    // Si es una página pública, no hacer nada
    if (publicPages.includes(currentPage)) {
        return;
    }
    
    // Verificar si el usuario tiene DNI guardado
    const dni = localStorage.getItem('dni');
    
    // Si no está autenticado, redirigir al login
    if (!dni) {
        alert('Debes iniciar sesión para acceder a esta página');
        window.location.href = '/login.html';
    }
})();