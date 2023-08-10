import { useState, useEffect } from "react";
import { Rating } from "@mui/material";

import { addFavorite, removeFavorite } from "../../redux/favoritesIdsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const FavoriteToggleIcon = ({ id }: { id: number }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favoritesIds);
  const isFavorite = favorites.includes(id);
  const initialValue = isFavorite ? 1 : 0;
  const [value, setValue] = useState<number>(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleRatingChange = (
    _event: React.SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    const newFavoriteValue = newValue === 1;
    setValue(newFavoriteValue ? 1 : 0);
    if (newFavoriteValue) {
      dispatch(addFavorite(id));
    } else {
      dispatch(removeFavorite(id));
    }
  };

  return (
    <Rating
      name={`star-rating-${id}`}
      max={1}
      value={value}
      onChange={handleRatingChange}
    />
  );
};

export default FavoriteToggleIcon;
