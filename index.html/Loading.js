< !DOCTYPE html >
    <html lang="en">
        <head>
            <style>
                body{background - color: black;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
         }
                #counter {
                    color:white;
                font-size: 40px;
         }
            </style>
            <script>
                let counts = setInterval(updated, 40);
                let upto = 0;
                let width = 0;
                function update() {
                const count = document.getElementById("counter");
                const hr = document.getElementById("hr");
                ++upto;
                count,innerHTML = "LOADING " + upto + "%";
                hr.style.width = upto + "%";
                if (upto === 100) {
                    clearInterval(counts);
                count.ineerHTML = "DONE";
        }
    }
            </script>
        </body>
    </html>


