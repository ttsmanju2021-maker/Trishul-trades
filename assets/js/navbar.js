
document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.querySelector('.sidebar__toggle');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const submenuTriggers = document.querySelectorAll('.has-submenu-mb');

    // Check if elements exist
    if (!sidebarToggle || !mobileSidebar || !closeSidebarBtn || !sidebarOverlay) {
        console.error('Required sidebar elements not found');
        return;
    }

    // Open sidebar
    sidebarToggle.addEventListener('click', function() {
        mobileSidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        sidebarToggle.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent body scroll
    });

    // Close sidebar function
    function closeSidebar() {
        mobileSidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        sidebarToggle.classList.remove('active');
        document.body.style.overflow = ''; // Restore body scroll
    }

    // Close button click
    closeSidebarBtn.addEventListener('click', closeSidebar);

    // Overlay click
    sidebarOverlay.addEventListener('click', closeSidebar);

    // Submenu toggle
    submenuTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            this.classList.toggle('active');
            const submenuId = 'submenu-mb-' + this.getAttribute('data-submenu');
            const submenu = document.getElementById(submenuId);
            
            if (submenu) {
                submenu.classList.toggle('active');
            }
        });
    });

    // Close sidebar when clicking any link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    mobileNavLinks.forEach(function(link) {
        link.addEventListener('click', closeSidebar);
    });

    // Close sidebar on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileSidebar.classList.contains('active')) {
            closeSidebar();
        }
    });
});
