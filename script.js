document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");
    const pageTitle = document.getElementById("pageTitle");
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menuBtn");

    /* -------------------------
       Sidebar Navigation
    ------------------------- */

    navLinks.forEach(link => {

        link.addEventListener("click", event => {
            event.preventDefault();

            const pageName = link.dataset.page;

            navLinks.forEach(item => item.classList.remove("active"));
            link.classList.add("active");

            pages.forEach(page => {
                page.classList.remove("active-page");
            });

            const selectedPage = document.getElementById(pageName);

            if (selectedPage) {
                selectedPage.classList.add("active-page");
            }

            pageTitle.textContent =
                link.textContent.trim();

            sidebar.classList.remove("open");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

    });


    /* -------------------------
       Mobile Sidebar
    ------------------------- */

    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });


    /* -------------------------
       Toast Notification
    ------------------------- */

    const toast = document.getElementById("toast");
    const toastTitle = document.getElementById("toastTitle");
    const toastMessage = document.getElementById("toastMessage");
    const closeToast = document.getElementById("closeToast");

    let toastTimer;

    function showToast(title, message) {

        toastTitle.textContent = title;
        toastMessage.textContent = message;

        toast.classList.add("show");

        clearTimeout(toastTimer);

        toastTimer = setTimeout(() => {
            toast.classList.remove("show");
        }, 3500);
    }

    closeToast.addEventListener("click", () => {
        toast.classList.remove("show");
    });


    /* -------------------------
       Deploy Resource
    ------------------------- */

    const deployBtn = document.getElementById("deployBtn");

    deployBtn.addEventListener("click", () => {

        showToast(
            "Resource Deployment",
            "New cloud resource deployment has started."
        );

    });


    /* -------------------------
       Quick Actions
    ------------------------- */

    const actionCards = document.querySelectorAll(".action-card");

    actionCards.forEach(card => {

        card.addEventListener("click", () => {

            const action = card.dataset.action;

            const messages = {

                server: [
                    "Create Virtual Machine",
                    "VM creation wizard has been started."
                ],

                storage: [
                    "Upload Files",
                    "Select files to upload to cloud storage."
                ],

                database: [
                    "Create Database",
                    "Database deployment has been initiated."
                ],

                network: [
                    "Network Configuration",
                    "Network configuration panel is ready."
                ]

            };

            if (messages[action]) {
                showToast(
                    messages[action][0],
                    messages[action][1]
                );
            }

        });

    });


    /* -------------------------
       Upload Button
    ------------------------- */

    const uploadBtn = document.getElementById("uploadBtn");

    if (uploadBtn) {

        uploadBtn.addEventListener("click", () => {

            showToast(
                "Upload Files",
                "File upload dialog would open here."
            );

        });

    }


    /* -------------------------
       Create Resource Buttons
    ------------------------- */

    const createButtons =
        document.querySelectorAll(".create-resource");

    createButtons.forEach(button => {

        button.addEventListener("click", () => {

            showToast(
                "Create Resource",
                "Resource creation wizard has been opened."
            );

        });

    });


    /* -------------------------
       Dark Mode
    ------------------------- */

    const themeBtn = document.getElementById("themeBtn");

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const isDark =
            document.body.classList.contains("dark");

        themeBtn.textContent =
            isDark ? "☀" : "☾";

        localStorage.setItem(
            "cloudTheme",
            isDark ? "dark" : "light"
        );

    });

    const savedTheme =
        localStorage.getItem("cloudTheme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");
        themeBtn.textContent = "☀";

    }


    /* -------------------------
       Notifications
    ------------------------- */

    const notificationBtn =
        document.getElementById("notificationBtn");

    notificationBtn.addEventListener("click", () => {

        showToast(
            "Notifications",
            "You have 3 new cloud infrastructure notifications."
        );

    });


    /* -------------------------
       Search
    ------------------------- */

    const searchInput =
        document.getElementById("searchInput");

    const resourceRows =
        document.querySelectorAll("#resourceTable tr");

    searchInput.addEventListener("input", () => {

        const query =
            searchInput.value.toLowerCase().trim();

        resourceRows.forEach(row => {

            const text =
                row.textContent.toLowerCase();

            row.style.display =
                text.includes(query) ? "" : "none";

        });

    });


    /* -------------------------
       Chart Period
    ------------------------- */

    const chartPeriod =
        document.getElementById("chartPeriod");

    chartPeriod.addEventListener("change", () => {

        showToast(
            "Chart Updated",
            `Showing resource usage for ${chartPeriod.value}.`
        );

    });


    /* -------------------------
       More Buttons
    ------------------------- */

    const moreButtons =
        document.querySelectorAll(".more-btn");

    moreButtons.forEach(button => {

        button.addEventListener("click", () => {

            showToast(
                "Resource Menu",
                "Resource actions are available here."
            );

        });

    });

});
