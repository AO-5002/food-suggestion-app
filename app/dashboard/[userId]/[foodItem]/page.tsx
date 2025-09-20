import PageLayout from "@/layouts/PageLayout";
import { ActionBar, CookingSection } from "./static-components";
import { BackBtn } from "./dynamic-components";
import { DescriptionSection, IngredientSection } from "./static-components";
import { ImageOverlay, VStack } from "./static-components";
import { generateItems } from "@/utils/services/GenerateItems";
import {
  User,
  Allergies,
  CookingAbility,
  CulturalDishes,
  CookingTime,
  Diets,
} from "@/utils/types/User";

async function page() {
  const user: User = {
    id: "1",
    authId: "auth_001",
    email: "testuser@example.com",
    name: "Test User",
    userDetails: {
      allergies: [Allergies.GLUTEN],
      budgetRange: [10, 30],
      cookingAbility: CookingAbility.BEGINNER,
      favCulturalDishes: [CulturalDishes.ITALIAN],
      prefCookingTime: CookingTime.QUICK,
      prefDiets: [Diets.VEGETARIAN],
      quantity: 2,
    },
  };

  const data = await generateItems();

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
