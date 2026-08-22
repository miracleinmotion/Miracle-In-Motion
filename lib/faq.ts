export type FaqItem = {
  id: string;
  question: string;
  // Rendered as-is inside a <div> — plain strings become one paragraph.
  // Use an array of strings for multiple paragraphs.
  answer: string | string[];
};

export type FaqCategory = {
  slug: string;
  label: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    slug: "services",
    label: "Services",
    items: [
      {
        id: "what-services",
        question: "What services do you offer?",
        answer: [
          "My services are targeted towards individuals and businesses. If you need a media expert from Brisbane to capture a special event or promote your business, I'm your guy. My cheapest on-site service areas range anywhere from around the west Brisbane area, until the city.",
          "I specialise in:\n— Birthday/function coverage\n— Social media content\n— Promotional videos\n— Concert coverage\n— Outdoor portrait sessions\n— Sports coverage",
        ],
      },
    ],
  },
  {
    slug: "booking",
    label: "Booking & Pricing",
    items: [
      {
        id: "prices",
        question: "What are your prices?",
        answer:
          "Every project is unique, so pricing is based on the type of service, duration of service, number of people involved, location and editing demands (things like VFX heavy videos or revisions). Get in touch with the details of your project and I'll provide a tailored quote.",
      },
      {
        id: "booking-process",
        question: "What's the booking process?",
        answer: [
          "Enquire → Discuss your project → Receive quote → Pay deposit and date is secured → Session → Editing → Preview of final project/revisions → Pay remaining cost → Final delivery",
          "PSA: All bookings require a 50% non-refundable deposit. Any additional costs after a session has been wrapped will be included in the final invoice.",
        ],
      },
      {
        id: "before-session",
        question: "What additional things should I need to provide before a session starts?",
        answer:
          "To make things easier for both of us, please inform me of your desired outcome. Whether that's a certain creative style or someone else's previous work, let me know so I can plan it out myself. This way I can assure a professional experience between us.",
      },
    ],
  },
  {
    slug: "editing-delivery",
    label: "Editing & Delivery",
    items: [
      {
        id: "editing-included",
        question: "Do photo and video services include editing?",
        answer: [
          "Yes. I do all the cutting, music selecting, colour grading and motion graphics.",
          "If compression is needed for social media/website compatibility, I will happily deliver both a high quality and compressed version free of charge.",
        ],
      },
      {
        id: "revisions",
        question: "How many video editing revisions is acceptable?",
        answer:
          "I accept about 3 free minor full revisions. This includes small cuts, reorganising clips, changing colour grading or removing any unwanted effects. Bigger changes like music will incur an additional fee.",
      },
      {
        id: "raw-media",
        question: "Are RAW photos and videos included in the base price and delivery?",
        answer:
          "Raw media can be requested and delivered separately at an additional cost.",
      },
    ],
  },
];
