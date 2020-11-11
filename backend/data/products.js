const products = [
  {
    name: "Shangeloo",
    image: "/images/shangeloo.jpg",
    price: 3.5,
    category: "Sticker",
    description:
      "Shangela in her look for the Rudemption Runway on Rupaul’s Drag Race Allstars...SIMPSONIZED. This sticker stands 2” tall in glossy vinyl. Order your Shangeloo sticker today. Halelloo!",
    countInStock: 13,
    rating: 3.5,
    numReviews: 0,
  },
  {
    name: "What's Up Walbroh",
    image: "/images/what.jpg",
    price: 10.0,
    category: "Pin",
    description:
      "We all grew up trying to find Waldo/Wally. Where's Waldo? introduced readers to Waldo, a distinctively dressed man, as he sets off on 'a world-wide hike'. Pin't Up brings you Walbroh! Unlike Waldo, Walbroh stands out from the crowd and can't be missed. The What's Up Walbroh! pin features glow-in-the-dark stripes so even at night you can still find your buddy!",
    countInStock: 8,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Malibu Hurts",
    image: "/images/malibu.jpg",
    price: 12.0,
    category: "Pin",
    description:
      "Malibu Stacy like Barbie is a doll that perpetuates the male gaze and gender roles from the past. I wanted to make a pin that spoke on the irony of dolls and Beyonce's song 'Pretty Hurts' was a great way illustrate that. Malibu Hurts is donned in the Dolce & Gabbana F/W 2011 dress and bunny ears that Beyonce was wearing in the 'Pretty Hurts' music video. I hope everyone enjoys 'Malibu Hurts' and maybe Malibu Stacy will reincarnate in another form.",
    countInStock: 23,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Humpty Trump",
    image: "/images/trump.jpg",
    price: 12.0,
    category: "Pin",
    description:
      "Humpty Trump Pin inspired by Leo Murray’s “Trump Baby” balloon created for London’s recent protests towards Trump visiting. The pin stands 1.25” tall in hard enamel, featuring glitter hair.",
    countInStock: 30,
    rating: 5,
    numReviews: 1,
  },
  {
    name: "Donut Give Up",
    image: "/images/donut.jpg",
    price: 10.0,
    category: "pin",
    description:
      "Pin’t Up brings you the next pin from The Sofa Series and it’s here to give you some encouragement. The “Donut Give Up” pin stands at 1.75” in gold hard enamel.Get this pin as a symbol of daily motivation or gift it to someone to push them to keep going! Order your “Donut Give Up” pin today!",
    countInStock: 9,
    rating: 3.5,
    numReviews: 0,
  },
  {
    name: "Mad Marge",
    image: "/images/mad.jpg",
    price: 12.0,
    category: "Pin",
    description:
      "Marge is stressed and she done put her hair up to relax. We all have something to be mad about, but we push through in spite of.After Solange’s ES Magazine debacle I thought the situation was a great metaphor for her song “Mad.” Come have a seat at The Sofa, it’ll help you when you’re feeling blue...or yellow? ",
    countInStock: 11,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Stop The Bullets",
    image: "/images/stop.jpg",
    price: 10.0,
    category: "Pin",
    description:
      "Bullet Bill has become weary of the ways of the world. Bill, like the rest of us, has had his spirit broken from the apparent racial inequality in our country. Pin't Up decided to take some of the power from the 'bullet'and use it as a memoriam for our fallen angels.",
    countInStock: 18,
    rating: 5,
    numReviews: 1,
  },
  {
    name: "Ru the Good Witch",
    image: "/images/rupaul.jpg",
    price: 12.0,
    category: "Pin",
    description:
      "In Baum's classic children's novel, The Wonderful Wizard of Oz (1900), Glinda the Good Witch is the most powerful sorceress in the Land of Oz. Similarly, Rupaul is the most powerful Queen in the world of drag. The Wizard of Oz means a great deal to the LGBTQ community so we thought Ru as Glinda would be a great mash-up to start the Pin Better Werq pin series. When you pre-order the 'Ru the Good Witch' pin you receive a “Lisa Mattel” sticker. Get Pin't Up and dragged out!",
    countInStock: 15,
    rating: 4.5,
    numReviews: 0,
  },
  {
    name: "With Intention",
    image: "/images/solo.jpg",
    price: 10.0,
    category: "Pin",
    description:
      "Pin’t Up’s first ever pin was an ode to Solange and her masterpiece “A Sear at the Table.” Get ready as we introduce our newest pin for her album, “When I Get Home.” The “With Intention” pin stand at 1.75” in hard enamel, featuring Solange in the pose from her previous album but with the stunning eyepiece also in metal.",
    countInStock: 0,
    rating: 5,
    numReviews: 0,
  },
  {
    name: "Lisa Mattel Sticker",
    image: "/images/lisa.jpg",
    price: 3.5,
    category: "Sticker",
    description:
      "OH Hoooneeey! Trixie Mattel is one of America's favorite drag queens thanks to Rupaul's Drag Race. Lisa being the progressive women she is has dressed up as Trixie from the new All Stars 3 promo to show her support! The 'Lisa Mattel' sticker, standing at 2.5' tall, features a gold glitter bodysuit like the one Trixie donned for the shoot.",
    countInStock: 10,
    rating: 5.0,
    numReviews: 0,
  },
  {
    name: "Orna Lisa",
    image: "/images/orna.jpg",
    price: 10.0,
    category: "Pin",
    description:
      "Pin't Up brings you the most well-known club kid we all know and love, Vivacious! Lisa is serving Leigh Bowery realness with the Ornacia body suit Vivacious donned on her entrance to Drag Race Season 6. The pin stands at 1.5' tall and features glitter panels for some extra sparkle. MUTHA has arrived and this iconic look will forever be immortalized in enamel. Order your Orna Lisa pin today!",
    countInStock: 3,
    rating: 3.0,
    numReviews: 0,
  },
  {
    name: "Backpack",
    image: "/images/backpack.jpg",
    price: 45.0,
    category: "Bag",
    description:
      "This medium size backpack is just what you need for daily use or sports activities! The pockets (including one for your laptop) give plenty of room for all your necessities, while the water-resistant material will protect them from the weather. Water-resistant material. Made from 100% polyester",
    countInStock: 4,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "Aja Moon Sticker",
    image: "/images/aja.jpg",
    price: 3.5,
    category: "Sticker",
    description:
      "Aja Kween in her look for the Wigs on Wigs on Wigs Runway on Rupaul’s Drag Race Allstars...SIMPSONIZED. This sticker stands 2” tall in glossy vinyl. Order your Aja Moon sticker today!",
    countInStock: 0,
    rating: 3.5,
    numReviews: 0,
  },
  {
    name: "Lil Tanooki",
    image: "/images/lil.jpg",
    price: 10.0,
    category: "Pin",
    description:
      "Pin'T Up is based out of Chicago and we Chicagoans go hard for our hometown heroes. I decided to celebrate overnight superstar, Chance the Rapper. I love how Chance is proud of his upbringing on the Southside and we wanted to highlight that. Our second run of Lil Chano has him in the Tanooki suit from Super Mario.",
    countInStock: 3,
    rating: 5,
    numReviews: 6,
  },
  {
    name: "Rich Leopard Beach Towel",
    image: "/images/towel.jpg",
    price: 35.0,
    category: "Accessory",
    description:
      "Give your bathroom a vibrant look and wrap yourself up with this super soft and cozy all-over sublimation towel.Available in one size: 30”x60” 52% cotton, 48% polyester",
    countInStock: 0,
    rating: 4.5,
    numReviews: 0,
  },
  {
    name: "Leopard Bag",
    image: "/images/bag.jpg",
    price: 35.0,
    category: "bag",
    description:
      "A trendy beach bag, where you can put everything that matters when hitting those warm beaches. 100% polyester fabric",
    countInStock: 3,
    rating: 4,
    numReviews: 0,
  },
  {
    name: "The Sofa Sticker",
    image: "/images/sofa.jpg",
    price: 3.0,
    category: "Sticker",
    description:
      "Pin't Up brings our first sticker collection fresh for this holiday season! Featuring Destiny's Child from their Love:Destiny album, Malibu Stacy, Black Jesus and Naughty Marge. Pick up a set before they're gone!",
    countInStock: 22,
    rating: 3.5,
    numReviews: 0,
  },
];

export default products;
