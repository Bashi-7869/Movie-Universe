const movie = [
    {
        id:1,
        title: "IT",
        category: "Horror",
        img: "/images/item1.png",
        rating:15.66,
        desc:`This movie is based on Stephen King's novel and the plot is revolves around a group of     childeren who face off against a malevolent entiy
              that takes the form of Pennywise the clown. The film incorporates elements of psychological horror, supernatural suspense, and coming of age themes,
              making it a notable entry in both horror and thiller cinema.`
    },

    {
        id:2,
        title: "The Conjuring",
        category: "Horror",
        img: "/images/item2.jpg",
        rating:15.66,
        desc:`The Conjuring is a 2013 supernatural horror film inspired by the true-life story of the Perron family, who claimed theylived among the dead in the 1970s as spirits both friendly and sinister inhabited their Rhode Island farmhouse.`
    },

    {
        id:3,
        title: "The nun",
        category: "Horror",
        img: "/images/item3.jpg",
        rating:15.66,
        desc:`A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun`
  
    },
    {
        id:4,
        title: "LA LLorona",
        category: "Horror",
        img: "/images/item4.jpg",
        rating:15.66,
        desc:`A social worker, Anna, who unknowingley becomes entangled in La Llorona's curse after investingating a family in distress. As La Llorona begins to target Anna's own children, she seeks help from a former priest protect her family from  the malevolent spirit. `
  
    },
    {
        id:5,
        title: "The Exorcist",
        category: "Horror",
        img: "/images/item5.jpg",
        rating:15.66,
        desc:`When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.`
  
    },
    {
        id:6,
        title: "Masooda",
        category: "Horror",
        img: "/images/item6.jpg",
        price:15.66,
        desc:`the schoolteacher Neelam, and her teenage daughter, Nazia possessed ba malevolent spirit, neelam seeks help of her neighbor Gopi and local exorcist to save her.`
    },
    {
        id:7,
        title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe (2005)",
        category: "Fantasy",
        img: "/images/item7.jpg",
        rating:15.66,
        desc:` The story follows four siblings Peter, Susan, Edmund and Lucy who discover a magical wardrobe that transports them to the mysftcal land of Narnia. In Narnia the children join the fight to free narnia from the which's tyrant.`
    
    },
    {
        id:7,
        title: "Jumanji: The Next Level (2019)",
        category: "Fantasy",
        img: "/images/item8.jpg",
        rating:15.66,
        desc:`A group of friends who are pulled back into the dangerous jumanji video game world to rescue their friend Spencer.`
    
    },
    {
        id:7,
        title: "Pinocchio (2019)",
        category: "Fantasy",
        img: "/images/item9.jpg",
        rating:15.66,
        desc:`The story follows a wooden puppet created by the poor carpenter Geppetto.that puppet name is Pinocchio who magically comes to life and how pinocchio  embarks on a journey to become a real boy. `
    
    },
    {
        id:7,
        title: "The Jungle Book (2016)",
        category: "Fantasy",
        img: "/images/item10.jpg",
        rating:15.66,
        desc:` A young boy name is Mowgli raiseed by wolves in the jungle. When the fearsome tiger Shere Khan Threatens his life, Mowgli embarks on a journey of self-discovery, guided by hid loyal panther friend Bagheera and the fun-loving bear Baloo`
    
    },
    {
        id:7,
        title: "Life of Pi (2012)",
        category: "Fantasy",
        img: "/images/item11.jpg",
        rating:15.66,
        desc:` a boy name is Pi Patel,who survived from shipwreck in the pacific ocean.He is stranded on a lifeboat with several animals, including a Beangal tiger named Richard Parker. as the drift across ocean, Pi must find ways to coexist with the tiger while struggling to survive.`
    
    },
    {
        id:7,
        title:"Harry Potter and the Sorcerer's Stone (2001)",
        category: "Fantasy",
        img: "/images/item12.jpg",
        rating:15.66,
        desc:`In this story follows an orpahaned boy name is Harry Potter,who discovers on his elevent birthday that he is a wizard and how he learns about his magical heritage and past.`
    
    },
    {
        id:7,
        title:"Jurassic World",
        category: "Fantasy",
        img: "/images/item13.jpg",
        rating:15.66,
        desc:` The story take place  at a fully operational dinosaur theme park called Jurassic world there a dinosur called indominus which escapes and wreaks havoc on the park. the park manager Claire Dearing along with dinosaur trainer owen Grady must find a way to save the guests including Clair's nephews.`
    
    },
    {
        id:7,
        title:" John Wick",
        category: "action",
        img: "/images/item14.jpg",
        rating:15.66,
        desc:` John Wick a retired hitman how he drawn back into his former life of assassination and he unleashes his lethal skills on those responsible, relentless quest for retribution that pulls him into a world of organized crime.`
    
    },
    {
        id:7,
        title:"Ek The Tiger",
        category: "action",
        img: "/images/item15.jpg",
        rating:15.66,
        desc:`In this film a RAW agent name is Tiger who assigned to trackdown a suspected scientist they tiger encounters Zoya a Pakistani intelligence agent as their paths intertwine and how complicated their romance by their duties to their countries.`
    
    },
    {
        id:7,
        title:"War",
        category: "action",
        img: "/images/item16.jpg",
        rating:15.66,
        desc:` The story revolves around Kabir a elite soldier and mentor and his protege. khalid who is tasked with tracking him down after kabir is declared a traitor. how khalid embarks on a mission to uncover kabir's motives.`
    
    },
    {
        id:7,
        title:"Pushpa:The Rise",
        category: "action",
        img: "/images/item17.jpg",
        rating:15.66,
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit atque cumque natus totam magnam! Assumenda magnam nihil mollitia accusantium velit perferendis labore.`
    
    },
    {
        id:7,
        title:"Sye",
        category: "action",
        img: "/images/item18.jpg",
        rating:15.66,
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit atque cumque natus totam magnam! Assumenda magnam nihil mollitia accusantium velit perferendis labore,.`
    
    },
    {
        id:7,
        title:"Mad Max: Fury Road ",
        category: "action",
        img: "/images/item19.jpg",
        rating:15.66,
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit atque cumque natus totam magnam! Assumenda magnam nihil mollitia accusantium velit perferendis labore,.`
    
    },
    {
        id:7,
        title:"Jamaba Lakidi Pamba",
        category: "comedy",
        img: "/images/item20.jpg",
        rating:15.66,
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit atque cumque natus totam magnam! Assumenda magnam nihil mollitia accusantium velit perferendis labore,`
    
    },
    {
        id:7,
        title:"Golmaal: Fun Unlimited",
        category: "comedy",
        img: "/images/item21.jpg",
        rating:15.66,
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit atque cumque natus totam magnam! Assumenda magnam nihil mollitia accusantium velit perferendis labore,`
    
    },
    {
        id:7,
        title:"Race Grurram",
        category: "comedy",
        img: "/images/item22.jpg",
        rating:15.66,
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit atque cumque natus totam magnam! Assumenda magnam nihil mollitia accusantium velit perferendis labore.`
    
    },
    {
        id:7,
        title:"Bhool Bhulaiyaa",
        category: "comedy",
        img: "/images/item23.jpg",
        rating:15.66,
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit atque cumque natus totam magnam! Assumenda magnam nihil mollitia accusantium velit perferendis labore.`
    
    },
    {
        id:7,
        title:"Superbad",
        category: "comedy",
        img: "/images/item24.jpg",
        rating:15.66,
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit atque cumque natus totam magnam! Assumenda magnam nihil mollitia accusantium velit perferendis labore.`
    
    },
    {
        id:7,
        title:"The Hangover",
        category: "comedy",
        img: "/images/item25.jpg",
        rating:15.66,
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit atque cumque natus totam magnam! Assumenda magnam nihil mollitia accusantium velit perferendis labore.`
    
    },
    {
        id:7,
        title:"Sherlock Holmes",
        category: "Mystery",
        img: "/images/item26.jpg",
        rating:15.66,
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit atque cumque natus totam magnam! Assumenda magnam nihil mollitia accusantium velit perferendis labore,.`
    
    },
    {
        id:7,
        title:"anweshippin kandethum ",
        category: "Mystery",
        img: "/images/item27.jpg",
        rating:15.66,
        desc:` Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit atque cumque natus totam magnam! Assumenda magnam nihil mollitia accusantium velit perferendis labore.`
    
    },
    {
        id:7,
        title:"shutter island",
        category: "Mystery",
        img: "/images/item28.jpg",
        rating:15.66,
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit atque cumque natus totam magnam! Assumenda magnam nihil mollitia accusantium velit perferendis labore.`
    
    },
]