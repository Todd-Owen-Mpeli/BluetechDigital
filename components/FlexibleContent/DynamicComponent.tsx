// Imports
import {FC} from "react";
import dynamic from "next/dynamic";
import {IDynamicComponentProps} from "@/types/components";

const DynamicComponent: FC<IDynamicComponentProps> = ({
	componentName,
	...props
}) => {
	// Finds Component Dir Path
	let Component = dynamic(() => import(`../${componentName}`));

	return (
		<>
			<Component {...props} />
		</>
	);
};

export default DynamicComponent;
