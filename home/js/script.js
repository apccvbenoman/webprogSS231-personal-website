 new Vue({
            el: '#app',
            data: {
                images: [
                    "https://scontent.xx.fbcdn.net/v/t1.15752-9/473007815_914812974174734_2264539277980305085_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=ZgahcL6whHgQ7kNvgFS8esc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gFc25jJyhgE2ZI8ImLW_0dAJsWqSvBpRxVmIZTg6r7EOQ&oe=67ACB07C",
                    "https://scontent.xx.fbcdn.net/v/t1.15752-9/330376735_1353440542171658_6593644632786779640_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=kniDc8MJPAkQ7kNvgGzMCZC&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gH3tuAw5Ohw-jCtsCO6JFU5fdSYWsEBgPJUDMi5_C8afg&oe=67ADCDDD",
                    "https://scontent.xx.fbcdn.net/v/t1.15752-9/473121470_503519732758484_7169031855201699330_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=_mJDblVVexoQ7kNvgEhZwMn&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gGbkLLwQO8TIQdhnrZLp_cGNdTVy8aSoH6fGXB707F1iw&oe=67ACC85C",
                    "https://scontent.xx.fbcdn.net/v/t1.15752-9/467852735_593737746700096_4051191076940779528_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=OZ182LbCuHQQ7kNvgHfhgRu&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gEOHYbFHFuHflokNStfoJcgGqx_23X_ZAAu_jaXXjpL3g&oe=67ADF8F3"
                ]
            },
            methods: {
                viewImage(image) {
                    window.open(image, "_blank");
                }
            }
        });