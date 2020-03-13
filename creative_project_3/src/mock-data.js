let mock = [{
    id: 1,
    name: "Italian Bread",
    image: 'Bread.jpg',
    ingredients: [{
        name: "active dry yeast",
        measurement: "1 (1/4-ounce) envelope"
      },
      {
        name: "bread flour",
        measurement: "2 to 3 cups"
      },
      {
        name: "sugar",
        measurement: "1 teaspoon"
      },
      {
        name: "salt",
        measurement: "1 teaspoon"
      },
      {
        name: "olive oil",
        measurement: "2 tablespoons"
      },
      {
        name: "warm water (100° to 110°)",
        measurement: "1 cup"
      }
    ],
    recipe: [
      "Combine yeast, sugar, and 1 cup warm water in bowl of a heavy-duty electric stand mixer; let stand 5 minutes. Add 2 cups flour, oil, and salt to bowl, and beat at low speed, using dough hook attachment, 1 minute. Gradually add additional flour until dough begins to leave the sides of the bowl and pull together. (Note: The dough will take on a 'shaggy' appearance as the flour is being added. When enough flour has been added, the dough will look soft and smooth, not wet and sticky or overly dry with a rough surface.)",
      "Increase speed to medium, and beat 5 minutes. Cover bowl of dough with plastic wrap, and let stand in a warm place (85°), free from drafts, 30 minutes or until doubled in bulk. Punch dough down, and let stand 10 minutes.",
      "Turn dough out onto a lightly floured surface; shape dough into a 12-inch loaf, and place on a lightly greased baking sheet. Cut 3 (1/4-inch deep) slits across top of dough with a sharp paring knife. (The slits release interior steam and prevent the loaf from blowing apart at the side.)",
      "Bake at 400° for 16 minutes or until golden brown. Cool on a wire rack."
    ],
    difficulty: "Hard",
    imageSource: "https://www.flickr.com/photos/cuttingboard/3952783930/in/photolist-72i3X5-Tds8yG-9ZgTkh-9z4r8f-a61Ryz-7nC1a9-rWNjU-dEuqWt-bA7QsV-qKy4WF-bwcmuf-4esUNi-4gEyUw-4KG1bq-id84EC-8HU4r2-9qbRyT-aqSiAc-o2FfMj-RQJ1gP-72i3Uj-7W8iT7-5dafJZ-fP8AMj-23w3xZx-sJAig-bxoRdF-8qUdaa-9wHXgD-aqUWUf-91wC1Q-5rJNqL-9WBb8U-cjcHs3-dkk8Lr-4Lgb9v-9z6myp-7wX6Cz-aqSjg4-d8SPc5-7D1Ztr-eQA3Zk-Q2B9nS-ADK3i-id7G4H-55qWrT-aqUZCy-aD8Cgm-cRDdh-qUQKtE",
    recipeSource: "https://www.myrecipes.com/recipe/italian-bread",
  },
  {
    id: 2,
    name: "Oreo White Chocolate Pudding Cookies",
    image: 'Cookies.jpg',
    ingredients: [{
        name: "room temperature, unsalted butter",
        measurement: "1 cup"
      },
      {
        name: "brown sugar",
        measurement: "3/4 cup"
      },
      {
        name: "granulated sugar",
        measurement: "1/4 cup"
      },
      {
        name: "white chocolate instant pudding mix",
        measurement: "1 3.4 oz package"
      },
      {
        name: "eggs",
        measurement: "2 large"
      },
      {
        name: "vanilla extract",
        measurement: "1 teaspoon"
      },
      {
        name: "all-purpose flour",
        measurement: "2 1/2 cups"
      },
      {
        name: "baking soda",
        measurement: "1 teaspoon"
      },
      {
        name: "salt",
        measurement: "1/2 teaspoon"
      },
      {
        name: "chopped Oreos",
        measurement: "2 cups"
      },
      {
        name: "white chocolate chips",
        measurement: "1 1/2 cups"
      }
    ],
    recipe: [
      "Preheat oven to 350 degrees F. Line a baking sheet with parchment paper or a Silpat baking mat and set aside.",
      "Using a mixer, beat together butter and sugars until creamy. Add in white chocolate pudding mix, eggs, and vanilla extract. In a medium bowl, whisk together the flour, baking soda, and salt. Add the dry ingredients to the wet ingredients and mix until just combined. Stir in the Oreos and white chocolate chips.",
      "Drop cookie dough by rounded tablespoons onto prepared baking sheet. Bake for 10 minutes, or until slightly golden around the edges and set. Remove cookies from oven and let cool on baking sheet for two minutes. Transfer to a cooling rack and cool completely.",
      "Note-these cookies will stay soft for 3-4 days. Store in an air-tight container on the counter."
    ],
    difficulty: "Easy",
    imageSource: "https://search.creativecommons.org/photos/38db1f38-5805-46f5-b56b-0c25f3914967",
    recipeSource: "https://www.twopeasandtheirpod.com/oreo-white-chocolate-pudding-cookies/",
  },
  {
    id: 3,
    name: "Fettuccine Alfredo",
    image: 'Fettuccine-Alfredo.jpg',
    ingredients: [{
        name: "Fettuccine Pasta",
        measurement: "1 lb"
      },
      {
        name: "butter",
        measurement: "6 tablespoons"
      },
      {
        name: "garlic clove (minced)",
        measurement: "1"
      },
      {
        name: "heavy cream",
        measurement: "1 1/2 cups"
      },
      {
        name: "salt",
        measurement: "1/4 teaspoon"
      },
      {
        name: "shredded parmesan cheese",
        measurement: "1 1/4 cup"
      },
      {
        name: "pepper",
        measurement: "1/4 teaspoon"
      },
      {
        name: "Italian parsley",
        measurement: "2 tablespoons"
      }
    ],
    recipe: [
      "In a large pot, heat water over high heat until boiling. Add salt to season the water. Once it is boiling, add fettuccine and cook according to package instructions.",
      "In a large skillet or pan, heat butter over medium heat. Add minced garlic and cook for 1 to 2 minutes. Stir in heavy cream. ",
      "Let heavy cream reduce and cook for 5 to 8 minutes. Add half of the parmesan cheese to the mixture and whisk well until smooth. Keep over heat and whisk well until cheese is melted.",
      "Save some pasta water. The pasta water is full of flavor and can be used to thin out the sauce.",
      "Toss alfredo sauce with fettuccine pasta and add half of the parmesan cheese. Once it is tossed, garnish with the remaining parmesan cheese. Add a little pasta water if it needs to be thinned out.",
      "Garnish with Italian parsley, if so desired."
    ],
    difficulty: "Medium",
    imageSource: "https://www.flickr.com/photos/by_dianne/6767423101/in/photolist-bj1P7D-9qyzRf-4svCBA-23Letr-5tteoT-9JHvcK-mhU5Uc-mC33L-fbw7Ci-988yKn-4Yhp7d-2cLVQQC-75tK8z-2cub36D-cazRqU-2cLVQPf-rEwby5-7QMWbc-Dbjh5j-bF4wDi-demrXz-cpKTfo-51gnQS-mhU6be-bs9AD1-HtGZz-jrpnU-bnJZYz-HxeJH-3goyE1-9VgxzP-2a4rUL-JdZ2v-pMWv93-88jasd-qNCYFe-rreF4B-pFUdUo-2e9ZRAf-fT7XXp-88XzMT-88XzNv-72cA9-orqkU-9VAfKr-VWJjuD-8qE3jJ-9Kh7E-29D51W-9Kh7C",
    recipeSource: "https://www.modernhoney.com/fettuccine-alfredo/",
  },
  {
    id: 4,
    name: "Marble Brownies",
    image: 'Marble-Brownies.jpg',
    ingredients: [{
        name: "cream cheese, softened",
        measurement: "1 package (8 oz.)"
      },
      {
        name: "brown mix",
        measurement: "1 package (18 to 20 oz.)"
      },
      {
        name: "sugar",
        measurement: "1/3 cup"
      },
      {
        name: "egg",
        measurement: "1"
      },
      {
        name: "vanilla",
        measurement: "1/2 teaspoon"
      }
    ],
    recipe: [
      "Heat oven to 350ºF.",
      "Prepare brownie batter as directed on package; pour into 13x9-inch pan sprayed with cooking spray.",
      "Beat cream cheese in large bowl with mixer until creamy. Add sugar, egg and vanilla; mix well. Drop by tablespoonfuls over brownie batter; swirl gently with knife.",
      "Bake 35 to 40 min. or until toothpick inserted in center comes out with fudgy crumbs. (Do not overbake.) Cool completely."
    ],
    difficulty: "Medium",
    imageSource: "https://www.flickr.com/photos/melissa_flowers/5745518780/in/photolist-9KHhyC-4pBgXh-7Chj8q-bf8ECZ-4zwvEh-6gvhrq-iqoafn-5CGkqn-b2vTwz-6vcm1p-5YZMA9-2B8WcE-QDggF-2KzCuh-eaWzWU-ewidHQ-8oTy6T-384BDM-ah6rSH-9fvonE-389c6m-6qmuiP-9QNaa8-4NAwQA-5uBEdA-5FBWbG-dhupZ-9Hy34u-5WqzNP-28x4GGJ-4NAwAA-76L516-af2WvF-7gHGbZ-5iqYHK-5CGkpR-bvWCuC-8usYjz-72ymCz-QDg4c-8sN4oh-4qGrfp-aCDG8b-e3f4ZG-77mHAj-38N2FJ-9HV89Y-99qX5E-4PSdeN-4GYazW",
    recipeSource: "https://www.myfoodandfamily.com/recipe/050925/philadelphia-marble-brownies",
  },
  {
    id: 5,
    name: "Chicken Quesadilla",
    image: 'Chicken-Quesadilla.jpg',
    ingredients: [{
        name: "mayonaise",
        measurement: "1 cup"
      },
      {
        name: "taco seasoning",
        measurement: "1/2 teaspoon"
      },
      {
        name: "garlic salt",
        measurement: "1/4 teaspoon"
      },
      {
        name: "hot sauce",
        measurement: "2 teaspoons"
      },
      {
        name: "tortillas",
        measurement: "6"
      },
      {
        name: "mexican cheese",
        measurement: "2 cups"
      },
      {
        name: "seasoned shredded chicken",
        measurement: "2 cups"
      },
    ],
    recipe: [
      "Whisk together mayo, taco seasoning, garlic salt, and hot sauce. NOTE: You can use whatever hot sauce you prefer.",
      "Spread mixture on one side of tortilla. Sprinkle desired amount of shredded chicken on top, then cheese. Add sauce to a second tortilla and place on top.",
      "Heat in the microwave for about 20 seconds, then put on the stove, until nice a crisp. If you have sauce left over, use for dipping!",
    ],
    difficulty: "Easy",
    imageSource: "https://www.flickr.com/photos/mastermaq/2269241931/in/photolist-6iy2S5-9bomYB-8y3brA-7SMp8P-ceByFA-9ww2ug-yJsKh-54BD6p-izN3yW-6PKzZq-4taqWh-hhNPR-asibth-hhNUh-hhNNc-3CsE6C-hhNSu-9zFCkk-MkVcTF-8jTVh8-4swsyT-7zPwgS-7fngKD-HDWh-9Yb8wm-9jeZN3-8CGCCm-4NhZyd-c9u73G-brd19p-51sAeE-4Sskvm-6P25cq-a6Yw-angDmH-7e33Gz-77DH5c-77HCLQ-77HCwG-5zYueJ-7e33pe-6UdDCh-77HCpu-4Z6zbu-6Su9My-9jpvHr-5AbNy7-9jpvLM-8euaCD-bQBQE4",
    recipeSource: "https://lilluna.com/chicken-quesadillas/",
  },
  {
    id: 6,
    name: "Chicken Ranch Wraps",
    image: 'Chicken-Ranch-Wrap.jpg',
    ingredients: [{
        name: "seasoned, grilled chicken breasts",
        measurement: "2 cups"
      },
      {
        name: "ranch dressing",
        measurement: "1/4 cup"
      },
      {
        name: "mozzarella cheese",
        measurement: "1/2 cup"
      },
      {
        name: "minced cilantro (optional)",
        measurement: "1/4 cup"
      },
      {
        name: "8 inch tortillas",
        measurement: "4"
      }
    ],
    recipe: [
      "Lay tortillas on a clean flat surface. Place about 1/2 cup chicken, 1 tablespoon ranch, 2 tablespoons of cheese, and 1 tablespoon of minced cilantro on each tortilla. Fold tightly to form a burrito shape.",
      "Heat a heavy-duty pan or grill to medium heat. Coat with a light layer or oil or cooking spray and cook wraps for 1-2 minutes on each side or until the tortilla is crispy and golden. Remove from heat, slice in half and serve immediately.",
    ],
    difficulty: "Easy",
    imageSource: "https://gimmedelicious.com/chicken-ranch-wraps/",
    recipeSource: "https://gimmedelicious.com/chicken-ranch-wraps/",
  },
  {
    id: 7,
    name: "Edible Cookie Dough",
    image: 'Cookie-Dough.jpg',
    ingredients: [{
        name: "packed brown sugar",
        measurement: "1/4 cup"
      },
      {
        name: "softened butter",
        measurement: "2 tablespoons"
      },
      {
        name: "salt",
        measurement: "1/8 teaspoon"
      },
      {
        name: "vanilla",
        measurement: "1/8 teaspoon"
      },
      {
        name: "milk",
        measurement: "1 tablespoon"
      },
      {
        name: "flour - toasted at 350ºF for 5 to minutes to kill bacteria",
        measurement: "5 tablespoons"
      },
      {
        name: "chocolate chips",
        measurement: "2 tablespoons"
      },
    ],
    recipe: [
      "Start by mixing/mashing your softened butter, brown sugar, salt and vanilla together until well combined.",
      "Next mix in your 1 Tablespoon of milk. Slowly add in flour, 1 Tablespoon at a time until you have a cookie dough texture.",
      "Finally, add in chocolate chips. Mix until well combined.  Enjoy."
    ],
    difficulty: "Easy",
    imageSource: "https://www.flickr.com/photos/courtarro/8700034297/in/photolist-efMX6k-aTjSme-7UXRhT-4sMBa9-9QZDo6-4JVaiS-gagc3-4wtA2Z-5LEs1n-a1fteV-48qeYb-dhGGKA-dhGELn-7sA4wS-5T5ft5-4SLHhs-a3JFA-7F5nsH-6D8PkE-99yxdA-nDttvR-nDtrwF-nkcmLp-nBpfMn-nkcC23-nBGgkr-nkcA2U-nkcvHT-nBG9Ro-8zA12P-nkcCxf-nkcQpD-nBGbvg-dkNmjZ-nBpocn-4F8sPb-3HKomX-qwiE-7jWjY5-f3iNk-4eTyBh-j6xRE-eCgC-2dsQtUC-j6xRC-5eFWx-dS8zws-68aY9m-bSZbnB-8LcM5Q",
    recipeSource: "https://www.familyfreshmeals.com/2014/04/edible-cookie-dough-recipe-two.html",
  },
  {
    id: 8,
    name: "Old Fashioned Pancakes",
    image: 'Pancakes.jpg',
    ingredients: [{
        name: "all-purpose flour",
        measurement: "1 1/2 cups"
      },
      {
        name: "baking powder",
        measurement: "3 1/2 teaspoons"
      },
      {
        name: "salt",
        measurement: "1 teaspoon"
      },
      {
        name: "white sugar",
        measurement: "1 tablespoon"
      },
      {
        name: "milk",
        measurement: "1 1/4 cups"
      },
      {
        name: "egg",
        measurement: "1"
      },
      {
        name: "melted butter",
        measurement: "3 tablespoons"
      },
    ],
    recipe: [
      "In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.",
      "Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.",
    ],
    difficulty: "Easy",
    imageSource: "https://www.flickr.com/photos/potaufeu/385459112/in/photolist-A4zyL-7TUwS9-87ktzo-FKV7nh-dRX3pL-xsny6-4xUvys-5NQtxb-aq75sJ-7Et9zq-7avtLp-9Uw3x6-8HD8cL-7e3zJa-8HD88C-6cS9Qr-492RAs-8FWQU-6HEcov-8FWPb-9jPmeY-4tThN7-4RsxUm-i18QvG-5VuKvE-77Vjj5-B5qv4-8FnTr5-6JXC4Y-3f9BZq-9EdHNj-cTsHW-4qFJDV-kdjsXc-cTsHU-dvXY6M-7rXo87-48XS9F-9Z7r1L-8AUSsT-97CLuk-8HD86E-2wAUS-8AXYFq-5yfhzx-492PTY-2VkT1h-5BZ1bp-gMi7q5-8HD841",
    recipeSource: "https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/",
  },
]

export default mock;