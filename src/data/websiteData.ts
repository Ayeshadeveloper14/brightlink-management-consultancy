export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface RejectionReason {
  id: string;
  tabLabel: string;
  title: string;
  issue: string;
  howToAvoid: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  timeAgo: string;
  rating: number;
  content: string;
  avatarColor: string;
  initials: string;
}

export const REJECTION_REASONS: RejectionReason[] = [
  {
    id: "property",
    tabLabel: "Property Below Threshold",
    title: "Property Below Threshold Or Unapproved Developer",
    issue: "If the invested property is not above AED 2M or the developer isn't registered, your application may be rejected.",
    howToAvoid: "Verify the property's valuation and developer approval. We can assist in confirming this before submission."
  },
  {
    id: "documentation",
    tabLabel: "Incomplete Documentation",
    title: "Incomplete Or Unattested Documentation",
    issue: "Missing degree attestations from the UAE Ministry of Foreign Affairs (MOFA), outdated bank statements, or missing family marriage/birth certificates lead to immediate rejection or prolonged holds.",
    howToAvoid: "Ensure all educational degrees and vital certificates are fully attested by the home country foreign ministry, UAE Embassy, and MOFA UAE. Our team handles complete end-to-end document attestation."
  },
  {
    id: "salary",
    tabLabel: "Salary or Employment Criteria",
    title: "Salary Below AED 30,000 Or Misclassified Job Role",
    issue: "Applying under the Skilled Professional category without meeting the exact minimum basic/gross salary of AED 30,000 per month (as verified via MOHRE contract and 6 months bank statements), or holding a job title not classified under MOHRE Occupational Level 1 or 2.",
    howToAvoid: "Pre-screen your MOHRE employment contract and salary slips. If your title is misclassified or salary includes non-qualifying allowances, we help review eligibility through alternative qualifying routes."
  },
  {
    id: "entrepreneur",
    tabLabel: "Weak Entrepreneur Evidence",
    title: "Insufficient Startup Valuation Or Lack Of Official Accreditation",
    issue: "Failing to present an official letter of approval from an accredited UAE business incubator (e.g. Dubai Future District Fund, Hub71, AREA 2071) or lack of certified project valuation exceeding AED 500,000.",
    howToAvoid: "We partner directly with leading UAE innovation hubs and government incubators to obtain qualifying endorsement letters and certified auditor valuation reports."
  },
  {
    id: "talent",
    tabLabel: "Insufficient Recognition of Talent",
    title: "Missing Federal Or Cultural Authority Endorsement",
    issue: "Cultural, artistic, and athletic talents require formal nomination and recommendation letters from authorized bodies such as the Dubai Culture & Arts Authority or the Ministry of Culture and Youth.",
    howToAvoid: "Brightlink prepares a comprehensive creative portfolio matching the specific scoring rubrics of Dubai Culture and ICP prior to formal government submission."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Who qualifies for a UAE Golden Visa?",
    answer: "The UAE Golden Visa is available through several eligibility categories, including property investors, public investors, entrepreneurs, executives and skilled professionals, scientists, doctors, exceptional talents, outstanding students and graduates, creatives, athletes, and other qualifying individuals. Eligibility requirements vary depending on the category and emirate."
  },
  {
    id: "faq-2",
    question: "Can I get a Golden Visa through property investment?",
    answer: "Yes, you can qualify for a 10-year renewable Golden Visa by owning one or more real estate properties in the UAE with a total purchase value of at least AED 2 Million. Properties can be ready, off-plan, or mortgaged (with a bank NOC confirming the minimum paid equity threshold)."
  },
  {
    id: "faq-3",
    question: "What is the salary requirement for a Skilled Professional Golden Visa?",
    answer: "Skilled professionals must have a valid UAE employment contract, be classified under MOHRE Occupational Level 1 or 2 (Managers, Executives, Specialists), hold an attested Bachelor's degree (or higher), and earn a minimum monthly salary of AED 30,000 evidenced by official pay slips and bank statements."
  },
  {
    id: "faq-4",
    question: "How much does a Golden Visa cost and how long does the process take?",
    answer: "Total costs typically range from AED 4,500 to AED 9,500 depending on the authority (GDRFA Dubai vs. ICP Federal), applicant location (inside vs. outside UAE), VIP medical fast-track, and Emirates ID 10-year fees. The processing time usually takes between 3 to 10 business days once all required documents are verified and submitted."
  },
  {
    id: "faq-5",
    question: "Can I stay outside the UAE for more than six months with a Golden Visa?",
    answer: "Yes. Unlike standard UAE residency visas which become invalid if the holder stays outside the country for more than 180 consecutive days, Golden Visa holders are completely exempt from this restriction and can stay abroad for any duration without losing their residency status."
  },
  {
    id: "faq-6",
    question: "Can I sponsor my family under my Golden Visa?",
    answer: "Yes. Golden Visa holders can sponsor their spouse, children of any age (sons up to any age without restriction under current regulations, and unmarried daughters of any age), as well as parents for a matching 10-year residency permit."
  },
  {
    id: "faq-7",
    question: "Do I need an employer or local sponsor for a Golden Visa?",
    answer: "No. The UAE Golden Visa is a self-sponsored residency permit. You do not require a local sponsor, national service agent, or employer endorsement to maintain your visa status."
  },
  {
    id: "faq-8",
    question: "Is there an age limit for sponsoring daughters?",
    answer: "No. Unmarried daughters can be sponsored by the Golden Visa holder regardless of their age."
  },
  {
    id: "faq-9",
    question: "Is the UAE Golden Visa valid for 5 or 10 years?",
    answer: "The standard UAE Golden Visa is granted for a duration of 10 years and is 100% renewable upon expiry as long as the qualifying criteria continue to be met. Certain property investor categories also have 5-year options (e.g. Retirement Visa)."
  },
  {
    id: "faq-10",
    question: "Can I sponsor children who are studying abroad?",
    answer: "Yes. Sponsored dependents can continue studying abroad at international universities without having their UAE residency cancelled, benefiting from the same exemption on the 6-month stay rule."
  },
  {
    id: "faq-11",
    question: "Is there any age limit for sponsoring children under the Golden Visa?",
    answer: "Male children can now be sponsored up to 25 years of age (or with no age limit if they are students or people of determination), and female unmarried children have no age restriction."
  },
  {
    id: "faq-12",
    question: "Do foreign documents require Arabic translation?",
    answer: "Yes. All foreign legal documents such as marriage certificates, birth certificates, and academic diplomas must be legally translated into Arabic by a certified Ministry of Justice (MOJ) translator following consular attestation."
  },
  {
    id: "faq-13",
    question: "At what age is the medical fitness test required?",
    answer: "The UAE medical fitness examination (blood test for communicable diseases and chest X-ray) is mandatory for all applicants and dependents aged 18 years and above."
  },
  {
    id: "faq-14",
    question: "At what age are Emirates ID biometrics required?",
    answer: "Emirates ID biometrics (fingerprints, facial scan, and digital signature) are mandatory for all applicants aged 15 years and older."
  },
  {
    id: "faq-15",
    question: "Can I choose the medical or biometrics centre?",
    answer: "Yes. We arrange VIP and priority medical appointments at premier government medical fitness centres (e.g. Smart Salem, Al Nahda, or Muhaisnah VIP) where results are delivered in as little as 30 to 120 minutes."
  },
  {
    id: "faq-16",
    question: "Where can I apply for a UAE Golden Visa?",
    answer: "You can apply directly through authorized government channels like the General Directorate of Residency and Foreigners Affairs (GDRFA) in Dubai, or the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) for other emirates, or via licensed consultants like Brightlink Management Consultancy."
  },
  {
    id: "faq-17",
    question: "Is health insurance mandatory?",
    answer: "Yes, holding compliant health insurance is mandatory for all UAE residents, including Golden Visa holders and their sponsored dependents. We provide packages ranging from essential basic coverage to comprehensive international policies."
  },
  {
    id: "faq-18",
    question: "What happens to my family's residency if the Golden Visa holder passes away?",
    answer: "Under UAE Golden Visa regulations, family members sponsored by a primary Golden Visa holder are permitted to retain their UAE residency until the full expiration of their 10-year visa permits."
  },
  {
    id: "faq-19",
    question: "Can I sponsor my parents?",
    answer: "Yes. Golden Visa holders can sponsor both parents for a 10-year renewable residency without having to deposit the traditional humanitarian deposit required under standard visas."
  },
  {
    id: "faq-20",
    question: "What happens if my visa application is rejected?",
    answer: "If an application is rejected or placed on hold, the authorities state the precise objection. Brightlink performs a complete pre-assessment so that submissions are 100% compliant. In case of government refusal on procedural grounds, we facilitate appeals or document rectifications."
  },
  {
    id: "faq-21",
    question: "What if my salary is slightly below AED 30,000?",
    answer: "The AED 30,000 gross monthly salary requirement for Skilled Professionals is strict under MOHRE guidelines. However, you may qualify under alternative pathways such as Public Investments, Property Investments, Fixed Deposit, or exceptional talent nominations."
  },
  {
    id: "faq-22",
    question: "Is family sponsorship easier for Golden Visa holders?",
    answer: "Yes, Golden Visa family sponsorship has significantly lower administrative hurdles, no salary cap constraints for sponsoring dependents, no restriction on sponsoring domestic workers, and permits sponsoring parents with equal 10-year validity."
  }
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Zeeshan Butt",
    timeAgo: "5 months ago",
    rating: 5,
    content: "Brightlink management deserved 100/100* Muhammad bilal saleem & his team is amazing, and they prove with work. Golden Visa and nationality change service A 2 Z",
    avatarColor: "bg-amber-600",
    initials: "ZB"
  },
  {
    id: "rev-2",
    author: "Muhammad",
    timeAgo: "3 months ago",
    rating: 5,
    content: "Great experience working with Brightlink Team for my Golden Visa. They were professional, responsive, and handled the entire process smoothly. Got the visa within 5 days!",
    avatarColor: "bg-emerald-600",
    initials: "M"
  },
  {
    id: "rev-3",
    author: "Ritik Gupta",
    timeAgo: "6 months ago",
    rating: 5,
    content: "Hi, I got my 2 year residency visa done through Brightlink Management Consultancy and they were thoroughly professional and got it done in 4 business days. Highly recommend!",
    avatarColor: "bg-blue-600",
    initials: "RG"
  },
  {
    id: "rev-4",
    author: "Elena Rostova",
    timeAgo: "2 months ago",
    rating: 5,
    content: "I purchased an apartment in Downtown Dubai and needed property-based Golden Visa. Bilal and his team verified title deed and got my 10-year Emirates ID in 1 week. VIP service indeed!",
    avatarColor: "bg-purple-600",
    initials: "ER"
  },
  {
    id: "rev-5",
    author: "Tariq Mansoor",
    timeAgo: "4 months ago",
    rating: 5,
    content: "Seamless process for my executive skilled professional Golden Visa. Document attestation, Smart Salem VIP medical, and stamping handled with zero hassle. Best consultancy in Business Bay.",
    avatarColor: "bg-rose-600",
    initials: "TM"
  }
];

export const AUTHORITIES = [
  { name: "GDRFA Dubai", desc: "General Directorate of Residency and Foreigners Affairs", icon: "shield" },
  { name: "ICP", desc: "Federal Authority for Identity & Citizenship", icon: "badge" },
  { name: "MOFA UAE", desc: "Ministry of Foreign Affairs & International Cooperation", icon: "emblem" },
  { name: "UAE Pass", desc: "National Digital Identity for Citizens & Residents", icon: "fingerprint" },
  { name: "U.Ae Portal", desc: "The Official Portal of the UAE Government", icon: "globe" },
  { name: "Ministry of Justice (MOJ)", desc: "Legal Translations & Certified Attestations", icon: "scales" },
  { name: "Dubai Land Department", desc: "Real Estate Property Registration & Title Deeds", icon: "building" },
  { name: "Dubai Economy", desc: "Department of Economy & Tourism (DET)", icon: "landmark" },
  { name: "MOHRE", desc: "Ministry of Human Resources and Emiratisation", icon: "briefcase" },
  { name: "MoHESR", desc: "Ministry of Higher Education and Scientific Research", icon: "academic" }
];

export const ELIGIBILITY_CATEGORIES = [
  {
    id: "doctors",
    title: "Golden Visa for Doctors",
    criteria: "Licensed medical doctors and specialists approved by the UAE Ministry of Health and Prevention (MOHAP) or Dubai Health Authority (DHA) with at least 14-20 years of recognized practice."
  },
  {
    id: "investors",
    title: "Golden Visa for Investors",
    criteria: "Real estate investment of at least AED 2M in ready or off-plan property, or public fund investment / bank fixed deposit of AED 2M maintained for a minimum of 2 years."
  },
  {
    id: "entrepreneurs",
    title: "Golden Visa for Entrepreneurs",
    criteria: "Founders of innovative SMEs with a valuation not less than AED 500,000, endorsed by an accredited UAE business incubator or official economic authority."
  },
  {
    id: "students",
    title: "Golden Visa for Outstanding Students and Graduates",
    criteria: "High school top achievers with >= 95% nationwide, or university graduates with a cumulative GPA >= 3.8 from accredited UAE or top 100 global universities."
  },
  {
    id: "cultural",
    title: "Golden Visa for Cultural and Creative Talents",
    criteria: "Accomplished artists, musicians, writers, designers, and cultural influencers with recommendation letters from Dubai Culture or the UAE Ministry of Culture."
  },
  {
    id: "engineers",
    title: "Golden Visa for Engineers",
    criteria: "Engineers specializing in AI, Big Data, Computer Engineering, Electronics, Software, Genetic Engineering, or Biotechnology with attested degrees and MOHRE classification."
  },
  {
    id: "humanitarian",
    title: "Golden Visa for Humanitarian Pioneers",
    criteria: "Distinguished members of international and regional organizations, civil associations, and public interest institutions, or recipients of recognized humanitarian awards."
  },
  {
    id: "celebrities",
    title: "Golden Visa for Celebrities",
    criteria: "Renowned international actors, athletes, media personalities, and key opinion leaders who contribute to the UAE's position as a global cultural destination."
  }
];
