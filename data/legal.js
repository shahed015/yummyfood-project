export const FAQS = [
  {
    question: "How do I place an order?",
    answer:
      "Browse the menu, add your favorite dishes to the cart, check your delivery details, and confirm. You will see a summary before you pay.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "We are open Monday to Friday, from 10:00 AM to 10:00 PM. Orders placed outside these hours are handled when we open.",
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "You can change or cancel an order as long as the kitchen has not started preparing it. Please contact us as soon as possible.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Most orders arrive within 30 to 60 minutes, depending on your location and how busy we are.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash on delivery and major mobile and card payments. Available options are shown at checkout.",
  },
  {
    question: "What if there is a problem with my order?",
    answer:
      "If something is missing or not right, contact us on the same day and we will fix it or arrange a replacement.",
  },
];

export const LEGAL_PAGES = {
  delivery: {
    title: "Delivery Information",
    description: "Everything you need to know about how your meal reaches you.",
    content: [
      {
        type: "paragraph",
        text: "We want your food to arrive fresh, warm, and on time. This page explains how delivery works at YummyFood.",
      },
      { type: "heading", text: "Delivery areas and hours" },
      {
        type: "paragraph",
        text: "We deliver within selected areas of Chittagong. Delivery is available during our opening hours, Monday to Friday, 10:00 AM to 10:00 PM.",
      },
      { type: "heading", text: "Delivery time" },
      {
        type: "paragraph",
        text: "Most orders arrive within 30 to 60 minutes. During busy periods or bad weather, it may take a little longer.",
      },
      { type: "quote", text: "Fresh food deserves a careful journey." },
      { type: "heading", text: "Before you order" },
      {
        type: "list",
        items: [
          "Check that your address is complete and correct",
          "Keep your phone nearby for the delivery call",
          "Review your cart before you confirm",
        ],
      },
      {
        type: "paragraph",
        text: "If your order is delayed or something is wrong, please get in touch through our contact page and we will help right away.",
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your information.",
    content: [
      {
        type: "paragraph",
        text: "Your privacy matters to us. This policy explains what information we collect and how we use it when you visit or order from YummyFood.",
      },
      { type: "heading", text: "Information we collect" },
      {
        type: "list",
        items: [
          "Contact details such as your name, phone number, and email",
          "Delivery address and order history",
          "Messages you send through our contact form or newsletter signup",
        ],
      },
      { type: "heading", text: "How we use it" },
      {
        type: "paragraph",
        text: "We use your information to process orders, deliver your food, respond to your questions, and improve our service. We only send newsletters if you have subscribed.",
      },
      { type: "heading", text: "Sharing and security" },
      {
        type: "paragraph",
        text: "We do not sell your personal information. We share it only with partners needed to complete your order, such as delivery and payment providers, and we take reasonable steps to keep it safe.",
      },
      { type: "quote", text: "Your trust is part of every order." },
      { type: "heading", text: "Your choices" },
      {
        type: "paragraph",
        text: "You can ask us to update or delete your information, or unsubscribe from emails at any time by contacting us.",
      },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    description: "The simple rules for using YummyFood.",
    content: [
      {
        type: "paragraph",
        text: "By using our website and placing an order, you agree to the terms below. Please read them carefully.",
      },
      { type: "heading", text: "Orders and pricing" },
      {
        type: "paragraph",
        text: "All orders are subject to availability. Prices and menu items may change without notice, but the price shown at checkout is the price you pay.",
      },
      { type: "heading", text: "Payments" },
      {
        type: "paragraph",
        text: "Payment is due when you place your order or on delivery, depending on the method you choose.",
      },
      { type: "heading", text: "Cancellations and refunds" },
      {
        type: "list",
        items: [
          "Orders can be cancelled before preparation begins",
          "If an order is wrong or missing items, contact us the same day",
          "Approved refunds are returned using the original payment method",
        ],
      },
      { type: "quote", text: "Clear terms make for happy tables." },
      { type: "heading", text: "Changes to these terms" },
      {
        type: "paragraph",
        text: "We may update these terms from time to time. Continuing to use YummyFood after changes means you accept the updated terms.",
      },
    ],
  },
};
