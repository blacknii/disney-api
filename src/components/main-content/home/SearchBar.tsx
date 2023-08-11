import { Grid, TextField, Button } from "@mui/material";

interface SearchBarProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ setSearchValue }: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.namedItem(
      "search-bar"
    ) as HTMLInputElement;
    setSearchValue(inputValue.value);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Grid container spacing={2} padding={2} columns={{ xs: 1, sm: 5 }}>
        <Grid item xs={4}>
          <TextField fullWidth name="search-bar" label="Character name" />
        </Grid>
        <Grid item xs={1}>
          <Button
            fullWidth
            variant="contained"
            type="submit"
            style={{ height: "100%" }}
          >
            SEARCH
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchBar;
