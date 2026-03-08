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
  image: "https://res.cloudinary.com/diduw1fmf/image/upload/v1772233189/phm_header_image_qpycy3.png",
  alt: "Pam Hervey portrait photo",
};

export const album = {
  title: "Some Kind of Way",
  artist: "Pam Hervey",
  subtitle: "DEBUT album",
  vinylNote: "Now available on vinyl",
  coverImage: "https://res.cloudinary.com/diduw1fmf/image/upload/v1772241494/Some_kind_of_way_a1lrds.png",
  coverAlt: "Some Kind of Way album cover",
  purchaseUrl: "https://pamhervey.bandcamp.com/",
  purchaseLabel: "Purchase on Bandcamp",
};

export const bio = {
  backgroundImage: "https://res.cloudinary.com/diduw1fmf/image/upload/v1772233187/phm_bio_background_bqmgrv.png",
  paragraphs: [
    "Pam Hervey is a singer-songwriter hailing from the Hudson Valley, New York, and has captured the hearts of listeners with her 2024 album, \"Some Kind of Way.\" This album showcases Pam's ability to blend introspective lyrics with evocative melodies, offering a profound exploration of emotion and experience through her original music and re-imagination of some of her favorite songs.",
    "The album features original songs like \"Tender Mercies,\" where Pam delves into themes of resilience and finding strength in softness, using a gentle acoustic arrangement that highlights her soulful voice. \"Love & War\" presents a more intense narrative, examining the complexities of relationships through a powerful balladic composition, where the contrasts between piano and electric guitar underscore the tumultuous emotions involved. \"Music From Another Room\" adds an ethereal quality to the album, with its dreamy soundscape and lyrics that suggest a longing for connection and the mysterious allure of distant melodies.",
    "In addition to her original compositions, Pam's choice and treatment of the other seven songs on the album reflect her diverse musical influences and her knack for storytelling. These tracks range from vibrant, upbeat numbers to haunting ballads, each carefully chosen to complement the narrative arc of the album and showcase Pam's versatility as an artist.",
    "Overall, \"Some Kind of Way\" stands out as a heartfelt testament to Pam Hervey's artistry, weaving together personal stories with universal themes that resonate with a wide audience. Her music not only entertains but also invites listeners to reflect on their own journeys through the tender mercies, battles, and unseen melodies of their lives.",
  ],
};

export const latestSingle = {
  title: "End of an Era",
  releaseDate: "Available 3/21/25",
  coverImage: "https://res.cloudinary.com/diduw1fmf/image/upload/v1772233186/phm_endofanera_qbpexa.png",
  coverAlt: "End of an Era single cover",
  listenHeading: "Listen to the new single:",
  streamingLinks: [
    {
      platform: "Apple Music",
      url: "#",
    },
    {
      platform: "Spotify",
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
