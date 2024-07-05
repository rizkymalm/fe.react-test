import { Box, Input, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import palette from "../themes/palette";
import { useState } from "react";

type Props = {
  multiple: Boolean;
  searchable?: Boolean;
  theme?: "dark" | "light";
};

const Wrapper = styled("div")`
  padding: 4px;
  line-height: 1.5;
  display: flex;
  border: 1px solid ${palette.grey[500]};
  background: #ffffff;
  border-radius: 4px;
  width: 100%;
  max-width: 100%;
  flex-wrap: wrap;
`;

const DropdownSearch = ({
  multiple = true,
  searchable,
  theme = "dark",
}: Props) => {
  const SelectedValue = styled("div")`
    display: flex;
    align-items: center;
    height: 40px;
    margin: 2px;
    line-height: 22px;
    background-color: ${theme === "dark" ? palette.dark.lighter : "#fafafa"};
    color: ${theme === "dark" ? "white" : palette.dark.main};
    border: #e8e8e8;
    border-radius: 5px;
    box-sizing: content-box;
    padding: 0 4px 0 10px;
    outline: 0;
    overflow: hidden;
    &:focus {
      border-color: #40a9ff;
      background-color: #e6f7ff;
    }
    & span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    & svg {
      font-size: 12px;
      cursor: pointer;
      padding: 4px;
    }
  `;

  const Listbox = styled("ul")`
    width: 300px;
    margin: 2px 0 0;
    padding: 0;
    position: absolute;
    list-style: none;
    background-color: ${theme === "dark" ? palette.dark.main : "#ffffff"};
    overflow: auto;
    max-height: 250px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 1;
    & li {
      padding: 5px 12px;
      display: flex;
      & span {
        flex-grow: 1;
        color: ${theme === "dark" ? "#ffffff" : palette.dark.light};
      }
    }
    & li[aria-selected="true"] {
      background-color: #ffffff;
      font-weight: 600;
    }
    & li:hover {
      background: ${theme === "dark" ? palette.dark.light : palette.grey[200]};
    }
    & svg {
      color: ${palette.primary.main};
    }
  `;
  const [focus, setFocus] = useState<boolean>(false);
  const [filteredItems, setFilteredItems] = useState(optionItems);
  const [searchText, setSearchText] = useState("");
  const [selectedIndex, setSelectedIndex] = useState<any>([]);
  const handleSearchChange = (event: any) => {
    if (searchable) {
      setSearchText(event.target.value.toLowerCase());
      const searchTerms = event.target.value.toLowerCase().split(/\s+/);
      const filtered = optionItems.filter((film) => {
        const filmTitleLower = film.label.toLowerCase();
        return searchTerms.every((term: any) => filmTitleLower.includes(term));
      });
      setFilteredItems(filtered);
    }
  };
  const handleSelectItem = async (value: Number) => {
    if (multiple) {
      if (selectedIndex.indexOf(value) === -1) {
        setSelectedIndex((prevState: any) => [...prevState, value]);
        setSearchText("");
        // setFocus(false);
        setFilteredItems(optionItems);
      }
    } else {
      if (selectedIndex.length === 0) {
        if (selectedIndex.indexOf(value) === -1) {
          setSelectedIndex((prevState: any) => [...prevState, value]);
          setSearchText("");
          setFocus(false);
          setFilteredItems(optionItems);
        }
      }
    }
  };
  const handleDeleteSelected = (index: Number) => {
    setSelectedIndex((prevState: any) =>
      prevState.filter((item: any) => item !== index)
    );
  };
  return (
    <Box p={1}>
      <Wrapper
        style={{ background: theme === "dark" ? palette.dark.main : "white" }}
      >
        {selectedIndex.map((data: any) => (
          <SelectedValue>
            {optionItems[data - 1].label}
            <CloseIcon onClick={() => handleDeleteSelected(data)} />
          </SelectedValue>
        ))}
        <Input
          onChange={handleSearchChange}
          value={searchText}
          onFocus={() => setFocus(true)}
          sx={{
            color: theme === "dark" ? "#ffffff" : palette.dark.main,
          }}
        />
      </Wrapper>
      {focus && (
        <Listbox>
          {filteredItems.map((data, index) => (
            <li
              key={index}
              onClick={() => handleSelectItem(data.value)}
              style={{
                cursor:
                  selectedIndex.indexOf(data.value) !== -1
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              <span>{data.label}</span>
              {selectedIndex.indexOf(data.value) !== -1 && (
                <CheckIcon fontSize="small" />
              )}
            </li>
          ))}
        </Listbox>
      )}
    </Box>
  );
};

const optionItems = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "This is option 3", value: 3 },
  { label: "This is option 4", value: 4 },
  { label: "Option 5 after option 4", value: 5 },
  { label: "Long text option 6", value: 6 },
  { label: "Long long text option 7", value: 7 },
  { label: "this is long option 8", value: 8 },
  { label: "this is very long text for option 9", value: 9 },
  { label: "Back to short 10", value: 10 },
  { label: "Option 11 is the longest option ever", value: 11 },
  { label: "but option 12 is the most longest", value: 12 },
  { label: "Option 13 is the longest option ever", value: 13 },
];

export default DropdownSearch;
