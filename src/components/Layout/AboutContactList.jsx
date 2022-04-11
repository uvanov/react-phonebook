import React from 'react';
import AboutContactItem from "../AboutContactItem/AboutContactItem";
import SocialList from "../SocialList/SocialList";

const AboutContactList = ({contactInformation}) => {
    return (
        <>
            {
                Object.keys(contactInformation).map((key, index) => {
                    let value = contactInformation[key];
                    let children;

                    /*
                        Here is check, if value's type if object (now object is only social links list)
                        If it's object - we return "array" with IconButtons wrapper with <a> - tags.
                        If it isn't - just a value (expects it's a text)
                     */

                    if(typeof value === "object"){
                        children = <SocialList socialLinks={value}/>
                    } else {
                        children = value;
                    }

                    return (
                        <AboutContactItem key={index} title={key} children={children}/>
                    )
                })
            }
        </>
    );
};

export default AboutContactList;