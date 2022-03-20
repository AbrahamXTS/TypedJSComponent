import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function TypedJS({ wordList }) {
	const el = useRef(null);

	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: wordList,
			loop: true,
		});

		return () => {
			typed.destroy();
		};
	}, []);

	return <span ref={el}></span>;
}
