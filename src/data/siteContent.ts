/**
 * Site content data — structured to map directly to Sanity schemas later.
 * When you add Sanity, each of these objects becomes a document type,
 * and you swap these imports for GROQ queries.
 */

export const siteSettings = {
  title: "Pam Hervey Music",
  description: "Pam Hervey — singer-songwriter from the Hudson Valley, New York.",
  email: "pam@pamhervey.com",
  socialLinks: {
    instagram: "https://www.instagram.com/phervey1/",
    bandcamp: "https://pamhervey.bandcamp.com/",
  },
};

export const hero = {
  image: "/images/hero.jpg",
  alt: "Pam Hervey portrait photo",
};

export const album = {
  title: "Some Kind of Way",
  artist: "Pam Hervey",
  subtitle: "DEBUT album",
  vinylNote: "Now available on vinyl",
  coverImage: "/images/album-cover.png",
  coverAlt: "Some Kind of Way album cover",
  purchaseUrl: "https://pamhervey.bandcamp.com/",
  purchaseLabel: "Purchase on Bandcamp",
};

export const bio = {
  paragraphs: [
    "Pam Hervey is a singer-songwriter hailing from the Hudson Valley, New York, and has captured the hearts of listeners with her 2024 album, \"Some Kind of Way.\"",
    "The album features a mix of original tracks, including \"Tender Mercies,\" \"Love & War,\" and \"Music From Another Room,\" alongside unique reinterpretations of existing songs like \"Scott Street\" and \"Blue Valentines.\"",
    "Pam's music blends indie folk with touches of Americana, creating a sound that feels both personal and universal. Her lyrical storytelling and warm vocal delivery have resonated with audiences looking for authenticity and emotional depth.",
  ],
};

export const latestSingle = {
  title: "End of an Era",
  releaseDate: "Available 3/21/25",
  coverImage: "/images/end-of-an-era-cover.png",
  coverAlt: "End of an Era single cover",
  listenHeading: "Listen to the new single:",
  streamingLinks: [
    {
      platform: "Apple Music",
      icon: "/images/apple-music-icon.png",
      url: "#",
    },
    {
      platform: "Spotify",
      icon: "/images/spotify-icon.png",
      url: "#",
    },
  ],
};

export const contact = {
  heading: "Contact",
  description: "For booking, press, and other inquiries, use this form:",
  fields: ["Name", "Email", "Message"],
  submitLabel: "Send",
  successMessage: "Thank you!",
};
