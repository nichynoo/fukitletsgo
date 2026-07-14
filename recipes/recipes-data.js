/* ============================================================
   FUKITLETSGO recipe data
   To add a recipe: copy an existing block below, edit it, done.
   id: lowercase-with-dashes, unique -> becomes the link: recipe.html?id=xxx
   category: "Breakfast" | "Freezer Meals" | "Dinners" | "Snacks & Treats" | "Breads & Bakes"
   (A brand-new category automatically gets its own filter button.)
   ============================================================ */
const RECIPES = [

  {
    id: "warm-chia-pudding",
    title: "Warm Chia Pudding",
    category: "Breakfast",
    description: "A cosy, porridge-like warm chia pudding made entirely in the microwave — perfect for chilly caravan mornings when you want something warm without firing up the whole kitchen.",
    diet: ["Grain-free", "Gluten-free", "Sugar-free", "Low carb"],
    meta: ["Serves 1", "Ready in 10 min", "Microwave only"],
    ingredients: [
      { amt: "3 tbsp", item: "chia seeds" },
      { amt: "1 cup", item: "unsweetened almond milk (or coconut milk)" },
      { amt: "½ tsp", item: "vanilla extract" },
      { amt: "½ tsp", item: "ground cinnamon" },
      { amt: "½ tsp", item: "stevia or monk fruit sweetener, to taste" },
      { amt: "", item: "Pinch of salt" },
      { amt: "¼ cup", item: "fresh or frozen raspberries or blueberries (optional topping)" },
      { amt: "1 tbsp", item: "flaked almonds or walnuts (optional topping)" }
    ],
    steps: [
      { title: "Combine ingredients", text: "In a microwave-safe bowl or mug, stir together the chia seeds, milk, vanilla, cinnamon, sweetener and salt. Make sure the chia seeds are well distributed with no clumps." },
      { title: "First microwave burst", text: "Microwave on high for 1 minute, then stir well to break up any clumping." },
      { title: "Second burst", text: "Microwave for another 60–90 seconds until warm and starting to thicken. Watch it doesn't bubble over — use a bowl bigger than you think you need." },
      { title: "Rest and thicken", text: "Stir again, then let it sit for 5 minutes. The chia seeds will absorb the liquid and thicken into a warm, porridge-like consistency. If it's too thick, stir in a splash more milk." },
      { title: "Top and serve", text: "Top with berries and nuts. If using frozen berries, pop them on while the pudding is hot — they'll thaw and go lovely and jammy." }
    ],
    notes: "Coconut milk (the carton kind, or half canned coconut cream + half water) makes it richer and creamier. A spoonful of almond butter stirred through at the end adds protein and staying power. Leftovers keep in the fridge and reheat in 60-second bursts with a splash of milk."
  },

  {
    id: "cinnamon-ginger-chia-pudding-with-berries",
    title: "Cinnamon-Ginger Chia Pudding with Berries",
    category: "Breakfast",
    description: "A no-cook, blood-sugar-friendly breakfast you make the night before — the van fridge does all the work while you sleep.",
    diet: ["Grain-free", "Gluten-free", "Sugar-free", "Low carb"],
    meta: ["Serves 2", "5 min prep + overnight", "No cooking"],
    ingredients: [
      { amt: "¼ cup", item: "chia seeds" },
      { amt: "1¼ cups", item: "unsweetened almond milk" },
      { amt: "¾ tsp", item: "ground cinnamon" },
      { amt: "¼ tsp", item: "ground ginger" },
      { amt: "½ tsp", item: "vanilla extract" },
      { amt: "", item: "Pinch of salt" },
      { amt: "½ cup", item: "fresh or frozen mixed berries" },
      { amt: "2 tbsp", item: "flaked almonds or chopped walnuts, toasted" }
    ],
    steps: [
      { title: "Mix", text: "Stir together the chia seeds, almond milk, cinnamon, ginger, vanilla and salt in a jar or container with a lid. Stir again after 5 minutes to break up any clumps." },
      { title: "Set overnight", text: "Lid on and into the fridge for at least 4 hours, ideally overnight, until thick and pudding-like." },
      { title: "Top and serve", text: "Top with the berries and nuts. Frozen berries thaw on top in about 15 minutes if you take it out while the kettle's on." }
    ],
    notes: "Cinnamon is one of the better-studied kitchen spices for blood sugar support, and berries are the lowest-sugar fruit option, which keeps this squarely in low-carb territory."
  },

  {
    id: "turmeric-and-ginger-baked-eggs-with-spinach",
    title: "Turmeric & Ginger Baked Eggs with Spinach",
    category: "Breakfast",
    description: "An anti-inflammatory one-pan breakfast — turmeric, ginger and black pepper doing their thing, eggs baked straight into the greens.",
    diet: ["Grain-free", "Gluten-free", "Dairy-free", "Sugar-free", "Low carb"],
    meta: ["Serves 2", "15 min", "Ninja Crispi"],
    ingredients: [
      { amt: "4", item: "large eggs" },
      { amt: "2 cups", item: "baby spinach, roughly torn" },
      { amt: "6", item: "cherry tomatoes, halved" },
      { amt: "1 tbsp", item: "olive oil" },
      { amt: "½ tsp", item: "ground turmeric" },
      { amt: "1 tsp", item: "fresh ginger, grated (or ¼ tsp ground)" },
      { amt: "¼ tsp", item: "black pepper" },
      { amt: "¼ tsp", item: "salt" },
      { amt: "1 tbsp", item: "fresh parsley or basil, chopped" }
    ],
    steps: [
      { title: "Wilt the base", text: "Toss the spinach and tomatoes with the olive oil, turmeric, ginger, pepper and salt in the Crispi basket. Cook on Air Fry for about 3 minutes, until the spinach just wilts." },
      { title: "Add the eggs", text: "Make 4 wells in the veg and crack an egg into each. Switch to Roast and cook 6–8 minutes, until the whites are set but the yolks still have a wobble." },
      { title: "Finish", text: "Scatter over the parsley or basil and serve straight from the basket." }
    ],
    notes: "Turmeric, black pepper and a fat is the classic trio — the pepper and the olive oil are what make the curcumin actually absorbable, so do not skip either. Add a pinch of chilli flakes if you and Dave like a kick."
  },

  {
    id: "broccoli-cottage-cheese-and-psyllium-egg-bake",
    title: "Broccoli, Cottage Cheese & Psyllium Egg Bake",
    category: "Breakfast",
    description: "The van breakfast that finally cracked the Crispi — roughly 29g protein and 10g fibre per serve, and it holds together well enough to eat one-handed on the road.",
    diet: ["Grain-free", "Gluten-free", "Sugar-free", "Low carb"],
    meta: ["Serves 2", "30 min", "Ninja Crispi"],
    ingredients: [
      { amt: "5", item: "large eggs" },
      { amt: "2 cups", item: "broccoli, cut into small bite-sized florets" },
      { amt: "⅓ cup", item: "cottage cheese, drained" },
      { amt: "2 tsp", item: "psyllium husk (not tablespoons — it is very absorbent)" },
      { amt: "1 tbsp", item: "almond meal" },
      { amt: "1 tbsp", item: "olive oil" },
      { amt: "½ tsp", item: "salt" },
      { amt: "¼ tsp", item: "cracked pepper" },
      { amt: "½", item: "avocado, sliced (to serve, optional)" }
    ],
    steps: [
      { title: "Roast the broccoli", text: "Chop the broccoli small — florets about the size of a 10c coin. Toss with the olive oil, spread in the Crispi basket and cook on Air Fry until bright green and catching a little colour at the edges, about 6 minutes. The stalk is great too: peel and dice it finely." },
      { title: "Whisk the eggs", text: "In a jug, whisk the eggs with the drained cottage cheese, psyllium, almond meal, salt and pepper. Let it sit a minute to thicken slightly. It will look lumpy from the cottage cheese — that is exactly right." },
      { title: "Bake on Roast, covered", text: "Tip the broccoli into a greased Crispi-safe dish, pour the egg mixture over and spread it shallow. Cover with foil and cook on Roast for 14–15 minutes. The foil is the whole trick: without it the top sets and browns while the middle stays runny." },
      { title: "Finish uncovered", text: "Take the foil off and give it a final 2–3 minutes on Roast to set the top. If the centre is still loose, 30–60 seconds in the microwave finishes it without drying the edges." },
      { title: "Rest and serve", text: "Rest 2 minutes — it finishes setting as it sits. Serve with sliced avocado." }
    ],
    notes: "Draining the cottage cheese and keeping the layer shallow are what make it cook evenly. Microwave-only version: steam the broccoli in a covered dish with a splash of water for 2–3 minutes, drain, pour the egg mix over and cook in 60-second bursts until just set. Boost the protein further with leftover shredded chicken, smoked salmon or a couple of bacon rashers. Leftovers keep 2 days in the van fridge and reheat well."
  },

  {
    id: "pulled-lamb",
    title: "Pulled Lamb",
    category: "Freezer Meals",
    description: "Melt-in-your-mouth shredded lamb — set it going in the morning and it looks after itself all day.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 8 (4 dinners for 2)", "Boneless 2.2kg", "Slow Cooker"],
    ingredients: [
      { amt: "2.2 kg", item: "boneless lamb shoulder, cut into 2–3 large pieces" },
      { amt: "1½ large", item: "brown onion(s), roughly chopped" },
      { amt: "7", item: "garlic cloves, smashed" },
      { amt: "3 sprigs", item: "fresh rosemary" },
      { amt: "1¼ tsp", item: "ground cumin" },
      { amt: "1¼ tsp", item: "smoked paprika" },
      { amt: "2½ tbsp", item: "tomato paste" },
      { amt: "500 ml", item: "beef broth or chicken stock" },
      { amt: "2½ tbsp", item: "olive oil" },
      { amt: "1¾ tsp", item: "salt" },
      { amt: "¾ tsp", item: "cracked black pepper" }
    ],
    steps: [
      { title: "Cut and season", text: "Cut the lamb into 2–3 large, roughly even pieces. Pat dry with paper towel. Mix cumin, paprika, salt and pepper together and rub all over, pressing into any crevices." },
      { title: "Sear", text: "Heat olive oil in a large frying pan over high heat. Sear the lamb pieces on all sides until deep golden brown — about 8–10 minutes total, working in batches if needed." },
      { title: "Build the slow cooker base", text: "Scatter the onion and garlic across the base of the slow cooker. Lay the seared lamb on top. Mix tomato paste into the stock and pour around (not over) the lamb. Tuck the rosemary alongside." },
      { title: "Slow cook", text: "Cover and cook on LOW for 7–9 hours or HIGH for 4.5–5.5 hours. Start checking at the lower end — boneless cooks faster than bone-in. Ready when meat shreds apart easily with a fork." },
      { title: "Shred", text: "Lift the lamb onto a board and shred with two forks, discarding any large fat pieces. Skim excess fat from juices, then stir the shredded meat back through generously." },
      { title: "Cool and freeze", text: "Spread on a tray to cool quickly, or refrigerate overnight. Portion into 4 equal freezer bags (each = 1 dinner for 2). Lay flat to freeze. Label: dish name, date, \"serve with cauli mash or mashed potato\"." }
    ],
    notes: "Cutting into 2–3 pieces before searing gives better browning and more even cooking. Boneless cooks faster than bone-in — start checking at 7 hours on low. No bone to discard means more usable meat, hence 4 bags rather than 3. Beef broth also works beautifully here if that's what you have. Freezes well for up to 3 months."
  },

  {
    id: "lamb-korma",
    title: "Lamb Korma",
    category: "Freezer Meals",
    description: "Rich, fragrant and gently spiced — made dairy free with coconut milk and cream. Gorgeous over rice or cauli mash.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 8", "2kg Batch", "Stovetop — Dairy Free"],
    ingredients: [
      { amt: "2 kg", item: "lamb, cut into 3 cm pieces (diced from butcher if possible)" },
      { amt: "2 large", item: "brown onions, finely diced" },
      { amt: "8", item: "garlic cloves, minced" },
      { amt: "2 tbsp", item: "fresh ginger, finely grated" },
      { amt: "5 tbsp", item: "korma paste (GF, no added sugar) — start with 4, add more to taste" },
      { amt: "800 ml", item: "coconut milk (2 cans)" },
      { amt: "400 ml", item: "coconut cream (2 cans)" },
      { amt: "500 ml", item: "chicken stock" },
      { amt: "4 tbsp", item: "tomato paste" },
      { amt: "100 g", item: "almond meal (optional — thickener)" },
      { amt: "2 tsp", item: "garam masala" },
      { amt: "1 tsp", item: "ground turmeric" },
      { amt: "1 tsp", item: "ground cardamom" },
      { amt: "2 tbsp", item: "oil (or use rendered lamb fat from the pulled lamb pan)" },
      { amt: "2 tsp", item: "salt" }
    ],
    steps: [
      { title: "Brown the lamb", text: "Heat oil in a large heavy-based pot over high heat (use rendered lamb fat from the pulled lamb pan if cooking on the same day — adds great depth). Brown the lamb in 3–4 batches, about 4–5 minutes per batch until golden all over. Set aside." },
      { title: "Soften the onion", text: "Reduce heat to medium. Add onions and cook, stirring, for 6–7 minutes until soft and lightly golden." },
      { title: "Add aromatics", text: "Add garlic, ginger, turmeric and cardamom. Cook for 2 minutes until fragrant. Add tomato paste and stir through." },
      { title: "Build the sauce", text: "Add the korma paste and stir to coat. Return browned lamb to the pot. Pour in coconut milk, coconut cream and stock. Stir in almond meal if using. Season with salt." },
      { title: "Simmer", text: "Bring to a gentle simmer, then reduce heat to low. Cover and cook for 60–75 minutes, stirring occasionally, until the lamb is tender and sauce has thickened." },
      { title: "Finish and freeze", text: "Stir in garam masala. Taste and adjust salt. Cool completely before portioning into 4–5 freezer bags. Label: dish name, date, \"serve with rice or cauli mash\"." }
    ],
    notes: "Korma paste strength varies by brand — start with 4 tablespoons, taste once the liquids are in, and add more if needed. This 2kg batch is generous enough to serve fresh one night AND freeze several portions. Butcher-cut lamb gives noticeably better results than supermarket diced. Freezes well for up to 3 months. DAY 2 — Lamb Shanks"
  },

  {
    id: "braised-lamb-shanks",
    title: "Braised Lamb Shanks",
    category: "Freezer Meals",
    description: "Fall-off-the-bone lamb shanks braised low and slow in a rich tomato and herb sauce.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 4 (2 dinners for 2)", "Oven at 160°C"],
    ingredients: [
      { amt: "4", item: "lamb shanks" },
      { amt: "2 large", item: "brown onions, diced" },
      { amt: "6", item: "garlic cloves, minced" },
      { amt: "2 large", item: "carrots, diced" },
      { amt: "2", item: "celery stalks, diced" },
      { amt: "800 g", item: "canned diced tomatoes (2 cans)" },
      { amt: "400 ml", item: "beef or chicken stock" },
      { amt: "2 tbsp", item: "tomato paste" },
      { amt: "2 sprigs", item: "fresh rosemary" },
      { amt: "2 sprigs", item: "fresh thyme" },
      { amt: "3", item: "bay leaves" },
      { amt: "250 ml", item: "red wine (optional — or sub extra stock + 1 tbsp ACV)" },
      { amt: "2 tbsp", item: "olive oil" },
      { amt: "1½ tsp", item: "salt" },
      { amt: "½ tsp", item: "cracked black pepper" }
    ],
    steps: [
      { title: "Preheat and season", text: "Preheat oven to 160°C. Pat the shanks dry and season all over with salt and pepper." },
      { title: "Brown the shanks", text: "Heat olive oil in a large oven-proof pot over high heat. Brown the shanks in batches, turning to colour all sides — about 8–10 minutes total. Set aside." },
      { title: "Cook the vegetables", text: "Reduce to medium. Add onions, carrots and celery and cook for 6–8 minutes until softened. Add garlic and cook for 2 more minutes." },
      { title: "Build the sauce", text: "Add tomato paste and stir for 1 minute. If using wine, pour it in and let it bubble for 2 minutes. Add canned tomatoes, stock, rosemary, thyme and bay leaves." },
      { title: "Braise", text: "Nestle shanks into the pot — mostly submerged. Cover tightly with a lid or foil. Braise at 160°C for 2½–3 hours until falling off the bone." },
      { title: "Cool and freeze", text: "Cool completely overnight in the fridge is ideal. Remove herbs. Portion into rigid containers (2 shanks + sauce = 1 dinner for 2). Label: dish name, date, \"serve with cauli mash or mashed potato\"." }
    ],
    notes: "A Dutch oven or heavy casserole dish with a lid is ideal. Red wine adds depth but isn't essential — stock + a splash of ACV works beautifully. These are even better the next day. Use rigid containers rather than bags to keep shanks intact. Reheat covered at 160°C for 25–35 minutes from fridge, or gently on the stovetop. Freezes well for up to 3 months. DAY 3 — Pork + Veal Day"
  },

  {
    id: "pulled-pork",
    title: "Pulled Pork",
    category: "Freezer Meals",
    description: "Tender, smoky pulled pork with no added sugar — the ACV and smoked paprika do all the work.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 6 (3 dinners for 2)", "Slow Cooker"],
    ingredients: [
      { amt: "1.8 kg", item: "bone-in pork shoulder" },
      { amt: "1 large", item: "brown onion, roughly chopped" },
      { amt: "6", item: "garlic cloves, smashed" },
      { amt: "2 tsp", item: "smoked paprika" },
      { amt: "1 tsp", item: "ground cumin" },
      { amt: "1 tsp", item: "dried oregano" },
      { amt: "2 tbsp", item: "apple cider vinegar" },
      { amt: "300 ml", item: "chicken stock" },
      { amt: "2 tbsp", item: "tomato paste" },
      { amt: "2 tbsp", item: "olive oil" },
      { amt: "1½ tsp", item: "salt" },
      { amt: "½ tsp", item: "cracked black pepper" }
    ],
    steps: [
      { title: "Season", text: "Mix smoked paprika, cumin, oregano, salt and pepper together. Pat pork dry and rub all over." },
      { title: "Sear", text: "Heat oil in a large frying pan over high heat. Sear on all sides until deep golden — 8–10 minutes." },
      { title: "Build the slow cooker base", text: "Scatter onion and garlic in the base. Lay pork on top." },
      { title: "Add liquid", text: "Whisk tomato paste, ACV and stock together and pour around the pork." },
      { title: "Slow cook", text: "Cover and cook on LOW 8–10 hours or HIGH 5–6 hours until meat shreds easily." },
      { title: "Shred and freeze", text: "Shred with two forks. Skim fat from juices and stir meat back through. Cool completely. Portion into 3 freezer bags. Label: dish name, date, \"serve with cauli mash, rice or mashed potato\"." }
    ],
    notes: "No sugar needed — the ACV and smoked paprika give all the depth and tang required. For extra smokiness, add ½ tsp garlic powder and ½ tsp onion powder to the spice rub. Freezes well for up to 3 months."
  },

  {
    id: "osso-bucco",
    title: "Osso Bucco",
    category: "Freezer Meals",
    description: "A classic Italian braise — veal shin slow-cooked in white wine, tomato and herbs, finished with a bright fresh gremolata.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 4 (2 dinners for 2)", "Oven at 160°C"],
    ingredients: [
      { amt: "4–6 pieces", item: "veal osso bucco, cross-cut" },
      { amt: "1 large", item: "brown onion, diced" },
      { amt: "1 large", item: "carrot, diced" },
      { amt: "2", item: "celery stalks, diced" },
      { amt: "4", item: "garlic cloves, minced" },
      { amt: "250 ml", item: "white wine (or sub: extra stock + 1 tbsp ACV)" },
      { amt: "400 ml", item: "chicken stock" },
      { amt: "400 g", item: "canned diced tomatoes" },
      { amt: "1 tbsp", item: "tomato paste" },
      { amt: "2", item: "bay leaves" },
      { amt: "2 sprigs", item: "fresh thyme" },
      { amt: "2 tbsp", item: "olive oil" },
      { amt: "1½ tsp", item: "salt" },
      { amt: "½ tsp", item: "cracked black pepper" },
      { amt: "", item: "— GREMOLATA — MAKE FRESH WHEN SERVING —" },
      { amt: "1", item: "lemon, zested" },
      { amt: "1", item: "garlic clove, finely minced" },
      { amt: "3 tbsp", item: "flat-leaf parsley, finely chopped" }
    ],
    steps: [
      { title: "Preheat and season", text: "Preheat oven to 160°C. Pat veal dry and season all over with salt and pepper." },
      { title: "Sear the veal", text: "Sear veal pieces 3–4 minutes per side in olive oil until deep golden. Work in batches. Set aside." },
      { title: "Soften the vegetables", text: "Cook onion, carrot and celery for 6–8 minutes until softened. Add garlic and cook 2 more minutes." },
      { title: "Build the sauce", text: "Add tomato paste, stir 1 minute. Pour in white wine and bubble 2 minutes. Add tomatoes, stock, bay leaves and thyme." },
      { title: "Braise", text: "Nestle veal back in a single layer. Cover tightly. Braise at 160°C for 2–2½ hours until very tender." },
      { title: "Gremolata", text: "Combine lemon zest, minced garlic and parsley. Do NOT add before freezing — make fresh when reheating." },
      { title: "Cool and freeze", text: "Cool completely. Portion into rigid containers (1–2 pieces + sauce each). Label: dish name, date, \"make fresh gremolata (lemon zest + garlic + parsley) to serve\"." }
    ],
    notes: "Skip the traditional flour coating — the veal's natural collagen creates a silky sauce without it. The gremolata is the signature finish — make it fresh when reheating on the road, not before freezing. Write this reminder on each container lid. Rigid containers essential to keep whole pieces intact. Freezes well for up to 3 months. DAY 4 — Beef Day"
  },

  {
    id: "braised-beef-cheeks",
    title: "Braised Beef Cheeks",
    category: "Freezer Meals",
    description: "Meltingly tender beef cheeks braised in red wine and tomato — the sauce sets like jelly when cold, which means it'll be incredible reheated.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 4 (2 dinners for 2)", "Oven at 150°C"],
    ingredients: [
      { amt: "4", item: "beef cheeks" },
      { amt: "1 large", item: "brown onion, diced" },
      { amt: "1 large", item: "carrot, diced" },
      { amt: "2", item: "celery stalks, diced" },
      { amt: "5", item: "garlic cloves, minced" },
      { amt: "250 ml", item: "red wine (or sub: extra stock + 1 tbsp ACV)" },
      { amt: "500 ml", item: "beef stock" },
      { amt: "400 g", item: "canned diced tomatoes" },
      { amt: "2 tbsp", item: "tomato paste" },
      { amt: "2 sprigs", item: "fresh thyme" },
      { amt: "3", item: "bay leaves" },
      { amt: "2 tbsp", item: "olive oil" },
      { amt: "1½ tsp", item: "salt" },
      { amt: "½ tsp", item: "cracked black pepper" }
    ],
    steps: [
      { title: "Preheat and season", text: "Preheat oven to 150°C. Pat cheeks dry and season with salt and pepper." },
      { title: "Brown the cheeks", text: "Brown in batches in olive oil — 3–4 minutes per side until deep golden. Set aside." },
      { title: "Soften the vegetables", text: "Cook onion, carrot and celery for 6–8 minutes. Add garlic and cook 2 more minutes." },
      { title: "Build the sauce", text: "Add tomato paste, stir 1 minute. Pour in wine and bubble 2 minutes. Add tomatoes, stock, thyme and bay leaves." },
      { title: "Braise", text: "Nestle cheeks into the pot. Cover tightly with lid or foil. Braise at 150°C for 3–3½ hours until the meat yields easily when pressed." },
      { title: "Cool and freeze", text: "Rest in sauce 10–15 minutes. Remove herbs. Cool completely. Portion into 2 freezer bags (2 cheeks + sauce each = 1 dinner for 2). Label: dish name, date, \"serve with cauli mash or mashed potato\"." }
    ],
    notes: "The sauce will set like firm jelly when cold — that's exactly right and means it'll be rich and silky when reheated. Add a splash of water or stock when reheating if too thick. Freezes well for up to 3 months."
  },

  {
    id: "beef-massaman-curry",
    title: "Beef Massaman Curry",
    category: "Freezer Meals",
    description: "A gently spiced Thai-style curry with rich coconut sauce and meltingly tender beef. Made with red curry paste as a substitute for massaman paste.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 9", "1.5kg Batch", "Stovetop"],
    ingredients: [
      { amt: "1.5 kg", item: "beef chuck, cut into 3–4 cm pieces" },
      { amt: "1½ large", item: "brown onion(s), cut into wedges" },
      { amt: "4½ tbsp", item: "red curry paste (GF, no added sugar) — start with 4, add more to taste" },
      { amt: "600 ml", item: "coconut milk" },
      { amt: "375 ml", item: "beef stock" },
      { amt: "3 tbsp", item: "fish sauce (gluten free)" },
      { amt: "3 tbsp", item: "lime juice (approx 2 limes)" },
      { amt: "2", item: "cinnamon sticks" },
      { amt: "3", item: "star anise" },
      { amt: "4", item: "bay leaves" },
      { amt: "1½ tbsp", item: "tamarind paste (optional)" },
      { amt: "3 tbsp", item: "coconut oil or olive oil" },
      { amt: "¾ tsp", item: "salt" }
    ],
    steps: [
      { title: "Brown the beef", text: "Heat oil in a large heavy-based pot over high heat. Brown beef in 4–5 batches — 3–4 minutes per batch until golden. Set aside." },
      { title: "Soften the onion", text: "Reduce to medium heat. Cook onion wedges for 4–5 minutes until softened and slightly golden." },
      { title: "Add paste and whole spices", text: "Add the curry paste, cinnamon sticks, star anise and bay leaves. Cook for 2–3 minutes until fragrant." },
      { title: "Build the sauce", text: "Pour in coconut milk and beef stock. Return beef to pot. Add fish sauce and tamarind (if using). Season with salt." },
      { title: "Simmer", text: "Bring to a gentle simmer, cover, cook on low for 1¾–2¼ hours, stirring occasionally, until beef is very tender." },
      { title: "Finish and freeze", text: "Remove and discard cinnamon sticks, star anise and bay leaves. Stir in lime juice. Taste and adjust. Cool completely. Portion into 4–5 freezer bags. Label: dish name, date, \"serve with rice or cauli mash\"." }
    ],
    notes: "NOTE: This recipe uses red curry paste as a substitute for massaman paste — the cinnamon sticks, star anise and tamarind do the heavy lifting to give a massaman-style flavour even with a red curry base. Red paste is spicier than massaman — if the sauce has a lot of kick, add extra coconut milk or a spoonful of coconut yoghurt to tame it. Start with 4 tbsp paste and taste before adding more. If the sauce seems oily, simmer uncovered for 15–20 minutes skimming the fat to reduce and thicken. Freezes well for up to 3 months. DAY 5 — Stovetop Day"
  },

  {
    id: "chicken-cacciatore",
    title: "Chicken Cacciatore",
    category: "Freezer Meals",
    description: "Classic Italian hunter's chicken — braised in tomato, herbs, olives and capers until deeply savoury and tender.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 6 (3 dinners for 2)", "Stovetop"],
    ingredients: [
      { amt: "1.2 kg", item: "chicken thighs, bone-in skin-on" },
      { amt: "1 large", item: "brown onion, diced" },
      { amt: "4", item: "garlic cloves, minced" },
      { amt: "1", item: "red capsicum, diced" },
      { amt: "200 g", item: "mushrooms, sliced" },
      { amt: "800 g", item: "canned diced tomatoes (2 cans)" },
      { amt: "250 ml", item: "chicken stock" },
      { amt: "1 tbsp", item: "tomato paste" },
      { amt: "80 g", item: "kalamata olives (optional)" },
      { amt: "2 tbsp", item: "capers (optional)" },
      { amt: "125 ml", item: "red wine (optional)" },
      { amt: "1 tsp", item: "dried oregano" },
      { amt: "2", item: "bay leaves" },
      { amt: "2 tbsp", item: "olive oil" },
      { amt: "1 tsp", item: "salt" },
      { amt: "½ tsp", item: "cracked black pepper" }
    ],
    steps: [
      { title: "Season the chicken", text: "Pat chicken dry and season all over with salt and pepper." },
      { title: "Brown the chicken", text: "Sear skin-side down in olive oil for 4–5 minutes until golden and crispy. Flip briefly 1 minute. Set aside." },
      { title: "Cook the vegetables", text: "Cook onion and capsicum for 5–6 minutes. Add garlic 2 minutes. Add mushrooms and cook 3–4 minutes." },
      { title: "Build the sauce", text: "Add tomato paste 1 minute. Add wine if using and bubble 2 minutes. Add tomatoes, stock, oregano and bay leaves." },
      { title: "Simmer", text: "Nestle chicken back in skin-side up. Bring to a gentle simmer. Cover and cook 35–45 minutes." },
      { title: "Add olives and capers", text: "Stir in olives and capers (if using) for the last 5 minutes. Remove bay leaves." },
      { title: "Cool and freeze", text: "Cool completely. Portion into 3 freezer bags with plenty of sauce. Label: dish name, date, \"serve with cauli mash, rice or zucchini noodles\"." }
    ],
    notes: "Bone-in thighs are worth it — the meat stays moist when reheated. To save freezer space, remove bones once cooled before bagging. The olives and capers add lovely briny depth. Freezes well for up to 3 months."
  },

  {
    id: "beef-and-vegetable-stew",
    title: "Beef & Vegetable Stew",
    category: "Freezer Meals",
    description: "A hearty, chunky beef and vegetable stew — warming, simple and deeply satisfying.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 9", "1.5kg Batch", "Stovetop"],
    ingredients: [
      { amt: "1.5 kg", item: "beef chuck, cut into 3–4 cm pieces" },
      { amt: "1½ large", item: "brown onion(s), diced" },
      { amt: "6", item: "garlic cloves, minced" },
      { amt: "3 large", item: "carrots, cut into chunks" },
      { amt: "3", item: "celery stalks, sliced" },
      { amt: "3", item: "zucchini, cut into chunks (add last 20–25 min only)" },
      { amt: "600 g", item: "canned diced tomatoes" },
      { amt: "1.1 L", item: "beef stock" },
      { amt: "3 tbsp", item: "tomato paste" },
      { amt: "3 sprigs", item: "fresh thyme (or 1½ tsp dried)" },
      { amt: "2 sprigs", item: "fresh rosemary (or ¾ tsp dried)" },
      { amt: "3", item: "bay leaves" },
      { amt: "3 tbsp", item: "olive oil" },
      { amt: "2¼ tsp", item: "salt" },
      { amt: "¾ tsp", item: "cracked black pepper" }
    ],
    steps: [
      { title: "Brown the beef", text: "Brown in 4–5 batches in olive oil — 3–4 minutes per batch until well coloured. Set aside." },
      { title: "Cook the vegetables", text: "Cook onion, carrots and celery for 7–9 minutes until softened. Add garlic 2 more minutes." },
      { title: "Build the stew", text: "Add tomato paste 1 minute. Return beef to pot. Pour in tomatoes and stock. Tuck in herbs. Season with salt and pepper." },
      { title: "Simmer", text: "Bring to a gentle simmer. Cover and cook on low for 1 hour 20–25 minutes." },
      { title: "Add zucchini", text: "Add zucchini and stir through. Cover and cook a further 20–25 minutes until just tender and beef is completely soft." },
      { title: "Season and freeze", text: "Remove herbs. Taste and adjust. If sauce is watery, simmer uncovered 15–20 minutes skimming fat to reduce. Cool completely. Portion into 4–5 freezer bags. Label: dish name, date, \"serve with cauli mash, mashed potato or rice\"." }
    ],
    notes: "Brown in 4–5 batches rather than 2–3 to avoid overcrowding. Add the zucchini in the last 20–25 minutes only — any earlier and it turns to mush. If the sauce looks watery and oily at the end, simmer uncovered and skim the fat — this transforms it. The stew thickens as it cools — add a splash of stock when reheating. Freezes well for up to 3 months. DAY 6 — TM6: Soup Day"
  },

  {
    id: "pumpkin-soup",
    title: "Pumpkin Soup",
    category: "Freezer Meals",
    description: "Silky smooth, lightly spiced pumpkin soup made dairy free with coconut cream. Chop, cook, blend, done.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 6 (3 dinners for 2)", "TM6"],
    ingredients: [
      { amt: "1.5 kg", item: "butternut pumpkin, peeled and diced (skin off)" },
      { amt: "1 large", item: "brown onion, quartered" },
      { amt: "3", item: "garlic cloves" },
      { amt: "1 tsp", item: "fresh ginger, peeled" },
      { amt: "1 L", item: "chicken or vegetable stock" },
      { amt: "200 ml", item: "coconut cream" },
      { amt: "1 tsp", item: "ground cumin" },
      { amt: "½ tsp", item: "ground nutmeg" },
      { amt: "2 tbsp", item: "olive oil" },
      { amt: "1½ tsp", item: "salt" },
      { amt: "½ tsp", item: "cracked black pepper" }
    ],
    steps: [
      { title: "Optional: air fry pumpkin first", text: "For deeper, sweeter flavour, toss diced pumpkin in olive oil, salt and pepper. Air fry at 200°C for 15–20 minutes in batches until caramelised at edges. Then skip the 20-minute cook step below and just warm through before blending." },
      { title: "Chop aromatics", text: "Add onion, garlic and ginger to TM6 bowl. Chop: 5 sec / Speed 5. Scrape down." },
      { title: "Sauté", text: "Add olive oil. Sauté: 5 min / Varoma / Speed 1." },
      { title: "Add pumpkin and cook", text: "Add pumpkin (raw), cumin, nutmeg, salt, pepper and stock. Cook: 20 min / 100°C / Speed 1. MC in." },
      { title: "Add coconut cream", text: "Pour coconut cream into the bowl." },
      { title: "Blend", text: "Starting on Speed 3, gradually increase to Speed 9 over 30 seconds. Blend 1 minute total until completely smooth. Hold the lid firmly with a folded tea towel. MC in." },
      { title: "Taste and freeze", text: "Taste and adjust salt. Cool completely before portioning into 3 freezer bags. Lay flat. Label: dish name and date." }
    ],
    notes: "Air frying the pumpkin first gives a richer, sweeter, more caramelised flavour — worth the 15–20 minutes if you have time. Don't overfill the TM6 bowl — 1.5 kg pumpkin is about right; do 2 batches if larger. Soup thickens as it cools — thin with extra stock when reheating. Freezes well for up to 3 months."
  },

  {
    id: "tom-kha-gai",
    title: "Tom Kha Gai",
    category: "Freezer Meals",
    description: "A fragrant Thai coconut broth with tender chicken, galangal and lemongrass. Light, warming and deeply comforting.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 6 (3 dinners for 2)", "TM6"],
    ingredients: [
      { amt: "600 g", item: "boneless chicken thighs, sliced into strips" },
      { amt: "400 ml", item: "coconut milk" },
      { amt: "200 ml", item: "coconut cream" },
      { amt: "500 ml", item: "chicken stock" },
      { amt: "4 slices", item: "galangal (fresh), sliced into coins" },
      { amt: "2", item: "lemongrass stalks, bruised and cut into 5 cm pieces" },
      { amt: "6", item: "kaffir lime leaves, torn" },
      { amt: "150 g", item: "mushrooms, sliced" },
      { amt: "2 tbsp", item: "fish sauce (gluten free)" },
      { amt: "2 tbsp", item: "lime juice (approx 1–2 limes)" },
      { amt: "2", item: "fresh chilli, sliced (optional)" },
      { amt: "3", item: "spring onions, sliced" },
      { amt: "¼ tsp", item: "salt" }
    ],
    steps: [
      { title: "Infuse the broth", text: "Add coconut milk, coconut cream and stock to TM6 bowl. Add galangal, lemongrass and kaffir lime leaves. Cook: 15 min / 90°C / Speed 1. MC in." },
      { title: "Add chicken and mushrooms", text: "Add chicken strips, mushrooms and chilli (if using). Cook: 12 min / 90°C / Reverse / Speed 1. MC in." },
      { title: "Season", text: "Add fish sauce, lime juice and salt. Stir gently with spatula. Taste and adjust." },
      { title: "Remove aromatics and freeze", text: "Fish out and discard the galangal coins, lemongrass and kaffir lime leaves. Stir through spring onions. Cool completely. Portion into 3 freezer bags. Label: dish name, date, \"add fresh coriander when serving\"." }
    ],
    notes: "The galangal, lemongrass and kaffir lime leaves are for flavouring only — remove before portioning. Don't add fresh coriander before freezing. Galangal is not the same as ginger — worth finding at an Asian grocery for authentic flavour. Freezes well for up to 3 months. DAY 7 — TM6: Curry Day"
  },

  {
    id: "thai-green-or-red-chicken-curry",
    title: "Thai Green or Red Chicken Curry",
    category: "Freezer Meals",
    description: "A vibrant, fragrant Thai curry made quick and easy in the TM6. Green for herbal and bright, red for richer and slightly earthier.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 6 (3 dinners for 2)", "TM6"],
    ingredients: [
      { amt: "800 g", item: "boneless chicken thighs, diced into 3 cm pieces" },
      { amt: "3 tbsp", item: "Thai green or red curry paste (GF, no added sugar) — start with 2, taste, add more" },
      { amt: "400 ml", item: "coconut milk" },
      { amt: "200 ml", item: "coconut cream" },
      { amt: "200 ml", item: "chicken stock" },
      { amt: "2 tbsp", item: "fish sauce (gluten free)" },
      { amt: "2 tbsp", item: "lime juice (approx 1–2 limes)" },
      { amt: "2", item: "garlic cloves" },
      { amt: "1 tbsp", item: "fresh ginger, peeled" },
      { amt: "4", item: "kaffir lime leaves, torn" },
      { amt: "1", item: "zucchini, diced" },
      { amt: "1", item: "red capsicum, diced" },
      { amt: "1 tbsp", item: "coconut oil" },
      { amt: "½ tsp", item: "salt" }
    ],
    steps: [
      { title: "Chop aromatics", text: "Add garlic and ginger to TM6 bowl. Chop: 5 sec / Speed 5. Scrape down." },
      { title: "Sauté", text: "Add coconut oil. Sauté: 3 min / Varoma / Speed 1." },
      { title: "Add curry paste", text: "Add curry paste and kaffir lime leaves. Cook: 3 min / 100°C / Speed 1 until fragrant." },
      { title: "Build the sauce", text: "Add coconut milk, coconut cream and stock. Cook: 5 min / 100°C / Speed 1. Add fish sauce and salt. Stir with spatula." },
      { title: "Cook chicken and veg", text: "Add chicken, zucchini and capsicum. Cook: 15 min / 100°C / Reverse / Speed 1. MC in." },
      { title: "Finish and freeze", text: "Add lime juice. Taste and adjust. Remove kaffir lime leaves. Cool completely. Portion into 3 freezer bags. Label: dish name, date, \"serve with rice or cauli mash — add Thai basil when reheating\"." }
    ],
    notes: "Start with 2 tablespoons of paste and taste before adding more — paste strength varies a lot by brand. Use reverse blade to keep chicken pieces intact. Thai basil is lovely added fresh when serving. Freezes well for up to 3 months."
  },

  {
    id: "keema",
    title: "Keema",
    category: "Freezer Meals",
    description: "A deeply spiced Indian mince dish — quick to make, packed with flavour and brilliant over rice, cauli mash or in lettuce cups.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 8 (4 dinners for 2)", "1kg Batch", "TM6"],
    ingredients: [
      { amt: "1 kg", item: "lamb mince (or beef mince)" },
      { amt: "1¼ large", item: "brown onion(s), quartered" },
      { amt: "5", item: "garlic cloves" },
      { amt: "1¼ tbsp", item: "fresh ginger, peeled" },
      { amt: "500 g", item: "canned diced tomatoes" },
      { amt: "2½ tbsp", item: "tomato paste" },
      { amt: "190 g", item: "frozen peas" },
      { amt: "1¾ tsp", item: "ground cumin" },
      { amt: "1¼ tsp", item: "ground coriander" },
      { amt: "½ tsp", item: "turmeric" },
      { amt: "1¼ tsp", item: "garam masala" },
      { amt: "½ tsp", item: "chilli powder (or to taste)" },
      { amt: "1¼ tbsp", item: "olive oil or coconut oil" },
      { amt: "1¼ tsp", item: "salt" }
    ],
    steps: [
      { title: "Chop aromatics", text: "Add onion, garlic and ginger to TM6 bowl. Chop: 5 sec / Speed 5. Scrape down." },
      { title: "Sauté", text: "Add oil. Sauté: 5 min / Varoma / Speed 1." },
      { title: "Toast the spices", text: "Add cumin, ground coriander, turmeric and chilli powder. Cook: 2 min / 100°C / Speed 1 until fragrant." },
      { title: "Cook the mince", text: "Add mince. Cook: 12 min / 100°C / Reverse / Speed 1. MC in. Stop halfway and break up any clumps with spatula." },
      { title: "Add tomatoes and simmer", text: "Add tomato paste, canned tomatoes and salt. Cook: 17 min / 100°C / Reverse / Speed 1. MC in." },
      { title: "Add peas", text: "Add frozen peas. Cook: 5 min / 100°C / Reverse / Speed 1. MC in." },
      { title: "Finish and freeze", text: "Stir in garam masala. Taste and adjust. Cool completely. Portion into 4 freezer bags. Label: dish name, date, \"serve with rice or cauli mash — add fresh coriander when serving\"." }
    ],
    notes: "Always use reverse blade when cooking mince — keeps texture right and stops mince becoming a paste. The TM6 bowl will be quite full at 1kg — break up the mince well before adding liquids. MC must be in during all cook steps. No tomato paste? Use extra passata or diced tomato and simmer a little longer. Great served in lettuce cups if you're bored of rice and mash. Freezes well for up to 3 months. DAY 8 — TM6: Finish Line! 🎉"
  },

  {
    id: "chicken-and-vegetable-soup",
    title: "Chicken & Vegetable Soup",
    category: "Freezer Meals",
    description: "A comforting, classic chicken and vegetable soup. Scaled for 480g chicken thigh.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 3", "480g Batch", "TM6"],
    ingredients: [
      { amt: "480 g", item: "boneless chicken thighs" },
      { amt: "1 medium", item: "brown onion, quartered" },
      { amt: "2", item: "garlic cloves" },
      { amt: "1 large", item: "carrot, diced" },
      { amt: "1", item: "celery stalk, sliced" },
      { amt: "½", item: "zucchini, diced (add last 8 min only)" },
      { amt: "600 ml", item: "chicken stock" },
      { amt: "1 sprig", item: "fresh thyme (or ½ tsp dried)" },
      { amt: "1", item: "bay leaf" },
      { amt: "½ tbsp", item: "olive oil" },
      { amt: "¾ tsp", item: "salt" },
      { amt: "¼ tsp", item: "cracked black pepper" }
    ],
    steps: [
      { title: "Chop aromatics", text: "Add onion and garlic to TM6 bowl. Chop: 5 sec / Speed 5. Scrape down." },
      { title: "Sauté", text: "Add olive oil. Sauté: 4 min / Varoma / Speed 1." },
      { title: "Cook chicken and vegetables", text: "Add chicken thighs (whole or halved), carrot, celery, thyme, bay leaf, salt, pepper and stock. Cook: 18 min / 100°C / Reverse / Speed 1. MC in." },
      { title: "Shred the chicken", text: "Remove chicken pieces using tongs. Shred with two forks or use a clean TM6 bowl — Reverse / Speed 3–4 in 2–3 second pulses until shredded to your liking. Return to bowl. Remove thyme and bay leaf." },
      { title: "Add zucchini", text: "Add zucchini. Cook: 6 min / 100°C / Reverse / Speed 1. MC in." },
      { title: "Season and freeze", text: "Taste and adjust. Cool completely. Portion into 1–2 freezer bags. Label: dish name, date, \"add fresh parsley when reheating\"." }
    ],
    notes: "This smaller batch is well under the TM6 fill line — no capacity concerns. To shred chicken in a clean TM6 bowl, use Reverse / Speed 3–4 in short 2–3 second pulses — check between each burst and stop as soon as it's shredded (it happens fast). Add fresh parsley when reheating for a fresh finish. Freezes well for up to 3 months."
  },

  {
    id: "creamy-garlic-chicken-potato-and-broccoli-bake",
    title: "Creamy Garlic Chicken, Potato & Broccoli Bake",
    category: "Dinners",
    description: "Tender boneless chicken thighs baked with leek, potatoes and broccoli in a rich, garlicky parmesan cream sauce. One dish, no sides needed.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Serves 5", "Oven at 200°C"],
    ingredients: [
      { amt: "1.4 kg", item: "boneless, skinless chicken thighs" },
      { amt: "800 g", item: "baby/chat potatoes, halved" },
      { amt: "300 g", item: "broccoli, cut into small florets" },
      { amt: "2 medium", item: "leeks, white and pale green parts only, sliced (washed well)" },
      { amt: "6", item: "garlic cloves, minced" },
      { amt: "300 ml", item: "cooking cream or thickened cream" },
      { amt: "500 ml", item: "chicken stock" },
      { amt: "2 tbsp", item: "Dijon mustard" },
      { amt: "60 g", item: "parmesan, grated" },
      { amt: "2 tbsp", item: "olive oil" },
      { amt: "2 tsp", item: "dried Italian herbs or thyme" },
      { amt: "1½ tsp", item: "salt" },
      { amt: "½ tsp", item: "cracked black pepper" },
      { amt: "2 tbsp", item: "fresh parsley, chopped, to serve" },
      { amt: "", item: "crusty bread or garlic bread to serve (for mopping up the sauce)" }
    ],
    steps: [
      { title: "Season the chicken", text: "Pat chicken dry and season all over with salt and pepper." },
      { title: "Sear the chicken", text: "Heat olive oil in a large oven-proof pan over high heat. Sear chicken 2–3 minutes per side until golden. You're after colour, not cooking through. Remove and set aside." },
      { title: "Parboil the potatoes and broccoli", text: "Bring a pot of salted water to the boil. Add potatoes and parboil 8–10 minutes until just tender. In the last 3–4 minutes, add broccoli to the same pot. Drain both together and set aside." },
      { title: "Preheat oven and soften the leek", text: "Preheat oven to 200°C. Reduce stovetop heat to medium. In the same pan, add leek and cook for 4–5 minutes until softened. Add garlic and cook 1–2 minutes." },
      { title: "Build the sauce", text: "Add Dijon mustard, stock and cream. Stir to combine and bring to a gentle simmer. Stir in parmesan and herbs. Check seasoning." },
      { title: "Combine", text: "Add drained potatoes and broccoli to the sauce and stir gently to coat. Nestle the chicken thighs back in, submerging them in the sauce." },
      { title: "Bake", text: "Transfer to the oven and bake at 200°C for 18–22 minutes, checking at the earlier end — boneless thigh cooks fast. Done when chicken is cooked through and sauce is bubbling." },
      { title: "Rest and serve", text: "Rest 5 minutes. Scatter with parsley and serve straight from the dish with crusty or garlic bread to mop up the sauce." }
    ],
    notes: "MAKE AHEAD: complete to the end of Step 6 (combined but not yet baked), cover and refrigerate. Take out 20–30 minutes before cooking. Add a few extra minutes to bake time since everything starts cold. DO NOT FREEZE — cream sauces split when thawed and potatoes go mealy and watery. Keeps in the fridge for up to 2 days — reheat covered with foil at 160°C for 12–15 minutes, adding a splash of cream or stock if sauce has thickened overnight. Leek gives a sweeter, more delicate flavour than onion in this dish. Boneless thighs cook noticeably faster than bone-in so keep a close eye on the bake time."
  },

  {
    id: "coconut-rough-freezer-fudge",
    title: "Coconut Rough / Freezer Fudge",
    category: "Snacks & Treats",
    description: "Four ingredients, no baking, sets in the freezer and eaten straight from frozen.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes approx 20 pieces", "No-Bake · Freezer"],
    ingredients: [
      { amt: "125 ml", item: "coconut oil, melted" },
      { amt: "120 g", item: "desiccated coconut" },
      { amt: "3 tbsp", item: "raw cacao powder" },
      { amt: "1 tsp", item: "vanilla extract" },
      { amt: "1 pinch", item: "salt" },
      { amt: "1 tbsp", item: "rice malt syrup or stevia (optional)" }
    ],
    steps: [
      { title: "Combine", text: "Mix all ingredients together until well combined. Will look very oily and wet — that's right." },
      { title: "Press into tin", text: "Line a small baking tray or loaf tin with baking paper. Pour in and press down evenly to about 1 cm thick." },
      { title: "Freeze", text: "Freeze 1–2 hours until completely set and firm." },
      { title: "Break and store", text: "Break or slice into pieces. Store in a freezer bag. Eat straight from frozen." }
    ],
    notes: "Firms up completely once frozen. Add a small handful of chopped nuts, pumpkin seeds or hemp seeds for extra texture. Keeps in the freezer for up to 3 months."
  },

  {
    id: "sugar-free-chocolate-bark",
    title: "Sugar-Free Chocolate Bark",
    category: "Snacks & Treats",
    description: "Melted chocolate poured thin and topped with nuts, seeds and coconut. Break off a piece whenever you need a snack.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes approx 16 shards", "No-Bake · Freezer"],
    ingredients: [
      { amt: "200 g", item: "90% dark chocolate (dairy free) OR cacao butter" },
      { amt: "3 tbsp", item: "raw cacao powder (only if using cacao butter)" },
      { amt: "1 tbsp", item: "stevia or rice malt syrup (only if using cacao butter)" },
      { amt: "80 g", item: "mixed nuts (almonds, macadamias, pistachios)" },
      { amt: "3 tbsp", item: "pumpkin or sunflower seeds" },
      { amt: "2 tbsp", item: "coconut flakes" },
      { amt: "1 pinch", item: "sea salt flakes" }
    ],
    steps: [
      { title: "Melt the chocolate", text: "Melt chocolate or cacao butter using a double boiler or microwave in 30-second bursts. If using cacao butter, stir in cacao powder and sweetener once melted." },
      { title: "Pour and spread", text: "Line a baking tray with baking paper. Pour chocolate and spread to about 3–4 mm thick." },
      { title: "Add toppings", text: "Scatter nuts, seeds, coconut flakes and salt over the surface. Press gently so they stick." },
      { title: "Freeze", text: "Freeze 30–60 minutes until completely set." },
      { title: "Break and store", text: "Break into shards. Store in a freezer bag in the freezer." }
    ],
    notes: "90% dark chocolate is easiest — check label is dairy free. For completely sugar free, use cacao butter + cacao powder + stevia. Any nuts and seeds work. Keeps in the freezer for up to 3 months."
  },

  {
    id: "nut-butter-cups",
    title: "Nut Butter Cups",
    category: "Snacks & Treats",
    description: "A chocolate shell with a creamy nut butter centre — kept in the freezer and eaten straight from frozen. Better than a Reese's.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 12 cups", "No-Bake · Freezer"],
    ingredients: [
      { amt: "", item: "— CHOCOLATE SHELL —" },
      { amt: "150 g", item: "90% dark chocolate (dairy free), roughly chopped" },
      { amt: "1 tbsp", item: "coconut oil" },
      { amt: "", item: "— FILLING —" },
      { amt: "120 g", item: "almond butter (or any nut butter, no added sugar — NOT peanut butter if serving to peanut allergy sufferers)" },
      { amt: "1 tbsp", item: "coconut oil" },
      { amt: "½ tsp", item: "vanilla extract" },
      { amt: "1 pinch", item: "salt" },
      { amt: "1 tsp", item: "stevia or rice malt syrup (optional)" }
    ],
    steps: [
      { title: "Melt the chocolate", text: "Melt chocolate and coconut oil together until smooth." },
      { title: "Make the chocolate shells", text: "Spoon 1 tsp melted chocolate into 12 mini muffin liners. Tilt to coat sides slightly. Freeze 10–15 minutes." },
      { title: "Make the filling", text: "Mix almond butter, coconut oil, vanilla, salt and sweetener until smooth." },
      { title: "Add the filling", text: "Spoon 1 tsp nut butter filling into each shell, pressing down gently." },
      { title: "Seal with chocolate", text: "Top each cup with another teaspoon of chocolate to completely seal. Tap tin on bench to level." },
      { title: "Freeze and store", text: "Freeze 30–60 minutes. Pop out and store in a freezer bag. Eat from frozen or after a few minutes at room temperature." }
    ],
    notes: "⚠️ ALLERGY NOTE: Georgia is allergic to peanuts — use almond butter or another tree nut/seed butter only. Silicone moulds make popping cups out much easier. Keeps in the freezer for up to 3 months."
  },

  {
    id: "nut-and-seed-bars",
    title: "Nut & Seed Bars",
    category: "Snacks & Treats",
    description: "Chunky, chewy no-bake bars packed with nuts, seeds and coconut — pressed flat, frozen and sliced.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 14 bars", "No-Bake · Freezer"],
    ingredients: [
      { amt: "185 g", item: "almond butter (or any nut butter, no added sugar)" },
      { amt: "2 tbsp", item: "coconut oil" },
      { amt: "1 tsp", item: "vanilla extract" },
      { amt: "¼ tsp", item: "salt" },
      { amt: "1 tbsp", item: "rice malt syrup or stevia (optional)" },
      { amt: "80 g", item: "pumpkin seeds" },
      { amt: "60 g", item: "sunflower seeds" },
      { amt: "60 g", item: "almonds, roughly chopped" },
      { amt: "60 g", item: "desiccated coconut" },
      { amt: "2 tbsp", item: "chia seeds" },
      { amt: "2 tbsp", item: "hemp seeds (optional)" },
      { amt: "3 tbsp", item: "cacao nibs or 90% dark chocolate chips (optional)" }
    ],
    steps: [
      { title: "Melt the binder", text: "Melt almond butter and coconut oil together in a small saucepan. Stir in vanilla, salt and sweetener." },
      { title: "Combine", text: "Add all seeds, nuts, coconut and optional extras to a large bowl. Pour warm butter mixture over and stir until coated." },
      { title: "Press into tin", text: "Line a loaf tin or small baking dish (approx 20 x 10 cm) with baking paper. Press down very firmly using the back of a spoon or flat-bottomed glass." },
      { title: "Freeze", text: "Freeze 1–2 hours until set." },
      { title: "Slice and store", text: "Slice into 14 bars. Wrap individually in baking paper. Store in a freezer bag in the freezer." }
    ],
    notes: "Pressing the mixture down very firmly is the key to bars that hold together. If too wet, add more seeds or coconut. If too dry, add more nut butter. Eat from frozen or thaw 5–10 minutes. Keeps in the freezer for up to 3 months."
  },

  {
    id: "bliss-energy-balls",
    title: "Bliss / Energy Balls",
    category: "Snacks & Treats",
    description: "No baking, no cooking — just mix, roll and freeze. A perfect little hit of chocolate and nut butter whenever you need one.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes approx 20 balls", "No-Bake · Freezer"],
    ingredients: [
      { amt: "250 g", item: "almond butter (or any nut butter, no added sugar)" },
      { amt: "90 g", item: "desiccated coconut" },
      { amt: "3 tbsp", item: "raw cacao powder" },
      { amt: "1 tsp", item: "vanilla extract" },
      { amt: "1 pinch", item: "salt" },
      { amt: "1 tbsp", item: "chia seeds (optional)" },
      { amt: "2 tbsp", item: "hemp seeds (optional)" },
      { amt: "1 tbsp", item: "rice malt syrup or stevia (optional)" },
      { amt: "2 tbsp", item: "extra desiccated coconut or cacao powder for rolling" },
      { amt: "1 tbsp", item: "coconut oil, melted (only if mixture is too dry)" }
    ],
    steps: [
      { title: "Mix", text: "Combine all ingredients in a bowl until well mixed. Should hold together when pressed. If too dry, add coconut oil. If too wet, add more desiccated coconut." },
      { title: "Roll into balls", text: "Scoop 1 tablespoon at a time and roll between palms into smooth balls." },
      { title: "Coat (optional)", text: "Roll each ball in extra coconut or cacao powder." },
      { title: "Chill", text: "Place on a lined tray. Refrigerate 30 minutes or freeze straight away." },
      { title: "Freeze and store", text: "Store in a freezer bag or container. Eat from frozen or after a couple of minutes at room temperature." }
    ],
    notes: "Roll some in coconut and some in cacao powder for variety. Keeps in the freezer for up to 3 months."
  },

  {
    id: "vanilla-cookie-dough-bites",
    title: "Vanilla Cookie Dough Bites",
    category: "Snacks & Treats",
    description: "Tastes remarkably like vanilla cookie dough — creamy cashew butter base with a generous hit of vanilla. Completely different to the bliss balls.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes approx 18 bites", "No-Bake · Freezer"],
    ingredients: [
      { amt: "250 g", item: "cashew butter, no added sugar (or blend raw cashews until smooth)" },
      { amt: "60 g", item: "desiccated coconut" },
      { amt: "1½ tsp", item: "vanilla extract" },
      { amt: "¼ tsp", item: "salt" },
      { amt: "1 tbsp", item: "coconut oil, melted" },
      { amt: "1 tbsp", item: "rice malt syrup or stevia (optional)" },
      { amt: "3 tbsp", item: "90% dark chocolate chips (optional — makes them taste like choc chip cookie dough)" }
    ],
    steps: [
      { title: "Mix the base", text: "Combine cashew butter, vanilla, salt, coconut oil and sweetener until smooth." },
      { title: "Add coconut and chocolate chips", text: "Stir in desiccated coconut. Fold in chocolate chips if using. If too soft to roll, refrigerate 15 minutes." },
      { title: "Roll into balls", text: "Scoop 1 tablespoon at a time and roll between palms." },
      { title: "Chill", text: "Refrigerate 30 minutes or freeze straight away." },
      { title: "Freeze and store", text: "Store in a freezer bag. Eat from frozen or after a couple of minutes at room temperature." }
    ],
    notes: "Cashew butter is the key — its mild, buttery flavour gives these the cookie dough taste. The vanilla is the hero — don't reduce it. The chocolate chips take these from great to genuinely impressive. Keeps in the freezer for up to 3 months. BAKED GOODS"
  },

  {
    id: "grain-free-banana-bread",
    title: "Grain-Free Banana Bread",
    category: "Breads & Bakes",
    description: "Moist, naturally sweet grain-free banana bread — sliced and frozen individually so you can grab one whenever you need it.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 1 loaf", "Baked · Oven at 170°C"],
    ingredients: [
      { amt: "250 g", item: "almond flour (not almond meal — finer grind gives a better result)" },
      { amt: "3", item: "very ripe bananas (lots of brown spots)" },
      { amt: "3", item: "eggs" },
      { amt: "3 tbsp", item: "coconut oil, melted" },
      { amt: "1 tsp", item: "vanilla extract" },
      { amt: "1 tsp", item: "bicarbonate of soda" },
      { amt: "1 tsp", item: "ground cinnamon" },
      { amt: "¼ tsp", item: "salt" },
      { amt: "60 g", item: "walnuts or pecans, roughly chopped (optional)" },
      { amt: "3 tbsp", item: "90% dark chocolate chips (optional)" }
    ],
    steps: [
      { title: "Preheat oven", text: "Preheat oven to 170°C. Grease and line a standard loaf tin with baking paper." },
      { title: "Mash the bananas", text: "Peel and mash bananas until as smooth as possible. The riper the banana, the sweeter the bread." },
      { title: "Add wet ingredients", text: "Add eggs, coconut oil and vanilla to mashed banana. Whisk until well combined." },
      { title: "Add dry ingredients", text: "Add almond flour, bicarb, cinnamon and salt. Fold gently until just combined. Don't overmix." },
      { title: "Add optional extras", text: "Fold in walnuts and chocolate chips if using." },
      { title: "Bake", text: "Pour into prepared tin. Bake at 170°C for 45–55 minutes until deep golden and a skewer comes out clean. Cover with foil after 30 minutes if browning too quickly." },
      { title: "Cool completely", text: "Cool in tin 10 minutes then transfer to wire rack. Do not slice while warm." },
      { title: "Slice and freeze", text: "Slice into 10–12 pieces. Wrap each slice individually. Store in a freezer bag. Thaw at room temperature 20–30 minutes, or toast from frozen." }
    ],
    notes: "Almond flour (not almond meal) gives a much lighter result. Make sure bananas are very ripe — this is where all the natural sweetness comes from. Keeps in the freezer for up to 3 months."
  },

  {
    id: "almond-flour-blueberry-muffins",
    title: "Almond Flour Blueberry Muffins",
    category: "Snacks & Treats",
    description: "Light, fluffy almond flour muffins bursting with blueberries — batch bake, individually freeze and grab one as you go.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 12 muffins", "Baked · Oven at 180°C"],
    ingredients: [
      { amt: "200 g", item: "almond flour" },
      { amt: "3", item: "eggs" },
      { amt: "3 tbsp", item: "coconut oil, melted" },
      { amt: "1 tsp", item: "vanilla extract" },
      { amt: "1½ tsp", item: "baking powder (GF)" },
      { amt: "½ tsp", item: "ground cinnamon" },
      { amt: "1 pinch", item: "salt" },
      { amt: "150 g", item: "blueberries, fresh or frozen" },
      { amt: "1", item: "lemon, zested (optional — really lifts the flavour)" },
      { amt: "1 tbsp", item: "rice malt syrup or pure maple syrup (optional)" }
    ],
    steps: [
      { title: "Preheat oven", text: "Preheat oven to 180°C. Line a 12-cup muffin tin with paper liners or use a silicone mould." },
      { title: "Mix wet ingredients", text: "Whisk eggs, coconut oil, vanilla and sweetener (if using) together." },
      { title: "Add dry ingredients", text: "Add almond flour, baking powder, cinnamon and salt. Add lemon zest if using. Fold gently until just combined." },
      { title: "Fold in blueberries", text: "Gently fold in blueberries. If using frozen, fold in straight from frozen." },
      { title: "Fill and bake", text: "Divide batter into 12 cups, about three-quarters full. Bake at 180°C for 20–25 minutes until golden." },
      { title: "Cool", text: "Cool in tin 5 minutes then transfer to wire rack. Cool completely before freezing." },
      { title: "Freeze", text: "Store in a freezer bag with baking paper between muffins. Thaw at room temperature 15–20 minutes or microwave 30–40 seconds from frozen." }
    ],
    notes: "If using frozen blueberries, fold in straight from frozen — do not thaw first or batter will turn blue. Lemon zest brightens the flavour beautifully. These are naturally sweet from the blueberries alone. Keeps in the freezer for up to 3 months."
  },

  {
    id: "sweet-potato-brownies",
    title: "Sweet Potato Brownies",
    category: "Snacks & Treats",
    description: "Rich, fudgy chocolate brownies made with sweet potato — genuinely indulgent while ticking every HWB box.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 16 squares", "Baked · Oven at 170°C"],
    ingredients: [
      { amt: "250 g", item: "sweet potato, cooked and mashed (approx 1 medium)" },
      { amt: "4 tbsp", item: "raw cacao powder" },
      { amt: "100 g", item: "almond flour" },
      { amt: "2", item: "eggs" },
      { amt: "3 tbsp", item: "coconut oil, melted" },
      { amt: "1 tsp", item: "vanilla extract" },
      { amt: "½ tsp", item: "bicarbonate of soda" },
      { amt: "¼ tsp", item: "salt" },
      { amt: "1 tbsp", item: "rice malt syrup (optional — taste batter first)" },
      { amt: "3 tbsp", item: "90% dark chocolate chips (optional)" }
    ],
    steps: [
      { title: "Preheat oven", text: "Preheat oven to 170°C. Line a 20 x 20 cm square baking tin with baking paper." },
      { title: "Cook and mash sweet potato", text: "Microwave sweet potato 5–6 minutes until completely soft. Scoop out flesh and mash until completely smooth." },
      { title: "Add wet ingredients", text: "Add eggs, coconut oil, vanilla and sweetener (if using) to mashed sweet potato. Whisk until smooth." },
      { title: "Add dry ingredients", text: "Add almond flour, cacao, bicarb and salt. Fold until combined. Fold in chocolate chips if using." },
      { title: "Bake", text: "Pour into prepared tin and spread evenly. Bake at 170°C for 20–25 minutes. A skewer should come out with just a few moist crumbs, not clean." },
      { title: "Cool, slice and freeze", text: "Cool completely in tin before slicing. Slice into 16 squares. Wrap individually. Store in a freezer bag. Thaw at room temperature 15–20 minutes." }
    ],
    notes: "These are meant to be fudgy, not cakey — don't overbake. They firm up significantly as they cool. The sweet potato provides natural sweetness — taste the batter before adding rice malt syrup. Even better the next day. Keeps in the freezer for up to 3 months."
  },

  {
    id: "coconut-macaroons",
    title: "Coconut Macaroons",
    category: "Snacks & Treats",
    description: "Three ingredients, golden and crispy on the outside, chewy in the middle. A completely different texture to everything else in the snack collection.",
    diet: ["Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes approx 16 macaroons", "Baked · Oven at 165°C"],
    ingredients: [
      { amt: "200 g", item: "desiccated coconut" },
      { amt: "3", item: "egg whites" },
      { amt: "1 tsp", item: "vanilla extract" },
      { amt: "1 pinch", item: "salt" },
      { amt: "1 tbsp", item: "stevia or rice malt syrup (optional)" }
    ],
    steps: [
      { title: "Preheat oven", text: "Preheat oven to 165°C. Line a large baking tray with baking paper." },
      { title: "Whisk egg whites", text: "Whisk egg whites until just frothy — not stiff peaks. Stir in vanilla, salt and sweetener if using." },
      { title: "Add coconut", text: "Fold in desiccated coconut gently until just combined." },
      { title: "Scoop and shape", text: "Scoop heaped tablespoon-sized mounds onto the tray. Leave space between each." },
      { title: "Bake", text: "Bake at 165°C for 15–18 minutes until golden all over." },
      { title: "Cool and freeze", text: "Cool completely on the tray — do not move while warm. Freeze in a single layer first, then transfer to a freezer bag once frozen." }
    ],
    notes: "Macaroons will feel soft straight from the oven but firm up completely as they cool. Always freeze in a single layer first so they don't stick together. Keeps in the freezer for up to 2 months."
  },

  {
    id: "psyllium-bread-rolls",
    title: "Psyllium Bread Rolls",
    category: "Breads & Bakes",
    description: "The psyllium loaf reshaped as rolls so they actually cook through in the Crispi — no flax needed, and sized to fit one batch.",
    diet: ["Grain-free", "Gluten-free", "Dairy-free", "Sugar-free", "Low carb"],
    meta: ["Makes 4 rolls", "Half batch", "Ninja Crispi"],
    ingredients: [
      { amt: "1¼ cups + 2½ tbsp", item: "almond meal (the extra replaces the flaxseed meal)" },
      { amt: "¼ cup", item: "coconut flour" },
      { amt: "3 tbsp", item: "psyllium husks" },
      { amt: "½ tbsp", item: "baking powder, heaped" },
      { amt: "½ tsp", item: "salt" },
      { amt: "¾ cup", item: "warm water, plus up to 2 tbsp more if needed" },
      { amt: "½ tsp", item: "apple cider vinegar" },
      { amt: "1 tbsp", item: "olive oil" },
      { amt: "", item: "Mixed seeds, optional — stir into the dry ingredients, not on top" }
    ],
    steps: [
      { title: "Mix the dry ingredients", text: "Combine the almond meal, coconut flour, psyllium, baking powder and salt in a mixing bowl. If using mixed seeds, add them here rather than sprinkling on top — the Crispi fan will scorch anything sitting on the surface." },
      { title: "Add the wet ingredients", text: "Add the warm water, vinegar and olive oil, and mix with a spoon until it comes together. Hold back a splash of the water at first — almond meal absorbs less than flax, so the dough can go sticky." },
      { title: "Knead gently", text: "Knead briefly with your hands until just combined. Do not overwork it or it will not rise well." },
      { title: "Rest the dough", text: "Set aside for 10 minutes so the psyllium absorbs the moisture. It firms up noticeably. If it still feels dry, work in the rest of the water." },
      { title: "Shape into pucks", text: "Divide into 4 and shape into flattened pucks about 3–4 cm thick — not balls. Flat is what lets the heat reach the centre in time. Sit them on baking paper on the crisper plate, poking a few holes in the paper so air can circulate underneath (this is what stops soggy bottoms)." },
      { title: "Bake on Roast", text: "Cook on Roast for 25–30 minutes, until deep golden and a skewer comes out clean. Lay a loose sheet of foil over the top at around the 10–12 minute mark to stop them over-browning." },
      { title: "Cool completely", text: "Transfer to a wire rack and cool completely before cutting. Psyllium bread is gummy while warm and sets as it cools — patience pays here." }
    ],
    notes: "If the bottoms come out soggy, give them 4–5 minutes upside-down on Roast. Do not reach for Keep Warm — at 80°C it cannot drive off moisture. Want all 8 rolls? Double it and cook in two batches; the resting dough sits happily on the bench. Rolls freeze individually, so you can pull out one or two at a time. Reheat on Recrisp for 3–4 minutes from the fridge, or split and toast cut-side up."
  },

  {
    id: "seeded-almond-and-psyllium-loaf",
    title: "Seeded Almond & Psyllium Loaf",
    category: "Breads & Bakes",
    description: "A grain-free, high-fibre seeded loaf that slices properly and toasts beautifully — the one to bake when you want actual bread.",
    diet: ["Grain-free", "Gluten-free", "Sugar-free", "Low carb"],
    meta: ["Makes 1 loaf", "Approx 12 slices", "Oven at 170°C"],
    ingredients: [
      { amt: "2 cups", item: "almond meal" },
      { amt: "¼ cup", item: "psyllium husk" },
      { amt: "3 tbsp", item: "chia seeds" },
      { amt: "¼ cup", item: "mixed seeds (pepitas, sunflower, sesame)" },
      { amt: "1½ tsp", item: "baking powder" },
      { amt: "½ tsp", item: "salt" },
      { amt: "5", item: "large eggs" },
      { amt: "¼ cup", item: "Greek yogurt" },
      { amt: "2 tbsp", item: "olive oil or melted coconut oil" },
      { amt: "1 tsp", item: "apple cider vinegar" }
    ],
    steps: [
      { title: "Preheat", text: "Preheat the oven to 170°C. Line a small loaf tin with baking paper." },
      { title: "Mix dry ingredients", text: "In a large bowl, mix the almond meal, psyllium, chia, mixed seeds, baking powder and salt until well combined." },
      { title: "Combine wet and dry", text: "In a separate bowl, whisk the eggs, yogurt, oil and vinegar together, then pour into the dry mix and stir until it forms a thick, sticky dough." },
      { title: "Rest the dough", text: "Let it sit for 5 minutes — the psyllium and chia will thicken it noticeably. This step is essential for the structure, so do not rush it." },
      { title: "Bake", text: "Scrape into the tin, smooth the top and sprinkle with extra seeds. Bake for 45–50 minutes until deep golden and a skewer comes out clean." },
      { title: "Cool completely", text: "Cool completely in the tin before slicing — cutting it warm makes it gummy." }
    ],
    notes: "The vinegar reacts with the baking powder for a better rise — do not skip it. Keeps 4–5 days in the fridge, or slice and freeze and toast straight from frozen. In the Ninja Crispi, use a small loaf tin (or split between two ramekin-sized tins), cook on Roast and check from about 30 minutes. Best eaten toasted with smashed avo and a fried egg, or butter and cinnamon."
  },

  {
    id: "salted-nut-butter-caramel-slice",
    title: "Salted Nut Butter \"Caramel\" Slice",
    category: "Snacks & Treats",
    description: "A no-bake three-layer caramel slice — biscuity coconut base, soft salted nut-butter caramel, dark chocolate top. No condensed milk, no sugar, no oven.",
    diet: ["Grain-free", "Gluten-free", "Dairy-free", "Sugar-free"],
    meta: ["Makes 16 squares", "No-bake", "Freezer"],
    ingredients: [
      { amt: "", item: "— BASE —" },
      { amt: "150 g", item: "almond flour (almond meal)" },
      { amt: "40 g", item: "desiccated coconut" },
      { amt: "3 tbsp", item: "coconut oil, melted" },
      { amt: "1 tbsp", item: "monk fruit syrup or rice malt syrup" },
      { amt: "1 pinch", item: "salt" },
      { amt: "", item: "— CARAMEL —" },
      { amt: "250 g", item: "smooth natural almond butter (or any nut butter, no added sugar)" },
      { amt: "4 tbsp", item: "coconut oil, melted" },
      { amt: "4 tbsp", item: "monk fruit syrup or rice malt syrup" },
      { amt: "1 tsp", item: "vanilla extract" },
      { amt: "½ tsp", item: "fine salt" },
      { amt: "", item: "— CHOCOLATE TOP —" },
      { amt: "150 g", item: "dark chocolate, 85%+ dairy-free, chopped" },
      { amt: "1 tbsp", item: "coconut oil" },
      { amt: "¼ tsp", item: "flaky salt, to finish" }
    ],
    steps: [
      { title: "Line the tin", text: "Line an 18–20 cm square tin with baking paper, leaving an overhang on two sides so you can lift the slice out later." },
      { title: "Make the base", text: "Mix the almond flour, desiccated coconut, melted coconut oil, syrup and pinch of salt into a crumbly dough that holds together when pressed. Tip into the tin and press down firmly and evenly with the back of a spoon." },
      { title: "Chill the base", text: "Freeze the base for about 15 minutes while you make the caramel, so it firms up." },
      { title: "Make the caramel", text: "Whisk the nut butter, melted coconut oil, syrup, vanilla and fine salt until smooth, glossy and pourable. If the nut butter is stiff, warm the mixture gently for 20–30 seconds. Taste and add a touch more syrup if you want it sweeter." },
      { title: "Pour and set", text: "Pour the caramel over the chilled base and smooth the top. Return to the freezer for 30 minutes until firm to the touch." },
      { title: "Add the chocolate top", text: "Melt the dark chocolate with the tablespoon of coconut oil, stirring until glossy. Pour over the set caramel, tilt the tin to spread it evenly, and scatter with flaky salt." },
      { title: "Freeze and slice", text: "Freeze for at least an hour until fully set. Lift out using the paper overhang and slice into 16 squares — a hot knife gives the cleanest cut through the chocolate." }
    ],
    notes: "Peanut butter gives a deeper, more classic caramel flavour; almond butter is milder and more delicate. Keep the squares in the freezer and eat straight from frozen, or give them a couple of minutes at room temperature for a softer caramel. Keeps up to 3 months."
  },

  {
    id: "mediterranean-chicken-skillet",
    title: "Mediterranean Chicken Skillet",
    category: "Dinners",
    description: "Bright, herby and lemony — a complete change of direction from the coconut and curry dishes. All done in one pan on the stovetop.",
    diet: ["Grain-free", "Gluten-free", "Sugar-free", "Low carb"],
    meta: ["Serves 6", "Cook 35 min", "One skillet"],
    ingredients: [
      { amt: "1.2 kg", item: "chicken thighs (or breast — see note)" },
      { amt: "2 tbsp", item: "olive oil" },
      { amt: "1", item: "red onion, sliced" },
      { amt: "4", item: "garlic cloves, crushed" },
      { amt: "300 g", item: "green beans, trimmed (or 2 red capsicums, sliced)" },
      { amt: "2", item: "zucchini, cut into thick half-moons" },
      { amt: "400 g", item: "cherry tomatoes, left whole" },
      { amt: "½ cup", item: "kalamata olives, pitted" },
      { amt: "125 ml", item: "gluten-free chicken stock" },
      { amt: "1", item: "lemon, zested and juiced" },
      { amt: "2 tsp", item: "dried oregano" },
      { amt: "1 tsp", item: "dried thyme" },
      { amt: "1 tsp", item: "smoked paprika" },
      { amt: "½ tsp", item: "chilli flakes (optional)" },
      { amt: "1½ tsp", item: "salt, ½ tsp black pepper" },
      { amt: "100 g", item: "baby spinach" },
      { amt: "½ cup", item: "fresh basil, torn, and 2 tbsp parsley, chopped" }
    ],
    steps: [
      { title: "Sear the chicken", text: "Pat the chicken dry and season with half the salt and the pepper. Heat the oil in a large deep skillet over medium-high and sear until golden on both sides — it won't be cooked through yet. Set aside." },
      { title: "Soften the onion", text: "Lower the heat and cook the onion until softening, about 5 minutes. Stir in the garlic, oregano, thyme, paprika and chilli flakes and cook 1 minute until fragrant." },
      { title: "Burst the tomatoes", text: "Add the cherry tomatoes (whole), the stock and the lemon juice. Simmer a few minutes, pressing the tomatoes against the side of the pan so they burst and form a sauce." },
      { title: "Simmer with zucchini", text: "Nestle the chicken back in with any resting juices. Add the zucchini and olives, season with the remaining salt to taste, cover and simmer for 10 minutes." },
      { title: "Add the beans", text: "Add the green beans, cover again, and simmer another 10 minutes until the chicken is cooked through and the beans are tender-crisp." },
      { title: "Finish and serve", text: "Stir the spinach through until just wilted. Finish with the lemon zest, basil and parsley and serve." }
    ],
    notes: "> *Expect a light, brothy tomato sauce rather than a thick one. For a > thicker sauce, take the lid off for the last 5–10 minutes and press > more of the tomatoes down. For saucier, add extra stock or a second > tin of tomatoes.* > > *Using breast: sear it, pull it out, and only return it for the final > 10 minutes so it doesn't dry out.* > > *Capsicum, eggplant, mushrooms or fennel all work in place of the > green beans — add those earlier, with the onion, since they take > longer to soften.* > > *Serve over cauliflower rice or with a green salad to soak up the > juices. Keeps about 3 days."
  },

  {
    id: "coconut-spiced-chicken-and-cauliflower-tray-bake",
    title: "Coconut-Spiced Chicken & Cauliflower Tray Bake",
    category: "Dinners",
    description: "A filling, one-tray dinner. Rich, mildly spiced and comforting — the cauliflower does the heavy lifting so the potato can stay modest.",
    diet: ["Grain-free", "Gluten-free", "Sugar-free", "Low carb"],
    meta: ["Serves 6", "Cook 50 min", "One tray"],
    ingredients: [
      { amt: "1.3 kg", item: "chicken thighs (or 1.2 kg breast — see note)" },
      { amt: "900 g", item: "cauliflower, cut into florets (about 1 large head)" },
      { amt: "600 g", item: "potato, cut into 2 cm chunks" },
      { amt: "2", item: "medium red onions, cut into wedges" },
      { amt: "400 ml", item: "full-fat coconut milk" },
      { amt: "4", item: "garlic cloves, crushed" },
      { amt: "1 tbsp", item: "fresh ginger, grated" },
      { amt: "2 tbsp", item: "tomato paste (sugar-free)" },
      { amt: "3 tbsp", item: "olive oil" },
      { amt: "3 tsp", item: "ground cumin" },
      { amt: "3 tsp", item: "ground coriander" },
      { amt: "1½ tsp", item: "ground turmeric" },
      { amt: "3 tsp", item: "smoked paprika" },
      { amt: "1 tsp", item: "garam masala" },
      { amt: "2½--3 tsp", item: "salt (split between the veg and the chicken)" },
      { amt: "½ tsp", item: "black pepper" },
      { amt: "½ tsp", item: "chilli flakes (optional)" },
      { amt: "1", item: "lemon or lime, juiced, plus wedges to serve" },
      { amt: "100 g", item: "baby spinach" },
      { amt: "1 cup", item: "fresh coriander, roughly chopped" }
    ],
    steps: [
      { title: "Preheat", text: "Preheat the oven to 200°C fan (220°C conventional). Use the biggest roasting tray you have — crowding makes the veg steam instead of roast." },
      { title: "Roast the veg", text: "Toss the potato, cauliflower and onion on the tray with the olive oil, half the cumin, half the coriander, the turmeric, half the paprika, about 1½ tsp of the salt and the pepper. Spread in a single layer and roast for 25 minutes." },
      { title: "Season the chicken", text: "Meanwhile, toss the chicken with the remaining cumin, coriander and paprika, plus the garam masala, chilli flakes and the remaining salt." },
      { title: "Make the coconut sauce", text: "Whisk together the coconut milk, garlic, ginger, tomato paste and the lemon or lime juice." },
      { title: "Add sauce and chicken", text: "Pull the tray out and pour the coconut sauce over the veg. Nestle the chicken down into the sauce so it sits coated and partly in the liquid — this is what keeps it moist." },
      { title: "Finish roasting", text: "Roast for a further 22--28 minutes (thighs: 35--40 min), until the chicken is cooked through. For breast, pull it at 70°C internal — it rises to 74°C as it rests, and it dries fast once past done." },
      { title: "Wilt and serve", text: "Scatter the spinach over the hot tray and stir gently until just wilted. Top with fresh coriander and serve with lemon or lime wedges." }
    ],
    notes: "> Breast vs thigh: thighs are more forgiving. If using breast, cut it > into large chunks (small pieces overcook fast) and give the veg the > full 25-minute head start so the chicken spends less time in the > oven. > > Lemon works perfectly in place of lime. It won't curdle the coconut > milk — coconut has almost no casein, so there's nothing for the > acid to coagulate. The sauce may 'split' slightly as the oil > separates, which is normal in curries; a stir brings it back. > > Sweet potato can go in at the same time as the regular potato. To > keep it lower-carb, swap rather than add — say 300 g of each. > > Adding zucchini? Add it in with the chicken, not at the start, and > cut it chunky — it's mostly water and will collapse and flood the > tray if it goes in early. > > Reheat gently on the stovetop with a splash of water or coconut milk > to loosen the sauce. Leftovers keep about 3 days."
  },

  {
    id: "dairy-free-cottage-pie-with-cauliflower-mash",
    title: "Dairy-Free Cottage Pie with Cauliflower Mash",
    category: "Dinners",
    description: "Proper comfort food, and a crowd-pleaser. The mushrooms and grated carrot quietly bulk out the filling so a kilo of mince genuinely feeds six.",
    diet: ["Grain-free", "Gluten-free", "Sugar-free", "Low carb"],
    meta: ["Serves 6", "Cook 1 hr", "One baking dish"],
    ingredients: [
      { amt: "", item: "— FILLING —" },
      { amt: "1 kg", item: "beef mince" },
      { amt: "2 tbsp", item: "olive oil" },
      { amt: "1", item: "brown onion, finely diced" },
      { amt: "3", item: "garlic cloves, crushed" },
      { amt: "2", item: "carrots, grated" },
      { amt: "2", item: "celery stalks, finely diced" },
      { amt: "250 g", item: "mushrooms, finely chopped" },
      { amt: "2 tbsp", item: "tomato paste (sugar-free)" },
      { amt: "400 g", item: "crushed tomatoes (sugar-free)" },
      { amt: "250 ml", item: "gluten-free beef stock" },
      { amt: "1 tbsp", item: "tamari or coconut aminos" },
      { amt: "1 tsp", item: "dried thyme" },
      { amt: "1 tsp", item: "dried oregano" },
      { amt: "2", item: "bay leaves" },
      { amt: "1½ tsp", item: "salt, ½ tsp black pepper" },
      { amt: "", item: "— MASH —" },
      { amt: "1", item: "large cauliflower (about 1 kg), cut into florets" },
      { amt: "300 g", item: "potato, peeled and chopped (optional, for a fluffier mash)" },
      { amt: "2 tbsp", item: "olive oil" },
      { amt: "1", item: "garlic clove, crushed" },
      { amt: "2 tbsp", item: "nutritional yeast (optional, for a cheesy note)" },
      { amt: "¾ tsp", item: "salt" },
      { amt: "2 tbsp", item: "fresh parsley, chopped, to serve" }
    ],
    steps: [
      { title: "Boil the cauliflower", text: "Bring a large pot of salted water to the boil and add the cauliflower (and potato, if using). Simmer until very tender, about 15 minutes." },
      { title: "Brown the mince", text: "Meanwhile, heat the oil in a large pan over high heat and brown the mince in batches, breaking it up, until well coloured. Season with half the salt and the pepper, then set aside." },
      { title: "Cook the veg", text: "In the same pan, lower the heat and cook the onion, carrot, celery and mushrooms until soft and the mushroom liquid has cooked off, about 8 minutes. Stir in the garlic and tomato paste and cook 1 minute more." },
      { title: "Simmer the filling", text: "Return the beef to the pan with the crushed tomatoes, stock, tamari, thyme, oregano, bay leaves and remaining salt. Simmer uncovered until thick and saucy, about 20 minutes. Remove the bay leaves." },
      { title: "Make the mash", text: "Drain the cauliflower well and let it steam-dry in the colander for a few minutes — this matters. Tip back into the pot and mash with the olive oil, garlic, nutritional yeast and salt." },
      { title: "Assemble", text: "Preheat the oven to 200°C fan. Spread the filling into a large baking dish. Dollop the mash over the top in spoonfuls, then spread and join them up from the edges inward so it doesn't sink in. Rough the surface with a fork so it crisps." },
      { title: "Bake and serve", text: "Bake for 25--30 minutes until golden and bubbling at the edges. Rest 5 minutes, then scatter with parsley and serve." }
    ],
    notes: "> Drain the cauliflower really well before mashing. It holds a lot of > water and a wet mash won't hold its shape on top. > > No need to cool the filling before topping it — assemble hot and > bake straight away. Only cool it first if you're refrigerating it to > bake later. If the filling looks runny, simmer a couple more minutes > to thicken so the mash doesn't sink. > > Regular mashed potato works in place of the cauliflower mash if > you'd rather — it just lifts the carb count. > > Freezes well. Keeps about 3 days in the fridge."
  },

  {
    id: "chunky-chicken-potato-and-broccolini-soup",
    title: "Chunky Chicken, Potato & Broccolini Soup",
    category: "Dinners",
    description: "Brothy and warming, and the most forgiving way to cook lean chicken — it poaches gently right in the broth, so it can't dry out.",
    diet: ["Grain-free", "Gluten-free", "Sugar-free", "Low carb"],
    meta: ["Serves 6", "Cook 40 min", "One pot"],
    ingredients: [
      { amt: "800 g", item: "chicken breast (or 1.1 kg tenderloins / stir-fry strips — see note)" },
      { amt: "2 tbsp", item: "olive oil" },
      { amt: "1", item: "brown onion, diced" },
      { amt: "4", item: "garlic cloves, crushed" },
      { amt: "2", item: "carrots, diced" },
      { amt: "2", item: "celery stalks, diced" },
      { amt: "500 g", item: "potato, cut into 1.5 cm dice" },
      { amt: "1.5 L", item: "gluten-free chicken broth" },
      { amt: "2 bunches", item: "broccolini, cut into 3 cm lengths" },
      { amt: "2", item: "bay leaves" },
      { amt: "1 tsp", item: "dried thyme" },
      { amt: "½ tsp", item: "chilli flakes (optional)" },
      { amt: "1", item: "lemon, juiced" },
      { amt: "100 g", item: "baby spinach (optional)" },
      { amt: "1½ tsp", item: "salt, ½ tsp black pepper" },
      { amt: "¼ cup", item: "fresh parsley or dill, chopped, to serve" }
    ],
    steps: [
      { title: "Soften the base", text: "Heat the oil in a large pot over medium heat and cook the onion, carrot and celery until softened, about 7 minutes. Stir in the garlic, thyme and chilli flakes and cook 1 minute until fragrant." },
      { title: "Add broth and potato", text: "Add the broth, potato and bay leaves. Bring to a gentle simmer and cook until the potato is just starting to turn tender, about 10 minutes." },
      { title: "Poach the chicken", text: "Lower the chicken breasts in whole, making sure they're submerged. Poach gently — never a hard boil — until cooked through, about 12--15 minutes." },
      { title: "Shred and return", text: "Lift the chicken out, shred with two forks, and return it to the pot. Discard the bay leaves." },
      { title: "Add the greens", text: "Add the broccolini and simmer until tender-crisp, about 4 minutes. Stir the spinach through to wilt, then add the lemon juice. Season, tasting as you go — the broth is already salty." },
      { title: "Serve", text: "Ladle into bowls and finish with the parsley or dill." }
    ],
    notes: "> Using tenderloins or stir-fry strips: they're thin and cook much > faster than whole breasts. Drop tenderloins into the gently simmering > broth for about 5 minutes, then add stir-fry strips for a final 3 > minutes, just until no longer pink. Strips are already bite-sized so > they can stay in the pot; break the tenderloins up against the side > with a spoon. Err on the side of pulling them early — thin cuts go > from done to dry quickly. > > Keep it at a gentle simmer while the chicken poaches. A rolling boil > is what makes lean chicken tough. > > The broccolini goes in right at the end so it stays bright green > rather than khaki and soft. > > Keeps about 3 days and the flavour deepens overnight."
  },

  {
    id: "ginger-garlic-chicken-and-broccolini-stir-fry",
    title: "Ginger-Garlic Chicken & Broccolini Stir-Fry",
    category: "Dinners",
    description: "Fast and high-heat. The velveting step is the secret to takeaway-tender chicken breast — it solves the dry-breast problem at the source.",
    diet: ["Grain-free", "Gluten-free", "Sugar-free", "Low carb"],
    meta: ["Serves 6", "Cook 15 min", "One wok"],
    ingredients: [
      { amt: "1 kg", item: "chicken breast, thinly sliced" },
      { amt: "1½ tsp", item: "bicarb soda (baking soda), for velveting" },
      { amt: "2 tbsp", item: "high-heat oil (olive or avocado)" },
      { amt: "1 tbsp", item: "sesame oil" },
      { amt: "2 bunches", item: "broccolini, cut into 4 cm lengths" },
      { amt: "1", item: "carrot, julienned" },
      { amt: "1", item: "brown onion, sliced" },
      { amt: "4", item: "garlic cloves, crushed" },
      { amt: "1 tbsp", item: "fresh ginger, grated" },
      { amt: "½ tsp", item: "chilli flakes or fresh chilli (optional)" },
      { amt: "125 ml", item: "gluten-free chicken broth" },
      { amt: "3 tbsp", item: "tamari or coconut aminos" },
      { amt: "1 tbsp", item: "rice vinegar (or lemon juice)" },
      { amt: "2 tsp", item: "arrowroot or tapioca flour (optional, to thicken)" },
      { amt: "1 tbsp", item: "sesame seeds and 2 spring onions, sliced, to serve" }
    ],
    steps: [
      { title: "Velvet the chicken", text: "Toss the sliced chicken with the bicarb soda and leave for 15--20 minutes. This is the velveting step — it tenderises the lean breast so it stays silky under high heat." },
      { title: "Rinse and dry", text: "Rinse the chicken thoroughly under cold water — don't skip this, leftover bicarb tastes soapy — and pat very dry with paper towel." },
      { title: "Mix the sauce", text: "Whisk together the broth, tamari, vinegar and arrowroot (if using) and set aside." },
      { title: "Sear the chicken", text: "Heat the oil in a wok or large pan over high heat until almost smoking. Sear the chicken in two batches so it doesn't crowd, until golden and just cooked. Remove and set aside." },
      { title: "Stir-fry the veg", text: "Add the sesame oil with the onion, carrot and broccolini. Stir-fry over high heat for 3--4 minutes, adding a splash of water if needed, until tender-crisp. Add the garlic, ginger and chilli and toss for 30 seconds." },
      { title: "Bring it together", text: "Return the chicken to the pan, pour in the sauce, and toss for 1--2 minutes until everything is glossy and coated." },
      { title: "Serve", text: "Scatter with sesame seeds and spring onion and serve straight away." }
    ],
    notes: "> High heat, and don't crowd the pan. Cook the chicken in two batches > or it steams and turns grey instead of searing. > > Cooking ahead? Undercook the broccolini slightly and pull the chicken > the moment it's done — both keep cooking on reheating. Reheat fast > and hot in a pan rather than the microwave, and hold back the sesame > seeds and spring onion until serving. > > Any quick-cooking veg works here — capsicum, snow peas, mushrooms > — added with the broccolini. > > Serve over cauliflower rice to keep it low-carb. Go easy on extra > salt, as the tamari is salty."
  }

  /* -- paste new recipes here -- */

];
