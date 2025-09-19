import PageLayout from "@/layouts/PageLayout";
import { ActionBar, CookingSection } from "./static-components";
import { BackBtn } from "./dynamic-components";
import { DescriptionSection, IngredientSection } from "./static-components";
import { ImageOverlay, VStack } from "./static-components";

function page() {
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
    </PageLayout>
  );
}

export default page;
