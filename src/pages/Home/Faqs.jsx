import React from "react";
import Accordian from "../../components/Accordian";

const faqsData = [
  {
    question: "What are NFTs and how do they work?",
    answer:
      "NFTs, or non-fungible tokens, are a type of digital asset that represent ownership of a unique item or piece of content, such as a piece of artwork or music. They are stored on a blockchain, which is a digital ledger that keeps track of all transactions.",
  },
  {
    question: "How can I purchase one of your NFTs?",
    answer:
      "Once it's available, you will be able to purchase our NFTs on Opensea.",
  },
  {
    question: "How can I ensure the authenticity of an NFT?",
    answer:
      "To ensure the authenticity of our NFTs ONLY use the official links found on this website or our official accounts on IG and Twitter, always triple check the handle is: @marsrejects",
  },
  {
    question: "What is the story behind your collection?",
    answer:
      "Our collection is inspired by counterculture and indie/pulp comic book art, the Mars Rejects story explores the struggles of the left behind on Earth, the cast out as Mars Rejects, as they fight against the tyrannical rulers on Mars.",
  },
  {
    question: "Who's behind the creation of the collection?",
    answer:
      "Our team is initially formed by Pepe Torrado (PFP art and visual design) and Josh Seff (marketing and community), with the collaboration of Pablo Alcalde (comic book artist). We are open to growing our team, if you're interested in collaborating with us, please email us at info@marsrejects.com!",
  },
  {
    question: "Are there events planned for the collection?",
    answer:
      "Yes, we plan to host events and exhibitions to showcase our collection and engage with the community.",
  },
  {
    question: "How can I stay updated about collections and events?",
    answer:
      "Don't miss a beat! Keep up with all of our official communications by subscribing to our newsletters. We've centralized all of our updates in one place to make sure you have the most current information. Sign up at http://marsrejects.beehiiv.com and never miss a thing!",
  },
  {
    question: "What are the benefits of being a holder?",
    answer:
      "Be a part of shaping the story and unlock exclusive perks by supporting our project. You'll gain additional benefits through our roadmap activations, enjoy savings on items in our online store (launching soon), and have early access to future collections. Owning a Mars Rejects NFT grants access to exclusive previews, sneak peeks, pre-orders, and giveaways of upcoming work by Torrado.nyc in digital and physical forms.",
  },
  {
    question: "Has AI been used in the creation of the art?",
    answer:
      "We are committed to crafting truly unique and authentic pieces of art. Rest assured, we believe in the power of the human touch, and we never rely on Artificial Intelligence in our creations. Each piece is crafted by hand, guaranteeing one-of-a-kind authenticity.",
  },
];

const Faqs = () => {
  return (
    <div className="mt-[150px]">
      <div className="max-w-[1200px] w-[90%] mx-auto flex flex-col gap-10 items-start text-lightRed">
        <span className="text-2xl font-druk leading-[0.8em]">faqs</span>

        <div className="h-[1px] bg-current w-full"></div>

        <h2 className="text-[88px] font-druk leading-[0.8em] mt-2 max-w-[700px]">
          THE FACTS
        </h2>

        <p className="text-xl !leading-[1.5] font-interTight font-medium -mt-2">
          If you don’t see your question answered below, send us a message.
        </p>

        <button className="h-12 px-8 border border-current font-drukMedium text-[11px] rounded-full hover:bg-lightRed hover:text-white transition-colors duration-300">
          what did we miss?
        </button>
      </div>

      <div className="mt-10">
        {faqsData.map((faq, index) => (
          <Accordian key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default Faqs;
