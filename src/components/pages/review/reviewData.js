// export const RevBanner = {
//         backgroundImageUrl: 'assets/images/new_img/banner.webp',
//         bannerttl: 'Assignment Expert Help Review',  
//         text: 'Still in Two Minds? The Proof is in Numbers! <br /> 38983 genuine reviews with a rating of 4.9/5.'
// }
export const servBanner = {
    backgroundImageUrl: `../assets/images/new_img/reviewBanner.webp`,
    genderPic: `../assets/images/new_img/reviewGirl.webp`,
  };
  
  
  export const moviebanner = [
    {
      title: `Assignment Expert Help Review`,
      desc: `Still in Two Minds? The Proof is in Numbers! <br /> 38983 genuine reviews with a rating of 4.9/5.`,
      image: [`../assets/images/new_img/salary.webp`, `../assets/images/kirre02.svg`, `../assets/images/kirre.svg`],
      alter: [`Assignment.jpg`, `Assignment.jpg`, `Assignment.jpg`],
      icoItem: [`Affordable Price`, `0% Plagiarism`,  `180+ Phd Expert`],
      rate: [`../assets/images/new_img/rating1.png`, `../assets/images/new_img/rating2.png`, `../assets/images/new_img/rating3.png`],
      alterto: [`Assignment.jpg`, `Assignment.jpg`, `Assignment.jpg`],
    }
  ];

export const selectService = [
    { 
        value: [ '-2', 'Assignment', 'Assignment', 'Dissertation', 'HW', 'CS', 'CW', 'Thesis', 'Programming', 'CDR' ], 
        optioned: [ 'All Services', 'Assignment', 'Essay', 'Dissertation','Home Work', 'Case Study', 'Course Work', 'Thesis', 'Programming', 
                'CDR'] 
    },
    {
        value: [ '5-star', '4 Star', '3 Star', '2 Star', '1 Star' ],
        optioned: [ '5-star', '4 Star', '3 Star', '2 Star', '1 Star' ]
    }
];


export const reviewList = [
    {
        index : 1,
        icon : ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star'],
        rate: 'Excellent',
        location: 'Reviewed from IN ( India )',
        text: 'Hello EveryOne Sandeep From this side',
        image: 'assets/images/gold.svg',
        author: 'Sandeep Chauhan'
    },
    {
        index : 2,
        icon : ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star'],
        rate: 'Excellent',
        location: 'Reviewed from IN ( India )',
        text: 'Hello EveryOne Saurabh From this side',
        image: 'assets/images/gold.svg',
        author: 'Sandeep Chauhan'
    },
    {
        index : 3,
        icon : ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star'],
        rate: 'Excellent',
        location: 'Reviewed from IN ( India )',
        text: 'Hello EveryOne Vansika From this side',
        image: 'assets/images/gold.svg',
        author: 'Sandeep Chauhan'
    },
    {
        index : 4,
        icon : ['fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star', 'fa fa-star'],
        rate: 'Excellent',
        location: 'Reviewed from IN ( India )',
        text: 'Hello EveryOne Vansika From this side',
        image: 'assets/images/gold.svg',
        author: 'Sandeep Chauhan'
    }  
]

// Review Banner Form Select data
export const selectItemPages =[
    { value: '', items: '--Select Pages (1 Page = 250 Words )--' },
    { value: '1', items: '1 page/250 words' },
    { value: '2', items: '2 page/500 words' },
    { value: '3', items: '3 page/750 words' },
    { value: '4', items: '4 page/1000 words' },
    { value: '5', items: '5 page/1250 words' },
    { value: '6', items: '6 page/1500 words' },
    { value: '7', items: '7 page/1750 words' },
    { value: '8', items: '8 page/2000 words' },
    { value: '9', items: '9 page/2250 words' },
    { value: '10', items: '10 page/2500 words' },
    { value: '11', items: '11 page/2750 words' },
    { value: '12', items: '12 page/3000 words' },
    { value: '13', items: '13 page/3250 words' },
    { value: '14', items: '14 page/3500 words' },
    { value: '15', items: '15 page/3750 words' },
    { value: '16', items: '16 page/4000 words' },
    { value: '17', items: '17 page/4250 words' },
    { value: '18', items: '18 page/4500 words' },
    { value: '19', items: '19 page/4750 words' },
    { value: '20', items: '20 page/5000 words' },
    { value: '25', items: '25 page/6250 words' },
    { value: '30', items: '30 page/7500 words' },
    { value: '45', items: '45 page/11500 words' },
    { value: '60', items: '60 page/15000 words' },
    { value: '75', items: '75 page/18750 words' },
    { value: '90', items: '90 page/22500 words' },
    { value: '105', items: '105 page/26250 words' },
    { value: '120', items: '120 page/30000 words' },
    { value: '135', items: '135 page/33750 words' },
    { value: '150', items: '150 page/37500 words' },
    { value: '175', items: '175 page/43750 words' },
    { value: '200', items: '200 page/50000 words' },
    { value: '250', items: '250 page/62500 words' }
]

export const writeReview = [
    { col: `col-12 col-md-6`, labelFor: `name`, labelText: `Full Name`, lengthUnit: `30`, type: `text`, name: `name`, uniqe: `name` },
    { col: `col-12 col-md-6`, labelFor: `topic`, labelText: `Review Topic`, lengthUnit: `100`, type: `text`, name: `service`, uniqe: `service` },
    { col: `col-12`, labelFor: `email`, labelText: `Email`, lengthUnit: `70`, type: `email`, name: `email`, uniqe: `email` },
    { col: `col-12`, labelFor: `comment`, labelText: `Comment`, lengthUnit: `300`, type: `textarea`, name: `comment`, uniqe: `comment` },
]