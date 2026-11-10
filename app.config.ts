export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Mundo animal",
  description: "app de doação focado em animais domésticos",
  emoji: "🐾",
  accent: "#F59E0B",
  upcomingFeatures: [
    {
      title: "Pet adoption listings",
      description:
        "List pets for adoption with photos, breed, age and city.",
    },
    {
      title: "Search and filters",
      description:
        "Find pets by species, size and location.",
    },
    {
      title: "Donor and NGO profiles",
      description:
        "Public profiles for donors and verified partner NGOs.",
    },
    {
      title: "Adopter-donor chat",
      description:
        "Chat directly with the person or NGO offering a pet.",
    },
    {
      title: "Donations to NGOs",
      description:
        "Donate money or pet food to partner NGOs.",
    },
    {
      title: "Favorites and alerts",
      description:
        "Save favorite pets and get alerts when new matches appear.",
    },
  ] satisfies Feature[],
};
