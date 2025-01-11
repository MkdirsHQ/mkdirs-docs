interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category: FAQCategory;
  }
  
  const createMailLink = (text = siteConfig.mail) =>
    `<a href='mailto:${siteConfig.mail}' class='underline text-primary'>${text}</a>`;
  
  const createTwitterLink = (text = "Twitter") =>
    `<a href='${siteConfig.links.twitter}' target='_blank' class='underline text-primary'>${text}</a>`;
  
  const createBlueSkyLink = (text = "BlueSky") =>
    `<a href='${siteConfig.links.bluesky}' target='_blank' class='underline text-primary'>${text}</a>`;
  
  const createDocsLink = (text = "documentation") =>
    `<a href='${siteConfig.links.docs}' target='_blank' class='underline text-primary'>${text}</a>`;
  
  const createYoutubeLink = (text = "video tutorials") =>
    `<a href='${siteConfig.links.youtube}' target='_blank' class='underline text-primary'>${text}</a>`;
  
  const createShowcaseLink = (text = "showcase") =>
    `<a href='${siteConfig.links.showcase}' target='_blank' class='underline text-primary'>${text}</a>`;
  
  const createDemoLink = (text = "live demo") =>
    `<a href='${siteConfig.links.demo}' target='_blank' class='underline text-primary'>${text}</a>`;
  
  const createSanityStudioLink = (text = "Sanity Studio") =>
    `<a href='${siteConfig.links.studio}' target='_blank' class='underline text-primary'>${text}</a>`;
  
  const createSanityLink = (text = "Sanity") =>
    `<a href='https://www.sanity.io/pricing' target='_blank' class='underline text-primary'>${text}</a>`;
  
  const createResendLink = (text = "Resend") =>
    `<a href='https://resend.com/pricing' target='_blank' class='underline text-primary'>${text}</a>`;
  
  const createVercelLink = (text = "Vercel") =>
    `<a href='https://vercel.com/pricing' target='_blank' class='underline text-primary'>${text}</a>`;
  
  const createDirectifyLink = (text = "Directify") =>
    `<a href='https://directify.app?aff=MEzPR' target='_blank' class='underline text-primary'>${text}</a>`;
  
const FAQ: FAQItem[] = [
    // General
    {
      id: uuid(),
      question: "What do I get exactly?",
      answer: `- You will get access to the private Github repository with the code you need to run a directory website. \n- The ${createDocsLink()} and ${createYoutubeLink()} will help you set up your directory website much faster. \n- Technical support via email at ${createMailLink()}, will respond within 48 hours.`,
      category: "General",
    },
    {
      id: uuid(),
      question: "I don't know how to code, can I use it?",
      answer: `No, you need to know how to code, and you better know React, Next.js and TypeScript. \nIf you want a non-code solution, you can try ${createDirectifyLink()} to launch your directory website.`,
      category: "General",
    },
    {
      id: uuid(),
      question: "My techstack is different, can I use it?",
      answer:
        "Yes, you can use it as long as you are comfortable with React, Next.js and TypeScript.",
      category: "General",
    },
    {
      id: uuid(),
      question: "Can I see what I am getting before I pay?",
      answer: `You can explore the ${createDemoLink()} to see what the directory website (aka, the frontend) looks like, or request your permission to explore the ${createSanityStudioLink()} (aka, the backend) to see how to manage the content of the directory website, for example, how to add items, how to add categories, how to edit blog posts, etc. \nIf you have any other questions, feel free to reach out to us via email at ${createMailLink()}.`,
      category: "General",
    },
    {
      id: uuid(),
      question: "How to set up the directory website with Mkdirs?",
      answer: `You can checkout the <a href='${siteConfig.links.docs}' target='_blank' class='underline text-primary'>documentation</a> and the <a href='${siteConfig.links.youtube}' target='_blank' class='underline text-primary'>video tutorials</a> for the detailed instructions.\nI can launch a directory website within 30 minutes, you can too if you follow the instructions.\nFeel free to reach out to us via email at <a href='mailto:${siteConfig.mail}' class='underline text-primary'>${siteConfig.mail}</a> if you have any questions.`,
      category: "General",
    },
    {
      id: uuid(),
      question: "How many directory websites can I build with Mkdirs?",
      answer: "You can build unlimited directory websites with Mkdirs.",
      category: "General",
    },
    {
      id: uuid(),
      question:
        "Why should I buy Mkdirs instead of other directory boilerplates?",
      answer:
        "Mkdirs is the best directory boilerplate if compared with other directory boilerplates. \nIt streamlines your development process by integrating Sanity CMS, eliminating the need to set up another database, storage, or CMS. Everything you need is pre-configured and ready to use.\nMkdirs also comes with support for Listing, Newsletter, Payment, Blog, Authentication, SEO, Themes and more.",
      category: "General",
    },
    {
      id: uuid(),
      question: "How to get technical support?",
      answer: `You can reach out to us via email at ${createMailLink()}.`,
      category: "General",
    },
  
    // Technical
    {
      id: uuid(),
      question: "TypeScript or JavaScript?",
      answer:
        "Mkdirs is written in TypeScript, but you can easily change it to JavaScript.",
      category: "Technical",
    },
    {
      id: uuid(),
      question: "Nextjs 14 or Nextjs 15? App router or Pages router?",
      answer:
        "Mkdirs uses <a href='https://nextjs.org/docs/14/getting-started' target='_blank' class='underline text-primary'>Nextjs 14 App router</a>, and currently does not have plans to upgrade to Nextjs 15.",
      category: "Technical",
    },
    {
      id: uuid(),
      question: "What is Sanity CMS and why choose it?",
      answer:
        "<a href='https://www.sanity.io/' target='_blank' class='underline text-primary'>Sanity CMS</a> is a powerful, flexible headless CMS that simplifies structured content management. It offers an intuitive interface and robust API, perfect for building directory websites.\nMkdirs streamlines your development process by integrating Sanity CMS, eliminating the need to set up another database, storage, or CMS. Everything you need is pre-configured and ready to use.\nNotably, <a href='https://www.netlify.com/blog/unveiling-the-state-of-web-development-and-predictions-for-2024-and-beyond/' target='_blank' class='underline text-primary'>Sanity achieved the highest user satisfaction score among all CMS platforms in 2023</a>.",
      category: "Technical",
    },
    {
      id: uuid(),
      question: "How many items can I save to Sanity in Free Plan?",
      answer:
        "According to the <a href='https://www.sanity.io/pricing' target='_blank' class='underline text-primary'>Sanity pricing</a>, you can save up to 10,000 items in the Free Plan.",
      category: "Technical",
    },
    {
      id: uuid(),
      question: "How to sync the source code with the Mkdirs repository?",
      answer: `You can checkout this <a href='https://docs.mkdirs.com/guide/develop/#how-to-sync-the-source-code' target='_blank' class='underline text-primary'>guide</a> for the detailed instructions.`,
      category: "Technical",
    },
    {
      id: uuid(),
      question:
        "How to customize the font or the logo or the theme of the directory website?",
      answer: `You can checkout the <a href='${siteConfig.links.docs}' target='_blank' class='underline text-primary'>documentation</a> and the <a href='${siteConfig.links.youtube}' target='_blank' class='underline text-primary'>video tutorials</a> for the detailed instructions.\n- Customize the font: <a href='https://docs.mkdirs.com/guide/font/' target='_blank' class='underline text-primary'>https://docs.mkdirs.com/guide/font/</a> \n- Customize the logo: <a href='https://docs.mkdirs.com/guide/logo/' target='_blank' class='underline text-primary'>https://docs.mkdirs.com/guide/logo/</a>\n- Customize the theme: <a href='https://docs.mkdirs.com/guide/theme/' target='_blank' class='underline text-primary'>https://docs.mkdirs.com/guide/theme/</a>`,
      category: "Technical",
    },
    {
      id: uuid(),
      question: "How to import the data from other directory websites to Mkdirs?",
      answer: `You can write a script to export the data from other directory websites, and then import the data to Mkdirs. \nFor example, you can use the <a href='https://www.sanity.io/docs/cli-reference' target='_blank' class='underline text-primary'>Sanity CLI</a> feature or <a href='https://www.sanity.io/docs/js-client' target='_blank' class='underline text-primary'>Sanity Client API</a> to import the data to Mkdirs.`,
      category: "Technical",
    },
    {
      id: uuid(),
      question: "How to learn more about Sanity CMS?",
      answer: `You can checkout this <a href='https://docs.mkdirs.com/guide/sanity/' target='_blank' class='underline text-primary'>guide</a> for the detailed instructions.\nYou will learn how to update the Sanity schemas, and how to configure the Sanity Studio, etc.\nWe also provide a <a href='https://docs.mkdirs.com/guide/sanity/#further-reading' target='_blank' class='underline text-primary'>list of tutorials and documents</a> about Sanity CMS, you can refer to them for more information.`,
      category: "Technical",
    },
    {
      id: uuid(),
      question: "Does Mkdirs support internationalization?",
      answer:
        "No, Mkdirs does not support internationalization, and will not support it in the future, because it will make the boilerplate too heavy. But you can easily add more languages, because Mkdirs is built with Next.js and Sanity CMS, both of which support internationalization.\n- Next.js: <a href='https://nextjs.org/docs/app/building-your-application/routing/internationalization' target='_blank' class='underline text-primary'>https://nextjs.org/docs/app/building-your-application/routing/internationalization</a> \n- Sanity: <a href='https://www.sanity.io/docs/localization' target='_blank' class='underline text-primary'>https://www.sanity.io/docs/localization</a>",
      category: "Technical",
    },
  
    // Payment
    {
      id: uuid(),
      question: "Does Mkdirs support Lemonsqueezy or other payment services?",
      answer:
        "No, Mkdirs does not support Lemonsqueezy or other payment services, only Stripe is supported.",
      category: "Payment",
    },
    {
      id: uuid(),
      question: "How much does it cost to run a directory website?",
      answer: `With Mkdirs, you can easily launch a directory website for almost zero cost. \nYou only pay for your domain, and start with the free plan of ${createSanityLink()} and ${createResendLink()} and ${createVercelLink()}. \nWhen the traffic of your directory website grows, you can choose to upgrade your plans later.`,
      category: "Payment",
    },
    {
      id: uuid(),
      question: "What if I can't pay with Stripe?",
      answer: `Feel free to reach out to us via email at ${createMailLink()}, we can send you a license key if you can pay with other payment methods, for example, PayPal.`,
      category: "Payment",
    },
    {
      id: uuid(),
      question: "Can I get a refund?",
      answer: `After you get access to the private Github repository, Mkdirs is yours forever, so it can't be refunded.\nWe encourage you to carefully review the product details, the ${createDocsLink()} and the ${createYoutubeLink()} before making your purchase to ensure it meets your requirements.`,
      category: "Payment",
    },
  
    // License
    {
      id: uuid(),
      question: "What am I allowed to do with the boilerplate?",
      answer:
        "You are allowed to build and ship unlimited projects with Mkdirs (commercial projects too). \nYou are not allowed to publish the code or parts of it as a template or boilerplate.\nYou are not allowed to provide the boilerplate code as a service to others, for example, you can't help others launch directory websites with Mkdirs as a service.",
      category: "License",
    },
    {
      id: uuid(),
      question: "How does the license key activation process work?",
      answer:
        "After you successfully purchase the template, you'll receive a license key, which is already filled in the form. Then provide your GitHub username, not your GitHub account email. Once submitted, you'll receive an invitation email to join the private GitHub repository.",
      category: "License",
    },
    {
      id: uuid(),
      question:
        "I redeemed the license, but I did not receive an invite. What should I do?",
      answer: `Please check your GitHub username, and make sure you provided the correct GitHub username. \nPlease check your email of GitHub account, or check the notification in your GitHub account. \nIf you still have not received the invite after 30 minutes, please contact me at ${createMailLink()}.`,
      category: "License",
    },
    {
      id: uuid(),
      question: "What can I do with the template repository?",
      answer:
        "As a collaborator on our private GitHub repository, you will receive the following benefits:\n- Access to the latest development branches and pre-release versions\n- Early access to bug fixes and new features without waiting for releases\n- The ability to submit pull requests\n- Permission to open and manage issues, contributing directly to improving the project",
      category: "License",
    },
    {
      id: uuid(),
      question: "Do I need to keep my license key?",
      answer:
        "Once you've successfully activated your license key, and gained access to the private GitHub repository, you'll retain access indefinitely, so you don't need to keep your license key. \nHowever, it's recommended to store your license key securely in case you want to activate in the future.",
      category: "License",
    },
    {
      id: uuid(),
      question: "What if I lose my license key before activation?",
      answer: `Do not worry, please contact us at ${createMailLink()}. \nTell me the email when you purchased the template and the datetime of your purchase, and I'll be happy to assist you in recovering your license key.`,
      category: "License",
    },
  ];