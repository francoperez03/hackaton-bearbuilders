import media1 from "./hotel1.jpeg";
import media2 from "./hotel2.jpeg";
import media3 from "./hotel3.jpeg";
import media4 from "./hotel4.jpeg";
import media5 from "./hotel5.jpeg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];
