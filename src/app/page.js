import SocialIcons from './componentsGlobal/SocialIcons';
import SeasonalPosts from './componentsHome/SeasonalPosts';
import HighlightedPosts from './componentsHome/highlightedPosts';
import RecentPosts from './componentsHome/recentPosts';

export default function Home() {
  return (
    <main>
      <SocialIcons />
      <RecentPosts />
      <HighlightedPosts />
      <SeasonalPosts />
    </main>
  );
}
