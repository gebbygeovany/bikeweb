import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Divider } from "semantic-ui-react";

import CustomDotGroup from "../components/CustomDotGroup";

const ImageCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1}
    totalSlides={3}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <Image src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/9/1852616/1852616_834d8016-4a97-4d4c-b605-87dba5781249_740_740.webp" />
      </Slide>
      <Slide tag="a" index={1}>
        <Image src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/9/1852616/1852616_a2fb34ae-52f3-42d5-85a2-c8ab768d8150_879_879.webp" />
      </Slide>
      <Slide tag="a" index={2}>
        <Image src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/9/1852616/1852616_6fb0b401-8e27-4ff4-856b-0d2a6964f9b1_1200_1200.webp" />
      </Slide>
    </Slider>

    <Divider />
    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default ImageCarousel;
