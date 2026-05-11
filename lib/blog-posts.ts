export type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; text: string }
  | { type: 'cta'; heading: string; body: string; btnText: string; href: string };

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  publishDate: string;
  readTime: string;
  excerpt: string;
  keywords: string[];
  content: ContentBlock[];
  relatedPosts: string[];
  relatedServices: { name: string; href: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-often-chimney-cleaning',
    title: 'How Often Should You Clean Your Chimney? A Boston Guide',
    metaTitle: 'How Often Should You Clean Your Chimney? | Above Services Boston',
    metaDescription: "The NFPA recommends annual chimney cleaning — but the real frequency depends on how you use your fireplace. Here's what Boston homeowners need to know about creosote and cleaning schedules.",
    category: 'Maintenance',
    publishDate: 'September 15, 2024',
    readTime: '5 min read',
    excerpt: "The NFPA says annually — but the right frequency depends on how often you burn, what you burn, and how old your flue is. Here's what Boston homeowners should know.",
    keywords: ['chimney cleaning Boston', 'how often clean chimney', 'annual chimney cleaning MA', 'chimney sweep Boston', 'creosote removal Boston'],
    relatedPosts: ['chimney-inspection-levels-explained', 'chimney-liner-types-explained', 'fireplace-safety-guide-boston'],
    relatedServices: [
      { name: 'Chimney Cleaning', href: '/chimney-cleaning' },
      { name: 'Chimney Inspection', href: '/chimney-inspection' },
    ],
    content: [
      {
        type: 'p',
        text: "If you have a working fireplace in Boston, you've probably wondered how often you actually need to clean the chimney. The short answer: once a year, before heating season. That's the NFPA 211 standard, and most fire marshals in Massachusetts will tell you the same. But the real answer is a bit more specific to how you use your fireplace.",
      },
      { type: 'h2', text: 'Why Annual Cleaning Matters' },
      {
        type: 'p',
        text: "Every time you burn wood, a byproduct called creosote deposits on the inside of your flue. Creosote is flammable. At Stage 1 — light, dusty buildup — it brushes out easily. At Stage 2 or 3, it's a thick, tar-like coating or hardened glaze that's much harder to remove and significantly more dangerous. Chimney fires from ignited creosote can reach temperatures over 2,000°F. They often burn quietly, with no visible flames outside the chimney — homeowners sometimes don't realize one happened until an inspector finds the damage.",
      },
      {
        type: 'callout',
        text: "The NFPA recommends chimneys be inspected at least once a year and cleaned when necessary. If you're burning regularly through a Boston winter, cleaning is almost always necessary.",
      },
      { type: 'h2', text: 'What Actually Affects How Often You Need It' },
      { type: 'h3', text: 'How Frequently You Burn' },
      {
        type: 'p',
        text: "A fireplace used three or four nights a week from November through March is going to accumulate significant creosote. One used a handful of times per season might be fine with an annual cleaning. But even light users need an annual inspection — chimney problems like cracked crowns, animal intrusion, and failing liner sections have nothing to do with how much you burn.",
      },
      { type: 'h3', text: "What You're Burning" },
      {
        type: 'p',
        text: "Unseasoned wood — wood that hasn't dried for at least a year — produces significantly more creosote than properly dried hardwood. If you've been buying firewood from a gas station or hardware store without knowing its moisture content, you're likely building up creosote faster than you think. Hardwoods like oak, maple, and ash, split and dried properly, burn hotter and cleaner. Softwoods like pine are resinous and contribute more to buildup.",
      },
      { type: 'h3', text: 'How You Manage the Fire' },
      {
        type: 'p',
        text: "Smoldering fires — low airflow, lots of smoke, slow burns — produce substantially more creosote than hot, well-ventilated fires. If you habitually close the damper down early or let fires die out slowly, you're creating ideal conditions for creosote buildup.",
      },
      { type: 'h2', text: 'What Happens When You Skip Cleanings' },
      {
        type: 'p',
        text: "Beyond the fire risk, heavy creosote restricts airflow in the flue. That restriction causes drafting problems — smoke backs up into the room instead of drawing up and out. We see this regularly in older Boston homes, particularly colonials in Newton and Brookline and triple-deckers in Dorchester and Somerville, where the original flue design was already marginal for modern use.",
      },
      { type: 'h2', text: 'What a [[Chimney Cleaning|/chimney-cleaning]] Includes' },
      {
        type: 'p',
        text: "A standard cleaning involves brushing the flue with rotary or hand brushes to remove creosote, followed by a Level 1 inspection of the firebox, damper, smoke shelf, visible liner sections, and chimney cap. We photograph what we find and walk you through it before leaving. The job takes about an hour. We use drop cloths and a HEPA vacuum — you shouldn't be cleaning soot off your furniture afterward.",
      },
      { type: 'h2', text: 'A Note for Older Boston Homes' },
      {
        type: 'p',
        text: "Boston's older housing stock — Victorians in Jamaica Plain, colonials in Arlington, triple-deckers throughout the metro area — frequently has original clay tile liner systems that are 50 to 80 years old. Clay tile is more prone to cracking than modern stainless steel liners, and the only way to catch deterioration before it becomes a safety issue is annual inspection. Boston winters also hammer exterior chimney components. The freeze-thaw cycle opens mortar joints, cracks crowns, and spalls brick — none of which is visible from inside the house.",
      },
      {
        type: 'cta',
        heading: 'Book Your Annual Cleaning',
        body: "Most Boston homeowners schedule in September or October — before they need the fireplace. We're usually booked out a few weeks during peak season, so don't wait.",
        btnText: 'Schedule a Cleaning',
        href: '/chimney-cleaning',
      },
    ],
  },

  {
    slug: 'common-chimney-repair-problems-boston',
    title: '7 Chimney Problems We See in Boston Homes Every Year',
    metaTitle: '7 Common Chimney Repair Problems in Boston | Above Services',
    metaDescription: "Boston winters are hard on chimneys. Here are the seven repair issues our crew sees most often across Greater Boston — and what each one means for your home.",
    category: 'Repairs',
    publishDate: 'October 1, 2024',
    readTime: '6 min read',
    excerpt: "From spalling brick to cracked liners, Boston winters create a predictable set of chimney problems. Here's what to watch for — and when each one needs attention.",
    keywords: ['chimney repair Boston', 'chimney problems Boston MA', 'spalling brick chimney', 'chimney mortar repair Boston', 'chimney flashing repair'],
    relatedPosts: ['chimney-inspection-levels-explained', 'when-does-chimney-need-rebuilding', 'chimney-leaking-causes-fixes'],
    relatedServices: [
      { name: 'Chimney Repair', href: '/chimney-repair' },
      { name: 'Chimney Inspection', href: '/chimney-inspection' },
    ],
    content: [
      {
        type: 'p',
        text: "After a Boston winter, we do a lot of spring inspections. The same problems come up year after year — some minor, some urgent. Here are the seven we see most often, and what they mean.",
      },
      { type: 'h2', text: '1. Spalling Brick' },
      {
        type: 'p',
        text: "Spalling is when the face of a brick breaks off and falls away. It's caused by water that's absorbed into the masonry, frozen, and expanded — a cycle that happens dozens of times in a Boston winter. You'll notice it as brick faces on the ground near the house, or rough, pitted surfaces when you look at the chimney from the roof.",
      },
      {
        type: 'p',
        text: "Mild spalling on a few bricks can be arrested by sealing the masonry and replacing the affected units. When it's widespread across the top courses, a partial rebuild may be more economical than individual brick replacement. Ignoring it means the deterioration continues, and what's a few-hundred-dollar repair today becomes a much larger project.",
      },
      { type: 'h2', text: '2. Deteriorating Mortar Joints' },
      {
        type: 'p',
        text: "The mortar between bricks weathers faster than the brick itself. Over time, it recedes, crumbles, or washes out entirely. Tuckpointing — cutting out deteriorated mortar and packing in fresh mix — is one of the most common [[chimney repairs|/chimney-repair]] we do. When caught at the right stage, it's straightforward. When open joints are left too long, water enters the chimney structure and accelerates brick damage.",
      },
      { type: 'h2', text: '3. Cracked Chimney Crown' },
      {
        type: 'p',
        text: "The crown is the concrete or mortar cap covering the top of the chimney around the flue opening. It's designed to shed water away from the masonry. In Boston, freeze-thaw cycles open small cracks in crowns every year. Surface cracks in an otherwise solid crown can be sealed with a penetrating sealer. A crown that's broken into sections needs to be rebuilt.",
      },
      {
        type: 'callout',
        text: "A chimney crown repair costs $200–$400. Left unaddressed, the water damage it allows can turn into a $3,000+ structural repair. It's the most cost-effective maintenance item on most chimneys.",
      },
      { type: 'h2', text: '4. Damaged or Failed Flashing' },
      {
        type: 'p',
        text: "Flashing is the metal seal at the chimney-roofline junction. When flashing fails, water runs directly into the wall or attic cavity around the chimney. The symptom is water stains on ceilings or walls near the fireplace — and most homeowners assume the chimney itself is leaking when it's actually the flashing. Flashing repair is usually cheaper than chimney masonry work.",
      },
      { type: 'h2', text: '5. Missing or Damaged Chimney Cap' },
      {
        type: 'p',
        text: "A chimney cap covers the flue opening and keeps rain, snow, animals, and debris out. Caps typically last 15–20 years; we see more cap failures in Boston than elsewhere because ice and freeze-thaw conditions are hard on galvanized steel. When a cap is cracked, rusted through, or missing, you get water inside the flue and frequently animal nesting material blocking the flue. [[Chimney cap installation|/chimney-cap-installation]] is usually a same-day job.",
      },
      { type: 'h2', text: '6. Liner Damage' },
      {
        type: 'p',
        text: "The flue liner is the interior surface of the chimney — the channel combustion gases travel through. Clay tile liners in older homes crack from thermal shock, chimney fires, or just age. A cracked liner means combustion gases (including carbon monoxide) can leak into the house structure. Liner damage isn't visible without a camera, which is why [[Level 2 inspection|/chimney-inspection]] with video matters for any home over 20 years old.",
      },
      { type: 'h2', text: '7. Smoke Shelf Deterioration' },
      {
        type: 'p',
        text: "The smoke shelf is the ledge at the base of the smoke chamber, just above the firebox opening. It collects debris, soot, and water. When it deteriorates through moisture damage or wear, it can contribute to draft problems and smoke spillback into the room. It's often identified during cleaning and can usually be addressed during a repair visit.",
      },
      {
        type: 'cta',
        heading: "Not Sure What's Wrong With Your Chimney?",
        body: "An inspection is the right starting point. We find the problem, explain it clearly, and quote you before any work begins.",
        btnText: 'Schedule an Inspection',
        href: '/chimney-inspection',
      },
    ],
  },

  {
    slug: 'when-does-chimney-need-rebuilding',
    title: 'When Does a Chimney Need to Be Rebuilt? Signs Boston Homeowners Should Know',
    metaTitle: 'When Does a Chimney Need to Be Rebuilt? | Above Services Boston',
    metaDescription: "Not every chimney problem needs a rebuild — but some do. Here's how to tell when you're past repairs and what a chimney rebuild actually involves in Greater Boston.",
    category: 'Repairs',
    publishDate: 'October 15, 2024',
    readTime: '5 min read',
    excerpt: "Most chimney problems are repairable. But there are situations where continuing to patch is throwing money at a structure that's past the point of practical repair. Here's how to tell the difference.",
    keywords: ['chimney rebuild Boston', 'chimney reconstruction MA', 'when to rebuild chimney', 'partial chimney rebuild Boston', 'chimney structural repair'],
    relatedPosts: ['common-chimney-repair-problems-boston', 'chimney-liner-types-explained', 'chimney-waterproofing-boston'],
    relatedServices: [
      { name: 'Chimney Rebuilds', href: '/chimney-rebuilds' },
      { name: 'Chimney Repair', href: '/chimney-repair' },
      { name: 'Chimney Inspection', href: '/chimney-inspection' },
    ],
    content: [
      {
        type: 'p',
        text: "The question we hear most often after a difficult inspection: do I need to rebuild it, or can it be repaired? Most of the time, the answer is repair. But not always. Here's a breakdown of what pushes a chimney past the point where repairs make sense.",
      },
      { type: 'h2', text: "Signs You're Looking at a Rebuild" },
      { type: 'h3', text: 'Visible Structural Lean' },
      {
        type: 'p',
        text: "A chimney that's visibly leaning away from the house has a foundation or structural problem that patching won't fix. This happens in older Boston homes — Victorians in Jamaica Plain, brick colonials in Newton and Waltham — where the chimney was built on a separate footing that's settled differently from the main structure. Once a chimney is leaning, it needs to come down. There's no repair for a structural lean.",
      },
      { type: 'h3', text: 'Spalling Throughout the Upper Section' },
      {
        type: 'p',
        text: "Selective spalling — a handful of bricks on one face — can be addressed by replacing those bricks and waterproofing. But when spalling is systemic throughout the exposed portion of the chimney, replacing individual bricks becomes more expensive than rebuilding. When more than 20–25% of visible bricks are significantly damaged, rebuilding from the roofline up is usually the right call.",
      },
      { type: 'h3', text: 'Systemic Mortar Failure' },
      {
        type: 'p',
        text: "When mortar joint deterioration runs throughout the chimney — not localized to one section — tuckpointing every joint is usually more labor-intensive than rebuilding. More importantly, a chimney with compromised mortar throughout has poor structural integrity and is a hazard.",
      },
      { type: 'h3', text: 'Multiple Failed Repairs' },
      {
        type: 'p',
        text: "We see chimneys that have been patched with the wrong materials over decades — hydraulic cement over deteriorated lime mortar, mismatched brick, caulk filling gaps that need proper tuckpointing. At some point, the structure becomes a patchwork that doesn't hold together. A [[chimney rebuild|/chimney-rebuilds]] with correct materials gives you a clean slate and a structure that will last another 50+ years.",
      },
      { type: 'h2', text: 'Partial Rebuild vs. Full Teardown' },
      {
        type: 'p',
        text: "Most rebuilds are partial — from the roofline up. The section of chimney below the roofline is protected from weather and usually in much better condition. A partial rebuild addresses the most exposed and deteriorated portion without touching the foundation or interior structure.",
      },
      {
        type: 'p',
        text: "A full teardown is necessary when there's structural damage below the roofline: visible deterioration in the section running through the house, a failed foundation footing, or collapse of interior flue sections. Full teardowns are less common, but we do see them in very old Boston triple-deckers and rowhouses where the chimney predates current building codes.",
      },
      { type: 'h2', text: 'What a Rebuild Actually Involves' },
      {
        type: 'p',
        text: "A [[chimney rebuild|/chimney-rebuilds]] starts with an assessment of what needs to come down. We demo the affected section, source brick that matches the original as closely as possible — Boston has a lot of distinctive old brick, so this matters aesthetically. We rebuild with proper mortar ratios for exterior masonry, pull the necessary permits in Boston and surrounding towns, and finish with a new crown, waterproofing treatment, and cap installation. Most partial rebuilds take 2–4 days depending on height and access.",
      },
      {
        type: 'callout',
        text: "We always tell you clearly which you need before we start: repair or rebuild. If repair is sufficient, we'll say so — we don't recommend rebuilds that aren't necessary.",
      },
      {
        type: 'cta',
        heading: 'Get an Honest Assessment',
        body: "We inspect first, recommend what's actually needed, and quote before any work starts. No pressure, no upselling.",
        btnText: 'Schedule an Inspection',
        href: '/chimney-rebuilds',
      },
    ],
  },

  {
    slug: 'chimney-liner-types-explained',
    title: 'Chimney Liner Types: Clay Tile, Stainless Steel, and Cast-in-Place Explained',
    metaTitle: 'Chimney Liner Types Explained: Clay, Stainless, Cast-in-Place | Above Services Boston',
    metaDescription: "Replacing your chimney liner? Here's how clay tile, stainless steel, and cast-in-place liners compare — and how to pick the right one for your Boston home.",
    category: 'Education',
    publishDate: 'November 1, 2024',
    readTime: '6 min read',
    excerpt: "If you need a new chimney liner, you'll encounter three main options. Here's how clay tile, stainless steel, and cast-in-place liners compare — and when each one makes sense.",
    keywords: ['chimney liner Boston', 'stainless steel chimney liner', 'cast in place chimney liner', 'clay tile chimney liner', 'chimney liner replacement Boston MA'],
    relatedPosts: ['chimney-leaking-causes-fixes', 'chimney-inspection-levels-explained', 'when-does-chimney-need-rebuilding'],
    relatedServices: [
      { name: 'Chimney Liner Installation', href: '/chimney-liner-installation' },
      { name: 'Chimney Inspection', href: '/chimney-inspection' },
    ],
    content: [
      {
        type: 'p',
        text: "The chimney liner is the interior surface of the flue — the channel that contains combustion gases and directs them out of the house. When a liner cracks, carbon monoxide can seep into the house structure. When it fails completely, you have a serious fire and health hazard. Here's how the three main liner types compare.",
      },
      { type: 'h2', text: 'Clay Tile Liners' },
      {
        type: 'p',
        text: "Clay tile is the original liner material and what you'll find in most Boston homes built before 1990. Rectangular terra cotta tiles, stacked and mortared together, form the flue channel. Clay tile is durable under normal use and has been code-compliant for decades. The problem is that it's brittle. Thermal shock — from rapid temperature changes, especially after a chimney fire — can crack the tiles. Age and moisture also take a toll. Inspecting a clay tile liner requires a video camera because you can't see cracks from the firebox.",
      },
      {
        type: 'p',
        text: "Clay tile liners are only available in standard sizes. If your flue has unusual dimensions or if a section needs replacement, the tiles may not fit correctly without additional work. When clay tile liners fail, they're almost always replaced rather than repaired — getting into the flue to replace individual tiles is impractical.",
      },
      { type: 'h2', text: 'Stainless Steel Liners' },
      {
        type: 'p',
        text: "Stainless steel is the most common choice for liner replacement, and for good reason. A flexible stainless liner can be inserted into an existing flue without major masonry work — it goes in from the top, connects to the appliance at the bottom, and is insulated to maintain flue temperatures. It works with wood-burning fireplaces, gas inserts, oil furnaces, and pellet stoves. Installation typically takes half a day.",
      },
      {
        type: 'p',
        text: "The two grades used in chimney liners are 304 (for gas appliances) and 316Ti (for solid fuel burning — wood, coal, pellets). For wood-burning fireplaces in Boston homes, you want 316Ti stainless, which handles higher temperatures and acidic condensate from wood combustion. [[Stainless liner installation|/chimney-liner-installation]] comes with a manufacturer's warranty (typically 15–20 years), and the liner itself will outlast most other chimney components if properly maintained.",
      },
      { type: 'h2', text: 'Cast-in-Place Liners' },
      {
        type: 'p',
        text: "Cast-in-place systems involve pumping a lightweight refractory cement mixture into the existing flue around an inflatable form, creating a seamless, insulated liner. This approach works where stainless steel can't — irregular flue shapes, offset sections, or when the existing masonry has significant gaps and needs structural reinforcement. The cast-in-place liner essentially bonds to the existing masonry and can actually strengthen a deteriorated chimney structure.",
      },
      {
        type: 'p',
        text: "The tradeoff is cost: cast-in-place is typically 30–50% more expensive than stainless steel installation. For chimneys with structural deterioration or complex routing, though, it's often the only practical option.",
      },
      { type: 'h2', text: 'Signs Your Liner Needs Replacing' },
      {
        type: 'ul',
        items: [
          'A video inspection shows cracked, offset, or missing tile sections',
          "You've had a chimney fire — even a small one can crack tiles",
          'You smell exhaust or see soot staining on walls near the chimney',
          'Your CO detector has alarmed near the fireplace',
          'The home is more than 30 years old and has never had a liner inspection',
        ],
      },
      {
        type: 'callout',
        text: "A liner inspection using a camera is the only reliable way to assess liner condition. If your home is more than 25 years old and you've never had a video inspection, it's worth doing before heating season.",
      },
      {
        type: 'cta',
        heading: 'Need a Liner Inspection or Replacement?',
        body: "We'll camera-inspect your flue, show you exactly what we find, and recommend the right liner type for your setup.",
        btnText: 'Learn About Liner Installation',
        href: '/chimney-liner-installation',
      },
    ],
  },

  {
    slug: 'chimney-cap-importance',
    title: "Why Your Chimney Needs a Cap — And What Happens Without One",
    metaTitle: 'Why Every Chimney Needs a Cap | Above Services Boston',
    metaDescription: "A chimney cap is a small investment with outsized returns. Here's what it does, what happens without one, and why Boston homes are particularly vulnerable.",
    category: 'Maintenance',
    publishDate: 'November 15, 2024',
    readTime: '4 min read',
    excerpt: "A stainless steel chimney cap costs a few hundred dollars. Not having one can cost thousands. Here's why it matters — especially in a Boston winter.",
    keywords: ['chimney cap Boston', 'chimney cap installation MA', 'why chimney needs cap', 'chimney animal guards Boston', 'chimney cap replacement'],
    relatedPosts: ['chimney-leaking-causes-fixes', 'chimney-waterproofing-boston', 'common-chimney-repair-problems-boston'],
    relatedServices: [
      { name: 'Chimney Cap Installation', href: '/chimney-cap-installation' },
      { name: 'Chimney Repair', href: '/chimney-repair' },
    ],
    content: [
      {
        type: 'p',
        text: "A chimney cap is the metal cover that sits over the flue opening at the top of the chimney. It's the simplest and least expensive protective component on the entire chimney — and its absence causes more secondary damage than almost anything else we see.",
      },
      { type: 'h2', text: 'What a Chimney Cap Does' },
      { type: 'h3', text: 'Keeps Water Out' },
      {
        type: 'p',
        text: "Without a cap, every rainstorm sends water directly down the flue. In Boston, where we get roughly 45 inches of precipitation annually plus significant snow and ice, that's a lot of water going into the chimney. Water accelerates every deterioration process: it rusts the damper, degrades the mortar in the firebox, deteriorates clay tile liner sections, and contributes to spalling. A cap that costs $200–$400 is protecting a system that costs thousands to repair.",
      },
      { type: 'h3', text: 'Keeps Animals Out' },
      {
        type: 'p',
        text: "An uncapped flue is a perfect den for birds, squirrels, and raccoons — all common in Greater Boston. Chimney swifts, in particular, are federally protected. Once they nest, you legally cannot disturb the nest until the birds leave on their own. Beyond the inconvenience, nesting material inside the flue is a fire hazard and can block the flue entirely. We see this regularly in Cambridge and Somerville, where older housing stock frequently has uncapped or deteriorated caps.",
      },
      { type: 'h3', text: 'Acts as a Spark Arrestor' },
      {
        type: 'p',
        text: "The mesh screen on most chimney caps catches sparks and embers before they exit the flue. This is particularly important in densely built Boston neighborhoods where rooftops are close together.",
      },
      { type: 'h3', text: 'Reduces Downdraft' },
      {
        type: 'p',
        text: "On windy days, a chimney without a cap can experience strong downdraft — wind forcing air back down the flue and into the house. This can push smoke into the room and make the fireplace difficult to use. Caps with wind-directional designs address this directly.",
      },
      { type: 'h2', text: 'Cap Types and Lifespans' },
      {
        type: 'p',
        text: "Standard galvanized steel caps are the most common and least expensive. In Boston's climate, they typically last 10–15 years before rusting through. Stainless steel caps cost a bit more but last 20+ years — worth the difference in a coastal, high-precipitation environment. Multi-flue caps cover the entire chimney crown and offer better protection for chimneys with multiple flues. We recommend stainless for almost every [[chimney cap installation|/chimney-cap-installation]] we do in Greater Boston.",
      },
      {
        type: 'callout',
        text: "A missing or damaged chimney cap is one of the top five causes of water damage inside a chimney system. If your cap is more than 15 years old or you're not sure you have one, it's worth checking.",
      },
      {
        type: 'cta',
        heading: 'Need a Cap Installed?',
        body: "We can usually install a new stainless steel cap the same day you call — it's a quick job with an immediate payoff.",
        btnText: 'See Chimney Cap Installation',
        href: '/chimney-cap-installation',
      },
    ],
  },

  {
    slug: 'smoke-chamber-repair-explained',
    title: 'Smoke Chamber Repair: What It Is and Why Most Homeowners Miss It',
    metaTitle: 'Smoke Chamber Repair Explained | Above Services Boston',
    metaDescription: "The smoke chamber is one of the least understood parts of a chimney — and one of the most common sources of smoke problems. Here's what it is and when it needs repair.",
    category: 'Repairs',
    publishDate: 'December 1, 2024',
    readTime: '5 min read',
    excerpt: "Most homeowners have never heard of the smoke chamber until smoke starts backing into the room. Here's what it is, what can go wrong, and how it's fixed.",
    keywords: ['smoke chamber repair Boston', 'smoke chamber parging', 'fireplace smoke problems Boston', 'chimney smoke rollback', 'smoke chamber damage'],
    relatedPosts: ['fireplace-not-drawing-properly', 'chimney-inspection-levels-explained', 'common-chimney-repair-problems-boston'],
    relatedServices: [
      { name: 'Smoke Chamber Repair', href: '/smoke-chamber-repair' },
      { name: 'Chimney Inspection', href: '/chimney-inspection' },
      { name: 'Fireplace Repair', href: '/fireplace-repair' },
    ],
    content: [
      {
        type: 'p',
        text: "When a homeowner tells us their fireplace is smoking up the room, the smoke chamber is one of the first things we check. Most people have never heard of it — it's not visible from the firebox and doesn't come up in casual conversation about fireplaces. But it's a critical part of how the chimney system works, and when it's damaged, the symptoms are hard to ignore.",
      },
      { type: 'h2', text: 'What the Smoke Chamber Is' },
      {
        type: 'p',
        text: "The smoke chamber sits directly above the firebox opening and the damper. It's the space where combustion gases gather and compress before entering the flue. Its job is to transition the wide firebox opening into the narrower flue opening smoothly, reducing turbulence. The corbeled (stepped) or sloped walls of the smoke chamber create an accelerating column of gas that draws up into the flue. When the smoke chamber is damaged or poorly designed, that flow breaks down.",
      },
      { type: 'h2', text: 'Common Smoke Chamber Problems' },
      { type: 'h3', text: 'Porous or Unlined Surfaces' },
      {
        type: 'p',
        text: "In older Boston homes, smoke chambers were often left unlined — raw brick or mortar, not smooth. Rough surfaces create turbulence that disrupts the gas flow, contributing to smoke rollback. They're also porous, meaning combustion gases (including carbon monoxide) can seep through the walls into the house structure. The repair for this is parging: applying a smooth layer of refractory mortar over the chamber walls to create an airtight, smooth surface.",
      },
      { type: 'h3', text: 'Corbeling Cracks' },
      {
        type: 'p',
        text: "The corbeled brickwork that forms the sloped walls of the smoke chamber is subject to thermal stress from years of heating and cooling. Cracks in the corbeling allow combustion gases to escape into wall cavities. These cracks aren't visible during a basic inspection — they require a camera and a close look from inside the firebox. When we find corbeling cracks during a [[chimney inspection|/chimney-inspection]], we address them as part of any smoke chamber repair.",
      },
      { type: 'h3', text: 'Debris Accumulation' },
      {
        type: 'p',
        text: "The smoke chamber collects debris — soot, creosote, animal nesting material, pieces of deteriorated mortar. Enough buildup restricts the chamber and impairs draft. A thorough [[chimney cleaning|/chimney-cleaning]] includes clearing the smoke chamber, not just the flue.",
      },
      { type: 'h2', text: 'How Smoke Chambers Are Repaired' },
      {
        type: 'p',
        text: "Parging is the standard repair. A CSIA-certified technician applies a coating of refractory mortar — approved for smoke chamber use, not regular mortar or hydraulic cement — over the interior walls of the chamber. This fills cracks, covers porous brick surfaces, and creates a smooth, airtight channel. The work is done from inside the firebox, looking up through the damper opening.",
      },
      {
        type: 'p',
        text: "Where corbeling is structurally damaged, the repair may involve rebuilding individual sections of the chamber. This is more involved but not unusual in homes with fireplaces that are 30+ years old and have had no maintenance.",
      },
      {
        type: 'callout',
        text: "If your fireplace smokes into the room — especially when you first light a fire or during windy days — a smoke chamber issue is often the culprit. It's worth having it inspected before blaming the wood or the damper.",
      },
      {
        type: 'cta',
        heading: 'Smoke Rolling Back Into the Room?',
        body: "We inspect the smoke chamber as part of every full chimney assessment. If there's a problem, we'll show you what it is before we start any work.",
        btnText: 'See Smoke Chamber Repair',
        href: '/smoke-chamber-repair',
      },
    ],
  },

  {
    slug: 'fireplace-not-drawing-properly',
    title: 'Why Is My Fireplace Smoking? Six Common Causes and How to Fix Them',
    metaTitle: 'Why Is My Fireplace Smoking? | Above Services Boston',
    metaDescription: "Smoke backing into the room is the most common fireplace complaint we hear. Here are six reasons it happens and which ones you can fix yourself vs. which need professional attention.",
    category: 'Repairs',
    publishDate: 'January 10, 2025',
    readTime: '6 min read',
    excerpt: "Smoke backing into the room is frustrating and potentially hazardous. Here are the six most common causes — from simple fixes to ones that need professional attention.",
    keywords: ['fireplace smoking into room Boston', 'fireplace draft problems', 'chimney not drawing properly', 'fireplace smoke problems Boston MA', 'chimney draft fix'],
    relatedPosts: ['smoke-chamber-repair-explained', 'chimney-inspection-levels-explained', 'how-often-chimney-cleaning'],
    relatedServices: [
      { name: 'Fireplace Repair', href: '/fireplace-repair' },
      { name: 'Chimney Inspection', href: '/chimney-inspection' },
      { name: 'Smoke Chamber Repair', href: '/smoke-chamber-repair' },
    ],
    content: [
      {
        type: 'p',
        text: "Smoke backing into the room is the most common fireplace complaint we hear, especially in January and February when Boston homeowners are using their fireplaces daily. Sometimes it's a simple fix. Sometimes it's a symptom of something more serious. Here's how to work through the possible causes.",
      },
      { type: 'h2', text: '1. Cold Flue' },
      {
        type: 'p',
        text: "On a cold day, the air inside the flue is cold and dense — sometimes colder than the air inside your home. When you open the damper and light a fire, the cold flue air acts as a plug, resisting the flow of rising warm air. The result is smoke backing into the room, at least initially.",
      },
      {
        type: 'p',
        text: "The fix is straightforward: before lighting a fire on a very cold day, hold a lit piece of newspaper near the open damper for 30–60 seconds to warm the air in the flue and establish an upward draft. Once the draft is moving, light your main fire. If this consistently solves the problem, the flue itself is fine.",
      },
      { type: 'h2', text: '2. Negative Air Pressure' },
      {
        type: 'p',
        text: "Modern homes are well-sealed. When exhaust fans, kitchen range hoods, or other combustion appliances are running, they depressurize the house — pulling air from wherever they can find it, including back down the chimney. This is called negative house pressure. If your fireplace smokes when the kitchen exhaust is on but not otherwise, this is almost certainly the cause. The fix is to crack a window near the fireplace to provide makeup air while burning.",
      },
      { type: 'h2', text: '3. Obstructions in the Flue' },
      {
        type: 'p',
        text: "Bird nests, leaves, a fallen animal, or a chunk of fallen mortar can partially or fully block the flue. A partial obstruction severely restricts draft and causes smoke to back up. This is most common in chimneys that went unused over summer without a cap. [[Chimney cleaning|/chimney-cleaning]] removes most obstructions; significant physical blockages may require a dedicated service call.",
      },
      { type: 'h2', text: '4. Oversized Firebox Opening' },
      {
        type: 'p',
        text: "There's a ratio relationship between the size of the firebox opening and the cross-sectional area of the flue. When the opening is too large relative to the flue — a common issue in older Boston homes with large original fireplaces — the flue can't handle the volume of combustion gases and smoke spills out. Solutions include raising the firebox floor, installing a smoke guard above the opening, or resizing the opening. This requires an assessment to understand the specific dimensions involved.",
      },
      { type: 'h2', text: '5. Smoke Chamber or Damper Issues' },
      {
        type: 'p',
        text: "A damaged smoke chamber (cracked corbeling, unlined surfaces) disrupts the gas flow between the firebox and the flue. A damper that's warped, partially stuck, or opening at the wrong angle also disrupts draft. These aren't visible without getting inside the system. If you've ruled out the simpler causes above, a [[smoke chamber inspection|/smoke-chamber-repair]] is the logical next step.",
      },
      { type: 'h2', text: '6. Creosote Restricting the Flue' },
      {
        type: 'p',
        text: "Heavy creosote accumulation narrows the effective diameter of the flue. As the restriction worsens, draft decreases and smoke spillback increases. This is the most preventable cause — an annual [[chimney cleaning|/chimney-cleaning]] removes creosote before it accumulates to a problematic level.",
      },
      {
        type: 'callout',
        text: "If multiple fires in a row are smoking, or if the problem is getting worse over time, don't keep using the fireplace until you've had it inspected. A draft problem that seems like an inconvenience can be masking a more serious issue.",
      },
      {
        type: 'cta',
        heading: 'Fireplace Giving You Trouble?',
        body: "We diagnose draft and smoke problems as part of our fireplace inspection service. We'll tell you exactly what's causing it and what it takes to fix it.",
        btnText: 'Schedule Fireplace Inspection',
        href: '/fireplace-repair',
      },
    ],
  },

  {
    slug: 'chimney-inspection-levels-explained',
    title: "Chimney Inspection Levels: What's a Level 1, 2, and 3?",
    metaTitle: 'Chimney Inspection Levels 1, 2, and 3 Explained | Above Services Boston',
    metaDescription: 'NFPA 211 defines three levels of chimney inspection. Here\'s what each one covers, when you need which level, and what to expect from the inspection process in Greater Boston.',
    category: 'Education',
    publishDate: 'February 1, 2025',
    readTime: '6 min read',
    excerpt: "Not all chimney inspections are the same. NFPA 211 defines three levels — and knowing which one you need can save time and money. Here's how they differ.",
    keywords: ['chimney inspection Boston MA', 'Level 2 chimney inspection', 'chimney inspection before buying house', 'annual chimney inspection', 'NFPA 211 inspection'],
    relatedPosts: ['how-often-chimney-cleaning', 'common-chimney-repair-problems-boston', 'chimney-liner-types-explained'],
    relatedServices: [
      { name: 'Chimney Inspection', href: '/chimney-inspection' },
      { name: 'Chimney Cleaning', href: '/chimney-cleaning' },
    ],
    content: [
      {
        type: 'p',
        text: "NFPA 211 — the standard that governs chimney safety in the US — defines three levels of chimney inspection. The level you need depends on what's changed with the system, whether the home is being bought or sold, and what events the chimney has been through. Here's how they break down.",
      },
      { type: 'h2', text: 'Level 1: Annual Maintenance Inspection' },
      {
        type: 'p',
        text: "A Level 1 inspection is the baseline annual check for a chimney in continuous use with no changes to the appliance or fuel type. It covers all accessible parts of the chimney interior and exterior — the firebox, damper, smoke shelf, visible liner sections, the chimney cap, the crown, and the exterior masonry. No special tools or equipment beyond mirrors and a flashlight are required.",
      },
      {
        type: 'p',
        text: "At Level 1, we're looking for creosote buildup, blockages, visible crown or cap damage, open mortar joints, and any signs of deterioration in accessible liner sections. This is included with every annual [[chimney cleaning|/chimney-cleaning]] — the inspection is part of the service, not a separate line item.",
      },
      { type: 'h2', text: 'Level 2: Camera Inspection' },
      {
        type: 'p',
        text: "A Level 2 inspection covers everything in Level 1, plus all accessible areas of the attic, basement, and crawl space as they relate to the chimney, plus a video scan of the full flue interior. This is required when something about the system has changed: a new appliance connected, a different fuel type used, a change in ownership, or after any event that may have damaged the flue — including a chimney fire or severe storm.",
      },
      {
        type: 'p',
        text: "In practice, Level 2 is the right call for: any home purchase or sale in Greater Boston (real estate attorneys often require it), any chimney going back into service after extended non-use, and any chimney more than 20 years old that has never had a camera inspection.",
      },
      {
        type: 'callout',
        text: "If you're buying a home in Boston, Cambridge, Brookline, Newton, or anywhere in Greater Boston — get a Level 2 chimney inspection. A clay tile liner crack that costs $3,000–$8,000 to fix won't show up without a camera.",
      },
      { type: 'h2', text: 'Level 3: Destructive Inspection' },
      {
        type: 'p',
        text: "A Level 3 inspection is required when there's a known or suspected hazard that can't be evaluated by Level 1 or Level 2 methods. It allows removal of chimney components — including portions of the masonry or wall surfaces — to access the area in question. Level 3 is uncommon and is usually triggered by a major chimney fire, visible structural damage, or specific concerning findings from a Level 2 inspection that require deeper investigation.",
      },
      { type: 'h2', text: 'What Inspectors Look For' },
      {
        type: 'ul',
        items: [
          'Creosote stage and buildup depth',
          'Liner integrity — cracks, offsets, missing sections (Level 2)',
          'Crown condition — cracking, erosion, separation',
          'Cap presence, condition, and fit',
          'Mortar joint condition throughout the exterior masonry',
          'Damper operation and sealing',
          'Smoke chamber corbeling and surface condition',
          'Flashing condition at the roofline',
          'Signs of moisture damage inside the firebox or flue',
        ],
      },
      { type: 'h2', text: 'What You Get After the Inspection' },
      {
        type: 'p',
        text: "Our inspection report includes written findings for each component evaluated, photographs of any issues found, and a clear explanation of what needs to be addressed. We walk you through the findings before we leave. If you need a formal written report for a real estate transaction or insurance claim, we provide that as part of the [[chimney inspection|/chimney-inspection]] service — accepted by real estate attorneys, insurance companies, and building inspectors across Greater Boston.",
      },
      {
        type: 'cta',
        heading: 'Ready to Schedule an Inspection?',
        body: "We serve Boston, Cambridge, Brookline, Newton, Somerville, Medford, and surrounding towns. Reports accepted by real estate attorneys and insurance companies.",
        btnText: 'Book a Chimney Inspection',
        href: '/chimney-inspection',
      },
    ],
  },

  {
    slug: 'chimney-leaking-causes-fixes',
    title: 'Why Is My Chimney Leaking? Five Causes and What to Do About Them',
    metaTitle: 'Why Is My Chimney Leaking? Causes & Fixes | Above Services Boston',
    metaDescription: "Chimney leaks are one of the most common and most misdiagnosed problems we see. Here are the five most frequent causes — and what it takes to fix each one.",
    category: 'Repairs',
    publishDate: 'March 1, 2025',
    readTime: '5 min read',
    excerpt: "Water stains near the fireplace, rust on the damper, efflorescence on the brick — these all point to a leaking chimney. Here are the five most common sources.",
    keywords: ['chimney leaking Boston', 'chimney water damage', 'chimney leak repair Boston MA', 'water in chimney', 'chimney flashing leak'],
    relatedPosts: ['chimney-waterproofing-boston', 'chimney-cap-importance', 'common-chimney-repair-problems-boston'],
    relatedServices: [
      { name: 'Chimney Repair', href: '/chimney-repair' },
      { name: 'Chimney Cap Installation', href: '/chimney-cap-installation' },
      { name: 'Chimney Crown Repair', href: '/chimney-crown-repair' },
    ],
    content: [
      {
        type: 'p',
        text: "Water damage is the most destructive thing that happens to a chimney over time. It accelerates every other deterioration process: rusts metal components, degrades mortar, cracks liner sections, and causes brick to spall. The frustrating part is that chimney leaks are often misdiagnosed — homeowners assume the roof is leaking, or the problem shows up in a room that seems unrelated to the chimney. Here are the five most common sources.",
      },
      { type: 'h2', text: '1. Missing or Damaged Chimney Cap' },
      {
        type: 'p',
        text: "An open flue is a direct path for rain and snow into the chimney system. A cap that's rusted through, cracked, or missing entirely sends precipitation straight down the liner. This is the first thing we check when a homeowner reports water inside the firebox, a rusted damper, or moisture on the flue walls. [[Chimney cap installation|/chimney-cap-installation]] is one of the most cost-effective repairs there is.",
      },
      { type: 'h2', text: '2. Cracked Chimney Crown' },
      {
        type: 'p',
        text: "The crown is the concrete slab at the top of the chimney that covers the masonry around the flue opening. It's designed to slope away from the flue so water runs off rather than into the chimney. When the crown cracks — which happens to most Boston chimneys eventually given the freeze-thaw cycle — water enters the chimney structure directly, running down between the liner and the masonry. A [[chimney crown repair|/chimney-crown-repair]] seals the crown with a penetrating sealer or, for more severe damage, rebuilds it entirely.",
      },
      { type: 'h2', text: '3. Failed Flashing' },
      {
        type: 'p',
        text: "Flashing is the metal seal at the chimney-roofline junction. It's a two-part system: base flashing sits against the chimney, and counter-flashing is embedded in the mortar joints above. When either piece fails — through corrosion, improper installation, or mortar joint deterioration — water runs directly into the wall or ceiling around the chimney. Water stains on interior ceilings or walls adjacent to the chimney, rather than inside the firebox itself, usually point to flashing as the source.",
      },
      { type: 'h2', text: '4. Porous or Deteriorated Masonry' },
      {
        type: 'p',
        text: "Brick is naturally porous. New, well-mortared brick with a properly sloped crown sheds most of the water that hits it. But brick that's 50+ years old, with weathered surfaces and softened mortar joints, absorbs a significant percentage of each rainfall. In a Boston winter, that absorbed water freezes, expands, and opens the brick further — a cycle that accelerates over time. [[Chimney waterproofing|/blog/chimney-waterproofing-boston]] with a vapor-permeable sealant addresses this by reducing water absorption without trapping moisture already in the masonry.",
      },
      { type: 'h2', text: '5. Condensation from an Oversized Liner' },
      {
        type: 'p',
        text: "When a gas appliance or oil furnace is connected to a flue that's significantly larger than needed, combustion gases cool too quickly as they rise. This creates condensation on the liner walls. Over time, the acidic condensate degrades clay tile and can appear as moisture inside the firebox. The fix is typically a [[liner replacement|/chimney-liner-installation]] — correctly sizing the liner for the appliance's BTU output eliminates the problem.",
      },
      {
        type: 'callout',
        text: "Chimney leaks often show up in unexpected places — a water stain on a second-floor ceiling, rust on the fireplace insert, white salt deposits (efflorescence) on exterior brick. If you see any of these, get the chimney checked before the problem grows.",
      },
      {
        type: 'cta',
        heading: 'Have a Chimney Leak?',
        body: "We diagnose the source before recommending any repairs. A 30-minute inspection often tells us everything we need to know.",
        btnText: 'Schedule a Repair Inspection',
        href: '/chimney-repair',
      },
    ],
  },

  {
    slug: 'chimney-waterproofing-boston',
    title: "Chimney Waterproofing in Boston: Why the Freeze-Thaw Cycle Makes It Essential",
    metaTitle: 'Chimney Waterproofing Boston MA | Above Services',
    metaDescription: "Boston's winters put masonry chimneys through hundreds of freeze-thaw cycles every year. Here's how chimney waterproofing works and why it's worth doing.",
    category: 'Maintenance',
    publishDate: 'March 15, 2025',
    readTime: '5 min read',
    excerpt: "Boston's freeze-thaw cycles are uniquely hard on masonry. Waterproofing slows the damage significantly — but there's a right way and a wrong way to do it.",
    keywords: ['chimney waterproofing Boston', 'chimney sealing MA', 'brick chimney waterproofing', 'chimney masonry sealant', 'protect chimney Boston winter'],
    relatedPosts: ['chimney-leaking-causes-fixes', 'chimney-cap-importance', 'common-chimney-repair-problems-boston'],
    relatedServices: [
      { name: 'Chimney Repair', href: '/chimney-repair' },
      { name: 'Chimney Crown Repair', href: '/chimney-crown-repair' },
    ],
    content: [
      {
        type: 'p',
        text: "Boston averages around 110 freeze-thaw cycles per year — days where the temperature crosses above and below 32°F. For a brick chimney, that means water absorbed into the masonry freezes and expands, then thaws and contracts, over a hundred times each year. Over a decade, that cycle opens mortar joints, pops brick faces, and works cracks progressively wider. Waterproofing doesn't stop this entirely, but it slows it significantly.",
      },
      { type: 'h2', text: 'Why Masonry Absorbs Water' },
      {
        type: 'p',
        text: "Brick is a fired clay product — porous by nature. The mortar between bricks is even more absorbent. A chimney that's exposed to rain, snow, and humidity year-round is continuously absorbing and releasing moisture. New masonry with sealed joints and a sound crown sheds most water. Old masonry with weathered mortar and decades of surface erosion absorbs a much higher percentage of each rainfall.",
      },
      { type: 'h2', text: 'The Problem with Most Sealers' },
      {
        type: 'p',
        text: "Not all chimney waterproofing products are created equal, and this is where well-meaning DIY attempts sometimes cause more harm than good. Film-forming sealers — the kind used on driveways and sidewalks — create a surface coating that blocks moisture from entering but also traps moisture already in the masonry. When that trapped moisture freezes, it has nowhere to go but outward, which dramatically accelerates spalling. These products are not appropriate for chimney use.",
      },
      {
        type: 'p',
        text: "The right product for chimneys is a vapor-permeable (breathable) water repellent. These work by penetrating the masonry and lining the pores with a hydrophobic compound, reducing absorption while still allowing water vapor to escape. The masonry can still breathe — moisture already inside can work its way out — but water from rain and snow is largely repelled.",
      },
      {
        type: 'callout',
        text: "Never use a driveway or deck sealant on a chimney. These products trap moisture rather than allowing the masonry to breathe, which can dramatically accelerate spalling. Use only products rated specifically for chimneys and masonry.",
      },
      { type: 'h2', text: 'When to Waterproof' },
      {
        type: 'p',
        text: "Waterproofing works best on masonry that's in decent condition — existing repairs completed, crown intact, mortar joints sound. Applying sealant over deteriorated mortar or a damaged crown just locks in the problems. The proper sequence: repair everything that needs repairing first, then waterproof. Using waterproofing as a substitute for repair doesn't work.",
      },
      {
        type: 'p',
        text: "Most chimneys benefit from reapplication every 5–10 years depending on the product and sun exposure. South-facing chimneys that get direct sun in addition to rain exposure may need it more frequently.",
      },
      { type: 'h2', text: 'Spring Is the Right Time' },
      {
        type: 'p',
        text: "We recommend waterproofing after the spring inspection season — once you've had the chimney assessed, any needed [[chimney repairs|/chimney-repair]] made, and the masonry has dried out after winter. Applying sealant to wet masonry traps moisture inside; the masonry needs to be dry throughout for the product to penetrate properly. In Greater Boston, late April through June is typically ideal.",
      },
      {
        type: 'cta',
        heading: 'Want Your Chimney Waterproofed This Spring?',
        body: "We assess the masonry first, handle any needed repairs, then apply a proper vapor-permeable treatment. One service visit, done right.",
        btnText: 'Schedule a Spring Inspection',
        href: '/chimney-repair',
      },
    ],
  },

  {
    slug: 'fireplace-safety-guide-boston',
    title: 'Fireplace Safety Guide for Boston Homeowners',
    metaTitle: 'Fireplace Safety Guide for Boston Homeowners | Above Services',
    metaDescription: "A wood-burning fireplace is a safety responsibility. Here's what Boston homeowners need to know about maintenance, carbon monoxide risks, creosote fires, and safe burning practices.",
    category: 'Safety',
    publishDate: 'April 1, 2025',
    readTime: '7 min read',
    excerpt: "A working fireplace is a safety responsibility. Here's a practical guide to chimney maintenance, CO risks, chimney fire prevention, and safe burning practices for Greater Boston homes.",
    keywords: ['fireplace safety Boston', 'chimney fire prevention', 'carbon monoxide chimney', 'safe fireplace use Boston', 'chimney safety MA'],
    relatedPosts: ['how-often-chimney-cleaning', 'chimney-inspection-levels-explained', 'fireplace-not-drawing-properly'],
    relatedServices: [
      { name: 'Chimney Inspection', href: '/chimney-inspection' },
      { name: 'Chimney Cleaning', href: '/chimney-cleaning' },
      { name: 'Fireplace Repair', href: '/fireplace-repair' },
    ],
    content: [
      {
        type: 'p',
        text: "Fireplaces cause roughly 25,000 house fires in the US each year. Most are preventable. A well-maintained chimney and sensible burning practices eliminate the vast majority of the risk. Here's what you need to know.",
      },
      { type: 'h2', text: 'Annual Inspection and Cleaning' },
      {
        type: 'p',
        text: "An annual [[chimney cleaning|/chimney-cleaning]] and inspection is the single most effective thing you can do for fireplace safety. It removes creosote before it reaches dangerous accumulation levels, catches developing problems while they're still minor, and gives you documented confirmation that the system is safe to use. Schedule before heating season — most Boston chimney companies are fully booked through October, so September is the better bet.",
      },
      { type: 'h2', text: 'Carbon Monoxide: The Invisible Risk' },
      {
        type: 'p',
        text: "Carbon monoxide is odorless, colorless, and lethal at high concentrations. A cracked chimney liner, a blocked flue, or a backdrafting appliance can allow CO to accumulate in living spaces without any visible smoke or smell. You have no way to know if there's a CO problem without a detector.",
      },
      {
        type: 'p',
        text: "Install combination smoke/CO detectors on every level of the home. In Massachusetts, CO detectors are legally required in any residential dwelling with fossil fuel combustion appliances. Place them within 10 feet of each sleeping area, at breathing height. Test them monthly and replace batteries annually.",
      },
      { type: 'h2', text: 'Understanding Chimney Fires' },
      {
        type: 'p',
        text: "Chimney fires burn inside the flue when accumulated creosote ignites. They can be dramatic — roaring sounds, visible flames from the top — or quiet, burning through a section of liner without the homeowner being aware. Both are serious. A chimney fire, even a small one, can crack clay tile liner sections and compromise the structural integrity of the flue. After any suspected chimney fire, stop using the fireplace immediately and schedule a [[Level 2 inspection|/chimney-inspection]] before relighting.",
      },
      { type: 'h2', text: 'Safe Burning Practices' },
      { type: 'h3', text: 'Burn Properly Seasoned Wood' },
      {
        type: 'p',
        text: "Seasoned firewood has been split and dried for at least 12 months — ideally 18–24. It has a moisture content below 20%. Wet or green wood burns cooler, produces more smoke, and generates significantly more creosote. Hardwoods like oak, ash, maple, and cherry are the best choice for Boston winters: they burn hot, long, and clean.",
      },
      { type: 'h3', text: 'Never Burn Trash or Treated Wood' },
      {
        type: 'p',
        text: "Cardboard, painted or treated wood, plywood, and household waste all produce toxic gases and excessive creosote. Colored inks, adhesives, and chemical treatments create compounds that coat the flue quickly and are dangerous to breathe.",
      },
      { type: 'h3', text: 'Use the Damper Correctly' },
      {
        type: 'p',
        text: "Open the damper completely before lighting any fire and leave it fully open while the fire is burning. Partially closing the damper to conserve heat restricts airflow, increases smoke production, and creates ideal creosote-forming conditions. Only close the damper completely after the fire is fully extinguished and the firebox has cooled — a closed damper over a smoldering fire traps CO inside the house.",
      },
      { type: 'h2', text: 'Warning Signs to Never Ignore' },
      {
        type: 'ul',
        items: [
          'Smoke entering the room, even occasionally',
          'A strong smell of smoke or exhaust when the fireplace is not in use',
          'Soot or black marks above the firebox opening',
          'Loud cracking or popping sounds from the chimney while burning',
          'White staining (efflorescence) on exterior chimney brick',
          'Water in the firebox or rust on the damper',
          'Your CO detector alarming near the fireplace',
        ],
      },
      {
        type: 'callout',
        text: "If your CO detector alarms, get everyone out immediately and call 911. Don't go back in until emergency responders clear the building. CO poisoning can be fatal within minutes at high concentrations.",
      },
      {
        type: 'cta',
        heading: 'Is Your Fireplace Ready to Use Safely?',
        body: "An annual inspection is the foundation of fireplace safety. We serve all of Greater Boston — usually available within a few days.",
        btnText: 'Schedule a Safety Inspection',
        href: '/chimney-inspection',
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slugs: string[]): BlogPost[] {
  return slugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter(Boolean) as BlogPost[];
}
