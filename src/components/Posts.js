import React from "react";
import "./Post.css";
import Post from "./Post";
import cs1 from '../cs1.png';

import ff1 from '../ff1.png';



const Posts = () => {


    const blogPosts = [
        {
        title: "The Dark Side of Digital Age: Cyber Spying and Its Tools",
        body: ` 

        In the labyrinthine world of digital technology, where data is the new gold and safeguarding it is akin to a modern-day crusade, cyber spying has emerged as a chilling reality. This shadowy practice isn't just confined to rogue hackers in dimly lit basements; even governments and security companies are implicated, using sophisticated tools that blur the line between protection and invasion.
        
        Imagine an invisible intruder slipping into your device, unnoticed like a phantom. This is no ordinary trespasser but a piece of malicious malware or spyware installed by cybercriminals or even state-sponsored actors. It's akin to finding out that your home has been bugged - only this time, it's your digital abode under surveillance.
        
        One such notorious toolset was revealed in the leaked 'Ant Catalog' from the National Security Agency (NSA) around 2008. This catalog reads like an Orwellian nightmare with devices that could be straight out of a James Bond movie. 
        
        Among these tools is something known as a passive RF (Radio Frequency), retro ultra-high frequency reflector - tiny electronic devices requiring only microamps of power. They sit silently without radiating any RF energy, waiting for their cue like sleeper agents in enemy territory.
        
        Then there are audio-based RF retro-reflectors that provide room audio from targeted spaces using radar and basic post-processing. Imagine having an unseen ear in your room listening to every word you utter! To make this work, someone needs to send a focused beam of radio frequency energy targeted at that retro-reflector from some distance away – much like shining a spotlight on an actor on stage while sitting hidden amidst the audience.
        
        The chilling efficiency of these tools underscores how our private spaces have become porous in this digital age where boundaries are increasingly blurred. But awareness can be our first line of defense against such intrusions.
        
        It’s essential to keep your devices updated with the latest security patches and be cautious about the apps you install. Be wary of unsolicited emails or messages containing links, as these could be phishing attempts to install spyware on your device.
        
        Remember, in this digital age, vigilance is not just a virtue but a necessity. The battle against cyber spying is an ongoing one, and every user needs to be an active participant. It's like being part of a neighborhood watch - only this time, the neighborhood is online.
        
        So if you are alone in your room thinking you're indeed alone, remember there might be unseen ears listening. This isn't meant to scare you but to make you aware because awareness is the first step towards prevention.
        
        Share your thoughts below on how we can better protect ourselves in this digital age from such intrusions. Let's learn from each other because together we stand stronger against such invisible threats!
        
        To your safety`
        
        ,
        author: "Lawrie Student CSU - Masters of Cyber Security - 24Jan24",
        blogImg:
            cs1,
        },
        {
        title: "Data Structure ",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        author: "Lawrie Student CSU - Masters of Cyber Security",
        blogImg:
            ff1,
        },
        {
        title: "Algorithm",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        author: "Lawrie Student CSU - Masters of Cyber Security",
        blogImg:
            "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
        },
        {
        title: "Computer Network",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        author: "Lawrie Student CSU - Masters of Cyber Security",
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