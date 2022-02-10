import React, {useEffect, useState} from 'react';
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

    const [contacts, setContacts] = useState(contactsArray);

    const removeContact = (contactId) => {
        console.log(`Remove Contact Function with id ${contactId}`);
        let newContactArray = contacts.filter(contact => contact.id !== contactId);
        setContacts(newContactArray);
    }

    return (
        <div>
            <Search/>

            <ContactListWrapper>
                {
                    contacts.map(contact => (
                        <ContactItem
                            key={contact.id}
                            id={contact.id}
                            name={`${contact.name} ${contact.surname}`}
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