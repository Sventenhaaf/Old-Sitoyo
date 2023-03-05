export const site: InitialStateType = {
  pages: [
    {
      id: 1,
      name: "Home",
      slug: "home",
      sections: [
        {
          id: 101,
          type: "title",
          title: "This is the title",
          subTitle: "Subtitle",
        },
        {
          id: 102,
          type: "paragraph",
          text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
        },
        {
          id: 103,
          type: "image",
          imgUrl:
            "https://images.unsplash.com/photo-1676995278388-6e899b1d5fab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          description: "Description of image",
        },
      ],
    },
    {
      id: 2,
      name: "About",
      slug: "about",
      sections: [
        {
          id: 201,
          type: "paragraph",
          text: `
          Conditions:
          - You can keep pages hidden by not linking to them in menu nor footer. But keep in mind that this page can be found by brute force, or indexed if it was public before.
            In general, regard your content as being public. It's a webpage so that's kind of the goal of many webpages. 

            How about I have a family and want to use this as a repository for family / close friends? 

            ...
          `,
        },
      ],
    },
    {
      id: 3,
      name: "Pricing",
      slug: "pricing",
      sections: [
        {
          id: 301,
          type: "title",
          title: "Pricing",
        },
        {
          id: 302,
          type: "paragraph",
          text: `
                Monethly prices (yearly is 2 months free so 10x monthly price)
                - 0,-: free, no domain, no email, branded with sitoyo, unsplash images, ...
                - 5,-: basic, no domain, no email, no sitoyo brands, own css, own images, one user
                - 10,-: premium, custom domain, no gmail integration, all of the above, three users
                - 50,-: pro, custom domain, gmail integration for three (6,- per user = 18), all of above
              `,
        },
      ],
    },
  ],
};
