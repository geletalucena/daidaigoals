
document.addEventListener("DOMContentLoaded", function() {
    // 异步加载公共菜单
    fetch('topmenu.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Load menu failed');
            }
            return response.text();
        })
        .then(data => {
            const headerElement = document.querySelector('.site-header');
            if (headerElement) {
                headerElement.innerHTML = data;
                
                // 菜单插入成功后，立即执行高亮匹配
                highlightActiveMenu();
            }
        })
        .catch(error => {
            console.error('Error loading the header:', error);
        });
});

// 自动高亮当前页面的菜单项
function highlightActiveMenu() {
    let currentPath = window.location.pathname.split("/").pop();
    
    // 如果是根目录（如直接访问域名或 index.html），则默认匹配 index.html
    if (!currentPath || currentPath === "") {
        currentPath = "index.html";
    }

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link) {
            const hrefAttr = link.getAttribute('href');
            // 判断链接地址是否包含当前文件名
            if (hrefAttr === currentPath || (currentPath === "index.html" && hrefAttr === "#home")) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        }
    });
}

// 移动端下拉菜单控制函数
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}