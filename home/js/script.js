const { createApp } = Vue;

createApp({
  data() {
    return {
      images: [
        {
          id: 1,
          src: "https://scontent.xx.fbcdn.net/v/t1.15752-9/467478354_1106522184430313_4855955892637414384_n.jpg",
          alt: "Gallery Image 1",
        },
        {
          id: 2,
          src: "https://scontent.fmnl5-2.fna.fbcdn.net/v/t1.15752-9/467752633_1824689381653523_8277619900379541539_n.jpg",
          alt: "Gallery Image 2",
        },
        {
          id: 3,
          src: "https://scontent.xx.fbcdn.net/v/t1.15752-9/330376735_1353440542171658_6593644632786779640_n.jpg",
          alt: "Gallery Image 3",
        },
        {
          id: 4,
          src: "https://scontent.xx.fbcdn.net/v/t1.15752-9/473007815_914812974174734_2264539277980305085_n.jpg",
          alt: "Gallery Image 4",
        },
        {
          id: 5,
          src: "https://scontent.xx.fbcdn.net/v/t1.15752-9/467852735_593737746700096_4051191076940779528_n.jpg",
          alt: "Gallery Image 5",
        },
      ],
    };
  },
}).mount("#app");

