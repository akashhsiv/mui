import React from 'react';
import { Box } from '@mui/material';
import Post from './Post';

const postsData = [
  {
    id: 1,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/9/97/Naruto_Uzumaki.png",
    title: "Naruto Uzumaki",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/97/Naruto_Uzumaki.png",
    caption: "Believe it!"
  },
  {
    id: 2,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/7/72/Sasuke_uchiha.jpg",
    title: "Sasuke Uchiha",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/72/Sasuke_uchiha.jpg",
    caption: "I have long since closed my eyes."
  },
  {
    id: 3,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/6/6f/L_%28Death_Note%29.jpg",
    title: "L",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/6f/L_%28Death_Note%29.jpg",
    caption: "I am justice."
  },
  {
    id: 4,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/f/f2/Vegeta_Dragon_Ball_Z.png",
    title: "Vegeta",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f2/Vegeta_Dragon_Ball_Z.png",
    caption: "It's over 9000!"
  },
  {
    id: 5,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/8/8e/Levi_ackerman.jpg",
    title: "Levi Ackerman",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/8e/Levi_ackerman.jpg",
    caption: "Give up on your dreams and die."
  },
  {
    id: 6,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/9/9a/Natsu_Dragneel.jpg",
    title: "Natsu Dragneel",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/9a/Natsu_Dragneel.jpg",
    caption: "I'm all fired up!"
  },
  {
    id: 7,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/Ichigo_Kurosaki.png",
    title: "Ichigo Kurosaki",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/81/Ichigo_Kurosaki.png",
    caption: "If fate is a millstone, then we are the grist."
  },
  {
    id: 8,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/4/4b/Eren_Yeager_character_design.png",
    title: "Eren Yeager",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4b/Eren_Yeager_character_design.png",
    caption: "If you win, you live."
  },
  {
    id: 9,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/7/76/Tanjiro_Kamado.jpg",
    title: "Tanjiro Kamado",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/76/Tanjiro_Kamado.jpg",
    caption: "I'll never give up!"
  },
  {
    id: 10,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/1/19/Nezuko_Demon_Slayer.png",
    title: "Nezuko Kamado",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/19/Nezuko_Demon_Slayer.png",
    caption: "I will protect my brother!"
  },
  {
    id: 11,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/d/d7/Gojo_Satoru.jpg",
    title: "Satoru Gojo",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d7/Gojo_Satoru.jpg",
    caption: "I can see everything."
  },
  {
    id: 12,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/0/09/Yuji_Itadori.jpg",
    title: "Yuji Itadori",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/09/Yuji_Itadori.jpg",
    caption: "I'm going to become a jujutsu sorcerer!"
  },
  {
    id: 13,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/1/1b/Denji_chainsaw_man.png",
    title: "Denji",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1b/Denji_chainsaw_man.png",
    caption: "Chainsaw Man is my hero!"
  },
  {
    id: 14,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/5/56/Mikey_Tokyo_Revengers.jpg",
    title: "Mikey",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/56/Mikey_Tokyo_Revengers.jpg",
    caption: "I won't let anyone die!"
  },
  {
    id: 15,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/5/55/Draken_Tokyo_Revengers.jpg",
    title: "Draken",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/55/Draken_Tokyo_Revengers.jpg",
    caption: "I won't let anyone get hurt!"
  },
  {
    id: 16,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/2/21/Nagi.png",
    title: "Nagi Seishiro",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/21/Nagi.png",
    caption: "I just want to win."
  },
  {
    id: 17,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/c/c7/Barou.png",
    title: "Barou Shouei",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c7/Barou.png",
    caption: "I'm the best!"
  },
  {
    id: 18,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/7/7c/Vagabond_Musashi.png",
    title: "Miyamoto Musashi",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7c/Vagabond_Musashi.png",
    caption: "I want to be the strongest."
  },
  {
    id: 19,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/b/b4/Guts_Berserk.png",
    title: "Guts",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b4/Guts_Berserk.png",
    caption: "I will live, even if it kills me."
  },
  {
    id: 20,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/2/24/Thorfinn_Vinland_Saga.png",
    title: "Thorfinn",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/24/Thorfinn_Vinland_Saga.png",
    caption: "I will find my own path."
  },
  {
    id: 21,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/1/15/Sanji_One_Piece.png",
    title: "Sanji",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/15/Sanji_One_Piece.png",
    caption: "I'll kick your ass!"
  },
  {
    id: 22,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/e/e1/Zoro_One_Piece.png",
    title: "Roronoa Zoro",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e1/Zoro_One_Piece.png",
    caption: "Nothing happened."
  },
  {
    id: 23,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/5/5e/Monkey_D._Luffy.png",
    title: "Monkey D. Luffy",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/5e/Monkey_D._Luffy.png",
    caption: "I’m gonna be king of the pirates!"
  },
  {
    id: 24,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/3/34/Gojo_Satoru.jpg",
    title: "Gojo Satoru",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/34/Gojo_Satoru.jpg",
    caption: "I’m not here to save you."
  },
  {
    id: 25,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/0/0e/Ken_kaneki.jpg",
    title: "Ken Kaneki",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/0e/Ken_kaneki.jpg",
    caption: "I'm not a monster."
  },
  {
    id: 26,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/6/68/Edward_Elric.png",
    title: "Edward Elric",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/68/Edward_Elric.png",
    caption: "A lesson without pain is meaningless."
  },
  {
    id: 27,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/4/49/Rin_Tohsaka.png",
    title: "Rin Tohsaka",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/49/Rin_Tohsaka.png",
    caption: "I won't let anyone get in my way."
  },
  {
    id: 28,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/a/a6/Hinata_Shayou.png",
    title: "Hinata Shoyo",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a6/Hinata_Shayou.png",
    caption: "I'm going to be a great player!"
  },
  {
    id: 29,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/e/ea/Kageyama_Tobio.png",
    title: "Tobio Kageyama",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/ea/Kageyama_Tobio.png",
    caption: "I'm the king of the court!"
  },
  {
    id: 30,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/8/84/Levi_Ackerman.png",
    title: "Levi Ackerman",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/84/Levi_Ackerman.png",
    caption: "I'm going to take them down!"
  },

  {
    id: 31,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/c/c7/Barou.png",
    title: "Barou Shouei",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c7/Barou.png",
    caption: "I'm the best!"
  },
  {
    id: 32,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/6/6e/Megumi_Fushiguro.png",
    title: "Megumi Fushiguro",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/6e/Megumi_Fushiguro.png",
    caption: "I'll protect what matters most."
  },
  {
    id: 33,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/a/aa/Nanami_Kento.png",
    title: "Kento Nanami",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/aa/Nanami_Kento.png",
    caption: "It's not about how many times you fall."
  },
  {
    id: 34,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/8/80/Ryomen_Sukuna.png",
    title: "Ryomen Sukuna",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/80/Ryomen_Sukuna.png",
    caption: "I’m just a king in my own right."
  },
  {
    id: 35,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/en/e/e6/Oikawa_Tooru.png",
    title: "Tooru Oikawa",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e6/Oikawa_Tooru.png",
    caption: "I’m not here to play, I’m here to win."
  },
];

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {postsData.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default Feed;



