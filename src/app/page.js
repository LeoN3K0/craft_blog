import SocialIcons from './componentsGlobal/SocialIcons';
import SeasonalPosts from './componentsHome/SeasonalPosts';
import HighlightedPosts from './componentsHome/highlightedPosts';
import RecentPosts from './componentsHome/recentPosts';
import WhyUs from './componentsHome/whyUS';

export default function Home() {
  return (
    <main>
      <SocialIcons />
      <RecentPosts />
      <HighlightedPosts />
      <SeasonalPosts />
      <WhyUs />
    </main>
  );
}
