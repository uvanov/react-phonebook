import React, {useEffect, useMemo, useState} from 'react';
import ContactItem from "../ContactItem/ContactItem";
import Search from "../Search/Search";
import styled from 'styled-components';
import LargeTitle from "../../UI/LargeTitle/LargeTitle";

const ContactListWrapper = styled.div`
    display:flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
`


const ContactList = ({contacts, setContacts, setSelectedContactId}) => {

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
            {
                searchedContacts.length
                ?
                <>
                    <Search setSearchQueryState={setSearchQuery}/>
                    <ContactListWrapper>
                        {
                            searchedContacts.map(contact => (
                                <ContactItem
                                    key={contact.id}
                                    contactId={contact.id}
                                    contactName={`${contact.name}`}
                                    isOnline={true}
                                    avatarUrl={contact.avatarUrl}
                                    contactStatus={contact.status}
                                    removeContact={removeContact}
                                    setSelectedContactId={setSelectedContactId}
                                />
                            ))
                        }
                    </ContactListWrapper>
                </>
                :
                <LargeTitle text={"You don't have any contacts."}/>

            }


        </div>
    );
};

export default ContactList;