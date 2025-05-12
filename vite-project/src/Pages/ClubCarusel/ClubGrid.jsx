import React from "react";
import { ClubCard } from "./ClubCard";
export  const clubs = [
     
       
    {
      name: "Literati Cell",
      description: "A creative hub for literature and arts enthusiasts.",
      imageUrl:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1000",
    },
    {
      name: "GFG",
      description: "A coding community for programmers.",
      imageUrl:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    },
    {
      name: "Dracula",
      description: "A theater society for aspiring performers.",
      imageUrl:
        "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&q=80&w=1000",
    },
    {
      name: "Step Cell",
      description: "A vibrant dance club celebrating college Life",
      imageUrl:"https://www.google.com/imgres?q=dance%20image&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F042%2F959%2F775%2Fsmall%2Fai-generated-theatrical-performance-beautiful-tender-graceful-ballerina-dancing-against-dark-blue-background-with-spotlight-concept-of-art-classical-ballet-creativity-choreography-beauty-ad-photo.jpg&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fdance-background&docid=kLM0Q0U_0GkwpM&tbnid=H0UbPHVLJcdV9M&vet=12ahUKEwi7rIyZ4u6LAxVPTGwGHb9bAF0QM3oECGYQAA..i&w=400&h=200&hcb=2&ved=2ahUKEwi7rIyZ4u6LAxVPTGwGHb9bAF0QM3oECGYQAA"
       }, 
  {
    name: "Viva",
    description: "A club dedicated to anchoring and public speaking.",
    imageUrl:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Euphony",
    description: "A hub for singing and music enthusiasts.",
    imageUrl:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "AlgoZenith",
    description: "A competitive coding club for programmers.",
    imageUrl:
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "GDSC",
    description: "Google Developer Student Club for cloud learning.",
    imageUrl:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Decoder",
    description: "A coding club focused on problem-solving.",
    imageUrl:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Deco",
    description: "A club specializing in event decoration .",
    imageUrl:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Management",
    description: "Event management club smooth campus events.",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Sports",
    description: "A club fostering athletics and sports culture.",
    imageUrl:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "TT Club",
    description: "A community for table tennis lovers.",
    imageUrl:
      "https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Basketball",
    description: "A basketball club for players and enthusiasts.",
    imageUrl:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1000",
  },
];
// export const ClubGrid = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
//       {clubs.map((club) => (
//         <ClubCard
//           key={club.name}
//           name={club.name}
//           description={club.description}
//           imageUrl={club.imageUrl}
//         />
//       ))}
//     </div>
//   );
// };
