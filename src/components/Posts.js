import React from "react";
import "./Post.css";
import Post from "./Post";
import cs1 from '../ff4.png';

import ff1 from '../ff1.png';



const Posts = () => {


    const blogPosts = [
        {
        title: "The Dark Side of Gold: Financial Crimes and How to Combat Them",
        body: ` 
        As you read this, you might be wearing a gold ring or watch, or perhaps there's a gleaming gold ornament on your desk. Gold - it conjures images of luxury, wealth, and beauty. But have you ever considered the darker side of this precious metal? 

        Gold is not just an adornment or investment; it can also be a tool for financial crime. Its high and stable value, universal acceptance as currency, ease of exchangeability, and often anonymous transactions make it an attractive option for people who have nefarious intentions.
        
        Imagine the lush rainforests of South America being razed to mine gold illegally. Or consider the child laborers in Africa forced into dangerous mines to extract this precious metal. These are some of the grim realities behind illegal gold mining – activities that fuel corruption, human rights abuses, and environmental devastation.
        
        Moreover, these illegally mined resources often end up funding organized crime groups or even terrorist organizations worldwide. According to a 2015 report by FATF (Financial Action Task Force) and APG (Asia/Pacific Group on Money Laundering), "Gold markets often operate with cash payment... offering anonymity due to the difficulty of tracing it back to its place of production."
        
        So how do we combat these financial crimes linked with gold?
        
        The first step is formalizing all actors along the supply chain. This means ensuring that everyone involved in mining, processing, selling, and buying gold operates within legal frameworks.
        
        Secondly, countries need robust Anti-Financial Crime (AFC) legislation and surveillance mechanisms aligned with FATF recommendations. This would help identify suspicious transactions related to gold trading more effectively.
        
        Thirdly – collaboration is key! Countries should share information and intelligence about potential threats associated with gold-related financial crimes.
        
        Finally yet importantly - companies dealing in minerals must take responsibility too! They should apply responsible mineral supply chain management as per the OECD's guidance. This involves due diligence that traces minerals back to their origin, ensuring they are not linked with conflict or illegal activities.
        
         while gold continues to be a symbol of wealth and prosperity, it's crucial for us to be aware of its darker side. By implementing stricter regulations, enhancing international cooperation, and promoting responsible business practices, we can ensure that our love for gold doesn't come at an unacceptable cost.
        
        So next time you admire a piece of gold jewelry or consider investing in this precious metal - remember the power you hold. Ask questions about where your gold comes from and choose responsibly sourced products. Together, we can make a difference and help combat financial crimes associated with gold.
        
        Share your thoughts below on how we can further strengthen these measures or if you have any experiences related to this issue. Looking forward to hearing your insights!
        
        To a more ethical future,
        
        Lawrie`
        
        ,
        author: "Lawrie, MFraud&FinCrime,CAMS,CAMS-Audit",
        blogImg:
            cs1,
        },
        {
        title: "Fraud Topic",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        author: "Lawrie, MFraud&FinCrime,CAMS,CAMS-Audit",
        blogImg:
            ff1,
        },
        {
        title: "Fraud Topic",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        author: "Lawrie, MFraud&FinCrime,CAMS,CAMS-Audit",
        blogImg:
            "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
        },
        {
        title: "Fraud Topic",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        author: "Lawrie, MFraud&FinCrime,CAMS,CAMS-Audit",
        imgUrl:
            "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
        },
    ];
    return (
        <div className="posts-container">
        {blogPosts.map((post, index) => (
            <Post key={index} index={index} post={post} />
        ))}
        </div>
    );
    };
    export default Posts;