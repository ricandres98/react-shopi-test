import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    const itemValue = JSON.parse(localStorage.getItem(itemName));

    if (itemValue !== null) {
      setItem(itemValue);
    } else {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
    }
  }, [itemName]);

	const saveItem = (payload) => {
		setItem(payload);
		localStorage.setItem(itemName, JSON.stringify(payload));
	}

  return {
    item,
		saveItem
  };
}

export default useLocalStorage;
