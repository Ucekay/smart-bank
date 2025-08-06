import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { UnistylesRuntime } from "react-native-unistyles";

import CarouselIndicator from "./carousel-indicator";
import OnboardingCarouselItem from "./item";

const data = [
  {
    page: 1,
    title: "Managing your \nmaney has never \nbeen so easy.",
    imageSrc: require("@/src/assets/images/onboarding-1.png"),
  },
  {
    page: 2,
    title: "Spend smarter \nevery day, all \nfrom one app.",
    imageSrc: require("@/src/assets/images/onboarding-2.png"),
  },
  {
    page: 3,
    title: "Safe and secure international transactions.",
    imageSrc: require("@/src/assets/images/onboarding-3.png"),
  },
];

export default function OnboardingCarousel() {
  const { width } = UnistylesRuntime.screen;
  const progressIndex = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      progressIndex.set(event.contentOffset.x / width);
    },
  });

  const renderItem = ({ item }: { item: (typeof data)[0] }) => (
    <OnboardingCarouselItem
      imageSrc={item.imageSrc}
      page={item.page}
      title={item.title}
    />
  );

  return (
    <>
      <Animated.FlatList
        data={data}
        horizontal
        pagingEnabled
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      />
      <CarouselIndicator
        progressIndex={progressIndex}
        totalItems={data.length}
      />
    </>
  );
}
