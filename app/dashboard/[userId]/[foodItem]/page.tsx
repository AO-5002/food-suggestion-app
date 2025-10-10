import PageLayout from "@/layouts/PageLayout";
import { ActionBar, CookingSection } from "./static-components";
import { BackBtn } from "./dynamic-components";
import { DescriptionSection, IngredientSection } from "./static-components";
import { ImageOverlay, VStack } from "./static-components";
import { generateItems } from "@/utils/services/GenerateItems";
import { UserDetails } from "@/utils/types/User";
import { FoodItem, data } from "@/utils/types/FoodEntries";

interface PageData {
  entries: FoodItem[];
}

async function page({ entries }: PageData) {
  return (
    <PageLayout>
      <div className="w-full h-full flex flex-col items-center gap-4">
        <div className="w-full flex flex-row items-center justify-between">
          <BackBtn />
        </div>
        <ImageOverlay imgSrc={"pizza"}>Pizza</ImageOverlay>
        <VStack>
          <ActionBar />
          <DescriptionSection />
          <IngredientSection />
          <CookingSection />
        </VStack>
      </div>
      {/* Remove conditional rendering if generateItems returns void */}
    </PageLayout>
  );
}

export default page;
