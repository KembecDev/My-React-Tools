import React, { useState, useEffect } from "react";

function DebouncedInput() {
	const [inputValue, setInputValue] = useState("");
	const [debouncedValue, setDebouncedValue] = useState("");

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedValue(inputValue);
		}, 500);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [inputValue]);

	const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		setInputValue(event.target.value);
	};

	return (
		<div>
			<input type='text' value={inputValue} onChange={handleChange} />
			<p>Debounced value: {debouncedValue}</p>
		</div>
	);
}

export default DebouncedInput;
