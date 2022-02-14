import React, {useEffect, useMemo, useState} from 'react';
import ContactItem from "../ContactItem/ContactItem";
import Search from "../Search/Search";
import styled from 'styled-components';
import LargeTitle from "../../UI/LargeTitle/LargeTitle";
import NoContactsError from "../NoContactsError/NoContactsError";

const ContactListWrapper = styled.div`
    display:flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
`


const ContactList = ({contacts, setContacts, setSelectedContactId, removeContactFunction}) => {

    const [searchQuery, setSearchQuery] = useState("");


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
            {
                searchedContacts.length
                    ?
                    <>
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
                                        removeContact={removeContactFunction}
                                        setSelectedContactId={setSelectedContactId}
                                    />
                                ))
                            }
                        </ContactListWrapper>
                    </>
                    :
                    <NoContactsError searchQuery={searchQuery}/>


            }


        </div>
    );
};

export default ContactList;