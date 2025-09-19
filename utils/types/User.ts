enum CookingAbility {
  BEGINNER,
  iNTERMEDIATE,
  ADVANCED,
}

enum CulturalDishes {
  ITALIAN,
  MEXICAN,
  INDIAN,
  CHINESE,
  JAPANESE,
  FRENCH,
  THAI,
  MEDITERRANEAN,
  AMERICAN,
  SPANISH,
  GREEK,
  MIDDLE_EASTERN,
  VIETNAMESE,
  KOREAN,
}

enum CookingTime {
  QUICK,
  MODERATE,
  LONG,
  ANY,
}

enum Allergies {
  GLUTEN,
  NUTS,
  DAIRY,
  SHELLFISH,
  SOY,
  EGG,
  FISH,
  SESAME,
  SULPHITES,
  MUSTARD,
  LUPIN,
  CELERY,
  MOLLUSCS,
}

enum Diets {
  VEGETARIAN,
  VEGAN,
  PESCATARIAN,
  KETO,
  PALEO,
  LOW_CARB,
  LOW_FAT,
  DAIRY_FREE,
  GLUTEN_FREE,
  HALAL,
  KOSHER,
  WHOLE30,
  MEDITERRANEAN,
  FLEXITARIAN,
  HIGH_PROTEIN,
  LOW_SODIUM,
  DIABETIC,
  HEART_HEALTHY,
  LOW_CHOLESTEROL,
}

interface UserDto {
  id?: string;
  authId: string;
  email: string;
  name: string;
}

interface User extends UserDto {
  userDetails: {
    allergies: Allergies[];
    budgetRange: number[];
    cookingAbility: CookingAbility;
    favCulturalDishes: CulturalDishes[];
    prefCookingTime: CookingTime;
    prefDiets: Diets[];
    quantity: number;
  };
}

export type { User, UserDto };
