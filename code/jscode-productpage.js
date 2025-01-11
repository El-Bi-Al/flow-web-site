
    const showDescBtn1 = document.getElementById("showDescBtn1");
    const showDescBtn2 = document.getElementById("showDescBtn2");
    const showDescBtn3 = document.getElementById("showDescBtn3");

    const descBox1 = document.getElementById("descBox1");
    const descBox2 = document.getElementById("descBox2");
    const descBox3 = document.getElementById("descBox3");

    showDescBtn1.addEventListener("click", function() {
        descBox1.style.display = "block";
        descBox2.style.display = "none";
        descBox3.style.display = "none";
    });

    showDescBtn2.addEventListener("click", function() {
        descBox1.style.display = "none";
        descBox2.style.display = "block";
        descBox3.style.display = "none";
    });

    showDescBtn3.addEventListener("click", function() {
        descBox1.style.display = "none";
        descBox2.style.display = "none";
        descBox3.style.display = "block";
    });

    [descBox1, descBox2, descBox3].forEach(descBox => {
        descBox.addEventListener("mouseleave", function() {
            descBox.style.display = "none";
        });
    });
