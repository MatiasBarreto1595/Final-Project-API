const products = {
  juices: [
    {
      name: "Fall Punch",
      description:
        "Fall Punch is an antioxidant rich powerhouse that decreases hypertension, promotes heart health, relieves cartilage inflammation and contains neuroprotective polyphenols that have been shown to increase brain function. This fall treat is delicious, refreshing and nourishing. Pomegranate, Beet, Carrot, Orange, Pineapple",
      ingredients: "Pomegranate, Beet, Carrot, Orange, Pineapple",
      image: ["Fall_Punch.webp"],
      price: 11,
      stock: 50,
      bestSeller: true,
      slug: "fall-punch",
    },
    {
      name: "Deep Green",
      description:
        "Deep Green contains a potent dose of chlorophyll-rich leafy greens to deeply nourish and oxygenate cells for optimal health. Kale, Spinach, Parsley, Romaine, Cucumber, Celery, Lemon",
      ingredients: "Kale, Spinach, Parsley, Romaine, Cucumber, Celery, Lemon",
      image: ["Deep_Green.webp"],
      price: 10.5,
      stock: 100,
      bestSeller: false,
      slug: "deep-green",
    },
    {
      name: "A+ Deep Green",
      description:
        "A+ Deep Green is an excellent source of dark leafy greens with the addition of apple to subtly sweeten and support your digestive health. A+ is a Juice Shop favorite because it is packed with nutrients for optimal health and is easy to drink.",
      ingredients: "Apple, Kale, Spinach, Parsley, Romaine, Cucumber, Celery, Lemon",
      image: ["A+_Deep_Green.webp"],
      price: 10.5,
      stock: 34,
      bestSeller: false,
      slug: "a-deep-green",
    },
    {
      name: "Local Green",
      description:
        "Local Green supplies a full spectrum of leafy greens that includes a potent combination of ginger and turmeric to make for an extra charged green juice to support your brain, immunity, detoxification, and recovery.",
      ingredients:
        "Ginger, Turmeric, Dandelion Greens, Chard, Parsley, Spinach, Cucumber, Celery, Lemon",
      image: ["Local_Green.webp"],
      price: 11,
      stock: 73,
      bestSeller: false,
      slug: "local-green",
    },
    {
      name: "Pure Celery",
      description:
        "Celery Juice is a pure and soothing green juice that allows digestive aid and the detoxification of the liver, while the natural sodium cluster salts help stabilize the adrenals.",
      ingredients: "Celery",
      image: ["Pure_Celery.webp"],
      price: 9,
      stock: 21,
      bestSeller: true,
      slug: "celery-juice",
    },
    {
      name: "Bright Green",
      description:
        "Bright Green is an amazing introductory green juice with a heavy dose of kale hidden within a delicious fruit and ginger combination. It is an excellent choice for someone who may want to experience the health benefits of a green juice without the strong savory flavor.",
      ingredients: "Cucumber, Apple, Pineapple, Kale, Ginger, Lemon",
      image: ["Bright_Green.webp"],
      price: 10.5,
      stock: 50,
      bestSeller: false,
      slug: "bright-green",
    },
    {
      name: "Detox Green",
      description:
        "Detox Green supports healthy liver function and helps rid the body of built up toxins while cleansing the digestive system.",
      ingredients:
        "Celery, Cucumber, Pineapple, Dandelion, Lemon, Ginger, Burdock Root, Mint, Milk Thistle",
      image: ["Detox_Green.webp"],
      price: 11.5,
      stock: 73,
      bestSeller: false,
      slug: "detox-green",
    },
    {
      name: "Citrus Gold",
      description:
        "Citrus Gold is an immunity-based juice due to its rich source of vitamin C. Turmeric, Grapefruit, Carrot, Orange",
      ingredients: "Turmeric, Grapefruit, Carrot, Orange",
      image: ["Citrus_Gold.webp"],
      price: 10,
      stock: 0,
      bestSeller: true,
      slug: "citrus-gold",
    },
    {
      name: "Beta Beet",
      description:
        "Beta Beet is a robust juice that promotes performance and overall energy by generating red blood cell production with its abundant source of iron.",
      ingredients: "Beet, Carrot, Ginger, Celery, Lemon",
      image: ["Beta_Beet.webp"],
      price: 10.5,
      stock: 25,
      bestSeller: true,
      slug: "beta-beet",
    },
    {
      name: "Jalapeño Punch",
      description:
        "Jalapeño Punch is the perfect balance of sweet and spicy that aids in digestion and the detoxification of heavy metals.",
      ingredients: "Pineapple, Orange, Cilantro, Jalapeño",
      image: ["Jalapeno_Punch.webp"],
      price: 10,
      stock: 60,
      bestSeller: false,
      slug: "jalapeno-punch",
    },
  ],
  sparklingTonics: [
    {
      name: "Turmeric Ginger Tonic",
      description:
        "Turmeric Ginger Tonic is made with pure mountain spring water, cold-pressed juice, and adaptogens, to reduce stress and inflammation.",
      ingredients:
        "Sparkling Mountain Spring Water, Cold-Pressed Juice, Cold-Pressed Ginger Juice, Cold-Pressed Turmeric Juice, Coconut Nectar, Ashwagandha, Cayenne Pepper, Black Pepper",
      image: ["tumeric-1.webp"],
      price: 3.5,
      stock: 100,
      bestSeller: true,
      slug: "turmeric-ginger-tonic",
    },
    {
      name: "Detox Tonic",
      description:
        "Detox Tonic is made with pure mountain spring water, cold-pressed juice, and an herbal Detox Blend to support detoxification and healthy liver function. The refreshing combination of apple, lemon, ginger and dandelion is herbaceous, crisp and refreshing.",
      ingredients:
        "Sparkling Mountain Spring Water, Cold-Pressed Green Apple Juice, Cold-Pressed Lemon Juice, Cold-Pressed Ginger Juice, Cold-Pressed Dandelion Greens Juice, Chlorella, Detox Blend (Apple Cider Vinegar, Burdock Root, Dandelion Green and Root, Milk Thistle",
      image: ["detox-1.webp"],
      price: 3.5,
      stock: 100,
      bestSeller: false,
      slug: "detox-tonic",
    },
    {
      name: "Elderberry Tonic",
      description:
        "Elderberry Tonic is an immune boosting sparkling drink made with pure mountain spring water, botanicals and adaptogens to support a healthy and resilient immune system. Elderberry is traditionally used for its potent immune and defensive health benefits. Each batch is hand brewed with 7 sustainably sourced ingredients providing a full spectrum dose of immunity that is crisp and refreshing. All ingredients are bioactive (easily absorbable) and bioavailable (easily assimilated), and with no artificial or “natural” flavors, preservatives or additives.",
      ingredients:
        "Sparkling Mountain Spring Water, Honey, Apple Cider Vinegar, Elderberry, Hibiscus, Astragalus, Rose Hips, Orange Peel",
      image: ["Elderberry-update-1.webp"],
      price: 3.5,
      stock: 100,
      bestSeller: false,
      slug: "elderberry-tonic",
    },
    {
      name: "Pineapple Mint Tonic",
      description:
        "Pineapple Tonic is made with pure mountain spring water, cold pressed juice, and adaptogens, to sustain energy and stamina while maintaining digestive flow.",
      ingredients:
        "Sparkling Mountain Spring Water, Cold-Pressed Pineapple Juice, Cold-Pressed Pear Juice, Cold-Pressed Mint Juice, Blue Spirulina, Ionic Trace Minerals, Eleuthero",
      image: ["pineapple-1.webp"],
      price: 3.5,
      stock: 100,
      bestSeller: false,
      slug: "pineapple-mint-tonic",
    },
  ],
  nutMilkSmoothies: [
    {
      name: "Chocolate Mushroom Milk",
      description:
        "Our Chocolate Mushroom Milk is a delicious date-sweetened chocolate almond milk. It includes a blend of the most potent medicinal mushrooms, supporting immunity, energy, stamina and focus.",
      ingredients:
        "Sprouted Almond Milk, Date, Cacao, Mushroom Blend (Reishi, Cordyceps, Chaga, Lion's Mane), Himalayan Salt",
      image: ["Chocolate_Mush_Milk.webp"],
      price: 12,
      stock: 100,
      bestSeller: true,
      slug: "chocolate-mushroom-milk",
    },
    {
      name: "5 seed",
      description:
        "5 Seed is a delicious strawberry and banana plant-based smoothie with a definitive source of digestible plant proteins.",
      ingredients:
        "Sunflower Seed, Hemp Seed, Chia Seed, Flax Seed, Pumpkin Seed, Blue-green Algae, Strawberries, Banana, Sprouted Raw Almonds, Himalayan Salt, Filtered Water",
      image: ["5_Seed.webp"],
      price: 10.5,
      stock: 50,
      bestSeller: false,
      slug: "5-seed",
    },
    {
      name: "Blue Plant Protein Shake",
      description:
        "Blue Plant Protein Shake is an activated nutmilk with the addition of assimilable plant-based proteins and spirulina, which contains antioxidants, minerals and a rich source of chlorophyll.",
      ingredients:
        "Sprouted Almond Milk, Sprouted Bio-Fermented Brown Rice, Hemp Seed, Chia Seed, Red Maca, Tocos, Date, Blue Spirulina, Himalayan Salt",
      image: ["BluePlantProtein.webp"],
      price: 14,
      stock: 0,
      bestSeller: true,
      slug: "blue-plant-protein-shake",
    },
  ],
  elixirs: [
    {
      name: "Immunity Elixir",
      description:
        "Our Immunity Elixir is our most popular wellness shot, created to support your overall immune health. Best taken when you are starting to feel under the weather or looking to boost your immunity. Its ingredients contains anti-bacterial, anti-fungal, anti-viral and anti-parasitic properties.",
      ingredients: "Ginger, Garlic, Lemon, Oregano Oil, Filtered Water",
      image: ["Immunity.webp"],
      price: 4.0,
      stock: 100,
      bestSeller: false,
      slug: "immunity",
    },
    {
      name: "Turmeric Elixir",
      description:
        "Turmeric Elixir is a powerful dose of turmeric root that promotes anti-inflammation, pain relief, and brain regenerative qualities.",
      ingredients: "Turmeric, Pineapple, Black Pepper, Cayenne",
      image: ["Turmeric_Elixir.webp"],
      price: 4,
      stock: 50,
      bestSeller: false,
      slug: "turmeric",
    },
    {
      name: "Detox Elixir",
      description:
        "Deyox Elixir is geared to facilitate healthy liver and gallbladder function through immediate detoxification and rejuvenation.",
      ingredients: "Dandelion Greens, Apple, Lemon, Ginger, Milk Thistle Extract",
      image: ["Liver_Regenerator.webp"],
      price: 4,
      stock: 0,
      bestSeller: false,
      slug: "liver-regenerator",
    },
    {
      name: "Elderberry Elixir",
      description:
        "This potent immunity blend restores and strengthens the immune system. Elderberry is regarded for its immune boosting and anti-viral properties. Rose hips are one of the richest sources of natural vitamin C. Astragalus is widely known as an immune tonic and protective adaptogen. Mullein is a soothing lung tonic and supports respiratory function.",
      ingredients:
        "Elderberry, Astragalus, Rose Hips, Mullein, Orange Peel, Honey, Apple Cider Vinegar, Filtered Water",
      image: ["Elderberry-Elixir-1.webp"],
      price: 4,
      stock: 25,
      bestSeller: false,
      slug: "elderberry",
    },
    {
      name: "Blue-Green Algae Elixir",
      description:
        "Blue-Green Algae Elixir is not only a complete protein, but it is also the richest source of chlorophyll found on the planet. It supports brain function and uplifts mood.",
      ingredients: "Wild-Harvested Blue-Green Algae",
      image: ["Blue-Green_Algae.webp"],
      price: 4,
      stock: 33,
      bestSeller: true,
      slug: "blue-green-algae",
    },
  ],
};

module.exports = products;
