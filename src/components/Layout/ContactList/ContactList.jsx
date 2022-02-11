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


const ContactList = ({contacts, setContacts}) => {

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
                </>
                :
                <LargeTitle text={"You don't have any contacts."}/>

            }


        </div>
    );
};

export default ContactList;