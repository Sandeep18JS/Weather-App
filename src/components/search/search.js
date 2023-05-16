import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { getCities } from "../../api.js";

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue, loadedOptions) => {
        try {
            const options = await getCities(inputValue);

            return {
                options,
            };

        } catch (err) {
            console.error(err);
            return { options: [] };
        }
    };

        const handleOnChange =(searchData)=>{
            setSearch(searchData)
            onSearchChange(searchData)
        
    };

    return (
        <AsyncPaginate
            placeholder="Search for the city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
};


export default Search;

 