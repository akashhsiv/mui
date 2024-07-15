import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";

const postsData = [
  {
    id: 1,
    avatarUrl:
      "https://i.pinimg.com/236x/96/71/aa/9671aac619fa889884a4a635e1169e58.jpg",
    title: "Naruto Uzumaki",
    imageUrl:
      "https://i.pinimg.com/236x/d9/d2/c1/d9d2c17db3d960c5a161a50f236baff6.jpg",
    caption: "Believe it!",
  },
  {
    id: 2,
    avatarUrl:
      "https://i.pinimg.com/236x/d2/a3/d5/d2a3d5cc76df06445024ba51abb9a247.jpg",
    title: "Sasuke Uchiha",
    imageUrl:
      "https://i.pinimg.com/236x/fc/a6/00/fca600454b02e2f15b7ac803cb3588c1.jpg",
    caption: "I have long since closed my eyes.",
  },
  {
    id: 3,
    avatarUrl:
      "https://i.pinimg.com/236x/91/63/43/9163431410dd607484edb4605130ae59.jpg",
    title: "L",
    imageUrl:
      "https://i.pinimg.com/236x/17/52/19/1752198573895027659d47eb59ca705d.jpg",
    caption: "I am justice.",
  },
  {
    id: 4,
    avatarUrl:
      "https://i.pinimg.com/236x/18/08/8e/18088ed73c5572dba06b2b4a17042367.jpg",
    title: "Vegeta",
    imageUrl:
      "https://i.pinimg.com/236x/af/58/89/af5889dcdb3372590874faea2424e358.jpg",
    caption: "It's over 9000!",
  },
  {
    id: 5,
    avatarUrl:
      "https://i.pinimg.com/236x/32/e9/be/32e9bed451ed1eb3312591926e118d4a.jpg",
    title: "Levi Ackerman",
    imageUrl:
      "https://i.pinimg.com/236x/b6/aa/28/b6aa28d4fe368b74204ee0075ed150ae.jpg",
    caption: "Give up on your dreams and die.",
  },
  {
    id: 6,
    avatarUrl:
      "https://i.pinimg.com/236x/09/fd/65/09fd65fe8eede3af196b94f45f18de6b.jpg",
    title: "Natsu Dragneel",
    imageUrl:
      "https://i.pinimg.com/236x/7c/82/8c/7c828c4b5aea82f199110f6b7fb81ee4.jpg",
    caption: "I'm all fired up!",
  },
  {
    id: 7,
    avatarUrl:
      "https://i.pinimg.com/236x/8b/8f/3f/8b8f3fbb5a9c1ea70e7246ff855e60f6.jpg",
    title: "Ichigo Kurosaki",
    imageUrl:
      "https://i.pinimg.com/236x/1b/42/24/1b422442caa711104d08fed65b22d36a.jpg",
    caption: "If fate is a millstone, then we are the grist.",
  },
  {
    id: 8,
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4b/Eren_Yeager_character_design.png",
    title: "Eren Yeager",
    imageUrl:
      "https://i.pinimg.com/236x/95/da/08/95da0888b1a0ad6f15b8eb4928969ad3.jpg",
    caption: "If you win, you live.",
  },
  {
    id: 9,
    avatarUrl:
      "https://i.pinimg.com/236x/5d/1a/18/5d1a1828eb8d3a9c66988195831747a6.jpg",
    title: "Tanjiro Kamado",
    imageUrl:
      "https://i.pinimg.com/236x/95/82/b6/9582b68a70506e6d2a16a5e389413fb5.jpg",
    caption: "I'll never give up!",
  },
  {
    id: 10,
    avatarUrl:
      "https://i.pinimg.com/236x/8c/c8/84/8cc88421a0583fb4d559a4649121e82d.jpg",
    title: "Nezuko Kamado",
    imageUrl:
      "https://i.pinimg.com/236x/d1/6c/84/d16c8490e84588c856a8297c496a4971.jpg",
    caption: "I will protect my brother!",
  },
  {
    id: 11,
    avatarUrl:
      "https://i.pinimg.com/236x/36/2a/6a/362a6ac1a56e029b8151849bb12cc9d5.jpg",
    title: "Zenitsu",
    imageUrl:
      "https://i.pinimg.com/474x/25/9d/9a/259d9ac79925a6e1462c86b9a1b4ced1.jpg",
    caption: "Hiding Won't make the sadness go awa.",
  },
  {
    id: 12,
    avatarUrl:
      "https://i.pinimg.com/474x/c0/6d/c1/c06dc1204971428658ab5911ee0954d0.jpg",
    title: "Yuji Itadori",
    imageUrl:
      "https://i.pinimg.com/236x/a0/f2/2a/a0f22abf4f23bfbb066439c3038f36c6.jpg",
    caption: "I'm going to become a jujutsu sorcerer!",
  },
  {
    id: 13,
    avatarUrl:
      "https://i.pinimg.com/236x/1d/93/8e/1d938e62a68c67e8a8db159f84925477.jpg",
    title: "Denji",
    imageUrl:
      "https://i.pinimg.com/236x/91/25/fb/9125fb5231cfb09f4799d4979a24d414.jpg",
    caption: "Chainsaw Man is my hero!",
  },
  {
    id: 14,
    avatarUrl:
      "https://i.pinimg.com/474x/85/b3/fd/85b3fdc698b37e8bcc4010ccffe8ecc0.jpg",
    title: "Mikey",
    imageUrl:
      "https://i.pinimg.com/736x/61/f7/36/61f7366a005bea64e6277fe17243809b.jpg",
    caption: "I won't let anyone die!",
  },
  {
    id: 15,
    avatarUrl:
      "https://i.pinimg.com/236x/01/a7/3d/01a73da06f9539a21d0af484c26abd90.jpg",
    title: "Draken",
    imageUrl:
      "https://i.pinimg.com/236x/25/e5/4b/25e54b0bf21bcbaa6956aaa6f869a94f.jpg",
    caption: "I won't let anyone get hurt!",
  },
  {
    id: 16,
    avatarUrl:
      "https://i.pinimg.com/236x/99/f3/31/99f3317d63478c834fd253175ca59285.jpg",
    title: "Nagi Seishiro",
    imageUrl:
      "https://i.pinimg.com/736x/a9/07/72/a90772c7a6766f9a5d2e5644600558b3.jpg",
    caption: "I just want to win.",
  },
  {
    id: 17,
    avatarUrl:
      "https://i.pinimg.com/236x/50/da/19/50da191530bec518c8284014380993d9.jpg",
    title: "Barou Shouei",
    imageUrl:
      "https://i.pinimg.com/236x/3e/b3/94/3eb3946a9efdc3d84967b40f78acf5b3.jpg",
    caption: "I'm the best!",
  },
  {
    id: 18,
    avatarUrl:
      "https://i.pinimg.com/236x/d9/70/a3/d970a3582e439c95dad29fdbc39520c3.jpg",
    title: "Miyamoto Musashi",
    imageUrl:
      "https://i.pinimg.com/564x/71/73/ca/7173cafb9946a5e6278465d380c81c7d.jpg",
    caption: "I want to be the strongest.",
  },
  {
    id: 19,
    avatarUrl:
      "https://i.pinimg.com/236x/4a/16/a2/4a16a2ac4c5fe7396e7d88fdc3454387.jpg",
    title: "Guts",
    imageUrl:
      "https://i.pinimg.com/236x/74/ec/5a/74ec5a435c4a4545b8f7ef6449e51e1e.jpg",
    caption: "I will live, even if it kills me.",
  },
  {
    id: 20,
    avatarUrl:
      "https://i.pinimg.com/474x/71/16/43/711643d8db2f114dbff2d7b511939e95.jpg",
    title: "Thorfinn",
    imageUrl:
      "https://i.pinimg.com/474x/7b/31/80/7b31808de878b73c29114435d56ab62f.jpg",
    caption: "I will find my own path.",
  },
  {
    id: 21,
    avatarUrl:
      "https://i.pinimg.com/236x/a5/28/b0/a528b0baa767230220a1b18856f6ecf8.jpg",
    title: "Sanji",
    imageUrl:
      "https://i.pinimg.com/236x/9c/4e/50/9c4e503bf22356bb8c0beb8e1e9f567a.jpg",
    caption:
      "Men who can't wipe away the tears from a women's eyes, aren't real men.",
  },
  {
    id: 22,
    avatarUrl:
      "https://i.pinimg.com/736x/cc/4c/5c/cc4c5cd8754bde00e88b391560d75bb7.jpg",
    title: "Roronoa Zoro",
    imageUrl:
      "https://i.pinimg.com/474x/62/d0/09/62d0095af7f3958a368b3b8c055babbe.jpg",
    caption: "Nothing happened.",
  },
  {
    id: 23,
    avatarUrl:
      "https://i.pinimg.com/236x/d9/21/60/d92160da86a546289978a4d589e434bf.jpg",
    title: "Monkey D. Luffy",
    imageUrl:
      "https://i.pinimg.com/236x/9b/19/da/9b19dab3e5063e446c7801d3d7d965be.jpg",
    caption: "I’m gonna be king of the pirates!",
  },
  {
    id: 24,
    avatarUrl:
      "https://i.pinimg.com/236x/82/09/3c/82093c4e4a209c6ae1756429ffe23572.jpg",
    title: "Gojo Satoru",
    imageUrl:
      "https://i.pinimg.com/474x/e9/72/03/e97203942ff5a14bb7f20415b199428f.jpg",
    caption: "I’m not here to save you.",
  },
  {
    id: 25,
    avatarUrl:
      "https://i.pinimg.com/564x/77/5a/2b/775a2be29cf134734f8bfe9706de0671.jpg",
    title: "Ken Kaneki",
    imageUrl:
      "https://i.pinimg.com/236x/b3/67/d5/b367d513d861de468305c32c6cd22756.jpg",
    caption: "I'm not a monster.",
  },
  {
    id: 26,
    avatarUrl:
      "https://i.pinimg.com/236x/e0/e3/79/e0e379bd3129e3d9f1f6f7cf514a694c.jpg",
    title: "Edward Elric",
    imageUrl:
      "https://i.pinimg.com/474x/63/e3/d5/63e3d59cf6b4ded298e8943e5f5a72c4.jpg",
    caption: "A lesson without pain is meaningless.",
  },
  {
    id: 27,
    avatarUrl:
      "https://i.pinimg.com/236x/98/65/4f/98654f3e02d3dab60c87a71525defae2.jpg",
    title: "Rin Tohsaka",
    imageUrl:
      "https://i.pinimg.com/236x/0b/ce/7e/0bce7e39eb9d77c103679a6d2fa8a0c1.jpg",
    caption: "I won't let anyone get in my way.",
  },
  {
    id: 28,
    avatarUrl:
      "https://i.pinimg.com/236x/be/f3/96/bef39632220c6cd097496b4ab4c780e9.jpg",
    title: "Hinata Shoyo",
    imageUrl:
      "https://i.pinimg.com/236x/92/b3/c7/92b3c755146f7551c6c4082f75878164.jpg",
    caption: "I'm going to be a great player!",
  },
  {
    id: 29,
    avatarUrl:
      "https://i.pinimg.com/474x/ec/b5/1f/ecb51f1a379769f55fce3dac69e22e1c.jpg",
    title: "Tobio Kageyama",
    imageUrl:
      "https://i.pinimg.com/236x/28/89/ae/2889ae30375b3b3dfcd0b038f8747091.jpg",
    caption: "I'm the king of the court!",
  },
  {
    id: 30,
    avatarUrl:
      "https://i.pinimg.com/236x/60/05/7c/60057c9872dd55c7bb27d5f5d75ed022.jpg",
    title: "Pover",
    imageUrl:
      "https://i.pinimg.com/236x/fe/5d/14/fe5d143e685e609e01dcbe4112bb0cf2.jpg",
    caption:
      "Give there nothing else do Do , i have decided to win a nobel prize",
  },

  {
    id: 31,
    avatarUrl:
      "https://i.pinimg.com/236x/ca/3c/f1/ca3cf18fe1065f538c2e38a49a67e75d.jpg",
    title: "Makima",
    imageUrl:
      "https://i.pinimg.com/236x/5e/01/81/5e0181aba6cd5df9d2c6b0e0f62ca4e5.jpg",
    caption: "If you manage to Outdrink me Thenn I'll tell you!",
  },
  {
    id: 32,
    avatarUrl:
      "https://i.pinimg.com/236x/6e/76/fe/6e76fe76a3e3f3bdacb79885cf80e068.jpg",
    title: "Megumi Fushiguro",
    imageUrl:
      "https://i.pinimg.com/236x/ba/9c/bb/ba9cbb9f56e9d8dd4f8736cd565f1d32.jpg",
    caption: "I'll protect what matters most.",
  },
  {
    id: 33,
    avatarUrl:
      "https://i.pinimg.com/236x/96/9b/02/969b02ff71946331aeb6f95d2a274279.jpg",
    title: "Kento Nanami",
    imageUrl:
      "https://i.pinimg.com/236x/e3/e7/bc/e3e7bc62c10745aef231cea0c35894ce.jpg",
    caption: "It's not about how many times you fall.",
  },
  {
    id: 34,
    avatarUrl:
      "https://i.pinimg.com/236x/6b/7f/20/6b7f2004337787239c5b6cc4a754fac4.jpg",
    title: "Ryomen Sukuna",
    imageUrl:
      "https://i.pinimg.com/236x/a5/fd/bc/a5fdbcd0e9808982535b96528d96b495.jpg",
    caption: "I’m just a king in my own right.",
  },
  {
    id: 35,
    avatarUrl:
      "https://i.pinimg.com/236x/46/9b/a8/469ba8da796d81e1b8e7911b9c29483e.jpg",
    title: "Tooru Oikawa",
    imageUrl:
      "https://i.pinimg.com/236x/d3/55/fa/d355fa958dc1872408ad2d1bb95a526e.jpg",
    caption: "I’m not here to play, I’m here to win.",
  },
];

const Feed = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      flex={4}
      p={2}
    >
      {postsData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default Feed;
