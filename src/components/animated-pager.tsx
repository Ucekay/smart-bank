import { View } from "react-native";

import PagerView, {
  type PagerViewOnPageScrollEvent,
} from "react-native-pager-view";
import Animated, {
  type ReanimatedEvent,
  useEvent,
  useHandler,
} from "react-native-reanimated";

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

export function usePagerScrollHandler<
  T extends object = PagerViewOnPageScrollEvent
>(...args: Parameters<typeof useHandler<T, Record<string, unknown>>>) {
  const [handlers, dependencies] = args;
  const { context, doDependenciesDiffer } = useHandler(handlers, dependencies);
  const subscribeForEvents = ["onPageScroll"];

  return useEvent(
    (event: ReanimatedEvent<T>) => {
      "worklet";
      const { onPageScroll } = handlers;
      if (onPageScroll && event.eventName.endsWith("onPageScroll")) {
        onPageScroll(event, context);
      }
    },
    subscribeForEvents,
    doDependenciesDiffer
  );
}

type AnimatedPagerViewProps = React.ComponentProps<typeof AnimatedPagerView>;

interface AnimatedPagerOwnProps<T> {
  data: T[];
  renderItem: ({ item, index }: { item: T; index: number }) => React.ReactNode;
  keyExtractor: (item: T, index: number) => string;
}

type AnimatedPagerCombinedProps<T> = AnimatedPagerOwnProps<T> &
  Omit<AnimatedPagerViewProps, "children">;

export function AnimatedPager<T>({
  data,
  renderItem,
  keyExtractor,
  onPageScroll,
  style,
  initialPage = 0,
  orientation = "horizontal",
  pageMargin = 0,
  scrollEnabled = true,
  overdrag = false,
  keyboardDismissMode = "none",
  layoutDirection = "ltr",
  ...restProps
}: AnimatedPagerCombinedProps<T>) {
  return (
    <AnimatedPagerView
      style={style}
      initialPage={initialPage}
      onPageScroll={onPageScroll}
      orientation={orientation}
      pageMargin={pageMargin}
      scrollEnabled={scrollEnabled}
      overdrag={overdrag}
      keyboardDismissMode={keyboardDismissMode}
      layoutDirection={layoutDirection}
      {...restProps}
    >
      {data.map((item, index) => (
        <View key={keyExtractor(item, index)} collapsable={false}>
          {renderItem({ item, index })}
        </View>
      ))}
    </AnimatedPagerView>
  );
}
