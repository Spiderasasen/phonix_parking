document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const openBtn = document.getElementById("openSidebar");
    const closeBtn = document.getElementById("closeSideBar");

    openBtn.onclick = () => sidebar.classList.add("open");
    closeBtn.onclick = () => sidebar.classList.remove("open");
});
