import ScrollTop from "@/components/ScrollTop";
import HeroSwiper from "@/components/UiS/HeroSwiper";
import TrendingCategory from "@/components/UiS/TrendingCategory";
import Category1 from "@/components/UiS/Category1";
import Category2 from "@/components/UiS/Category2";
import Category3 from "@/components/UiS/Category3";
import { getMostRecentFromEachCategory } from "@/lib/helpers";
import { allCategories } from "@/data";
const Page = () => {
  const recentCategories = getMostRecentFromEachCategory(allCategories);
  return (
    <div>
      <main className="main">
        <HeroSwiper />
        <TrendingCategory recentCategories={recentCategories} />
        <Category1
          category1Items={allCategories.culture}
          categoryName="Culture"
        />
        <Category2
          category2Items={allCategories.business}
          categoryName="Business"
        />
        <Category3 category3Items={allCategories.tech} categoryName="Tech" />
      </main>

      <ScrollTop />
    </div>
  );
};

export default Page;
