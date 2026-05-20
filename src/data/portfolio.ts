export type Project = {
  slug: string;
  title: string;
  type: string;
  location: string;
  year: string;
  img: string;
  shortDescription: string;
  description: string;
  gallery: string[];
};

export type Category = {
  slug: string;
  title: string;
  blurb: string;
  projects: Project[];
};

export const categories: Category[] = [
  {
    slug: "arts-and-culture",
    title: "Arts And Culture",
    blurb: "Exceptional architecture in the Arts And Culture sector.",
    projects: [
      {
        slug: "al-jamea-karen-proposal",
        title: "Al Jamea Karen, Proposal",
        type: "Arts And Culture",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Al Jamea Karen, Proposal/IMAGES/1.jpg",
        shortDescription: "Al Jamea Karen, Proposal stands as a testament to contextual architecture in Kenya. Discover how this arts and culture space harmonizes with its environment. Explore the full design journey below.",
        description: "Al Jamea Karen, Proposal sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Al Jamea Karen, Proposal/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Al Jamea Karen, Proposal/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Al Jamea Karen, Proposal/IMAGES/3.jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Al Jamea Karen, Proposal/IMAGES/4.jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Al Jamea Karen, Proposal/IMAGES/5.jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Al Jamea Karen, Proposal/IMAGES/6.jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Al Jamea Karen, Proposal/IMAGES/7.jpg"]
      },
      {
        slug: "capstone-faith-karen-design-concept-2021",
        title: "Capstone Faith Karen, Design Concept,2021",
        type: "Arts And Culture",
        location: "Kenya",
        year: "2021",
        img: "/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Capstone Faith Karen, Design Concept,2021/IMAGES/Capstone-Karen (2).jpg",
        shortDescription: "Discover the visionary design of Capstone Faith Karen, Design Concept,2021. Located in Kenya, this arts and culture project sets a new standard for sustainable and aesthetic integrity. Explore the full design journey below.",
        description: "STATUS Design Concept Masterplan concept for a religious center in Karen The Capstone Karen masterplan concept draws from a series of design drivers all meant to reflect Capstone's foundational brief and various Biblical analogies. The masterplan comprises the ministerial buildings, housing, and outdoor landscaped area. The design of the ministerial buildings consists of three pavilions – forming a triad of sorts. The pavilions are The Sanctuary, The Administrative Building and The Sunday School Building. They are set in and surrounded by a lush and verdant landscape that rings their positions to create a sense of spiritual tranquil: the place of refuge in a weary land. The three pavilions share a powerful concentric courtyard that unites them – reflecting a three but one triad. It is a functional and powerful space that can serve for various events and functions. The assembly of buildings are surrounded by two rings of pathways that will be intentionally treed and landscaped to create a comfortable meditative circuit. The aim is to define an interpretive experience that tells the ministry story as congregants and visitors use the space. The very entrance and arrival experience is similarly envisioned to be a powerful one incorporating waterways, gardens, and appropriate drop-offs/ pickup points. At the forest edge of the campus are a few residential cottages that will sit within a quiet and forested neighborhood. Capstone Faith, Nairobi,",
        gallery: ["/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Capstone Faith Karen, Design Concept,2021/IMAGES/Capstone-Karen (2).jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Capstone Faith Karen, Design Concept,2021/IMAGES/View 1.jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Capstone Faith Karen, Design Concept,2021/IMAGES/View 2.jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Capstone Faith Karen, Design Concept,2021/IMAGES/View 3-1.jpg"]
      },
      {
        slug: "jomo-kenyatta-public-beach-proposal",
        title: "Jomo Kenyatta Public Beach, Proposal",
        type: "Arts And Culture",
        location: "Kenya",
        year: "2019",
        img: "/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Jomo Kenyatta Public Beach, Proposal/IMAGES/1.jpg",
        shortDescription: "Uncover the story behind Jomo Kenyatta Public Beach, Proposal, a sophisticated arts and culture project in Kenya that balances community needs with architectural elegance. Explore the full design journey below.",
        description: "STATUS Design Proposal Design concept for the regeneration of Jomo Kenyatta Public Beach. Jomo Kenyatta Public Beach is located on Bamburi in Northern Mombasa, off the Mombasa-Malindi Highway and was reserved as a public beach for recreation in 1960 under Management of the Mombasa Municipal Council. It covers approximately 3.7 hectares. The beach and surrounds are well utilised by the public, especially during holidays and over the weekends. However, services and facilities provided are not sufficient and should be further improved to enhance its utility. Jomo Kenyatta Beach can be greatly improved with simple interventions. PLANNING's proposal is focused on creation of public spaces that are well designed, well defined, inclusive, and usable. Any interventions would be geared towards improving the user experience in what is already a highly utilized and popular beachfront. Access and circulation are improved and pedestrian movement is enhanced and prioritized.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Jomo Kenyatta Public Beach, Proposal/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Jomo Kenyatta Public Beach, Proposal/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Jomo Kenyatta Public Beach, Proposal/IMAGES/3.jpg"]
      },
      {
        slug: "mama-ngina-waterfront-2019",
        title: "Mama Ngina Waterfront, 2019",
        type: "Arts And Culture",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Mama Ngina Waterfront, 2019/IMAGES/Gateway.jpg",
        shortDescription: "Discover the visionary design of Mama Ngina Waterfront, 2019. Located in Kenya, this arts and culture project sets a new standard for sustainable and aesthetic integrity. Explore the full design journey below.",
        description: "Mama Ngina Waterfront, 2019 sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Mama Ngina Waterfront, 2019/IMAGES/Gateway.jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Mama Ngina Waterfront, 2019/IMAGES/MAMA NGINA AMPHITHEATRE.jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Mama Ngina Waterfront, 2019/IMAGES/MAMA NGINA COURTYARD IMG 1.jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Mama Ngina Waterfront, 2019/IMAGES/MAMA NGINA COURTYARD IMG 3.jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Mama Ngina Waterfront, 2019/IMAGES/MAMA NGINA CULTURE IMG 2.jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Mama Ngina Waterfront, 2019/IMAGES/MAMA NGINA CULTURE IMG 8.jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Mama Ngina Waterfront, 2019/IMAGES/MAMA NGINA GATEWAY IMG 1.jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Mama Ngina Waterfront, 2019/IMAGES/MAMA NGINA PIGEON TOWER IMG 2.jpg","/assets/images/2024/SECTOR PROFILES/ARTS AND CULTURE/Mama Ngina Waterfront, 2019/IMAGES/Mombasa Waterfront_CONCEPT_Site Plan.jpg"]
      },
    ]
  },
  {
    slug: "corporate-offices",
    title: "Corporate Offices",
    blurb: "Exceptional architecture in the Corporate Offices sector.",
    projects: [
      {
        slug: "citibank-upperhill",
        title: "Citibank Upperhill",
        type: "Corporate Offices",
        location: "Kenya",
        year: "1998",
        img: "/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/CITIBANK UPPERHILL/IMAGES/citi40.jpg",
        shortDescription: "Explore the intricate details of Citibank Upperhill, a premier corporate offices development in Kenya that pushes the boundaries of craft and form. Explore the full design journey below.",
        description: "The Vice President for Citibank Real Estate presented a simple yet exacting brief, “A box with no columns” with an “International but also Kenyan” appearance. As Architects, our main design challenges were: ŸCitibank had already committed themselves to the site on Nairobi Hill for their new offices, in advance of selecting architects. This in itself presented several challenges which included: poor water, sewer, power and road services on Nairobi Hill, steep topography composed entirely of black trap rock, a very hard rock, difficult to quarry; and major road access compromises arising from security precautions from the adjacent British High Commission (under construction at the time). ŸReducing the accommodation to meet the strict budget. • Persuading Citibank Head Office in the USA that a fully air-conditioned building was not necessary. Ÿ Minimizing excavation of rock and reusing the resulting rubble for landscaping, to reduce carta way costs. ŸKeeping columns to a minimum. ŸExploiting the excellent view over the city. ŸProviding high levels of security whilst maintaining a “warm and welcome appearance”. The atrium concept emerged with deep balcony work spaces looking into the naturally lit atrium and through the massive east-facing picture window overlooking the city. Columns were kept to a minimum by the 11 meter spanning beams. A roof grid provides natural light into the Atrium whilst minimizing heat from the sun. The hand-worked aluminium entrance doors (hand-beaten by Samburu women and large bas relief sculptured panels provide the “Kenya” element. At the handing-over ceremony, Mr. Hands, Citibank’s Vicepresident for Real Estate stated; “You have not given me a box with no columns. You have given me a beautiful box with no columns”. Citibank, Upper Hill, Nairobi,",
        gallery: ["/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/CITIBANK UPPERHILL/IMAGES/citi40.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/CITIBANK UPPERHILL/IMAGES/CITIBANK AERIAL VIEW.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/CITIBANK UPPERHILL/IMAGES/CITIBANK EXT 1.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/CITIBANK UPPERHILL/IMAGES/CITIBANK SIDEVIEW.jpg"]
      },
      {
        slug: "diamond-trust-bank-proposal",
        title: "Diamond Trust Bank, Proposal",
        type: "Corporate Offices",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/DIAMOND TRUST BANK, Proposal/IMAGES/1.jpg",
        shortDescription: "A journey through light and material: Diamond Trust Bank, Proposal in Kenya re-imagines what a corporate offices space can achieve. Explore the full design journey below.",
        description: "Diamond Trust Bank, Proposal sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/DIAMOND TRUST BANK, Proposal/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/DIAMOND TRUST BANK, Proposal/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/DIAMOND TRUST BANK, Proposal/IMAGES/3.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/DIAMOND TRUST BANK, Proposal/IMAGES/4.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/DIAMOND TRUST BANK, Proposal/IMAGES/5.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/DIAMOND TRUST BANK, Proposal/IMAGES/image_1.png","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/DIAMOND TRUST BANK, Proposal/IMAGES/image_2.png","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/DIAMOND TRUST BANK, Proposal/IMAGES/image_3.png","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/DIAMOND TRUST BANK, Proposal/IMAGES/image_4.png","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/DIAMOND TRUST BANK, Proposal/IMAGES/image_5.png"]
      },
      {
        slug: "i-m-kigali",
        title: "I&m Kigali",
        type: "Corporate Offices",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M KIGALI/IMAGES/back facade_.jpg",
        shortDescription: "I&m Kigali stands as a testament to contextual architecture in Kenya. Discover how this corporate offices space harmonizes with its environment. Explore the full design journey below.",
        description: "I&m Kigali sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M KIGALI/IMAGES/back facade_.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M KIGALI/IMAGES/DSC05720.JPG","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M KIGALI/IMAGES/DSC05726.JPG","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M KIGALI/IMAGES/I&M EXTERIOR_ROOFTOP 2.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M KIGALI/IMAGES/I&M INTERIOR_MINI LOBBY.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M KIGALI/IMAGES/I&M INTERIOR_SHARED DESKING 4.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M KIGALI/IMAGES/I&M KIGALI_exterior 01.jpg"]
      },
      {
        slug: "i-m-limuru-road",
        title: "I&m Limuru Road",
        type: "Corporate Offices",
        location: "Kenya",
        year: "2020",
        img: "/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M LIMURU ROAD/IMAGES/1594546463898.jpg",
        shortDescription: "Uncover the story behind I&m Limuru Road, a sophisticated corporate offices project in Kenya that balances community needs with architectural elegance. Explore the full design journey below.",
        description: "Situated at the junction of Limuru Road & First Avenue Parklands, the proposed building will house the new headquarters of I&M Bank. Access will be off of First Avenue Parklands. The ground floor and subsequent seven floors will cater to the bank, its sister insurance company and other tenants. The 4 levels of basement ensure ample parking for tenants and users of the building. The U-Shaped floor plan helps the shading of the building, whilst allowing light and ventilation to filter through. This is further reinforced with the double volume sky gardens that feature on the south eastern façade facing Limuru Road and the City Park. The sky gardens will be planted with shrubs and small trees help filter the air coming into the atrium. Additionally, a cascading water feature on the ground floor provides a source of cool air through the double skin on the façade, while also masking the sound pollution from Limuru Road. Rain water harvesting, waste water treatment and solar power generation are being investigated as means to further increase the efficiency of the building. I&M Bank Headquarters, Limuru Road, Nairobi,",
        gallery: ["/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M LIMURU ROAD/IMAGES/1594546463898.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M LIMURU ROAD/IMAGES/EXTERIOR DETAIL1 EDITED-TOM-5910.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M LIMURU ROAD/IMAGES/EXTERIOR DETAIL1 EDITED-TOM-5917.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M LIMURU ROAD/IMAGES/I&M_INTERIOR_DETAIL_8.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M LIMURU ROAD/IMAGES/I&M_INTERIOR_DETAIL_9.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M LIMURU ROAD/IMAGES/I-M FAR EXTERIOR _5.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M LIMURU ROAD/IMAGES/INTERIOR ROOOFTOP EDITED-6073.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M LIMURU ROAD/IMAGES/INTERIOR ROOOFTOP EDITED-6117--1.jpg"]
      },
      {
        slug: "i-m-nairobi-cbd",
        title: "I&m Nairobi Cbd",
        type: "Corporate Offices",
        location: "Kenya",
        year: "2020",
        img: "/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M NAIROBI CBD/IMAGES/IMG_3889.jpg",
        shortDescription: "Uncover the story behind I&m Nairobi Cbd, a sophisticated corporate offices project in Kenya that balances community needs with architectural elegance. Explore the full design journey below.",
        description: "PLANNING was approached by the client because of the way in which we had solved the challenges of Nairobi’s Lonrho House, a tower constructed over an existing three storey building on a restricted site. I&M Bank Ltd required a tower that would hold both office and retail space on their spatially restricted city center plot. Detailed cost and benefit studies were carried out at early design stages for several building options, keeping in mind existing buildings and busy roads on all sides and the need to build over the entire site. The design option agreed upon was a three level atrium opening onto Kenyatta Avenue and Muindi Mbingu Street. This gave pedestrians access to podium shops, and offices in the tower above. The Atrium concept was successful in visually and functionally separating the retail from the offices, giving a visual impression of the tower rising from the ground (podium). The Client felt that this option gave him the best commercial advantages. The office floors are designed so that natural cross ventilation is possible. Staircases, elevators and lavatories are on the westerly side of the building to shield offices from uncomfortable heat gains and glare from the afternoon sun. Limited building space meant a heat reflective glass cladding system would have to arrive on site in fully finished sections ready for assembly. All floors are of a composite construction, where floor slabs were precast off site and lifted into position, thereby minimizing onsite concrete mixing and material storage. This area of the City is heavily polluted with noise and car exhaust fumes requiring mechanical air handling for the building. 100% standby power provision and water storage in the basement ensures the building can survive temporary power and water supply failures. I&M Bank Tower, Nairobi CBD,",
        gallery: ["/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M NAIROBI CBD/IMAGES/IMG_3889.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M NAIROBI CBD/IMAGES/im_1.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M NAIROBI CBD/IMAGES/im_2.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M NAIROBI CBD/IMAGES/Pg38Img 14.png","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/I&M NAIROBI CBD/IMAGES/Pg38Img 19.png"]
      },
      {
        slug: "kenya-commercial-bank-hq",
        title: "Kenya Commercial Bank Hq",
        type: "Corporate Offices",
        location: "Kenya",
        year: "2015",
        img: "/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/KENYA COMMERCIAL BANK HQ/IMAGES/IMG_0584.jpg",
        shortDescription: "Kenya Commercial Bank Hq stands as a testament to contextual architecture in Kenya. Discover how this corporate offices space harmonizes with its environment. Explore the full design journey below.",
        description: "An economically sustainable and environmentally friendly tower for the bank's headquarters in Upper Hill, Nairobi. The tower house offices a state of the art banking hall, and administrative offices and conference facilities for meetings, conventions and workshops. The site presented three major challenges for a tower building: height limitations, very hard stone bed-rock and Nairobi's equatorial sun. A triangular-shaped tower block was arrived at. At 25 levels the triangular shaped plan gives all facades of the building prominence. Environmental design was key in defining the architecture, with all floors naturally lit and ventilated. Heat gain into the building is kept to a minimum whilst daylight to a maximum without the use of mechanical systems. Exposed precast concrete waffle floor slabs provide for adequate thermal mass, absorbing internally generated heat during the day and cool air during the night. To reduce heat gain, extensive use of light-reflecting solar shading fins was adopted, coupled with louvered horizontal shading on the high light transmittance glazing. Three sky courts, each within three \"fire compartments\" were created to limit the spread of fire and smoke, allow air movement into the building and up through the atrium. The use of precast concrete floor slabs ensured speedier construction- a deliberate move to make up time after a lengthy excavation period. The building provides 800sqm of office space per level, and 400 car parking spaces on five levels. Rainwater collection and treatment and water recycling reduce the already low running costs. The building is disabled-accessible and is serviced by seven high speed lifts, two of which are dedicated for fire-fighting and one VIP lift. The building was completed in 2015.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/KENYA COMMERCIAL BANK HQ/IMAGES/IMG_0584.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/KENYA COMMERCIAL BANK HQ/IMAGES/KCB 2020-02-04-min.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/KENYA COMMERCIAL BANK HQ/IMAGES/kcb.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/KENYA COMMERCIAL BANK HQ/IMAGES/PSS_0351jpg.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/KENYA COMMERCIAL BANK HQ/IMAGES/PSS_2498.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/KENYA COMMERCIAL BANK HQ/IMAGES/PSS_2618 - edited.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/KENYA COMMERCIAL BANK HQ/IMAGES/PSS_2619.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/KENYA COMMERCIAL BANK HQ/IMAGES/PSS_2702.jpg"]
      },
      {
        slug: "lonrho-house",
        title: "Lonrho House",
        type: "Corporate Offices",
        location: "Kenya",
        year: "1991",
        img: "/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/LONRHO HOUSE/IMAGES/LONRHO 3.jpg",
        shortDescription: "From its bold civic presence to its refined interiors, Lonrho House in Kenya is a masterclass in modern corporate offices architecture. Explore the full design journey below.",
        description: "Designed in 1989 to be Lonrho Africa’s Headquarters. The brief proved to be a challenge; to design a modern commercial high-rise that must show a minimum of 14% return on capital. To be constructed over and through an existing, badly built, three floor building occupied by sitting tenants who could not be legally evicted, and whose day to day business had to continue. Four of Nairobi’s leading architectural practices were approached and all declined as each considered the brief to be impossible. PLANNING with the Structural Engineer I.B. Patel thought otherwise, and the Lonrho Africa Building now stands as evidence of that. PLANNING asked for 10 days to explore the options and think it through. This fully air-conditioned building ranks technically as the most complex development ever attempted in East Africa (possibly Africa). The final design was completed on budget, with a 17% return on capital in the first years. Cars are parked above the existing building as basement parking was not an option. The car park floors are clear spans from Standard Street to Kaunda Street, with no columns between. Lonrho House, Nairobi CBD,",
        gallery: ["/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/LONRHO HOUSE/IMAGES/LONRHO 3.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/LONRHO HOUSE/IMAGES/LONRHO ROM KICC HELIPAD-1.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/LONRHO HOUSE/IMAGES/Mzee Jomo Kenyatta x Lornho.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/LONRHO HOUSE/IMAGES/Pg23Img 1.jpg"]
      },
      {
        slug: "nation-centre",
        title: "Nation Centre",
        type: "Corporate Offices",
        location: "Kenya",
        year: "1993",
        img: "/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/NATION CENTRE/IMAGES/DSC_4533 cropped.jpg",
        shortDescription: "Discover the visionary design of Nation Centre. Located in Kenya, this corporate offices project sets a new standard for sustainable and aesthetic integrity. Explore the full design journey below.",
        description: "PLANNING was commissioned to liaise with and take over from the international award winning architect, the late Henning Larsen, who was appointed by Industrial Promotion Services to produce the building’s Concept and its Outline Design. The Client’s brief to Henning Larsen was for a building that would establish the visual and commercial presence of the Nation Media Group within the Central Business District of Nairobi. The major challenges for Henning Larsen were the fast advancing technologies of the printing and graphics industries and the need (or otherwise) to accommodate these within this City Centre Building or elsewhere. (They were to be accommodated, later, in a building outside the City Centre) to proceed after the concept design stage had been completed by the late Henning Larsen and approved by the Client. PLANNING’s tasks included those of rationalizing the structure to accommodate the design and working out how best to place the building’s services (which were both sophisticated and considerable) within the constraints of the twin cylindrical towers. There were also problems to be resolved with the site, and with the Client’s requirements for adequate basement car parking. Construction of this building on its very constricted and busy City Centre site produced many challenges for the Consultants and for the Contractor. The building was however completed on budget and on time.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/NATION CENTRE/IMAGES/DSC_4533 cropped.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/NATION CENTRE/IMAGES/DSC_4533.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/NATION CENTRE/IMAGES/NATION CENTRE INTERIOR 6.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/NATION CENTRE/IMAGES/NATION HOUSE EXT 1.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/NATION CENTRE/IMAGES/NATION HOUSE INTERIOR 4.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/NATION CENTRE/IMAGES/NATION HOUSE NIGHT 1.jpg"]
      },
      {
        slug: "templeton-house-2019",
        title: "Templeton House, 2019",
        type: "Corporate Offices",
        location: "Kenya",
        year: "2019",
        img: "/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/TEMPLETON HOUSE, 2019/IMAGES/TEMPLETON FRONT VIEW.jpg",
        shortDescription: "A journey through light and material: Templeton House, 2019 in Kenya re-imagines what a corporate offices space can achieve. Explore the full design journey below.",
        description: "Templeton House Office Building is a situated in the lush and green neighbourhood of Westlands in Nairobi, Kenya. This four-story office building is designed to be a harmonious blend of efficiency and mid-century modern aesthetics, reflecting the spirit of contemporary workspace design while integrating seamlessly into the natural beauty of the surroundings. The primary design concept for this project is to create a sustainable and functional workspace that pays homage to the mid- century modern architectural style. This style emphasizes clean lines, open spaces, and a strong connection to nature. The well-treed environment in Westlands serves as a key inspiration, with the building's design intending to embrace and enhance its natural surroundings. The Building is conceived to optimize workspace functionality. It offers ample floor space while ensuring efficient circulation and use of natural light. The exterior of the building will feature sleek lines, minimalistic façades, and a neutral colour palette, characteristic of mid-century modern design. Large, punched windows and select open terraces will connect the interior with the exterior, promoting a sense of openness and harmony with the environment. The ground level is dedicated to parking facilities, ensuring convenient and secure access for tenants and visitors. Templeton House, Westlands, Nairobi Kenya",
        gallery: ["/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/TEMPLETON HOUSE, 2019/IMAGES/TEMPLETON FRONT VIEW.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/TEMPLETON HOUSE, 2019/IMAGES/TEMPLETON OFFICE BACK END  2.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/TEMPLETON HOUSE, 2019/IMAGES/TEMPLETON OFFICE BACK END.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/TEMPLETON HOUSE, 2019/IMAGES/TEMPLETON OFFICE FRONT VIEW 2.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/TEMPLETON HOUSE, 2019/IMAGES/TEMPLETON OFFICE SIDE VIEW.jpg"]
      },
      {
        slug: "the-atrium-2010",
        title: "The Atrium, 2010",
        type: "Corporate Offices",
        location: "Kenya",
        year: "2010",
        img: "/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/THE ATRIUM, 2010/IMAGES/1 copy-1.jpg",
        shortDescription: "Experience the future of corporate offices design with The Atrium, 2010. A landmark project in Kenya that redefines spatial excellence. Explore the full design journey below.",
        description: "The concept for The Atrium is based on Mies Van de Rohe's timeless architectural concept of “less is more”. All visible surfaces have been carefully proportioned so that they are functional and visually pleasing yet maintaining a clean, simple aesthetic. The Atrium is one of the few dedicated environmentally sustainable buildings in Kenya; it requires no air-conditioning and all the internal spaces are designed to function primarily with natural lighting during the day. This building has been designed to function via low energy solutions that offer the best building thermal performance (maximum peak temperatures do not exceed 27° C). The ATRIUM is designed around very simple and effective Environmental Sustainability design strategies: ŸOffice Space is designed around a central ventilation courtyard; with directional fresh air movement from offices into the courtyard via a stack effect updraft. ŸThe exterior western facade is finished in UV filtering glass curtain walling to reduce solar heat gains to the building while still maximizing day light in office spaces. ŸPermanently vented partition walls that permit natural cross air flow. ŸWater fixtures are designed to function on timer releases in order to ensure that water flow is just sufficient. ŸAll light fixtures utilize modern energy saving bulbs. The building has a net lettable area of 80,000 sq feet built over 6 floors around an internal landscaped courtyard. All offices conform to high international standards, with appropriate facilities for technology as well as health and safety. The building has ample parking with 218 bays. There is a 100% power backup generator, 2 weeks dedicated water reserve, fire-fighting water reserve tanks and secure fire escape routes. The Atrium is handicap accessible, with ramps and specialized washroom facilities on all floors. The Atrium, Nairobi Kenya MEDIUM SIZE PROJECTS, PROJECT PROFILE",
        gallery: ["/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/THE ATRIUM, 2010/IMAGES/1 copy-1.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/THE ATRIUM, 2010/IMAGES/11.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/THE ATRIUM, 2010/IMAGES/14.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/THE ATRIUM, 2010/IMAGES/16-1.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/THE ATRIUM, 2010/IMAGES/18.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/THE ATRIUM, 2010/IMAGES/2-1.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/THE ATRIUM, 2010/IMAGES/26-1.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/THE ATRIUM, 2010/IMAGES/3-1.jpg","/assets/images/2024/SECTOR PROFILES/CORPORATE OFFICES/THE ATRIUM, 2010/IMAGES/7-1.jpg"]
      },
    ]
  },
  {
    slug: "education",
    title: "Education",
    blurb: "Exceptional architecture in the Education sector.",
    projects: [
      {
        slug: "aga-khan-msa-2005-2012",
        title: "Aga Khan Msa, 2005 - 2012",
        type: "Education",
        location: "Kenya",
        year: "2005-2012",
        img: "/assets/images/2024/SECTOR PROFILES/EDUCATION/AGA KHAN MSA, 2005 - 2012/IMAGES/AGA KHAN ACADEMY MOMBASA EXTERIOR 1.jpg",
        shortDescription: "Explore the intricate details of Aga Khan Msa, 2005 - 2012, a premier education development in Kenya that pushes the boundaries of craft and form. Explore the full design journey below.",
        description: "The Mombasa Academy is the first of a series of educational centres of Excellence to be built worldwide by the Aga Khan Network. Each academy will express the architectural heritage and cultural identity of the country in which it is built, and the Mombasa Academy has interpreted the Kenya Coastal Swahili style in a contemporary manner with external walls of sawn coral punctuated with grille work of cast aluminium and red tiled roofed balconies. PLANNING has been involved in detailed design, f rom schematics by others, and contract supervision to completion, for the new Nursery, Primary and Secondary Schools for the Aga Khan Education Services. The phased project is ongoing.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/EDUCATION/AGA KHAN MSA, 2005 - 2012/IMAGES/AGA KHAN ACADEMY MOMBASA EXTERIOR 1.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/AGA KHAN MSA, 2005 - 2012/IMAGES/DSC01210.JPG","/assets/images/2024/SECTOR PROFILES/EDUCATION/AGA KHAN MSA, 2005 - 2012/IMAGES/DSC01226.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/AGA KHAN MSA, 2005 - 2012/IMAGES/DSCN9351.JPG","/assets/images/2024/SECTOR PROFILES/EDUCATION/AGA KHAN MSA, 2005 - 2012/IMAGES/IMG_0241 - Copy.jpg"]
      },
      {
        slug: "braeburn-schools-1985-onwards",
        title: "Braeburn Schools, 1985 Onwards",
        type: "Education",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/EDUCATION/BRAEBURN SCHOOLS, 1985 Onwards/IMAGES/B THIKA 2.jpg",
        shortDescription: "Experience the future of education design with Braeburn Schools, 1985 Onwards. A landmark project in Kenya that redefines spatial excellence. Explore the full design journey below.",
        description: "Braeburn Schools, 1985 Onwards sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/EDUCATION/BRAEBURN SCHOOLS, 1985 Onwards/IMAGES/B THIKA 2.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/BRAEBURN SCHOOLS, 1985 Onwards/IMAGES/B THIKA.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/BRAEBURN SCHOOLS, 1985 Onwards/IMAGES/BGE 1.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/BRAEBURN SCHOOLS, 1985 Onwards/IMAGES/BGR.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/BRAEBURN SCHOOLS, 1985 Onwards/IMAGES/BGR2.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/BRAEBURN SCHOOLS, 1985 Onwards/IMAGES/BRAEBURN GARDEN ESTATE.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/BRAEBURN SCHOOLS, 1985 Onwards/IMAGES/BRAEBURN MOMBASA 2.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/BRAEBURN SCHOOLS, 1985 Onwards/IMAGES/BRAEBURN MOMBASA.jpg"]
      },
      {
        slug: "mlc-prep-school-proposal",
        title: "Mlc Prep School, Proposal",
        type: "Education",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/EDUCATION/MLC PREP SCHOOL, Proposal/IMAGES/MLC PREP RENDER 1.jpg",
        shortDescription: "Explore the intricate details of Mlc Prep School, Proposal, a premier education development in Kenya that pushes the boundaries of craft and form. Explore the full design journey below.",
        description: "Mlc Prep School, Proposal sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/EDUCATION/MLC PREP SCHOOL, Proposal/IMAGES/MLC PREP RENDER 1.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/MLC PREP SCHOOL, Proposal/IMAGES/MLC PREP RENDER 3.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/MLC PREP SCHOOL, Proposal/IMAGES/MLC PREP RENDER 4.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/MLC PREP SCHOOL, Proposal/IMAGES/Render 3a.jpg"]
      },
      {
        slug: "mpesa-foundation-academy-2019",
        title: "Mpesa Foundation Academy, 2019",
        type: "Education",
        location: "Kenya",
        year: "2019",
        img: "/assets/images/2024/SECTOR PROFILES/EDUCATION/MPESA FOUNDATION ACADEMY, 2019/IMAGES/PSS_6209.jpg",
        shortDescription: "Experience the future of education design with Mpesa Foundation Academy, 2019. A landmark project in Kenya that redefines spatial excellence. Explore the full design journey below.",
        description: "“Developing transformational leaders through innovative approaches to education” The M-Pesa Foundation Academy is designed to provide high quality secondary school education in an inspiring and spacious country setting for boys and girls within the 8-4-4 National Curriculum, but in need. This secondary level academy was designed to cater for 960 boarding students aged between 14 and 18 years together with their teaching and support staff. It consists of a state-of the- art co- ed boarding school, with each year having 6 streams of 40 students. Interactive residential life facilities at the academy enable and extend the academic experience and include a rich array of activity spaces and buildings to develop well rounded individuals. The M-Pesa Foundation Academy, whose mission is “Changing Lives ” was very intentionally designed to be heavily technologically oriented.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/EDUCATION/MPESA FOUNDATION ACADEMY, 2019/IMAGES/PSS_6209.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/MPESA FOUNDATION ACADEMY, 2019/IMAGES/PSS_7936.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/MPESA FOUNDATION ACADEMY, 2019/IMAGES/PSS_7937 for editing.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/MPESA FOUNDATION ACADEMY, 2019/IMAGES/PSS_7975 Opt2.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/MPESA FOUNDATION ACADEMY, 2019/IMAGES/PSS_8014.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/MPESA FOUNDATION ACADEMY, 2019/IMAGES/PSS_8047 Opt2.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/MPESA FOUNDATION ACADEMY, 2019/IMAGES/PSS_8294.jpg"]
      },
      {
        slug: "st-andrew-s-turi-2007",
        title: "St Andrew's Turi, 2007",
        type: "Education",
        location: "Kenya",
        year: "2007",
        img: "/assets/images/2024/SECTOR PROFILES/EDUCATION/ST ANDREW'S TURI, 2007/IMAGES/1 copy.jpg",
        shortDescription: "Uncover the story behind St Andrew's Turi, 2007, a sophisticated education project in Kenya that balances community needs with architectural elegance. Explore the full design journey below.",
        description: "Students will enjoy a new purpose built boarding house, designed specifically for College students. Students have single bedrooms in a series of linked cluster flats. There are six students in each flat, with shared lounge, kitchen and bathroom facilities. Each flat has a patio or balcony with outstanding views over the Rift Valley. The flats benefit from access to a shared communal common room and at the end of each group of clusters is connected to a resident house parent who encourages the development of independent study habits required for A level study and beyond. The cluster layout of the building ensures connectivity, security and plenty of natural day lighting, through the use of large windows. PLANNING was approached to design a Masterplan for the school's 5 year expansion plans that would see it provide world class facilities to bolster its reputation as one of the leading educational institutions within the East African region. St Andrew’s, Turi, Kenya EDUCATION PROJECT PROFILE P.02 The key buildings to be provided included a new senior girl's dormitory, new indoor sports centre, new sixth form accommodation as well as expansions and refurbishment of the existing performance hall, preparatory and senior school accommodation. In addition, the school required additional staff houses which PLANNING designed as individual 2, 3 and 4 bedroom units as well as additional classrooms.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/EDUCATION/ST ANDREW'S TURI, 2007/IMAGES/1 copy.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/ST ANDREW'S TURI, 2007/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/ST ANDREW'S TURI, 2007/IMAGES/3.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/ST ANDREW'S TURI, 2007/IMAGES/PSSL Presentation-Sep2017.jpg","/assets/images/2024/SECTOR PROFILES/EDUCATION/ST ANDREW'S TURI, 2007/IMAGES/sports hall sections.jpg"]
      },
    ]
  },
  {
    slug: "heritage-and-restoration",
    title: "Heritage And Restoration",
    blurb: "Exceptional architecture in the Heritage And Restoration sector.",
    projects: [
      {
        slug: "hilton-hotel",
        title: "Hilton Hotel",
        type: "Heritage And Restoration",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/HERITAGE AND RESTORATION/Hilton Hotel/IMAGES/77712144 copy.jpg",
        shortDescription: "From its bold civic presence to its refined interiors, Hilton Hotel in Kenya is a masterclass in modern heritage and restoration architecture. Explore the full design journey below.",
        description: "Hilton Hotel sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HERITAGE AND RESTORATION/Hilton Hotel/IMAGES/77712144 copy.jpg","/assets/images/2024/SECTOR PROFILES/HERITAGE AND RESTORATION/Hilton Hotel/IMAGES/87083_FP.jpg","/assets/images/2024/SECTOR PROFILES/HERITAGE AND RESTORATION/Hilton Hotel/IMAGES/dsc_1073.jpg","/assets/images/2024/SECTOR PROFILES/HERITAGE AND RESTORATION/Hilton Hotel/IMAGES/Hilton_Nairobi.jpg","/assets/images/2024/SECTOR PROFILES/HERITAGE AND RESTORATION/Hilton Hotel/IMAGES/Untitled-11.JPG"]
      },
      {
        slug: "westminster-house-1996",
        title: "Westminster House, 1996",
        type: "Heritage And Restoration",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/HERITAGE AND RESTORATION/Westminster House, 1996/IMAGES/1.jpg",
        shortDescription: "Experience the future of heritage and restoration design with Westminster House, 1996. A landmark project in Kenya that redefines spatial excellence. Explore the full design journey below.",
        description: "Westminster House, 1996 sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HERITAGE AND RESTORATION/Westminster House, 1996/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/HERITAGE AND RESTORATION/Westminster House, 1996/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/HERITAGE AND RESTORATION/Westminster House, 1996/IMAGES/3.jpg","/assets/images/2024/SECTOR PROFILES/HERITAGE AND RESTORATION/Westminster House, 1996/IMAGES/4.jpg"]
      },
    ]
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    blurb: "Exceptional architecture in the Hospitality sector.",
    projects: [
      {
        slug: "blue-room-hotel",
        title: "Blue Room Hotel",
        type: "Hospitality",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/BLUE ROOM HOTEL/IMAGES/010-Blue-Room-2013-12-07--2.jpg",
        shortDescription: "Uncover the story behind Blue Room Hotel, a sophisticated hospitality project in Kenya that balances community needs with architectural elegance. Explore the full design journey below.",
        description: "Blue Room Hotel sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/BLUE ROOM HOTEL/IMAGES/010-Blue-Room-2013-12-07--2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/BLUE ROOM HOTEL/IMAGES/010-Blue-Room-2013-12-07.jpg"]
      },
      {
        slug: "bweju-resort-zanzibar",
        title: "Bweju Resort, Zanzibar",
        type: "Hospitality",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/BWEJU RESORT, ZANZIBAR/IMAGES/1.jpg",
        shortDescription: "Uncover the story behind Bweju Resort, Zanzibar, a sophisticated hospitality project in Kenya that balances community needs with architectural elegance. Explore the full design journey below.",
        description: "Bweju Resort, Zanzibar sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/BWEJU RESORT, ZANZIBAR/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/BWEJU RESORT, ZANZIBAR/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/BWEJU RESORT, ZANZIBAR/IMAGES/3.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/BWEJU RESORT, ZANZIBAR/IMAGES/4.jpg"]
      },
      {
        slug: "dutco-sand-island",
        title: "Dutco Sand Island",
        type: "Hospitality",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/DUTCO SAND ISLAND/IMAGES/1.jpg",
        shortDescription: "Dutco Sand Island stands as a testament to contextual architecture in Kenya. Discover how this hospitality space harmonizes with its environment. Explore the full design journey below.",
        description: "Dutco Sand Island sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/DUTCO SAND ISLAND/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/DUTCO SAND ISLAND/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/DUTCO SAND ISLAND/IMAGES/Section C-C.jpg"]
      },
      {
        slug: "elephant-rock-loisaba",
        title: "Elephant Rock, Loisaba",
        type: "Hospitality",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELEPHANT ROCK, LOISABA/IMAGES/1.jpg",
        shortDescription: "Uncover the story behind Elephant Rock, Loisaba, a sophisticated hospitality project in Kenya that balances community needs with architectural elegance. Explore the full design journey below.",
        description: "Elephant Rock, Loisaba sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELEPHANT ROCK, LOISABA/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELEPHANT ROCK, LOISABA/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELEPHANT ROCK, LOISABA/IMAGES/3.jpg"]
      },
      {
        slug: "elsa-kopje-meru-national-park",
        title: "Elsa Kopje, Meru National Park",
        type: "Hospitality",
        location: "Kenya",
        year: "1999",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE BATH TAB.jpg",
        shortDescription: "Experience the future of hospitality design with Elsa Kopje, Meru National Park. A landmark project in Kenya that redefines spatial excellence. Explore the full design journey below.",
        description: "This spectacular site in Meru Park; the favorite haunt of world famous lioness Elsa – of the movie 'Born Free' – was the subject of exacting development conditions set by Kenya Wildlife Services. ŸNone of the development to be visible from within the park. ŸBuilding materials to be sustainable wherever possible, with zero hardwood used. ŸAll structures to be removable (after use) with minimal damage or disfigurement to the natural qualities of the site. Locating each of the 12 double bedrooms, the public rooms, kitchen, kitchen yard, manager's house and resident staff quarters out of the view of people within the park was a daunting challenge. The site is richly strewn with wonderful boulders. There was no way one could design buildings first and then “place” them on site without compromising these magnificent stones, or compromising building layouts. A satisfactory alternative was agreed where PLANNING Architect Jim Archer worked on site with 3 inch paint brushes and white emulsion paint and a tape measure to set out each building – full size, on the ground. That way every single rock was respected and incorporated into the design. At times the challenges of ensuring that the bedrooms and the public rooms all had views over the park, whilst remaining invisible from the park, seemed impossible. However, today these buildings stand to prove it could be done. The suspension bridge was an inspired solution for crossing a deep gulley, and was built with engineering advice from the British Army. The small swimming pool was a magnificent design opportunity, set amongst massive natural boulders it has a vanishing horizon along the only edge that faces over and down towards game-rich savanna and wetlands. All the bedrooms and balconies get the benefit of stunning Meru sunrises, accompanied by wonderful morning choruses from the rich and varied bird life.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE BATH TAB.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE BATHTAB 1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE BEDROOM IMG 1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE BEDROOM IMG 2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE BEDROOM IMG 3.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE BRIDGE 2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE BRIDGE 3.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE BRIDGE 4.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE BRIDGE 6.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE EXT.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE EXTERIOR IMG 1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE EXTERIOR IMG 3.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE EXTERIOR IMG 4.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE GAZIBO.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE ROOM 2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE ROOM 4.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE ROOM 5.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE ROOM EXTERIOR.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE ROOM IMG 6.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE ROOM IMG 7.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE ROOM3.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE STAIRCASE.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE SWIMMING POOL IMG 2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE SWIMMING POOL IMG 4.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE SWIMMING POOL IMG 7.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE SWIMMING POOLSIDE IMG.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE VIEW IMG 1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE WALK-THROUGH IMG 2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE WALK-THROUGH IMG 3.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ELSA KOPJE, MERU NATIONAL PARK/IMAGES/ELSA KOPJE WALK-THROUGH IMG 4.jpg"]
      },
      {
        slug: "emakoko-lodge",
        title: "Emakoko Lodge",
        type: "Hospitality",
        location: "Kenya",
        year: "2012",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/EMAKOKO LODGE/IMAGES/EMAKOKO LODGE BAR.JPG",
        shortDescription: "Discover the visionary design of Emakoko Lodge. Located in Kenya, this hospitality project sets a new standard for sustainable and aesthetic integrity. Explore the full design journey below.",
        description: "Located in Kitengela, Kajiado, on a 17 acre plot, this 1500 sqm development is for an exclusive lodge at the edge of the Nairobi National Park, overlooking Mbagathi River. The site slopes steeply towards the river with excellent views over the park and Nairobi city skyline. The brief called for a restaurant, bar, recreational facilities, a kitchen and ten cottages on a steep, narrow site. Visitors' access is through the Nairobi National Park, taking advantage of the game drives over the Mbagathi River. PLANNING, with the guidance of Structural Engineer I.B. Patel designed this foot bridge that would ferry visitors from the edge of the park, over Mbagathi River and to the lodge. The main buildings comprise of the public rooms and 10 cottages (2 double cottages and 8 single cottages). These are planned across the site's rocky and steep terrain. The swimming pool is positioned at the bottom of the cliff whilst the manager's house, service buildings and staff housing are situated on opposite ends at the top of the cliff. The dominant use of gum poles for the public rooms, cottage roofs and columns was inspired by the indigenous yellow fever acacia and fig trees on site. Yellow quarry stone that was in abundance on site was gathered by the builders and used for an external finish. The lounge and dining spaces in the public rooms are entirely open to the elements, focusing on the charming views. Rain is kept at bay with large overhangs from the low-pitched roof. Cottages blend into the surrounding which are dominated by the yellow fever acacia thorn trees and boulders. Emakoko Lodge, Kajiado, Kenya",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/EMAKOKO LODGE/IMAGES/EMAKOKO LODGE BAR.JPG","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/EMAKOKO LODGE/IMAGES/EMAKOKO LODGE BEDROOM 1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/EMAKOKO LODGE/IMAGES/EMAKOKO LODGE BEDROOM 2.JPG","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/EMAKOKO LODGE/IMAGES/EMAKOKO LODGE ENTRANCE 1.png","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/EMAKOKO LODGE/IMAGES/EMAKOKO LODGE EXT 1.JPG","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/EMAKOKO LODGE/IMAGES/EMAKOKO LODGE EXT 2.JPG","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/EMAKOKO LODGE/IMAGES/EMAKOKO LODGE EXT 3.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/EMAKOKO LODGE/IMAGES/EMAKOKO LODGE LIVING AREA 1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/EMAKOKO LODGE/IMAGES/EMAKOKO LODGE LIVING AREA.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/EMAKOKO LODGE/IMAGES/EMAKOKO LODGE SIDE VIEW 2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/EMAKOKO LODGE/IMAGES/EMAKOKO LODGE SWIMMING POOL AREA 1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/EMAKOKO LODGE/IMAGES/EMAKOKO LODGE SWIMMING POOL AREA 2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/EMAKOKO LODGE/IMAGES/EMAKOKO LODGE VIEW.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/EMAKOKO LODGE/IMAGES/Entrance.jpg"]
      },
      {
        slug: "english-point-marina",
        title: "English Point Marina",
        type: "Hospitality",
        location: "Kenya",
        year: "2015",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ENGLISH POINT MARINA/IMAGES/1.jpg",
        shortDescription: "Discover the visionary design of English Point Marina. Located in Kenya, this hospitality project sets a new standard for sustainable and aesthetic integrity. Explore the full design journey below.",
        description: "English Point Marina is a contemporary residential and hotel development on the Kenyan coast, located on a 4-acre beach front site across the creek from the historic Fort Jesus, with its spectacular view across the skyline of Mombasa Old Town. English Point Marina offers apartment living with the comfort, luxury and security of a hotel, and will be managed by the award winning team of the Pinewood Village Beach Resorts. This development was conceptualized by Broadway Malyan, a UK based architectural firm, with PLANNING being brought on board to develop the design, and detailed design drawings, and supervise the construction. On-site facilities include a hotel, restaurant, spa & gym, serviced marina, water-sport centre and boardwalk with retail outlets. Underground car parking, beneath and between the buildings. The residential component has four apartment blocks, each housing twelve 3-bedroom apartments, two penthouse apartments and one basement apartment, all on five floors. The blocks are interlinked by what are known as lush-links. Green spaces are developed as roof-top gardens above the exposed roof areas of the basement. The hotel block features 23 air-conditioned rooms with 3 suites and conference facilities.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ENGLISH POINT MARINA/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ENGLISH POINT MARINA/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ENGLISH POINT MARINA/IMAGES/3.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ENGLISH POINT MARINA/IMAGES/4.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/ENGLISH POINT MARINA/IMAGES/6.jpg"]
      },
      {
        slug: "four-point-sheraton-jkia",
        title: "Four Point Sheraton Jkia",
        type: "Hospitality",
        location: "Kenya",
        year: "2017",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/FOUR POINT SHERATON JKIA/IMAGES/4 POINTS JKIA IN THE EVENING.jpg",
        shortDescription: "Four Point Sheraton Jkia stands as a testament to contextual architecture in Kenya. Discover how this hospitality space harmonizes with its environment. Explore the full design journey below.",
        description: "PLANNING designed the new Four Point Sheraton Hotel at its strategically located 1 acre site at the entrance to the Jomo Kenyatta International Airport, Nairobi, Kenya. The main objective of the design was to provide a convenient and iconic yet cost effective hospitality solution. PLANNING’s approach was to develop a highly efficient hotel that utilized the site to its full economic potential. This saw a design response suggesting 145 rooms for overnight guests, with the bulk of the back of house service placed at basement level. This maximizes opportunities for a café-style lounge, sports bar, destination dining area and meeting spaces. It will keep a height of 5 floors. Furthermore, the spa and fitness facilities located at the top floor were set to ensure direct access to the roof terrace featuring a pool, lounge and bar with uninterrupted views to the national park. Coupled with the hotel shuttle service and the full size basement offering long term secure parking, this hotel invites passengers to enjoy the hotel facilities as a secondary airport waiting lounge. Overall, the massing and façade treatment aspires to achieve an elegant, contemporary and impressive presence both when approaching and leaving the airport.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/FOUR POINT SHERATON JKIA/IMAGES/4 POINTS JKIA IN THE EVENING.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/FOUR POINT SHERATON JKIA/IMAGES/4 POINTS JKIA PARKING 2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/FOUR POINT SHERATON JKIA/IMAGES/4 POINTS JKIA RECEPTION.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/FOUR POINT SHERATON JKIA/IMAGES/4 POINTS JKIA SWIMMING POOL.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/FOUR POINT SHERATON JKIA/IMAGES/4 POINTS JKIA.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/FOUR POINT SHERATON JKIA/IMAGES/PSS_0548.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/FOUR POINT SHERATON JKIA/IMAGES/PSS_0588.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/FOUR POINT SHERATON JKIA/IMAGES/PSS_0882.jpg"]
      },
      {
        slug: "futaisi-island-dubai",
        title: "Futaisi Island, Dubai",
        type: "Hospitality",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/FUTAISI ISLAND, DUBAI/IMAGES/1.jpg",
        shortDescription: "A journey through light and material: Futaisi Island, Dubai in Kenya re-imagines what a hospitality space can achieve. Explore the full design journey below.",
        description: "Futaisi Island, Dubai sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/FUTAISI ISLAND, DUBAI/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/FUTAISI ISLAND, DUBAI/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/FUTAISI ISLAND, DUBAI/IMAGES/3.jpg"]
      },
      {
        slug: "investor-s-house-loisaba",
        title: "Investor's House, Loisaba",
        type: "Hospitality",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/INVESTOR'S HOUSE, LOISABA/IMAGES/1.jpg",
        shortDescription: "Explore the intricate details of Investor's House, Loisaba, a premier hospitality development in Kenya that pushes the boundaries of craft and form. Explore the full design journey below.",
        description: "Investor's House, Loisaba sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/INVESTOR'S HOUSE, LOISABA/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/INVESTOR'S HOUSE, LOISABA/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/INVESTOR'S HOUSE, LOISABA/IMAGES/3.jpg"]
      },
      {
        slug: "kalama-resource-centre",
        title: "Kalama Resource Centre",
        type: "Hospitality",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/KALAMA RESOURCE CENTRE/IMAGES/Kalama Render_2022.06.23_02 01.jpg",
        shortDescription: "Uncover the story behind Kalama Resource Centre, a sophisticated hospitality project in Kenya that balances community needs with architectural elegance. Explore the full design journey below.",
        description: "Kalama Resource Centre sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/KALAMA RESOURCE CENTRE/IMAGES/Kalama Render_2022.06.23_02 01.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/KALAMA RESOURCE CENTRE/IMAGES/Kalama Render_2022.06.23_02 02.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/KALAMA RESOURCE CENTRE/IMAGES/Kalama Render_2022.06.23_03-1.png"]
      },
      {
        slug: "kilimanjaro-hotel-dar-es-salaam",
        title: "Kilimanjaro Hotel, Dar-es-salaam",
        type: "Hospitality",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/KILIMANJARO HOTEL, DAR-ES-SALAAM/IMAGES/1.jpg",
        shortDescription: "Explore the intricate details of Kilimanjaro Hotel, Dar-es-salaam, a premier hospitality development in Kenya that pushes the boundaries of craft and form. Explore the full design journey below.",
        description: "Kilimanjaro Hotel, Dar-es-salaam sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/KILIMANJARO HOTEL, DAR-ES-SALAAM/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/KILIMANJARO HOTEL, DAR-ES-SALAAM/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/KILIMANJARO HOTEL, DAR-ES-SALAAM/IMAGES/3.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/KILIMANJARO HOTEL, DAR-ES-SALAAM/IMAGES/4.jpg"]
      },
      {
        slug: "loisaba-investor-s-cottage",
        title: "Loisaba Investor's Cottage",
        type: "Hospitality",
        location: "Kenya",
        year: "1998",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/LOISABA INVESTOR'S COTTAGE/IMAGES/1.jpg",
        shortDescription: "From its bold civic presence to its refined interiors, Loisaba Investor's Cottage in Kenya is a masterclass in modern hospitality architecture. Explore the full design journey below.",
        description: "Extensions and renovations to an existing tourist lodge, and outline design of two new lodges and a number of investors houses on a private game ranch in Northern Kenya Loisaba Investor’s Cottage, Loisaba, Kenya",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/LOISABA INVESTOR'S COTTAGE/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/LOISABA INVESTOR'S COTTAGE/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/LOISABA INVESTOR'S COTTAGE/IMAGES/3.jpg"]
      },
      {
        slug: "loisikitok-eco-lodge",
        title: "Loisikitok Eco Lodge",
        type: "Hospitality",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/LOISIKITOK ECO LODGE/IMAGES/1.jpg",
        shortDescription: "Discover the visionary design of Loisikitok Eco Lodge. Located in Kenya, this hospitality project sets a new standard for sustainable and aesthetic integrity. Explore the full design journey below.",
        description: "Loisikitok Eco Lodge sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/LOISIKITOK ECO LODGE/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/LOISIKITOK ECO LODGE/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/LOISIKITOK ECO LODGE/IMAGES/3.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/LOISIKITOK ECO LODGE/IMAGES/4.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/LOISIKITOK ECO LODGE/IMAGES/5.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/LOISIKITOK ECO LODGE/IMAGES/6.jpg"]
      },
      {
        slug: "maisara-resort-p1",
        title: "Maisara Resort, P1",
        type: "Hospitality",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MAISARA RESORT, P1/IMAGES/1.jpg",
        shortDescription: "Explore the intricate details of Maisara Resort, P1, a premier hospitality development in Kenya that pushes the boundaries of craft and form. Explore the full design journey below.",
        description: "Maisara Resort, P1 sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MAISARA RESORT, P1/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MAISARA RESORT, P1/IMAGES/10.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MAISARA RESORT, P1/IMAGES/11.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MAISARA RESORT, P1/IMAGES/3.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MAISARA RESORT, P1/IMAGES/4.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MAISARA RESORT, P1/IMAGES/5.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MAISARA RESORT, P1/IMAGES/6.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MAISARA RESORT, P1/IMAGES/7.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MAISARA RESORT, P1/IMAGES/8.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MAISARA RESORT, P1/IMAGES/9.jpg"]
      },
      {
        slug: "maisara-resort-p2",
        title: "Maisara Resort, P2",
        type: "Hospitality",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MAISARA RESORT, P2/IMAGES/2.jpg",
        shortDescription: "Explore the intricate details of Maisara Resort, P2, a premier hospitality development in Kenya that pushes the boundaries of craft and form. Explore the full design journey below.",
        description: "Maisara Resort, P2 sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MAISARA RESORT, P2/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MAISARA RESORT, P2/IMAGES/Site Plan.jpg"]
      },
      {
        slug: "mangapwani-resort-zanzibar",
        title: "Mangapwani Resort, Zanzibar",
        type: "Hospitality",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MANGAPWANI RESORT, ZANZIBAR/IMAGES/1.jpg",
        shortDescription: "Discover the visionary design of Mangapwani Resort, Zanzibar. Located in Kenya, this hospitality project sets a new standard for sustainable and aesthetic integrity. Explore the full design journey below.",
        description: "Mangapwani Resort, Zanzibar sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MANGAPWANI RESORT, ZANZIBAR/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MANGAPWANI RESORT, ZANZIBAR/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MANGAPWANI RESORT, ZANZIBAR/IMAGES/3.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MANGAPWANI RESORT, ZANZIBAR/IMAGES/4.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MANGAPWANI RESORT, ZANZIBAR/IMAGES/5.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MANGAPWANI RESORT, ZANZIBAR/IMAGES/6.jpg"]
      },
      {
        slug: "mombasa-views-hotel",
        title: "Mombasa Views Hotel",
        type: "Hospitality",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MOMBASA VIEWS HOTEL/IMAGES/011 Best Western.png",
        shortDescription: "From its bold civic presence to its refined interiors, Mombasa Views Hotel in Kenya is a masterclass in modern hospitality architecture. Explore the full design journey below.",
        description: "Mombasa Views Hotel sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MOMBASA VIEWS HOTEL/IMAGES/011 Best Western.png","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/MOMBASA VIEWS HOTEL/IMAGES/040 Roadfront Render.png"]
      },
      {
        slug: "ol-suswa-resort",
        title: "Ol Suswa Resort",
        type: "Hospitality",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/OL SUSWA RESORT/IMAGES/1.jpg",
        shortDescription: "Uncover the story behind Ol Suswa Resort, a sophisticated hospitality project in Kenya that balances community needs with architectural elegance. Explore the full design journey below.",
        description: "Ol Suswa Resort sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/OL SUSWA RESORT/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/OL SUSWA RESORT/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/OL SUSWA RESORT/IMAGES/3.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/OL SUSWA RESORT/IMAGES/4.jpg"]
      },
      {
        slug: "savannah-resort-nairobi-national-park",
        title: "Savannah Resort, Nairobi National Park",
        type: "Hospitality",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SAVANNAH RESORT, NAIROBI NATIONAL PARK/IMAGES/1.jpg",
        shortDescription: "Savannah Resort, Nairobi National Park stands as a testament to contextual architecture in Kenya. Discover how this hospitality space harmonizes with its environment. Explore the full design journey below.",
        description: "Savannah Resort, Nairobi National Park sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SAVANNAH RESORT, NAIROBI NATIONAL PARK/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SAVANNAH RESORT, NAIROBI NATIONAL PARK/IMAGES/Picture1-1.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SAVANNAH RESORT, NAIROBI NATIONAL PARK/IMAGES/Picture2-1.jpg"]
      },
      {
        slug: "serena-beach-hotel-and-spa-shanzu",
        title: "Serena Beach Hotel And Spa Shanzu",
        type: "Hospitality",
        location: "Kenya",
        year: "1992",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SERENA BEACH HOTEL AND SPA SHANZU/IMAGES/01 - Exterior View over the Pool(2).jpg",
        shortDescription: "From its bold civic presence to its refined interiors, Serena Beach Hotel And Spa Shanzu in Kenya is a masterclass in modern hospitality architecture. Explore the full design journey below.",
        description: "This NATIONAL AND INTERNATIONAL award winning project began in 1972, and continues today. Jim Archer first met with the clients His Highness the Aga Khan and Prince Amyn Aga Khan of Tourist Promotion Services in Kampala in the early 1960's. Their first projects were Paraa and Kitchwamba Safari Lodges in Uganda, which were frustrated at the tender stages in 1971 by the anarchy and bloodshed in Uganda. In 1978, Jim Archer and Trevor Andrews regrouped in Nairobi where they were then appointed for major refurbishment and extensions to the Mombasa Serena Beach Hotel. This Hotel has continued to be one of our client's flagship hotels, and PLANNING has been privileged to be consulted at all stages of its design and development. The existing bedrooms have been refurbished to make them twice their original size, and the Maisha spa has been designed and constructed. Serena Beach Hotel & Spa , Shanzu, ,",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SERENA BEACH HOTEL AND SPA SHANZU/IMAGES/01 - Exterior View over the Pool(2).jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SERENA BEACH HOTEL AND SPA SHANZU/IMAGES/0716f7d6_z.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SERENA BEACH HOTEL AND SPA SHANZU/IMAGES/bf382913_z.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SERENA BEACH HOTEL AND SPA SHANZU/IMAGES/DSC01808.JPG","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SERENA BEACH HOTEL AND SPA SHANZU/IMAGES/DSC01822.JPG","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SERENA BEACH HOTEL AND SPA SHANZU/IMAGES/DSC01829.JPG","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SERENA BEACH HOTEL AND SPA SHANZU/IMAGES/DSC01889.JPG","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SERENA BEACH HOTEL AND SPA SHANZU/IMAGES/image_2.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SERENA BEACH HOTEL AND SPA SHANZU/IMAGES/IMG_5214.JPG","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SERENA BEACH HOTEL AND SPA SHANZU/IMAGES/IMG_5244.JPG","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SERENA BEACH HOTEL AND SPA SHANZU/IMAGES/PSS_5667.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SERENA BEACH HOTEL AND SPA SHANZU/IMAGES/Serena Mombasa 001.jpg"]
      },
      {
        slug: "severin-safari-camp",
        title: "Severin Safari Camp",
        type: "Hospitality",
        location: "Kenya",
        year: "2007",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SEVERIN SAFARI CAMP/IMAGES/DSC00010.jpg",
        shortDescription: "From its bold civic presence to its refined interiors, Severin Safari Camp in Kenya is a masterclass in modern hospitality architecture. Explore the full design journey below.",
        description: "This project emerged with a brief that stipulated a need to keep to ecological tourism standards and to ensure that there was a minimal impact on the ecosystem. Originally known as ‘Kitani Safari Lodge’, a renovation was conducted and ownership taken over by Severin. Located in close proximity to Mzima Springs, the camp has stunning views of Mount Kilimanjaro and reflects the closeness of nature. The camp is of a luxury design, comprising of 21 standard tents, 4 junior suites and 2 executive suites designed for honeymooners. Other design features include a 30 person conference tent, a spa, a fitness room and a ying yang swimming pool. The camp has achieved the Eco Tourism of Kenya, Silver award. HOSPITALITY PROJECT PROFILE Severin Safari Camp, Tsavo West, Kenya",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SEVERIN SAFARI CAMP/IMAGES/DSC00010.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SEVERIN SAFARI CAMP/IMAGES/Pool-Spa.JPG","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SEVERIN SAFARI CAMP/IMAGES/Screenshot (100).JPG","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SEVERIN SAFARI CAMP/IMAGES/Screenshot (85).png","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SEVERIN SAFARI CAMP/IMAGES/Screenshot (89).png","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SEVERIN SAFARI CAMP/IMAGES/Screenshot (90).png","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SEVERIN SAFARI CAMP/IMAGES/Screenshot (91).png","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SEVERIN SAFARI CAMP/IMAGES/Screenshot (93).png","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SEVERIN SAFARI CAMP/IMAGES/Screenshot (94).png","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SEVERIN SAFARI CAMP/IMAGES/Screenshot (95).png","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SEVERIN SAFARI CAMP/IMAGES/Screenshot (96).png","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SEVERIN SAFARI CAMP/IMAGES/Screenshot (97).png","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SEVERIN SAFARI CAMP/IMAGES/Screenshot (98).png","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SEVERIN SAFARI CAMP/IMAGES/Screenshot (99).png","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SEVERIN SAFARI CAMP/IMAGES/severin-safari-camp-suites.jpg"]
      },
      {
        slug: "sultan-palace-development",
        title: "Sultan Palace Development",
        type: "Hospitality",
        location: "Kenya",
        year: "2018",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SULTAN PALACE DEVELOPMENT/IMAGES/PSS_5137.JPG",
        shortDescription: "Explore the intricate details of Sultan Palace Development, a premier hospitality development in Kenya that pushes the boundaries of craft and form. Explore the full design journey below.",
        description: "Sultan Palace, located in Kikambala, north of Mombasa, has an excellent position on the Indian Ocean coast line. Azure sea, coral reef, soft white sand, cool breezes and palm trees come together to make this an ideal resort location. Consideration is given to sea views and cooling breezes to give maximum value and enjoyment to each of the residential units and hotel rooms. The style of the hotel and nearby residential units is a modern take on an Arabian palace, and the surrounding architecture throughout the rest of the resort is inspired by the local Swahili idiom. The buildings incorporate cool, contemporary features to give guests and residents a modern yet authentically Kenyan experience.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SULTAN PALACE DEVELOPMENT/IMAGES/PSS_5137.JPG","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SULTAN PALACE DEVELOPMENT/IMAGES/PSS_5223.JPG","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SULTAN PALACE DEVELOPMENT/IMAGES/PSS_5510.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SULTAN PALACE DEVELOPMENT/IMAGES/PSS_5541.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SULTAN PALACE DEVELOPMENT/IMAGES/PSS_5587.JPG","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/SULTAN PALACE DEVELOPMENT/IMAGES/PSS_5601.jpg"]
      },
      {
        slug: "windsor-golf-hotel-country-club",
        title: "Windsor Golf Hotel & Country Club",
        type: "Hospitality",
        location: "Kenya",
        year: "1987",
        img: "/assets/images/2024/SECTOR PROFILES/HOSPITALITY/WINDSOR GOLF HOTEL & COUNTRY CLUB/IMAGES/WINDSOR 01.jpg",
        shortDescription: "From its bold civic presence to its refined interiors, Windsor Golf Hotel & Country Club in Kenya is a masterclass in modern hospitality architecture. Explore the full design journey below.",
        description: "The client's brief was for the development of a Victorian themed golf resort hotel on an excellent site featuring an existing coffee farm with magnificent virgin forests in steep river valleys. However, the “Victorian” image was never clearly defined. Preceding the Internet era, visual research was not easy, especially being a Kenyan-based practice. Every detail had to be carefully hand drawn as there were no standardized details or specifications to fall back on. PLANNING proposed a 'Victorian Explorer' approach to the design of this 150 bed resort, picking up on the philosophy and magnificent quality of the Uganda Railways and Harbours Housing on Nairobi Hill (known today as Upper Hill), as far as both materiality and aesthetics were concerned. PLANNING led the consultants' team which included a Hotel Consultant and a Golf Course Architect to produce an exceptional 18-hole golf course sculpted through the forests, and along the valley's contours to fit perfectly into the rolling topography. Early land-use studies of the existing coffee plantation were put to good use, not only to minimize expensive cut and fill but also to ensure that the resulting buildings were scaled to be below the beautiful indigenous treed skyline. Today the Windsor Hotel & Golf Resort is the only Golf Resort in Africa listed in the “Great Golf Resorts of the World”, and is one of a select few world-wide that have achieved this. It is also the major show-piece in the marketing publication “GOLF KENYA”, produced by the Kenya Tourism Board. Windsor Golf Hotel & Country Club, Kiambu,",
        gallery: ["/assets/images/2024/SECTOR PROFILES/HOSPITALITY/WINDSOR GOLF HOTEL & COUNTRY CLUB/IMAGES/WINDSOR 01.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/WINDSOR GOLF HOTEL & COUNTRY CLUB/IMAGES/WINDSOR032.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/WINDSOR GOLF HOTEL & COUNTRY CLUB/IMAGES/WINDSOR063 fixed.jpg","/assets/images/2024/SECTOR PROFILES/HOSPITALITY/WINDSOR GOLF HOTEL & COUNTRY CLUB/IMAGES/WINDSOR100.jpg"]
      },
    ]
  },
  {
    slug: "industrial-logistics",
    title: "Industrial & Logistics",
    blurb: "Exceptional architecture in the Industrial & Logistics sector.",
    projects: [
      {
        slug: "coastal-bottlers-mtwapa",
        title: "Coastal Bottlers Mtwapa",
        type: "Industrial & Logistics",
        location: "Kenya",
        year: "2005",
        img: "/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/COASTAL BOTTLERS MTWAPA/IMAGES/100_1368.jpg",
        shortDescription: "Experience the future of industrial & logistics design with Coastal Bottlers Mtwapa. A landmark project in Kenya that redefines spatial excellence. Explore the full design journey below.",
        description: "Several possible sites were examined before this 6 hectare green field site was ultimately selected, largely on account of the relative ease for vehicle access and adequate space on site to accommodate the extensive effluent treatment plant that this development would require. Demands for water were far in excess of the local authorities’ ability to deliver the same. It was therefore necessary to look to additional supplies. These were met by the very disciplined use of rainwater harvesting in tandem with a borehole and massive water storage tanks. The disposal of the extensive and regular volumes of effluent was also a major design challenge, as was the clients requirements for a minimal columned structure. PLANNING worked very closely with the Structural Engineer Mangat I.B. Patel, to ensure the client was provided with as column free a structure as was economically possible. Administration accommodation is located at first floor level so that clear views over the facility floor areas are provided. Coastal Bottlers Mtwapa, Kilifi,",
        gallery: ["/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/COASTAL BOTTLERS MTWAPA/IMAGES/100_1368.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/COASTAL BOTTLERS MTWAPA/IMAGES/COASTAL BOTTLERS AERIAL VIEW 2.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/COASTAL BOTTLERS MTWAPA/IMAGES/COCA COLA FRONTVIEW.jpg"]
      },
      {
        slug: "first-logistics-athi-river-design-proposal",
        title: "First Logistics, Athi River, Design Proposal",
        type: "Industrial & Logistics",
        location: "Kenya",
        year: "2017",
        img: "/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/FIRST LOGISTICS, ATHI RIVER, Design Proposal/IMAGES/1.jpg",
        shortDescription: "Experience the future of industrial & logistics design with First Logistics, Athi River, Design Proposal. A landmark project in Kenya that redefines spatial excellence. Explore the full design journey below.",
        description: "STATUS Design Proposal PLANNING was privileged to be part of the team developing the masterplan for a proposed light industrial park for First Logistics Ltd at Athi River outside Nairobi. Its location in the fast growing and strategically located Athi River area, its convenience and advantageous proximity to the City of Nairobi and the major road routes to Tanzania and Mombasa, add to the unique quality of the area. In the exercise, PLANNING endeavoured to not only create a place that works from a logistics point of view, but one of quality; where people will want to work, run their businesses from and connect their logistics to. Our key design and layout informants remained and were implemented; flexibility as key; coherence; the right balance between the route network, and open spaces. We carefully coordinated strategies with the consulting transport planners, engineers, and physical planners on the project to ensure that transport planning and services engineering works as efficiently as possible. The project brief called for a mixed number of land uses with light industrial being primary supported by a business/commercial precinct and a transport administration precinct. The road network was designed to start at a single customs-controlled access point at the south west of the site. The network then proceeded to loop around the site in a double-loaded road reserve and carriage hierarchy. Lorry parking and screening was provided for at the entrance customs zone. MASTERPLANNING PROJECT PROFILE First Logistics Ltd, Athi River, Kenya",
        gallery: ["/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/FIRST LOGISTICS, ATHI RIVER, Design Proposal/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/FIRST LOGISTICS, ATHI RIVER, Design Proposal/IMAGES/2.jpg"]
      },
      {
        slug: "imperial-health-sciences",
        title: "Imperial Health Sciences",
        type: "Industrial & Logistics",
        location: "Kenya",
        year: "2015",
        img: "/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/IMPERIAL HEALTH SCIENCES/IMAGES/IMPERIAL HEALTH OFFICE IMG 2.jpg",
        shortDescription: "Imperial Health Sciences stands as a testament to contextual architecture in Kenya. Discover how this industrial & logistics space harmonizes with its environment. Explore the full design journey below.",
        description: "The Imperial Health Sciences Regional Distribution Centre is a “high-rack” climate–controlled pharmaceutical and consumer goods warehouse, designed to stringent international standards including FM Global, the industrial building standard for insurer-approved buildings. It is located within a 5-acre site along Mombasa road, with an adjacent plot of the same size being ear-marked for future expansion. The challenges included the need to house a complex indoor and outdoor logistical cycle of goods receipt and dispatch on a restricted site, as well as housing a range of mechanical and electrical equipment that would support all the center's functions, within strict budgetary controls and within FM Global's stringent standards. To maximize on space, equipment was placed on all horizontal surfaces, including flat roofs, as well as underground, wherever possible. Cost-effective and energy- efficient materials that conform to FM Global's stringent standards were proposed. The optimum lorry circuit has been worked out and the building sited, to allow for the sequential vehicle movement that the client requires. The warehouse is designed to incorporate over 5,000 square meters of warehouse floor space, a cold room, receiving and dispatch docks, logistical spaces, as well as several administration spaces. Its technical robustness will include redundant temperature-control equipment and advanced fire suppression systems. Its design incorporates a robust asset protection component with the building's roof and wall envelop made of modern clean-line insulated metal cladding that will render a very contemporary aesthetic while at the same time helping to maintain required internal temperatures. With its vast roof surface, the center has been designed to recycle all the rain water collected. INDUSTRIAL PROJECT PROFILE Imperial Health Sciences Regional Distribution Centre, Mavoko, Kenya",
        gallery: ["/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/IMPERIAL HEALTH SCIENCES/IMAGES/IMPERIAL HEALTH OFFICE IMG 2.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/IMPERIAL HEALTH SCIENCES/IMAGES/IMPERIAL HEALTH SCIENCE  FREEZER 2.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/IMPERIAL HEALTH SCIENCES/IMAGES/IMPERIAL HEALTH SCIENCE EXT 1.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/IMPERIAL HEALTH SCIENCES/IMAGES/IMPERIAL HEALTH SCIENCE FREEZER 1.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/IMPERIAL HEALTH SCIENCES/IMAGES/IMPERIAL HEALTH SCIENCE NIGHT FRONT VIEW IMG 1.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/IMPERIAL HEALTH SCIENCES/IMAGES/IMPERIAL HEALTH SCIENCE NIGHT FRONT VIEW IMG 2.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/IMPERIAL HEALTH SCIENCES/IMAGES/IMPERIAL HEALTH SCIENCE OUTSIDE-BACK IMG 2.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/IMPERIAL HEALTH SCIENCES/IMAGES/IMPERIAL HEALTH SCIENCE RECEIVABLES 2.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/IMPERIAL HEALTH SCIENCES/IMAGES/IMPERIAL HEALTH SCIENCE SORTING BAY 2.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/IMPERIAL HEALTH SCIENCES/IMAGES/IMPERIAL HEALTH SCIENCE SORTING BAY 3.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/IMPERIAL HEALTH SCIENCES/IMAGES/IMPERIAL HEALTH SCIENCE SORTING BAY 4.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/IMPERIAL HEALTH SCIENCES/IMAGES/IMPERIAL HEALTH SCIENCE STORAGE AREA IMG 2.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/IMPERIAL HEALTH SCIENCES/IMAGES/IMPERIAL HEALTH SCIENCE STORAGE AREA IMG 3.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/IMPERIAL HEALTH SCIENCES/IMAGES/IMPERIAL HEALTH SCIENCE TANK 3.jpg"]
      },
      {
        slug: "mission-aviation-hangar-1997",
        title: "Mission Aviation Hangar, 1997",
        type: "Industrial & Logistics",
        location: "Kenya",
        year: "1997",
        img: "/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/MISSION AVIATION HANGAR, 1997/IMAGES/MAF Hangar  - 001.jpg",
        shortDescription: "Uncover the story behind Mission Aviation Hangar, 1997, a sophisticated industrial & logistics project in Kenya that balances community needs with architectural elegance. Explore the full design journey below.",
        description: "An exceptional Client dedicated to the disciplined administration of its aviation facilities required a bold yet simple building as a visual statement of their aviation conviction to stand out amongst the increasingly visually eccentric and financially extravagant buildings being constructed at Wilson Airport. The brief called for aircraft storage and maintenance facilities, modest passenger handling and waiting space and the fellowship's modest administrative offices. The site allocated to the Fellowship presented access and site drainage and foundation problems which had to be overcome. PLANNING produced an ultra-simple outer envelope to enclose all of their required facilities, with passenger/pilot/maintenance staff entering and exiting at the West end of the building and aircraft arriving and leaving at the East end of the building. This elegant industrial aircraft hangar was built entirely from locally pressed prefabricated pre-painted steel logically planned and simply detailed and completed. This NATIONAL AWARD WINNING solution stands out at Wilson for its visually simple design statement, and its immaculate attention to detail. INDUSTRIAL PROJECT PROFILE Mission Aviation Fellowship Hangar,Nairobi, Kenya",
        gallery: ["/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/MISSION AVIATION HANGAR, 1997/IMAGES/MAF Hangar  - 001.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/MISSION AVIATION HANGAR, 1997/IMAGES/MAF Hangar  - 002.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/MISSION AVIATION HANGAR, 1997/IMAGES/Untitled-1.jpg"]
      },
      {
        slug: "pepsi-cola",
        title: "Pepsi Cola",
        type: "Industrial & Logistics",
        location: "Kenya",
        year: "2009",
        img: "/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/PEPSI COLA/IMAGES/IMG_20130205_101943.jpg",
        shortDescription: "Pepsi Cola stands as a testament to contextual architecture in Kenya. Discover how this industrial & logistics space harmonizes with its environment. Explore the full design journey below.",
        description: "Built on part of an 11 acre existing brown field site with a drop of 26m from the entrance to the end of the plot, the project involved the construction of a production hall, warehouse facilities, administration building, gate house and ancillary facilities for production of Pepsi Cola brand soft drinks, a first of its kind in the country. The production hall and the warehouse zone are built entirely with steel sections to allow for greater spans and are covered with a light weight roof. One of the big challenges at the outset was the discovery of a disused quarry that had been used as a dump-site at the center of the site. PLANNING's solution was to create two different levels of flat earthworks separated by an embankment. The larger production building and administration offices were built on the upper area of the site. The ancillary facilities such as the water tanks and effluent treatment plant were located in the smaller lower area. This approach allowed for a cheaper structural option and provided room for future growth of the facility. The bottling plant was designed and built to strict environmental specifications based on elaborate services requirements, which were carefully coordinated at scheme design stage with participation from specialists. This ensured that ducting, pipework and cabling were 'threaded' through the entire facility in an efficient and orderly manner to allow for safety, maintenance and ease of identification. The International Federation of Consulting Engineers (FIDIC) contract was used for this project.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/PEPSI COLA/IMAGES/IMG_20130205_101943.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/PEPSI COLA/IMAGES/IMG_20130205_104620.jpg","/assets/images/2024/SECTOR PROFILES/INDUSTRIAL & LOGISTICS/PEPSI COLA/IMAGES/IMG_20130205_104708.jpg"]
      },
    ]
  },
  {
    slug: "masterplanning",
    title: "Masterplanning",
    blurb: "Exceptional architecture in the Masterplanning sector.",
    projects: [
      {
        slug: "belgo-development-design-proposal",
        title: "Belgo Development, Design Proposal",
        type: "Masterplanning",
        location: "Kenya",
        year: "2013",
        img: "/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/BELGO DEVELOPMENT, Design Proposal/IMAGES/1.jpg",
        shortDescription: "Discover the visionary design of Belgo Development, Design Proposal. Located in Kenya, this masterplanning project sets a new standard for sustainable and aesthetic integrity. Explore the full design journey below.",
        description: "STATUS Design Proposal The proposed peponi town development sits on lushscapes - all well considered and designed so a quality lifestyle is within reach - no matter what stage of life you're in. In our vibrant proposed town development, you'll find plenty of small shopping, eating and open green areas plus much more, and all this is within short walking distance from your new and environmentally conscious spacious dwelling! The proposal considers the residents privilege to plenty of green breathable pockets of spaces - to play, be active or relax - accessible via easy walkable and spacious trails straight from your new home - the basis of the vision of the proposal. And of course, there's the also modern conveniences and facilities tucked in the design that will make our everyday that much better! MASTERPLANNING PROJECT PROFILE Belgo Holdings Investments, Nairobi, Kenya",
        gallery: ["/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/BELGO DEVELOPMENT, Design Proposal/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/BELGO DEVELOPMENT, Design Proposal/IMAGES/2.jpg"]
      },
      {
        slug: "godown-arts-centre-ongoing",
        title: "Godown Arts Centre, Ongoing",
        type: "Masterplanning",
        location: "Kenya",
        year: "2016",
        img: "/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/GODOWN ARTS CENTRE, Ongoing/IMAGES/1.jpg",
        shortDescription: "Discover the visionary design of Godown Arts Centre, Ongoing. Located in Kenya, this masterplanning project sets a new standard for sustainable and aesthetic integrity. Explore the full design journey below.",
        description: "STATUS Design Concept Concept Design for the streetscape adjacent the future GoDown Arts Centre in Nairobi Industrial Area. As part of the redevelopment of the GoDown Arts Centre, the first major arts centre in Kenya, we have been assigned to design the neighbouring streets Dundori and Dunga Road in the Nairobi Industrial Area. The design aims to seamlessly integrate the cultural centre and the surrounding streets, creating flexible spaces, promote and prioritize non-vehicular movement, and increase the amount of green space. Streets are important components in the overall public space network. The streets are a shared public resource, and must cater for a multitude of activities, uses, and users. With the new arts centre being developed, the surrounding streets must cater for changes in user behaviour and better accommodate public use, in particular walking and cycling. Core to the design is flexibility and multi-use. This to enable and accommodate a wider range of uses and activities during different hours of the day, or different days of the week. The design gives priority to pedestrian movement with wide and unobstructed footpaths along the full length of the streets linked to raised pedestrian crossings. In addition, adequate space is allocated for vendors and kiosks, public transport stops, drop off zones and bicycle parking - activities which commonly encroaches on walkways and pushing pedestrians into the carriageway. Rain gardens are introduced for storm water management, also adding greenery to the streetscape in addition to tree planting. The project is part of the global HerCity programme, an UN-Habitat initiative, which aims to actively engage girls and young women in the planning and design process. More than 40 girls and young women have actively participated in the project, providing their unique input and insight of their experience of the streets as well as their suggestions on how to improve the spaces for the benefit of all. The GoDown Arts Centre Streetscape Design, Nairobi,",
        gallery: ["/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/GODOWN ARTS CENTRE, Ongoing/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/GODOWN ARTS CENTRE, Ongoing/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/GODOWN ARTS CENTRE, Ongoing/IMAGES/3.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/GODOWN ARTS CENTRE, Ongoing/IMAGES/4.jpg"]
      },
      {
        slug: "imara-daima-estate-1987-1995",
        title: "Imara Daima Estate, 1987 - 1995",
        type: "Masterplanning",
        location: "Kenya",
        year: "1987- 1995",
        img: "/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/IMARA DAIMA ESTATE, 1987 - 1995/IMAGES/01-IMARA-House Type B.jpg",
        shortDescription: "Imara Daima Estate, 1987 - 1995 stands as a testament to contextual architecture in Kenya. Discover how this masterplanning space harmonizes with its environment. Explore the full design journey below.",
        description: "The intention was to provide housing for the retirees of the British American Tobacco Ltd. The site is located off Mombasa Road on the outskirts of Nairobi and it has house types that range from 3-Bedroom town houses to 2-Bedroom single storey starter units since they were to cater for all grades of employees. The site was planned with religious, social and small retail facilities. The entire area was landscaped with fruit trees in all gardens. The development encompasses a total of 850 middle income houses in serviced and landscaped environment. Imara Daima Estate, Nairobi,",
        gallery: ["/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/IMARA DAIMA ESTATE, 1987 - 1995/IMAGES/01-IMARA-House Type B.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/IMARA DAIMA ESTATE, 1987 - 1995/IMAGES/02-IMARA-House Type G-1.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/IMARA DAIMA ESTATE, 1987 - 1995/IMAGES/04-IMARA-Site Layout Graphics.jpg"]
      },
      {
        slug: "international-committee-of-the-red-cross-design-proposal-2018",
        title: "International Committee Of The Red Cross, Design Proposal 2018",
        type: "Masterplanning",
        location: "Kenya",
        year: "2018",
        img: "/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/INTERNATIONAL COMMITTEE OF THE RED CROSS, Design Proposal 2018/IMAGES/1.jpg",
        shortDescription: "Discover the visionary design of International Committee Of The Red Cross, Design Proposal 2018. Located in Kenya, this masterplanning project sets a new standard for sustainable and aesthetic integrity. Explore the full design journey below.",
        description: "STATUS Design Proposal PLANNING was appointed to develop a strategic masterplan for the regional delegation offices of the International Committee of the Red Cross PLANNING worked with the client from the onset to establish a full understanding of the organizational short and long-term needs, serving the local delegation as well as international staff coming for specific events; departments, staffing and visitor requirements. The masterplan sought to provide a long-term home for the resident staff and a place that welcomes the rotational international staff to immediately feel comfortable, engaged and connected. Overall, the masterplan resulted in an office complex of low-rise pavilions that merge with the landscape and each other; creating a place that is grounded to its location, drawing its form from the features of the sloping and wooded site, textures that reflect the natural local materials of Kenya, and structures oriented to capitalize on optimal weather of Nairobi via unique private outdoor meeting spaces that extend the office space outdoors. The scale and design language relate to the neighbouring residential properties with area less than the development ratio to allow sensible future expansions if required. Sustainable design strategies are at the forefront of the design requirements to ensure energy efficiency and generation, responsible water and re-use, recycling and buildings that are naturally lit ventilated. The masterplan proposed a democratic space design approach combined with fluid external circulation throughout the complex connecting the various departments both physically and visually, optimizing connectivity within the delegation and to the landscape. MASTERPLANNING PROJECT PROFILE International Committee of the Red Cross, Nairobi, Kenya",
        gallery: ["/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/INTERNATIONAL COMMITTEE OF THE RED CROSS, Design Proposal 2018/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/INTERNATIONAL COMMITTEE OF THE RED CROSS, Design Proposal 2018/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/INTERNATIONAL COMMITTEE OF THE RED CROSS, Design Proposal 2018/IMAGES/3.jpg"]
      },
      {
        slug: "johari-village-mombasa-design-proposal-2009",
        title: "Johari Village Mombasa, Design Proposal 2009",
        type: "Masterplanning",
        location: "Kenya",
        year: "2009",
        img: "/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/JOHARI VILLAGE MOMBASA, Design Proposal 2009/IMAGES/1.jpg",
        shortDescription: "Experience the future of masterplanning design with Johari Village Mombasa, Design Proposal 2009. A landmark project in Kenya that redefines spatial excellence. Explore the full design journey below.",
        description: "STATUS Design Proposal A development of close to 1300 residential units in Kongowea, Mombasa County. The development is designed to create a symbiotic relationship with the nearby Kongowea Market and surrounding residential and commercial areas, with pedestrian traffic from the neighbourhood being allowed to pass through the development. 7-meter-wide pedestrian thoroughfares flanked by commercial units link the site to the surrounding neighbourhood. Affordability, efficiency, and use of technology are major factors. The Village is designed to encourage non-motorized transport, with parking areas being confined to the outer edges of the development. PLANNING has executed the master plan and part of the Concept Design Stage. MASTERPLANNING PROJECT PROFILE Johari Housing Development, Msambweni , Kenya",
        gallery: ["/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/JOHARI VILLAGE MOMBASA, Design Proposal 2009/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/JOHARI VILLAGE MOMBASA, Design Proposal 2009/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/JOHARI VILLAGE MOMBASA, Design Proposal 2009/IMAGES/3.jpg"]
      },
      {
        slug: "keysaney-green-mogadishu-design-concept-2017",
        title: "Keysaney Green, Mogadishu, Design Concept 2017",
        type: "Masterplanning",
        location: "Kenya",
        year: "2017",
        img: "/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KEYSANEY GREEN, MOGADISHU, Design Concept 2017/IMAGES/1.jpg",
        shortDescription: "Explore the intricate details of Keysaney Green, Mogadishu, Design Concept 2017, a premier masterplanning development in Kenya that pushes the boundaries of craft and form. Explore the full design journey below.",
        description: "STATUS Design Concept Preliminary masterplan concept for 250 acres of waterfront mixed-use development north of central Mogadishu. The vision for Keysaney Green is to develop a secure self-contained, modern, economically viable, mixed-use city district. It will become an attractive part of the capital and encourage improvement of the area immediately to the south of Keysaney, being the old part of Mogadishu. The concept encompasses an integration of well-planned property development with environmental and social considerations, set above any other development of this kind in Somalia, if not East Africa. Keysaney Green will set a new standard of quality and be a benchmark for the region. Each of the properties within Keysaney Green will be set in a quality landscape setting. This will predominantly be a car free environment, with well-developed and attractive public spaces. The integration and mix of activities and uses – residential, commercial, educational as well as social – is sought throughout the site. The development will promote a lifestyle that combines work, leisure, and service, with housing. The mixed-use city district will appeal both to the local population and it's increasing wealth base, as well as an international clientele. Keysaney Green will be a considerable contribution to Mogadishu's urban growth, being driven by increased security and accelerating development. The area will provide much needed housing, education and health facilities, international hotel presence, restaurants, retail, and leisure facilities currently lacking. The spatial layout of the area creates a distinctive block structure, with generous residential courtyards. Two disused stone quarries are proposed to be transformed into recreational space and parks, incorporating storm water features and be utilized as water reservoirs. Along the coastline, a 2 km long public promenade offers unhindered views of the ocean.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KEYSANEY GREEN, MOGADISHU, Design Concept 2017/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KEYSANEY GREEN, MOGADISHU, Design Concept 2017/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KEYSANEY GREEN, MOGADISHU, Design Concept 2017/IMAGES/3.jpg"]
      },
      {
        slug: "kimironko-commercial-complex-and-market-design-proposal-2017",
        title: "Kimironko Commercial Complex And Market, Design Proposal 2017",
        type: "Masterplanning",
        location: "Kenya",
        year: "2017",
        img: "/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KIMIRONKO COMMERCIAL COMPLEX AND MARKET, Design Proposal 2017/IMAGES/1.jpg",
        shortDescription: "From its bold civic presence to its refined interiors, Kimironko Commercial Complex And Market, Design Proposal 2017 in Kenya is a masterclass in modern masterplanning architecture. Explore the full design journey below.",
        description: "STATUS Design Proposal PLANNING participated in the urban and architectural design competition aimed at developing a strategic and transformational masterplan for the modernization and expansion of the existing Kimironko transport and market hub. Our proposal, developed in conjunction with ARUP, sought to transform this hub into a contemporary, mixed-use development in line with the goals of the Kigali Urban Master Plan. We designed Kimironko Hub to promote a new city lifestyle, combining workspaces, service and leisure with housing and state of the art public transportation. The generous public realm, the backbone of the area, was designed to be an inclusive and attractive public space, to host a wide range of activities. Equal and generous opportunity to enjoy the urban space were considered in the public realm, giving like chances for boys, girls, young and old, to take part in the everyday urban life, and in the community. The masterplan proposed a structure where architectural and landscaping elements were combined in an urban context. Key areas within the masterplan are the Kimironko market, the Transport Hub, the Commercial Centre, Residential/Apartments zone and their linking public space, creating a compact, varied, and walkable city district. Kimironko Commercial Complex and Market, Kigali,",
        gallery: ["/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KIMIRONKO COMMERCIAL COMPLEX AND MARKET, Design Proposal 2017/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KIMIRONKO COMMERCIAL COMPLEX AND MARKET, Design Proposal 2017/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KIMIRONKO COMMERCIAL COMPLEX AND MARKET, Design Proposal 2017/IMAGES/3.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KIMIRONKO COMMERCIAL COMPLEX AND MARKET, Design Proposal 2017/IMAGES/BD17-018_KIMIRONKO_COMPLEX_-_Market_tabir.rvt_2017-Aug-28_04-57-04PM-000_3D_View_3.jpg"]
      },
      {
        slug: "kingongo-nyeri-commercial-development-design-concept-2022",
        title: "Kingongo Nyeri Commercial Development, Design Concept 2022",
        type: "Masterplanning",
        location: "Kenya",
        year: "2022",
        img: "/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KINGONGO NYERI COMMERCIAL DEVELOPMENT, Design Concept 2022/IMAGES/1.jpg",
        shortDescription: "Experience the future of masterplanning design with Kingongo Nyeri Commercial Development, Design Concept 2022. A landmark project in Kenya that redefines spatial excellence. Explore the full design journey below.",
        description: "STATUS Design Concept Design concept for a mixed-use commercial development in Kingongo, in the outskirts of Nyeri. The development consists of a mix or retail and leisure, in a setting aimed to create a destination attracting a wide range of customers and visitors. The strategic location of the site, offering good access from major roads and generous views to Nyeri town to the south and Mount Kenya to the north-east, offers opportunities for a wide range of retailers and business. The masterplan provides a spatial layout aimed at optimizing the visitor's experience whilst locating business in a rational manner around a central pedestrian plaza from which businesses are directly accessed. The central space is designed as a multi-use space to be flexible to accommodate a wide range of uses and events. Kingongo Commercial Development, Nyeri,",
        gallery: ["/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KINGONGO NYERI COMMERCIAL DEVELOPMENT, Design Concept 2022/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KINGONGO NYERI COMMERCIAL DEVELOPMENT, Design Concept 2022/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KINGONGO NYERI COMMERCIAL DEVELOPMENT, Design Concept 2022/IMAGES/3.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KINGONGO NYERI COMMERCIAL DEVELOPMENT, Design Concept 2022/IMAGES/Masterplan-1.jpg"]
      },
      {
        slug: "kisumu-city-masterplan-design-proposal-2020",
        title: "Kisumu City Masterplan, Design Proposal 2020",
        type: "Masterplanning",
        location: "Kenya",
        year: "2020",
        img: "/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KISUMU CITY MASTERPLAN, Design Proposal 2020/IMAGES/Lakefront Reviesd-with updated sports ground.jpg",
        shortDescription: "Experience the future of masterplanning design with Kisumu City Masterplan, Design Proposal 2020. A landmark project in Kenya that redefines spatial excellence. Explore the full design journey below.",
        description: "STATUS Design Proposal PLANNING led the urban design workstream as part of an international consortium in the development of the Kisumu City masterplan. Our approach to city planning entailed the development of focused action area plans that addressed the lakefront; the revitalization, preservation, and expansion of the central business district; open space standards, and informal settlements development guidelines. The overall outcome was a strong and visionary plan for the regeneration of the city and its downtown, anchored by a revitalized lakefront district. We proposed the creation of an entirely re-imagined lakefront district that will serve more than one purpose by contributing to all aspects of resident and visitor life. The lakefront is now proposed to be an integrated and accessible asset that will offer a variety of recreational, development and touristic opportunities. The city-wide Local Physical Development Plan (LPDP) and the complementing detailed masterplans provide guidance towards the realization of dignified housing, amenities, public facilities, and infrastructure utilities across all income groups. The plans recognize that cities are only as vibrant as their economies are, and therefore provide strategic direction that will create explicit opportunities for job-creating investment via real estate development, industry creation and other means. The plans also celebrate the history of the city by articulating guidelines by which the city will preserve its attractive architectural and cultural heritage and thus increase the commercial and touristic value of the central business district amongst other locations. While doing so, the plan also recognizes that the central business district needs to expand and modernize, and therefore provides a strategy for the creation of approximately 170 acres of new or repurposed investor-ready developable land parcels that shall become a dynamic part of modern Kisumu. MASTERPLANNING PROJECT PROFILE Kisumu City Masterplan, Kisumu, Kenya",
        gallery: ["/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KISUMU CITY MASTERPLAN, Design Proposal 2020/IMAGES/Lakefront Reviesd-with updated sports ground.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KISUMU CITY MASTERPLAN, Design Proposal 2020/IMAGES/Plan 1.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KISUMU CITY MASTERPLAN, Design Proposal 2020/IMAGES/Plan 2.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KISUMU CITY MASTERPLAN, Design Proposal 2020/IMAGES/Render 1.jpg"]
      },
      {
        slug: "kongowea-village-mombasa-design-proposal-2018",
        title: "Kongowea Village Mombasa, Design Proposal 2018",
        type: "Masterplanning",
        location: "Kenya",
        year: "2018",
        img: "/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KONGOWEA VILLAGE MOMBASA, Design Proposal 2018/IMAGES/01-KONGOWEA AERIAL AXON.JPG",
        shortDescription: "Explore the intricate details of Kongowea Village Mombasa, Design Proposal 2018, a premier masterplanning development in Kenya that pushes the boundaries of craft and form. Explore the full design journey below.",
        description: "STATUS Design Proposal A development of close to 1300 residential units in Kongowea, Mombasa County. The development is designed to create a symbiotic relationship with the nearby Kongowea Market and surrounding residential and commercial areas, with pedestrian traffic from the neighbourhood being allowed to pass through the development. 7-meter-wide pedestrian thoroughfares flanked by commercial units link the site to the surrounding neighbourhood. Affordability, efficiency, and use of technology are major factors. The Village is designed to encourage non-motorized transport, with parking areas being confined to the outer edges of the development. PLANNING has executed the master plan and part of the Concept Design Stage. MASTERPLANNING PROJECT PROFILE Kongowea Village, Mombasa, Kenya",
        gallery: ["/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KONGOWEA VILLAGE MOMBASA, Design Proposal 2018/IMAGES/01-KONGOWEA AERIAL AXON.JPG","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KONGOWEA VILLAGE MOMBASA, Design Proposal 2018/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/KONGOWEA VILLAGE MOMBASA, Design Proposal 2018/IMAGES/2.jpg"]
      },
      {
        slug: "lakeview-estate-1982",
        title: "Lakeview Estate, 1982",
        type: "Masterplanning",
        location: "Kenya",
        year: "1982",
        img: "/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/LAKEVIEW ESTATE, 1982/IMAGES/1.jpg",
        shortDescription: "A journey through light and material: Lakeview Estate, 1982 in Kenya re-imagines what a masterplanning space can achieve. Explore the full design journey below.",
        description: "The multi award winning Lake View Estate.......... This unique residential development set in a fully landscaped, well-maintained, secure, and competently engineered estate, with carefully considered land use has become a milestone in excellence in residential development in Nairobi. The lake has become a major landmark in Nairobi, and the entire area around Lakeview Estate has collectively come to be known as Lakeview. Emanating from an architectural competition in the late 1970's, this winning design set to develop 60 acres of abandoned coffee plantation with three low- lying swampy areas into a residential community. PLANNING recognized the unique opportunity available for creation of a lake in a large vlei in the centre of the site, and with this the financial advantages of not bringing in vast quantities of earth to fill it as was proposed by other architects. The outline designs from PLANNING for 88, 4-bedroomed, 2.5 bath roomed houses on 60 acres were regarded as “untested” and there were initial doubts about sales. The lake was designed to be self-cleansing with carefully selected water-purifying plants and fish that would control mosquito larvae, frogs, and algae. Many exceptionally mature trees would be protected. A botanical study of the site identified 2 ground creepers new to the Herbarium and a species of eucalyptus tree not known of elsewhere in East Africa. The materials and design of the typical house type came from an intense study by PLANNING of the most cost-effective yet sustainable materials to use. The combination of “dry stone” for the external walls, brick, cedar wood block floors and timber columns, beams and sloped wood strip finishes under clay tile roofs (no ceilings) gave these houses a unique appeal, and they sold fast.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/LAKEVIEW ESTATE, 1982/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/LAKEVIEW ESTATE, 1982/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/LAKEVIEW ESTATE, 1982/IMAGES/3.jpg"]
      },
      {
        slug: "mama-ngina-waterffront-2019",
        title: "Mama Ngina Waterffront, 2019",
        type: "Masterplanning",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/MAMA NGINA WATERFFRONT, 2019/IMAGES/MAMA NGINA COURTYARD IMG 1.jpg",
        shortDescription: "A journey through light and material: Mama Ngina Waterffront, 2019 in Kenya re-imagines what a masterplanning space can achieve. Explore the full design journey below.",
        description: "Mama Ngina Waterffront, 2019 sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/MAMA NGINA WATERFFRONT, 2019/IMAGES/MAMA NGINA COURTYARD IMG 1.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/MAMA NGINA WATERFFRONT, 2019/IMAGES/MAMA NGINA COURTYARD IMG 3.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/MAMA NGINA WATERFFRONT, 2019/IMAGES/MAMA NGINA CULTURE IMG 2.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/MAMA NGINA WATERFFRONT, 2019/IMAGES/MAMA NGINA CULTURE IMG 8.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/MAMA NGINA WATERFFRONT, 2019/IMAGES/MAMA NGINA GATEWAY IMG 1.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/MAMA NGINA WATERFFRONT, 2019/IMAGES/MAMA NGINA PIGEON TOWER IMG 2.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/MAMA NGINA WATERFFRONT, 2019/IMAGES/Mombasa Waterfront_CONCEPT_Site Plan_2019.01.jpg"]
      },
      {
        slug: "the-nairobi-rivers-regeneration-project",
        title: "The Nairobi Rivers Regeneration Project",
        type: "Masterplanning",
        location: "Kenya",
        year: "2004",
        img: "/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/THE NAIROBI RIVERS REGENERATION PROJECT/IMAGES/54.jpg",
        shortDescription: "Explore the intricate details of The Nairobi Rivers Regeneration Project, a premier masterplanning development in Kenya that pushes the boundaries of craft and form. Explore the full design journey below.",
        description: "STATUS Design Proposal The Nairobi Rivers Regeneration project is an urban initiative by PLANNING. The Nairobi Rivers Regeneration initiative outlines a vision for the physical regeneration of the urban river corridors. By unlocking the potential of river fronting properties and land, city-wide renewal is possible. This includes providing land for lower income and affordable housing, providing public open and recreational space, improving urban mobility, and promoting mixed-use, mixed income developments giving public access to the rehabilitated river corridors. Riverfront properties, as well as properties in proximity to the river corridors, will benefit from this rapid increase in land value. PLANNING has successfully secured grant funding from the British Government (2018), the Government of Norway (2019), and the Government of France (2020) to undertake a pre-feasibility study, map river pollution and in parallel identify high impact sites, and to develop a first phase river regeneration masterplan for Nairobi River. Parallel to the masterplan, a development framework will guide and facilitate river related development. A number of pilot projects will showcase the environmental, social, and economic benefit of addressing the heavily polluted rivers in a holistic and inclusive manner. The citizens of Nairobi can create a place where they will want to be. The Nairobi Rivers Regeneration project, Nairobi,",
        gallery: ["/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/THE NAIROBI RIVERS REGENERATION PROJECT/IMAGES/54.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/THE NAIROBI RIVERS REGENERATION PROJECT/IMAGES/Intervention.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/THE NAIROBI RIVERS REGENERATION PROJECT/IMAGES/kiosks cross-section.jpg","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/THE NAIROBI RIVERS REGENERATION PROJECT/IMAGES/KIPANDE ROAD.jpg"]
      },
      {
        slug: "tilisi-commercial-centre-design-concept-2021",
        title: "Tilisi Commercial Centre, Design Concept 2021",
        type: "Masterplanning",
        location: "Kenya",
        year: "2021",
        img: "/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/TILISI COMMERCIAL CENTRE, Design Concept 2021/IMAGES/Commercial Precinct-1.png",
        shortDescription: "Tilisi Commercial Centre, Design Concept 2021 stands as a testament to contextual architecture in Kenya. Discover how this masterplanning space harmonizes with its environment. Explore the full design journey below.",
        description: "STATUS Design Concept Precinct plan for the neighborhood centre and commercial node within the Tilisi Development. The concept aims to create a high street type of commercial development in a setting that is largely pedestrian. The development is broken up into smaller blocks, creating an area based on human scale that links to the surrounding streetscape and landscape. Building entrances and shop fronts are facing and being accessed directly off the streets, activating the public spaces, and creating a 'village center' in the heart of the Tilisi development. The public realm is further expanded by utilizing and incorporating proposed setbacks within the blocks, creating generous pedestrian and mixed-use spaces that can accommodate various uses such as markets and events. The development comprises a mix of retail, hospitality, commercial, and residential development. MASTERPLANNING PROJECT PROFILE Tilisi Development Commercial District, Limuru, Kenya",
        gallery: ["/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/TILISI COMMERCIAL CENTRE, Design Concept 2021/IMAGES/Commercial Precinct-1.png","/assets/images/2024/SECTOR PROFILES/MASTERPLANNING/TILISI COMMERCIAL CENTRE, Design Concept 2021/IMAGES/Commercial Precinct-1.png"]
      },
    ]
  },
  {
    slug: "residential",
    title: "Residential",
    blurb: "Exceptional architecture in the Residential sector.",
    projects: [
      {
        slug: "capstone-heights-apartments",
        title: "Capstone Heights Apartments",
        type: "Residential",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/CAPSTONE HEIGHTS APARTMENTS/IMAGES/1.jpg",
        shortDescription: "Discover the visionary design of Capstone Heights Apartments. Located in Kenya, this residential project sets a new standard for sustainable and aesthetic integrity. Explore the full design journey below.",
        description: "Capstone Heights Apartments sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/CAPSTONE HEIGHTS APARTMENTS/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/CAPSTONE HEIGHTS APARTMENTS/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/CAPSTONE HEIGHTS APARTMENTS/IMAGES/3.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/CAPSTONE HEIGHTS APARTMENTS/IMAGES/4.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/CAPSTONE HEIGHTS APARTMENTS/IMAGES/5.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/CAPSTONE HEIGHTS APARTMENTS/IMAGES/ELEVATION.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/CAPSTONE HEIGHTS APARTMENTS/IMAGES/MASTERPLAN.jpg"]
      },
      {
        slug: "changamwe-housing-mombasa",
        title: "Changamwe Housing, Mombasa",
        type: "Residential",
        location: "Kenya",
        year: "2016",
        img: "/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/CHANGAMWE HOUSING, MOMBASA/IMAGES/Changamwe Apartments Elevation.jpg",
        shortDescription: "From its bold civic presence to its refined interiors, Changamwe Housing, Mombasa in Kenya is a masterclass in modern residential architecture. Explore the full design journey below.",
        description: "STATUS Design Proposal Preliminary masterplan development. Changamwe Souk, Mombasa,",
        gallery: ["/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/CHANGAMWE HOUSING, MOMBASA/IMAGES/Changamwe Apartments Elevation.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/CHANGAMWE HOUSING, MOMBASA/IMAGES/Changamwe Market apartments elevation.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/CHANGAMWE HOUSING, MOMBASA/IMAGES/Changamwe Market apartments Section.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/CHANGAMWE HOUSING, MOMBASA/IMAGES/Changamwe Mixed Use Masterplan.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/CHANGAMWE HOUSING, MOMBASA/IMAGES/Changamwe Souk Long Elevation.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/CHANGAMWE HOUSING, MOMBASA/IMAGES/Changamwe Souk Sectional Elevation.jpg"]
      },
      {
        slug: "hadada",
        title: "Hadada",
        type: "Residential",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/HADADA/IMAGES/Cottage 3.jpg",
        shortDescription: "Discover the visionary design of Hadada. Located in Kenya, this residential project sets a new standard for sustainable and aesthetic integrity. Explore the full design journey below.",
        description: "Hadada sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/HADADA/IMAGES/Cottage 3.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/HADADA/IMAGES/HADAD RENDER COTTAGE 1.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/HADADA/IMAGES/HADAD RENDER COTTAGE 3.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/HADADA/IMAGES/HADADA MAIN HOUSE RENDER.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/HADADA/IMAGES/HADADA.jpg"]
      },
      {
        slug: "mi-vida-keza-housing-riruta",
        title: "Mi Vida Keza Housing, Riruta",
        type: "Residential",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/MI VIDA KEZA HOUSING, RIRUTA/IMAGES/1.jpg",
        shortDescription: "A journey through light and material: Mi Vida Keza Housing, Riruta in Kenya re-imagines what a residential space can achieve. Explore the full design journey below.",
        description: "Mi Vida Keza Housing, Riruta sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/MI VIDA KEZA HOUSING, RIRUTA/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/MI VIDA KEZA HOUSING, RIRUTA/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/MI VIDA KEZA HOUSING, RIRUTA/IMAGES/3.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/MI VIDA KEZA HOUSING, RIRUTA/IMAGES/4.jpg"]
      },
      {
        slug: "ocean-seven-2020",
        title: "Ocean Seven, 2020",
        type: "Residential",
        location: "Kenya",
        year: "2020",
        img: "/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/OCEAN SEVEN, 2020/IMAGES/33.jpg",
        shortDescription: "Ocean Seven, 2020 stands as a testament to contextual architecture in Kenya. Discover how this residential space harmonizes with its environment. Explore the full design journey below.",
        description: "PLANNING's design, comprises seven apartment towers within a 17acre landscaped park and will feature the tallest residential tower, along the Eastern African coastline, at 25 storeys (all the way from Sharm El Sheikh in Egypt to Durban in South Africa). Located on the beach-front on Kenya's North coast and 20kms from the city of Mombasa, an existing resort and business center is being transformed into a high-density, luxury, residential and retail mixed-use development. The carefully arranged towers ensure ocean views and natural cross ventilation to apartments, while allowing sea breezes to penetrate the site. The development will house two commercial towers providing over 200,000 square feet of letable space and five residential towers accommodating 325 apartments, each with unhindered views to the ocean. A bold approach is being taken on sustainability, both environmental and economic, with water conservation (through rain-water harvesting treating and recycling), energy efficiency (through passive cooling and ventilation design systems) and climate-specific design (through use of solar reflective and rust-resistant materials for the building fabric). RESIDENTIAL PROJECT PROFILE Ocean Seven, Kikambala, Kenya",
        gallery: ["/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/OCEAN SEVEN, 2020/IMAGES/33.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/OCEAN SEVEN, 2020/IMAGES/OCEAN 1.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/OCEAN SEVEN, 2020/IMAGES/OCEAN 2.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/OCEAN SEVEN, 2020/IMAGES/OCEAN SEVEN_EXTERIOR 4.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/OCEAN SEVEN, 2020/IMAGES/OCEAN SEVEN_EXTERIOR 6.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/OCEAN SEVEN, 2020/IMAGES/OCEAN SEVEN_INTERIOR 1.jpg"]
      },
      {
        slug: "pangani-housing",
        title: "Pangani Housing",
        type: "Residential",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/PANGANI HOUSING/IMAGES/1.jpg",
        shortDescription: "Uncover the story behind Pangani Housing, a sophisticated residential project in Kenya that balances community needs with architectural elegance. Explore the full design journey below.",
        description: "Pangani Housing sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/PANGANI HOUSING/IMAGES/1.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/PANGANI HOUSING/IMAGES/2.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/PANGANI HOUSING/IMAGES/Pangani aerial view 2.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/PANGANI HOUSING/IMAGES/Pangani side view img.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/PANGANI HOUSING/IMAGES/PANGANI WORMS EYE VIEW.jpg"]
      },
      {
        slug: "samara-proposal",
        title: "Samara, Proposal",
        type: "Residential",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/SAMARA, Proposal/IMAGES/01. Gatehouse.jpg",
        shortDescription: "Experience the future of residential design with Samara, Proposal. A landmark project in Kenya that redefines spatial excellence. Explore the full design journey below.",
        description: "Samara, Proposal sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/SAMARA, Proposal/IMAGES/01. Gatehouse.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/SAMARA, Proposal/IMAGES/02. Building view.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/SAMARA, Proposal/IMAGES/03. Street view.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/SAMARA, Proposal/IMAGES/05. Courtyard 1.jpg","/assets/images/2024/SECTOR PROFILES/RESIDENTIAL/SAMARA, Proposal/IMAGES/06. Courtyard 2.jpg"]
      },
    ]
  },
  {
    slug: "retail",
    title: "Retail",
    blurb: "Exceptional architecture in the Retail sector.",
    projects: [
      {
        slug: "karen-waterfront-2020",
        title: "Karen Waterfront, 2020",
        type: "Retail",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/RETAIL/KAREN WATERFRONT, 2020/IMAGES/KAREN EXTERIOR_5.2.jpg",
        shortDescription: "Uncover the story behind Karen Waterfront, 2020, a sophisticated retail project in Kenya that balances community needs with architectural elegance. Explore the full design journey below.",
        description: "Karen Waterfront, 2020 sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/RETAIL/KAREN WATERFRONT, 2020/IMAGES/KAREN EXTERIOR_5.2.jpg","/assets/images/2024/SECTOR PROFILES/RETAIL/KAREN WATERFRONT, 2020/IMAGES/KAREN EXTERIOR_6.1.jpg","/assets/images/2024/SECTOR PROFILES/RETAIL/KAREN WATERFRONT, 2020/IMAGES/KAREN INTERIOR_1.1.jpg","/assets/images/2024/SECTOR PROFILES/RETAIL/KAREN WATERFRONT, 2020/IMAGES/karen1.jpg","/assets/images/2024/SECTOR PROFILES/RETAIL/KAREN WATERFRONT, 2020/IMAGES/KAREN_FIRST_FLOOR.JPG","/assets/images/2024/SECTOR PROFILES/RETAIL/KAREN WATERFRONT, 2020/IMAGES/KAREN_HALLWAY.jpg","/assets/images/2024/SECTOR PROFILES/RETAIL/KAREN WATERFRONT, 2020/IMAGES/KAREN_LAKESIDE_WALKWAY.jpg","/assets/images/2024/SECTOR PROFILES/RETAIL/KAREN WATERFRONT, 2020/IMAGES/KAREN_SIDEVIEW 4.JPG","/assets/images/2024/SECTOR PROFILES/RETAIL/KAREN WATERFRONT, 2020/IMAGES/KAREN_SIDEVIEW.jpg","/assets/images/2024/SECTOR PROFILES/RETAIL/KAREN WATERFRONT, 2020/IMAGES/KAREN_WATER FRONT.jpg"]
      },
      {
        slug: "rosslyn-riviera-2017",
        title: "Rosslyn Riviera, 2017",
        type: "Retail",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/RETAIL/ROSSLYN RIVIERA, 2017/IMAGES/ROSSLYN RIVERA ACROSS THE STREET.jpg",
        shortDescription: "A journey through light and material: Rosslyn Riviera, 2017 in Kenya re-imagines what a retail space can achieve. Explore the full design journey below.",
        description: "Rosslyn Riviera, 2017 sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/RETAIL/ROSSLYN RIVIERA, 2017/IMAGES/ROSSLYN RIVERA ACROSS THE STREET.jpg","/assets/images/2024/SECTOR PROFILES/RETAIL/ROSSLYN RIVIERA, 2017/IMAGES/ROSSLYN RIVERA EXTR AT NIGHT 1.jpg","/assets/images/2024/SECTOR PROFILES/RETAIL/ROSSLYN RIVIERA, 2017/IMAGES/ROSSLYN RIVERA INTERIOR IMG 10 1.jpg","/assets/images/2024/SECTOR PROFILES/RETAIL/ROSSLYN RIVIERA, 2017/IMAGES/ROSSLYN RIVERA INTERIOR IMG 3.jpg","/assets/images/2024/SECTOR PROFILES/RETAIL/ROSSLYN RIVIERA, 2017/IMAGES/ROSSLYN RIVERA INTERIOR IMG 4.jpg","/assets/images/2024/SECTOR PROFILES/RETAIL/ROSSLYN RIVIERA, 2017/IMAGES/ROSSLYN RIVERA INTERIOR IMG 9.jpg","/assets/images/2024/SECTOR PROFILES/RETAIL/ROSSLYN RIVIERA, 2017/IMAGES/ROSSLYN RIVERA UPCLOSE 2.jpg","/assets/images/2024/SECTOR PROFILES/RETAIL/ROSSLYN RIVIERA, 2017/IMAGES/ROSSLYN RIVERA UPCLOSE.1.jpg"]
      },
      {
        slug: "sarit-centre-2020",
        title: "Sarit Centre, 2020",
        type: "Retail",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/RETAIL/SARIT CENTRE, 2020/IMAGES/SARIT_CENTRE_CHERENGANI_HALLWAY-1.jpg",
        shortDescription: "Explore the intricate details of Sarit Centre, 2020, a premier retail development in Kenya that pushes the boundaries of craft and form. Explore the full design journey below.",
        description: "Sarit Centre, 2020 sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/RETAIL/SARIT CENTRE, 2020/IMAGES/SARIT_CENTRE_CHERENGANI_HALLWAY-1.jpg","/assets/images/2024/SECTOR PROFILES/RETAIL/SARIT CENTRE, 2020/IMAGES/SARIT_CENTRE_DSC_6855.jpg","/assets/images/2024/SECTOR PROFILES/RETAIL/SARIT CENTRE, 2020/IMAGES/SARIT_CENTRE_EXTERIOR_DSCF0684.jpg","/assets/images/2024/SECTOR PROFILES/RETAIL/SARIT CENTRE, 2020/IMAGES/SARIT_CENTRE_HALL_3 copy.jpg","/assets/images/2024/SECTOR PROFILES/RETAIL/SARIT CENTRE, 2020/IMAGES/SARIT_CENTRE_HALL_4.JPG","/assets/images/2024/SECTOR PROFILES/RETAIL/SARIT CENTRE, 2020/IMAGES/SARIT_CENTRE_INTERIOR_3.JPG","/assets/images/2024/SECTOR PROFILES/RETAIL/SARIT CENTRE, 2020/IMAGES/SARIT_CENTRE_INTERIOR_4.JPG","/assets/images/2024/SECTOR PROFILES/RETAIL/SARIT CENTRE, 2020/IMAGES/SARIT_CENTRE_ROOFTOP_EXTERIOR _1.jpg"]
      },
    ]
  },
  {
    slug: "wellness-and-healthcare",
    title: "Wellness And Healthcare",
    blurb: "Exceptional architecture in the Wellness And Healthcare sector.",
    projects: [
      {
        slug: "vipingo-hospital",
        title: "Vipingo Hospital",
        type: "Wellness And Healthcare",
        location: "Kenya",
        year: "2024",
        img: "/assets/images/2024/SECTOR PROFILES/WELLNESS AND HEALTHCARE/VIPINGO HOSPITAL/IMAGES/0.0.jpg",
        shortDescription: "Experience the future of wellness and healthcare design with Vipingo Hospital. A landmark project in Kenya that redefines spatial excellence. Explore the full design journey below.",
        description: "Vipingo Hospital sits within a careful balance of context, climate and craft. The brief called for a clear, restrained architectural language — one that defers to its surroundings while introducing a contemporary civic presence. Daylight, cross-ventilation and locally sourced materials guide the experience from threshold to interior, and the planning gives generous space to both gathering and quiet retreat. The result is a building that reads as inevitable: confident, low-key and built to age well.",
        gallery: ["/assets/images/2024/SECTOR PROFILES/WELLNESS AND HEALTHCARE/VIPINGO HOSPITAL/IMAGES/0.0.jpg","/assets/images/2024/SECTOR PROFILES/WELLNESS AND HEALTHCARE/VIPINGO HOSPITAL/IMAGES/0.1.jpg","/assets/images/2024/SECTOR PROFILES/WELLNESS AND HEALTHCARE/VIPINGO HOSPITAL/IMAGES/0.2.jpg","/assets/images/2024/SECTOR PROFILES/WELLNESS AND HEALTHCARE/VIPINGO HOSPITAL/IMAGES/Elev. 0.0.jpg"]
      },
    ]
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProject = (categorySlug: string, projectSlug: string) => {
  const category = getCategory(categorySlug);
  if (!category) return null;
  const project = category.projects.find((p) => p.slug === projectSlug);
  if (!project) return null;
  return { category, project };
};
