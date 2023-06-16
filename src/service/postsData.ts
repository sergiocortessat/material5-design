interface PostInfo {
    cardHeader: {
      avatarLabel: string;
      avatarInitials: string;
      title: string;
      subHeader: string;
    };
    cardMedia: {
      image: string;
      imageAlt: string;
    };
    cardContent: {
      title: string;
    };
    cardExpandableContent?: {
      title: string;
      bodyShortTop: string;
      bodyLong1: string;
      bodyLong2: string;
      bodyShortBottom: string;
    };
  }

  interface RightSideImageProps {
    img: string;
    title: string;
  }
  
  export const postsInfo: PostInfo[] = [
    {
      cardHeader: {
        avatarLabel: "Avatar",
        avatarInitials: "A",
        title: "Shrimp and Chorizo Paella",
        subHeader: "September 14, 2016",
      },
      cardMedia: {
        image:
          "https://www.simplyrecipes.com/thmb/2GMHFcWEHZGOYbT4eoVCAu2uwsw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Seafood-Paella-LEAD-VERTICAL-fc5f1e71baa8484cafa1a106ffaa9c23.jpg",
        imageAlt: "Paella Dish",
      },
      cardContent: {
        title:
          "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels if you like.",
      },
      cardExpandableContent: {
        title: "Method:",
        bodyShortTop:
          "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
        bodyLong1:
          "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
        bodyLong2:
          "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don't open.)",
        bodyShortBottom:
          "Set aside off of the heat to let rest for 10 minutes, and then serve.",
      },
    },
    {
        cardHeader: {
          avatarLabel: "Avatar",
          avatarInitials: "A",
          title: "Shrimp and Chorizo Paella",
          subHeader: "September 14, 2016",
        },
        cardMedia: {
          image:
            "https://www.simplyrecipes.com/thmb/2GMHFcWEHZGOYbT4eoVCAu2uwsw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Seafood-Paella-LEAD-VERTICAL-fc5f1e71baa8484cafa1a106ffaa9c23.jpg",
          imageAlt: "Paella Dish",
        },
        cardContent: {
          title:
            "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels if you like.",
        },
        cardExpandableContent: {
          title: "Method:",
          bodyShortTop:
            "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.",
          bodyLong1:
            "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
          bodyLong2:
            "Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don't open.)",
          bodyShortBottom:
            "Set aside off of the heat to let rest for 10 minutes, and then serve.",
        },
      },
  ];

  export const rightSideImageData: RightSideImageProps[] = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    }
  ];
  