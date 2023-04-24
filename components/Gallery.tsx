import Image from "next/image";
import styles from "./Gallery.module.css";
import carousel_test_1 from "./carousel_test_1.jpeg";

// TODO: fix typechecking for src and alt properties in Image component

export default function Gallery() {
  const data = {
    carouselTitle: "example title",
    carouselContents: [
      {
        content: [0, carousel_test_1, "example alt 1"],
        caption: "example caption 1",
        captionSub: "example subcaption 1",
      },
    ] as const,
  };
  return (
    <>
      <div className="carousel">
        <div className="carousel-title">
          <h1 className={styles.title}>{data.carouselTitle}</h1>
        </div>
        <div className="carousel-contents">
          {data.carouselContents.map((content, index) => (
            <div className="carousel-content" key={index}>
              <Image
                src={content.content[1]}
                alt={content.content[2]}
                width={256}
                height={256}
                className={styles.carouselImage}
              />
              <div className="carousel-caption">
                <h2>{content.caption}</h2>
                <p>{content.captionSub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
