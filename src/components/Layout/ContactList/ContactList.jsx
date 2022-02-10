import React, {useEffect, useMemo, useState} from 'react';
import ContactItem from "../ContactItem/ContactItem";
import Search from "../Search/Search";
import styled from 'styled-components';

const ContactListWrapper = styled.div`
    display:flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
`


const ContactList = ({contactsArray}) => {

    const [contacts, setContacts] = useState([
        {
            id: 1,
            name: 'Ruslan Balashov',
            avatarUrl: "https://sun9-10.userapi.com/s/v1/ig2/RL0Wx20a1skO0buTQeNRgSiq46Ujt92GyUNInixRSDmf5CFtHFf5k-Q67Za66MVzMJ8kg5d5EKfvj1tB73Py-YFD.jpg?size=50x50&quality=95&crop=26,0,2533,2533&ava=1",
            status: '3D Designer',
            email: 'reslan.balashov@gmail.com',
            isOnline: true,
            phone: '719234521',
            social: {
                facebook: 'https://facebook.com/ruslanbalashov',
                telegram: '@balashov',
                linkedin: 'https://linkedin.com/ruslanbalashov',
                google: 'https://google.com/ruslanbalashov'
            }
        },
        {
            id: 2,
            name: 'Alex Holodniy',
            avatarUrl: "https://sun9-40.userapi.com/s/v1/ig2/6iWzUVDiR3PrGSo6U2kFLxd_m4lJmpuNovcl7mjGzWM0W95jbQ9x_4o4w3Mrb33V7As4WGP6cjZPrZT1Uwp1DJ_G.jpg?size=50x50&quality=96&crop=132,237,933,933&ava=1",
            status: 'Python Developer',
            email: 'alex.holodniy@gmail.com',
            isOnline: false,
            phone: '219945521',
            social: {
                facebook: 'https://facebook.com/Holodniy',
                telegram: '@holodniy',
                linkedin: 'https://linkedin.com/Holodniy',
                google: 'https://google.com/Holodniy'
            }
        },
        {
            id: 3,
            name: 'Ruslan Ivanov',
            avatarUrl: "https://sun9-84.userapi.com/s/v1/ig2/Sr8zhzQIPqqu_GCsjiMWK5n8F1VGe1WUpDpBMytqDaYi2PEI2vjlAt3DeqrUKW1JaOzacELOkoB6tVqQD02VKiBM.jpg?size=50x50&quality=95&crop=117,0,960,960&ava=1",
            status: 'Illustrator',
            email: 'Ruslan.Ivanov@gmail.com',
            isOnline: false,
            phone: '12345667',
            social: {
                facebook: 'https://facebook.com/Holodniy',
                telegram: '@holodniy',
                linkedin: 'https://linkedin.com/Holodniy',
                google: 'https://google.com/Holodniy'
            }
        }
    ])
    const [searchQuery, setSearchQuery] = useState("");

    const removeContact = (contactId) => {
        console.log(`Remove Contact Function with id ${contactId}`);
        let newContactArray = contacts.filter(contact => contact.id !== contactId);
        setContacts(newContactArray);
    }

    // Нужно возврощать массив и его в цикл списка засунуть

    const searchedContacts = useMemo(() => {
        if (searchQuery) {
            let filteredContactsArray = contacts.filter(contact => contact.name.toLowerCase().startsWith(searchQuery.toLowerCase()));
            return filteredContactsArray;
        }
        return contacts;
    }, [contacts, searchQuery]);

    return (
        <div>
            <Search setSearchQueryState={setSearchQuery}/>

            <ContactListWrapper>
                {
                    searchedContacts.map(contact => (
                        <ContactItem
                            key={contact.id}
                            id={contact.id}
                            name={`${contact.name}`}
                            isOnline={true}
                            avatarUrl={contact.avatarUrl}
                            status={contact.status}
                            removeContact={removeContact}
                        />
                    ))
                }
            </ContactListWrapper>

        </div>
    );
};

export default ContactList;