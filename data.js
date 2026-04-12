// =============================================
//  NEB Class 10 Science Question Bank
//  data.js  —  All questions and answers
// =============================================

const data = {
  physics: {
    label: "Physics",
    lessons: {
      force: {
        label: "Lesson 1: Force",
        "1mark": [
          {
            q: "What is the value of 'g' on equatorial and polar regions of the earth?",
            years: ["2075 P1", "2074 P2"],
            a: [
              "The value of acceleration due to gravity (g) is <strong>not the same</strong> at all places on Earth because Earth is not a perfect sphere.",
              "At the <strong>equatorial region</strong>: g = <strong>9.78 m/s²</strong> (lower, because Earth bulges here, so radius is larger).",
              "At the <strong>polar region</strong>: g = <strong>9.83 m/s²</strong> (higher, because Earth is flattened here, so radius is smaller).",
              "Since g = GM/R², a larger radius at the equator gives a smaller g, and vice versa at the poles."
            ]
          },
          {
            q: "What is the value of acceleration due to gravity 'g' at the center of the earth?",
            years: ["2075 P2"],
            a: [
              "The value of acceleration due to gravity (g) at the <strong>center of the earth is 0 m/s²</strong>.",
              "At the center, the gravitational pull from all sides of the earth is equal and opposite, so the net force is zero.",
              "Since g = 0 at the center, an object placed there experiences no gravitational acceleration and is in weightlessness.",
              "Weight (W = mg) = 0 at the center, even though mass remains unchanged."
            ]
          },
          {
            q: "What is acceleration due to gravity?",
            years: ["2075 P2", "2073 P6"],
            a: [
              "When an object falls freely under gravity (without air resistance), it accelerates uniformly. This acceleration is called <strong>acceleration due to gravity</strong>, denoted by <strong>g</strong>.",
              "Definition: <em>The acceleration produced in a freely falling body due to the gravitational force of the Earth.</em>",
              "Its <strong>SI unit is m/s²</strong> (metres per second squared).",
              "Standard value on Earth's surface: <strong>g ≈ 9.8 m/s²</strong>.",
              "It is a <strong>vector quantity</strong>, always directed toward the center of the Earth.",
              "It is independent of the mass, shape, or size of the falling object."
            ]
          },
          {
            q: "Write the value of acceleration due to gravity on the surface of the moon in SI unit.",
            years: ["2075 P4"],
            a: [
              "The value of acceleration due to gravity on the surface of the moon is <strong>g_moon = 1.66 m/s²</strong>.",
              "Its SI unit is <strong>m/s²</strong>.",
              "This is approximately <strong>1/6th of Earth's g</strong> (9.8 m/s²), because the moon has much smaller mass and radius.",
              "Practically: a person weighing 60 kg on Earth would weigh only about 10 kg on the moon."
            ]
          },
          {
            q: "What is freefall?",
            years: ["2074 P5", "2073 P6"],
            a: [
              "<strong>Freefall</strong> is the fall of a body under the effect of gravity alone, in the <strong>absence of any external resistance</strong> (like air friction).",
              "The only force acting on the body is gravitational force pulling it toward Earth's center.",
              "A freely falling body accelerates at g = 9.8 m/s² downward.",
              "In freefall, the body experiences <strong>weightlessness</strong> — apparent weight becomes zero.",
              "Example: A stone dropped in vacuum; astronauts in orbit are also in continuous freefall."
            ]
          },
          {
            q: "What is gravity?",
            years: ["2075 P9"],
            a: [
              "<strong>Gravity</strong> is the force by which a massive body (like Earth) attracts other objects toward its center.",
              "It is a special case of gravitation — specifically the gravitational pull exerted by a large celestial body on nearby objects.",
              "Gravity keeps us on the ground, causes objects to fall, and gives every object its weight.",
              "Formula: W = mg, where m = mass, g = acceleration due to gravity.",
              "Gravity is always <strong>attractive</strong> — it never repels, and always acts toward the center of the attracting body."
            ]
          },
          {
            q: "Write the formula to find the weight of an object.",
            years: ["2075 P7"],
            a: [
              "The formula to find the weight of an object is: <strong>W = mg</strong>",
              "Where: W = Weight (Newtons, N), m = Mass (kilograms, kg), g = Acceleration due to gravity (9.8 m/s² on Earth).",
              "Weight is the gravitational force acting on a body. Unlike mass, it varies from place to place.",
              "Example: A 10 kg object weighs 10 × 9.8 = <strong>98 N</strong> on Earth, but only 10 × 1.66 = 16.6 N on the moon."
            ]
          },
          {
            q: "What is the value of universal gravitational constant (G)?",
            years: ["2074 P8"],
            a: [
              "The value of universal gravitational constant is <strong>G = 6.67 × 10⁻¹¹ Nm²/kg²</strong>.",
              "G is used in Newton's law of gravitation: F = Gm₁m₂/r².",
              "It is called 'universal' because its value is the same everywhere in the universe.",
              "G was first measured experimentally by <strong>Henry Cavendish</strong> in 1798 using a torsion balance.",
              "The very small value of G shows that gravitational force is extremely weak unless very large masses are involved."
            ]
          },
          {
            q: "State Newton's universal law of gravitation.",
            years: ["2074 P9", "2072 Supp", "2071 Supp"],
            a: [
              "<strong>Newton's Universal Law of Gravitation:</strong>",
              "Every object in the universe attracts every other object with a force that is <strong>directly proportional</strong> to the product of their masses and <strong>inversely proportional</strong> to the square of the distance between their centers.",
              "Mathematically: <strong>F = Gm₁m₂/r²</strong>",
              "Where: F = gravitational force, G = 6.67×10⁻¹¹ Nm²/kg², m₁, m₂ = masses, r = distance between centers.",
              "The force is always attractive, acts along the line joining the two bodies, and both bodies experience equal and opposite forces (Newton's 3rd law)."
            ]
          },
          {
            q: "What is gravitational constant? Also write its SI unit.",
            years: ["2073 P3"],
            a: [
              "The <strong>gravitational constant (G)</strong> is defined as the gravitational force of attraction between two bodies, each of unit mass (1 kg), separated by unit distance (1 m).",
              "From F = Gm₁m₂/r²: when m₁ = m₂ = 1 kg and r = 1 m, then F = G.",
              "So G numerically equals the force between two 1 kg masses placed 1 metre apart.",
              "<strong>SI unit of G: Nm²/kg²</strong>",
              "Value: G = 6.67 × 10⁻¹¹ Nm²/kg²"
            ]
          },
          {
            q: "What is gravitation (gravitational force)?",
            years: ["2073 P6"],
            a: [
              "<strong>Gravitation</strong> is the <strong>mutual force of attraction</strong> that exists between any two bodies that have mass.",
              "It is one of the four fundamental forces of nature and acts over infinite range.",
              "Gravitation acts between all objects — from atoms to galaxies — but is noticeable only when at least one object has very large mass.",
              "Unlike gravity (Earth's pull), gravitation is the general term for attraction between any two masses.",
              "Example: Moon orbiting Earth, Earth orbiting the Sun, and ocean tides — all due to gravitation."
            ]
          },
          {
            q: "The value of universal gravitational constant is 6.67 × 10⁻¹¹ Nm²/kg². What does it mean?",
            years: ["2071 WDR"],
            a: [
              "G = 6.67 × 10⁻¹¹ Nm²/kg² means: <strong>two bodies each of mass 1 kg, placed 1 metre apart, attract each other with a force of 6.67 × 10⁻¹¹ N</strong>.",
              "In other words, 1 kg of matter attracts another 1 kg placed at unit distance with only 6.67 × 10⁻¹¹ N of force.",
              "This extremely small value explains why we do not feel gravitational pull between everyday objects — it is billions of times weaker than even the weight of a grain of rice.",
              "Gravitational effects are only significant when extremely large masses (planets, stars) are involved."
            ]
          },
          {
            q: "What is weightlessness?",
            years: ["2070 EDB"],
            a: [
              "<strong>Weightlessness</strong> is the condition in which a body's <strong>apparent weight becomes zero</strong>, even though gravitational force still acts on it.",
              "Weight is felt only when a surface exerts a normal reaction force on us. In freefall, this reaction force disappears.",
              "Situations where weightlessness occurs: (i) During freefall (e.g., broken lift), (ii) Astronauts in orbit, (iii) At the center of the Earth where forces cancel.",
              "Weightlessness does NOT mean gravity is absent — it means the reaction force is absent.",
              "Effects: liquids float as droplets, walking and eating become difficult, the body feels like it is 'floating'."
            ]
          },
          {
            q: "In which condition will the acceleration due to gravity of a parachute become zero?",
            years: ["2070 WDR"],
            a: [
              "The acceleration due to gravity of a parachute becomes zero when the <strong>upward air resistance (upthrust) equals the downward weight (gravitational force)</strong>.",
              "At this point, net force = 0, so by Newton's second law (F = ma), acceleration = 0.",
              "This is called <strong>terminal velocity</strong> — the parachute then falls at constant speed.",
              "The parachutist continues falling but speed no longer increases from that point.",
              "Parachutes have large surface areas specifically to increase air resistance, making terminal velocity reached quickly at a safe speed."
            ]
          },
          {
            q: "In which direction does the force of gravity act?",
            years: ["2069 EDB"],
            a: [
              "The force of gravity always acts <strong>vertically downward — toward the center of the heavenly body</strong> (e.g., Earth's center).",
              "Gravity is always attractive — it never pushes objects away.",
              "This is why objects fall to the ground when dropped, rivers flow downhill, and the atmosphere is held close to Earth.",
              "Wherever you stand on Earth's surface, gravity points directly toward Earth's center."
            ]
          },
          {
            q: "Write one effect seen on ocean or sea due to gravitation of the moon and the sun.",
            years: ["2069 WDR"],
            a: [
              "<strong>Tides</strong> are the most prominent effect seen on oceans and seas due to the gravitational pull of the moon and the sun.",
              "The moon's gravity pulls ocean water on the side facing the moon, creating a <strong>high tide</strong> (water bulge). A corresponding high tide also appears on the opposite side.",
              "The sun also exerts a pull, but its effect is smaller than the moon's due to its much greater distance.",
              "When sun, moon, and Earth are aligned (new/full moon): <strong>Spring tides</strong> (very high tides) occur.",
              "When sun and moon are at right angles to Earth: <strong>Neap tides</strong> (lower tides) occur."
            ]
          },
          {
            q: "Where does the weight of a body become maximum on the surface of the earth?",
            years: ["2069 FWDR"],
            a: [
              "The weight of a body is <strong>maximum at the polar regions</strong> of the Earth.",
              "Since W = mg, and g is maximum at the poles (g = 9.83 m/s²), weight is greatest there.",
              "g is maximum at the poles because Earth's radius is smallest there. Since g = GM/R², smaller R → larger g.",
              "For the same mass, weight is greatest at poles and least at the equator (g = 9.78 m/s²).",
              "Weight is zero at the center of Earth (g = 0 there)."
            ]
          },
          {
            q: "What are the two factors that affect the force of gravitation?",
            years: ["2069 Supp"],
            a: [
              "According to F = Gm₁m₂/r², two factors affect the gravitational force:",
              "<strong>1. Product of the masses (m₁ × m₂):</strong> Greater the masses, greater the force. If either mass doubles, the force doubles. (F ∝ m₁m₂)",
              "<strong>2. Distance between their centers (r):</strong> Greater the distance, lesser the force. If distance doubles, force becomes one-fourth. (F ∝ 1/r² — inverse square law)",
              "Note: G is a universal constant and does not vary — it is not a factor that changes."
            ]
          },
          {
            q: "What is the value of acceleration due to gravity at the equatorial region of the earth? Write in SI unit.",
            years: ["2066 FWDR"],
            a: [
              "The value of acceleration due to gravity at the equatorial region of Earth is <strong>g = 9.78 m/s²</strong>.",
              "Its SI unit is <strong>m/s²</strong> (metres per second squared).",
              "This is slightly less than the standard value (9.8 m/s²) because the equatorial radius is greater than the polar radius.",
              "Since g = GM/R², a larger R at the equator gives a smaller g.",
              "Earth's rotation also slightly reduces the effective g at the equator."
            ]
          }
        ],

        "2mark": [
          {
            q: "Why does the value of 'g' vary from place to place on the earth's surface?",
            years: ["2075 P1"],
            a: [
              "The value of g varies because: <strong>g = GM/R²</strong> — it depends on the distance from Earth's center (R).",
              "Earth is not a perfect sphere — it is an <strong>oblate spheroid</strong>: flattened at poles and bulging at the equator.",
              "At the <strong>poles</strong>: Radius is smaller → g is <strong>larger</strong> (9.83 m/s²).",
              "At the <strong>equator</strong>: Radius is larger → g is <strong>smaller</strong> (9.78 m/s²).",
              "g also decreases as altitude increases (effective R increases) and decreases below the surface, becoming zero at Earth's center.",
              "Earth's rotation causes an additional slight reduction in effective g at the equator due to centrifugal effect."
            ]
          },
          {
            q: "The mass of the earth is 6 × 10²⁴ kg and its radius is 6.4 × 10⁶ m. Calculate the value of 'g'.",
            years: ["2075 P2"],
            a: [
              "<strong>Given:</strong> M = 6 × 10²⁴ kg, R = 6.4 × 10⁶ m, G = 6.67 × 10⁻¹¹ Nm²/kg²",
              "<strong>Formula:</strong> g = GM/R²",
              "<strong>Calculation:</strong>",
              "g = (6.67 × 10⁻¹¹ × 6 × 10²⁴) / (6.4 × 10⁶)²",
              "= (40.02 × 10¹³) / (40.96 × 10¹²)",
              "= 400.2 / 40.96",
              "<strong>∴ g ≈ 9.77 m/s²</strong>",
              "This matches the standard surface value of g (~9.8 m/s²), confirming our formula."
            ]
          },
          {
            q: "How does the value of 'g' change if we go above the surface of the earth? Write with reason.",
            years: ["2074 P1"],
            a: [
              "The value of g <strong>decreases</strong> as we move above Earth's surface.",
              "<strong>Reason:</strong> g = GM/R². As height (h) increases, the effective distance from Earth's center becomes (R + h). A larger denominator gives a smaller g.",
              "Since g ∝ 1/R², even a small increase in height noticeably reduces g.",
              "At height equal to Earth's radius (R), g becomes <strong>one-fourth</strong> of its surface value.",
              "At very large distances (outer space), g approaches zero — this is why spacecraft can escape Earth's gravity.",
              "This principle is used to calculate satellite orbits: higher orbit = weaker gravity = slower orbital speed needed."
            ]
          },
          {
            q: "State the differences between mass and weight.",
            years: ["2074 P2", "2073 P1"],
            a: [
              "<strong>Mass:</strong>",
              "→ Quantity of matter in a body.",
              "→ Scalar quantity.",
              "→ SI unit: kilogram (kg).",
              "→ Constant everywhere in the universe.",
              "→ Measured by a beam balance.",
              "→ Cannot be zero.",
              "<strong>Weight:</strong>",
              "→ Gravitational force on a body (W = mg).",
              "→ Vector quantity (acts downward).",
              "→ SI unit: Newton (N).",
              "→ Varies from place to place (depends on g).",
              "→ Measured by a spring balance.",
              "→ Can be zero (at Earth's center or in freefall)."
            ]
          },
          {
            q: "Why do astronauts feel weightless in a spacecraft?",
            years: ["2073 P2"],
            a: [
              "Astronauts feel weightless because both the astronaut and the spacecraft are in a state of <strong>continuous freefall</strong> toward the Earth.",
              "In orbit, gravity still acts (it keeps the spacecraft in orbit), but there is no surface pushing back — <strong>no normal reaction force</strong> — so apparent weight = 0.",
              "Weight is only felt when a surface exerts a normal reaction on us. In freefall, this force vanishes.",
              "This is similar to briefly feeling 'weightless' at the top of a roller coaster or when a lift suddenly drops.",
              "This state is called <strong>microgravity</strong> or apparent weightlessness. Gravity is present; it is only the reaction force that is absent."
            ]
          },
          {
            q: "Why is it easier to lift a bucket of water inside a well than outside?",
            years: ["2072 P1"],
            a: [
              "Inside the well, the submerged bucket experiences an upward <strong>buoyant force (upthrust)</strong> from the surrounding water.",
              "By Archimedes' principle, buoyant force = weight of water displaced by the bucket.",
              "This upward force partially cancels the downward weight of the bucket.",
              "<strong>Effective weight inside water = Actual weight − Buoyant force</strong>",
              "So the net downward force is reduced — it feels lighter and is easier to lift.",
              "Outside the well, no buoyant force acts, so the full actual weight must be lifted — making it harder."
            ]
          }
        ],

        "34mark": [
          {
            q: "Mass of Jupiter is 1.9 × 10²⁷ kg and mass of the Sun is 2 × 10³⁰ kg. The distance between them is 8.1 × 10¹¹ m. Calculate the gravitational force between Jupiter and the Sun.",
            years: ["2075 P1"],
            a: [
              "<strong>Given:</strong>",
              "→ Mass of Jupiter (m₁) = 1.9 × 10²⁷ kg",
              "→ Mass of Sun (m₂) = 2 × 10³⁰ kg",
              "→ Distance (r) = 8.1 × 10¹¹ m",
              "→ G = 6.67 × 10⁻¹¹ Nm²/kg²",
              "<strong>Formula:</strong> F = Gm₁m₂ / r²",
              "<strong>Solution:</strong>",
              "→ Numerator = 6.67 × 10⁻¹¹ × 1.9 × 10²⁷ × 2 × 10³⁰ = 25.35 × 10⁴⁶",
              "→ Denominator = (8.1 × 10¹¹)² = 65.61 × 10²²",
              "→ F = 25.35 × 10⁴⁶ / 65.61 × 10²² = 0.3864 × 10²⁴",
              "<strong>∴ F ≈ 3.86 × 10²³ N</strong>",
              "This enormous force is what keeps Jupiter in its orbit around the Sun."
            ]
          },
          {
            q: "An object is dropped from 12 m height of a tower and reaches the ground in 2 seconds. At what condition does the acceleration due to gravity become zero?",
            years: ["2075 P2"],
            a: [
              "<strong>Part A — Finding g:</strong>",
              "→ Given: h = 12 m, t = 2 s, u = 0",
              "→ Using: h = ut + ½gt²",
              "→ 12 = 0 + ½ × g × (2)² = 2g",
              "<strong>→ ∴ g = 6 m/s²</strong>",
              "<strong>Part B — When does g = 0?</strong>",
              "→ <strong>At the center of the Earth:</strong> Gravitational forces from all directions cancel, net g = 0.",
              "→ <strong>In freefall/orbit:</strong> Apparent effect of g becomes zero (weightlessness).",
              "→ <strong>At infinite distance from Earth:</strong> g approaches 0 as r → ∞ in g = GM/r²."
            ]
          },
          {
            q: "How much time does a stone take to reach the surface from a height of 20 m when dropped? Also find the acceleration due to gravity after 3 seconds.",
            years: ["2074 P2"],
            a: [
              "<strong>Part A — Time to reach ground:</strong>",
              "→ Given: h = 20 m, u = 0, g = 9.8 m/s²",
              "→ Using: h = ut + ½gt²",
              "→ 20 = 0 + ½ × 9.8 × t²",
              "→ 20 = 4.9t²",
              "→ t² = 20/4.9 = 4.08",
              "<strong>→ ∴ t = √4.08 ≈ 2.02 seconds</strong>",
              "<strong>Part B — Acceleration due to gravity after 3 seconds:</strong>",
              "→ Acceleration due to gravity is <strong>constant</strong> throughout freefall near Earth's surface.",
              "<strong>→ g = 9.8 m/s²</strong> (does not change with time).",
              "→ Velocity after 3 s = u + gt = 0 + 9.8 × 3 = 29.4 m/s (downward)."
            ]
          },
          {
            q: "The mass of the moon is 7.36 × 10²² kg and its radius is 1.7 × 10⁶ m. Calculate g on the moon and the weight of a 50 kg object on the moon.",
            years: ["2074 P3"],
            a: [
              "<strong>Part A — g on the moon:</strong>",
              "→ Given: M = 7.36 × 10²² kg, R = 1.7 × 10⁶ m, G = 6.67 × 10⁻¹¹ Nm²/kg²",
              "→ Formula: g = GM/R²",
              "→ g = (6.67 × 10⁻¹¹ × 7.36 × 10²²) / (1.7 × 10⁶)²",
              "→ = (49.09 × 10¹¹) / (2.89 × 10¹²)",
              "<strong>→ ∴ g_moon ≈ 1.70 m/s²</strong> (≈ 1/6th of Earth's g)",
              "<strong>Part B — Weight of 50 kg on moon:</strong>",
              "→ W = m × g_moon = 50 × 1.70",
              "<strong>→ ∴ W = 85 N</strong>",
              "→ On Earth: W = 50 × 9.8 = 490 N — confirming weight is ~6× less on the moon."
            ]
          },
          {
            q: "The gravitational force between two bodies is 20 N at a distance of 4 m. How much force is produced when they are 2 m apart?",
            years: ["2073 P1"],
            a: [
              "<strong>Given:</strong> F₁ = 20 N, r₁ = 4 m, r₂ = 2 m",
              "<strong>Using Inverse Square Law:</strong> F ∝ 1/r²",
              "→ F₁/F₂ = r₂²/r₁²",
              "→ 20/F₂ = (2)²/(4)² = 4/16 = 1/4",
              "→ F₂ = 20 × 4",
              "<strong>→ ∴ F₂ = 80 N</strong>",
              "<strong>Interpretation:</strong> When distance is halved, gravitational force becomes <strong>4 times larger</strong>. This is the inverse square law — halving distance quadruples the force.",
              "This explains why gravity is stronger at low altitudes and why inner planets orbit the Sun faster."
            ]
          },
          {
            q: "Two objects each of mass 5 kg are separated by a distance of 1 m. Calculate the gravitational force between them.",
            years: ["2072 P1"],
            a: [
              "<strong>Given:</strong> m₁ = m₂ = 5 kg, r = 1 m, G = 6.67 × 10⁻¹¹ Nm²/kg²",
              "<strong>Formula:</strong> F = Gm₁m₂/r²",
              "→ F = (6.67 × 10⁻¹¹ × 5 × 5) / (1)²",
              "→ F = (6.67 × 10⁻¹¹ × 25) / 1",
              "→ F = 166.75 × 10⁻¹¹",
              "<strong>→ ∴ F = 1.67 × 10⁻⁹ N</strong>",
              "This extremely small force confirms that gravity between everyday objects is negligibly weak. Significant gravitational effects require extremely large masses like planets or stars."
            ]
          },
          {
            q: "A stone is thrown vertically upward with a velocity of 19.6 m/s. Find: (a) maximum height reached, (b) time taken to reach maximum height.",
            years: ["2071 P1"],
            a: [
              "<strong>Given:</strong> u = 19.6 m/s (upward), g = 9.8 m/s² (deceleration going up), v = 0 at top",
              "<strong>Part A — Maximum Height:</strong>",
              "→ Using: v² = u² − 2gh",
              "→ 0 = (19.6)² − 2 × 9.8 × h",
              "→ 0 = 384.16 − 19.6h",
              "→ h = 384.16 / 19.6",
              "<strong>→ ∴ h = 19.6 m</strong>",
              "<strong>Part B — Time to reach maximum height:</strong>",
              "→ Using: v = u − gt",
              "→ 0 = 19.6 − 9.8 × t",
              "→ t = 19.6 / 9.8",
              "<strong>→ ∴ t = 2 seconds</strong>",
              "Note: The stone takes equal time (2 s) to come back down → total time in air = 4 seconds."
            ]
          }
        ]
      }
    }
  },

  chemistry: {
    label: "Chemistry",
    lessons: {},
    locked: true
  },

  biology: {
    label: "Biology",
    lessons: {},
    locked: true
  },

  geology: {
    label: "Geology & Astronomy",
    lessons: {},
    locked: true
  }
};
