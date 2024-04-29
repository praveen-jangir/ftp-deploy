export const latestBlog = [
    {
        image: "../assets/images/blog1.webp",
        alter: "blog1.webp",
        title: "Common Pitfalls in CIPD Assignments and How to Avoid Them",
    },
    {
        image: "../assets/images/blog3.webp",
        alter: "blog3.webp",
        title: "Crafting a Compelling Nursing Case Study with Relevant Examples",
    },
    {
        image: "../assets/images/blog4.webp",
        alter: "blog4.webp",
        title: "In-Depth Guide to Law Assignment Support",
    }
];

export const blogSlider = {
    items: 4,
    autoplay: true,
    margin: 10,
    loop : true,
    dots: false,
    nav: true,
    navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
    responsive:{
        0:{
            items:1,
        },
        575:{
            items:2,
        },
        768:{
            items:3,
        },
        1000:{
            items:4
        }
    }

};
