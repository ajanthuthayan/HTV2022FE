import { useEffect, useState } from 'react'
import Select from 'react-select'
import { getUserInformation } from '../../../utils/firebase.utils'
export default function SearchBar() {
    const [users, setUsers] = useState([]);

    const customStyles = {
        option: provided => ({
            ...provided,
            color: 'black'
        }),
    }

    useEffect(() => {
        const getUserInfo = async () => {
            var currentUsers = [];
            const res = await getUserInformation();
            res.map((account) => {
                console.log(account.displayName)
                currentUsers.push({ value: account.displayName, label: account.displayName, isDisabled: false })
            })
            setUsers(currentUsers);    
            console.log(res)
        }

        getUserInfo();

    }, [])

    const getSelected = (option) => {
        // Do something with the selected option
        console.log(option)
    }

    return(
        <div
            style={{
                width: '80%',
                margin: 'auto'
            }}
        >
            <Select 
                options={users}
                styles={customStyles}
                placeholder='Search'
                onChange={(option) => getSelected(option.value)}
            />

        </div>
    )
}